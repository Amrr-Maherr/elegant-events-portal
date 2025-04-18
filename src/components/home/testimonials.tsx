import { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";

// --- Updated Testimonials Data (Images removed from data or simply ignored in JSX) ---
const testimonials = [
  {
    id: 1,
    name: "مهره البستكى",
    role: "العميل الخاص بك", // Consider more specific role if possible
    // image property is no longer needed here
    quote: "تجربتي مع Aram كانت وايد حلوة! الفريق كان محترف ومنظم بشكل كبير. الحفلة كانت مثالية من كل النواحي، وكل التفاصيل كانت مرتبة بطريقة ممتازة. بنصح كل اللي يدور على تنظيم حفلة مميزة يتعامل وياهم."
  },
  {
    id: 2,
    name: "محمد العبدولى",
    role: "العميل الخاص بك", // Consider more specific role
    // image property is no longer needed here
    quote: "ألف شكر لفريق Aram على جعل يوم خطوبتنا لا يُنسى. الديكورات كانت مذهلة والخدمة كانت بروفيشنال جداً. الكل استانس بالحفلة وسعدنا بتعاونكم معانا."
  },
  {
    id: 3,
    name: "احمد المرزوقى",
    role: "العميل الخاص بك", // Consider more specific role
    // image property is no longer needed here
    quote: "أفضل شركة لتنظيم الحفلات بدون منازع! التعامل وياهم كان سهل وسلس، والنتيجة كانت أحلى من ما توقعنا. شكراً لكل أعضاء الفريق على جهدهم الرائع."
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
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (testimonials.length > 1) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex, testimonials.length]);

  // Reset interval on manual navigation
  const handleManualNavigation = (callback: () => void) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    callback();
    if (testimonials.length > 1) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
  };

  // Animation on scroll
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains('animate-fade-in')) {
               entry.target.classList.add('animate-fade-in');
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-aram-navy relative overflow-hidden opacity-0 transition-opacity duration-1000 ease-out"
    >
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
           {/* Adjusted min-height */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12 min-h-[280px] flex items-center justify-center">
            <div className="absolute -top-6 right-8 text-aram-gold opacity-80">
              <Quote size={64} />
            </div>

            {/* Map over testimonials (without images) */}
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ease-in-out absolute inset-0 p-8 md:p-12 flex flex-col justify-center ${
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <blockquote className="text-xl md:text-2xl text-white mb-8 text-center leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                 {/* --- Name and Role Section (Centered) --- */}
                <div className="flex items-center justify-center mt-6"> {/* Add margin-top for spacing */}
                  <div className="text-center"> {/* Center the text block */}
                    <h4 className="text-aram-gold font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-white/70">{testimonial.role}</p>
                  </div>
                  {/* Image div removed */}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation - Only show if more than one testimonial */}
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-8 gap-6">
              <button
                onClick={() => handleManualNavigation(prevSlide)}
                className="p-2 rounded-full bg-white/10 hover:bg-aram-gold/30 text-white transition-all duration-300"
                aria-label="الشهادة السابقة"
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
                    aria-label={`الانتقال إلى الشهادة ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => handleManualNavigation(nextSlide)}
                className="p-2 rounded-full bg-white/10 hover:bg-aram-gold/30 text-white transition-all duration-300"
                aria-label="الشهادة التالية"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

// Reminder for animation CSS definition
/*
@layer utilities {
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }
}
*/