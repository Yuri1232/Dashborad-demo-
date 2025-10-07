import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

type Props = { data: { labels: string[]; values: number[] } };

export default function ChartRadar({ data }: Props) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Segments",
        data: data.values,
        backgroundColor: "rgba(16, 185, 129, 0.3)",
        borderColor: "rgba(16, 185, 129, 1)",
      },
    ],
  };
  return <Radar data={chartData} options={{ responsive: true }} />;
}
