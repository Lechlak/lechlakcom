import { Card, CardContent } from "@/components/ui/card";

export const Experience = () => {
  const experiences = [
    {
      title: "Director of Analytics",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description: "Leading a team of data analysts and scientists in developing predictive models and business intelligence solutions.",
    },
    {
      title: "Senior Data Analyst",
      company: "Data Insights Corp",
      period: "2017 - 2020",
      description: "Spearheaded the development of automated reporting systems and implemented machine learning models.",
    },
    {
      title: "Full Stack Developer",
      company: "Web Innovations",
      period: "2015 - 2017",
      description: "Developed and maintained data-driven web applications using React, Node.js, and Python.",
    },
  ];

  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="glass-card hover:scale-[1.02] transition-transform duration-300">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-400">{exp.title}</h3>
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