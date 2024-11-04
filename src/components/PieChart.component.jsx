import { Pie } from "react-chartjs-2";

export const PieChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.Date), // Adjust based on your data structure
    datasets: [
      {
        data: data.map((item) => item.Sales), // Assuming you have amounts
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: "rgba(255, 255, 255, 1)",
        borderWidth: 2,
      },
    ],
  };

  return <Pie data={chartData} />;
};
