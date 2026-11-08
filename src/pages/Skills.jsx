
import SkillCard from "../components/skills/SkillCard";

const skillCategories = [
  {
    id: 1,
    number: "01",
    category: "Frontend Development",
    icon: "🎨",
    description:
      "Creating responsive, interactive, and user-friendly interfaces using modern frontend technologies.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    id: 2,
    number: "02",
    category: "Backend Development",
    icon: "⚙️",
    description:
      "Building server-side applications, REST APIs, authentication systems, and backend functionality.",
    skills: ["Node.js", "Express.js", "REST API"],
  },
  {
    id: 3,
    number: "03",
    category: "Database",
    icon: "🗄️",
    description:
      "Managing application data and working with database systems for storing and retrieving information.",
    skills: ["MongoDB", "Mongoose"],
  },
  {
    id: 4,
    number: "04",
    category: "Tools & Technologies",
    icon: "🛠️",
    description:
      "Using development tools and version control systems to build and manage projects efficiently.",
    skills: ["Git", "GitHub", "VS Code", "npm", "Postman"],
  },
];

function Skills() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080b14] px-5 py-24 text-white sm:px-8">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-96 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <section className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
            What I Work With
          </p>

          <h1 className="mt-5 text-4xl font-bold sm:text-5xl md:text-6xl">
            My <span className="text-violet-400">Skills</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-gray-400 sm:text-base">
            A collection of technologies and tools I use to develop modern
            web applications. I'm continuously learning and improving my
            technical skills.
          </p>
        </section>

        {/* Skills Grid */}
        <section className="mt-16 grid gap-7 md:grid-cols-2">
          {skillCategories.map((item) => (
            <SkillCard
              key={item.id}
              number={item.number}
              category={item.category}
              description={item.description}
              skills={item.skills}
              icon={item.icon}
            />
          ))}
        </section>

        {/* Bottom Message */}
        <section className="mt-24 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Always Learning,{" "}
            <span className="text-violet-400">Always Growing.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400">
            Every new project gives me an opportunity to learn something
            new and become a better developer.
          </p>
        </section>

      </div>
    </main>
  );
}

export default Skills;
