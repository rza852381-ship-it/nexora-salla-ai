export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f14] via-[#151520] to-[#1f1033] text-white p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-purple-400">
          Nexora AI 🚀
        </h1>
        <button className="bg-purple-600 hover:bg-purple-700 transition px-5 py-2 rounded-xl shadow-lg">
          إنشاء حملة
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

        <div className="bg-[#1a1a25] p-6 rounded-2xl shadow-lg border border-purple-800">
          <h2 className="text-gray-400 text-sm">إجمالي الحملات</h2>
          <p className="text-2xl font-bold mt-2 text-purple-400">24</p>
        </div>

        <div className="bg-[#1a1a25] p-6 rounded-2xl shadow-lg border border-purple-800">
          <h2 className="text-gray-400 text-sm">المبيعات المتوقعة</h2>
          <p className="text-2xl font-bold mt-2 text-purple-400">54,200 ريال</p>
        </div>

        <div className="bg-[#1a1a25] p-6 rounded-2xl shadow-lg border border-purple-800">
          <h2 className="text-gray-400 text-sm">معدل التحويل</h2>
          <p className="text-2xl font-bold mt-2 text-purple-400">3.4%</p>
        </div>

      </div>

      {/* AI Generator Section */}
      <div className="bg-[#1a1a25] p-8 rounded-2xl shadow-lg border border-purple-800">
        <h2 className="text-xl font-bold text-purple-400 mb-4">
          مولد الحملات بالذكاء الاصطناعي 🤖
        </h2>

        <textarea
          placeholder="اكتب وصف المنتج أو الفكرة هنا..."
          className="w-full bg-[#111118] border border-purple-700 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
          rows={4}
        />

        <button className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-xl shadow-lg">
          توليد حملة الآن
        </button>
      </div>

    </div>
  );
}
