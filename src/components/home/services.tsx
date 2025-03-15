
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const services = [
  {
    id: 1,
    title: "حفلات الزفاف",
    description: "نقدم خدمات متكاملة لتنظيم حفلات الزفاف الفاخرة بتصميم فريد لكل عروسين.",
    image: "https://images.unsplash.com/photo-1519741347686-c1e331c20a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    title: "فعاليات الشركات",
    description: "نخطط وننظم الفعاليات والمؤتمرات الشركات بأعلى معايير الاحترافية والإبداع.",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    title: "المعارض والمناسبات",
    description: "نصمم وننفذ المعارض والمناسبات الخاصة بأحدث التقنيات وأرقى التصاميم.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    title: "خدمات التصوير",
    description: "نوثق لحظاتكم الخاصة باحترافية عالية مع أفضل المصورين وأحدث المعدات.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-aram-cream dark:bg-aram-navy/95 opacity-0">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-aram-navy dark:text-white">
            خدماتنا <span className="text-aram-gold">المميزة</span>
          </h2>
          <p className="text-aram-navy/70 dark:text-white/70 text-lg max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات الاحترافية لتنظيم وإدارة الفعاليات الفاخرة في الإمارات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => cardsRef.current[index] = el}
              className="bg-white dark:bg-aram-navy/80 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 opacity-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-aram-navy dark:text-white">{service.title}</h3>
                <p className="text-aram-navy/70 dark:text-white/70 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="text-aram-gold flex items-center gap-2 hover:gap-4 transition-all duration-300"
                >
                  <span>المزيد</span>
                  <ArrowLeft size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-block bg-aram-gold px-8 py-3 rounded-md text-aram-navy font-bold transition-all duration-300 hover:bg-aram-navy hover:text-white"
          >
            جميع الخدمات
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
