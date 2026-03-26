import { useState } from "react";
import { ArrowLeft, BookOpen } from "lucide-react";

const categories = ["الكل", "بكالوريوس", "ماجستير", "دكتوراه", "دبلوم"];

const programs = [
  {
    title: "الإعلام الجديد والاتصال",
    degree: "بكالوريوس",
    university: "جامعة إسطنبول",
    image: "https://images.unsplash.com/photo-1622016579436-14c1844c99ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGdyb3VwJTIwZGlzY3Vzc2lvbiUyMGNsYXNzcm9vbSUyMGhhcHB5fGVufDF8fHx8MTc3MjM5MTgxNHww&ixlib=rb-4.1.0&q=80&w=400",
    duration: "4 سنوات",
    lang: "عربي / إنجليزي",
    tag: "الأكثر طلباً",
  },
  {
    title: "علم النفس والإرشاد",
    degree: "بكالوريوس",
    university: "جامعة أنقرة",
    image: "https://images.unsplash.com/photo-1704748082614-8163a88e56b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc3R1ZGVudCUyMHN0dWR5aW5nJTIwbGFwdG9wJTIwdW5pdmVyc2l0eXxlbnwxfHx8fDE3NzIzOTE4MTN8MA&ixlib=rb-4.1.0&q=80&w=400",
    duration: "4 سنوات",
    lang: "تركي / إنجليزي",
    tag: "",
  },
  {
    title: "الهندسة المدنية",
    degree: "بكالوريوس",
    university: "جامعة إسطنبول التقنية",
    image: "https://images.unsplash.com/photo-1707072787409-c0ad76ce75e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlY2hub2xvZ3klMjBjb21wdXRlciUyMHNjaWVuY2UlMjBzdHVkZW50fGVufDF8fHx8MTc3MjM5MTgxOHww&ixlib=rb-4.1.0&q=80&w=400",
    duration: "4 سنوات",
    lang: "إنجليزي",
    tag: "منحة متاحة",
  },
  {
    title: "الذكاء الاصطناعي وتعلم الآلة",
    degree: "ماجستير",
    university: "جامعة بوغازيتشي",
    image: "https://images.unsplash.com/photo-1690060806285-67f27a66ac94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUdXJrZXklMjBJc3RhbmJ1bCUyMHVuaXZlcnNpdHklMjBjYW1wdXMlMjBtb2Rlcm58ZW58MXx8fHwxNzcyMzkxODE0fDA&ixlib=rb-4.1.0&q=80&w=400",
    duration: "سنتان",
    lang: "إنجليزي",
    tag: "الأكثر طلباً",
  },
  {
    title: "الهندسة الطبية الحيوية",
    degree: "ماجستير",
    university: "جامعة حاجتبه",
    image: "https://images.unsplash.com/photo-1766297246931-7b861269dab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBoYXJtYWN5JTIwc2NpZW5jZSUyMGxhYiUyMHVuaXZlcnNpdHklMjBzdHVkZW50fGVufDF8fHx8MTc3MjM5MTgxOHww&ixlib=rb-4.1.0&q=80&w=400",
    duration: "سنتان",
    lang: "إنجليزي / تركي",
    tag: "منحة متاحة",
  },
  {
    title: "تكنولوجيا المعلومات",
    degree: "ماجستير",
    university: "جامعة بيلكنت",
    image: "https://images.unsplash.com/photo-1757143137392-0b1e1a27a7de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc2Nob2xhcnNoaXAlMjBhd2FyZCUyMGNlcmVtb255JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3MjM5MTgyMXww&ixlib=rb-4.1.0&q=80&w=400",
    duration: "سنتان",
    lang: "إنجليزي",
    tag: "",
  },
  {
    title: "الصيدلة والعلوم الصيدلانية",
    degree: "دبلوم",
    university: "جامعة أتيليم",
    image: "https://images.unsplash.com/photo-1600096036367-a2bf5895620e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmclMjBib29rc3xlbnwxfHx8fDE3NzIzOTE4MDZ8MA&ixlib=rb-4.1.0&q=80&w=400",
    duration: "سنة واحدة",
    lang: "تركي / إنجليزي",
    tag: "",
  },
  {
    title: "البرمجة وتطوير التطبيقات",
    degree: "دبلوم",
    university: "معهد إسطنبول التقني",
    image: "https://images.unsplash.com/photo-1762438136374-b2fe754053f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255JTIwZGlwbG9tYSUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzcyMzkxODA3fDA&ixlib=rb-4.1.0&q=80&w=400",
    duration: "سنة واحدة",
    lang: "إنجليزي",
    tag: "الأكثر طلباً",
  },
];

const degreeColors: Record<string, { bg: string; text: string }> = {
  بكالوريوس: { bg: "#0d2b5e15", text: "#0d2b5e" },
  ماجستير: { bg: "#c0392b15", text: "#c0392b" },
  دكتوراه: { bg: "#27ae6015", text: "#27ae60" },
  دبلوم: { bg: "#f39c1215", text: "#d68910" },
};

export function ProgramsSection() {
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filtered =
    activeCategory === "الكل"
      ? programs
      : programs.filter((p) => p.degree === activeCategory);

  return (
    <section id="programs" className="py-20 px-4" style={{ backgroundColor: "#f5f7fb" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-4"
            style={{ backgroundColor: "#0d2b5e15", color: "#0d2b5e" }}
          >
            التخصصات الأكاديمية
          </span>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            البرامج والتخصصات الشائعة
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            اختر من بين مئات التخصصات في أفضل الجامعات التركية والعالمية المعترف بها دولياً
          </p>
          <div className="w-20 h-1 rounded-full mx-auto mt-5" style={{ backgroundColor: "#c0392b" }} />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200"
              style={
                activeCategory === cat
                  ? { backgroundColor: "#0d2b5e", color: "white", boxShadow: "0 4px 15px rgba(13,43,94,0.3)" }
                  : { backgroundColor: "white", color: "#666", border: "1.5px solid #e0e0e0" }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((program, index) => {
            const degColor = degreeColors[program.degree] || degreeColors["بكالوريوس"];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                style={{ border: "1px solid #e8ecf0" }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{ background: "linear-gradient(to top, #0d2b5e, transparent)" }}
                  />
                  {program.tag && (
                    <div
                      className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: "#c0392b" }}
                    >
                      {program.tag}
                    </div>
                  )}
                  <div
                    className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ backgroundColor: degColor.bg, color: degColor.text, backdropFilter: "blur(8px)" }}
                  >
                    {program.degree}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-1 leading-snug">{program.title}</h3>
                  <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
                    <BookOpen size={13} />
                    {program.university}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      ⏱️ {program.duration}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      🌐 {program.lang}
                    </span>
                  </div>
                  <button
                    className="w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 group-hover:gap-3"
                    style={{ backgroundColor: "#0d2b5e10", color: "#0d2b5e", border: "1.5px solid #0d2b5e30" }}
                  >
                    تفاصيل البرنامج
                    <ArrowLeft size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold transition-all hover:shadow-xl hover:scale-105"
            style={{ backgroundColor: "#0d2b5e" }}
          >
            عرض جميع البرامج
            <ArrowLeft size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
