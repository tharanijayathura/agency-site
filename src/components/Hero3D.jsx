import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function RoboDog() {
  const { scene } = useGLTF("/models/robo-dog.glb");

  return (
    <primitive
      object={scene}
      scale={1.3}
      position={[0, -1, 0]}
    />
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 4], fov: 45 }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <RoboDog />
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}
