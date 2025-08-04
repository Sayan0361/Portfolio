import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import { useRef } from "react";
import { Man } from "./Poly_man";

const AnimatedModel = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.PI * 0.5 + t * 0.1;
      groupRef.current.position.y = -0.3 + Math.sin(t) * 0.1;
    }
  });

  return (
    <group
      ref={groupRef}
      scale={0.4}
      position={[0, -1, 0]}
      rotation={[0, Math.PI * 0.25, 0]}
    >
      <Man scale={[0.5, 0.5, 0.5]} />
      
      {/* Enhanced descriptive tooltip */}
      <Html
        position={[0, 2.5, 0]}
        distanceFactor={1.8}  // Slightly larger scaling
        style={{
          pointerEvents: 'none',
          transition: 'all 0.3s ease-out',
          width: '320px',  // Increased width
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
        }}
      >
        <div 
          style={{
            background: 'linear-gradient(145deg, rgba(20,20,30,0.98), rgba(10,10,20,0.98))',
            color: 'white',
            padding: '24px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            fontSize: '16px',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            textAlign: 'center',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
            transform: 'translateX(-50%)',
            backdropFilter: 'blur(8px)',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {/* Decorative accent */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)',
          }}/>
          
          <div style={{ 
            marginBottom: '16px', 
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '1.4',
            background: 'linear-gradient(90deg, #fff, #c7d2fe)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'white',
            padding: '4px 0'
          }}>
            👋 Hello, I'm Sayan Sen
          </div>
          
          <div style={{
            margin: '16px 0',
            fontSize: '15px',
            lineHeight: '1.6',
            opacity: 0.9,
          }}>
            A passionate Full Stack Developer with expertise in modern web technologies.
          </div>
        </div>
      </Html>
    </group>
  );
};

const HeroExperience = () => {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Canvas
        camera={{ 
          position: [2, 1, 3], 
          fov: 45,
          near: 0.1,
          far: 1000,
          
        }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 3, 2]} intensity={1.5} />
        
        <AnimatedModel />
        
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          minPolarAngle={Math.PI/6} // Limit downward rotation
          maxPolarAngle={Math.PI/1.8} // Limit upward rotation
          target={[0, 0.5, 0]} // Focus on model's position
        />
      </Canvas>
    </div>
  );
};

export default HeroExperience;