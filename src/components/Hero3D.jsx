import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

function Robo({ scale = 0.9, position = [0, -0.8, 0] }) {
  const { scene } = useGLTF("/models/robo.glb");

  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
    />
  );
}

// Wrap robot in a group that rotates left/right with the cursor
function InteractiveRobo({ scale, position }) {
  const groupRef = useRef();
  const { mouse } = useThree();

  useFrame(() => {
    if (!groupRef.current) return;

    // mouse.x is between -1 (far left) and 1 (far right)
    const targetY = mouse.x * 0.6; // adjust 0.6 for more/less turn

    // Smoothly ease toward the target rotation
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.1;
  });

  return (
    <group ref={groupRef}>
      <Robo scale={scale} position={position} />
    </group>
  );
}

export default function Hero3D({ cameraPosition = [0, 1.8, 5], robotScale = 0.9, robotPosition = [0, -0.8, 0] }) {
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
      <InteractiveRobo scale={robotScale} position={robotPosition} />
    </Canvas>
  );
}
