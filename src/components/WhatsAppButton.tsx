import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "+966530190046";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s+/g, '')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute left-full ml-3 bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm whitespace-nowrap pointer-events-none">
        تواصل معنا عبر واتساب
      </span>
    </a>
  );
};

export default WhatsAppButton;
