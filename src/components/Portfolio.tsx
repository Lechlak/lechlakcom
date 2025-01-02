import { Card, CardContent } from "@/components/ui/card";

export const Portfolio = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization platform with predictive analytics workflow.",
      tags: ["Python", "SQL", "Tableau"],
      image: "./analytics.png"
    },
    {
      title: "Demographics & Socio-Economics",
      description: "Interactive platform for market trend analysis, forecasting, and goal setting.",
      tags: ["Python", "SQL", "Tableau"],
      image: "./demographics.png"
    },
    {
      title: "Leadership and Implementation",
      description: "Innovation Accelerator, Employee Engagement, Learning Management System",
      tags: ["CX/UX", "WordPress", "Wrike"],
      image: "innovation-accelerator.png"
    },
    {
      title: "Accessibility",
      description: "Voluntary Product Accessibility Template - WCAG AA",
      tags: ["Lighthouse", "WCAG", "WebAIM"],
      image: "./user-experience.png"
    },
    {
      title: "Workflow and Automation",
      description: "Integrate data to improve collaboration, transparency, and accountability.",
      tags: ["Power Automate", "Sharepoint", "Zapier"],
      image: "./zapier.png"
    },
    {
      title: "ToledoLibrary.org",
      description: "Over 100 active integrations and 30 million views annually",
      tags: ["PHP", "React", "WordPress"],
      image: "./toledo-library.png"
    },
  ];

  return (
    <section id="portfolio" className="pt-16">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-500 to-sky-500 bg-clip-text text-transparent">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="glass-card hover:scale-[1.02] transition-transform duration-300 overflow-hidden h-full flex flex-col">
            <div className="relative h-48">
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-3 text-sky-500">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm rounded-full bg-sky-500/10 text-cyan-400"
                  >
                    #{tag}
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