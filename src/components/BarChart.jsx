import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const BarChart = ({ data }) => {
  const chartData = {
    labels: Array.isArray(data) ? data?.map((item) => item?.Date) : null, // assuming you have dates
    datasets: [
      {
        label: "Sales",
        data: Array.isArray(data) ? data?.map((item) => item?.Sales) : null, // assuming you have amounts
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 3,
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default BarChart;
