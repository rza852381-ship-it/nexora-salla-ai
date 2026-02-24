import { motion } from "framer-motion";
import { Search, CheckCircle, AlertTriangle, XCircle, ExternalLink } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const seoScore = 78;

const seoItems = [
  { label: "عنوان الصفحة", status: "good", detail: "طول مناسب (55 حرف)" },
  { label: "وصف Meta", status: "good", detail: "محسّن بالكلمات المفتاحية" },
  { label: "سرعة التحميل", status: "warning", detail: "3.2 ثانية — يُفضل أقل من 2 ثانية" },
  { label: "التوافق مع الجوال", status: "good", detail: "متجاوب بالكامل" },
  { label: "الروابط المعطلة", status: "error", detail: "3 روابط معطلة تحتاج إصلاح" },
  { label: "خريطة الموقع", status: "good", detail: "sitemap.xml موجود ومحدث" },
  { label: "البيانات المنظمة", status: "warning", detail: "Schema markup مفقود لبعض المنتجات" },
  { label: "الصور البديلة", status: "error", detail: "12 صورة بدون نص بديل" },
];

const statusIcon = {
  good: <CheckCircle className="w-5 h-5 text-success" />,
  warning: <AlertTriangle className="w-5 h-5 text-warning" />,
  error: <XCircle className="w-5 h-5 text-destructive" />,
};

const SEO = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">تحسين محركات البحث</h1>
        <p className="text-muted-foreground mt-1">تحليل وتحسين ظهور متجرك في نتائج البحث</p>
      </div>

      {/* Score */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-xl p-8 mb-8 text-center">
        <div className="inline-flex items-center justify-center w-32 h-32 rounded-full glow-border mb-4">
          <span className="text-4xl font-bold text-gradient">{seoScore}</span>
        </div>
        <h3 className="text-lg font-semibold">نقاط SEO</h3>
        <p className="text-muted-foreground text-sm mt-1">أداء جيد — هناك فرص للتحسين</p>
        <Progress value={seoScore} className="max-w-xs mx-auto mt-4 h-2" />
      </motion.div>

      {/* Items */}
      <div className="space-y-3">
        {seoItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              {statusIcon[item.status as keyof typeof statusIcon]}
              <div>
                <div className="font-medium text-sm">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.detail}</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SEO;
