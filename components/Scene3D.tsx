import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Icosahedron, Octahedron, Box } from '@react-three/drei';
import * as THREE from 'three';

// Add type augmentation for R3F elements to fix IntrinsicElements errors
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      group: any;
      color: any;
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
      meshStandardMaterial: any;
      fog: any;
    }
  }
}

// Reusable Geometric Shape Component
const GeometricShape = ({ 
  position, 
  color, 
  scale = 1, 
  type = 'icosahedron',
  speed = 1
}: { 
  position: [number, number, number], 
  color: string, 
  scale?: number, 
  type?: 'icosahedron' | 'octahedron' | 'box',
  speed?: number
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Very slow, subtle, precise rotation
      meshRef.current.rotation.x = t * 0.1 * speed;
      meshRef.current.rotation.y = t * 0.15 * speed;
    }
    if (outerRef.current) {
       outerRef.current.rotation.x = t * 0.1 * speed;
       outerRef.current.rotation.y = t * 0.15 * speed;
    }
  });

  const getGeometry = (ref: React.Ref<THREE.Mesh>, isWireframe: boolean) => {
      const s = isWireframe ? scale * 1.15 : scale;
      const opacity = isWireframe ? 0.15 : 1;
      const materialProps = isWireframe 
        ? { wireframe: true, transparent: true, opacity: opacity, color: color }
        : { flatShading: true, roughness: 0.1, metalness: 0.6, color: color };

      if (type === 'octahedron') {
          return (
             <Octahedron args={[1, 0]} scale={s} ref={ref}>
                <meshStandardMaterial {...materialProps} />
             </Octahedron>
          );
      }
      if (type === 'box') {
          return (
             <Box args={[1.5, 1.5, 1.5]} scale={s} ref={ref}>
                <meshStandardMaterial {...materialProps} />
             </Box>
          );
      }
      // Default Icosahedron
      return (
         <Icosahedron args={[1, 0]} scale={s} ref={ref}>
            <meshStandardMaterial {...materialProps} />
         </Icosahedron>
      );
  };

  return (
    <Float 
      speed={1.5} // Slower float speed
      rotationIntensity={0.2} // Reduced rotation intensity from float
      floatIntensity={0.5} 
      floatingRange={[-0.2, 0.2]}
    >
        <group position={position}>
            {getGeometry(meshRef, false)}
            {getGeometry(outerRef, true)}
        </group>
    </Float>
  );
};

const BackgroundParticles = () => {
    const ref = useRef<THREE.Group>(null);
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y -= delta * 0.02; // Very slow rotation for stars
        }
    })
    return (
        <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        </group>
    )
}

const Scene3D: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={['#050505']} />
        
        {/* Lighting adapted for flat shading to pop geometry facets */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#6366f1" />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#a855f7" />
        
        <BackgroundParticles />

        {/* Foreground Geometric Shapes - Right Side */}
        <GeometricShape position={[4, 0.5, 0]} color="#6366f1" scale={1.6} type="icosahedron" speed={0.8} />
        <GeometricShape position={[2.5, -2.5, -1]} color="#a855f7" scale={0.9} type="octahedron" speed={1.2} />
        
        {/* Background Geometric Shapes - Left Side */}
        <GeometricShape position={[-4, 2, -3]} color="#4f46e5" scale={1.3} type="box" speed={0.5} />
        <GeometricShape position={[-3, -2, -2]} color="#8b5cf6" scale={0.7} type="icosahedron" speed={1} />
        
        {/* Far background large wireframe structure */}
        <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.2}>
            <Icosahedron args={[1, 1]} position={[0, 0, -12]} scale={10}>
                <meshStandardMaterial color="#1e1b4b" wireframe transparent opacity={0.03} />
            </Icosahedron>
        </Float>
        
        <fog attach="fog" args={['#050505', 8, 25]} />
      </Canvas>
    </div>
  );
};

export default Scene3D;