import LoadingSpinner from "../LoadingSpinner";

type Props = {
  title: string;
  loading?: boolean;
  children: React.ReactNode;
};

export default function DashboardCard({ title, loading, children }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-lg">{title}</h2>
        <div className="drag-handle cursor-move text-gray-400">⋮⋮</div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        {loading ? <LoadingSpinner /> : children}
      </div>
    </div>
  );
}
