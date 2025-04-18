import React from 'react'; // يُفضل استيراد React

const WhatsAppButton = () => {
  // قم بتخزين الرقم هنا لتسهيل التعديل لاحقًا
  const whatsappNumber = "971504420838"; // الرقم بدون علامة +
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappLink} // استخدام الرابط المحدث
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full shadow-lg transform transition-all hover:scale-110 z-50"
      aria-label="تواصل معنا عبر واتساب" // تحسين إمكانية الوصول
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-8 h-8 object-cover"
      />
    </a>
  );
};

export default WhatsAppButton;