import { CheckCircle2, ShieldCheck, Users, Clock, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'سنة خبرة', value: '15+', icon: <Clock className="text-amber-500" size={24} /> },
    { label: 'عميل راضي', value: '1000+', icon: <Users className="text-amber-500" size={24} /> },
    { label: 'فني متخصص', value: '25+', icon: <Award className="text-amber-500" size={24} /> },
    { label: 'ضمان الخدمة', value: '100%', icon: <ShieldCheck className="text-amber-500" size={24} /> },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="مركز الإتقان الوافي" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -z-0"></div>
            
            {/* Experience Badge */}
            <div className="absolute bottom-8 left-8 z-20 bg-amber-500 p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-slate-900 font-bold text-4xl mb-1">15+</p>
              <p className="text-slate-900 font-medium text-sm">عاماً من التميز</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 text-right" dir="rtl">
            <div className="accent-line mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              مركز الإتقان الوافي <br />
              <span className="text-amber-500">شريكك الموثوق</span> لصيانة سيارتك
            </h2>
            
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              منذ أكثر من 15 عاماً، ونحن في مركز الإتقان الوافي نضع نصب أعيننا هدفاً واحداً: تقديم أرقى خدمات صيانة السيارات في المملكة. نحن نجمع بين الخبرة العميقة وأحدث التقنيات العالمية لنضمن لعملائنا رحلة آمنة ومريحة.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-amber-500/30 transition-colors">
                <CheckCircle2 className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-bold mb-1">أحدث أجهزة الفحص</h4>
                  <p className="text-slate-400 text-sm">نستخدم تقنيات متطورة لتشخيص الأعطال بدقة متناهية.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-amber-500/30 transition-colors">
                <CheckCircle2 className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-bold mb-1">قطع غيار أصلية</h4>
                  <p className="text-slate-400 text-sm">نلتزم بتوفير قطع الغيار الأصلية لضمان أداء سيارتك.</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-800">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-right">
                  <div className="flex justify-center md:justify-start mb-2">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-slate-500 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
