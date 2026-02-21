import Sidebar from "../../components/Sidebar";
import StatCard from "../../components/StatCard";
import AISuggestions from "../../components/AISuggestions";
import { stats } from "../../lib/data";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">
          Dashboard Overview
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <AISuggestions />
      </div>
    </div>
  );
}
