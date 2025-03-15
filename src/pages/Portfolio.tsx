
import { useEffect, useState } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Play } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "حفل زفاف فاخر في دبي",
    category: "حفلات الزفاف",
    thumbnail: "https://images.unsplash.com/photo-1511795409834-432f7b1629ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1511795409834-432f7b1629ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1518429229756-c4a2976f6555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1507217633297-c9815ce2ac8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
    ],
    description: "تصميم وتنفيذ حفل زفاف فاخر في أحد أفخم فنادق دبي، مع ديكورات مبتكرة وإضاءة ساحرة."
  },
  {
    id: 2,
    title: "المؤتمر السنوي لشركة الخليج",
    category: "فعاليات الشركات",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    description: "تنظيم المؤتمر السنوي لشركة الخليج مع حضور أكثر من 500 مشارك، وتجهيز قاعات العرض والمناقشات."
  },
  {
    id: 3,
    title: "حفل إطلاق منتج",
    category: "فعاليات الشركات",
    thumbnail: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1560439513-74b037a25d84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    description: "تنظيم حفل إطلاق منتج جديد لشركة تقنية رائدة، مع تصميم عروض تفاعلية وتجربة حية للمنتج."
  },
  {
    id: 4,
    title: "معرض الفنون العربية",
    category: "المعارض",
    thumbnail: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1605513524006-063ed6ed31e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
    ],
    description: "تصميم وتنفيذ معرض للفنون العربية المعاصرة، مع تجهيز المساحات العرض وأنظمة الإضاءة المتخصصة."
  },
  {
    id: 5,
    title: "حفلة خاصة في قصر",
    category: "حفلات خاصة",
    thumbnail: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    description: "تنظيم حفلة خاصة فخمة في قصر خاص، مع إعداد الديكورات والإضاءة والموسيقى الحية."
  },
  {
    id: 6,
    title: "مهرجان الطعام الدولي",
    category: "مهرجانات",
    thumbnail: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80",
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    description: "تنظيم مهرجان الطعام الدولي السنوي، مع إعداد أجنحة العرض وتنسيق مشاركة أكثر من 50 مطعم عالمي."
  },
];

const categories = [
  "الكل",
  "حفلات الزفاف",
  "فعاليات الشركات",
  "المعارض",
  "حفلات خاصة",
  "مهرجانات"
];

const Portfolio = () => {
  const [filter, setFilter] = useState("الكل");
  const [selectedItem, setSelectedItem] = useState<null | typeof portfolioItems[0]>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    document.title = "آرام للفعاليات | أعمالنا";
    window.scrollTo(0, 0);
  }, []);

  const filteredItems = filter === "الكل" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const openModal = (item: typeof portfolioItems[0]) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedItem.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-aram-beige to-white dark:from-aram-navy dark:to-aram-navy/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-aram-navy dark:text-white">
            معرض <span className="text-aram-gold">أعمالنا</span>
          </h1>
          <p className="text-aram-navy/70 dark:text-white/70 max-w-3xl mx-auto mb-8 text-lg">
            نفخر بتقديم مجموعة من أعمالنا المميزة التي نفذناها لعملائنا في مختلف المناسبات والفعاليات
          </p>
        </div>
      </section>
      
      {/* Portfolio Filters */}
      <section className="py-8 bg-white dark:bg-aram-navy/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category 
                    ? "bg-aram-gold text-aram-navy font-bold shadow-md" 
                    : "bg-gray-100 dark:bg-white/10 text-aram-navy dark:text-white hover:bg-aram-gold/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="py-12 bg-white dark:bg-aram-navy/95">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white dark:bg-aram-navy/80 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover cursor-pointer group"
                onClick={() => openModal(item)}
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-aram-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-aram-gold p-3 rounded-full">
                      <Play className="h-6 w-6 text-aram-navy" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs bg-aram-gold/20 text-aram-gold rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-aram-navy dark:text-white">{item.title}</h3>
                  <p className="text-aram-navy/70 dark:text-white/70 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Modal for Portfolio Detail */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white dark:bg-aram-navy/95 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-96">
              <img 
                src={selectedItem.images[currentImageIndex]} 
                alt={selectedItem.title}
                className="w-full h-full object-cover" 
              />
              
              {selectedItem.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage} 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-aram-gold/80"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextImage} 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-aram-gold/80"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {selectedItem.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImageIndex 
                        ? "bg-aram-gold w-6" 
                        : "bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 text-xs bg-aram-gold/20 text-aram-gold rounded-full">
                  {selectedItem.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-aram-navy dark:text-white">{selectedItem.title}</h3>
              <p className="text-aram-navy/70 dark:text-white/70 mb-6">{selectedItem.description}</p>
              
              <button 
                onClick={closeModal}
                className="bg-aram-gold px-6 py-2 rounded-md text-aram-navy font-medium transition-all duration-300 hover:bg-aram-navy hover:text-white"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Portfolio;
