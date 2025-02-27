
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import { MovingBorder } from "@/components/ui/moving-border";

export const Awards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const awards = [
    {
      title: "2023 IMLS National Medal Winner",
      organization: "Toledo Lucas County Public Library",
      year: "2023",
      description: "Awarded to only 8 libraries and/or museums.",
      image: "./nationalmedal.jpg",
    },
    {
      title: "Web Literacy Grant Recipient",
      organization: "Mozilla Foundation",
      year: "2018-2019",
      description: "Recognition for web literacy education.",
      image: "./mozilla-web-literacy.jpg",
    },
    {
      title: "Google Ad Award Recipient",
      organization: "Multiple",
      year: "2018-Present",
      description: "Providing $10,000 monthly per nonprofit.",
      image: "./google-ad-grants.png",
    },
  ];

  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent">
        Awards & Recognition
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <div 
            key={index}
            className="relative h-full"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index && (
              <div className="absolute -inset-0.5 rounded-lg z-0">
                <MovingBorder duration={2500} rx="30%" ry="30%">
                  <div className="h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]" />
                </MovingBorder>
              </div>
            )}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="h-full relative z-10"
            >
              <Card className="glass-card overflow-hidden hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
                <div className="relative h-48">
                  <img 
                    src={award.image} 
                    alt={award.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-sky-500">{award.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    {award.organization} • {award.year}
                  </p>
                  <p className="text-gray-300 flex-1">{award.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
