import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";       // تأكد من صحة المسار ودعم dark mode
import Footer from "@/components/ui/footer";       // تأكد من صحة المسار ودعم dark mode
import ContactForm from "@/components/contact/contact-form"; // تأكد من أن المكون يدعم dark mode داخليًا
import ContactInfo from "@/components/contact/contact-info"; // تأكد من أن المكون يدعم dark mode داخليًا
// import { toast } from "@/components/ui/use-toast"; // Uncomment if toast is used

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "تواصل معنا | آرام للفعاليات";
  }, []);

  // --- Define contact details ---
  const whatsappNumber = "971504420838"; // الرقم لـ wa.me (بدون +)
  const phoneNumber = "971504420838";    // الرقم لـ tel: (بدون + أو مسافات)
  const displayPhoneNumber = "+971 50 442 0838"; // الرقم الفعلي المعروض للمستخدم

  return (
    // --- Base background for light/dark mode ---
    <div className="min-h-screen flex flex-col bg-white dark:bg-aram-navy">
      <Navbar /> {/* Ensure Navbar handles dark mode */}

      <main>
        {/* Hero Section - Dark gradient background with white text, generally looks good */}
        <section className="relative py-20 bg-gradient-to-r h-screen from-aram-navy to-aram-navy/90 min-h-[50vh] flex items-center justify-center flex-col">
          {/* Overlay enhances text readability */}
          <div className="absolute inset-0 bg-black/30 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">تواصل معنا</h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                نحن متحمسون للاستماع إليك وتحويل أفكارك إلى واقع. تواصل معنا اليوم للاستفسار أو طلب عرض سعر.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content Section */}
        {/* --- Adjusted dark mode background for better separation --- */}
        <section className="py-16 bg-aram-cream/30 dark:bg-aram-navy/95">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* --- ContactForm must handle its own dark mode styles --- */}
              {/* Example: Ensure inputs, labels, button have dark variants */}
              <ContactForm />

              {/* --- ContactInfo must handle its own dark mode styles --- */}
              {/* Example: Ensure icons, text, links have dark variants */}
              <ContactInfo
                phoneNumber={displayPhoneNumber}
                whatsappNumber={`+${whatsappNumber}`}
              />
            </div>
          </div>
        </section>

        {/* Map Section */}
        {/* --- Consistent dark mode background and text --- */}
        <section className="py-12 bg-white dark:bg-aram-navy">
          <div className="container mx-auto px-4">
            {/* --- Text color adjusted --- */}
            <h2 className="text-3xl font-bold text-aram-navy dark:text-white text-center mb-8">موقعنا</h2>
            {/* --- Border adjusted for dark mode --- */}
            <div className="aspect-video h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-white/10">
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
        {/* --- Adjusted dark mode background and text colors --- */}
        <section className="py-16 bg-aram-gold/10 dark:bg-aram-navy/80"> {/* Changed dark bg */}
          <div className="container mx-auto px-4 text-center">
            {/* --- Text color adjusted --- */}
            <h2 className="text-3xl font-bold text-aram-navy dark:text-white mb-6">نتطلع للعمل معكم!</h2>
            {/* --- Text color adjusted --- */}
            <p className="text-lg text-aram-navy/80 dark:text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              استفد من خبرتنا المميزة في تنظيم الفعاليات واحصل على تجربة استثنائية ترضي تطلعاتكم.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* WhatsApp Button - Styling OK */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="تواصل عبر واتساب"
              >
                {/* WhatsApp Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                تواصل عبر الواتساب
              </a>
              {/* Phone Button - Styling refined for dark mode */}
              <a
                href={`tel:+${phoneNumber}`}
                className="bg-aram-navy dark:bg-white/10 hover:bg-aram-navy/80 dark:hover:bg-white/20 text-white dark:text-white/90 px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="اتصل بنا مباشرة"
              >
                 {/* Phone Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span className="ltr font-semibold">{displayPhoneNumber}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer /> {/* Ensure Footer handles dark mode */}
    </div>
  );
};

export default Contact;