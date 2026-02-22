import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <div className="hero-glow absolute inset-0" />
      <div className="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm text-muted-foreground">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          منصة تسويقية ذكية للسوق السعودي
        </div>

        <h1 className="mb-8 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
          <span className="text-balance">الجيل القادم من تسويق</span>
          <br />
          <span className="gradient-text text-balance">المنصات الرقمية</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          تجمع المنصة بين قوة الذكاء الاصطناعي المتقدم والتحليلات البيانية العميقة لتقديم تجربة تسويقية استثنائية وغير مسبوقة في المملكة العربية السعودية.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-primary px-8 py-6 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
          >
            ابدأ تجربتك المجانية
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border bg-transparent px-8 py-6 text-base text-foreground hover:bg-secondary"
          >
            اكتشف المزيد
          </Button>
        </div>
      </div>

      <a
        href="#why"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="اكتشف المزيد"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  )
}
