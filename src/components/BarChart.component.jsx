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

  const barOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Years",
        },
        ticks: {
          color: "#2c3e50",
          font: {
            weight: "500",
          },
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales",
        },
        ticks: {
          color: "#2c3e50",
        },
        grid: {
          color: "#27ae60",
        },
        border: {
          display: false,
        },
      },
    },
  };

  return <Bar data={chartData} options={barOptions} />;
};

export default BarChart;
