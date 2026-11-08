
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import CodeMonitor from "./CodeMontor";
import ProjectMonitor from "./ProjectMonitor";
import { Text } from "@react-three/drei";

// =====================================
// ANIMATED FLYING CARS
// =====================================

function FlyingCars() {
  const carsRef = useRef([]);

  const cars = [
    { y: 1.25, speed: 0.48, offset: 0, color: "#22d3ee" },
    { y: 0.95, speed: 0.36, offset: 1.6, color: "#c084fc" },
    { y: 2.15, speed: 0.58, offset: 2.7, color: "#38bdf8" },
  ];

  useFrame(({ clock }) => {
    const time = clock.elapsedTime;
    const distance = 3.9;

    carsRef.current.forEach((car, index) => {
      if (!car) return;

      const item = cars[index];
      const phase =
        (time * item.speed + item.offset) % (distance * 2);

      const movingForward = phase <= distance;

      const x = movingForward
        ? 1.55 + phase
        : 1.55 + distance * 2 - phase;

      car.position.x = x;
      car.position.y =
        item.y + Math.sin(time * 1.8 + index * 1.7) * 0.035;

      car.scale.x = movingForward ? 1 : -1;
    });
  });

  return (
    <>
      {cars.map((car, index) => (
        <group
          key={`flying-car-${index}`}
          ref={(element) => {
            carsRef.current[index] = element;
          }}
          position={[1.55, car.y, -2.25]}
        >
          <mesh>
            <boxGeometry args={[0.32, 0.09, 0.12]} />
            <meshBasicMaterial color="#273a65" />
          </mesh>

          <mesh position={[0, -0.055, 0.07]}>
            <boxGeometry args={[0.24, 0.025, 0.025]} />
            <meshBasicMaterial color={car.color} />
          </mesh>

          <mesh position={[0.18, 0, 0.01]}>
            <sphereGeometry args={[0.035, 8, 8]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>

          <mesh position={[-0.18, 0, 0.01]}>
            <sphereGeometry args={[0.025, 8, 8]} />
            <meshBasicMaterial color="#fb7185" />
          </mesh>
        </group>
      ))}
    </>
  );
}

// =====================================
// ANIMATED BUILDING WINDOWS
// =====================================

function BuildingWindows({ building, buildingIndex }) {
  const windowsRef = useRef([]);

  useFrame(({ clock }) => {
    const time = clock.elapsedTime;

    windowsRef.current.forEach((windowMesh, lightIndex) => {
      if (!windowMesh || !windowMesh.material) return;

      const flicker = Math.sin(
        time * (0.8 + (lightIndex % 4) * 0.18) +
          buildingIndex * 1.7 +
          lightIndex * 2.3
      );

      windowMesh.material.opacity =
        0.18 + ((flicker + 1) / 2) * 0.78;
    });
  });

  return (
    <>
      {Array.from({ length: 12 }).map((_, lightIndex) => (
        <mesh
          key={`building-window-${buildingIndex}-${lightIndex}`}
          ref={(element) => {
            windowsRef.current[lightIndex] = element;
          }}
          position={[
            -building.w / 2 + 0.1 + (lightIndex % 3) * 0.13,
            0.25 + Math.floor(lightIndex / 3) * 0.42,
            0.06,
          ]}
        >
          <planeGeometry args={[0.055, 0.09]} />
          <meshBasicMaterial
            color={lightIndex % 2 === 0 ? "#67e8f9" : "#c084fc"}
            transparent
            opacity={0.65}
            depthWrite={false}
          />
        </mesh>
      ))}
    </>
  );
}

// =====================================
// MAIN CODING ROOM
// =====================================

function CodingRoom() {
  const books = [
    { name: "HTML", color: "#e34f26" },
    { name: "CSS", color: "#1572b6" },
    { name: "JAVASCRIPT", color: "#d6b92b" },
    { name: "REACT", color: "#087ea4" },
    { name: "NODE JS", color: "#43853d" },
    { name: "EXPRESS", color: "#64748b" },
    { name: "MONGODB", color: "#27834b" },
    { name: "GIT", color: "#f05032" },
    { name: "NEXT JS", color: "#252525" },
    { name: "TAILWIND", color: "#0891b2" },
    { name: "REDUX", color: "#764abc" },
    { name: "API", color: "#7c3aed" },
  ];

  const buildings = [
    { x: 1.65, h: 2.2, w: 0.48, c: "#142b53" },
    { x: 2.15, h: 3.0, w: 0.52, c: "#172c59" },
    { x: 2.75, h: 2.4, w: 0.55, c: "#102448" },
    { x: 3.35, h: 3.5, w: 0.58, c: "#192e5c" },
    { x: 4.0, h: 2.7, w: 0.5, c: "#13264b" },
    { x: 4.6, h: 3.2, w: 0.55, c: "#1a2855" },
    { x: 5.2, h: 2.3, w: 0.48, c: "#14264b" },
  ];

  return (
    <group>
      {/* ROOM BACK WALL */}
      <mesh position={[0, 1.5, -2.9]}>
        <boxGeometry args={[16, 7, 0.2]} />
        <meshStandardMaterial color="#15182a" roughness={0.9} />
      </mesh>

      {/* WALL DECORATIVE PANEL */}
      <mesh position={[-1.8, 1.5, -2.77]}>
        <boxGeometry args={[4.8, 5.8, 0.04]} />
        <meshStandardMaterial color="#191e33" />
      </mesh>

      <mesh position={[0, 4.1, -2.73]}>
        <boxGeometry args={[2.2, 0.035, 0.04]} />
        <meshBasicMaterial color="#6366f1" />
      </mesh>

      {/* FUTURISTIC CITY WINDOW */}
      <mesh position={[3.55, 1.45, -2.68]}>
        <boxGeometry args={[4.4, 4.6, 0.14]} />
        <meshStandardMaterial
          color="#090e1d"
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>

      {/* NIGHT SKY */}
      <mesh position={[3.55, 1.45, -2.59]}>
        <planeGeometry args={[4.18, 4.38]} />
        <meshBasicMaterial color="#07142e" />
      </mesh>

      {/* MOON */}
      <mesh position={[4.9, 3.0, -2.48]}>
        <circleGeometry args={[0.38, 48]} />
        <meshBasicMaterial color="#a5f3fc" />
      </mesh>

      {/* MOON GLOW */}
      <mesh position={[4.9, 3.0, -2.49]}>
        <circleGeometry args={[0.52, 48]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* STARS */}
      {Array.from({ length: 45 }).map((_, index) => {
        const x = 1.55 + ((index * 37) % 390) / 100;
        const y = ((index * 19) % 340) / 100;

        return (
          <mesh
            key={`star-${index}`}
            position={[x, y, -2.46]}
          >
            <sphereGeometry args={[0.018, 8, 8]} />
            <meshBasicMaterial
              color={index % 3 === 0 ? "#a5f3fc" : "#ffffff"}
            />
          </mesh>
        );
      })}

      {/* FUTURISTIC SKYSCRAPERS */}
      {buildings.map((building, index) => (
        <group
          key={`tower-${index}`}
          position={[building.x, -0.72, -2.51]}
        >
          <mesh position={[0, building.h / 2, 0]}>
            <boxGeometry
              args={[building.w, building.h, 0.09]}
            />
            <meshBasicMaterial color={building.c} />
          </mesh>

          {/* NEON BUILDING EDGE */}
          <mesh
            position={[
              -building.w / 2 + 0.025,
              building.h / 2,
              0.055,
            ]}
          >
            <boxGeometry
              args={[0.025, building.h, 0.015]}
            />
            <meshBasicMaterial
              color={index % 2 === 0 ? "#22d3ee" : "#a78bfa"}
            />
          </mesh>

          {/* ROOFTOP ANTENNA */}
          <mesh position={[0, building.h + 0.15, 0]}>
            <boxGeometry args={[0.035, 0.3, 0.025]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>

          {/* ANIMATED BUILDING WINDOWS */}
          <BuildingWindows
            building={building}
            buildingIndex={index}
          />
        </group>
      ))}

      {/* NEON HIGHWAY */}
      <mesh
        position={[3.55, 0.45, -2.34]}
        rotation={[0, 0, -0.035]}
      >
        <boxGeometry args={[4.1, 0.07, 0.04]} />
        <meshBasicMaterial color="#263d70" />
      </mesh>

      <mesh
        position={[3.55, 0.49, -2.31]}
        rotation={[0, 0, -0.035]}
      >
        <boxGeometry args={[4.1, 0.018, 0.02]} />
        <meshBasicMaterial color="#22d3ee" />
      </mesh>

      {/* ANIMATED FLYING VEHICLES */}
      <FlyingCars />

      {/* HOLOGRAPHIC BILLBOARD */}
      <mesh position={[2.15, 2.45, -2.39]}>
        <planeGeometry args={[0.65, 0.38]} />
        <meshBasicMaterial
          color="#164e8a"
          transparent
          opacity={0.8}
        />
      </mesh>

      <Text
        position={[2.15, 2.45, -2.35]}
        fontSize={0.09}
        color="#67e8f9"
        anchorX="center"
        anchorY="middle"
      >
        FUTURE
      </Text>

      {/* WINDOW DIVIDERS */}
      <mesh position={[3.55, 1.45, -2.4]}>
        <boxGeometry args={[0.055, 4.4, 0.08]} />
        <meshStandardMaterial color="#26334e" />
      </mesh>

      <mesh position={[3.55, 1.45, -2.4]}>
        <boxGeometry args={[4.25, 0.055, 0.08]} />
        <meshStandardMaterial color="#26334e" />
      </mesh>

      {/* EXPANDED ROOM FLOOR */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2.35, -0.5]}
      >
        <planeGeometry args={[18, 16]} />
        <meshStandardMaterial
          color="#171a2b"
          roughness={0.7}
        />
      </mesh>

      {/* FLOOR RUG */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2.325, 0.65]}
      >
        <planeGeometry args={[6.8, 3.8]} />
        <meshStandardMaterial
          color="#20243a"
          roughness={0.95}
        />
      </mesh>

      {/* WOODEN DESK */}
      <mesh position={[0, -1.15, -0.35]}>
        <boxGeometry args={[7.5, 0.16, 2.3]} />
        <meshStandardMaterial
          color="#493027"
          roughness={0.45}
        />
      </mesh>

      <mesh position={[0, -1.16, 0.82]}>
        <boxGeometry args={[7.5, 0.12, 0.07]} />
        <meshStandardMaterial color="#76503b" />
      </mesh>

      {/* DESK LEGS */}
      {[-3.35, 3.35].map((x) => (
        <mesh
          key={x}
          position={[x, -1.75, -0.35]}
        >
          <boxGeometry args={[0.16, 1.05, 0.16]} />
          <meshStandardMaterial
            color="#202638"
            metalness={0.65}
          />
        </mesh>
      ))}

      {/* DESK RGB STRIP */}
      <mesh position={[0, -1.22, 0.87]}>
        <boxGeometry args={[6.9, 0.025, 0.025]} />
        <meshBasicMaterial color="#6366f1" />
      </mesh>

      {/* DUAL MONITORS */}
      <group position={[-0.85, 0.15, -0.65]}>
        <CodeMonitor />
      </group>

      <group position={[-1.5, 0.15, -0.65]}>
        <ProjectMonitor />
      </group>

      {/* ERGONOMIC CHAIR */}
      <group position={[0.15, 0, 0]}>
        {/* BACKREST */}
        <mesh position={[0, -0.95, 2.35]}>
          <boxGeometry args={[1.1, 1.35, 0.2]} />
          <meshStandardMaterial color="#111827" />
        </mesh>

        {/* CUSHION */}
        <mesh position={[0, -0.95, 2.23]}>
          <boxGeometry args={[0.85, 1.05, 0.04]} />
          <meshStandardMaterial color="#252d45" />
        </mesh>

        {/* RGB STRIP */}
        <mesh position={[0, -0.95, 2.19]}>
          <boxGeometry args={[0.72, 0.025, 0.025]} />
          <meshBasicMaterial color="#8b5cf6" />
        </mesh>

        {/* HEADREST */}
        <mesh position={[0, -0.25, 2.35]}>
          <boxGeometry args={[0.65, 0.3, 0.2]} />
          <meshStandardMaterial color="#171c30" />
        </mesh>

        {/* SEAT */}
        <mesh position={[0, -1.65, 1.65]}>
          <boxGeometry args={[1.25, 0.2, 1.05]} />
          <meshStandardMaterial color="#20263a" />
        </mesh>

        {/* ARMRESTS */}
        {[-0.72, 0.72].map((x) => (
          <mesh
            key={x}
            position={[x, -1.28, 1.65]}
          >
            <boxGeometry args={[0.14, 0.12, 0.65]} />
            <meshStandardMaterial color="#111827" />
          </mesh>
        ))}

        {/* CHAIR SUPPORT */}
        <mesh position={[0, -2.0, 1.65]}>
          <cylinderGeometry args={[0.07, 0.1, 0.6, 16]} />
          <meshStandardMaterial
            color="#64748b"
            metalness={0.8}
          />
        </mesh>

        {/* CHAIR BASE */}
        {[0, 72, 144, 216, 288].map((angle) => (
          <mesh
            key={angle}
            position={[
              Math.sin((angle * Math.PI) / 180) * 0.48,
              -2.22,
              1.65 + Math.cos((angle * Math.PI) / 180) * 0.48,
            ]}
            rotation={[0, -(angle * Math.PI) / 180, 0]}
          >
            <boxGeometry args={[0.9, 0.07, 0.09]} />
            <meshStandardMaterial color="#64748b" />
          </mesh>
        ))}

        {/* CHAIR WHEELS */}
        {[0, 72, 144, 216, 288].map((angle) => (
          <mesh
            key={`wheel-${angle}`}
            position={[
              Math.sin((angle * Math.PI) / 180) * 0.82,
              -2.22,
              1.65 + Math.cos((angle * Math.PI) / 180) * 0.82,
            ]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <cylinderGeometry args={[0.12, 0.12, 0.12, 16]} />
            <meshStandardMaterial color="#111827" />
          </mesh>
        ))}
      </group>

      {/* RGB KEYBOARD */}
      <mesh position={[-0.3, -1.04, 0.5]}>
        <boxGeometry args={[1.75, 0.08, 0.55]} />
        <meshStandardMaterial color="#111827" />
      </mesh>

      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 12 }).map((_, col) => (
          <mesh
            key={`key-${row}-${col}`}
            position={[
              -1.05 + col * 0.13,
              -0.985,
              0.31 + row * 0.09,
            ]}
          >
            <boxGeometry args={[0.09, 0.035, 0.065]} />
            <meshStandardMaterial
              color="#374151"
              emissive="#4338ca"
              emissiveIntensity={0.35}
            />
          </mesh>
        ))
      )}

      {/* KEYBOARD RGB STRIP */}
      <mesh position={[-0.3, -1.085, 0.5]}>
        <boxGeometry args={[1.5, 0.015, 0.025]} />
        <meshBasicMaterial color="#8b5cf6" />
      </mesh>

      {/* MOUSE */}
      <mesh
        position={[1.0, -1.01, 0.5]}
        scale={[0.8, 0.55, 1.2]}
      >
        <sphereGeometry args={[0.2, 24, 24]} />
        <meshStandardMaterial color="#171b2b" />
      </mesh>

      {/* DESK LAMP */}
      <mesh position={[-2.65, -1.04, -0.35]}>
        <cylinderGeometry args={[0.27, 0.3, 0.08, 24]} />
        <meshStandardMaterial color="#252d45" />
      </mesh>

      <mesh position={[-2.65, -0.68, -0.35]}>
        <cylinderGeometry args={[0.045, 0.045, 0.7, 16]} />
        <meshStandardMaterial color="#64748b" />
      </mesh>

      <mesh
        position={[-2.65, -0.32, -0.35]}
        rotation={[0, 0, Math.PI]}
      >
        <coneGeometry args={[0.25, 0.3, 24, 1, true]} />
        <meshStandardMaterial
          color="#27324a"
          side={2}
        />
      </mesh>

      <pointLight
        position={[-2.65, -0.48, -0.35]}
        color="#ffd28a"
        intensity={1.5}
        distance={4}
      />

      {/* PROGRAMMING BOOKSHELF */}
      <mesh position={[-4.7, 0.2, -2.35]}>
        <boxGeometry args={[1.5, 4.5, 0.55]} />
        <meshStandardMaterial color="#241b27" />
      </mesh>

      {/* SHELF BOARDS */}
      {[-1.1, 0, 1.1].map((y) => (
        <mesh
          key={y}
          position={[-4.7, y, -1.98]}
        >
          <boxGeometry args={[1.4, 0.08, 0.55]} />
          <meshStandardMaterial color="#51352d" />
        </mesh>
      ))}

      {/* BOOKS */}
      {books.map((book, index) => {
        const row = Math.floor(index / 4);
        const col = index % 4;

        const x = -5.2 + col * 0.3;
        const y = -0.75 + row * 1.1;

        return (
          <group key={book.name} position={[x, y, -1.95]}>
            <mesh>
              <boxGeometry args={[0.23, 0.72, 0.3]} />
              <meshStandardMaterial color={book.color} />
            </mesh>

            <Text
              position={[0, 0, 0.156]}
              rotation={[0, 0, Math.PI / 2]}
              fontSize={0.075}
              maxWidth={0.65}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
              textAlign="center"
              outlineWidth={0.003}
              outlineColor="#111827"
            >
              {book.name}
            </Text>
          </group>
        );
      })}

      {/* DECORATIVE PLANTS */}
      {[-3.9, 3.1].map((x) => (
        <group key={x}>
          <mesh position={[x, -0.85, -0.45]}>
            <cylinderGeometry args={[0.18, 0.13, 0.35, 20]} />
            <meshStandardMaterial color="#334155" />
          </mesh>

          <mesh position={[x, -0.48, -0.45]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color="#166534" />
          </mesh>
        </group>
      ))}

      {/* ROOM LIGHTING */}
      <pointLight
        position={[0, 2.5, 1.5]}
        color="#dbeafe"
        intensity={2.2}
        distance={10}
      />

      <pointLight
        position={[-3, 1.5, -1.5]}
        color="#8b5cf6"
        intensity={1.8}
        distance={8}
      />

      <pointLight
        position={[3.3, 1.2, -1.8]}
        color="#38bdf8"
        intensity={1.6}
        distance={7}
      />

      <pointLight
        position={[0, -0.2, 2.5]}
        color="#2563eb"
        intensity={1.2}
        distance={7}
      />

      {/* FUTURISTIC CITY ATMOSPHERE */}
      <pointLight
        position={[3.4, 1.4, -1.9]}
        color="#2563eb"
        intensity={1.5}
        distance={5}
      />

      <pointLight
        position={[4.8, 2.0, -2.0]}
        color="#a855f7"
        intensity={1.2}
        distance={4}
      />
    </group>
  );
}

export default CodingRoom;
