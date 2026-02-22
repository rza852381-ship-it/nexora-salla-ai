import { Zap, Bot, Users } from "lucide-react"

const platformFeatures = [
  {
    icon: Zap,
    title: "حملات متزامنة",
    description:
      "إطلاق حملات تسويقية متكاملة عبر جميع القنوات الرقمية بضغطة زر واحدة، مع إمكانية التحكم الكامل في التوقيت والمحتوى لكل قناة.",
  },
  {
    icon: Bot,
    title: "أتمتة ذكية",
    description:
      "تحويل تفاعلات العملاء إلى نتائج ملموسة تلقائيًا من خلال سيناريوهات تسويقية ذكية تستجيب لسلوك المستخدم في الوقت الفعلي.",
  },
  {
    icon: Users,
    title: "تقسيم متقدم",
    description:
      "تقسيم ذكي ومتطور للجمهور باستخدام معايير متعددة لضمان وصول الرسالة المناسبة للشخص المناسب في الوقت المناسب.",
  },
]

export function PlatformSection() {
  return (
    <section id="platform" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium tracking-wide text-primary">
            المنصة
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            تجربة تسويق متكاملة من <span className="gradient-text">منصة واحدة</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            قوة نيكسورا تكمن في توحيد جميع أدوات التسويق الرقمي في مكان واحد، مما يوفر عليك الوقت والجهد ويضمن تناسق رسائلك عبر جميع القنوات.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {platformFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-2 text-xs font-bold text-primary/60">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <feature.icon size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
