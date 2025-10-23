import React from "react";
import GoogleMapReact from "google-map-react";
import logo from "@/assets/images/black-logo.png";

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

    <img src={logo} className="w-4 h-2"/>
  </div>
);

export const MapCanvas = ({ latitude, longitude, zoom = 15 }) => {
  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const center = {
    lat: latitude || 28.6139,
    lng: longitude || 77.2090,
  };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={center.lat} lng={center.lng} text="bhosdika" />
      </GoogleMapReact>
    </div>
  );
};





// import React from "react";

// export const MapCanvas = ({ latitude, longitude, zoom = 15 }) => {
//   const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY; // make sure this is in your .env
//   //  const srcMap ={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDlVeyshe3C1OKXV1jNX4QPiHjXzikzqnY&q=${property?.latitude},${property?.longitude}&zoom=15`}

//   const src = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${latitude},${longitude}&zoom=${zoom}`;

//   return (
//     <div style={{ width: "100%", height: "400px" }}>
//       <iframe
//         title="Property Location"
//         src={src}
//         width="100%"
//         height="100%"
//         style={{ border: 0 }}
//         allowFullScreen
//         loading="lazy"
//       ></iframe>
//     </div>
//   );
// };
