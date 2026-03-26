import {
  Phone,
  MapPin,
  FileText,
  Home,
  BookOpen,
  Compass,
  GraduationCap,
  MessageCircle,
  Globe,
  HeartHandshake,
} from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "استشارات مجانية",
    description: "احصل على استشارة سريعة لتحديد أفضل مسار دراسي لك.",
    color: "#0d2b5e",
  },
  {
    icon: Compass,
    title: "التوجيه الأكاديمي",
    description: "فريق متخصص يوجهك لاختيار التخصص والجامعة المناسبة.",
    color: "#0d2b5e",
  },
  {
    icon: GraduationCap,
    title: "اختيار الجامعة",
    description: "نساعدك في اختيار الجامعة المثالية لطموحاتك.",
    color: "#0d2b5e",
  },
  {
    icon: BookOpen,
    title: "القبول الجامعي",
    description: "نتولى إجراءات التقديم لضمان قبولك بأفضل الجامعات.",
    color: "#0d2b5e",
  },
  {
    icon: Home,
    title: "دعم السكن",
    description: "نوفر لك سكن آمن ومريح طوال فترة .",
    color: "#0d2b5e",
  },
  {
    icon: Globe,
    title: "تصاريح الإقامة",
    description: "نساعدك في استخراج وتجديد الإقامة بسهولة.",
    color: "#0d2b5e",
  },
  {
    icon: FileText,
    title: "الوثائق والترجمة",
    description: "نقدم ترجمة وتوثيق سريع لجميع مستنداتك.",
    color: "#0d2b5e",
  },
  {
    icon: Phone,
    title: "دعم 24/7",
    description: "فريقنا جاهز للرد على استفساراتك في أي .",
    color: "#0d2b5e",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-7 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start gap-6 mb-6">
          <div className="flex-1">
            <span
              className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-4"
              style={{ backgroundColor: "#c0392b15", color: "#c0392b" }}
            >
             تعرف علينا
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
               من نحن {" "}
              <span style={{ color: "#0d2b5e" }}>Altayeb Alabid Group</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              منصة <strong>Altayeb Alabid Group</strong> هي الوجهة الأولى للطلاب العرب الراغبين في الدراسة بالخارج، وخصوصًا في الجامعات التركية والعالمية. نحن نقدم خدمات تعليمية متكاملة بدءًا من الاستشارات الأولية وحتى القبول الأكاديمي والاستقرار في بلد الدراسة.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              فريقنا مكون من أكثر من 85 مستشارًا أكاديميًا متخصصًا، وقد ساهمت خبرتنا في تحقيق نسبة نجاح تتجاوز 98% في قبول الطلاب في أرقى الجامعات. رسالتنا هي جعل حلم الدراسة في الخارج متاحًا لكل طالب عربي طموح، من خلال تقديم خدمات احترافية ومتميزة تلبي كافة احتياجات الطالب.
            </p>
            
          </div>

          {/* Image */}
          <div className="flex-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1585298799938-a15d7abb8523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="استشارة أكاديمية"
                className="w-full h-80 object-cover"
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: "linear-gradient(to top, #0d2b5e, transparent)" }}
              />
            </div>

            {/* Floating Badge */}
            <div
              className="absolute -bottom-6 -right-6 p-5 rounded-2xl shadow-2xl"
              style={{ backgroundColor: "#0d2b5e" }}
            >
              <div className="text-center">
                <p className="text-white text-3xl font-black">98%</p>
                <p className="text-blue-200 text-xs mt-1">  القبول</p>
              </div>
            </div>
            

            
          </div>
          <div className="flex flex-wrap gap-4">
             
              <a
                href="#programs"
                className="px-7 py-3.5 rounded-2xl font-bold transition-all hover:shadow-lg"
                style={{
                  backgroundColor: "#0d2b5e10",
                  color: "#0d2b5e",
                  border: "2px solid #0d2b5e30",
                }}
              >
                تصفح البرامج
              </a>
            </div>
        </div>

        {/* Services Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-black text-gray-900 mb-3">خدماتنا المتكاملة</h3>
          <p className="text-gray-500">
            نقدم طيفاً شاملاً من الخدمات التعليمية لضمان تجربة دراسية ناجحة
          </p>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: "#c0392b" }} />
        </div>

        {/* Services Grid */}
       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
  {services.map((service, index) => {
    const Icon = service.icon;
    return (
      <div
        key={index}
        className="p-6 rounded-2xl bg-white border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer flex flex-col items-center text-center"
        style={{ borderColor: "#e8ecf0" }}
      >
        {/* الأيقونة */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
          style={{ background: `linear-gradient(135deg, ${service.color}15, ${service.color}30)` }}
        >
          <Icon className="m-auto block" size={26} style={{ color: service.color }} strokeWidth={1.8} />
        </div>

        {/* العنوان */}
        <h4 className="font-bold text-[#0d2b5e] mb-2">{service.title}</h4>

        {/* الوصف */}
        <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
      </div>
    );
  })}
</div>
      </div>
    </section>
  );
}