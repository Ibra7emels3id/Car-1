import { MapPin, Phone, Clock } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="accent-line mb-6"></div>
          <h2 className="heading-lg mb-6">موقعنا</h2>
          <p className="body-lg">
            تجدنا في موقع مركزي وسهل الوصول في قلب المدينة
          </p>
        </div>

        {/* Map and Info Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="w-full h-96 bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.2345678901234!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1d1d1d1d1d1d%3A0x1d1d1d1d1d1d1d1d!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Info Cards */}
          <div className="flex flex-col gap-6">
            {/* Address Card */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex gap-4 items-start mb-4">
                <MapPin size={24} className="text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif-display text-slate-50 mb-2">العنوان</h3>
                  <p className="body-sm">
                    شارع الملك فهد، الرياض
                    <br />
                    المملكة العربية السعودية
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex gap-4 items-start mb-4">
                <Phone size={24} className="text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif-display text-slate-50 mb-2">الهاتف</h3>
                  <a href="tel:+966501234567" className="body-sm text-amber-500 hover:text-amber-400 transition-colors">
                    +966 50 123 4567
                  </a>
                  <br />
                  <a href="tel:+966114567890" className="body-sm text-amber-500 hover:text-amber-400 transition-colors">
                    +966 11 456 7890
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex gap-4 items-start">
                <Clock size={24} className="text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif-display text-slate-50 mb-2">ساعات العمل</h3>
                  <p className="body-sm">
                    السبت - الخميس: 8:00 - 18:00
                    <br />
                    الجمعة: 10:00 - 16:00
                    <br />
                    <span className="text-amber-500 font-bold">24/7 خدمة طوارئ</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
