import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663499897206/CCkw3q6qpHFnwjd87y3LZR/hero-luxury-car-eBW47u94chDHSRRuMqDx7M.webp)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Accent Line */}
          <div className="accent-line mb-6"></div>

          {/* Main Heading */}
          <h1 className="heading-xl mb-6 text-slate-50">
            صيانة السيارات الاحترافية والموثوقة
          </h1>

          {/* Description */}
          <p className="body-lg mb-8 max-w-2xl">
            نحن نقدم خدمات صيانة وإصلاح السيارات على أعلى مستوى من الاحترافية والجودة. فريقنا المتخصص جاهز لخدمتك بأفضل الأسعار والسرعة.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-amber-500 text-slate-900 rounded-lg font-bold hover:bg-amber-400 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-amber-500/30"
            >
              احجز موعداً الآن
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 border-2 border-amber-500 text-amber-500 rounded-lg font-bold hover:bg-amber-500/10 transition-all duration-300"
            >
              تعرف على خدماتنا
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-slate-700/50">
            <div>
              <p className="text-3xl text-amber-500 mb-2">+500</p>
              <p className="body-sm">عميل راضي</p>
            </div>
            <div>
              <p className="text-3xl text-amber-500 mb-2">15+</p>
              <p className="body-sm">سنة خبرة</p>
            </div>
            <div>
              <p className="text-3xl text-amber-500 mb-2">24/7</p>
              <p className="body-sm">خدمة طوارئ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
