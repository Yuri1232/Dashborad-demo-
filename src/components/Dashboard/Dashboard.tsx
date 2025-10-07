import { useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import DashboardCard from "./DashboardCard";
import { useMockData } from "../../hooks/useMockData";
import ChartBar from "./ChartBar";
import ChartRadar from "./ChartRadar";

type ChartType = "bar" | "radar";

interface CardInfo {
  x: number;
  y: number;
  width: number;
  height: number;
  type: ChartType;
}

type CardsState = Record<string, CardInfo>;

export default function Dashboard() {
  const { data, isLoading } = useMockData();

  const [cards, setCards] = useState<CardsState>({
    chart1: { x: 0, y: 0, width: 400, height: 400, type: "bar" },
    chart2: { x: 450, y: 0, width: 400, height: 400, type: "radar" },
  });

  const [isResizing, setIsResizing] = useState<string | null>(null);

  // handle resizing 
const handleResize = (key: string, e: MouseEvent<HTMLDivElement>) => {
  e.preventDefault();
  e.stopPropagation();

  setIsResizing(key);

  const startX = e.clientX;
  const startY = e.clientY;
  const startWidth = cards[key].width;
  const startHeight = cards[key].height;

  const onMouseMove = (moveEvent: globalThis.MouseEvent) => {
    const deltaX = moveEvent.clientX - startX;
    const deltaY = moveEvent.clientY - startY;

    const newWidth = Math.max(400, startWidth + deltaX);
    const newHeight = Math.max(400, startHeight + deltaY);

    setCards((prev) => ({
      ...prev,
      [key]: { ...prev[key], width: newWidth, height: newHeight },
    }));
  };

  const onMouseUp = () => {
    setIsResizing(null);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  };

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseup", onMouseUp);
};

  //add random chart
  const addRandomChart = () => {
    const id = `chart-${Date.now()}`;
    const type: ChartType = Math.random() > 0.5 ? "bar" : "radar";
    const x = Math.random() * 600;
    const y = Math.random() * 200;

    setCards((prev) => ({
      ...prev,
      [id]: { x, y, width: 400, height: 400, type },
    }));
  };

  // delete chart
  const deleteChart = (key: string) => {
    setCards((prev) => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  };

  // render card
  const renderCard = (key: string, card: CardInfo) => {
    const chartContent =
      card.type === "bar"
        ? data?.barData && <ChartBar data={data.barData} />
        : data?.radarData && <ChartRadar data={data.radarData} />;

    return (
      <motion.div
        key={key}
        drag={!isResizing}
        dragMomentum={false}
        style={{
          position: "absolute",
          zIndex: 10,
          x: card.x,
          y: card.y,
          width: card.width,
          height: card.height,
        }}
        onDragEnd={(_, info) =>
          setCards((prev) => ({
            ...prev,
            [key]: {
              ...prev[key],
              x: info.point.x,
              y: info.point.y,
            },
          }))
        }
      >
        <div className="relative w-full h-full backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
          <DashboardCard
            title={
              card.type === "bar" ? "Sales by Region" : "Customer Segments"
            }
            loading={isLoading}
          >
            {chartContent}
          </DashboardCard>

          {/* Delete button */}
          <button
            onClick={() => deleteChart(key)}
            className="absolute top-2 right-2  bg-primary  text-white rounded-full w-6 h-6 flex items-center justify-center"
          >
            ✕
          </button>

          {/* Resize handle */}
          <div
            onMouseDown={(e) => handleResize(key, e)}
            className="absolute right-1 bottom-1 w-4 h-4 cursor-nwse-resize bg-gradient-to-br from-primary to-secondary rounded"
          />
        </div>
      </motion.div>
    );
  };

  //Render layout
  return (
    <div className="relative  text-white">
      <div className="absolute inset-0 blur-3xl animate-pulse" />
      <div className="p-6 z-10 relative">
        <button
          onClick={addRandomChart}
          className=" font-medium rounded-lg text-black px-5 py-2 shadow-mdtransition-all"
        >
          + Add Random Chart
        </button>
      </div>

      {/* Render all cards */}
      {Object.entries(cards).map(([key, card]) => renderCard(key, card))}
    </div>
  );
}
