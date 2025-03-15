
import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import TeamMember from "@/components/about/team-member";
import TimelineItem from "@/components/about/timeline-item";
import CustomButton from "@/components/ui/custom-button";
import { ArrowRight } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "من نحن | آرام للفعاليات";
  }, []);

  const teamMembers = [
    {
      name: "أحمد محمد",
      role: "المدير التنفيذي",
      bio: "خبرة أكثر من 15 عاماً في مجال تنظيم الفعاليات الفاخرة في الإمارات والخليج العربي.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXJhYiUyMGJ1c2luZXNzbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "سارة العلي",
      role: "مديرة العمليات",
      bio: "متخصصة في إدارة المشاريع وتنسيق الفعاليات الكبرى مع خبرة سابقة في شركات عالمية.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJhYiUyMGJ1c2luZXNzd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "خالد العبدالله",
      role: "مدير الإبداع",
      bio: "مصمم ومبدع بصري حاصل على جوائز عديدة في مجال تصميم المساحات والديكورات للمناسبات.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFyYWIlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "نورة الشامسي",
      role: "مديرة التسويق",
      bio: "متخصصة في التسويق الرقمي والعلاقات العامة مع خبرة في إدارة حملات لشركات مرموقة.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJhYiUyMGJ1c2luZXNzd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const timelineItems = [
    {
      year: "2015",
      title: "بداية آرام للفعاليات",
      description: "تأسست شركة آرام للفعاليات في دبي كشركة صغيرة متخصصة في تنظيم حفلات الزفاف.",
    },
    {
      year: "2017",
      title: "توسع الخدمات",
      description: "توسعت الشركة لتشمل تنظيم الفعاليات الشركات والمعارض مع زيادة عدد الموظفين.",
    },
    {
      year: "2019",
      title: "افتتاح مكتب أبوظبي",
      description: "افتتحنا مكتبنا الثاني في أبوظبي لتلبية الطلب المتزايد على خدماتنا في العاصمة.",
    },
    {
      year: "2021",
      title: "توسع إقليمي",
      description: "بدأنا عملياتنا في المملكة العربية السعودية وقطر مع شراكات استراتيجية في المنطقة.",
    },
    {
      year: "2023",
      title: "جوائز التميز",
      description: "حصلنا على جائزة أفضل منظم فعاليات في الشرق الأوسط وتوسعنا لفريق من 50 متخصصًا.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-aram-navy to-aram-navy/90">
          <div className="absolute inset-0 bg-opacity-30 bg-black z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">من نحن</h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                نحن شركة متخصصة في تحويل أفكارك إلى فعاليات استثنائية تترك انطباعاً دائماً
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 bg-aram-cream/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1561489396-6f546a3a7d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" 
                  alt="قصة آرام" 
                  className="rounded-xl shadow-xl w-full object-cover h-[500px]"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-aram-navy mb-6">قصتنا</h2>
                <img 
                  src="/lovable-uploads/8a01b01c-4202-4437-a91f-90f88853dc14.png" 
                  alt="آرام للفعاليات" 
                  className="h-24 object-contain mb-6"
                />
                <p className="text-gray-700 mb-4">
                  بدأت قصة آرام للفعاليات في عام 2015 كحلم يراود مؤسسها أحمد محمد، الذي رأى فجوة في سوق تنظيم الفعاليات الفاخرة في دولة الإمارات العربية المتحدة.
                </p>
                <p className="text-gray-700 mb-4">
                  منذ ذلك الحين، نمت الشركة من فريق صغير مكون من 3 أشخاص إلى أكثر من 50 متخصصًا في مجالات التصميم والتخطيط والتنفيذ والتسويق. اليوم، نفتخر بأننا من أبرز مزودي خدمات تنظيم الفعاليات في المنطقة.
                </p>
                <p className="text-gray-700 mb-8">
                  فلسفتنا تقوم على التميز في تقديم تجارب استثنائية لعملائنا، مع الحرص على الابتكار والاهتمام بأدق التفاصيل، والالتزام بأعلى معايير الجودة في كل مشروع.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <h3 className="text-3xl font-bold text-aram-gold">+500</h3>
                    <p className="text-aram-navy">فعالية ناجحة</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <h3 className="text-3xl font-bold text-aram-gold">+50</h3>
                    <p className="text-aram-navy">متخصص محترف</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <h3 className="text-3xl font-bold text-aram-gold">5</h3>
                    <p className="text-aram-navy">مكاتب إقليمية</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <h3 className="text-3xl font-bold text-aram-gold">+300</h3>
                    <p className="text-aram-navy">عميل راضٍ</p>
                  </div>
                </div>
                
                <CustomButton 
                  variant="primary"
                  size="lg"
                  withIcon
                  onClick={() => window.location.href = '/services'}
                >
                  استكشف خدماتنا
                  <ArrowRight className="mr-2" size={18} />
                </CustomButton>
              </div>
            </div>
          </div>
        </section>
        
        {/* Timeline */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-aram-navy text-center mb-12">مسيرتنا</h2>
            
            <div className="relative max-w-3xl mx-auto">
              {/* Timeline central line */}
              <div className="absolute h-full w-0.5 bg-aram-gold left-1/2 transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {timelineItems.map((item, index) => (
                  <TimelineItem 
                    key={index} 
                    year={item.year} 
                    title={item.title} 
                    description={item.description} 
                    isLeft={index % 2 === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Values & Mission */}
        <section className="py-16 bg-gradient-to-r from-aram-navy to-aram-navy/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">رؤيتنا ورسالتنا</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-aram-gold mb-4">رؤيتنا</h3>
                <p className="text-white/90">
                  أن نكون الشركة الرائدة في تنظيم الفعاليات على مستوى الشرق الأوسط، ونقدم تجارب مبتكرة واستثنائية تتجاوز توقعات عملائنا.
                </p>
              </div>
              
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-aram-gold mb-4">رسالتنا</h3>
                <p className="text-white/90">
                  توفير خدمات ذات جودة عالية في تنظيم وإدارة الفعاليات من خلال فريق من المحترفين المبدعين، والالتزام بتقديم تجارب استثنائية تلبي تطلعات عملائنا.
                </p>
              </div>
            </div>
            
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-aram-gold mb-8">قيمنا</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-aram-gold mb-3">الابتكار</h4>
                  <p className="text-white/90">
                    نسعى دائماً لتقديم أفكار جديدة ومبتكرة تميز فعالياتنا.
                  </p>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-aram-gold mb-3">الالتزام</h4>
                  <p className="text-white/90">
                    نلتزم بتحقيق رؤية عملائنا وتجاوز توقعاتهم في كل مشروع.
                  </p>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-aram-gold mb-3">التميز</h4>
                  <p className="text-white/90">
                    نسعى للتميز في كل التفاصيل مهما كانت صغيرة.
                  </p>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-aram-gold mb-3">المسؤولية</h4>
                  <p className="text-white/90">
                    نتحمل المسؤولية الكاملة عن جودة عملنا ورضا عملائنا.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="py-16 bg-aram-cream/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-aram-navy text-center mb-12">فريقنا</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember 
                  key={index}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  image={member.image}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                فريقنا من المحترفين المبدعين هو أساس نجاحنا. نعمل معاً لتحقيق رؤيتكم وتقديم تجارب استثنائية.
              </p>
              
              <CustomButton 
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                تواصل مع فريقنا
              </CustomButton>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
