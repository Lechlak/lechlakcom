
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUsers, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { GradientButton } from "@/components/ui/gradient-button";
import { SparklesCore } from "@/components/ui/sparkles";

export const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: "Customer Experience",
      company: "The Image Group, Rolled Alloys, Toledo Lucas County Public Library",
      period: "2011 - Present",
      description: "15 years of analytics expertise driving strategic decisions",
      icon: faUsers,
      color: "from-teal-500 to-sky-500",
      image: "./OneDay.png"
    },
    {
      title: "Project Management",
      company: "The Image Group, Rolled Alloys, Toledo Lucas County Public Library",
      period: "2011 - Present",
      description: "Leadership & mentoring enhancing talent development",
      icon: faChartLine,
      color: "from-teal-500 to-sky-500",
      image: "./gantt-chart.png"
    },
    {
      title: "Strategic Roadmap",
      company: "Toledo Lucas County Public Library",
      period: "2015 - 2022",
      description: "Led evaluation of three strategic plans with data-driven improvements",
      icon: faBullseye,
      color: "from-teal-500 to-sky-500",
      image: "./demographic-heatmap.png"
    },
  ];

  return (
    <section id="experience" className="relative min-h-[600px]">
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="experienceSparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#05abc4"
          speed={0.8}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent" />
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-500 to-sky-500 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"} absolute -inset-0.5 rounded-lg z-0 flex items-center justify-center`}>
                <GradientButton 
                  className="w-full h-full cursor-default" 
                  variant={index % 2 === 0 ? "default" : "variant"}
                >
                  &nbsp;
                </GradientButton>
              </div>
              
              <Card className="glass-card hover:scale-[1.02] transition-transform duration-300 overflow-hidden h-full flex flex-col relative z-10">
                <div className="relative h-48">
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 text-sky-500">{exp.title}</h3>
                  <p className="text-gray-300 mb-4 flex-1">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
