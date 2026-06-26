import { Facebook, Instagram, MessageCircle, Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663499897206/CCkw3q6qpHFnwjd87y3LZR/atoan-logo_3291afab.png" alt="ATOAN" className="h-20 w-auto mb-4" />
            <p className="body-sm mb-4">
              نحن متخصصون في صيانة وإصلاح السيارات بأعلى معايير الجودة والاحترافية.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif-display text-slate-50 mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="body-sm text-slate-400 hover:text-amber-500 transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="body-sm text-slate-400 hover:text-amber-500 transition-colors">حول</a></li>
              <li><a href="#services" className="body-sm text-slate-400 hover:text-amber-500 transition-colors">الخدمات</a></li>
              <li><a href="#contact" className="body-sm text-slate-400 hover:text-amber-500 transition-colors">التواصل</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif-display text-slate-50 mb-4">خدماتنا</h4>
            <ul className="space-y-2">
              <li><a href="#" className="body-sm text-slate-400 hover:text-amber-500 transition-colors">إصلاح المحرك</a></li>
              <li><a href="#" className="body-sm text-slate-400 hover:text-amber-500 transition-colors">تغيير الزيت</a></li>
              <li><a href="#" className="body-sm text-slate-400 hover:text-amber-500 transition-colors">التشخيص</a></li>
              <li><a href="#" className="body-sm text-slate-400 hover:text-amber-500 transition-colors">الصيانة الدورية</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif-display text-slate-50 mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <Phone size={18} className="text-amber-500 mt-1 flex-shrink-0" />
                <span className="body-sm text-slate-400">+966 50 123 4567</span>
              </li>
              <li className="flex gap-3 items-start">
                <Mail size={18} className="text-amber-500 mt-1 flex-shrink-0" />
                <span className="body-sm text-slate-400">info@carservice.com</span>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-amber-500 mt-1 flex-shrink-0" />
                <span className="body-sm text-slate-400">الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-slate-800 py-12 mb-8">
          <div className="mb-8">
            <h4 className="font-serif-display text-slate-50 mb-8 text-center md:text-right text-lg">طرق الدفع المتاحة</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {/* Tabby */}
              <div className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4 hover:from-slate-800 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663499897206/CCkw3q6qpHFnwjd87y3LZR/tabby-logo-9S9zYpap6Y5fYu2m3eMmkF.webp" alt="Tabby" className="h-12 w-auto object-contain" />
              </div>
              {/* Tamara */}
              <div className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4 hover:from-slate-800 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663499897206/CCkw3q6qpHFnwjd87y3LZR/tamara-logo-X48VsRm4nEyhMiHeLd9qdk.webp" alt="Tamara" className="h-12 w-auto object-contain" />
              </div>
              {/* Mada */}
              <div className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4 hover:from-slate-800 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663499897206/CCkw3q6qpHFnwjd87y3LZR/mada-logo-HN7UkNeUEUTNjtxP7oTTPP.webp" alt="Mada" className="h-12 w-auto object-contain" />
              </div>
              {/* Apple Pay */}
              <div className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4 hover:from-slate-800 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663499897206/CCkw3q6qpHFnwjd87y3LZR/applepay-logo-QE4UUfMmtD8vdjvzAzes57.webp" alt="Apple Pay" className="h-12 w-auto object-contain" />
              </div>
              {/* Samsung Pay */}
              <div className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4 hover:from-slate-800 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663499897206/CCkw3q6qpHFnwjd87y3LZR/samsungpay-logo-ddbVwUACWW9h9Sf67fMRpq.webp" alt="Samsung Pay" className="h-12 w-auto object-contain" />
              </div>
              {/* Cash */}
              <div className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4 hover:from-slate-800 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663499897206/CCkw3q6qpHFnwjd87y3LZR/cash-logo-h8Peiqm9ZpKDGUg28KzyyM.webp" alt="Cash" className="h-12 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="body-sm text-slate-500">
              جميع الحقوق محفوظة © 2024 خدمة السيارات المحترفة
            </p>
            <div className="flex gap-6">
              <a href="#" className="body-sm text-slate-500 hover:text-amber-500 transition-colors">سياسة الخصوصية</a>
              <a href="#" className="body-sm text-slate-500 hover:text-amber-500 transition-colors">شروط الخدمة</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
