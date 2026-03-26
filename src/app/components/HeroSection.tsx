import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, GraduationCap, Globe, Star } from "lucide-react";

import bosImg from "../public/bos.jpg";
import hommImg from "../public/homm.jpg";

const heroSlides = [
  {
    image: hommImg,
    headline: "منصتك للوصول لأفضل المنح الدراسية حول العالم",
    subheadline: "نساعدك في اتخاذ قرار تعليمي يغير مسار حياتك مع أفضل الجامعات العالمية",
  },
  {
    image: bosImg,
    headline: "أكثر من 5000 طالب وثّقنا مسيرتهم التعليمية",
    subheadline: "انضم إلى مجتمعنا من الطلاب الناجحين واحصل على قبول جامعي مضمون",
  },
  
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const goToPrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const slide = heroSlides[currentSlide];

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isAnimating ? "opacity-60" : "opacity-100"}`}
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(13,43,94,0.88) 0%, rgba(13,43,94,0.60) 50%, rgba(0,0,0,0.30) 100%)",
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #ffffff, transparent)" }}
      />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #ffffff, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Badge */}
        

        {/* Main Headline */}
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 max-w-4xl leading-tight transition-all duration-500 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
        >
          {slide.headline}
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed transition-all duration-500 delay-100 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
        >
          {slide.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#programs"
            className="px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all duration-200 hover:shadow-2xl hover:scale-105 flex items-center gap-2"
            style={{ backgroundColor: "#c0392b" }}
          >
            <GraduationCap size={22} />
            استكشف المنح الآن
          </a>
         
        </div>

        {/* Quick Stats Pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {[
            { icon: "", text: "+5000 طالب مقبول" },
            { icon: "", text: "+15 جامعة شريكة" },
            { icon: "", text: "+10 سنوات خبرة" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold"
              style={{ backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

     


     
      
    </section>
  );
}