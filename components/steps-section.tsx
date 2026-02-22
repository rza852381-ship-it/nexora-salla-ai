import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    title: "التسجيل السريع",
    description:
      "تجربة مجانية سهلة التفعيل تستغرق دقائق معدودة فقط من خلال نموذج تسجيل بسيط وسلس. لا حاجة لأي بطاقة ائتمانية أو التزامات مالية مسبقة.",
  },
  {
    number: "02",
    title: "الإعداد والتدريب",
    description:
      "فريق دعم فني متخصص يرافقك طوال مرحلة الإعداد، مقدمًا لك استشارات تسويقية شاملة ومخصصة لطبيعة عملك وسوقك المستهدف.",
  },
  {
    number: "03",
    title: "إطلاق حملتك الأولى",
    description:
      "خطوات واضحة تُمكّنك من إطلاق حملتك التسويقية الأولى في غضون دقائق معدودة وتتابع أداءها بشكل لحظي عبر لوحة التحكم الشاملة.",
  },
]

export function StepsSection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium tracking-wide text-primary">
            البداية
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            كيف تبدأ مع <span className="gradient-text">نيكسورا</span>؟
          </h2>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Connection line */}
          <div className="absolute top-16 right-[16.66%] left-[16.66%] hidden h-px bg-gradient-to-l from-primary/50 via-primary/20 to-primary/50 md:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="relative z-10 mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background text-2xl font-bold text-primary">
                {step.number}
              </div>
              <h3 className="mb-4 text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-primary px-10 py-6 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
          >
            سجل الآن مجانًا
          </Button>
        </div>
      </div>
    </section>
  )
}
