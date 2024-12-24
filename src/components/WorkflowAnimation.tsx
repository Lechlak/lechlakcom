import { useEffect, useState, useCallback } from 'react';
import { Database, GitBranch, Cpu } from 'lucide-react';
import { WorkflowStep } from './WorkflowStep';
import { useInView } from 'react-intersection-observer';

export const WorkflowAnimation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
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

  const updateActiveStep = useCallback(() => {
    if (inView) {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }
  }, [inView, steps.length]);

  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(updateActiveStep, 3000);
    return () => clearInterval(interval);
  }, [inView, updateActiveStep]);

  return (
    <div ref={ref} className="relative max-w-4xl mx-auto py-12">
      {/* Assembly line road background */}
      <div className="absolute top-1/2 left-0 w-full h-16 -translate-y-1/2 bg-gray-800/10 rounded-full" />
      
      {/* Optimized pulsing light effect */}
      {inView && (
        <div
          className="light-pulse"
          aria-hidden="true"
        />
      )}

      {/* Accessible step announcement */}
      <div aria-live="polite" className="sr-only">
        {`Step ${activeStep + 1}: ${steps[activeStep].title}`}
      </div>

      {/* Workflow steps */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <WorkflowStep
            key={index}
            isActive={activeStep === index}
            icon={step.icon}
            title={step.title}
            description={step.description}
            className={`workflow-step ${inView ? 'workflow-step-visible' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};