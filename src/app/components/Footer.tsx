import { Mail, Phone, MapPin, ArrowLeft, Heart } from "lucide-react";

const footerLinks = {
  "روابط سريعة": [
    { label: "الصفحة الرئيسية", href: "#home" },
    { label: "عن المنصة", href: "#about" },
    { label: "البرامج والتخصصات", href: "#programs" },
    { label: "شهادات الطلاب", href: "#testimonials" },
    { label: "أخبار ومقالات", href: "#blog" },
    { label: "تواصل معنا", href: "#contact" },
  ],
 
  "الجامعات": [
    { label: "جامعات بالهند ", href: "#" },
    { label: "جامعات روسيا ", href: "#" },
    { label: "جامعات ماليزيا ", href: "#" },
    { label: "جامعات الصين", href: "#" },
    { label: "جامعات مصر", href: "#" },
   
  ],
};

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a1f4e" }}>
      {/* Newsletter Banner */}
      

      {/* Main Footer */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-5">
                
                <div>
                    <h1
  className="text-2xl font-extrabold tracking-wider text-[#f3f5f9]"
  style={{ fontFamily: "Poppins, Tajawal, sans-serif" }}
>
  ALTA{""}<span className="text-[#3e757a]">YEB</span>
</h1>
                  
                  
                </div>
              </div>

              <p className="text-blue-200 leading-relaxed mb-7 max-w-sm">
                منصتك الموثوقة للوصول إلى أفضل الجامعات العالمية. نساعدك في تحقيق
                حلمك التعليمي بخدمة متكاملة من الاستشارة حتى الوصول.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {[
                  { icon: Phone, text: "+249 91 112 0260" },
                  { icon: Mail, text: "altayeb4fa@gmail.com" },
                  { icon: MapPin, text: "مصر و القاهرة " },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 text-blue-200 text-sm">
                      <Icon size={16} className="text-blue-400 flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Social */}
              <div className="flex gap-3 mt-7">
                {[
                  { label: "فيسبوك", emoji: "📘", color: "#1877f2" },
                  { label: "إنستغرام", emoji: "📷", color: "#e4405f" },
                  { label: "يوتيوب", emoji: "📺", color: "#ff0000" },
                  { label: "واتساب", emoji: "💬", color: "#25d366" },
                  { label: "تيك توك", emoji: "🎵", color: "#010101" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-lg hover:scale-110 transition-transform"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}
                    title={s.label}
                  >
                    {s.emoji}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-black mb-5 text-lg relative">
                  {title}
                  <div className="w-8 h-0.5 rounded-full mt-2" style={{ backgroundColor: "#c0392b" }} />
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-blue-300 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                      >
                        <ArrowLeft
                          size={12}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-red-400 flex-shrink-0"
                        />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="py-5 px-4 text-center"
        style={{ backgroundColor: "rgba(0,0,0,0.3)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-blue-300 text-sm flex items-center gap-2">
            <span>© 2025 منصة ALTAYEB التعليمية. جميع الحقوق محفوظة.</span>
          </p>
          
          <a href="https://soob-portfolio.vercel.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnhwnBgix-Hu6B5BjpYuNO3IHu7qw3PA8vnDNeethViZp1F09Q6K6zmf4VRn4_aem_3thS1uRk8S5Dp6LbzIcfAg" className="text-blue-400 text-sm flex items-center gap-1">
       المبرمج  <Heart size={14} className="text-red-400" fill="currentColor" />  السوداني
          </a>
          <div className="flex gap-5 text-sm text-blue-300">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a>
            <a href="#" className="hover:text-white transition-colors">خريطة الموقع</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
