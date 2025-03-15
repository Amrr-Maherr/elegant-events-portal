
import { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "أحمد الهاشمي",
    role: "الرئيس التنفيذي، شركة النور للاستثمار",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    quote: "تعاملنا مع آرام للفعاليات كان تجربة استثنائية. الفريق احترافي ومبدع، قدموا لنا حدثًا فاق توقعاتنا من حيث التنظيم والإبداع."
  },
  {
    id: 2,
    name: "سارة المنصوري",
    role: "عروس سابقة",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    quote: "حفل زفافي كان حلمًا تحقق بفضل فريق آرام. الاهتمام بالتفاصيل والديكورات الرائعة جعلت يومنا لا يُنسى. أنصح بشدة بخدماتهم."
  },
  {
    id: 3,
    name: "محمد العلي",
    role: "مدير التسويق، مجموعة الخليج",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    quote: "نظمت آرام مؤتمرنا السنوي بمستوى عالمي. الخدمة الشاملة من التخطيط حتى التنفيذ كانت مثالية. نتطلع للعمل معهم في جميع فعالياتنا القادمة."
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto slide
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex]);

  // Reset interval on manual navigation
  const handleManualNavigation = (callback: () => void) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    callback();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  // Animation on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-aram-navy relative overflow-hidden opacity-0">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <div className="w-64 h-64 rounded-full bg-aram-gold blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-10">
        <div className="w-96 h-96 rounded-full bg-aram-gold blur-3xl"></div>
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            آراء <span className="text-aram-gold">عملائنا</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            نفخر بثقة عملائنا ونسعد بمشاركة تجاربهم مع خدماتنا
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-4">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12">
            <div className="absolute -top-6 right-8 text-aram-gold opacity-80">
              <Quote size={64} />
            </div>

            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === activeIndex ? "block" : "hidden"
                }`}
              >
                <blockquote className="text-xl md:text-2xl text-white mb-8 text-center">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center justify-center">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-aram-gold">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center md:text-right">
                      <h4 className="text-aram-gold font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-white/70">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-6">
            <button 
              onClick={() => handleManualNavigation(prevSlide)}
              className="p-2 rounded-full bg-white/10 hover:bg-aram-gold/30 text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronRight size={24} />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleManualNavigation(() => setActiveIndex(index));
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? "bg-aram-gold w-6" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={() => handleManualNavigation(nextSlide)}
              className="p-2 rounded-full bg-white/10 hover:bg-aram-gold/30 text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
