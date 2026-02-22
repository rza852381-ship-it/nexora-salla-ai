import { Eye, TrendingUp, Lightbulb } from "lucide-react"

const analyticsFeatures = [
  {
    icon: Eye,
    title: "مراقبة فورية",
    description:
      "تقارير وتحليلات شاملة في الوقت الحقيقي تمكنك من مراقبة نتائج حملاتك لحظة بلحظة ومتابعة مؤشرات الأداء الرئيسية بدقة عالية مع إمكانية التدخل السريع لتصحيح المسار.",
  },
  {
    icon: TrendingUp,
    title: "تحسين مستمر",
    description:
      "أدوات تحسين متقدمة تعمل على رفع معدل التحويل وتقليل تكلفة الاستحواذ على العملاء من خلال اختبارات A/B الذكية وتوصيات دقيقة مبنية على البيانات.",
  },
  {
    icon: Lightbulb,
    title: "قرارات مدروسة",
    description:
      "دعم متكامل لاتخاذ القرارات الاستراتيجية بناءً على بيانات دقيقة وتحليلات عميقة متعددة الأبعاد تكشف عن رؤى قيمة حول سلوك العملاء.",
  },
]

export function AnalyticsSection() {
  return (
    <section id="analytics" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium tracking-wide text-primary">
            التحليلات
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            تحليلات فورية لتحسين <span className="gradient-text">الأداء</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {analyticsFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30"
            >
              <div className="absolute top-0 right-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />
              <div className="relative">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon size={24} />
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
