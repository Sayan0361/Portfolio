import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useGLTF, useAnimations, Trail, Points, PointMaterial } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import { useGraph, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMediaQuery } from 'react-responsive';

export default function Bird({ mouse, ...props }) {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const group = useRef();
  const trailRef = useRef();
  const { scene, animations } = useGLTF('/models/phoenix_bird.glb');
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);
  const [wingSpeed, setWingSpeed] = useState(1);

  // Simplified lighting for mobile
  const spotLight = useMemo(() => new THREE.SpotLight(0xff7700, isMobile ? 5 : 10, 20, Math.PI / 4, 0.5, 1), [isMobile]);
  const pointLight = useMemo(() => new THREE.PointLight(0xff2200, isMobile ? 3 : 5, 10), [isMobile]);

  // Play animation with mobile-optimized settings
  useEffect(() => {
    if (actions && actions[Object.keys(actions)[0]]) {
      const anim = actions[Object.keys(actions)[0]];
      anim.timeScale = wingSpeed;
      anim.play();
      
      // Reduce animation quality on mobile
      if (isMobile) {
        anim.setEffectiveTimeScale(0.8);
        anim.setEffectiveWeight(0.9);
      }
    }
  }, [actions, wingSpeed, isMobile]);

  // Optimized mouse-following logic
  useFrame((state) => {
    if (!group.current || !mouse) return;

    const [mouseX, mouseY] = mouse;
    const targetX = mouseX * (isMobile ? 3 : 6);
    const targetY = -mouseY * (isMobile ? 3 : 6);

    // Smoother movement with reduced calculations on mobile
    group.current.position.x += (targetX - group.current.position.x) * (isMobile ? 0.03 : 0.05);
    group.current.position.y += (targetY - group.current.position.y) * (isMobile ? 0.03 : 0.05);

    // Simplified rotation on mobile
    group.current.rotation.z = -mouseX * (isMobile ? 0.2 : 0.4);
    group.current.rotation.x = mouseY * (isMobile ? 0.15 : 0.3);

    // Update lights only if not mobile
    if (!isMobile) {
      pointLight.position.set(
        group.current.position.x,
        group.current.position.y,
        group.current.position.z
      );
      
      spotLight.position.set(
        group.current.position.x,
        group.current.position.y + 2,
        group.current.position.z
      );
      spotLight.target = group.current;
    }
  });

  // Mobile-optimized color shift effect
  const [time, setTime] = useState(0);
  useFrame((state, delta) => {
    setTime((prev) => prev + (isMobile ? delta * 0.8 : delta));
  });
  
  const emissivePulse = useMemo(() => {
    return isMobile ? 2 : (3 + Math.sin(time * 5) * 1.5);
  }, [time, isMobile]);

  // Don't render bird at all on mobile if performance is critical
  if (isMobile) return null;

  return (
    <group>
      {/* Conditional lights */}
      {!isMobile && (
        <>
          <primitive object={spotLight} />
          <primitive object={pointLight} />
        </>
      )}
      
      <group ref={group} {...props} dispose={null}>
        {/* Simplified trail on mobile */}
        {!isMobile && (
          <Trail
            ref={trailRef}
            width={isMobile ? 1 : 1.5}
            length={isMobile ? 4 : 8}
            color={new THREE.Color(0xff2200)}
            attenuation={(t) => t * t}
          >
            <mesh visible={false}>
              <sphereGeometry args={[0.1, 8, 8]} />
              <meshBasicMaterial color={0xff2200} />
            </mesh>
          </Trail>
        )}
        
        <primitive object={clone} />

        {/* Optimized wing materials */}
        {nodes?.Object_7 && (
          <skinnedMesh
            geometry={nodes.Object_7.geometry}
            skeleton={nodes.Object_7.skeleton}
            castShadow={!isMobile}
            receiveShadow={!isMobile}
          >
            <meshPhysicalMaterial
              color="#ffcc00"
              emissive="#ff4500"
              emissiveIntensity={emissivePulse}
              roughness={isMobile ? 0.5 : 0.3}
              metalness={isMobile ? 0.7 : 0.9}
              clearcoat={isMobile ? 0.7 : 1}
              clearcoatRoughness={0.1}
              envMapIntensity={isMobile ? 0.8 : 1}
              transmission={isMobile ? 0 : 0.1}
            />
          </skinnedMesh>
        )}

        {/* Optimized body materials */}
        {nodes?.Object_8 && (
          <skinnedMesh
            geometry={nodes.Object_8.geometry}
            skeleton={nodes.Object_8.skeleton}
            castShadow={!isMobile}
            receiveShadow={!isMobile}
          >
            <meshPhysicalMaterial
              color="#ff9900"
              emissive="#ff2200"
              emissiveIntensity={emissivePulse}
              roughness={isMobile ? 0.4 : 0.2}
              metalness={isMobile ? 0.6 : 0.8}
              clearcoat={isMobile ? 0.3 : 0.5}
              clearcoatRoughness={0.1}
              envMapIntensity={isMobile ? 0.8 : 1}
            />
          </skinnedMesh>
        )}
        
        {/* Conditional particle effects */}
        {!isMobile && <FireParticles count={isMobile ? 100 : 300} bird={group} />}
      </group>
    </group>
  );
}

// Mobile-optimized FireParticles component
function FireParticles({ count = 100, bird }) {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [positions] = useState(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push(
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 3
      );
    }
    return new Float32Array(temp);
  });

  const points = useRef();
  
  useFrame(() => {
    if (bird.current && points.current) {
      points.current.position.copy(bird.current.position);
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff4000"
        size={isMobile ? 0.05 : 0.1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

useGLTF.preload('/models/phoenix_bird.glb');