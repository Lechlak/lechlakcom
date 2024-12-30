import { useEffect, useState, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [connectionOpacity, setConnectionOpacity] = useState(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      const particleCount = 5;
      const newParticles: Particle[] = [];
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
        });
      }
      
      setParticles(newParticles);
    };

    initParticles();

    // Fade effect timer
    const fadeInterval = setInterval(() => {
      setConnectionOpacity(prev => {
        if (prev <= 0) return 0.1;
        if (prev >= 1) return 0;
        return prev + (prev <= 0 ? 0.1 : -0.1);
      });
    }, 100);

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.strokeStyle = `rgba(255, 255, 255, ${connectionOpacity * 0.1})`;

      // Update and draw particles
      const updatedParticles = particles.map(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, index) => {
          if (Math.random() > 0.25) return;

          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });

        return particle;
      });

      setParticles(updatedParticles);
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
      clearInterval(fadeInterval);
    };
  }, [particles, connectionOpacity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ background: 'transparent' }}
    />
  );
};

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
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#000000] to-[#1a1a2e]">
      <StarField />
      <ParticleNetwork />
      <div className="relative z-10 flex flex-col h-full items-center justify-center">
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