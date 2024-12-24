import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUsers, faBullseye } from '@fortawesome/free-solid-svg-icons';

export const Experience = () => {
  const experiences = [
    {
      title: "Customer Experience",
      company: "The Image Group, Rolled Alloys, Toledo Lucas County Public Library",
      period: "2011 - Present",
      description: "15 years of analytics expertise driving strategic decisions",
      icon: faUsers,
      color: "from-teal-500 to-sky-500",
      image: "./no-monkey-business.png"
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
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent" />
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-500 to-sky-500 bg-clip-text text-transparent">
        Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
             <Card key={index} className="glass-card hover:scale-[1.02] transition-transform duration-300 overflow-hidden h-full flex flex-col">
            <div className="relative h-48">
              <img 
                src={experiences.image} 
                alt={experiences.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-3 text-sky-500">{experiences.title}</h3>
              <p className="text-gray-300 mb-4 flex-1">{experiences.description}</p>
            </CardContent>
          </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
