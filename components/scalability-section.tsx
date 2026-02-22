import { Rocket, Building2, Building } from "lucide-react"

const tiers = [
  {
    step: "1",
    icon: Rocket,
    title: "للشركات الناشئة",
    description:
      "حلول مرنة وبأسعار تنافسية مصممة خصيصًا لتناسب الميزانيات المحدودة دون المساس بالجودة أو الكفاءة. إمكانية البدء بالأدوات الأساسية مع توفر خيارات التوسع التدريجي.",
  },
  {
    step: "2",
    icon: Building2,
    title: "للشركات المتوسطة",
    description:
      "مجموعة متكاملة من الميزات المتقدمة والأدوات الاحترافية المصممة لتلبية متطلبات السوق السعودي والخليجي المتنامي بكفاءة عالية وفعالية ملموسة.",
  },
  {
    step: "3",
    icon: Building,
    title: "للمؤسسات الكبيرة",
    description:
      "بنية تحتية تقنية متينة وقابلة للتوسع اللامحدود، مدعومة بضمانات صارمة لاستقرار الخدمة وموثوقيتها على مدار الساعة مع لوحات تحكم مخصصة وتقارير تحليلية معمّقة.",
  },
]

export function ScalabilitySection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium tracking-wide text-primary">
            المرونة
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            مرونة وتوسع يناسبان{" "}
            <span className="gradient-text">جميع الأعمال</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {tier.step}
              </div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-muted-foreground transition-colors group-hover:text-primary">
                <tier.icon size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {tier.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground text-sm">
                {tier.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
