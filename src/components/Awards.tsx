import { Card, CardContent } from "@/components/ui/card";

export const Awards = () => {
  const awards = [
    {
      title: "Web Literacy Grant Recipient",
      organization: "Mozilla Foundation",
      year: "2018-2019",
      description: "Recognition for web literacy education.",
      image: "./mozilla-web-literacy.jpg",
    },
    {
      title: "2023 IMLS National Medal Winner",
      organization: "Toledo Lucas County Public Library",
      year: "2023",
      description: "Awarded to only 8 libraries and/or museums..",
      image: "./nationalmedla.jpg",
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
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Awards & Recognition
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <Card key={index} className="glass-card hover:scale-[1.02] transition-transform duration-300">
            <CardContent className="p-6">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={award.image} 
                  alt={award.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">{award.title}</h3>
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