import { Link } from "react-scroll";

export const Navigation = () => {
  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "portfolio", label: "Portfolio" },
    { id: "awards", label: "Awards" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 space-x-8">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="text-sm font-medium text-gray-400 hover:text-purple-400 cursor-pointer transition-colors"
              activeClass="text-purple-400"
            >
              {section.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};