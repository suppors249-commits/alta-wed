import { useState } from "react";
import { Send, Phone, Mail, MapPin, MessageSquare, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    country: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "اتصل بنا",
      value: "+201553990998",
      sub: "+90 987 654 3210",
      color: "#0d2b5e",
    },
    {
      icon: Mail,
      label: "البريد الإلكتروني",
      value: "info@ratal-edu.com",
      sub: "altayeb4fa@gmail.com",
      color: "#c0392b",
    },
   {
  icon: MapPin,
  label: "موقعنا",
  value: "مصر – القاهرة",
  sub: "  Saeed Mahmoud Hassanein Building",
  color: "#0d2b5e",
},
    {
      icon: MessageSquare,
      label: "واتساب",
      value: "+249 91 112 0260",
      sub: "متاح 24/7",
      color: "#27ae60",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-4"
            style={{ backgroundColor: "#c0392b15", color: "#c0392b" }}
          >
            تواصل معنا
          </span>
          <h2 className="text-4xl font-black text-gray-900 mb-4">دعنا نتواصل معك</h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            فريقنا جاهز للإجابة على جميع استفساراتك ومساعدتك في بدء رحلتك التعليمية
          </p>
          <div className="w-20 h-1 rounded-full mx-auto mt-5" style={{ backgroundColor: "#c0392b" }} />
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-6">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-2xl hover:shadow-md transition-all duration-200"
                  style={{ border: "1.5px solid #e8ecf0" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${item.color}15, ${item.color}30)` }}
                  >
                    <Icon size={22} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                    <p className="font-bold text-gray-900">{item.value}</p>
                    <p className="text-gray-500 text-sm">{item.sub}</p>
                  </div>
                </div>
              );
            })}

            
          </div>

         
        </div>
      </div>
    </section>
  );
}
