import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#1e293b] p-6">
      <h2 className="text-2xl font-bold mb-8">Nexora</h2>

      <nav className="space-y-4">
        <Link href="/dashboard" className="block hover:text-blue-400">
          Dashboard
        </Link>
        <Link href="/login" className="block hover:text-blue-400">
          Login
        </Link>
      </nav>
    </div>
  );
}
