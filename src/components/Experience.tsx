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
      color: "from-teal-500 to-sky-500"
    },
    {
      title: "Project Management",
      company: "The Image Group, Rolled Alloys, Toledo Lucas County Public Library",
      period: "2011 - Present",
      description: "Leadership & mentoring enhancing talent development",
      icon: faChartLine,
      color: "from-teal-500 to-sky-500"
    },
    {
      title: "Strategic Roadmap",
      company: "Toledo Lucas County Public Library",
      period: "2015 - 2022",
      description: "Led evaluation of three strategic plans with data-driven improvements",
      icon: faBullseye,
      color: "from-teal-500 to-sky-500"
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
            <Card className="glass-card hover:scale-[1.01] transition-transform duration-300 overflow-hidden h-full flex flex-col bg-gradient-to-br from-sky-500/10 via-transparent to-teal-500/10">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="text-4xl opacity-80">
                    <FontAwesomeIcon icon={exp.icon} className={`bg-gradient-to-r text-gray-500 bg-clip-text text-transparent`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.title}
                        </h3>
                        <p className="text-gray-400 mt-1">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-300 text-lg">{exp.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
