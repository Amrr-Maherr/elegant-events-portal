import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // تأكد من صحة المسار
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"; // تأكد من صحة المسار

const categories = [
  { id: "all", name: "جميع الأعمال" },
  { id: "weddings", name: "حفلات الزفاف" },
  { id: "corporate", name: "فعاليات الشركات" },
  { id: "exhibitions", name: "المعارض" },
  { id: "private", name: "الحفلات الخاصة" },
];

// بيانات portfolioItems تبقى كما هي
const portfolioItems = [
  {
    id: 1,
    title: "حفل زفاف فاخر",
    description: "تنظيم حفل زفاف فخم في فندق أتلانتس النخلة، دبي",
    category: "weddings",
    image: "https://images.unsplash.com/photo-1511795409834-432f7b1629ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    title: "مؤتمر الاستدامة",
    description: "تنظيم مؤتمر دولي للاستدامة البيئية في مركز دبي التجاري العالمي",
    category: "corporate",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    title: "معرض الفنون الإسلامية",
    description: "تنظيم وإدارة معرض للفنون الإسلامية المعاصرة",
    category: "exhibitions",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
  },
  {
    id: 4,
    title: "حفل تخرج",
    description: "تنظيم حفل تخرج لجامعة زايد في أبوظبي",
    category: "private",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    title: "حفل زفاف على الشاطئ",
    description: "تنظيم حفل زفاف رومانسي على شاطئ جميرا",
    category: "weddings",
    image: "https://images.unsplash.com/photo-1519741347686-c1e331c20a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 6,
    title: "إطلاق منتج جديد",
    description: "تنظيم حفل إطلاق منتج جديد لشركة تكنولوجيا رائدة",
    category: "corporate",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
   {
    id: 7,
    title: "معرض سيارات فاخرة",
    description: "تنظيم معرض للسيارات الفاخرة في أبوظبي",
    category: "exhibitions",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1583&q=80",
  },
  {
    id: 8,
    title: "حفل عيد ميلاد VIP",
    description: "تنظيم حفل عيد ميلاد لشخصية مهمة في برج العرب",
    category: "private",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
];


const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  // Removed setSelectedItem as DialogTrigger handles opening now

  const filteredItems = selectedCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="mt-8">
      <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
        {/* --- TabsList Styling Updated --- */}
        <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-20 p-1.5 bg-aram-beige/40 dark:bg-aram-navy/60 rounded-xl">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              // --- TabsTrigger Styling Updated ---
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out
                         text-aram-navy/70 dark:text-white/60                       /* Default Text Color */
                         hover:bg-aram-gold/10 dark:hover:bg-aram-gold/20            /* Hover Background */
                         hover:text-aram-gold dark:hover:text-aram-gold              /* Hover Text Color */
                         focus-visible:ring-2 focus-visible:ring-aram-gold/50       /* Focus Ring */
                         focus-visible:ring-offset-2 focus-visible:ring-offset-aram-beige dark:focus-visible:ring-offset-aram-navy /* Focus Ring Offset */
                         data-[state=active]:bg-aram-gold                           /* Active Background */
                         data-[state=active]:text-aram-navy                         /* Active Text Color */
                         data-[state=active]:font-semibold                          /* Active Font Weight */
                         data-[state=active]:shadow-md"                             /* Active Shadow */
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* TabsContent and items grid remain the same */}
        <TabsContent value={selectedCategory} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              // Using Dialog directly around the trigger element
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  {/* Item Card */}
                  <div
                    className="bg-white dark:bg-aram-navy/80 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    // Removed onClick handler here, DialogTrigger handles it
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy" // Added lazy loading
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-aram-navy dark:text-white">{item.title}</h3>
                      <p className="text-aram-navy/70 dark:text-white/70 mt-2 truncate">{item.description}</p> {/* Added truncate */}
                    </div>
                  </div>
                </DialogTrigger>

                {/* Dialog Content */}
                <DialogContent className="sm:max-w-3xl p-4 sm:p-6 bg-white dark:bg-aram-navy"> {/* Added background to content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="overflow-hidden rounded-lg aspect-square md:aspect-auto"> {/* Consistent aspect ratio */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center"> {/* Center content vertically */}
                      <h3 className="text-2xl font-bold text-aram-navy dark:text-white mb-3">{item.title}</h3>
                      <p className="text-aram-navy/70 dark:text-white/70 mb-4 leading-relaxed">{item.description}</p>
                      <div className="space-y-3 mt-auto pt-4 border-t border-gray-200 dark:border-white/20"> {/* Added border */}
                        <div className="flex items-center gap-2">
                          <span className="text-aram-gold font-bold text-sm">التصنيف:</span>
                          <span className="text-aram-navy/80 dark:text-white/80 text-sm">
                            {categories.find(cat => cat.id === item.category)?.name || ''}
                          </span>
                        </div>
                        {/* Example: Location (replace with real data if available) */}
                        <div className="flex items-center gap-2">
                           <span className="text-aram-gold font-bold text-sm">الموقع:</span>
                           <span className="text-aram-navy/80 dark:text-white/80 text-sm">دبي/أبوظبي، الإمارات</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PortfolioGallery;