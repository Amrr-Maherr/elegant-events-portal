import { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";

// --- Data for Owners/Founders (Updated and without images) ---
const owners = [
  {
    id: 1,
    name: "محاسب / محمد عصام منصور",
    role: "الرئيس التنفيذى والعضو المنتدب",
    // تم حذف حقل الصورة image
    quote: "نؤمن في آرام بأن كل حدث هو فرصة لخلق ذكريات تدوم، ونسعى لتحقيق ذلك بأعلى معايير الجودة والابتكار." // اقتباس مؤقت - قم بتحديثه
  },
  {
    id: 2,
    name: "مهندس / على عصام منصور",
    role: "رئيس مجلس الادارة",
    // تم حذف حقل الصورة image
    quote: "رؤيتنا هي أن نكون الخيار الأول لتنظيم الفعاليات الفاخرة، مع التركيز على التفاصيل الدقيقة وتقديم تجارب لا مثيل لها لعملائنا." // اقتباس مؤقت - قم بتحديثه
  },
];

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
    if (owners.length > 1) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex, owners.length]);

  // Reset interval on manual navigation
  const handleManualNavigation = (callback: () => void) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    callback();
    if (owners.length > 1) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
  };

  // Animation on scroll
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // التأكد من أن الكلاس لم يضف بالفعل لتجنب إعادة التشغيل
          if (!entry.target.classList.contains('animate-fade-in')) {
            entry.target.classList.add('animate-fade-in');
          }
          // لا داعي لـ unobserve إذا كنت تريد تشغيل الأنيميشن مرة واحدة لكل عنصر
          // observer.unobserve(entry.target); 
        }
         // يمكنك إضافة else لإزالة الكلاس إذا خرج العنصر من العرض (إذا أردت إعادة الأنيميشن)
         // else {
         //   entry.target.classList.remove('animate-fade-in');
         // }
      });
    }, observerOptions);

    const currentRef = sectionRef.current; // حفظ المرجع الحالي
    if (currentRef) {
      observer.observe(currentRef);
    }

    // دالة التنظيف
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // إيقاف المراقبة عند إزالة المكون
      }
    };
  }, []); // تشغيل التأثير مرة واحدة عند التحميل


  // Return null if there are no owners
  if (owners.length === 0) {
    return null;
  }

  return (
    // افترض أن animate-fade-in يجعل opacity: 1 و transform: none
    // وأضف transition-opacity duration-1000 للمرجع لمشاهدة التأثير
    <section
      ref={sectionRef}
      className="section-padding bg-aram-navy relative overflow-hidden opacity-0 transition-opacity duration-1000 ease-out" // تمت إضافة transition ومُدة
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
            كلمة <span className="text-aram-gold">الملاك</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            تعرف على رؤية وقيم مؤسسي آرام للفعاليات من خلال كلماتهم
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-4">
           {/* تأكد من أن min-height مناسب بدون الصور */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12 min-h-[280px] flex items-center justify-center">
            <div className="absolute -top-6 right-8 text-aram-gold opacity-80">
              <Quote size={64} />
            </div>

            {/* --- Map over owners array (without images) --- */}
            {owners.map((owner, index) => (
              <div
                key={owner.id}
                className={`transition-opacity duration-500 ease-in-out absolute inset-0 p-8 md:p-12 flex flex-col justify-center ${
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <blockquote className="text-xl md:text-2xl text-white mb-8 text-center leading-relaxed">
                  "{owner.quote}"
                </blockquote>

                 {/* --- Owner Name and Role (Centered) --- */}
                <div className="flex items-center justify-center mt-6">
                  <div className="text-center"> {/* جعل النص بالكامل في الوسط */}
                    <h4 className="text-aram-gold font-bold text-lg">{owner.name}</h4>
                    <p className="text-white/70">{owner.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation - Only show if more than one owner */}
          {owners.length > 1 && (
            <div className="flex justify-center mt-8 gap-6">
              <button
                onClick={() => handleManualNavigation(prevSlide)}
                className="p-2 rounded-full bg-white/10 hover:bg-aram-gold/30 text-white transition-all duration-300"
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
                        ? "bg-aram-gold w-6"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`الانتقال إلى بيان المالك ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => handleManualNavigation(nextSlide)}
                className="p-2 rounded-full bg-white/10 hover:bg-aram-gold/30 text-white transition-all duration-300"
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

// --- تعريف أنيميشن animate-fade-in في ملف CSS الرئيسي (مثل index.css) ---
/*
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }
}

body {
  font-family: 'Cairo', sans-serif;
  @apply antialiased;
}

*/