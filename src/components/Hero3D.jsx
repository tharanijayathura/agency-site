import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

function Robo({ scale = 0.9, position = [0, -0.8, 0] }) {
  const { scene } = useGLTF("/models/robo.glb");
  const headRef = useRef(null);
  const { mouse } = useThree();

  // Find a node in the GLB that looks like the head
  useEffect(() => {
    let found = null;
    scene.traverse((obj) => {
      if (!found && obj.name && obj.name.toLowerCase().includes("head")) {
        found = obj;
      }
    });
    headRef.current = found;
  }, [scene]);

  // Rotate the head with the cursor in both directions (left/right + up/down)
  useFrame(() => {
    if (!headRef.current) return;

    // mouse.x, mouse.y are in range [-1, 1]
    const targetYaw = mouse.x * 0.9;    // left/right look
    const targetPitch = -mouse.y * 0.5; // so down = look down, up = look up

    headRef.current.rotation.y += (targetYaw - headRef.current.rotation.y) * 0.15;
    headRef.current.rotation.x += (targetPitch - headRef.current.rotation.x) * 0.15;
  });

  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
    />
  );
}

// Wrap robot in a group that keeps it slightly tilted upright
// Body no longer follows the cursor – only the head moves
function InteractiveRobo({ scale, position, uprightTilt = -0.4 }) {
  return (
    <group rotation={[uprightTilt, 0, 0]}>
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
