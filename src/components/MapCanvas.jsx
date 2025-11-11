import React from "react";
import GoogleMapReact from "google-map-react";

const Marker = ({ text }) => (
  <div
    style={{
      color: "white",
      padding: "6px 8px",
      borderRadius: "50%",
      textAlign: "center",
      transform: "translate(-50%, -50%)",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="a"
      data-name="Layer 1"
      width="30"
      height="40"
      viewBox="0 0 175.368 241.193"
    >
      <path
        d="M87.684,0C38.943,0,0,37.435,0,84.417,0,156.776,87.684,241.193,87.684,241.193c0,0,87.684-85.674,87.684-156.776C175.368,37.435,136.425,0,87.684,0ZM127.173,107.568h-13.921v-20.054c0-3.151-2.554-5.704-5.704-5.704s-5.705,2.553-5.705,5.704v20.026h-58.05v-29.253h13.927v4.816c0,3.15,2.555,5.703,5.705,5.703s5.704-2.554,5.704-5.704v-22.381h23.328v.005h34.716v46.842Z"
        fill="#161616"
      />
    </svg>
  </div>
);

export const MapCanvas = ({ latitude, longitude, zoom = 15 }) => {
  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const center = {
    lat: latitude || 28.6139,
    lng: longitude || 77.209,
  };

  return (
    <div style={{ height: "400px", width: "100%" }} className="grayscale">
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
};
