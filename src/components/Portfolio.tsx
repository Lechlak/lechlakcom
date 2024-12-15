import { Card, CardContent } from "@/components/ui/card";

export const Portfolio = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization platform with predictive analytics capabilities.",
      tags: ["React", "Python", "TensorFlow", "D3.js"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Automated Reporting System",
      description: "End-to-end automated reporting solution for enterprise clients.",
      tags: ["Node.js", "PostgreSQL", "Power BI"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Market Analysis Platform",
      description: "Interactive platform for market trend analysis and forecasting.",
      tags: ["React", "R", "AWS", "Tableau"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      title: "Data Pipeline Architecture",
      description: "Scalable ETL pipeline handling millions of daily transactions.",
      tags: ["Python", "Apache Airflow", "AWS"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Business Intelligence Suite",
      description: "Comprehensive BI solution with interactive dashboards.",
      tags: ["React", "D3.js", "SQL"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Predictive Analytics Tool",
      description: "Machine learning-based prediction system for business metrics.",
      tags: ["Python", "TensorFlow", "React"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Data Visualization Platform",
      description: "Interactive data visualization tool for complex datasets.",
      tags: ["D3.js", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    },
    {
      title: "Real-time Analytics System",
      description: "Live monitoring and analysis of streaming data.",
      tags: ["Apache Kafka", "React", "Python"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Machine Learning Pipeline",
      description: "Automated ML model training and deployment system.",
      tags: ["Python", "TensorFlow", "AWS"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    {
      title: "Data Quality Framework",
      description: "Comprehensive data validation and cleaning system.",
      tags: ["Python", "SQL", "React"],
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace"
    },
    {
      title: "Analytics API Gateway",
      description: "RESTful API service for analytics data access.",
      tags: ["Node.js", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742"
    },
    {
      title: "Custom Analytics Platform",
      description: "Bespoke analytics solution for enterprise needs.",
      tags: ["React", "Python", "AWS"],
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833"
    }
  ];

  return (
    <section id="portfolio" className="pt-16">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="glass-card hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
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