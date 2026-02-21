import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-[#0f0f14] to-[#1a1a25] p-6 border-r border-purple-900">

      <h2 className="text-2xl font-bold text-purple-400 mb-10">
        Nexora AI 🚀
      </h2>

      <nav className="space-y-4 text-gray-300">

        <Link href="/dashboard" className="block hover:text-purple-400 transition">
          📊 Dashboard
        </Link>

        <Link href="/seo" className="block hover:text-purple-400 transition">
          🔎 SEO
        </Link>

        <Link href="/analytics" className="block hover:text-purple-400 transition">
          📈 Analytics
        </Link>

        <Link href="/accounting" className="block hover:text-purple-400 transition">
          💰 Accounting
        </Link>

        <Link href="/ai" className="block hover:text-purple-400 transition">
          🤖 AI Generator
        </Link>

      </nav>

    </div>
  );
}
