import { Video, Clock, Users, CheckCircle } from "lucide-react";

const benefits = [
  "استشارة شخصية مع مستشار أكاديمي متخصص",
  "تقييم مؤهلاتك وتحديد الخيارات المناسبة",
  "معلومات دقيقة عن الجامعات والمنح المتاحة",
  "خطة واضحة للخطوات التالية في رحلتك",
];

export function ConsultationCTA() {
  return (
    <section
      id="consultation"
      className="py-20 px-4 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0d2b5e 0%, #1e5799 50%, #0d2b5e 100%)" }}
    >
      {/* Decorative Elements */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #ffffff, transparent)", transform: "translate(-30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #c0392b, transparent)", transform: "translate(30%, 30%)" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #ffffff, transparent)", transform: "translateY(-50%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-right">
            

            <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
              احجز استشارتك
              <br />
              
            </h2>

            <p className="text-blue-200 text-lg leading-relaxed mb-8 max-w-lg">
              تحدث مع أحد مستشارينا الأكاديميين المتخصصين واحصل على خارطة طريق واضحة
              لبدء مسيرتك التعليمية في أفضل الجامعات العالمية
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-10">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={20} style={{ color: "#ffd700", flexShrink: 0 }} />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Meta Info */}
           

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              
              <a
                href="https://wa.me/905001234567"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
               
              >
               قدم استشارة
               
              </a>
            </div>
          </div>

          
         
        </div>
      </div>
    </section>
  );
}
