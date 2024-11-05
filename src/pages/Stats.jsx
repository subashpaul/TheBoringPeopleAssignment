import BarChart from "@/components/BarChart.component";
import PDFParserReact from "@/components/PDFParser.component";
import { PieChart } from "@/components/PieChart.component";
import SelectComponent from "@/components/Select.component";
import React, { useState } from "react";

const Stats = () => {
  const [parsedText, setParsedText] = useState(null);
  const [chartType, setChartType] = useState("bar");
  return (
    <div className="container mx-auto flex flex-col gap-4 px-7 pt-5">
      <div className="file flex mx-auto justify-evenly w-[60%]">
        <SelectComponent setChartType={setChartType} />
        <PDFParserReact parsedText={parsedText} setParsedText={setParsedText} />
      </div>

      {/* <p>{parsedText}</p> */}
      <div className="stats border">
        {chartType === "bar" && Array.isArray(parsedText) && parsedText && (
          <div className="mx-auto w-[80%]">
            <BarChart data={parsedText} />
          </div>
        )}
        {chartType === "pie" && Array.isArray(parsedText) && parsedText && (
          <div className="mx-auto w-[50%]">
            <PieChart data={parsedText} />
          </div>
        )}
        {chartType === "bar&pie" && Array.isArray(parsedText) && parsedText && (
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
      <h3 className="mt-4 font-bold">Parsed Data</h3>
      {Array.isArray(parsedText) ? (
        <pre className="h-64 overflow-scroll w-full border">
          {JSON.stringify(parsedText, null, 2)}
        </pre>
      ) : (
        <p>{parsedText || "No Data Found!"}</p>
      )}
    </div>
  );
};

export default Stats;
