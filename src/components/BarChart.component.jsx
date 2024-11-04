import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.Date), // assuming you have dates
    datasets: [
      {
        label: "Sales",
        data: data.map((item) => item.Sales), // assuming you have amounts
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 3,
      },
    ],
  };

  return (
    // <div className=" w-full">
    <Bar data={chartData} />
    // </div>
  );
};

export default BarChart;
