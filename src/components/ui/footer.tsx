
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-aram-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-aram-gold">آرام</span>
              <span className="text-sm text-white mr-1">للفعاليات</span>
            </div>
            <p className="text-gray-300 max-w-md">
              آرام للفعاليات هي شركة رائدة في تنظيم وإدارة الفعاليات الفاخرة في الإمارات العربية المتحدة، نقدم خدمات متكاملة لجميع أنواع المناسبات والفعاليات بأعلى مستويات الجودة والإبداع.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a
                href="#"
                className="bg-white/10 hover:bg-aram-gold/20 p-2 rounded-full transition-all duration-300"
              >
                <Instagram className="h-5 w-5 text-aram-gold" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-aram-gold/20 p-2 rounded-full transition-all duration-300"
              >
                <Facebook className="h-5 w-5 text-aram-gold" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-aram-gold/20 p-2 rounded-full transition-all duration-300"
              >
                <Twitter className="h-5 w-5 text-aram-gold" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-aram-gold">روابط سريعة</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-aram-gold transition-colors duration-300">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-aram-gold transition-colors duration-300">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-aram-gold transition-colors duration-300">
                  أعمالنا
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-aram-gold transition-colors duration-300">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-aram-gold transition-colors duration-300">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-aram-gold">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-aram-gold" />
                <span className="text-gray-300">دبي، الإمارات العربية المتحدة</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-aram-gold" />
                <a href="tel:+971XXXXXXXX" className="text-gray-300 hover:text-aram-gold transition-colors duration-300">
                  +971 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-aram-gold" />
                <a href="mailto:info@aram-uae.com" className="text-gray-300 hover:text-aram-gold transition-colors duration-300">
                  info@aram-uae.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-400">
          <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} آرام للفعاليات</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
