import { Settings, Zap, Cpu, Activity, ShieldCheck, PenTool } from 'lucide-react';

const services = [
  {
    title: 'ميكانيكا عامة',
    description: 'إصلاح وصيانة جميع أعطال المحركات والأنظمة الميكانيكية بدقة عالية.',
    icon: <Settings size={40} />,
  },
  {
    title: 'كهرباء السيارات',
    description: 'تشخيص وإصلاح جميع المشاكل الكهربائية والإلكترونية في السيارة.',
    icon: <Zap size={40} />,
  },
  {
    title: 'فحص كمبيوتر',
    description: 'أحدث أجهزة الفحص لتحديد الأعطال بدقة وسرعة متناهية.',
    icon: <Cpu size={40} />,
  },
  {
    title: 'توضيب محركات وجير',
    description: 'خدمات التوضيب الكامل للمحركات وناقل الحركة مع الضمان.',
    icon: <Activity size={40} />,
  },
  {
    title: 'سمكرة وبويا',
    description: 'إعادة سيارتك لحالتها الأصلية بأفضل المواد والألوان العالمية.',
    icon: <PenTool size={40} />,
  },
  {
    title: 'صيانة دورية',
    description: 'برامج صيانة وقائية للحفاظ على أداء سيارتك وإطالة عمرها الافتراضي.',
    icon: <ShieldCheck size={40} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="accent-line mb-6"></div>
          <h2 className="heading-lg mb-6">خدماتنا المتميزة</h2>
          <p className="body-lg">
            نقدم مجموعة متكاملة من خدمات صيانة السيارات تحت سقف واحد وبأيدي خبراء متخصصين
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-slate-800 border border-slate-700 rounded-lg hover:border-amber-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                <div className="text-amber-500 group-hover:text-slate-900 transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="heading-md mb-4">{service.title}</h3>
              <p className="body-sm text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
