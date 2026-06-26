import { ArrowRight } from 'lucide-react';

export default function Offers() {
  return (
    <section id="offers" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Professional Banner 1200x400 style */}
        <div className="relative w-full max-w-[1200px] h-[400px] mx-auto rounded-2xl overflow-hidden shadow-2xl group">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200&h=400)',
            }}
          >
            {/* Dark Gradient Overlay for text readability on the right side */}
            <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-950/90 to-transparent"></div>
          </div>

          {/* Banner Content - Aligned to Right using justify-start with dir="rtl" */}
          <div className="absolute inset-0 flex items-center justify-start px-8 md:px-20 text-right" dir="rtl">
            <div className="max-w-xl">
              <span className="inline-block px-4 py-1 bg-amber-500 text-slate-900 text-xs font-bold rounded-full mb-6">
                عرض خاص وحصري
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                احصل على فحص شامل مجاني عند تغيير الزيت
              </h2>
              <p className="text-slate-300 mb-10 text-base md:text-lg leading-relaxed">
                نحن نهتم بسلامتك. احصل على تقرير فحص كمبيوتر كامل لسيارتك مجاناً عند طلب خدمة تغيير الزيت والفلاتر الأصلية.
              </p>
              <a
                href="https://wa.me/966530190046"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-amber-500 text-slate-900 rounded-lg font-bold hover:bg-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/30 group/btn"
              >
                استفد من العرض الآن
                <ArrowRight size={22} className="rotate-180 group-hover/btn:-translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
