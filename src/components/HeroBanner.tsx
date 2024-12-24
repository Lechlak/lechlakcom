import { useEffect, useState, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  opacity: number;
  size: number;
  fadeDirection: number;
}

const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stars, setStars] = useState<Star[]>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    const initStars = () => {
      const starCount = 50;
      const newStars: Star[] = Array.from({ length: starCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        opacity: Math.random(),
        size: Math.random() * 2 + 1,
        fadeDirection: Math.random() > 0.5 ? 1 : -1
      }));
      setStars(newStars);
    };

    initStars();

    let frameId: number;
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const updatedStars = stars.map(star => {
        // Update opacity based on fade direction
        star.opacity += star.fadeDirection * 0.01;
        
        // Reverse direction when reaching opacity bounds
        if (star.opacity <= 0.1 || star.opacity >= 0.9) {
          star.fadeDirection *= -1;
        }

        // Draw star
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        return star;
      });

      setStars(updatedStars);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(frameId);
    };
  }, [stars]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export const HeroBanner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#000000] to-[#1a1a2e]">
      <ParticleNetwork />
      <div className="relative z-10 flex flex-col h-full items-center justify-center">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-sky-500 bg-clip-text text-transparent">
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