import Sidebar from "../../components/Sidebar";
import AISuggestions from "../../components/AISuggestions";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 text-purple-400">
          Dashboard Overview
        </h1>

        <AISuggestions />
      </div>
    </div>
  );
}
