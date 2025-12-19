import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef, Suspense } from "react";

function Robo({ scale = 0.9, position = [0, -0.8, 0] }) {
  const { scene } = useGLTF("/models/flying_robot.glb");
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

    headRef.current.rotation.y += (targetYaw - headRef.current.rotation.y) * 0.02;
    headRef.current.rotation.x += (targetPitch - headRef.current.rotation.x) * 0.02;
  });

  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
    />
  );
}

// Wrap robot in a group that stays slightly tilted forward
// and rotates left/right with the cursor (body),
// while the head independently tracks the cursor in Robo.
// Positive X rotation tilts the model slightly forward toward the camera
function InteractiveRobo({ scale, position, uprightTilt = 0.15 }) {
  const groupRef = useRef();
  const { mouse } = useThree();

  useFrame(() => {
    if (!groupRef.current) return;

    // mouse.x is between -1 (far left) and 1 (far right)
    const targetYaw = mouse.x * 0.6; // body turn amount

    // Smoothly ease body Y rotation while keeping the fixed X tilt
    groupRef.current.rotation.x = uprightTilt;
    groupRef.current.rotation.y += (targetYaw - groupRef.current.rotation.y) * 0.02;
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
      gl={{ antialias: true }}
      style={{ touchAction: "none" }}
    >
      <ambientLight intensity={1.6} />
      <directionalLight position={[5, 5, 5]} intensity={2.2} />
      <directionalLight position={[-5, 5, -5]} intensity={1.4} />
      <pointLight position={[0, 5, 0]} intensity={1} />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1.6} />
      <Suspense fallback={null}>
        <InteractiveRobo scale={robotScale} position={robotPosition} />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

// Preload the GLB so it’s cached before render
useGLTF.preload("/models/flying_robot.glb");
