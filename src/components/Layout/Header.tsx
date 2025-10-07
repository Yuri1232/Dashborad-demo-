import { Settings, Filter, Copy, LayoutGrid } from "lucide-react";

const Header = () => {
  const now = new Date();
  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <header className="flex items-center justify-between mb-6 bg-surface border border-border rounded-2xl p-4 shadow-sm">
      {/* Left Section */}
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-gray-900 flex items-center gap-2 text-xl">
          <span className="inline-flex items-center justify-center rounded-sm bg-primary text-white  font-bold">
            Demo
          </span>
          Hej Julius
        </h1>
        <p className="text-gray-600 text-sm">
          {`Welcome back. Your last login was on ${formattedDate} at ${formattedTime}.`}
        </p>
      </div>

      {/* Right Section - Icon Buttons */}
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-md bg-primary hover:bg-gray-700 transition">
          <Filter className="w-5 h-5  text-secondary" />
        </button>
        <button className="p-2 rounded-md bg-primary hover:bg-gray-700 transition">
          <Copy className="w-5 h-5  text-secondary" />
        </button>
        <button className="p-2 rounded-md bg-primary hover:bg-gray-700 transition">
          <LayoutGrid className="w-5 h-5  text-secondary" />
        </button>
        <button className="p-2 rounded-md bg-primary hover:bg-gray-700 transition">
          <LayoutGrid className="w-5 h-5 text-secondary" />
        </button>
      </div>
    </header>
  );
};

export default Header;
