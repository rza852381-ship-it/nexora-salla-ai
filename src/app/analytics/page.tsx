export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#111118] text-white p-8">
      <h1 className="text-3xl font-bold text-purple-400 mb-6">
        تحليل أداء المتجر
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-[#1a1a25] p-6 rounded-2xl border border-purple-800">
          <h2>عدد الزوار</h2>
          <p className="text-2xl text-purple-400 mt-2">12,540</p>
        </div>

        <div className="bg-[#1a1a25] p-6 rounded-2xl border border-purple-800">
          <h2>معدل التحويل</h2>
          <p className="text-2xl text-purple-400 mt-2">3.2%</p>
        </div>

        <div className="bg-[#1a1a25] p-6 rounded-2xl border border-purple-800">
          <h2>أفضل منتج</h2>
          <p className="text-purple-400 mt-2">مجموعة الصيف</p>
        </div>
      </div>
    </div>
  );
}
