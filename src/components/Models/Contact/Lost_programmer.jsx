import React from 'react';
import { useGraph } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

export default function Lost(props) {
  const { scene } = useGLTF('/models/lost_programmer-transformed.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.my_rig_rootJoint} />
      <mesh geometry={nodes.Cube005_0.geometry} material={materials.laptop_tex} position={[-0.033, -0.467, 0.442]} rotation={[0.808, 0, 0]} scale={0.149} />
      <mesh geometry={nodes.bool1185_0.geometry} material={materials.Material} position={[2.403, -0.428, -0.752]} rotation={[-2.035, 0.296, -0.932]} scale={0.106} />
      <skinnedMesh geometry={nodes.hair_0.geometry} material={materials.cloth} skeleton={nodes.hair_0.skeleton} position={[0, -0.086, -0.752]} rotation={[-0.308, 0, 0]} />
      <skinnedMesh geometry={nodes.hair_1.geometry} material={materials.solidify} skeleton={nodes.hair_1.skeleton} position={[0, -0.086, -0.752]} rotation={[-0.308, 0, 0]} />
      <skinnedMesh geometry={nodes.me_0.geometry} material={materials.body} skeleton={nodes.me_0.skeleton} position={[0, -0.086, -0.752]} rotation={[-0.308, 0, 0]} />
      <skinnedMesh geometry={nodes.me_1.geometry} material={materials.solidify} skeleton={nodes.me_1.skeleton} position={[0, -0.086, -0.752]} rotation={[-0.308, 0, 0]} />
      <skinnedMesh geometry={nodes.me002_0.geometry} material={materials.cloth} skeleton={nodes.me002_0.skeleton} position={[0, -0.086, -0.752]} rotation={[-0.308, 0, 0]} />
      <skinnedMesh geometry={nodes.me002_1.geometry} material={materials.solidify} skeleton={nodes.me002_1.skeleton} position={[0, -0.086, -0.752]} rotation={[-0.308, 0, 0]} />
      <skinnedMesh geometry={nodes.kemeja_0.geometry} material={materials.cloth} skeleton={nodes.kemeja_0.skeleton} position={[0, -0.086, -0.752]} rotation={[-0.308, 0, 0]} />
      <skinnedMesh geometry={nodes.kemeja_1.geometry} material={materials.solidify} skeleton={nodes.kemeja_1.skeleton} position={[0, -0.086, -0.752]} rotation={[-0.308, 0, 0]} />
    </group>
  );
}

useGLTF.preload('/models/lost_programmer-transformed.glb');
