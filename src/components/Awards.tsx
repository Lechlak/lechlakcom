import { Card, CardContent } from "@/components/ui/card";

export const Awards = () => {
  const awards = [
    {
      title: "Data Innovation Award",
      organization: "Tech Excellence Summit",
      year: "2023",
      description: "Recognized for innovative use of AI in data analytics",
    },
    {
      title: "Best Data Visualization",
      organization: "Data Science Conference",
      year: "2022",
      description: "Award for exceptional data storytelling through visualization",
    },
    {
      title: "Analytics Leader of the Year",
      organization: "Analytics Weekly",
      year: "2021",
      description: "Distinguished for leadership in analytics transformation",
    },
  ];

  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Awards & Recognition
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <Card key={index} className="glass-card hover:scale-[1.02] transition-transform duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">{award.title}</h3>
              <p className="text-sm text-gray-400 mb-3">
                {award.organization} • {award.year}
              </p>
              <p className="text-gray-300">{award.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};