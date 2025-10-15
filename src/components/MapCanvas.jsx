import React from "react";

export const MapCanvas = ({ latitude, longitude, zoom = 15 }) => {
  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY; // make sure this is in your .env
  //  const srcMap ={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDlVeyshe3C1OKXV1jNX4QPiHjXzikzqnY&q=${property?.latitude},${property?.longitude}&zoom=15`}

  const src = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${latitude},${longitude}&zoom=${zoom}`;

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <iframe
        title="Property Location"
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};
