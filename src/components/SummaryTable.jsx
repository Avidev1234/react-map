import React from "react";

const SummaryTable = ({ kmlData }) => {
  if (!kmlData) return null;

  const placemarks = kmlData.kml.Document.Placemark || [];
  const elementTypes = {};

  placemarks.forEach((placemark) => {
    const type = placemark.LineString ? "LineString" : "Point";
    elementTypes[type] = (elementTypes[type] || 0) + 1;
  });

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Element Type</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(elementTypes).map(([type, count]) => (
          <tr key={type}>
            <td>{type}</td>
            <td>{count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SummaryTable;
