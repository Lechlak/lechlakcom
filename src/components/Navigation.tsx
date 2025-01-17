import { Link } from "react-scroll";
import { ThemeToggle } from "./ThemeToggle";
import { useCallback, useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { debounce } from "lodash";
import { SquareX, SquareMenu } from "lucide-react";

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
  
  const handleGlowEffect = useCallback(() => {
    const icon = document.querySelector(".rotating-icon");
  
    if (icon) {
      // Apply glow effect
      icon.style.boxShadow = "0 0 20px rgb(253, 244, 189)";
      icon.style.filter = "brightness(1.5)";
  
      // Remove glow effect after 1 second
      setTimeout(() => {
        icon.style.boxShadow = "none";
        icon.style.filter = "none";
      }, 500);
    }
  }, []);
  
  useEffect(() => {
    const onScroll = () => {
      handleScroll();
      handleGlowEffect(); // Trigger glow effect on scroll
    };
  
    window.addEventListener("scroll", onScroll);
  
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [handleScroll, handleGlowEffect]);
  
  

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
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-background/80 backdrop-blur-lg shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Updated Logo Design */}
          <div className="flex-shrink-0 flex items-center min-w-20">
          <div className="relative flex items-center">
            <div
                className="w-8 h-8 transform rotate-0 rotating-icon"
                style={{ transformOrigin: "center" }}
              >
                <img className="w-full" src="./triangles.png" alt="3 triangle logo for Lechlak" />
              </div>
              <span className="ml-2 text-xl font-bold text-sky-600">AL</span>
            </div>
          </div>
          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-400 focus:outline-none">
              {menuOpen ? (
                <SquareX className="h-5 w-5" />
              ) : (
                <SquareMenu className="h-5 w-5" />
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
          <div className="pb-4 flex flex-col items-center justify-center md:hidden">
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