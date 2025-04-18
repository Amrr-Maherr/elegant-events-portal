
import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import PortfolioGallery from "@/components/portfolio/portfolio-gallery";
import Logo from "@/components/ui/logo";

const Portfolio = () => {
  // Set page title
  useEffect(() => {
    document.title = "آرام للفعاليات | أعمالنا";
  }, []);

  return (
    <div className="min-h-screen bg-aram-cream dark:bg-aram-navy/95">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b h-screen flex items-center justify-center flex-col from-white to-aram-beige dark:from-aram-navy dark:to-aram-navy/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <Logo size="md" withText={false} className="mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-aram-navy dark:text-white mb-4">
              معرض <span className="text-aram-gold">أعمالنا</span>
            </h1>
            <p className="text-aram-navy/70 dark:text-white/70 max-w-2xl mx-auto">
              لمحة عن بعض الفعاليات والمناسبات التي نظمناها بأعلى معايير الجودة والإبداع
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <PortfolioGallery />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-aram-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            هل ترغب في <span className="text-aram-gold">تنظيم فعالية مميزة</span>؟
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            نحن هنا لمساعدتك في تحويل أفكارك إلى واقع ملموس مع التخطيط المتكامل والتنفيذ الاحترافي
          </p>
          <a
            href="/contact"
            className="bg-aram-gold px-8 py-4 rounded-md text-aram-navy font-bold text-lg transition-all duration-300 hover:bg-white"
          >
            تواصل معنا الآن
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
