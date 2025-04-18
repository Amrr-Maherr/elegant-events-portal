import { useState, useEffect } from 'react';
import Navbar from "@/components/ui/navbar";       // تأكد من صحة المسار
import Footer from "@/components/ui/footer";       // تأكد من صحة المسار
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // تأكد من صحة المسار
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"; // تأكد من صحة المسار
import { PlayCircle } from 'lucide-react'; // أيقونة لتشغيل الفيديو

// --- تعريف فئات المعرض (مع إضافة قسم الفيديوهات) ---
const galleryCategories = [
  { id: "dj", name: "دي جي (DJ)" },
  { id: "kosha", name: "الكوشة" },
  { id: "lighting", name: "الإضاءة (ليتات)" },
  { id: "tents", name: "الخيام" },
  { id: "exhibition", name: "المعارض العامة" },
  { id: "photography", name: "التصوير الفوتوغرافي" },
  { id: "videos", name: "الفيديوهات" }, // <-- تمت إضافة قسم الفيديوهات هنا
  // يمكنك إضافة المزيد من الفئات هنا
];

// --- بيانات مؤقتة لعناصر المعرض (صور وفيديوهات) ---
// استخدم صور وفيديوهات placeholder - يجب استبدالها بالروابط الحقيقية
const galleryItems = [
  // DJ Examples
  { id: 1, category: "dj", type: "image", src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "تجهيزات دي جي احترافية" },
  { id: 2, category: "dj", type: "image", src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80", alt: "دي جي في حفل زفاف" },
  { id: 15, category: "dj", type: "video", thumbnail: "https://img.youtube.com/vi/N4o3-j81Z3c/hqdefault.jpg", src: "https://www.youtube.com/embed/N4o3-j81Z3c", title: "عرض دي جي وإضاءة" }, // Example Video

  // Kosha Examples
  { id: 3, category: "kosha", type: "image", src: "https://images.unsplash.com/photo-1606141415309-7e145d4d7f1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "تصميم كوشة فاخر" },
  { id: 4, category: "kosha", type: "image", src: "https://images.unsplash.com/photo-1519741347686-c1e331c20a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "كوشة زفاف على الشاطئ" },
  { id: 5, category: "kosha", type: "image", src: "https://images.unsplash.com/photo-1587271681344-1a106e057999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "كوشة خطوبة بسيطة وأنيقة" },
  { id: 16, category: "kosha", type: "video", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "جولة في تصميم كوشة" }, // Example Video 2

  // Lighting Examples
  { id: 6, category: "lighting", type: "image", src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1562&q=80", alt: "إضاءة مسرح الفعاليات" },
  { id: 7, category: "lighting", type: "image", src: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80", alt: "إضاءة ديكورية للحفلات" },

  // Tent Examples
  { id: 8, category: "tents", type: "image", src: "https://images.unsplash.com/photo-1568871197752-91608614f6e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "خيمة فاخرة للمناسبات" },
  { id: 9, category: "tents", type: "image", src: "https://images.unsplash.com/photo-1597058191648-3669c4d6a2a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "خيمة شفافة في الهواء الطلق" },

  // Exhibition Examples
  { id: 10, category: "exhibition", type: "image", src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80", alt: "جناح في معرض تجاري" },
  { id: 11, category: "exhibition", type: "image", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "تنظيم مؤتمر أو معرض" },

  // Photography Examples
  { id: 12, category: "photography", type: "image", src: "https://images.unsplash.com/photo-1455486013041-eadca8657f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "تصوير حفل زفاف احترافي" },
  { id: 13, category: "photography", type: "image", src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80", alt: "مصور فوتوغرافي في فعالية" },
  { id: 14, category: "photography", type: "image", src: "https://images.unsplash.com/photo-1531898371368-731e1b347469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", alt: "تصوير تفاصيل الديكور" },

  // Add more items for each category...
];
// --- نهاية البيانات المؤقتة ---


const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(galleryCategories[0].id); // Default to first category

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "معرض الصور | آرام للفعاليات";
  }, []);

  // --- تعديل منطق الفلترة ---
  // Filter items based on selected category OR if 'videos' tab is selected
  const filteredItems = galleryItems.filter(item => {
    if (selectedCategory === "videos") {
      // If the "Videos" tab is selected, show only items of type 'video'
      return item.type === 'video';
    } else {
      // Otherwise, show items matching the selected category (can be image or video)
      return item.category === selectedCategory;
    }
  });
  // --- نهاية تعديل منطق الفلترة ---

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-aram-navy">
      <Navbar />

      <main>
        {/* Page Header */}
        <section className="py-16 pt-32 bg-gradient-to-b h-screen flex items-center justify-center flex-col from-aram-beige to-white dark:from-aram-navy dark:to-aram-navy/95">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-aram-navy dark:text-white mb-4">
              معرض <span className="text-aram-gold">الصور</span>
            </h1>
            <p className="text-lg text-aram-navy/70 dark:text-white/80 max-w-2xl mx-auto">
              استعرض مجموعة مختارة من صور وفيديوهات فعالياتنا السابقة وتصاميمنا المبتكرة.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              {/* Tabs List - Adjusted grid columns for the new tab */}
              {/* ملاحظة: قد تحتاج لتعديل عدد الأعمدة (grid-cols) ليناسب عدد الأقسام الجديد */}
              <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-8 p-1.5 bg-aram-beige/40 dark:bg-aram-navy/60 rounded-xl">
                {galleryCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out
                               text-aram-navy/70 dark:text-white/60
                               hover:bg-aram-gold/10 dark:hover:bg-aram-gold/20
                               hover:text-aram-gold dark:hover:text-aram-gold
                               focus-visible:ring-2 focus-visible:ring-aram-gold/50
                               focus-visible:ring-offset-2 focus-visible:ring-offset-aram-beige dark:focus-visible:ring-offset-aram-navy
                               data-[state=active]:bg-aram-gold
                               data-[state=active]:text-aram-navy
                               data-[state=active]:font-semibold
                               data-[state=active]:shadow-md"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Tabs Content Area - No changes needed here, filtering handles the logic */}
              <TabsContent value={selectedCategory} className="my-5">
                {filteredItems.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {filteredItems.map((item) => (
                      <Dialog key={item.id}>
                        <DialogTrigger asChild>
                          {/* Grid Item Card */}
                          <div className="aspect-square bg-gray-100 dark:bg-aram-navy/70 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group relative my-20">
                            <img
                              // Use thumbnail for video, src for image
                              src={item.type === 'video' ? item.thumbnail : item.src}
                              alt={item.alt || item.title || `معرض ${selectedCategory}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                            {/* Play icon overlay for videos */}
                            {item.type === 'video' && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <PlayCircle className="w-16 h-16 text-white/80" />
                              </div>
                            )}
                          </div>
                        </DialogTrigger>

                        {/* Dialog Content (Lightbox) */}
                        <DialogContent className="max-w-3xl w-full p-2 sm:p-4 bg-white dark:bg-aram-navy/95">
                          {item.type === 'image' ? (
                            <img
                              src={item.src}
                              alt={item.alt || item.title || `معرض ${selectedCategory}`}
                              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                            />
                          ) : (
                            // Video Embed
                            <div className="aspect-video w-full">
                               <iframe
                                src={item.src} // Assumes item.src is the embed URL (e.g., youtube.com/embed/...)
                                title={item.title || "Video"}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full rounded-lg"
                              ></iframe>
                            </div>
                          )}
                           {/* Optional: Add Title/Description in Dialog Footer */}
                           {item.title && (
                               <div className="mt-2 text-center text-sm text-aram-navy/80 dark:text-white/70">
                                   {item.title}
                               </div>
                           )}
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                ) : (
                  // Message when category is empty
                  <div className="text-center py-16">
                    <p className="text-xl text-gray-500 dark:text-gray-400">
                      {/* تعديل الرسالة لتناسب قسم الفيديوهات أيضاً */}
                      {selectedCategory === "videos"
                        ? "لا توجد فيديوهات لعرضها حالياً."
                        : "لا توجد عناصر لعرضها في هذا القسم حالياً."
                      }
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer /> {/* Ensure Footer handles dark mode */}
    </div>
  );
};

export default GalleryPage;