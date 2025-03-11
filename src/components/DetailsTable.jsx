import React from "react";

const DetailsTable = ({ kmlData }) => {
  if (!kmlData) return null;

  const placemarks = kmlData.kml.Document.Placemark || [];
  let totalLength = 0;

  placemarks.forEach((placemark) => {
    if (placemark.LineString) {
      const coords = placemark.LineString.coordinates._text.trim().split(" ");
      totalLength += coords.length - 1;
    }
  });

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Element Type</th>
          <th>Total Length</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>LineString</td>
          <td>{totalLength}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DetailsTable;
