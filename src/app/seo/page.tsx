export default function SEOPage() {
  return (
    <div className="min-h-screen bg-[#111118] text-white p-8">
      <h1 className="text-3xl font-bold text-purple-400 mb-6">
        تحسين محرك البحث (SEO)
      </h1>

      <div className="bg-[#1a1a25] p-6 rounded-2xl border border-purple-800">
        <p className="text-gray-300 mb-4">
          تحليل كلماتك المفتاحية واقتراح تحسينات ذكية.
        </p>

        <input
          placeholder="اكتب اسم المنتج..."
          className="w-full p-3 rounded-xl bg-[#0f0f14] border border-purple-700 mb-4"
        />

        <button className="bg-purple-600 px-6 py-3 rounded-xl">
          تحليل SEO
        </button>
      </div>
    </div>
  );
}
