import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Layout/Header";

export default function App() {
  return (
    <div className="min-h-screen w-screen px-5 flex flex-col bg-white overflow-x-hidden">
      <Header/>
      <main className="flex-1 p-6">
        <Dashboard />
      </main>
    </div>
  );
}
