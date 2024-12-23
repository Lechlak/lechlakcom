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
      description: "Extracting and organizing data from multiple sources.",
    },
    {
      icon: Cpu,
      title: "Processing",
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
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 3
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="sparkle"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], rotate: 360 }}
              transition={{
                duration: 1.5,
                delay: i * 0.3,
                repeat: Infinity,
                repeatDelay: 2
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </>
      )}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <WorkflowStep
              isActive={activeStep === index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              className="card-hover-effect"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};