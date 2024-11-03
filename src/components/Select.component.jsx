import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
const SelectComponent = ({ setChartType }) => {
  const handleChartTypeChange = (e) => {
    setChartType(e);
  };
  return (
    <Select onValueChange={handleChartTypeChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="bar">Bar</SelectItem>
        <SelectItem value="pie">Pie</SelectItem>
        <SelectItem value="bar&pie">Bar & Pie</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
