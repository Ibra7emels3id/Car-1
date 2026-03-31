import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="accent-line mb-6"></div>
          <h2 className="heading-lg mb-6">تواصل معنا</h2>
          <p className="body-lg">
            هل لديك أي استفسار؟ تواصل معنا الآن واحصل على الإجابة في أسرع وقت
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
            <h3 className="heading-md mb-8">أرسل لنا رسالة</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex gap-3 items-start">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans-body text-green-400 font-bold">تم إرسال رسالتك بنجاح!</p>
                  <p className="body-sm text-green-400/80">سنرد عليك في أقرب وقت</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2 text-sm">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="أدخل اسمك"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2 text-sm">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-slate-300 mb-2 text-sm">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2 text-sm">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  placeholder="أدخل رسالتك"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-amber-500 text-slate-900 rounded-lg font-bold hover:bg-amber-400 transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                إرسال الرسالة
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg p-8">
              <h3 className="heading-md mb-6">معلومات التواصل السريعة</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-sans-body text-slate-400 text-sm mb-2">الهاتف</p>
                  <a href="tel:+966501234567" className="text-amber-500 hover:text-amber-400 transition-colors font-bold">
                    +966 50 123 4567
                  </a>
                </div>
                <div>
                  <p className="font-sans-body text-slate-400 text-sm mb-2">البريد الإلكتروني</p>
                  <a href="mailto:info@carservice.com" className="text-amber-500 hover:text-amber-400 transition-colors font-bold">
                    info@carservice.com
                  </a>
                </div>
                <div>
                  <p className="font-sans-body text-slate-400 text-sm mb-2">العنوان</p>
                  <p className="body-sm">
                    شارع الملك فهد، الرياض
                    <br />
                    المملكة العربية السعودية
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg p-8">
              <h3 className="heading-md mb-6">تابعنا على وسائل التواصل</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500 transition-all duration-300"
                >
                  <span className="text-lg">f</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500 transition-all duration-300"
                >
                  <span className="text-lg">📷</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500 transition-all duration-300"
                >
                  <span className="text-lg">💬</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
