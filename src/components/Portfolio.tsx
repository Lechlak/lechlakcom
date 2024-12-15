import { Card, CardContent } from "@/components/ui/card";

export const Portfolio = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization platform with predictive analytics capabilities.",
      tags: ["React", "Python", "TensorFlow", "D3.js"],
    },
    {
      title: "Automated Reporting System",
      description: "End-to-end automated reporting solution for enterprise clients.",
      tags: ["Node.js", "PostgreSQL", "Power BI"],
    },
    {
      title: "Market Analysis Platform",
      description: "Interactive platform for market trend analysis and forecasting.",
      tags: ["React", "R", "AWS", "Tableau"],
    },
    {
      title: "Data Pipeline Architecture",
      description: "Scalable ETL pipeline handling millions of daily transactions.",
      tags: ["Python", "Apache Airflow", "AWS"],
    },
  ];

  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="glass-card hover:scale-[1.02] transition-transform duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm rounded-full bg-purple-400/10 text-purple-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};