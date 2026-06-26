import { Facebook, Instagram, MessageCircle, Phone, MapPin, Mail, Youtube, FileText, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About & Social */}
          <div>
            <img src="/assets/atqan-final-logo.png" alt="مركز الإتقان" className="h-20 w-auto mb-4" />
            <p className="body-sm mb-4">
              مركز الإتقان الوافي لصيانة السيارات - متخصصون في صيانة وإصلاح السيارات بأعلى معايير الجودة والاحترافية.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/alnoman.co" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/966530190046" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="https://www.youtube.com/channel/UCYZT_IzrJ_-Q3sGRLjmyi7w" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="font-serif-display text-slate-50 mb-4">بيانات المركز</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 items-center">
                <FileText size={18} className="text-amber-500 flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-500 leading-none mb-1">السجل التجاري</p>
                  <span className="body-sm text-slate-400">7053492240</span>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Shield size={18} className="text-amber-500 flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-500 leading-none mb-1">الرقم الضريبي</p>
                  <span className="body-sm text-slate-400">314591114700003</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif-display text-slate-50 mb-4">خدماتنا</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="body-sm text-slate-400 hover:text-amber-500 transition-colors">ميكانيكا عامة</a></li>
              <li><a href="#services" className="body-sm text-slate-400 hover:text-amber-500 transition-colors">كهرباء السيارات</a></li>
              <li><a href="#services" className="body-sm text-slate-400 hover:text-amber-500 transition-colors">فحص كمبيوتر</a></li>
              <li><a href="#services" className="body-sm text-slate-400 hover:text-amber-500 transition-colors">توضيب محركات</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif-display text-slate-50 mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <Phone size={18} className="text-amber-500 mt-1 flex-shrink-0" />
                <span className="body-sm text-slate-400">+966 53 019 0046</span>
              </li>
              <li className="flex gap-3 items-start">
                <Mail size={18} className="text-amber-500 mt-1 flex-shrink-0" />
                <span className="body-sm text-slate-400">info@al-atqan.biz</span>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-amber-500 mt-1 flex-shrink-0" />
                <span className="body-sm text-slate-400">المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-slate-800 py-12 mb-8">
          <div className="mb-8">
            <h4 className="font-serif-display text-slate-50 mb-8 text-center md:text-right text-lg">طرق الدفع المتاحة</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4 hover:from-slate-800 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <img src="https://cdn.salla.network/images/payment/mada_mini.png" alt="Mada" className="h-12 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4 hover:from-slate-800 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <img src="https://cdn.salla.network/images/payment/apple_pay_mini.png" alt="Apple Pay" className="h-12 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4 hover:from-slate-800 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <img src="https://cdn.salla.network/images/payment/tamara_installment_mini.png" alt="Tamara" className="h-12 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4 hover:from-slate-800 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <img src="https://cdn.salla.network/images/payment/credit_card_mini.png" alt="Credit Card" className="h-12 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4 hover:from-slate-800 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <img src="https://cdn.salla.network/images/payment/bank_mini.png" alt="Bank Transfer" className="h-12 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4 hover:from-slate-800 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <img src="https://cdn.salla.network/images/payment/cod_mini.png" alt="Cash on Delivery" className="h-12 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="body-sm text-slate-500">
              الحقوق محفوظة | 2026 مركز الإتقان الوافي لصيانة السيارات
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
