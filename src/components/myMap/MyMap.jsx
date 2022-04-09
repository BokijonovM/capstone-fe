import React, { useState } from "react";
import "./style.css";
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MyMap() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <MapContainer
      center={[52.233334, 21.016666]}
      zoom={12}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="topright" />
    </MapContainer>
  );
}

export default MyMap;
