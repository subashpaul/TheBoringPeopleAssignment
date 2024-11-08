import { useState } from "react";
import pdfToText from "react-pdftotext";
import * as XLSX from "xlsx";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";

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
    return allowedExtensions.includes(fileExtension);
  }
  function extractText(event) {
    const file = event.target.files[0];
    if (isExcelFile(file)) {
      return handleXLSXFileUpload(event);
    }
    pdfToText(file)
      .then((text) => {
        setParsedText(text);
      })
      .catch((_) => console.error("Failed to extract text from pdf"));
  }

  const handleXLSXFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json(sheet);
      setParsedText(sheetData);
    };

    reader.readAsBinaryString(file);
  };
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="spreadsheet">Choose Spreadsheet</Label>
      <div className="flex gap-2">
        <div>
          <Input
            id="spreadsheet"
            type="file"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,application/pdf"
            onChange={extractText}
          />
          <p className="text-xs italic text-red-400 mt-1">
            *Check the format in the sample spreadsheet
          </p>
        </div>

        <a href="/sales.xlsx" download className="underline">
          Sample_Spreadsheet
        </a>
      </div>
    </div>
  );
}
export default PDFParserReact;
