'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Camera position
    camera.position.z = 8;

    // Create gear
    const createGear = (radius: number, teeth: number, color: number) => {
      const geometry = new THREE.CylinderGeometry(radius, radius, 0.2, teeth * 2);
      const material = new THREE.MeshStandardMaterial({ 
        color,
        emissive: color,
        emissiveIntensity: 0.2,
        metalness: 0.8,
        roughness: 0.2
      });
      const gear = new THREE.Mesh(geometry, material);
      return gear;
    };

    // Create gears with different properties
    const gears = [
      { mesh: createGear(1.2, 12, 0x8B5CF6), speed: 0.02, fallSpeed: 0.03, y: 0 },
      { mesh: createGear(0.9, 8, 0x7C3AED), speed: 0.03, fallSpeed: 0.04, y: 1 },
      { mesh: createGear(0.7, 6, 0x6D28D9), speed: 0.04, fallSpeed: 0.05, y: -1 },
      { mesh: createGear(1, 10, 0x9333EA), speed: 0.025, fallSpeed: 0.035, y: 2 },
      { mesh: createGear(0.8, 7, 0x7E22CE), speed: 0.035, fallSpeed: 0.045, y: -2 }
    ];

    // Position gears
    gears.forEach((gear, index) => {
      gear.mesh.position.x = (index - 2) * 2;
      gear.mesh.position.y = gear.y;
      scene.add(gear.mesh);
    });

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(-5, 5, 5);
    scene.add(ambientLight, directionalLight, pointLight);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      gears.forEach(gear => {
        // Rotate gear
        gear.mesh.rotation.z += gear.speed;
        
        // Move gear up and down
        gear.mesh.position.y -= gear.fallSpeed;
        
        // Reset position when gear falls too low
        if (gear.mesh.position.y < -5) {
          gear.mesh.position.y = 5;
        }
      });
      
      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      scene.clear();
    };
  }, []);

  return <div ref={containerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default HeroScene; 