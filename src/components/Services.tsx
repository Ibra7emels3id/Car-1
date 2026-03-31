import { Wrench, Droplet, Gauge, AlertCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Wrench size={40} />,
      title: 'إصلاح المحرك',
      description: 'إصلاح شامل لجميع مشاكل المحرك باستخدام أحدث التقنيات والأدوات المتخصصة',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663499897206/CCkw3q6qpHFnwjd87y3LZR/services-engine-repair-gphuSTw62tj7nZaXRLkV3t.webp',
    },
    {
      icon: <Droplet size={40} />,
      title: 'تغيير الزيت',
      description: 'تغيير زيت المحرك والفلاتر باستخدام زيوت أصلية عالية الجودة',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663499897206/CCkw3q6qpHFnwjd87y3LZR/service-oil-change-ATEDZjyL4TH4i7muxpTrkq.webp',
    },
    {
      icon: <Gauge size={40} />,
      title: 'التشخيص الكامل',
      description: 'فحص شامل للسيارة باستخدام أجهزة تشخيص حديثة ومتقدمة',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663499897206/CCkw3q6qpHFnwjd87y3LZR/service-diagnostics-Zw4VJ6QjRStXnZvo5F5XSZ.webp',
    },
    {
      icon: <AlertCircle size={40} />,
      title: 'فريق الطوارئ',
      description: 'خدمة طوارئ متاحة 24/7 للتعامل مع أي مشكلة طارئة في السيارة',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663499897206/CCkw3q6qpHFnwjd87y3LZR/service-emergency-iFZT6kpquxL4o2VTZw8RGd.webp',
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="accent-line mb-6"></div>
          <h2 className="heading-lg mb-6">خدماتنا</h2>
          <p className="body-lg">
            نقدم مجموعة شاملة من خدمات صيانة وإصلاح السيارات بأعلى معايير الجودة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-amber-500/50 transition-all duration-300"
              style={{
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              </div>

              {/* Service Content */}
              <div className="p-8 relative">
                <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="heading-md mb-3">{service.title}</h3>
                <p className="body-sm mb-6">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-amber-500 hover:text-amber-400 transition-colors font-bold text-sm"
                >
                  تعرف أكثر →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
