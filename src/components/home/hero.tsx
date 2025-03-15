
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (heroRef.current) {
        // Parallax effect
        heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 bg-aram-navy/30 z-10"></div>
      <div ref={heroRef} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-aram-navy/80 to-transparent"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/vimeo/708865370/145590.mp4?width=1280&hash=92ac493e5c9fe96ef4abd9c3b8b8d7d1fef01b80" type="video/mp4" />
          يتصفحك لا يدعم تشغيل الفيديو
        </video>
      </div>
      
      {/* Content */}
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center z-20 relative px-4 md:px-0">
        <div className="max-w-4xl space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            <span className="text-gradient-gold">آرام</span> للفعاليات
          </h1>
          <p className="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto">
            نحول أفكاركم إلى فعاليات استثنائية خالدة
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              to="/contact"
              className="bg-aram-gold px-8 py-3 rounded-md text-aram-navy font-bold text-lg transition-all duration-300 hover:bg-white hover:shadow-lg"
            >
              اطلب عرض سعر
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white px-8 py-3 rounded-md text-white font-bold text-lg transition-all duration-300 hover:bg-white/10 hover:shadow-lg"
            >
              خدماتنا
            </Link>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#services" className="text-white/80 hover:text-white transition-colors duration-300">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
