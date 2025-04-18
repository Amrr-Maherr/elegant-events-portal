import { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";

// --- Data for Owners/Founders ---
const owners = [
  {
    id: 1,
    name: "محاسب / محمد عصام منصور",
    role: "الرئيس التنفيذى والعضو المنتدب",
    quote: "نؤمن في آرام بأن كل حدث هو فرصة لخلق ذكريات تدوم، ونسعى لتحقيق ذلك بأعلى معايير الجودة والابتكار."
  },
  {
    id: 2,
    name: "مهندس / على عصام منصور",
    role: "رئيس مجلس الادارة",
    quote: "رؤيتنا هي أن نكون الخيار الأول لتنظيم الفعاليات الفاخرة، مع التركيز على التفاصيل الدقيقة وتقديم تجارب لا مثيل لها لعملائنا. نحن هنا لتحويل رؤيتكم إلى واقع ملموس يتجاوز التوقعات." // مثال اقتباس أطول
  },
];


// --- تعريف أنيميشن بسيط للتلاشي (ضع هذا في ملف CSS أو استخدم Tailwind config) ---
// يمكنك إعادة استخدام نفس الأنيميشن المستخدم في قسم آراء العملاء
/*
@keyframes fadeInTestimonial {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in-testimonial {
  animation: fadeInTestimonial 0.5s ease-in-out forwards;
}

// وأيضاً الأنيميشن الخاص بالقسم نفسه
@keyframes fadeInSection {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-section {
  animation: fadeInSection 0.8s ease-out forwards;
}
*/


const OwnersSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % owners.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? owners.length - 1 : prevIndex - 1
    );
  };

  // Auto slide
  useEffect(() => {
    if (intervalRef.current) {
        clearInterval(intervalRef.current);
    }
    if (owners.length > 1) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex, owners.length]); // إعادة تعيين المؤقت عند تغير الشريحة أو عدد الملاك

  // Reset interval on manual navigation
  const handleManualNavigation = (callback: () => void) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    callback(); // Execute the navigation (nextSlide or prevSlide)
    // Restart the interval after manual navigation
    if (owners.length > 1) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
  };

  // Animation on scroll for the whole section
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Use a specific class for the section animation if defined
            entry.target.classList.add('opacity-100'); // Simple fade in
            // Or entry.target.classList.add('animate-fade-in-section');
            observer.unobserve(entry.target); // Animate only once
        }
      });
    }, observerOptions);

    const currentRef = sectionRef.current;
    if (currentRef) {
      currentRef.classList.add('opacity-0'); // Start hidden
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Run once on mount


  // Return null if there are no owners
  if (!owners || owners.length === 0) {
    return null;
  }

  // --- احصل على بيانات المالك النشط ---
  const activeOwner = owners[activeIndex];

  // Return null if somehow activeOwner is not found (safety check)
  if (!activeOwner) {
      return null;
  }

  return (
    <section
      ref={sectionRef}
      // Apply transition for the opacity change triggered by IntersectionObserver
      className="section-padding bg-aram-navy relative overflow-hidden transition-opacity duration-1000 ease-out"
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 -z-10 opacity-10 pointer-events-none">
        <div className="w-64 h-64 rounded-full bg-aram-gold blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-10 pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-aram-gold blur-3xl"></div>
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            كلمة <span className="text-aram-gold">الملاك</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            تعرف على رؤية وقيم مؤسسي آرام للفعاليات من خلال كلماتهم
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-4">
           {/* --- الحاوية الرئيسية بدون ارتفاع أدنى ثابت --- */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12 flex justify-center items-start"> {/* Changed to items-start */}
            <div className="absolute -top-6 right-8 text-aram-gold opacity-80 z-10"> {/* Quote icon above text */}
              <Quote size={64} />
            </div>

            {/* --- عرض محتوى المالك النشط فقط --- */}
            <div
                key={activeIndex} // مهم للانتقال: إعادة التركيب عند التغيير
                className="w-full animate-fade-in-testimonial" // تطبيق أنيميشن التلاشي هنا
              >
                <blockquote className="text-xl md:text-2xl text-white mb-8 text-center leading-relaxed break-words relative z-0"> {/* Added break-words and z-0 */}
                  "{activeOwner.quote}"
                </blockquote>

                 {/* Owner Name and Role */}
                <div className="flex items-center justify-center mt-6">
                  <div className="text-center">
                    <h4 className="text-aram-gold font-bold text-lg">{activeOwner.name}</h4>
                    <p className="text-white/70">{activeOwner.role}</p>
                  </div>
                </div>
              </div>
              {/* --- نهاية عرض المحتوى النشط --- */}

          </div>

          {/* Navigation - Only show if more than one owner */}
          {owners.length > 1 && (
            <div className="flex justify-center mt-8 gap-6">
              <button
                onClick={() => handleManualNavigation(prevSlide)}
                className="p-2 rounded-full bg-white/10 hover:bg-aram-gold/30 text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-aram-gold focus-visible:ring-offset-2 focus-visible:ring-offset-aram-navy"
                aria-label="البيان السابق للمالك"
              >
                <ChevronRight size={24} />
              </button>

              <div className="flex gap-2 items-center">
                {owners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      handleManualNavigation(() => setActiveIndex(index));
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-aram-gold w-6" // نقطة نشطة أطول
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`الانتقال إلى بيان المالك ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => handleManualNavigation(nextSlide)}
                className="p-2 rounded-full bg-white/10 hover:bg-aram-gold/30 text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-aram-gold focus-visible:ring-offset-2 focus-visible:ring-offset-aram-navy"
                aria-label="البيان التالي للمالك"
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

export default OwnersSection;