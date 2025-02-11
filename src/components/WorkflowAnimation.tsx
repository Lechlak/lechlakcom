
import { useEffect, useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import Lottie from 'lottie-react';

export const WorkflowAnimation = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <div ref={ref} className="relative max-w-4xl mx-auto py-0">
      <div className="w-full max-w-3xl mx-auto">
        <Lottie 
          src="https://lottie.host/embed/beac8185-e379-4e66-aa52-8c82ded969a4/4jkPSLd6lG.lottie"
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};
