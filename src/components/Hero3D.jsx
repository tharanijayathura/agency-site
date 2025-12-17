import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Robo({ scale = 1.3, position = [0, -1, 0] }) {
  const { scene } = useGLTF("/models/robo.glb");

  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
    />
  );
}

export default function Hero3D({ cameraPosition = [0, 1.5, 4], robotScale = 1.3, robotPosition = [0, -1, 0], showAutoRotate = true }) {
  return (
    <Canvas
      camera={{ position: cameraPosition, fov: 45 }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={2.5} />
      <directionalLight position={[5, 5, 5]} intensity={3} />
      <directionalLight position={[-5, 5, -5]} intensity={2} />
      <pointLight position={[0, 5, 0]} intensity={1.5} />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={2} />
      <Robo scale={robotScale} position={robotPosition} />
      {showAutoRotate && <OrbitControls enableZoom={false} autoRotate />}
      {!showAutoRotate && <OrbitControls enableZoom={false} />}
    </Canvas>
  );
}
