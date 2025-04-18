
import { useEffect } from "react";
import Hero from "@/components/home/hero";
import ServicesSection from "@/components/home/services";
import TestimonialsSection from "@/components/home/testimonials";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Calendar, Camera, Palette, Music, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import OwnersSection from "@/components/home/OwnersSection";

const Index = () => {
  // Set page title
  useEffect(() => {
    document.title = "آرام للفعاليات | الرئيسية";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesSection />
      
      {/* About Us Section */}
      <section className="section-padding bg-white dark:bg-aram-navy/90">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full border-4 border-aram-gold rounded-xl"></div>
                <img 
  src="https://picsum.photos/600/400" 
  alt="Random Image" 
  className="rounded-xl w-full h-auto relative z-10"
/>

              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6 text-aram-navy dark:text-white">
                نبذة <span className="text-aram-gold">عنا</span>
              </h2>
              <p className="text-aram-navy/80 dark:text-white/80 mb-6">
                آرام للفعاليات هي شركة رائدة في تنظيم وإدارة الفعاليات الفاخرة في الإمارات العربية المتحدة. منذ تأسيسنا، نجحنا في تقديم خدمات متميزة لعملائنا من الأفراد والشركات.
              </p>
              <p className="text-aram-navy/80 dark:text-white/80 mb-8">
                نضع خبرتنا وإبداعنا في خدمتكم لتحويل أفكاركم إلى واقع ملموس، ونلتزم بتوفير تجربة استثنائية في كل فعالية ننظمها، مهما كان حجمها أو نوعها.
              </p>
              <Link to="/about" className="bg-aram-gold px-8 py-3 rounded-md text-aram-navy font-bold transition-all duration-300 hover:bg-aram-navy hover:text-white inline-block">
                المزيد عنا
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section-padding bg-gradient-to-b from-aram-beige to-white dark:from-aram-navy/80 dark:to-aram-navy/95">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-aram-navy dark:text-white">
              لماذا <span className="text-aram-gold">تختارنا</span>
            </h2>
            <p className="text-aram-navy/70 dark:text-white/70 text-lg max-w-3xl mx-auto">
              نقدم خدمات متكاملة بمعايير عالمية تميزنا عن غيرنا في مجال تنظيم الفعاليات
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 rounded-xl hover:shadow-xl transition-all duration-300 card-hover">
              <div className="bg-aram-gold/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-aram-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-aram-navy dark:text-white">تخطيط شامل</h3>
              <p className="text-aram-navy/70 dark:text-white/70">
                نقدم خدمات تخطيط كاملة من البداية إلى النهاية، مع تصميم مخصص لكل عميل.
              </p>
            </div>
            
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 rounded-xl hover:shadow-xl transition-all duration-300 card-hover">
              <div className="bg-aram-gold/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-aram-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-aram-navy dark:text-white">تصميم إبداعي</h3>
              <p className="text-aram-navy/70 dark:text-white/70">
                فريق تصميم متخصص يبتكر أجواء فريدة تناسب طابع كل فعالية.
              </p>
            </div>
            
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 rounded-xl hover:shadow-xl transition-all duration-300 card-hover">
              <div className="bg-aram-gold/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Camera className="w-8 h-8 text-aram-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-aram-navy dark:text-white">توثيق احترافي</h3>
              <p className="text-aram-navy/70 dark:text-white/70">
                خدمات تصوير فوتوغرافي وفيديو عالية الجودة لتوثيق جميع لحظات الفعالية.
              </p>
            </div>
            
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 rounded-xl hover:shadow-xl transition-all duration-300 card-hover">
              <div className="bg-aram-gold/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Music className="w-8 h-8 text-aram-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-aram-navy dark:text-white">أنظمة صوتية متطورة</h3>
              <p className="text-aram-navy/70 dark:text-white/70">
                أحدث التقنيات الصوتية والإضاءة لإضفاء أجواء مثالية في كل مناسبة.
              </p>
            </div>
            
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 rounded-xl hover:shadow-xl transition-all duration-300 card-hover">
              <div className="bg-aram-gold/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-aram-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-aram-navy dark:text-white">فريق محترف</h3>
              <p className="text-aram-navy/70 dark:text-white/70">
                نخبة من المتخصصين ذوي الخبرة الواسعة في مجال تنظيم الفعاليات.
              </p>
            </div>
            
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 rounded-xl hover:shadow-xl transition-all duration-300 card-hover">
              <div className="bg-aram-gold/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-aram-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-aram-navy dark:text-white">جودة استثنائية</h3>
              <p className="text-aram-navy/70 dark:text-white/70">
                نلتزم بأعلى معايير الجودة في جميع عناصر الفعالية لضمان تجربة لا تُنسى.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialsSection />
      <OwnersSection/>
      {/* Contact CTA */}
      <section className="py-16 bg-aram-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            تواصل معنا <span className="text-aram-gold">لتنظيم فعاليتك القادمة</span>
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            نحن جاهزون لمساعدتك في تخطيط وتنفيذ مناسبتك القادمة بأعلى معايير التميز والإبداع
          </p>
          <Link
            to="/contact"
            className="bg-aram-gold px-8 py-4 rounded-md text-aram-navy font-bold text-lg transition-all duration-300 hover:bg-white"
          >
            احصل على استشارة مجانية
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
