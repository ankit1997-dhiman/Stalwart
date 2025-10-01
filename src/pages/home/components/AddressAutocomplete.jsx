import { Input, message } from "antd";
import React, { useEffect, useRef, useState } from "react";

/**
 * Simple loader for Google Maps JS (places). Returns `loaded` boolean.
 * Accepts full API key string (from env).
 */
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
    script.onerror = (e) => {
      message.error("Failed to load Google Maps script", e);
    };
    document.head.appendChild(script);
  }, [apiKey]);

  return loaded;
}

/**
 * AddressAutocomplete component
 */
export default function AddressAutocomplete({
  value,
  onChange,
  apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  onSelect,
  country = "au",
}) {
  const loaded = useGoogleMaps(apiKey);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [finalized, setFinalized] = useState(false); // ✅ prevent dropdown after selection

  const debounceRef = useRef(null);
  const mountedRef = useRef(true);
  const placesServiceRef = useRef(null);
  const suppressFetchRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  function getPlacesService() {
    if (!placesServiceRef.current) {
      placesServiceRef.current = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
    }
    return placesServiceRef.current;
  }

  // fetch suggestions with debouncing
  useEffect(() => {
    if (!loaded) return;

    // 🚫 don’t fetch if finalized (after selection)
    if (finalized) return;

    // 🚫 skip once after selecting
    if (suppressFetchRef.current) {
      suppressFetchRef.current = false;
      return;
    }

    if (!input.trim()) {
      setSuggestions([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    const value = input;

    debounceRef.current = setTimeout(() => {
      if (!mountedRef.current) return;

      const ac = new window.google.maps.places.AutocompleteService();
      ac.getPlacePredictions(
        {
          input: value,
          types: ["geocode"],
          componentRestrictions: { country },
        },
        (predictions, status) => {
          if (!mountedRef.current) return;
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
                            window.google.maps.places.PlacesServiceStatus.OK &&
                          place?.geometry?.location
                        ) {
                          resolve({
                            displayName: prediction.description,
                            placeId: prediction.place_id,
                            latitude: place.geometry.location.lat(),
                            longitude: place.geometry.location.lng(),
                            address:
                              place.formatted_address || prediction.description,
                          });
                        } else {
                          resolve(null);
                        }
                      }
                    );
                  })
              )
            ).then((results) => {
              if (!mountedRef.current) return;
              const valid = results.filter(Boolean);
              setSuggestions(valid);
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
    }, 300);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [input, loaded, country, finalized]);

  // keyboard navigation
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

  function handleSelect(suggestion) {
    const formatted = suggestion.displayName || suggestion.address || "";
    suppressFetchRef.current = true;
    setFinalized(true); // ✅ lock dropdown
    setInput(formatted);
    setSuggestions([]);

    if (onChange) onChange(formatted);
    if (onSelect) onSelect(suggestion);
  }

  useEffect(() => {
    if (value !== undefined) {
      setInput(typeof value === "string" ? value : value?.address || "");
    }
  }, [value]);

  return (
    <div style={{ position: "relative" }}>
      <Input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setSuggestions([]); // clear old list
          setFinalized(false); // ✅ user typed → unlock dropdown
          if (onChange) onChange(e.target.value);
        }}
        onKeyDown={onKeyDown}
        placeholder="Start typing an address..."
        className="!border-none !h-[50px] !font-moderat-medium !text-sm !outline-white !w-full"
      />

      {loading && !finalized && (
        <div style={{ position: "absolute", top: "100%", left: 0, padding: 8 }}>
          loading...
        </div>
      )}

      {suggestions.length > 0 && !finalized && (
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
            maxHeight: 300,
            overflowY: "auto",
          }}
        >
          {suggestions.map((s, idx) => (
            <li
              id={`addr-option-${idx}`}
              key={s.placeId}
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
              <div className="font-moderat-medium text-sm ">
                {s.displayName}
              </div>
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
