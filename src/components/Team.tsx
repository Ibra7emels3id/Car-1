import { Mail, Phone } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'م. أحمد العتيبي',
      role: 'مدير المركز الرئيسي',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663499897206/CCkw3q6qpHFnwjd87y3LZR/team-mechanic-T4AWkKvAURpTfYcW8edDcy.webp',
      bio: 'خبرة أكثر من 20 عاماً في إدارة مراكز صيانة السيارات المتكاملة.',
    },
    {
      name: 'م. خالد الدوسري',
      role: 'كبير مهندسي الميكانيكا',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663499897206/CCkw3q6qpHFnwjd87y3LZR/team-mechanic-2-jLYom2MnHgVUd4A798zGnN.webp',
      bio: 'متخصص في تشخيص وإصلاح المحركات الحديثة وناقل الحركة.',
    },
    {
      name: 'م. فهد القحطاني',
      role: 'أخصائي فحص وبرمجة',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663499897206/CCkw3q6qpHFnwjd87y3LZR/team-mechanic-3-WDk3e4bFhbN4gfLd4nDNSQ.webp',
      bio: 'خبير في استخدام أحدث أجهزة فحص الكمبيوتر وبرمجة الأنظمة.',
    },
    {
      name: 'م. ياسر الحربي',
      role: 'أخصائي أنظمة كهربائية',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663499897206/CCkw3q6qpHFnwjd87y3LZR/team-mechanic-1-GCrgPFuuNwr2xPYGmhNfrX.webp',
      bio: 'متخصص في صيانة وإصلاح كافة الأنظمة الكهربائية والإلكترونية.',
    },
  ];

  return (
    <section id="team" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="accent-line mb-6"></div>
          <h2 className="heading-lg mb-6">فريقنا المتخصص</h2>
          <p className="body-lg">
            نخبة من أفضل المهندسين والفنيين المتخصصين لضمان أعلى مستويات الجودة في صيانة سيارتك
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-amber-500/50 transition-all duration-300"
              style={{
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Member Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-3">
                    <a
                      href="mailto:isb77t@gmail.com"
                      className="p-2 bg-amber-500 text-slate-900 rounded-lg hover:bg-amber-400 transition-colors"
                    >
                      <Mail size={18} />
                    </a>
                    <a
                      href="https://wa.me/966530190046"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-amber-500 text-slate-900 rounded-lg hover:bg-amber-400 transition-colors"
                    >
                      <Phone size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="heading-md mb-2">{member.name}</h3>
                <p className="text-amber-500 font-bold text-sm mb-3">{member.role}</p>
                <p className="body-sm text-slate-400">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
