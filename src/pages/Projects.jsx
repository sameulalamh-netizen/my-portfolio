
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Multi-Vendor E-Commerce",
    category: "FULL STACK DEVELOPMENT",
    description:
      "A multi-vendor e-commerce platform where customers can browse products, manage carts, and place orders. Includes seller and admin functionality.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    icon: "🛒",
    github: "",
    live: "https://my-ecommerce-project-beta.vercel.app/",
    status: "Completed",
  },
  {
    id: 2,
    title: "3D Developer Portfolio",
    category: "3D WEB EXPERIENCE",
    description:
      "An interactive developer portfolio featuring a cinematic 3D coding workspace, animated city view, and modern portfolio sections.",
    technologies: [
      "React",
      "Three.js",
      "React Three Fiber",
      "Tailwind CSS",
    ],
    icon: "💻",
    github: "",
    live: "",
    status: "Completed",
  },
];

function Projects() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080b14] px-5 py-24 text-white sm:px-8">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-96 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <section className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
            My Recent Work
          </p>

          <h1 className="mt-5 text-4xl font-bold sm:text-5xl md:text-6xl">
            My <span className="text-violet-400">Projects</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            Here are some of the projects I have built while learning and
            exploring web development.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>

        {/* Bottom Message */}
        <section className="mt-20 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            More Projects{" "}
            <span className="text-violet-400">Coming Soon</span>
          </h2>

          <p className="mt-4 text-gray-400">
            I'm continuously learning and building new things.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Projects;
