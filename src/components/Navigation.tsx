import { Link } from "react-scroll";
import { ThemeToggle } from "./ThemeToggle";
import { useCallback, useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { debounce } from "lodash";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      handleScroll.cancel();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
          {/* Triangle logo with AL */}
          <div className="flex-shrink-0">
            <div
              className="w-10 h-10 bg-transparent border-l-8 border-t-8 border-[#002b45] relative"
              style={{
                clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <span className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold">
                AL
              </span>
            </div>
          </div>

          {/* Navigation Links */}
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
        <div className="flex flex-col items-center justify-between md:hidden">
          {/* Mobile Triangle Logo */}
          <div className="w-10 h-10 bg-transparent border-l-8 border-t-8 border-[#002b45] relative mx-auto my-4"
            style={{
              clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <span className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold">
              AL
            </span>
          </div>

          {/* Navigation Links */}
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
              >
                {section.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
