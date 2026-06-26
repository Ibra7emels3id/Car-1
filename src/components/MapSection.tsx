import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 text-right" dir="rtl">
          <div className="accent-line mb-6"></div>
          <h2 className="text-4xl font-bold text-white mb-6">موقعنا</h2>
          <p className="text-slate-300 text-lg">
            تفضل بزيارتنا في مركزنا المجهز بأحدث التقنيات لخدمة سيارتك
          </p>
        </div>

        {/* Map and Info Container */}
        <div className="flex flex-col gap-8" dir="rtl">
          {/* Map - Full Width Top */}
          <div className="w-full h-[450px] bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3628.505352782622!2d46.6031667!3d24.571749999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM0JzE4LjMiTiA0NsKwMzYnMTEuNCJF!5e0!3m2!1sen!2ssa!4v1782494318764!5m2!1sen!2ssa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

          {/* Info Cards - Equal Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
            {/* Address Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-300 shadow-xl flex flex-col h-full">
              <div className="flex gap-4 items-start mb-4">
                <MapPin size={24} className="text-amber-500 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-white">العنوان</h3>
              </div>
              <p className="text-slate-400 leading-relaxed mt-auto">
                الرياض، المملكة العربية السعودية
                <br />
                (حسب الموقع الموضح في الخريطة)
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-300 shadow-xl flex flex-col h-full">
              <div className="flex gap-4 items-start mb-4">
                <Phone size={24} className="text-amber-500 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-white">تواصل معنا</h3>
              </div>
              <div className="space-y-3 mt-auto">
                <a href="https://wa.me/966530190046" target="_blank" rel="noopener noreferrer" className="block text-amber-500 text-lg font-bold hover:text-amber-400 transition-colors">
                  +966 53 019 0046
                </a>
                <a href="mailto:info@al-atqan.biz" className="block text-slate-400 hover:text-amber-500 transition-colors text-sm">
                  info@al-atqan.biz
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-300 shadow-xl flex flex-col h-full">
              <div className="flex gap-4 items-start mb-4">
                <Clock size={24} className="text-amber-500 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-white">ساعات العمل</h3>
              </div>
              <p className="text-slate-400 leading-relaxed mt-auto">
                السبت - الخميس: 8:00 - 18:00
                <br />
                <span className="text-amber-500 font-bold">24/7 خدمة طوارئ</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
