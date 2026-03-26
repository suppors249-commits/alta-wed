import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok  } from "@fortawesome/free-brands-svg-icons";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [openMobileSubDropdown, setOpenMobileSubDropdown] = useState(null);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "الرئيسية", to: "/" },
    {
      label: "الخدمات",
      to: "/services",
      dropdown: [
        { label: "تقديم منح", to: "/services/scholarships/" },
        { label: "خدمات عامة ", to: "#services" },
        
        { label: "استخرج شهادات ثانوي", to: "/services/certificate-services" },
       
      ],
    },
    {
     label: "الجامعات",
  to: "/universities/1",
      
    },
    { label: "من نحن", to: "/about" },
    { label: "البرامج", to: "#services" },
    { label: "مدوناتنا", to: "#testimonials" },
    { label: "تواصل معنا", to: "#" },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#f5f7fb] shadow-lg" : "bg-white/95 -blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#0d2b5e]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          
      <h1
  className="text-2xl font-extrabold tracking-wider"
  style={{ fontFamily: "Poppins, Tajawal, sans-serif" }}
>
  ALTA{""}<span className="text-[#0d2b5e]">YEB</span>
</h1>


          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDesktopDropdown(link.label)}
                  onMouseLeave={() => setOpenDesktopDropdown(null)}
                >
                  <span className="px-4 py-2 rounded-lg text-gray-700 relative text-sm font-semibold hover:text-[#0d2b5e] flex items-center gap-1 cursor-pointer">
                    {link.label} <ChevronDown size={16} />
                  </span>
                  {openDesktopDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-60 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                      {link.dropdown.map((item) => (
                        <div key={item.label} className="relative group text-right">
                          {item.subDropdown ? (
                            <>
                              <span className="block px-4 py-2 text-gray-700 cursor-pointer">
                                {item.label}
                              </span>
                              <div className="absolute top-0 left-full ml-1 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block z-50 text-right">
                                {item.subDropdown.map((sub) => (
                                  <Link
                                    key={sub.id}
                                    to={`/universities/${sub.id}`}
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </>
                          ) : (
                            <Link
                              to={item.to}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                              {item.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 rounded-lg text-gray-700 relative text-sm font-semibold hover:underline"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="#consultation"
              className="px-5 py-2.5 rounded-xl text-white text-sm font-bold transition-all duration-200 hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: "#0d2b5e" }}
            >
              احجز استشارة مجانية
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-black/90 text-white flex flex-col pt-0 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* زر X ثابت */}
        <div className="sticky top-0 right-0 left-0 flex justify-end p-6 bg z-50">
          <button
            className="p-2 rounded-lg text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        {/* Menu Links scrollable */}
        <div className="overflow-y-auto flex flex-col items-center pt-4 px-6">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="w-full text-center relative">
                <button
                  className="flex justify-center items-center gap-1 py-3 px-4 rounded-xl font-semibold w-full hover:bg-white/20 active:underline"
                  onClick={() =>
                    setOpenMobileDropdown(
                      openMobileDropdown === link.label ? null : link.label
                    )
                  }
                >
                  {link.label}
                  <ChevronDown size={20} />
                </button>

                {openMobileDropdown === link.label && (
                  <div className="flex flex-col gap-2 pl-4 mt-2">
                    {link.dropdown.map((item) => (
                      <div key={item.label}>
                        <button
                          className="flex justify-center items-center gap-1 py-3 px-4 rounded-xl font-semibold w-full hover:bg-white/20 active:underline"
                          onClick={() =>
                            setOpenMobileSubDropdown(
                              openMobileSubDropdown === item.label
                                ? null
                                : item.label
                            )
                          }
                        >
                          {item.label}
                          {item.subDropdown && <ChevronDown size={16} />}
                        </button>

                        {item.subDropdown &&
                          openMobileSubDropdown === item.label && (
                            <div className="grid grid-cols-1 gap-2 justify-center mt-1">
                              {item.subDropdown.map((sub) => (
                                <Link
                                  key={sub.id}
                                  to={`/universities/${sub.id}`}
                                  className="py-2 px-2 rounded-lg hover:bg-white/20 text-center block"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="block text-center py-3 rounded-xl hover:bg-white/20 font-semibold text-lg active:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* more-buttons ثابت أسفل الشاشة */}
     <div className="flex items-center gap-6 justify-center py-6 text-2xl">

  <a href="https://www.facebook.com/profile.php?id=100063611078141&ref=NONE_xav_ig_profile_page_web#" target="_blank">
    <FontAwesomeIcon icon={faFacebook} />
  </a>

  <a href="https://www.instagram.com/altayeb_alabid_group/" target="_blank">
    <FontAwesomeIcon icon={faInstagram} />
  </a>

  <a href="https://www.tiktok.com/@altayeb_alabid_group?_t=8mIE5LXjcYF&_r=1&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn7Cq_BV-J1nerDBbaCxVljrzXNds7UWVW7zjXd0sDGNSQ3AD0adoMRj2fJaY_aem_m8PdxxZEDwF0kvnrIOzsmA" target="_blank">
  <FontAwesomeIcon icon={faTiktok} />
</a>

  

</div>
      </div>
    </header>
  );
}