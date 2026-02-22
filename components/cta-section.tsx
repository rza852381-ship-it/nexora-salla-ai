import { Button } from "@/components/ui/button"
import { Zap, HeadphonesIcon, BarChart3 } from "lucide-react"

const ctaFeatures = [
  {
    icon: Zap,
    title: "ابدأ فورًا بلا تعقيدات",
    description:
      "تجربة مجانية كاملة دون أي التزامات مالية مسبقة، مع إعداد سريع يتيح لك البدء في غضون دقائق والاستفادة من جميع الميزات منذ اللحظة الأولى.",
  },
  {
    icon: HeadphonesIcon,
    title: "دعم متواصل على مدار الساعة",
    description:
      "فريق من الخبراء المتخصصين جاهزون للإجابة على استفساراتك وتقديم الحلول الفورية لأي تحدٍّ تواجهه لضمان استمرارية عملك.",
  },
  {
    icon: BarChart3,
    title: "نتائج مضمونة وقابلة للقياس",
    description:
      "أدوات تحليل متقدمة ومؤشرات أداء دقيقة تتيح لك رصد النمو الحقيقي لعملك في الوقت الفعلي وتحسين استراتيجياتك باستمرار.",
  },
]

export function CtaSection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-primary/20 bg-card p-10 md:p-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
              انطلق الآن مع <span className="gradient-text">نيكسورا</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              منصة ذكية تجمع بين أحدث التقنيات والابتكار المتواصل لخدمة علامتك التجارية وتحقيق أهدافك التسويقية بكفاءة عالية وفاعلية مثبتة.
            </p>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-3">
            {ctaFeatures.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <feature.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary px-10 py-6 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
            >
              ابدأ تجربتك المجانية اليوم
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border bg-transparent px-10 py-6 text-base text-foreground hover:bg-secondary"
            >
              تواصل مع فريق المبيعات
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
