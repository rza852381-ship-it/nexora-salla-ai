export default function FinancePage() {
  return (
    <div className="min-h-screen bg-[#111118] text-white p-8">
      <h1 className="text-3xl font-bold text-purple-400 mb-6">
        المحاسب المالي
      </h1>

      <div className="bg-[#1a1a25] p-6 rounded-2xl border border-purple-800">
        <p>إجمالي الأرباح:</p>
        <h2 className="text-2xl text-purple-400 mb-4">
          54,200 ريال
        </h2>

        <p>المصاريف:</p>
        <h2 className="text-xl text-red-400">
          12,000 ريال
        </h2>
      </div>
    </div>
  );
}
