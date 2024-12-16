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
      <svg className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 z-0">
        <line
          x1="10%"
          y1="50%"
          x2="90%"
          y2="50%"
          stroke="currentColor"
          strokeWidth="2"
          className="workflow-line text-purple-400/30"
        />
      </svg>

      {/* Animated particles */}
      {inView && (
        <>
          <svg className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 z-1">
            <circle
              r="4"
              fill="currentColor"
              className="text-purple-400 particle"
              style={{
                offsetPath: "path('M 10% 50% L 90% 50%')",
              }}
            />
            <circle
              r="4"
              fill="currentColor"
              className="text-purple-400 particle delay-200"
              style={{
                offsetPath: "path('M 10% 50% L 90% 50%')",
              }}
            />
          </svg>
        </>
      )}

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <WorkflowStep
            key={index}
            isActive={activeStep === index}
            icon={step.icon}
            title={step.title}
            description={step.description}
            style={{ animationDelay: `${index * 200}ms` }}
            className={`animate-fade-in ${inView ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    </div>
  );
};