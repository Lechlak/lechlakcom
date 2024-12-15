import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create a grid of spheres
    const spheres: THREE.Mesh[] = [];
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0x8B5CF6,
      transparent: true,
      opacity: 0.8,
    });

    for (let i = 0; i < 50; i++) {
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.x = Math.random() * 40 - 20;
      sphere.position.y = Math.random() * 40 - 20;
      sphere.position.z = Math.random() * 40 - 20;
      spheres.push(sphere);
      scene.add(sphere);
    }

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);

      spheres.forEach((sphere) => {
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative h-screen">
      <div ref={containerRef} className="absolute inset-0" />
      <div className="absolute inset-0 flex items-center justify-center text-center z-10 bg-gradient-to-b from-transparent to-background">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Data Analytics Director
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Transforming Data into Strategic Insights
          </p>
        </div>
      </div>
    </div>
  );
};