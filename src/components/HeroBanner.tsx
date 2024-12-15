import { useState, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { ErrorBoundary } from 'react-error-boundary';
import * as THREE from 'three';

function Stars() {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FallbackComponent() {
  return <div className="text-white">Something went wrong with the 3D animation</div>;
}

export const HeroBanner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <ErrorBoundary FallbackComponent={FallbackComponent}>
          <Canvas
            camera={{ position: [0, 0, 1] }}
            style={{ background: 'transparent' }}
          >
            <Suspense fallback={null}>
              <Stars />
            </Suspense>
          </Canvas>
        </ErrorBoundary>
      </div>
      
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
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