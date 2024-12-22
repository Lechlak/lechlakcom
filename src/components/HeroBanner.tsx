import { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const StarField = () => {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; opacity: number }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 200 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.8 + 0.2
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: 'rgba(255, 255, 255, ' + star.opacity + ')',
            animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export const HeroBanner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#000000] to-[#1a1a2e]">
      <StarField />
      <div className="relative z-10 flex flex-col h-full items-center justify-center">
        <Avatar className="w-32 h-32 mb-8">
          <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" alt="Profile" className="object-cover" />
          <AvatarFallback>DA</AvatarFallback>
        </Avatar>
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Data Analytics Director
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transforming complex data into actionable insights through innovative analytics solutions
          </p>
        </div>
      </div>
    </div>
  );
};