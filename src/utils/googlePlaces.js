// utils/googlePlaces.js

import { GET_ALL_SUBURBS } from "@/queries/suburbsQueries";
import { graphqlRequest } from "./graphqlRequest";

let googleLoaded = false;
let placesService = null;

/**
 * Loads Google Maps Places script if not already loaded.
 */
export const loadGoogleMapsScript = (apiKey) =>
  new Promise((resolve, reject) => {
    if (googleLoaded) return resolve();

    if (window.google?.maps?.places) {
      googleLoaded = true;
      return resolve();
    }

    const existing = document.getElementById("google-maps-script");
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", (e) => reject(e));
      return;
    }

    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      googleLoaded = true;
      resolve();
    };
    script.onerror = reject;

    document.head.appendChild(script);
  });

/**
 * Returns a cached instance of PlacesService.
 */
function getPlacesService() {
  if (!placesService && window.google) {
    placesService = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
  }
  return placesService;
}

/**
 * Fetches Google Places suggestions and details.
 */
export const fetchPlaceSuggestions = async (input, country = "au") => {
  if (!window.google || !input.trim()) return [];

  const ac = new window.google.maps.places.AutocompleteService();

  return new Promise((resolve) => {
    ac.getPlacePredictions(
      {
        input,
        types: ["geocode"],
        componentRestrictions: { country },
      },
      (predictions, status) => {
        if (
          status !== window.google.maps.places.PlacesServiceStatus.OK ||
          !Array.isArray(predictions)
        ) {
          return resolve([]);
        }

        const ps = getPlacesService();

        Promise.all(
          predictions.slice(0, 6).map(
            (prediction) =>
              new Promise((resolvePlace) => {
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
                      resolvePlace({
                        displayName: prediction.description,
                        placeId: prediction.place_id,
                        latitude: place.geometry.location.lat(),
                        longitude: place.geometry.location.lng(),
                        address:
                          place.formatted_address || prediction.description,
                      });
                    } else {
                      resolvePlace(null);
                    }
                  }
                );
              })
          )
        ).then((results) => {
          resolve(results.filter(Boolean));
        });
      }
    );
  });
};

// src/utils/fetchAllSuburbs.js
export const fetchAllSuburbs = async () => {
  try {
    const res = await graphqlRequest("/api/graphql",GET_ALL_SUBURBS);

    // Extract and deduplicate suburbs
    const suburbs =
      res?.data?.properties?.nodes
        ?.map((node) => node?.address?.postcode?.suburb)
        ?.filter((suburb) => suburb != null) || []; // Filter out null/undefined values

    // Return unique suburbs
    return [...new Set(suburbs)];
  } catch (error) {
    console.error("Error fetching all suburbs:", error);
    return []; // Return empty array on failure
  }
};
