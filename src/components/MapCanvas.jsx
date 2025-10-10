export const MapCanvas = ({ latitude, longitude, zoom = 15 }) => {
  const bbox = `${longitude - 0.001},${latitude - 0.001},${longitude + 0.001},${
    latitude + 0.001
  }`;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=carto-light&marker=${latitude},${longitude}`;

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <iframe
        title="Property Location"
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(100%) contrast(120%)" }}
      ></iframe>
    </div>
  );
};
