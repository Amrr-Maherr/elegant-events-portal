
import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import CustomButton from "@/components/ui/custom-button";
import { Link } from "react-router-dom";
import { Check, ArrowLeftCircle } from "lucide-react";

const services = [
  {
    id: 1,
    title: "حفلات الزفاف",
    description: "نقدم خدمات متكاملة لتخطيط وتنظيم حفلات الزفاف الفاخرة، مع تصميم فريد وديكورات مبتكرة لجعل يومكم الخاص لا يُنسى.",
    image: "https://images.unsplash.com/photo-1519741347686-c1e331c20a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    features: [
      "تصميم وتنفيذ فريد للديكورات",
      "تنسيق الزهور والإضاءة",
      "الضيافة والمأكولات الفاخرة",
      "تنظيم قاعة الاحتفالات",
      "إدارة الحفل بالكامل",
      "خدمات التصوير والتوثيق"
    ]
  },
  {
    id: 2,
    title: "فعاليات الشركات",
    description: "نخطط وننظم الفعاليات والمؤتمرات الشركات بأعلى معايير الاحترافية، مع حلول مبتكرة تعكس هوية وقيم شركتكم.",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    features: [
      "تنظيم المؤتمرات والندوات",
      "إطلاق المنتجات والخدمات",
      "الفعاليات الترويجية",
      "حفلات الشركات السنوية",
      "ورش العمل والتدريب",
      "الضيافة وخدمات الطعام"
    ]
  },
  {
    id: 3,
    title: "المعارض والمناسبات",
    description: "نصمم وننفذ المعارض والمناسبات الخاصة بأحدث التقنيات وأرقى التصاميم، لضمان تجربة فريدة لكل زائر.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    features: [
      "تصميم أجنحة المعارض",
      "الإضاءة والأنظمة الصوتية",
      "الاستقبال والتنظيم",
      "توفير المعدات التقنية",
      "التسويق والترويج",
      "تسجيل الزوار وإدارة البيانات"
    ]
  },
  {
    id: 4,
    title: "خدمات التصوير",
    description: "نوثق لحظاتكم الخاصة باحترافية عالية مع أفضل المصورين وأحدث المعدات، لتخليد ذكرياتكم بأفضل جودة.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    features: [
      "التصوير الفوتوغرافي",
      "تصوير الفيديو",
      "تصوير جوي بواسطة الدرون",
      "التعديل والمونتاج الاحترافي",
      "ألبومات الصور الفاخرة",
      "استوديو متنقل للفعاليات"
    ]
  },
  {
    id: 5,
    title: "الصوتيات والإضاءة",
    description: "نقدم أحدث الأنظمة الصوتية وتقنيات الإضاءة المتطورة لإضفاء أجواء مثالية وتجربة بصرية وسمعية استثنائية.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    features: [
      "أنظمة صوتية متطورة",
      "إضاءة احترافية للمناسبات",
      "تأثيرات ضوئية خاصة",
      "أنظمة عرض وشاشات",
      "تقنيات الواقع المعزز",
      "دي جي وخدمات الموسيقى"
    ]
  },
  {
    id: 6,
    title: "التصميم والديكور",
    description: "فريق تصميم متخصص يبتكر أجواء فريدة تناسب طابع كل فعالية، مع اهتمام خاص بالتفاصيل والجودة العالية.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80",
    features: [
      "تصميم الديكورات المخصصة",
      "تنسيق الألوان والمواد",
      "تركيبات الإضاءة الديكورية",
      "الزهور والترتيبات النباتية",
      "قطع الأثاث والأكسسوارات",
      "تصميم المساحات التفاعلية"
    ]
  },
];

const Services = () => {
  useEffect(() => {
    document.title = "آرام للفعاليات | خدماتنا";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-aram-beige to-white dark:from-aram-navy dark:to-aram-navy/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-aram-navy dark:text-white">
            خدماتنا <span className="text-aram-gold">المتميزة</span>
          </h1>
          <p className="text-aram-navy/70 dark:text-white/70 max-w-3xl mx-auto mb-8 text-lg">
            نقدم باقة شاملة من الخدمات المتكاملة لتنظيم وإدارة الفعاليات بأرقى المعايير العالمية
          </p>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-16 bg-white dark:bg-aram-navy/95">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 border-2 border-aram-gold/50 rounded-xl transform -rotate-2"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="rounded-xl w-full h-auto relative z-10 shadow-lg"
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-aram-navy dark:text-white">{service.title}</h2>
                  <p className="text-aram-navy/70 dark:text-white/70 text-lg">{service.description}</p>
                  
                  <div className="mt-8 space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="bg-aram-gold/20 p-1 rounded-full mt-1">
                          <Check className="w-4 h-4 text-aram-gold" />
                        </div>
                        <span className="text-aram-navy/80 dark:text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <Link to="/contact">
                      <CustomButton variant="primary" size="md">
                        اطلب هذه الخدمة
                      </CustomButton>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 bg-aram-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-40 -top-40 w-80 h-80 bg-aram-gold rounded-full blur-3xl"></div>
          <div className="absolute -left-40 -bottom-40 w-80 h-80 bg-aram-gold rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            هل تحتاج إلى <span className="text-aram-gold">خدمة مخصصة</span>؟
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            نحن نقدم حلولاً مخصصة لتلبية احتياجاتك الخاصة. تواصل معنا لمناقشة متطلباتك وسنعمل معك لتصميم الخدمة المثالية لفعاليتك.
          </p>
          <Link to="/contact">
            <CustomButton variant="primary" size="lg" className="group">
              <span>تواصل معنا الآن</span>
              <ArrowLeftCircle className="mr-2 transition-transform group-hover:translate-x-1" />
            </CustomButton>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
