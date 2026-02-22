import { Bell, Mail, MessageSquare, Smartphone } from "lucide-react"

const channels = [
  {
    icon: Bell,
    title: "إشعارات فورية",
    subtitle: "Push Notifications",
    description:
      "تصل عملاءك في اللحظة المناسبة مع محتوى مخصص يحفزهم على التفاعل الفوري ويعزز ولاءهم لعلامتك التجارية. تعتمد على خوارزميات ذكية تحلل سلوك المستخدم وتاريخ تفاعله.",
  },
  {
    icon: Mail,
    title: "بريد إلكتروني احترافي",
    subtitle: "Email Marketing",
    description:
      "رسائل بريد إلكتروني مصممة بعناية فائقة مع قوالب جاهزة وقابلة للتخصيص تعزز هوية علامتك وتحقق أعلى معدلات الفتح والتفاعل مع أدوات اختبار A/B المدمجة.",
  },
  {
    icon: MessageSquare,
    title: "رسائل داخل التطبيق",
    subtitle: "In-App Messaging",
    description:
      "يعزز تجربة المستخدم من خلال رسائل سياقية تظهر في الوقت المناسب داخل تطبيقك لتوجيه العملاء وزيادة التفاعل ورفع معدلات الاحتفاظ بالعملاء.",
  },
  {
    icon: Smartphone,
    title: "SMS وواتساب",
    subtitle: "Direct Messaging",
    description:
      "وصول مباشر وسريع عبر رسائل SMS والواتساب للتواصل الفوري مع عملائك، مثالي للتحديثات العاجلة والعروض الحصرية والتذكيرات الشخصية.",
  },
]

export function ChannelsSection() {
  return (
    <section id="channels" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium tracking-wide text-primary">
            القنوات
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            قنوات التواصل التي تلتقي فيها{" "}
            <span className="gradient-text">الذكاء والوضوح</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            نيكسورا تدعم جميع قنوات التواصل الحديثة لضمان وصولك لعملائك أينما كانوا، بالطريقة التي يفضلونها، في التوقيت المثالي.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="group flex gap-6 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <channel.icon size={28} />
              </div>
              <div>
                <div className="mb-1 text-xs font-medium text-primary/60">
                  {channel.subtitle}
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {channel.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground text-sm">
                  {channel.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
