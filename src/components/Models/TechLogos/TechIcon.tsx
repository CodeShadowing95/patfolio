import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const TechIcon = ({ model }: { model: { name: string, modelPath: string, scale: number, rotation: number[] } }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === 'Interactive Developer') {
      scene.scene.traverse((child: any) => {
        if (child.isMesh && child.name === 'Object_5') {
          child.material = new THREE.MeshStandardMaterial({ color: 'white' })
        }
      })
    }
  }, [])

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5,5,5]} intensity={1} />

      <Environment preset="city" />

      <OrbitControls enableZoom={false} />

      <Float floatIntensity={0.9} speed={5.5} rotationIntensity={0.5}>
        <group scale={model.scale} rotation={[model.rotation[0], model.rotation[1], model.rotation[2]]}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcon