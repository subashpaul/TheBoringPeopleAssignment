import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
const SelectComponent = ({ setChartType }) => {
  const handleChartTypeChange = (e) => {
    setChartType(e);
  };
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="chartType">Select Chart Type</Label>
      <Select onValueChange={handleChartTypeChange} defaultValue="bar">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="bar">Bar</SelectItem>
          <SelectItem value="pie">Pie</SelectItem>
          <SelectItem value="bar&pie">Bar & Pie</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectComponent;
