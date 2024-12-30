import { Link } from "react-scroll";
import { ThemeToggle } from "./ThemeToggle";
import { useCallback, useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { debounce } from "lodash";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = useMemo(
    () => [
      { id: "hero", label: "Home" },
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "portfolio", label: "Portfolio" },
      { id: "awards", label: "Awards" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const handleScroll = useCallback(
    debounce(() => {
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));
  
      const currentSection = sectionElements.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
  
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
  
      setScrolled(window.scrollY > 20);
    }, 100),
    [sections]
  );
  
  const handleInstantScroll = useCallback(() => {
    const rotation = window.scrollY / 5;
    const icon = document.querySelector(".rotating-icon");
    if (icon) {
      icon.style.transform = `rotate(${rotation}deg)`;
    }
  }, []);
  
  useEffect(() => {
    const onScroll = () => {
      handleScroll();
      handleInstantScroll();
    };
  
    window.addEventListener("scroll", onScroll);
  
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [handleScroll, handleInstantScroll]);
  
  
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      handleScroll.cancel();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform ${
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Updated Logo Design */}
          <div className="flex-shrink-0 flex items-center">
            <div className="relative flex items-center">
            <div
      className="w-12 h-12 bg-amber-400 transform triforce"
    />
              <span className="ml-2 text-xl font-bold text-sky-700">AL</span>
            </div>
          </div>
          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-400 focus:outline-none">
              {menuOpen ? (
                <span className="material-icons">close</span>
              ) : (
                <span className="material-icons">menu</span>
              )}
            </button>
          </div>

          {/* Navigation Links for Desktop */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {sections.map((section) => (
              <Link
                key={section.id}
                to={section.id}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className={`nav-link ${
                  activeSection === section.id ? "active text-sky-500" : "text-gray-400"
                }`}
              >
                {section.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col items-center justify-center md:hidden">
            {/* Mobile Logo */}
            <div className="relative flex items-center my-4">
              <div
                className="w-8 h-8 bg-[#9b87f5] transform rotate-180">
                  <img src="./triforce.svg" alt="3 triangle logo for Lechlak" />
              </div>
              <span className="ml-2 text-xl font-bold text-[#1A1F2C]">AL</span>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col items-center space-y-4">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  to={section.id}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className={`nav-link ${
                    activeSection === section.id ? "active text-sky-500" : "text-gray-400"
                  }`}
                  onClick={toggleMenu}
                >
                  {section.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};