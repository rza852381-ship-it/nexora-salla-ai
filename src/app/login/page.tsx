export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-[#1e293b] p-8 rounded-2xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to Nexora
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-[#0f172a] border border-gray-600"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-[#0f172a] border border-gray-600"
        />

        <button className="w-full bg-blue-600 py-3 rounded-xl hover:bg-blue-700">
          Login
        </button>
      </div>
    </div>
  );
}
