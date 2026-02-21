import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Nexora 🚀
      </h1>
      <Link
        href="/dashboard"
        className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
