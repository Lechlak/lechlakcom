import { useEffect, useState } from 'react';
import { Database, GitBranch, Cpu } from 'lucide-react';
import { WorkflowStep } from './WorkflowStep';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

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
      description: "Gathering and organizing (ETL) raw data from multiple sources.",
    },
    {
      icon: Cpu,
      title: "Processing & Analysis",
      description: "Advanced algorithms usage for cleaning and data safe rooms.",
    },
    {
      icon: GitBranch,
      title: "Trend Analysis",
      description: "Delivering actionable insights through pattern recognition.",
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
      {inView && (
        <>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="shooting-star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </>
      )}

      <svg className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 z-0">
        <motion.line
          x1="10%"
          y1="50%"
          x2="90%"
          y2="50%"
          stroke="currentColor"
          strokeWidth="4"
          className="workflow-line text-cyan-400/30"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <WorkflowStep
            key={index}
            isActive={activeStep === index}
            icon={step.icon}
            title={step.title}
            description={step.description}
            style={{ animationDelay: `${index * 100}ms` }}
            className={`animate-fade-in ${inView ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    </div>
  );
};