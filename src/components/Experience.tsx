import { Card, CardContent } from "@/components/ui/card";

export const Experience = () => {
  const experiences = [
    {
      title: "Customer Experience",
      company: "Multiple",
      period: "2011 - Present",
      description: "Utilizing 15 years of analytics expertise to inform and drive strategic business decisions",
    },
    {
      title: "Project Management",
      company: "Multiple",
      period: "2012 - Present",
      description: "Cultivating leadership, mentoring, and coaching skills to enhance talent development retention for over 14 years",
    },
    {
      title: "Strategic Roadmap",
      company: "Toledo Lucas County Public Library",
      period: "2015 - 2022",
      description: "Led the evaluation of three stategic plans, assessing their success and developing data-driven recommendations for continued improvement",
    },
  ];

  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent">
        Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="glass-card hover:scale-[1.02] transition-transform duration-300">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-500">{exp.title}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <p className="text-gray-300">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};