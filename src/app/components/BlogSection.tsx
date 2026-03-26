import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";

const articles = [
  {
    title: "أفضل 10 جامعات الصينية لدراسة الهندسة باللغة الإنجليزية في 2025",
    excerpt: "تتميز تركيا بمجموعة رائعة من الجامعات التي تقدم برامج هندسية باللغة الإنجليزية بمستوى عالمي وتكاليف معقولة. تعرف في هذا المقال على أفضل الخيارات المتاحة لك...",
    image: "https://images.unsplash.com/photo-1664273891579-22f28332f3c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcyMzkxODA2fDA&ixlib=rb-4.1.0&q=80&w=600",
    date: "15 فبراير 2025",
    readTime: "8 دقائق",
    category: "الجامعات الهندية",
    categoryColor: "#0d2b5e",
    featured: true,
  },
  {
    title: "دليل شامل: كيف تحصل على منحة دراسية تركية لعام 2025",
    excerpt: "تقدم تركيا عشرات المنح الدراسية السنوية للطلاب الدوليين. في هذا الدليل نشرح لك خطوة بخطوة كيف تتقدم وتزيد فرص قبولك...",
    image: "https://images.unsplash.com/photo-1757143137392-0b1e1a27a7de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc2Nob2xhcnNoaXAlMjBhd2FyZCUyMGNlcmVtb255JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3MjM5MTgyMXww&ixlib=rb-4.1.0&q=80&w=600",
    date: "10 فبراير 2025",
    readTime: "12 دقيقة",
    category: "المنح الدراسية",
    categoryColor: "#c0392b",
    featured: false,
  },
  {
    title: "تكلفة المعيشة في في الصين للطلاب: دليل عملي محدّث",
    excerpt: "قبل أن تقرر الدراسة في الهند من المهم أن تفهم التكاليف الحقيقية للمعيشة. في هذا المقال نقدم لك تفصيلاً دقيقاً لميزانية الطالب الشهرية...",
    image: "https://images.unsplash.com/photo-1690060806285-67f27a66ac94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUdXJrZXklMjBJc3RhbmJ1bCUyMHVuaXZlcnNpdHklMjBjYW1wdXMlMjBtb2Rlcm58ZW58MXx8fHwxNzcyMzkxODE0fDA&ixlib=rb-4.1.0&q=80&w=600",
    date: "5 فبراير 2025",
    readTime: "6 دقائق",
    category: "حياة الطلاب",
    categoryColor: "#27ae60",
    featured: false,
  },
  {
    title: "الفرق بين الجامعات الحكومية والخاصة في تركيا",
    excerpt: "يتساءل كثير من الطلاب عن الفرق بين الجامعات الحكومية والخاصة في تركيا من حيث الجودة التعليمية والتكلفة والاعتماد الدولي. هذا المقال يجيب على كل أسئلتك...",
    image: "https://images.unsplash.com/photo-1600096036367-a2bf5895620e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmclMjBib29rc3xlbnwxfHx8fDE3NzIzOTE4MDZ8MA&ixlib=rb-4.1.0&q=80&w=600",
    date: "1 فبراير 2025",
    readTime: "10 دقائق",
    category: "نصائح تعليمية",
    categoryColor: "#8e44ad",
    featured: false,
  },
];

export function BlogSection() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <section id="blog" className="py-20 px-4" style={{ backgroundColor: "#f5f7fb" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <span
              className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-3"
              style={{ backgroundColor: "#0d2b5e15", color: "#0d2b5e" }}
            >
              المدونة التعليمية
            </span>
            <h2 className="text-4xl font-black text-gray-900">آخر الأخبار والمقالات</h2>
          </div>
          
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Article */}
          <div
            className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            style={{ border: "1px solid #e8ecf0" }}
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }} />
              <div
                className="absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: featured.categoryColor }}
              >
                {featured.category}
              </div>
              
            </div>
            <div className="p-7">
              <div className="flex gap-4 text-gray-400 text-sm mb-4">
                <span className="flex items-center gap-1.5"><Calendar size={14} />{featured.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} />{featured.readTime}</span>
              </div>
              <h3 className="font-black text-gray-900 text-2xl mb-3 leading-snug group-hover:text-blue-900 transition-colors">
                {featured.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-5">{featured.excerpt}</p>
              <span
                className="inline-flex items-center gap-2 text-sm font-bold"
                style={{ color: "#0d2b5e" }}
              >
                اقرأ المقال كاملاً
                <ArrowLeft size={15} />
              </span>
            </div>
          </div>

          {/* Side Articles */}
          
        </div>
      </div>
    </section>
  );
}
