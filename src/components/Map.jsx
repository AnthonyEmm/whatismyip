import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import React from "react";

export default function Map({ position }) {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>My location.</Popup>
      </Marker>
    </MapContainer>
  );
}
