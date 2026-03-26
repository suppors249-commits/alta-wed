import { useState, useEffect, useRef } from "react";
import { Users, Award, UserCheck, Building2 } from "lucide-react";
const stats = [
  {
    icon: Users,
    number: 5000,
    suffix: "",
    label: "طالب مقبول",
  
    color: "#0d2b5e",
  },
  {
    icon: Award,
    number: 10,
    suffix: "+",
    label: "سنة خبرة",

    color: "#c0392b",
  },
  {
    icon: UserCheck,
    number: 85,
    suffix: "+",
    label: "استشارات",

    color: "#c0392b",
  },
  {
    icon: Building2,
    number: 15,
    suffix: "+",
    label: "جامعات",
  
    color: "#0d2b5e",
  },
];
const majors = [
    {
      title: "الطب ",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الطب.png.webp",
      link: "https://studyinegypt-alkayan.com/%d8%af%d8%b1%d8%a7%d8%b3%d8%a9-%d8%a7%d9%84%d8%b7%d8%a8-%d9%81%d9%8a-%d9%85%d8%b5%d8%b1/",
    },
    {
      title: "الهندسة",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الهندسة.png.webp",
    },
   
    
   
    {
      title: "القانون",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/القانون.png.webp",
      link: "https://studyinegypt-alkayan.com/%d8%af%d8%b1%d8%a7%d8%b3%d8%a9-%d8%a7%d9%84%d9%82%d8%a7%d9%86%d9%88%d9%86-%d9%81%d9%8a-%d9%85%d8%b5%d8%b1/",
    },
    {
      title: "إدارة الأعمال",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/ادراة-الاعمال.png.webp",
      link: "https://studyinegypt-alkayan.com/%d8%af%d8%b1%d8%a7%d8%b3%d8%a9-%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%a3%d8%b9%d9%85%d8%a7%d9%84-%d9%81%d9%8a-%d9%85%d8%b5%d8%b1/",
    },
  
   
  
   
    
  ];
const services = [
  { title: "التقديم على المنح الدراسية", slug: "scholarships" },
  { title: "استخراج تجهيز الشهادات", slug: "CertificateServices" },
  { title: "الاستشارات التعليمية", slug: "Consultation" },
  { title: "دورات تعليمية ", slug: "Courses" },

];

function useCounter(target: number, duration: number = 2000, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function StatCard({ stat, index, inView }: { stat: typeof stats[0]; index: number; inView: boolean }) {
  const count = useCounter(stat.number, 2000, inView);
  const Icon = stat.icon;

  return (
    <div
      className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
      style={{
        border: "1px solid #e8ecf0",
        animationDelay: `${index * 150}ms`,
      }}
    >
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
        style={{ background: `linear-gradient(135deg, ${stat.color}15, ${stat.color}30)` }}
      >
        <Icon size={36} style={{ color: stat.color }} strokeWidth={1.8} />
      </div>
      <div
        className="text-5xl font-black mb-2"
        style={{ color: stat.color, fontFamily: "Cairo, sans-serif" }}
      >
        {count.toLocaleString("ar-EG")}{stat.suffix}
      </div>
      <h3 className="text-gray-800 font-bold text-xl mb-2">{stat.label}</h3>
      
    </div>
  );
}

export function StatsSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    
    <>
      


      {/* الإحصائيات */}
      <section ref={ref} className="py-8 px-4" style={{ backgroundColor: "#f5f7fb" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-4">إنجازات تُثبت مصداقيتنا</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              على مدار أكثر من عقد من الزمان، نجحنا في مساعدة الآلاف من الطلاب على تحقيق أحلامهم الأكاديمية
            </p>
            <div className="w-20 h-1 rounded-full mx-auto mt-5" style={{ backgroundColor: "#c0392b" }} />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} inView={inView} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#f2f9f5]">
  <div className="container mx-auto px-4">

    {/* التعريف */}
    <div className="flex flex-col items-center text-center mb-10">

      

      <h2 className="text-3xl font-bold text-[#0d2b5e] mb-4">
        تعرف على ALTAYEB التعليمية 
      </h2>

      <p className="text-gray-600 max-w-xl">
        اضغط على الزر التالي لزيارة صفحة "عن ALTAYEB التعليمية" ومعرفة كل التفاصيل.
      </p>

    </div>


    {/* الكروت */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">

      {majors.map((major) => (
        <a
          key={major}
          href={major.link || "#"}
          className="relative group overflow-hidden bg-white border rounded-xl p-6 flex flex-col items-center text-center shadow-sm"
        >

          {/* الخلفية المتحركة من اليمين */}
          <span className="absolute inset-0 bg-[#154734] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>

          <img
            src={major.img}
            alt={major.title}
            className="relative z-10 w-10 h-10 object-contain mb-4"
          />

          <h3 className="relative z-10 font-bold text-lg mb-1 group-hover:text-white transition">
            {major.title}
          </h3>

        </a>
      ))}

    </div>


    {/* الزر تحت */}
   

  </div>
</section>
      {/* صورة الدراسة في الصين */}
      <section className="py-6 flex justify-center bg-[#f2f9f5]">
        <div className="relative w-[330px] h-[220px] rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://i.pinimg.com/736x/58/cb/bb/58cbbb978738541186bd85e374ece2fb.jpg"
            alt="الدراسة في الصين"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-3xl font-bold text-white mb-3">الدراسة في الصين</h2>
            <p className="text-sm text-gray-200 mb-6">
              منصة ريتال تساعدك على اختيار أفضل الجامعات والمنح الدراسية في الصين لتضمن مستقبلاً تعليمياً مشرقاً.
            </p>
           <a
  href="/study-china"
  className="bg-[#154734] hover:bg-[#0f3a2a] text-white px-6 py-2 rounded-full transition"
>
  قدم
</a>
          </div>
        </div>
      </section>
    </>
  );
}
