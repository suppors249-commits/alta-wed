import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users } from "lucide-react";

const events = [
  {
    image: "https://images.unsplash.com/photo-1763469029610-a3e8e4536c6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjBvdXRkb29yJTIwY2FtcHVzJTIwc21pbGluZyUyMGdyb3VwfGVufDF8fHx8MTc3MjM5MTgyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "حفل الترحيب بالطلاب الجدد 2025",
    description: "حفل استقبال سنوي يجمع الطلاب الجدد مع الطلاب المتقدمين لتبادل الخبرات وبناء شبكة علاقات قوية",
    date: "15 سبتمبر 2025",
    location: "الهند",
    attendees: "250+ طالب",
  },
  {
    image: "https://images.unsplash.com/photo-1622016579436-14c1844c99ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGdyb3VwJTIwZGlzY3Vzc2lvbiUyMGNsYXNzcm9vbSUyMGhhcHB5fGVufDF8fHx8MTc3MjM5MTgxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "معرض الجامعات الروسيا 2025",
    description: "معرض متخصص يضم ممثلين من أكثر من 50 جامعة تركية للتعريف بالبرامج الدراسية والمنح المتاحة",
    date: "20 أكتوبر 2025",
    location: "روسيا ",
    attendees: "500+ زائر",
  },
  {
    image: "https://images.unsplash.com/photo-1757143137392-0b1e1a27a7de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc2Nob2xhcnNoaXAlMjBhd2FyZCUyMGNlcmVtb255JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3MjM5MTgyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "حفل تخريج الدفعة الثانية عشرة",
    description: "احتفال مميز بتخريج دفعة جديدة من طلابنا المتميزين الذين أنجزوا مسيرتهم الأكاديمية بنجاح",
    date: "5 يونيو 2025",
    location: "الصين",
    attendees: "300+ حضور",
  },
];

export function EventsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnim, setIsAnim] = useState(false);

  const go = (dir: number) => {
    if (isAnim) return;
    setIsAnim(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + dir + events.length) % events.length);
      setIsAnim(false);
    }, 300);
  };

  useEffect(() => {
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
  }, [current]);

  const event = events[current];

  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-4"
            style={{ backgroundColor: "#c0392b15", color: "#c0392b" }}
          >
            مجتمعنا
          </span>
          <h2 className="text-4xl font-black text-gray-900 mb-4">  فعاليات طلابنا</h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            نبني مجتمعاً طلابياً متماسكاً من خلال الفعاليات والأنشطة التي تجمع طلابنا من مختلف الدول
          </p>
          <div className="w-20 h-1 rounded-full mx-auto mt-5" style={{ backgroundColor: "#c0392b" }} />
        </div>

        {/* Carousel */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Image */}
          <div
            className={`relative h-96 md:h-[500px] transition-opacity duration-300 ${isAnim ? "opacity-50" : "opacity-100"}`}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(13,43,94,0.95) 0%, rgba(13,43,94,0.4) 50%, transparent 100%)" }}
            />
          </div>

          {/* Content Overlay */}
          <div
            className={`absolute bottom-0 right-0 left-0 p-8 md:p-12 transition-all duration-300 ${isAnim ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
          >
            <div className="max-w-2xl">
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="flex items-center gap-1.5 text-blue-200 text-sm">
                  <Calendar size={15} />
                  {event.date}
                </span>
                <span className="flex items-center gap-1.5 text-blue-200 text-sm">
                  <MapPin size={15} />
                  {event.location}
                </span>
                <span className="flex items-center gap-1.5 text-blue-200 text-sm">
                  <Users size={15} />
                  {event.attendees}
                </span>
              </div>
              <h3 className="text-3xl font-black text-white mb-3">{event.title}</h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">{event.description}</p>
              <button
                className="px-7 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
                style={{ backgroundColor: "#c0392b" }}
              >
                انضم للفعالية
              </button>
            </div>
          </div>

          {/* Controls */}
         
         

          {/* Dots */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/50"}`}
              />
            ))}
          </div>
        </div>

        {/* Mini Cards */}
        
      </div>
    </section>
  );
}
