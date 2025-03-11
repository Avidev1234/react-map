import React from "react";
import { xml2json } from "xml-js";

const FileUploader = ({ setKmlData }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const kmlText = e.target.result;
      const json = JSON.parse(xml2json(kmlText, { compact: true, spaces: 2 }));
      setKmlData(json);
    };
    reader.readAsText(file);
  };

  return <input type="file" accept=".kml" onChange={handleFileUpload} />;
};

export default FileUploader;
