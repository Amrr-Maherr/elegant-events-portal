
import { Mail, Phone, MapPin, Instagram, Facebook, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8 lg:pt-8">
      {/* Logo */}
      <div className="flex justify-center lg:justify-start">
        <img 
          src="/lovable-uploads/8a01b01c-4202-4437-a91f-90f88853dc14.png" 
          alt="آرام للفعاليات" 
          className="h-24 object-contain mb-6"
        />
      </div>
      
      <div className="text-center lg:text-right">
        <p className="text-lg text-gray-700 mb-8">
          نحن هنا لمساعدتك في تنظيم فعاليتك القادمة. يمكنك التواصل معنا من خلال وسائل الاتصال المختلفة أو زيارتنا في مكتبنا.
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md transition-all hover:shadow-lg hover:scale-105">
          <div className="bg-aram-gold/20 p-3 rounded-full">
            <Phone className="h-6 w-6 text-aram-gold" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-1">هاتف</h3>
            <a href="tel:+971XXXXXXXX" className="text-lg font-medium text-aram-navy hover:text-aram-gold transition-colors">
              +971 XX XXX XXXX
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md transition-all hover:shadow-lg hover:scale-105">
          <div className="bg-aram-gold/20 p-3 rounded-full">
            <Mail className="h-6 w-6 text-aram-gold" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-1">البريد الإلكتروني</h3>
            <a href="mailto:info@aram-uae.com" className="text-lg font-medium text-aram-navy hover:text-aram-gold transition-colors">
              info@aram-uae.com
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md transition-all hover:shadow-lg hover:scale-105">
          <div className="bg-aram-gold/20 p-3 rounded-full">
            <MapPin className="h-6 w-6 text-aram-gold" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-1">العنوان</h3>
            <p className="text-lg font-medium text-aram-navy">
              دبي، الإمارات العربية المتحدة
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md transition-all hover:shadow-lg hover:scale-105">
          <div className="bg-aram-gold/20 p-3 rounded-full">
            <Clock className="h-6 w-6 text-aram-gold" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-1">ساعات العمل</h3>
            <p className="text-lg font-medium text-aram-navy">
              السبت - الخميس: 9:00 ص - 6:00 م
            </p>
          </div>
        </div>
      </div>
      
      <div className="pt-6">
        <h3 className="text-xl font-bold text-aram-navy mb-4">تابعنا على وسائل التواصل</h3>
        <div className="flex gap-4">
          <a 
            href="#" 
            className="bg-white p-3 rounded-full shadow-md hover:bg-aram-gold/10 hover:shadow-lg transition-all"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6 text-aram-gold" />
          </a>
          <a 
            href="#" 
            className="bg-white p-3 rounded-full shadow-md hover:bg-aram-gold/10 hover:shadow-lg transition-all"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6 text-aram-gold" />
          </a>
          <a 
            href="#" 
            className="bg-white p-3 rounded-full shadow-md hover:bg-aram-gold/10 hover:shadow-lg transition-all"
            aria-label="Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-aram-gold">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
