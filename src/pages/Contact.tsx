
import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "تواصل معنا | آرام للفعاليات";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-aram-navy to-aram-navy/90">
          <div className="absolute inset-0 bg-opacity-30 bg-black z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">تواصل معنا</h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                نحن متحمسون للاستماع إليك وتحويل أفكارك إلى واقع. تواصل معنا اليوم للاستفسار أو طلب عرض سعر.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Content */}
        <section className="py-16 bg-aram-cream/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ContactForm />
              
              {/* Contact Information */}
              <ContactInfo />
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-aram-navy text-center mb-8">موقعنا</h2>
            <div className="aspect-w-16 aspect-h-9 h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.6361388554687!2d55.27200497507869!3d25.197291877775376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4348c6690dc3%3A0x371f63c4438693f6!2sBurj%20Khalifa!5e0!3m2!1sen!2sus!4v1709047211249!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="آرام للفعاليات - الموقع"
              ></iframe>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-aram-gold/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-aram-navy mb-6">نتطلع للعمل معكم!</h2>
            <p className="text-lg text-aram-navy/80 max-w-2xl mx-auto mb-8">
              استفد من خبرتنا المميزة في تنظيم الفعاليات واحصل على تجربة استثنائية ترضي تطلعاتكم.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://wa.me/971XXXXXXXX" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>
                </svg>
                تواصل عبر الواتساب
              </a>
              <a 
                href="tel:+971XXXXXXXX" 
                className="bg-aram-navy hover:bg-aram-navy/80 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                اتصل بنا مباشرة
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
