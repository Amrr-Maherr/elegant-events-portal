import { Link } from "react-router-dom";
// أيقونات من Lucide
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Youtube } from "lucide-react"; 
// أيقونات إضافية من React Icons (Simple Icons)
import { SiTiktok, SiSnapchat } from 'react-icons/si';

const Footer = () => {
  // تعريف الروابط لتسهيل القراءة والتعديل
  const socialLinks = {
    instagram: "https://www.instagram.com/aram.organize.parties/",
    facebook: "https://www.facebook.com/profile.php?id=61551106950807",
    tiktok: "https://www.tiktok.com/@aram_organize_parties", // تمت الإضافة
    youtube: "https://www.youtube.com/@ARAMorganizeparties",
    snapchat: "https://www.snapchat.com/add/aram_parties", // تمت الإضافة
    x: "https://x.com/ARAM_parties",
  };

  return (
    <footer className="bg-aram-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Section 1: Logo and Social */}
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-aram-gold">آرام</span>
              <span className="text-sm text-white mr-1">للفعاليات</span>
            </div>
            <p className="text-gray-300 max-w-md">
              آرام للفعاليات هي شركة رائدة في تنظيم وإدارة الفعاليات الفاخرة في الإمارات العربية المتحدة، نقدم خدمات متكاملة لجميع أنواع المناسبات والفعاليات بأعلى مستويات الجودة والإبداع.
            </p>
            {/* --- Social Links Updated with TikTok & Snapchat --- */}
            <div className="flex flex-wrap gap-4"> {/* Use gap-4 and flex-wrap for better spacing */}
              {/* Instagram */}
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="آرام للفعاليات على انستجرام"
                className="bg-white/10 hover:bg-aram-gold/20 p-2 rounded-full transition-all duration-300"
              >
                <Instagram className="h-5 w-5 text-aram-gold" />
              </a>
              {/* Facebook */}
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="آرام للفعاليات على فيسبوك"
                className="bg-white/10 hover:bg-aram-gold/20 p-2 rounded-full transition-all duration-300"
              >
                <Facebook className="h-5 w-5 text-aram-gold" />
              </a>
               {/* TikTok */}
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="آرام للفعاليات على تيك توك"
                className="bg-white/10 hover:bg-aram-gold/20 p-2 rounded-full transition-all duration-300"
              >
                <SiTiktok className="h-5 w-5 text-aram-gold" /> {/* Icon from react-icons */}
              </a>
              {/* YouTube */}
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="آرام للفعاليات على يوتيوب"
                className="bg-white/10 hover:bg-aram-gold/20 p-2 rounded-full transition-all duration-300"
              >
                <Youtube className="h-5 w-5 text-aram-gold" />
              </a>
              {/* Snapchat */}
              <a
                href={socialLinks.snapchat}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="آرام للفعاليات على سناب شات"
                className="bg-white/10 hover:bg-aram-gold/20 p-2 rounded-full transition-all duration-300"
              >
                <SiSnapchat className="h-5 w-5 text-aram-gold" /> {/* Icon from react-icons */}
              </a>
              {/* X (Twitter) */}
              <a
                href={socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="آرام للفعاليات على إكس (تويتر)"
                className="bg-white/10 hover:bg-aram-gold/20 p-2 rounded-full transition-all duration-300"
              >
                <Twitter className="h-5 w-5 text-aram-gold" />
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links */}
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

          {/* Section 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-aram-gold">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"> {/* Changed to items-start for potentially long text */}
                <MapPin className="h-5 w-5 text-aram-gold flex-shrink-0 mt-1" /> {/* Added mt-1 for alignment */}
                <span className="text-gray-300">دبي، الإمارات العربية المتحدة</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-aram-gold flex-shrink-0" />
                {/* تأكد من تحديث رقم الهاتف */}
                <a href="tel:+971000000000" className="text-gray-300 hover:text-aram-gold transition-colors duration-300 ltr">
                  +971 XX XXX XXXX 
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-aram-gold flex-shrink-0" />
                {/* تأكد من تحديث البريد الإلكتروني */}
                <a href="mailto:info@aram-uae.com" className="text-gray-300 hover:text-aram-gold transition-colors duration-300">
                  info@aram-uae.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-400">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} آرام للفعاليات</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;