import { CheckCircle2, Zap, Shield, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Award size={32} />,
      title: 'الجودة العالية',
      description: 'نستخدم أفضل المعدات والقطع الأصلية في جميع أعمالنا',
    },
    {
      icon: <Zap size={32} />,
      title: 'السرعة والكفاءة',
      description: 'نقدم خدمات سريعة دون التأثير على جودة العمل',
    },
    {
      icon: <Shield size={32} />,
      title: 'الموثوقية',
      description: 'ضمان كامل على جميع الخدمات والإصلاحات',
    },
  ];

  const whyChoose = [
    'فريق متخصص وذو خبرة طويلة',
    'أسعار تنافسية وعادلة',
    'خدمة عملاء ممتازة 24/7',
    'استخدام أحدث التقنيات',
    'ضمان على جميع الخدمات',
    'موقع مركزي وسهل الوصول',
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663499897206/CCkw3q6qpHFnwjd87y3LZR/about-workshop-WRiRbVu28bQtiHYkKSXMR7.webp" alt="ورشة العمل" className="w-full h-full object-cover" />
          </div>
          {/* Section Header */}
          <div>
            <div className="accent-line mb-6"></div>
            <h2 className="heading-lg mb-6">من نحن؟</h2>
            <p className="body-lg mb-6">
              نحن متخصصون في صيانة وإصلاح السيارات منذ أكثر من 15 سنة. نقدم خدمات شاملة بأعلى معايير الجودة والاحترافية.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-amber-500/50 transition-all duration-300 group"
            >
              <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif-display text-xl text-slate-50 mb-3">{feature.title}</h3>
              <p className="body-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 border border-slate-700 rounded-lg p-12">
          <h3 className="heading-md mb-8">لماذا تختار خدماتنا؟</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChoose.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <CheckCircle2 size={24} className="text-amber-500 flex-shrink-0 mt-1" />
                <p className="body-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
