export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <a href="#" className="text-2xl font-bold">
              <span className="gradient-text">نيكسورا</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              الجيل القادم من تسويق المنصات الرقمية في المملكة العربية السعودية
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-foreground">المنتج</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#why" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  المميزات
                </a>
              </li>
              <li>
                <a href="#analytics" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  التحليلات
                </a>
              </li>
              <li>
                <a href="#platform" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  المنصة
                </a>
              </li>
              <li>
                <a href="#channels" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  القنوات
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-foreground">الشركة</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  المدونة
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  الوظائف
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-foreground">قانوني</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  شروط الاستخدام
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  حماية البيانات
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {'جميع الحقوق محفوظة لنيكسورا 2026 ©'}
          </p>
          <p className="text-sm text-muted-foreground">
            صُنع بحب في المملكة العربية السعودية
          </p>
        </div>
      </div>
    </footer>
  )
}
