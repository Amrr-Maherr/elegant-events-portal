import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import Logo from "./logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  // تحقق من حالة الدارك مود عند تحميل الصفحة
  useEffect(() => {
    const savedTheme = localStorage.getItem("isDark");
    if (savedTheme === "true") {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("isDark", "false"); // حفظ الحالة في اللوكال ستوريج
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem("isDark", "true"); // حفظ الحالة في اللوكال ستوريج
      setIsDark(true);
    }
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 transition-all duration-300 ${scrolled ? "bg-white/80 dark:bg-aram-navy/80 shadow-md backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Logo size="md" withText={true} />

        {/* Desktop Navigation */}
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

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="rounded-full p-2 hover:bg-aram-beige/50 dark:hover:bg-aram-navy/50 transition-all"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-aram-gold" />
            ) : (
              <Moon className="w-5 h-5 text-aram-navy" />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-aram-navy dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 mt-16 bg-white dark:bg-aram-navy/95 animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Logo size="lg" withText={false} className="mb-8" />
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-medium transition-all duration-300 hover:text-aram-gold ${
                  location.pathname === link.path
                    ? "text-aram-gold"
                    : "text-aram-navy dark:text-white"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
