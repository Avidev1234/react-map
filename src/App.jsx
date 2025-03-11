import React, { useState } from "react";
import FileUploader from "./components/FileUploader";
import SummaryTable from "./components/SummaryTable";
import DetailsTable from "./components/DetailsTable";
import KMLMap from "./components/KMLMap";

const App = () => {
  const [kmlData, setKmlData] = useState(null);
  const [showSummary, setShowSummary] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <h1>KML File Viewer</h1>
      <FileUploader setKmlData={setKmlData} />
      <button onClick={() => setShowSummary(!showSummary)}>Summary</button>
      <button onClick={() => setShowDetails(!showDetails)}>Details</button>

      {showSummary && <SummaryTable kmlData={kmlData} />}
      {showDetails && <DetailsTable kmlData={kmlData} />}
      <KMLMap kmlData={kmlData} />
    </div>
  );
};

export default App;






