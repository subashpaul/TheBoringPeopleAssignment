import "./App.css";
import samplePdf from "./assets/sample.pdf";
import { useEffect, useState } from "react";
import PDFParserReact from "./components/PDFParser";
import BarChart from "./components/BarChart";
import { PieChart } from "./components/PieChart";
import SelectComponent from "./components/Select.component";

function App() {
  const [parsedText, setParsedText] = useState(null);
  const [chartType, setChartType] = useState("bar");

  return (
    <div className="container mx-auto flex flex-col">
      <div className="file w-[50%]">
        <label htmlFor="chartType" className="font-bold">
          Select Chart Type
        </label>

        <SelectComponent setChartType={setChartType} />

        <PDFParserReact parsedText={parsedText} setParsedText={setParsedText} />
      </div>

      {/* <p>{parsedText}</p> */}
      <div className="stats border">
        {chartType === "bar" && parsedText && (
          <div className="mx-auto w-[80%]">
            <BarChart data={parsedText} />
          </div>
        )}
        {chartType === "pie" && parsedText && (
          <div className="mx-auto w-[50%]">
            <PieChart data={parsedText} />
          </div>
        )}
        {chartType === "bar&pie" && parsedText && (
          <div className="flex gap-4 ">
            <div className="w-[50%] my-auto">
              <BarChart data={parsedText} />
            </div>
            <div className="min-h-full min-w-px mx-3 rounded bg-gray-400"></div>
            <div className="w-[50%]">
              <PieChart data={parsedText} />
            </div>
          </div>
        )}
      </div>
      <h3 className="mt-4 font-bold">Data</h3>
      <pre className="h-64 overflow-scroll w-full border">
        {JSON.stringify(parsedText, null, 2)}
      </pre>
    </div>
  );
}

export default App;
