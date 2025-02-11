import { useEffect, useState, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const connectionOpacityRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize Canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize Particles
    const initParticles = () => {
      const particleCount = 100; // Increase if desired
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }));
    };
    initParticles();

    // Animation Loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear Canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Particles and Connections
      particlesRef.current.forEach((particle) => {
        // Update Position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce Off Edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw Particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();

        // Draw Connections
        particlesRef.current.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${connectionOpacityRef.current})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    // Fade Effect
    const fadeInterval = setInterval(() => {
      connectionOpacityRef.current =
        connectionOpacityRef.current <= 0 ? 0.1 : connectionOpacityRef.current - 0.01;
    }, 100);

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(fadeInterval);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default ParticleNetwork;


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
      {[...Array(5)].map((_, i) => (
        <div
          key={`shooting-star-${i}`}
          className="shooting-star"
          style={{
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 50}%`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
};

export const HeroBanner = () => {
  return (
    <div
  className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#000000] to-[#1a1a2e]">

      <StarField />
      <ParticleNetwork />
      <div className="relative h-screen z-10 flex flex-col h-full items-center justify-center">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-sky-500 bg-clip-text text-transparent">
            Design & Analytics
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transforming complex data into actionable insights through innovative automations and efficient solutions
          </p>
        </div>
      </div>
    </div>
  );
};