import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import Logo from "./logo"; // تأكد من صحة المسار

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(
    () => typeof window !== 'undefined' && localStorage.getItem("isDark") === "true" // التهيئة الأولية من اللوكال ستوريج
  );
  const location = useLocation();

  // تطبيق الثيم وتحديث اللوكال ستوريج
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem("isDark", "true");
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("isDark", "false");
    }
  }, [isDark]);

  // التعامل مع السكرول لتغيير خلفية الناف بار
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check scroll position on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // إغلاق القائمة عند تغيير المسار
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // --- قفل سكرول الصفحة عند فتح قائمة الموبايل ---
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // دالة التنظيف لاستعادة السكرول عند إزالة المكون
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  // --- نهاية قفل السكرول ---

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "خدماتنا", path: "/services" },
    { name: "أعمالنا", path: "/portfolio" },
    { name: "من نحن", path: "/about" },
    { name: "معرض الصور", path: "/gallery" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 transition-all duration-300 ${
          scrolled || isOpen // اجعل الخلفية ثابتة إذا كانت القائمة مفتوحة أيضاً
            ? "bg-white/90 dark:bg-aram-navy/90 shadow-md backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* --- Logo --- */}
          <Logo size="md" withText={true} />

          {/* --- Desktop Navigation --- */}
          <div className="hidden md:flex items-center space-x-6 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2 py-1 transition-all duration-300 hover:text-aram-gold ${
                  location.pathname === link.path
                    ? "text-aram-gold border-b-2 border-aram-gold"
                    : "text-aram-navy dark:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* --- Right Side Icons (Theme Toggle & Mobile Menu Button) --- */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
              className="rounded-full p-2 hover:bg-aram-beige/50 dark:hover:bg-aram-navy/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-aram-gold focus-visible:ring-offset-2 dark:focus-visible:ring-offset-aram-navy transition-all"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-aram-gold" />
              ) : (
                <Moon className="w-5 h-5 text-aram-navy" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-aram-navy dark:text-white p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-aram-gold focus-visible:ring-offset-2 dark:focus-visible:ring-offset-aram-navy"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-menu" // ربط الزر بقائمة الموبايل
              aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- Mobile Navigation Menu --- */}
      {/* استخدام div منفصل للـ backdrop والـ overlay */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${ // z-index أقل من الناف بار للسماح للناف بار بالظهور فوقه
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop (optional, for clicking outside to close) */}
        {/* <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={toggleMenu}></div> */}

        {/* Menu Content */}
        <div
           className={`fixed top-16 bottom-0 left-0 right-0 bg-white dark:bg-aram-navy shadow-lg overflow-y-auto transition-transform duration-300 ease-in-out ${ // إبدأ من بعد الناف بار
              isOpen ? "translate-x-0" : "-translate-x-full" // Slide in animation
           } `}
          // style={{ paddingTop: '64px' }} // Add padding top equal to navbar height if needed, but top-16 should work
        >
          <div className="flex flex-col items-center justify-center min-h-full py-10 px-5 gap-6">
            {/* --- إزالة اللوجو المكرر من هنا --- */}
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block w-full text-center text-lg font-medium py-3 rounded-md transition-all duration-200 hover:bg-aram-beige/50 dark:hover:bg-aram-navy/50 hover:text-aram-gold ${
                  location.pathname === link.path
                    ? "text-aram-gold bg-aram-beige/30 dark:bg-aram-navy/30"
                    : "text-aram-navy dark:text-white"
                }`}
                // يمكنك إضافة الأنيميشن هنا إذا أردت تأثير الظهور المتتابع
                // style={{ animation: isOpen ? `fadeInUp 0.5s ease forwards ${index * 0.1}s` : 'none' }}
                onClick={toggleMenu} // Close menu on link click
              >
                {link.name}
              </Link>
            ))}
             {/* Optional: Add a divider or contact button at the bottom */}
             <div className="mt-8 border-t border-gray-200 dark:border-gray-700 w-full max-w-xs mx-auto"></div>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="mt-6 inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-aram-gold hover:bg-aram-gold/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aram-gold dark:focus:ring-offset-aram-navy"
              >
                تواصل معنا الآن
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// --- ملاحظة هامة للـ Animation ---
// إذا كنت تريد استخدام fadeInUp أو animate-fade-in:
// تأكد من تعريف keyframes و animation في ملف tailwind.config.js
/* مثال في tailwind.config.js:
theme: {
  extend: {
    keyframes: {
      fadeInUp: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      fadeIn: { // لـ animate-fade-in
         '0%': { opacity: '0' },
         '100%': { opacity: '1'},
      }
      // ... other keyframes
    },
    animation: {
      fadeInUp: 'fadeInUp 0.5s ease-out forwards',
      'fade-in': 'fadeIn 0.3s ease-out forwards', // لـ animate-fade-in
      // ... other animations
    },
  },
},
*/