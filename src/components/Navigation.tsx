import { Link } from "react-scroll";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "portfolio", label: "Portfolio" },
    { id: "awards", label: "Awards" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const currentSection = sectionElements.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-center space-x-8">
            {sections.map((section) => (
              <Link
                key={section.id}
                to={section.id}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className={`text-sm font-medium transition-colors cursor-pointer
                  ${activeSection === section.id 
                    ? 'text-sky-500 border-b-2 border-sky-400' 
                    : 'text-gray-400 hover:text-sky-500'}`}
              >
                {section.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};