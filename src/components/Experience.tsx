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
      color: "from-[#8B5CF6] to-[#D946EF]"
    },
    {
      title: "Project Management",
      company: "The Image Group, Rolled Alloys, Toledo Lucas County Public Library",
      period: "2011 - Present",
      description: "Leadership & mentoring enhancing talent development",
      icon: faChartLine,
      color: "from-[#F97316] to-[#D946EF]"
    },
    {
      title: "Strategic Roadmap",
      company: "Toledo Lucas County Public Library",
      period: "2015 - 2022",
      description: "Led evaluation of three strategic plans with data-driven improvements",
      icon: faBullseye,
      color: "from-[#0EA5E9] to-[#8B5CF6]"
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
        Experience
      </h2>
      <div className="grid gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card overflow-hidden transform hover:scale-[1.02] transition-all duration-300 border-0 shadow-lg hover:shadow-xl rounded-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="text-4xl opacity-80">
                    <FontAwesomeIcon icon={exp.icon} className={`bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`} />
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
