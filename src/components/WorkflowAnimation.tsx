import { Database, Cpu, Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import { WorkflowStep } from './WorkflowStep';

const STEPS = [
  {
    icon: Database,
    title: "Data Collection",
    description: "Gathering and organizing information"
  },
  {
    icon: Cpu,
    title: "Processing & Analysis",
    description: "Advanced data processing algorithms"
  },
  {
    icon: Send,
    title: "Automated Output",
    description: "Delivering actionable results"
  }
];

export const WorkflowAnimation = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % STEPS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
      
      <div className="relative grid md:grid-cols-3 gap-6 px-4">
        {STEPS.map((step, index) => (
          <WorkflowStep
            key={index}
            {...step}
            isActive={index === activeStep}
          />
        ))}
      </div>

      <svg className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 hidden md:block" style={{ zIndex: -1 }}>
        <line
          x1="20%"
          y1="50%"
          x2="80%"
          y2="50%"
          stroke="url(#workflow-gradient)"
          strokeWidth="2"
          className="workflow-line"
        />
        <defs>
          <linearGradient id="workflow-gradient">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Particles */}
      <div className="hidden md:block">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 rounded-full bg-blue-400"
            style={{
              offsetPath: "path('M 20% 50% L 80% 50%')",
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};