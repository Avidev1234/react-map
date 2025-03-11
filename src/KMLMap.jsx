import React from "react";
import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const KMLMap = ({ kmlData }) => {
  if (!kmlData) return null;

  const placemarks = kmlData.kml.Document.Placemark || [];
  const lineStrings = [];
  const points = [];

  placemarks.forEach((placemark) => {
    if (placemark.LineString) {
      const coords = placemark.LineString.coordinates._text.trim().split(" ");
      const latLngs = coords.map((coord) => {
        const [lon, lat] = coord.split(",").map(Number);
        return [lat, lon];
      });
      lineStrings.push(latLngs);
    } else if (placemark.Point) {
      const [lon, lat] = placemark.Point.coordinates._text.split(",").map(Number);
      points.push([lat, lon]);
    }
  });

  return (
    <MapContainer center={[20, 77]} zoom={4} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {lineStrings.map((line, idx) => (
        <Polyline key={idx} positions={line} color="blue" />
      ))}
      {points.map((point, idx) => (
        <Marker key={idx} position={point}>
          <Popup>Point</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default KMLMap;
