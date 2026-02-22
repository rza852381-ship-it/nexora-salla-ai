import { ShoppingCart, Landmark, Clapperboard, Plane } from "lucide-react"

const sectors = [
  {
    icon: ShoppingCart,
    title: "التجزئة والتجارة الإلكترونية",
    description:
      "تعزيز المبيعات وبناء ولاء العملاء من خلال حملات تسويقية مخصصة وعروض ذكية تستهدف الشريحة المناسبة في الوقت المناسب.",
  },
  {
    icon: Landmark,
    title: "القطاع المالي والتقنيات المالية",
    description:
      "تواصل آمن وموثوق مع عملائك مع الالتزام الكامل بأعلى معايير الأمان والخصوصية وحماية البيانات.",
  },
  {
    icon: Clapperboard,
    title: "الإعلام والترفيه",
    description:
      "زيادة التفاعل مع المحتوى الإعلامي وبناء قاعدة جماهيرية مخلصة عبر استراتيجيات تواصل ذكية تُبقي الجمهور على اطلاع دائم.",
  },
  {
    icon: Plane,
    title: "الألعاب والسفر والضيافة",
    description:
      "تجارب مخصصة ومتكاملة تعزز رضا العملاء وتزيد من معدلات الحجز والاستخدام من خلال عروض موجّهة تراعي تفضيلات كل مستخدم.",
  },
]

export function SectorsSection() {
  return (
    <section id="sectors" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium tracking-wide text-primary">
            القطاعات
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            القطاعات التي تخدمها <span className="gradient-text">نيكسورا</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            منصتنا مصممة بعناية فائقة لتلبية الاحتياجات الفريدة والمتنوعة لمختلف الصناعات والقطاعات
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <sector.icon size={24} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-foreground">
                {sector.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
