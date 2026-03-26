import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
  {
    name: "حازم العموري",
    role: "المدير العام",
    image: "https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjM5MTgxMHww&ixlib=rb-4.1.0&q=80&w=400",
    bio: "أكثر من 15 عاماً من الخبرة في مجال التعليم والاستشارات الأكاديمية الدولية",
    color: "#0d2b5e",
  },
  {
    name: "وسيم إدريس",
    role: "المدير التنفيذي",
    image: "https://images.unsplash.com/photo-1747835945032-d8b34140bb51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcmFiJTIwc3R1ZGVudCUyMHlvdW5nJTIwbWFuJTIwc21pbGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzIzOTE4MDl8MA&ixlib=rb-4.1.0&q=80&w=400",
    bio: "خبير في إدارة العمليات وتطوير الشراكات الاستراتيجية مع الجامعات الدولية",
    color: "#c0392b",
  },
  {
    name: "أيمن مكناس",
    role: "مدير العلاقات العامة",
    image: "https://images.unsplash.com/photo-1585298799938-a15d7abb8523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGNvdW5zZWxvciUyMG1lZXRpbmclMjBzdHVkZW50JTIwYWR2aXNpbmd8ZW58MXx8fHwxNzcyMzkxODE4fDA&ixlib=rb-4.1.0&q=80&w=400",
    bio: "متخصص في بناء الشراكات والعلاقات مع المؤسسات التعليمية في تركيا وأوروبا",
    color: "#0d2b5e",
  },
  {
    name: "سارة بن علي",
    role: "كبيرة المستشارين الأكاديميين",
    image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwb2ZmaWNlJTIwZXhlY3V0aXZlfGVufDF8fHx8MTc3MjM5MTgxNHww&ixlib=rb-4.1.0&q=80&w=400",
    bio: "حاصلة على الدكتوراه في علم التربية من جامعة إسطنبول، متخصصة في توجيه الطلاب",
    color: "#c0392b",
  },
  {
    name: "محمد الزيدي",
    role: "مدير قسم القبول",
    image: "https://images.unsplash.com/photo-1704748082614-8163a88e56b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc3R1ZGVudCUyMHN0dWR5aW5nJTIwbGFwdG9wJTIwdW5pdmVyc2l0eXxlbnwxfHx8fDE3NzIzOTE4MTN8MA&ixlib=rb-4.1.0&q=80&w=400",
    bio: "خبرة واسعة في إجراءات القبول الجامعي وإعداد الملفات للجامعات التركية والأوروبية",
    color: "#0d2b5e",
  },
  {
    name: "ليلى مصطفى",
    role: "مستشارة ما بعد القبول",
    image: "https://images.unsplash.com/photo-1714558711114-04eb6d6749b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwaW50ZXJuYXRpb25hbCUyMHN0dWRlbnRzJTIwdW5pdmVyc2l0eSUyMGNhbXB1cyUyMHNtaWxpbmd8ZW58MXx8fHwxNzcyMzkxODAzfDA&ixlib=rb-4.1.0&q=80&w=400",
    bio: "تتولى دعم الطلاب في جميع إجراءات الإقامة والسكن والتأقلم في البيئة الدراسية الجديدة",
    color: "#c0392b",
  },
];

export function TeamSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#f5f7fb" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-4"
            style={{ backgroundColor: "#0d2b5e15", color: "#0d2b5e" }}
          >
            فريقنا المتميز
          </span>
          <h2 className="text-4xl font-black text-gray-900 mb-4">تعرف على فريق العمل</h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            فريق من الخبراء المتخصصين المكرسين لضمان نجاح رحلتك التعليمية
          </p>
          <div className="w-20 h-1 rounded-full mx-auto mt-5" style={{ backgroundColor: "#c0392b" }} />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ border: "1px solid #e8ecf0" }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
                  style={{ background: "linear-gradient(to top, rgba(13,43,94,0.8), transparent)" }}
                >
                  <div className="flex gap-3">
                    {[Linkedin, Twitter, Mail].map((Icon, i) => (
                      <button
                        key={i}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-white/40 transition-all"
                      >
                        <Icon size={16} />
                      </button>
                    ))}
                  </div>
                </div>
                {/* Color bar */}
                <div
                  className="absolute bottom-0 right-0 left-0 h-1"
                  style={{ backgroundColor: member.color }}
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-black text-gray-900 text-xl mb-1">{member.name}</h3>
                <p
                  className="text-sm font-semibold mb-3 flex items-center gap-2"
                  style={{ color: member.color }}
                >
                  <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ backgroundColor: member.color }}
                  />
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
