import { useEffect } from "react";
import Navbar from "@/components/ui/navbar"; // تأكد من صحة المسار
import Footer from "@/components/ui/footer";   // تأكد من صحة المسار
import CustomButton from "@/components/ui/custom-button"; // تأكد من صحة المسار
import { Link } from "react-router-dom";
import { Check, ArrowLeftCircle } from "lucide-react";

// --- Updated Services Data with New Placeholders ---
const services = [
  {
    id: 1,
    title: "باقة تنظيم الفعاليات الشاملة (100 شخص)",
    description: "باقة متكاملة لتنظيم المناسبات تشمل تصميم الكوشة، الممر، الديكورات، الدي جي، الطاولات والكراسي، الضيافة، الإضاءة، المقبلات/البوفيه، وتصوير فوتوغرافي لـ 100 شخص. السعر: 43,600 درهم.",
    // New Placeholder: General elegant event/wedding reception
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80",
    features: [
      "كوشة حسب الاختيار",
      "ممر واستيدج متناسق",
      "ديكورات للسقف مع ورد",
      "دي جي ومؤثرات صوتية",
      "طاولات وكراسي لـ 100 شخص",
      "خدمات المشروبات والضيافة (مقهويات)",
      "نظام إضاءة متكامل",
      "مقبلات أو بوفيه حسب الاختيار (لـ 100 شخص)",
      "4 كنب استقبال مع 4 كوفي تيبل",
      "تصوير فوتوغرافي",
      "مدخل استقبال مزين",
      "طاولات للعطور وطاولة للكيك",
      "مليكان للشبكة ومليكان للعروس",
      "مطبوعات مخصصة (بطاقات ترحيب، كلينكس، إلخ)"
    ]
  },
  {
    id: 2,
    title: "باقة تصميم الكوشة الاحترافية",
    description: "تصميم وتنفيذ كوشة مميزة بأحدث التصاميم مع الممر والاستيدج لإضفاء لمسة فاخرة على مناسبتك. السعر: 32,000 درهم.",
     // New Placeholder: Focus on wedding stage / Kosha decoration
    image: "https://images.unsplash.com/photo-1606141415309-7e145d4d7f1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    features: [
      "كوشة بأحدث تصميمات الشركة",
      "استيدج وممر متناسق",
    ]
  },
  {
    id: 3,
    title: "باقة ليلة الخطوبة المميزة (50 شخص)",
    description: "باقة مصممة خصيصاً لليلة الخطوبة، تشمل الكوشة، التصوير الفوتوغرافي والفيديو، الدي جي، الضيافة، وتجهيز الطاولات والكراسي لـ 50 ضيفاً. السعر: 9,400 درهم.",
     // New Placeholder: Engagement party / celebration atmosphere
    image: "https://images.unsplash.com/photo-1611106733911-445c8f0f40e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    features: [
      "كوشة مناسبة للخطوبة",
      "تصوير فوتوغرافي",
      "تصوير فيديو",
      "دي جي",
      "خدمات المشروبات والضيافة (مقهويات)",
      "5 طاولات أكريليك",
      "50 كرسي حسب الاختيار",
    ]
  },
  {
    id: 4,
    title: "باقة ليلة الخطوبة الأساسية",
    description: "باقة أساسية وأنيقة لليلة الخطوبة تركز على تصميم الكوشة، الاستيدج، الممر، مع التصوير الفوتوغرافي، الدي جي، وتصميم المدخل والمطبوعات. السعر: 9,400 درهم.",
    // New Placeholder: Similar engagement/party vibe, perhaps simpler decor focus
    image: "https://images.unsplash.com/photo-1587271681344-1a106e057999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    features: [
      "كوشة مناسبة للخطوبة",
      "استيدج",
      "ممر",
      "تصوير فوتوغرافي",
      "دي جي",
      "مدخل استقبال",
      "مطبوعات مخصصة"
    ]
  },
];

// --- Rest of the component code remains the same ---

const Services = () => {
  useEffect(() => {
    document.title = "آرام للفعاليات | الباقات والخدمات";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-aram-navy/95">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b h-screen flex items-center justify-center flex-col from-aram-beige to-white dark:from-aram-navy dark:to-aram-navy/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-aram-navy dark:text-white">
            باقاتنا <span className="text-aram-gold">وخدماتنا</span>
          </h1>
          <p className="text-aram-navy/70 dark:text-white/70 max-w-3xl mx-auto mb-8 text-lg">
            نقدم باقات متنوعة وخدمات متكاملة لتنظيم وإدارة الفعاليات بأرقى المعايير لتناسب جميع احتياجاتكم
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-3 md:-inset-4 border-2 border-aram-gold/30 group-hover:border-aram-gold/60 rounded-xl transform -rotate-2 transition-all duration-300 group-hover:rotate-[-3deg]"></div>
                    <img
                      src={service.image} // Uses the updated placeholder URL
                      alt={service.title}
                      className="rounded-xl w-full h-auto object-cover aspect-video relative z-10 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-aram-navy dark:text-white">{service.title}</h2>
                  <p className="text-aram-navy/70 dark:text-white/70 text-lg leading-relaxed">{service.description}</p>

                  <div className="mt-6 space-y-3">
                    <h3 className="text-lg font-semibold text-aram-navy dark:text-white mb-3">تشمل الباقة:</h3>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="bg-aram-gold/10 dark:bg-aram-gold/20 p-1 rounded-full mt-1 flex-shrink-0">
                          <Check className="w-4 h-4 text-aram-gold" />
                        </div>
                        <span className="text-aram-navy/80 dark:text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link to="/contact">
                      <CustomButton variant="primary" size="md">
                        اطلب هذه الباقة
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
            هل تحتاج إلى <span className="text-aram-gold">باقة مخصصة</span>؟
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            نحن نقدم حلولاً مخصصة لتلبية احتياجاتك الخاصة. تواصل معنا لمناقشة متطلباتك وسنعمل معك لتصميم الباقة المثالية لفعاليتك.
          </p>
          <Link to="/contact">
            <CustomButton variant="primary" size="lg" className="group">
              <span>تواصل معنا الآن</span>
              <ArrowLeftCircle className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </CustomButton>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;