import { Sparkles, Tag } from 'lucide-react';

export default function Offers() {
  const offers = [
    {
      title: 'خصم على الصيانة الدورية',
      discount: '20%',
      description: 'خصم 20% على جميع خدمات الصيانة الدورية للسيارات',
      validity: 'صالح حتى نهاية الشهر',
      badge: 'عرض محدود',
    },
    {
      title: 'تغيير الزيت مجاني',
      discount: 'مجاني',
      description: 'تغيير الزيت والفلاتر مجاني عند إجراء أي خدمة أخرى',
      validity: 'صالح حتى نهاية الشهر',
      badge: 'عرض خاص',
    },
    {
      title: 'فحص شامل بنصف السعر',
      discount: '50%',
      description: 'الفحص الشامل للسيارة بنصف السعر الأصلي',
      validity: 'صالح حتى نهاية الشهر',
      badge: 'عرض محدود',
    },
    {
      title: 'خدمة طوارئ مجانية',
      discount: 'مجاني',
      description: 'خدمة الطوارئ والسحب مجانية للعملاء المسجلين',
      validity: 'صالح طوال السنة',
      badge: 'عرض دائم',
    },
  ];

  return (
    <section id="offers" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Promotional Banner */}
        <div className="mb-16 rounded-lg overflow-hidden shadow-2xl">
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663499897206/CCkw3q6qpHFnwjd87y3LZR/offers-special-Q4J9yAswGJwbEUBKjVywer.webp" alt="عروض خاصة" className="w-full h-auto object-cover" />
        </div>

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="accent-line mb-6"></div>
          <h2 className="heading-lg mb-6">العروض والخصومات</h2>
          <p className="body-lg">
            استمتع بأفضل العروض والخصومات على خدماتنا المتنوعة
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg p-8 hover:border-amber-500/50 transition-all duration-300 overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-300"></div>

              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full">
                  <Sparkles size={14} />
                  {offer.badge}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-5">
                <div className="flex items-start justify-between mb-4 pt-6">
                  <h3 className="heading-md flex-1">{offer.title}</h3>
                  <div className="text-right">
                    <p className="text-4xl text-amber-500 font-bold">{offer.discount}</p>
                  </div>
                </div>

                <p className="body-sm mb-4">{offer.description}</p>

                <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
                  <Tag size={16} />
                  <span>{offer.validity}</span>
                </div>

                <a
                  href="#contact"
                  className="inline-block px-6 py-2 bg-amber-500 text-slate-900 rounded-lg font-bold hover:bg-amber-400 transition-colors duration-300 text-sm"
                >
                  استفد من العرض
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/30 rounded-lg p-12 text-center">
          <h3 className="heading-md mb-4">هل تريد عرضاً مخصصاً؟</h3>
          <p className="body-lg mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم واحصل على عرض مخصص يناسب احتياجات سيارتك
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-amber-500 text-slate-900 rounded-lg font-bold hover:bg-amber-400 transition-colors duration-300"
          >
            احصل على عرض مخصص
          </a>
        </div>
      </div>
    </section>
  );
}
