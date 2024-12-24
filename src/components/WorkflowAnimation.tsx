import { useEffect, useState } from 'react';
import { Database, GitBranch, Cpu } from 'lucide-react';
import { WorkflowStep } from './WorkflowStep';
import { useInView } from 'react-intersection-observer';

export const WorkflowAnimation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const steps = [
    {
      icon: Database,
      title: "Data Collection",
      description: "Gathering and organizing raw data from multiple sources",
    },
    {
      icon: Cpu,
      title: "Processing & Analysis",
      description: "Advanced algorithms process and analyze data patterns",
    },
    {
      icon: GitBranch,
      title: "Automated Output",
      description: "Delivering actionable insights through automated reporting",
    },
  ];

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [inView, steps.length]);

  return (
    <div ref={ref} className="relative max-w-4xl mx-auto py-12">
      {/* Assembly line road background */}
      <div className="absolute top-1/2 left-0 w-full h-16 -translate-y-1/2 bg-gray-800 rounded-full opacity-10" />
      
      {/* Pulsing light effect */}
      {inView && (
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-transparent"
          style={{
            left: '10%',
            animation: 'moveLight 3s linear infinite',
            filter: 'blur(4px)',
          }}
        />
      )}

      {/* Workflow steps */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <WorkflowStep
            key={index}
            isActive={activeStep === index}
            icon={step.icon}
            title={step.title}
            description={step.description}
            style={{
              transform: `translateY(${activeStep === index ? '-8px' : '0'})`,
              transition: 'transform 0.3s ease-in-out',
            }}
            className={`animate-fade-in ${inView ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    </div>
  );
};