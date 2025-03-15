
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import CustomButton from "@/components/ui/custom-button";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "wedding",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "تم إرسال رسالتك بنجاح",
        description: "سيتواصل معك فريقنا خلال 24 ساعة.",
        variant: "default",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "wedding",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300">
      <h2 className="text-2xl font-bold text-aram-navy mb-6">أرسل استفسارك</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              الاسم الكامل
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aram-gold focus:border-transparent outline-none transition-all"
              placeholder="الاسم الكامل"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aram-gold focus:border-transparent outline-none transition-all"
              placeholder="example@example.com"
              dir="ltr"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              رقم الهاتف
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aram-gold focus:border-transparent outline-none transition-all"
              placeholder="+971 XX XXX XXXX"
              dir="ltr"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">
              نوع الفعالية
            </label>
            <select
              id="eventType"
              name="eventType"
              required
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aram-gold focus:border-transparent outline-none transition-all bg-white"
            >
              <option value="wedding">حفل زفاف</option>
              <option value="corporate">فعالية شركات</option>
              <option value="conference">مؤتمر</option>
              <option value="exhibition">معرض</option>
              <option value="private">حفل خاص</option>
              <option value="other">أخرى</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            الرسالة
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aram-gold focus:border-transparent outline-none transition-all"
            placeholder="اكتب تفاصيل استفسارك أو متطلبات فعاليتك هنا..."
          ></textarea>
        </div>
        
        <div className="pt-4">
          <CustomButton
            type="submit"
            variant="gradient"
            size="lg"
            className="w-full"
            withIcon
            disabled={isSubmitting}
          >
            {isSubmitting ? "جاري الإرسال..." : "إرسال الاستفسار"}
            <Send className="mr-2" size={18} />
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
