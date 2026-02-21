export default function AIStudio() {
  return (
    <div className="min-h-screen bg-[#111118] text-white p-8">
      <h1 className="text-3xl font-bold text-purple-400 mb-6">
        Nexora AI Studio
      </h1>

      <textarea
        placeholder="اكتب فكرة الحملة..."
        className="w-full p-4 bg-[#0f0f14] border border-purple-700 rounded-xl mb-4"
        rows={4}
      />

      <div className="flex gap-4">
        <button className="bg-purple-600 px-6 py-3 rounded-xl">
          توليد نص إعلاني
        </button>

        <button className="bg-purple-800 px-6 py-3 rounded-xl">
          توليد صورة
        </button>

        <button className="bg-purple-900 px-6 py-3 rounded-xl">
          توليد فيديو
        </button>
      </div>
    </div>
  );
}
