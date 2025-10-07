import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

type Props = { data: { labels: string[]; values: number[] } };

export default function ChartBar({ data }: Props) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Sales",
        data: data.values,
        backgroundColor: "rgba(37, 99, 235, 0.5)",
      },
    ],
  };
  return <Bar data={chartData} options={{ responsive: true }} />;
}
