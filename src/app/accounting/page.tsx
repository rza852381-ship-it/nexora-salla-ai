export default function AccountingPage() {
  return (
    <div className="min-h-screen bg-[#111118] text-white p-8">

      <h1 className="text-3xl font-bold text-purple-400 mb-8">
        💰 المحاسب المالي
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {/* الإيرادات */}
        <div className="bg-[#1a1a25] p-6 rounded-2xl border border-purple-800">
          <h2 className="text-xl mb-4 text-gray-300">إجمالي الإيرادات</h2>
          <p className="text-2xl font-bold text-green-400">
            54,200 ريال
          </p>
        </div>

        {/* المصروفات */}
        <div className="bg-[#1a1a25] p-6 rounded-2xl border border-purple-800">
          <h2 className="text-xl mb-4 text-gray-300">إجمالي المصروفات</h2>
          <p className="text-2xl font-bold text-red-400">
            12,800 ريال
          </p>
        </div>

        {/* صافي الربح */}
        <div className="bg-[#1a1a25] p-6 rounded-2xl border border-purple-800">
          <h2 className="text-xl mb-4 text-gray-300">صافي الربح</h2>
          <p className="text-2xl font-bold text-purple-400">
            41,400 ريال
          </p>
        </div>

      </div>

      <div className="mt-10 bg-[#1a1a25] p-6 rounded-2xl border border-purple-800">
        <h2 className="text-xl mb-4 text-purple-400">
          📊 توصية الذكاء الاصطناعي
        </h2>

        <p className="text-gray-300">
          يمكنك تقليل المصروفات الإعلانية بنسبة 15% وزيادة التركيز على الحملات ذات معدل تحويل أعلى.
        </p>
      </div>
