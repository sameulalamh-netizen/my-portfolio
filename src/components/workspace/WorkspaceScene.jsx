import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import CodingRoom from "./CodingRoom";

function WorkspaceScene() {
  return (
    <div className="h-full w-full">
      <Canvas
        dpr={[1, 1.25]}
        camera={{
          position: [0, 1.2, 12],
          fov: 50,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "low-power",
        }}
      >
        {/* Base lighting */}
        <ambientLight intensity={1.2} />

        {/* Main light */}
        <directionalLight
          position={[4, 6, 5]}
          intensity={2.5}
          color="#dbeafe"
        />

        {/* Blue-purple cinematic lighting */}
        <pointLight
          position={[-4, 2, 1]}
          intensity={2.5}
          color="#7c3aed"
          distance={15}
        />

        <pointLight
          position={[4, 2, 3]}
          intensity={2}
          color="#2563eb"
          distance={12}
        />

        {/* Existing workspace */}
        <CodingRoom />

        <Environment preset="city" />

        {/* Limited camera interaction */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          enableDamping
          dampingFactor={0.06}
          rotateSpeed={0.3}
          minAzimuthAngle={-0.2}
          maxAzimuthAngle={0.2}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

export default WorkspaceScene;