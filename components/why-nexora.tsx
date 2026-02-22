import { Shield, Radio, Brain } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "أمان وموثوقية محلية",
    description:
      "منصة سعودية رائدة مبنية على بنية تحتية محلية متينة، تستضيف جميع بياناتك داخل المملكة العربية السعودية بما يتوافق تمامًا مع قانون حماية البيانات الشخصية (PDPL) وأحدث اللوائح التنظيمية.",
  },
  {
    icon: Radio,
    title: "تواصل متعدد القنوات",
    description:
      "وصول شامل ومتكامل لعملائك عبر جميع القنوات الرقمية المتاحة، بدءًا من الإشعارات الفورية والبريد الإلكتروني، وصولاً إلى الرسائل النصية وواتساب - كل ذلك من لوحة تحكم واحدة.",
  },
  {
    icon: Brain,
    title: "تخصيص ذكي ودقيق",
    description:
      "محركات ذكاء اصطناعي متطورة تتيح استهدافًا فوريًا ومخصصًا لحملاتك التسويقية، مبنيًا على تحليل عميق لسلوك المستخدم وتفضيلاته وتاريخ تعاملاته.",
  },
]

export function WhyNexora() {
  return (
    <section id="why" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium tracking-wide text-primary">
            المميزات
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            لماذا <span className="gradient-text">نيكسورا</span>؟
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            منصة متكاملة صُممت لتلبية احتياجات السوق السعودي بأعلى معايير الجودة والأمان
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <feature.icon size={28} />
              </div>
              <h3 className="mb-4 text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
