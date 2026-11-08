
import { Text } from "@react-three/drei";

function CodeMonitor() {
  const codeLines = [
    { no: "01", code: "import React from 'react';", color: "#c084fc" },
    { no: "02", code: "", color: "#ffffff" },
    { no: "03", code: "function Portfolio() {", color: "#60a5fa" },
    { no: "04", code: "  const developer = {", color: "#facc15" },
    { no: "05", code: "    name: 'Sameul Alam',", color: "#86efac" },
    { no: "06", code: "    role: 'Full Stack Dev'", color: "#86efac" },
    { no: "07", code: "  };", color: "#facc15" },
    { no: "08", code: "", color: "#ffffff" },
    { no: "09", code: "  return (", color: "#c084fc" },
    { no: "10", code: "    <h1>Hello World</h1>", color: "#67e8f9" },
    { no: "11", code: "  );", color: "#c084fc" },
    { no: "12", code: "}", color: "#60a5fa" },
    { no: "13", code: "", color: "#ffffff" },
    { no: "14", code: "export default Portfolio;", color: "#c084fc" },
  ];

  return (
    <group>
      {/* Monitor Frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.2, 2, 0.12]} />
        <meshStandardMaterial
          color="#090d18"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      {/* Screen Background */}
      <mesh position={[0, 0, 0.07]}>
        <planeGeometry args={[3.05, 1.84]} />
        <meshBasicMaterial color="#111827" />
      </mesh>

      {/* Top Editor Bar */}
      <mesh position={[0, 0.83, 0.085]}>
        <planeGeometry args={[3.05, 0.18]} />
        <meshBasicMaterial color="#1e293b" />
      </mesh>

      {/* Window Control Buttons */}
      {["#ef4444", "#facc15", "#22c55e"].map((color, index) => (
        <mesh
          key={color}
          position={[-1.38 + index * 0.1, 0.83, 0.1]}
        >
          <circleGeometry args={[0.025, 16]} />
          <meshBasicMaterial color={color} />
        </mesh>
      ))}

      {/* Editor Title */}
      <Text
        position={[0.05, 0.83, 0.1]}
        fontSize={0.075}
        color="#cbd5e1"
        anchorX="center"
        anchorY="middle"
      >
        portfolio - Visual Studio Code
      </Text>

      {/* Activity Sidebar */}
      <mesh position={[-1.43, -0.01, 0.09]}>
        <planeGeometry args={[0.18, 1.65]} />
        <meshBasicMaterial color="#172033" />
      </mesh>

      {/* Activity Icons */}
      {["◇", "⌕", "⑂", "▣"].map((item, index) => (
        <Text
          key={index}
          position={[-1.43, 0.55 - index * 0.32, 0.105]}
          fontSize={0.14}
          color={index === 0 ? "#ffffff" : "#94a3b8"}
          anchorX="center"
          anchorY="middle"
        >
          {item}
        </Text>
      ))}

      {/* Explorer Panel */}
      <mesh position={[-1.02, -0.01, 0.09]}>
        <planeGeometry args={[0.62, 1.65]} />
        <meshBasicMaterial color="#192335" />
      </mesh>

      <Text
        position={[-1.29, 0.68, 0.105]}
        fontSize={0.075}
        color="#e2e8f0"
        anchorX="left"
      >
        EXPLORER
      </Text>

      <Text
        position={[-1.29, 0.48, 0.105]}
        fontSize={0.065}
        color="#94a3b8"
        anchorX="left"
      >
        V PORTFOLIO
      </Text>

      {["src", "components", "Hero.jsx", "App.jsx", "index.css"].map(
        (item, index) => (
          <Text
            key={item}
            position={[-1.22, 0.25 - index * 0.19, 0.105]}
            fontSize={0.065}
            color={
              index === 2
                ? "#60a5fa"
                : index === 3
                  ? "#facc15"
                  : "#cbd5e1"
            }
            anchorX="left"
          >
            {item}
          </Text>
        )
      )}

      {/* Editor Tab */}
      <mesh position={[0.2, 0.65, 0.09]}>
        <planeGeometry args={[2.02, 0.17]} />
        <meshBasicMaterial color="#111827" />
      </mesh>

      <Text
        position={[-0.65, 0.65, 0.105]}
        fontSize={0.075}
        color="#facc15"
        anchorX="left"
        anchorY="middle"
      >
        ◈  Hero.jsx
      </Text>

      {/* Code Editor Background */}
      <mesh position={[0.42, -0.01, 0.09]}>
        <planeGeometry args={[2.02, 1.25]} />
        <meshBasicMaterial color="#0b1220" />
      </mesh>

      {/* Active Line Highlight */}
      <mesh position={[0.42, 0.29, 0.095]}>
        <planeGeometry args={[2.02, 0.13]} />
        <meshBasicMaterial color="#1e293b" />
      </mesh>

      {/* Line Numbers and Code */}
      {codeLines.map((line, index) => (
        <group key={line.no}>
          <Text
            position={[-0.53, 0.51 - index * 0.087, 0.11]}
            fontSize={0.065}
            color="#64748b"
            anchorX="right"
            anchorY="middle"
          >
            {line.no}
          </Text>

          <Text
            position={[-0.43, 0.51 - index * 0.087, 0.11]}
            fontSize={0.065}
            color={line.color}
            anchorX="left"
            anchorY="middle"
          >
            {line.code}
          </Text>
        </group>
      ))}

      {/* Bottom Status Bar */}
      <mesh position={[0, -0.83, 0.09]}>
        <planeGeometry args={[3.05, 0.18]} />
        <meshBasicMaterial color="#2563eb" />
      </mesh>

      <Text
        position={[-1.42, -0.83, 0.105]}
        fontSize={0.065}
        color="#ffffff"
        anchorX="left"
        anchorY="middle"
      >
        main  |  React  |  JavaScript
      </Text>

      {/* Screen Glow */}
      <pointLight
        position={[0, 0, 0.5]}
        color="#168cff"
        intensity={1}
        distance={3}
      />

      {/* Monitor Stand */}
      <mesh position={[0, -1.2, -0.05]}>
        <boxGeometry args={[0.22, 0.4, 0.18]} />
        <meshStandardMaterial
          color="#374151"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      <mesh position={[0, -1.42, -0.05]}>
        <boxGeometry args={[1, 0.08, 0.45]} />
        <meshStandardMaterial
          color="#1f2937"
          metalness={0.6}
          roughness={0.35}
        />
      </mesh>
    </group>
  );
}

export default CodeMonitor;
