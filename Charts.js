import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Charts({ repo }) {
  if (!repo) return null;

  const data = {
    labels: ["Stars", "Forks", "Open Issues"],
    datasets: [
      {
        label: "Repository Stats",
        data: [
          repo.stargazers_count || 0,
          repo.forks_count || 0,
          repo.open_issues_count || 0,
        ],
      },
    ],
  };

  return <Bar data={data} />;
}

export default Charts;