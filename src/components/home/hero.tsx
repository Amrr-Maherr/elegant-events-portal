
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import CustomButton from "../ui/custom-button";
import Logo from "../ui/logo";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (heroRef.current) {
        // Parallax effect
        heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Set loaded state for animations
    setTimeout(() => setIsLoaded(true), 100);
    
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
        <div className={`max-w-4xl space-y-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col items-center justify-center mb-4">
            <Logo size="lg" withText={false} className="mb-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="text-gradient-gold">آرام</span> للفعاليات
            </h1>
          </div>
          <p className="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto">
            نحول أفكاركم إلى فعاليات استثنائية خالدة
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <CustomButton
              variant="gradient"
              size="lg"
              withIcon
              className="group"
              onClick={() => window.location.href = '/contact'}
            >
              اطلب عرض سعر
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </CustomButton>
            
            <CustomButton
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/services'}
            >
              خدماتنا
            </CustomButton>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a 
            href="#services" 
            className="text-white/80 hover:text-white transition-colors duration-300 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm"
          >
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
