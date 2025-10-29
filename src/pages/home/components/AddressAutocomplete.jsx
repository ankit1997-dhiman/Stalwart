import React, { useEffect, useRef, useState } from "react";
import { Input, message } from "antd";
import { fetchAllSuburbs } from "@/utils/googlePlaces";

/* ----------------------------- Simple Debounce ----------------------------- */
function debounce(fn, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/* -------------------------- Google Maps Loader Hook ------------------------- */
function useGoogleMaps(apiKey) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!apiKey) {
      message.warning("Google Maps API key missing");
      return;
    }

    if (window.google && window.google.maps && window.google.maps.places) {
      setLoaded(true);
      return;
    }

    const id = "google-maps-script";
    if (document.getElementById(id)) {
      const check = setInterval(() => {
        if (window.google && window.google.maps && window.google.maps.places) {
          clearInterval(check);
          setLoaded(true);
        }
      }, 100);
      return () => clearInterval(check);
    }

    const script = document.createElement("script");
    script.id = id;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setLoaded(true);
    script.onerror = () => message.error("Failed to load Google Maps script");
    document.head.appendChild(script);
  }, [apiKey]);

  return loaded;
}

/* ---------------------------- Main Autocomplete ---------------------------- */
export default function AddressAutocomplete({
  value,
  onChange,
  onSelect,
  apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  country = "au",
  activeTab,
}) {
  const loaded = useGoogleMaps(apiKey);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [finalized, setFinalized] = useState(false);
  const [allSuburbs, setAllSuburbs] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const containerRef = useRef(null);

  const mountedRef = useRef(true);
  const placesServiceRef = useRef(null);
  const suppressFetchRef = useRef(false);

  // Detect clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ----------------------------- Mount Cleanup ----------------------------- */
  useEffect(() => {
    mountedRef.current = true;
    return () => (mountedRef.current = false);
  }, []);

  /* ----------------------- Google Places Service ----------------------- */
  function getPlacesService() {
    if (!placesServiceRef.current && window.google) {
      placesServiceRef.current = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
    }
    return placesServiceRef.current;
  }

  /* ---------------------- Fetch All Suburbs on Mount ---------------------- */
  useEffect(() => {
    const loadSuburbs = async () => {
      try {
        const suburbs = await fetchAllSuburbs();
        setAllSuburbs(suburbs || []);
      } catch (err) {
        console.error("Failed to load suburbs:", err);
      }
    };
    loadSuburbs();
  }, []);

  /* ---------------------- Clear Input/Suggestions on Tab Change ---------------------- */
  useEffect(() => {
    setInput("");
    setSuggestions([]);
    setActiveIndex(-1);
    setFinalized(false);
  }, [activeTab]);

  /* ------------------------ Debounced Suggestion Fetch ------------------------ */
  useEffect(() => {
    if (!input.trim()) {
      setSuggestions([]);
      setLoading(false);
      return;
    }

    if (finalized) return;
    if (suppressFetchRef.current) {
      suppressFetchRef.current = false;
      return;
    }

    setLoading(true);

    const runAutocomplete = debounce(() => {
      if (activeTab === "SELL") {
        // -------------------- GOOGLE PLACES --------------------
        if (!loaded) return;

        const ac = new window.google.maps.places.AutocompleteService();
        ac.getPlacePredictions(
          {
            input,
            types: ["geocode"],
            componentRestrictions: { country },
          },
          (predictions, status) => {
            if (
              status === window.google.maps.places.PlacesServiceStatus.OK &&
              Array.isArray(predictions)
            ) {
              const limited = predictions.slice(0, 6);
              const ps = getPlacesService();

              Promise.all(
                limited.map(
                  (prediction) =>
                    new Promise((resolve) => {
                      ps.getDetails(
                        {
                          placeId: prediction.place_id,
                          fields: ["geometry", "formatted_address", "name"],
                        },
                        (place, status2) => {
                          if (
                            status2 ===
                              window.google.maps.places.PlacesServiceStatus
                                .OK &&
                            place?.geometry?.location
                          ) {
                            resolve({
                              displayName: prediction.description,
                              placeId: prediction.place_id,
                              latitude: place.geometry.location.lat(),
                              longitude: place.geometry.location.lng(),
                              address:
                                place.formatted_address ||
                                prediction.description,
                            });
                          } else resolve(null);
                        }
                      );
                    })
                )
              ).then((results) => {
                if (!mountedRef.current) return;
                setSuggestions(results.filter(Boolean));
                setActiveIndex(-1);
                setLoading(false);
              });
            } else {
              setSuggestions([]);
              setActiveIndex(-1);
              setLoading(false);
            }
          }
        );
      } else {
        // -------------------- SUBURBS --------------------
        const filtered = allSuburbs
          .filter((s) => s && s.toLowerCase().includes(input.toLowerCase())) // ✅ filter out nulls
          .slice(0, 6)
          .map((s) => ({ displayName: s }));
        setSuggestions(filtered);
        setActiveIndex(-1);
        setLoading(false);
      }
    }, 300);

    runAutocomplete();
  }, [input, loaded, activeTab, allSuburbs]);

  /* ------------------------------ Handle Keys ------------------------------ */
  const onKeyDown = (e) => {
    if (!suggestions.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const sel = suggestions[activeIndex >= 0 ? activeIndex : 0];
      if (sel) handleSelect(sel);
    } else if (e.key === "Escape") {
      setSuggestions([]);
    }
  };

  /* --------------------------- Handle Selection --------------------------- */
  function handleSelect(suggestion) {
    const formatted = suggestion.displayName || suggestion.address || "";
    suppressFetchRef.current = true;
    setFinalized(true);
    setInput(formatted);
    setSuggestions([]);
    if (onChange) onChange(formatted);
    if (onSelect) onSelect(suggestion);
  }

  /* --------------------------- Sync External Value --------------------------- */
  useEffect(() => {
    if (value !== undefined) {
      setInput(typeof value === "string" ? value : value?.address || "");
    }
  }, [value]);

  /* ----------------------------- Render UI ----------------------------- */
  return (
    <div style={{ position: "relative", width: "100%" }} ref={containerRef}>
      <Input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setSuggestions([]);
          setFinalized(false);
          if (onChange) onChange(e.target.value);
        }}
        onFocus={() => setShowSuggestions(true)}
        onKeyDown={onKeyDown}
        className="!border-none !h-[50px] !text-[14px] !outline-white !w-full !rounded-none !font-moderat-regular placeholder:font-moderat-regular !bg-white pl-6"
        placeholder="Enter address or suburb"
      />

      {loading && !finalized && (
        <div style={{ position: "absolute", top: "100%", left: 0, padding: 8 }}>
          Loading...
        </div>
      )}

      {showSuggestions && suggestions.length > 0 && !finalized && (
        <ul
          id="address-suggestions"
          role="listbox"
          style={{
            position: "absolute",
            zIndex: 1000,
            top: "100%",
            left: 0,
            right: 0,
            marginTop: 6,
            background: "white",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            borderRadius: 8,
            listStyle: "none",
            padding: 0,
            maxHeight: 250,
            overflowY: "auto",
          }}
        >
          {suggestions.map((s, idx) => (
            <li
              key={s.placeId || s.displayName}
              role="option"
              aria-selected={idx === activeIndex}
              onMouseDown={(e) => {
                e.preventDefault();
                handleSelect(s);
              }}
              onMouseEnter={() => setActiveIndex(idx)}
              style={{
                padding: "10px 12px",
                cursor: "pointer",
                background: idx === activeIndex ? "#f0f6ff" : "white",
                borderBottom: "1px solid #eee",
              }}
            >
              <div className="font-moderat-medium text-sm">{s.displayName}</div>
              {s.address && (
                <div
                  className="font-moderat-light text-xs"
                  style={{ fontSize: 12, color: "#666" }}
                >
                  {s.address}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
