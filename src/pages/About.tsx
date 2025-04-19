import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";       // تأكد من صحة المسار
import Footer from "@/components/ui/footer";       // تأكد من صحة المسار
import TeamMember from "@/components/about/team-member"; // تأكد من صحة المسار وأن المكون يدعم dark mode
import TimelineItem from "@/components/about/timeline-item"; // تأكد من صحة المسار وأن المكون يدعم dark mode
import CustomButton from "@/components/ui/custom-button"; // تأكد من صحة المسار وأن المكون يدعم dark mode
import { ArrowRight } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "من نحن | آرام للفعاليات";
  }, []);

  // بيانات teamMembers و timelineItems تبقى كما هي
  const teamMembers = [
    { name: "أحمد محمد", role: "المدير التنفيذي", bio: "خبرة أكثر من 15 عاماً...", image: "..." },
    { name: "سارة العلي", role: "مديرة العمليات", bio: "متخصصة في إدارة المشاريع...", image: "..." },
    { name: "خالد العبدالله", role: "مدير الإبداع", bio: "مصمم ومبدع بصري...", image: "..." },
    { name: "نورة الشامسي", role: "مديرة التسويق", bio: "متخصصة في التسويق الرقمي...", image: "..." },
  ];
  const timelineItems = [
    { year: "2015", title: "بداية آرام للفعاليات", description: "تأسست شركة آرام..." },
    { year: "2017", title: "توسع الخدمات", description: "توسعت الشركة لتشمل..." },
    { year: "2019", title: "افتتاح مكتب أبوظبي", description: "افتتحنا مكتبنا الثاني..." },
    { year: "2021", title: "توسع إقليمي", description: "بدأنا عملياتنا في..." },
    { year: "2023", title: "جوائز التميز", description: "حصلنا على جائزة..." },
  ];
  // --- نهاية البيانات ---

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-aram-navy"> {/* Set base background */}
      <Navbar />

      <main className=""> {/* Removed redundant flex-grow */}
        {/* Hero Section - Seems OK for dark mode */}
        <section className="relative py-20 bg-gradient-to-r from-aram-navy to-aram-navy/90 h-screen flex items-center justify-center flex-col"> {/* Adjusted height */}
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black/30 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">من نحن</h1> {/* Adjusted size */}
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"> {/* Adjusted size */}
                نحن شركة متخصصة في تحويل أفكارك إلى فعاليات استثنائية تترك انطباعاً دائماً
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        {/* --- Updated background and text for dark mode --- */}
        <section className="py-16 bg-aram-cream/30 dark:bg-aram-navy/95">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-xl overflow-hidden shadow-xl"> {/* Added container for image */}
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80"
                  alt="قصة آرام"
                  className="w-full h-full object-cover max-h-[500px]" // Consistent height control
                  loading="lazy"
                />
              </div>
              <div>
                 {/* --- Updated text color --- */}
                <h2 className="text-3xl font-bold text-aram-navy dark:text-white mb-6">قصتنا</h2>
                <img
                  src="/lovable-uploads/8a01b01c-4202-4437-a91f-90f88853dc14.png" // تأكد من وجود هذا الملف
                  alt="آرام للفعاليات"
                  className="h-24 object-contain mb-6" // Invert logo colors in dark mode
                />
                 {/* --- Updated text color --- */}
                <p className="text-aram-navy/80 dark:text-white/80 mb-4 leading-relaxed">
                  بدأت قصة آرام للفعاليات في عام 2015 كحلم يراود مؤسسها أحمد محمد، الذي رأى فجوة في سوق تنظيم الفعاليات الفاخرة في دولة الإمارات العربية المتحدة.
                </p>
                 {/* --- Updated text color --- */}
                <p className="text-aram-navy/80 dark:text-white/80 mb-4 leading-relaxed">
                  منذ ذلك الحين، نمت الشركة من فريق صغير مكون من 3 أشخاص إلى أكثر من 50 متخصصًا في مجالات التصميم والتخطيط والتنفيذ والتسويق. اليوم، نفتخر بأننا من أبرز مزودي خدمات تنظيم الفعاليات في المنطقة.
                </p>
                 {/* --- Updated text color --- */}
                <p className="text-aram-navy/80 dark:text-white/80 mb-8 leading-relaxed">
                  فلسفتنا تقوم على التميز في تقديم تجارب استثنائية لعملائنا، مع الحرص على الابتكار والاهتمام بأدق التفاصيل، والالتزام بأعلى معايير الجودة في كل مشروع.
                </p>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                   {/* --- Updated stats box background and text --- */}
                  <div className="text-center p-4 bg-white dark:bg-white/10 rounded-lg shadow-md">
                    <h3 className="text-3xl font-bold text-aram-gold">+500</h3>
                    <p className="text-aram-navy dark:text-white/90 text-sm mt-1">فعالية ناجحة</p> {/* Adjusted text size/color */}
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-white/10 rounded-lg shadow-md">
                    <h3 className="text-3xl font-bold text-aram-gold">+50</h3>
                    <p className="text-aram-navy dark:text-white/90 text-sm mt-1">متخصص محترف</p>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-white/10 rounded-lg shadow-md">
                    <h3 className="text-3xl font-bold text-aram-gold">5</h3>
                    <p className="text-aram-navy dark:text-white/90 text-sm mt-1">مكاتب إقليمية</p>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-white/10 rounded-lg shadow-md">
                    <h3 className="text-3xl font-bold text-aram-gold">+300</h3>
                    <p className="text-aram-navy dark:text-white/90 text-sm mt-1">عميل راضٍ</p>
                  </div>
                </div>

                 {/* Assuming CustomButton handles dark mode for 'primary' variant */}
                <CustomButton
                  variant="primary"
                  size="lg"
                  className="group" // Use className instead of withIcon if not supported
                  onClick={() => window.location.href = '/services'}
                >
                  استكشف خدماتنا
                  <ArrowRight className="mr-2 transition-transform group-hover:translate-x-1" size={18} /> {/* Adjust icon usage */}
                </CustomButton>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        {/* --- Updated background and text --- */}
        <section className="py-16 bg-white dark:bg-aram-navy">
          <div className="container mx-auto px-4">
             {/* --- Updated text color --- */}
            <h2 className="text-3xl font-bold text-aram-navy dark:text-white text-center mb-12">مسيرتنا</h2>

            <div className="relative max-w-3xl mx-auto">
              {/* Timeline central line - Gold color works well in both modes */}
              <div className="absolute h-full w-0.5 bg-aram-gold left-1/2 transform -translate-x-1/2"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {timelineItems.map((item, index) => (
                   // --- Ensure TimelineItem component handles dark mode ---
                  <TimelineItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    description={item.description}
                    isLeft={index % 2 === 0}
                    // Pass dark mode classes if needed, e.g.,
                    // className="dark:bg-white/5 dark:border-aram-gold/30 dark:text-white/80"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values & Mission - Seems OK for dark mode */}
        <section className="py-16 bg-gradient-to-r from-aram-navy to-aram-navy/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">رؤيتنا ورسالتنا</h2>
            {/* Vision/Mission Cards - bg-white/10 should look fine */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-aram-gold mb-4">رؤيتنا</h3>
                <p className="text-white/90 leading-relaxed"> {/* Added leading-relaxed */}
                  أن نكون الشركة الرائدة في تنظيم الفعاليات على مستوى الشرق الأوسط، ونقدم تجارب مبتكرة واستثنائية تتجاوز توقعات عملائنا.
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-aram-gold mb-4">رسالتنا</h3>
                <p className="text-white/90 leading-relaxed">
                  توفير خدمات ذات جودة عالية في تنظيم وإدارة الفعاليات من خلال فريق من المحترفين المبدعين، والالتزام بتقديم تجارب استثنائية تلبي تطلعات عملائنا.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-aram-gold mb-8">قيمنا</h3>
              {/* Value Cards - bg-white/10 should look fine */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {/* Example Value Card */}
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-aram-gold mb-3">الابتكار</h4>
                  <p className="text-white/90 text-sm leading-relaxed"> {/* Adjusted text size */}
                    نسعى دائماً لتقديم أفكار جديدة ومبتكرة تميز فعالياتنا.
                  </p>
                </div>
                {/* Repeat for other values... */}
                 <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-aram-gold mb-3">الالتزام</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    نلتزم بتحقيق رؤية عملائنا وتجاوز توقعاتهم في كل مشروع.
                  </p>
                </div>
                 <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-aram-gold mb-3">التميز</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    نسعى للتميز في كل التفاصيل مهما كانت صغيرة.
                  </p>
                </div>
                 <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-aram-gold mb-3">المسؤولية</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    نتحمل المسؤولية الكاملة عن جودة عملنا ورضا عملائنا.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer /> {/* Ensure Footer handles dark mode */}
    </div>
  );
};

export default About;