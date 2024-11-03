import { useState } from "react";
import pdfToText from "react-pdftotext";
import * as XLSX from "xlsx";

function PDFParserReact({ setParsedText }) {
  function isExcelFile(file) {
    const allowedExtensions = [
      "xls",
      "xlsx",
      "xlsm",
      "xlsb",
      "xltx",
      "xltm",
      "xlam",
    ];
    const fileExtension = file.name.split(".").pop().toLowerCase();
    console.log(fileExtension);
    return allowedExtensions.includes(fileExtension);
  }
  function extractText(event) {
    const file = event.target.files[0];
    console.log(file);
    if (isExcelFile(file)) {
      return handleXLSXFileUpload(event);
    }
    pdfToText(file)
      .then((text) => setParsedText(text))
      .catch((error) => console.error("Failed to extract text from pdf"));
  }

  const handleXLSXFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json(sheet);
      console.log(sheetData);
      setParsedText(sheetData);
    };

    reader.readAsBinaryString(file);
  };
  return (
    <div className="App">
      <header className="App-header">
        <input type="file" onChange={extractText} />
      </header>
    </div>
  );
}
export default PDFParserReact;
