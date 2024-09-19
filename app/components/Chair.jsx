/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/3dmodel/benifit.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Chair(props) {
  const { nodes, materials } = useGLTF('/3dmodel/benifit.glb')
  return (
    <group {...props} castShadow dispose={null}>
<mesh castShadow
  geometry={nodes.Plane.geometry} 
  position={[1.331, 0, 0.224]} 
  scale={[5.381, 1, 5.015]}>
  
  {/* Glossy white material */}
  <meshPhysicalMaterial 
    color="#ffd1df"  // White color for a clean, glossy surface
    roughness={0.05} // Very low roughness for high gloss
    metalness={0.2}  // A slight metallic feel, but mostly non-metal
    clearcoat={1}    // High gloss clearcoat layer
    clearcoatRoughness={0}  // Smooth clearcoat for sharp reflections
    reflectivity={1} // High reflectivity to add that glossy luxury finish
  />
</mesh>
<mesh 
  geometry={nodes.Cube003.geometry} 
  position={[1.331, 1.01, -1.859]} scale={[2.042, 1, 0.145]} >
  
  {/* Glossy white material */}
  <meshPhysicalMaterial 
    color="#000000"  // White color for a clean, glossy surface
    roughness={0.05} // Very low roughness for high gloss
    metalness={0.2}  // A slight metallic feel, but mostly non-metal
    clearcoat={1}    // High gloss clearcoat layer
    clearcoatRoughness={0}  // Smooth clearcoat for sharp reflections
    reflectivity={1} // High reflectivity to add that glossy luxury finish
  />
</mesh>
      <mesh geometry={nodes.fff.geometry} material-color='gold' material={materials['Material.003']} position={[0.762, 0.307, -1.622]} rotation={[1.542, 0, 0]} scale={[1, 1.507, 0.971]} />
      <mesh geometry={nodes.fff001.geometry}material-color='gold' material={materials['Material.003']} position={[-0.699, 1.159, -1.613]} rotation={[1.542, 0, 0]} scale={[1, 1.507, 0.971]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials.Material} position={[0.042, 0.101, 0]}>
        <mesh geometry={nodes.Circle.geometry} material={materials.Material} position={[0, 0.174, -0.007]} />
        <mesh castShadow geometry={nodes.Cone001.geometry} material-color='gold'   material={materials['Material.005']} position={[0.216, 0.173, -0.2]} />
        <mesh castShadow geometry={nodes.Cube.geometry}  material={materials.Material} position={[0, 0.289, -0.011]} />
        <mesh castShadow geometry={nodes.Cube001.geometry} material-color='#ff0000' material={materials.Material} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/3dmodel/benifit.glb')
