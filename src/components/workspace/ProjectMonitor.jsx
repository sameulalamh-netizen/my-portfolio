
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const projects = [
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    type: "ONLINE STORE",
    color: "#2563eb",
    heading: "Discover Products",
    description: "Find your favorite products",
    cards: ["Laptop", "Headphones", "Smart Watch"],
  },
  {
    id: "admin",
    title: "Admin Control Panel",
    type: "ADMIN DASHBOARD",
    color: "#7c3aed",
    heading: "Dashboard Overview",
    description: "Manage your business",
    cards: ["Total Users", "Total Orders", "Revenue"],
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    type: "PERSONAL PORTFOLIO",
    color: "#0891b2",
    heading: "Hi, I'm Sameul Alam",
    description: "Full Stack Web Developer",
    cards: ["React.js", "Node.js", "MongoDB"],
  },
];

function ProjectMonitor() {
  const [activeIndex, setActiveIndex] = useState(0);

  const contentRef = useRef();
  const fadeProgress = useRef(0);

  // Change project every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((previousIndex) => {
        return (previousIndex + 1) % projects.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Reset animation when project changes
  useEffect(() => {
    fadeProgress.current = 0;
  }, [activeIndex]);

  // Smooth fade-in animation
  useFrame((_, delta) => {
    if (!contentRef.current) return;

    fadeProgress.current = Math.min(
      fadeProgress.current + delta * 1.8,
      1
    );

    const opacity = fadeProgress.current;

    // Apply opacity to all screen elements
    contentRef.current.traverse((child) => {
      if (!child.material) return;

      const materials = Array.isArray(child.material)
        ? child.material
        : [child.material];

      materials.forEach((material) => {
        material.transparent = true;
        material.opacity = opacity;
      });
    });

    // Move screen content slightly upward
    contentRef.current.position.y =
      -0.08 * (1 - opacity);
  });

  const activeProject = projects[activeIndex];

  return (
    <group position={[3.35, 0, 0]} rotation={[0, -0.12, 0]}>

      {/* MONITOR FRAME */}
      <mesh>
        <boxGeometry args={[3.2, 2, 0.12]} />
        <meshStandardMaterial
          color="#080b18"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* ANIMATED SCREEN CONTENT */}
      <group
        key={activeIndex}
        ref={contentRef}
      >

        {/* SCREEN BACKGROUND */}
        <mesh position={[0, 0, 0.07]}>
          <planeGeometry args={[3.05, 1.84]} />
          <meshBasicMaterial color="#f8fafc" />
        </mesh>

        {/* BROWSER TOP BAR */}
        <mesh position={[0, 0.79, 0.09]}>
          <planeGeometry args={[3.05, 0.22]} />
          <meshBasicMaterial color="#111827" />
        </mesh>

        {/* BROWSER DOTS */}
        {["#ef4444", "#eab308", "#22c55e"].map(
          (color, index) => (
            <mesh
              key={index}
              position={[-1.35 + index * 0.13, 0.79, 0.105]}
            >
              <circleGeometry args={[0.035, 16]} />
              <meshBasicMaterial color={color} />
            </mesh>
          )
        )}

        {/* BROWSER TITLE */}
        <Text
          position={[0, 0.79, 0.11]}
          fontSize={0.075}
          color="#e5e7eb"
          anchorX="center"
          anchorY="middle"
        >
          {activeProject.title}
        </Text>

        {/* WEBSITE NAVBAR */}
        <mesh position={[0, 0.56, 0.095]}>
          <planeGeometry args={[3.05, 0.28]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>

        <Text
          position={[-1.3, 0.56, 0.12]}
          fontSize={0.13}
          color={activeProject.color}
          anchorX="left"
          anchorY="middle"
          fontWeight="bold"
        >
          {activeProject.id === "ecommerce"
            ? "MyStore"
            : activeProject.id === "admin"
              ? "AdminPro"
              : "Sameul.dev"}
        </Text>

        <Text
          position={[0.85, 0.56, 0.12]}
          fontSize={0.075}
          color="#475569"
          anchorX="center"
          anchorY="middle"
        >
          {activeProject.type}
        </Text>

        {/* MAIN HERO SECTION */}
        <mesh position={[0, 0.02, 0.095]}>
          <planeGeometry args={[2.85, 0.75]} />
          <meshBasicMaterial color={activeProject.color} />
        </mesh>

        {/* MAIN HEADING */}
        <Text
          position={[-1.3, 0.18, 0.12]}
          fontSize={0.16}
          maxWidth={2.3}
          color="#ffffff"
          anchorX="left"
          anchorY="middle"
          fontWeight="bold"
        >
          {activeProject.heading}
        </Text>

        {/* DESCRIPTION */}
        <Text
          position={[-1.3, -0.04, 0.12]}
          fontSize={0.085}
          color="#e0e7ff"
          anchorX="left"
          anchorY="middle"
        >
          {activeProject.description}
        </Text>

        {/* BUTTON */}
        <mesh position={[-1.05, -0.25, 0.12]}>
          <planeGeometry args={[0.65, 0.2]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>

        <Text
          position={[-1.05, -0.25, 0.14]}
          fontSize={0.075}
          color={activeProject.color}
          anchorX="center"
          anchorY="middle"
        >
          {activeProject.id === "ecommerce"
            ? "Shop Now"
            : activeProject.id === "admin"
              ? "View Report"
              : "View Projects"}
        </Text>

        {/* BOTTOM PROJECT CARDS */}
        {activeProject.cards.map((card, index) => (
          <group key={`${activeProject.id}-${card}`}>

            <mesh
              position={[-0.95 + index * 0.95, -0.55, 0.11]}
            >
              <planeGeometry args={[0.85, 0.35]} />
              <meshBasicMaterial color="#e2e8f0" />
            </mesh>

            <mesh
              position={[-0.95 + index * 0.95, -0.43, 0.13]}
            >
              <planeGeometry args={[0.65, 0.045]} />
              <meshBasicMaterial color={activeProject.color} />
            </mesh>

            <Text
              position={[-0.95 + index * 0.95, -0.58, 0.14]}
              fontSize={0.065}
              maxWidth={0.75}
              color="#1e293b"
              anchorX="center"
              anchorY="middle"
            >
              {card}
            </Text>

          </group>
        ))}

        {/* PROJECT INDICATORS */}
        {projects.map((project, index) => (
          <mesh
            key={project.id}
            position={[0.95 + index * 0.13, -0.83, 0.12]}
          >
            <circleGeometry args={[0.035, 16]} />
            <meshBasicMaterial
              color={
                index === activeIndex
                  ? activeProject.color
                  : "#94a3b8"
              }
            />
          </mesh>
        ))}

      </group>

      {/* MONITOR STAND */}
      <mesh position={[0, -1.12, -0.02]}>
        <boxGeometry args={[0.35, 0.25, 0.22]} />
        <meshStandardMaterial
          color="#171923"
          metalness={0.7}
        />
      </mesh>

      {/* STAND BASE */}
      <mesh position={[0, -1.27, 0.02]}>
        <boxGeometry args={[1, 0.08, 0.5]} />
        <meshStandardMaterial
          color="#171923"
          metalness={0.7}
        />
      </mesh>

      {/* SCREEN GLOW */}
      <pointLight
        position={[0, 0, 0.5]}
        color={activeProject.color}
        intensity={0.5}
        distance={3}
      />

    </group>
  );
}

export default ProjectMonitor;
