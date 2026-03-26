import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "أحمد الرشيدي",
    country: "🇸🇦 السعودية",
    university: "جامعة إسطنبول",
    major: "هندسة الحاسوب",
    rating: 5,
    image: "https://images.unsplash.com/photo-1747835945032-d8b34140bb51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcmFiJTIwc3R1ZGVudCUyMHlvdW5nJTIwbWFuJTIwc21pbGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzIzOTE4MDl8MA&ixlib=rb-4.1.0&q=80&w=200",
    text: "منصة رتال غيّرت مسار حياتي بالكامل. كنت أحلم بالدراسة في الخارج لكنني لم أكن أعرف من أين أبدأ. الفريق كان معي في كل خطوة من تجهيز الملفات حتى وصلت إسطنبول وبدأت دراستي. أنصح كل طالب عربي بالتواصل معهم.",
    year: "2023",
  },
  {
    name: "نور الحسن",
    country: "🇯🇴 الأردن",
    university: "جامعة بيلكنت",
    major: "إدارة الأعمال الدولية",
    rating: 5,
    image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwb2ZmaWNlJTIwZXhlY3V0aXZlfGVufDF8fHx8MTc3MjM5MTgxNHww&ixlib=rb-4.1.0&q=80&w=200",
    text: "ما يميز منصة رتال هو الاهتمام الشخصي بكل طالب. لم أشعر يوماً أنني مجرد رقم بينهم. ساعدوني في الحصول على قبول في جامعة بيلكنت المرموقة ورتّبوا لي كل شيء من السكن لأوراق الإقامة. تجربة لا تُنسى!",
    year: "2024",
  },
  {
    name: "عمر بن يوسف",
    country: "🇲🇦 المغرب",
    university: "جامعة أنقرة",
    major: "الطب البشري",
    rating: 5,
    image: "https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjM5MTgxMHww&ixlib=rb-4.1.0&q=80&w=200",
    text: "كان حلمي الدراسة في كلية الطب التركية وقد حققته بفضل فريق رتال. ساعدوني في فهم متطلبات القبول وترجمة وثائقي وقدموا لي دعماً نفسياً ومعنوياً خلال فترة الانتظار. الآن أنا في السنة الثانية طب في أنقرة.",
    year: "2023",
  },
  {
    name: "فاطمة الزهراوي",
    country: "🇩🇿 الجزائر",
    university: "جامعة حاجتبه",
    major: "الهندسة الطبية الحيوية",
    rating: 5,
    image: "https://images.unsplash.com/photo-1704748082614-8163a88e56b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc3R1ZGVudCUyMHN0dWR5aW5nJTIwbGFwdG9wJTIwdW5pdmVyc2l0eXxlbnwxfHx8fDE3NzIzOTE4MTN8MA&ixlib=rb-4.1.0&q=80&w=200",
    text: "خدمة احترافية بكل معنى الكلمة. المستشارة سارة التي تولّت ملفي كانت متاحة في أي وقت وأجابت على كل استفساراتي بصبر ودقة. أنهيت إجراءات القبول في ثلاثة أسابيع فقط!",
    year: "2024",
  },
  {
    name: "يوسف القاسمي",
    country: "🇪🇬 مصر",
    university: "جامعة بوغازيتشي",
    major: "الذكاء الاصطناعي",
    rating: 5,
    image: "https://images.unsplash.com/photo-1585298799938-a15d7abb8523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGNvdW5zZWxvciUyMG1lZXRpbmclMjBzdHVkZW50JTIwYWR2aXNpbmd8ZW58MXx8fHwxNzcyMzkxODE4fDA&ixlib=rb-4.1.0&q=80&w=200",
    text: "جامعة بوغازيتشي كانت حلماً يبدو بعيد المنال، لكن منصة رتال جعلته حقيقة. ساعدوني في تجهيز ملف استثنائي وأجروا معي تدريبات على المقابلة. اليوم أنا طالب ماجستير في الذكاء الاصطناعي في واحدة من أرقى جامعات تركيا.",
    year: "2024",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnim, setIsAnim] = useState(false);

  const go = (dir: number) => {
    if (isAnim) return;
    setIsAnim(true);
    setTimeout(() => {
      setCurrent((p) => (p + dir + testimonials.length) % testimonials.length);
      setIsAnim(false);
    }, 300);
  };

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [current]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-4"
            style={{ backgroundColor: "#c0392b15", color: "#c0392b" }}
          >
            آراء طلابنا
          </span>
          <h2 className="text-4xl font-black text-gray-900 mb-4">شهادات الطلاب</h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            اقرأ ما يقوله طلابنا عن تجربتهم مع منصة رتال التعليمية
          </p>
          <div className="w-20 h-1 rounded-full mx-auto mt-5" style={{ backgroundColor: "#c0392b" }} />
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className={`transition-all duration-300 ${isAnim ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}
          >
            <div
              className="relative p-8 md:p-12 rounded-3xl shadow-xl"
              style={{
                background: "linear-gradient(135deg, #0d2b5e 0%, #1e5799 100%)",
              }}
            >
              {/* Quote Icon */}
              <div
                className="absolute top-8 left-8 opacity-20"
              >
                <Quote size={80} className="text-white" />
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-24 h-24 rounded-2xl object-cover border-4 border-white/20"
                    />
                    
                   
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-yellow-400" fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-white/90 text-lg leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>

                  <div>
                    <p className="text-white font-black text-xl">{t.name}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="text-blue-200 text-sm">{t.country}</span>
                      <span className="w-1 h-1 rounded-full bg-blue-400" />
                      <span className="text-blue-200 text-sm">{t.university}</span>
                      <span className="w-1 h-1 rounded-full bg-blue-400" />
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: "rgba(192,57,43,0.3)", color: "#ff9f8f" }}
                      >
                        {t.major}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-3 bg-blue-900" : "w-3 h-3 bg-gray-300"}`}
                />
              ))}
            </div>
            
          </div>
        </div>

        {/* Mini Testimonials Grid */}
        
      </div>
    </section>
  );
}
