
const journey = [
  {
    year: "2024 – Present",
    title: "My Web Development Journey",
    description:
      "Started learning web development and building a strong foundation in HTML, CSS, and JavaScript.",
  },
  {
    year: "Frontend Development",
    title: "Building User Interfaces",
    description:
      "Learned React and modern frontend tools to create responsive and interactive web applications.",
  },
  {
    year: "Full Stack Development",
    title: "Working with Backend",
    description:
      "Exploring Node.js, Express, MongoDB, and REST APIs to build complete web applications.",
  },
];

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
];

function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080b14] px-5 py-20 text-white sm:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-96 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Hero */}
        <section className="mb-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
            Get To Know Me
          </p>

          <h1 className="mt-5 text-4xl font-bold sm:text-5xl md:text-6xl">
            About <span className="text-violet-400">Me</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I'm a Full Stack Web Developer passionate about building modern,
            responsive, and user-friendly web applications. I enjoy learning
            new technologies and turning ideas into real-world projects.
          </p>
        </section>

        {/* Who I Am */}
        <section className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Who I Am
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Passionate About Building
              <span className="text-violet-400"> for the Web.</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              I am a web development enthusiast focused on creating useful
              digital experiences. I enjoy working on both frontend and
              backend development, solving problems, and improving my coding
              skills through practical projects.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              My goal is to become a skilled Full Stack Developer who can
              build complete, scalable, and meaningful web applications.
            </p>
          </div>

          {/* Developer card */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-violet-600 to-blue-600 opacity-20 blur-lg" />

            <div className="relative rounded-2xl border border-white/10 bg-[#101522] p-8 sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/15 text-3xl">
                💻
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Sameul Alam
              </h3>

              <p className="mt-2 text-violet-400">
                Full Stack Web Developer
              </p>

              <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-gray-500">Focus</span>
                  <span className="text-right text-gray-200">
                    Full Stack Development
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-gray-500">Frontend</span>
                  <span className="text-right text-gray-200">React</span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-gray-500">Backend</span>
                  <span className="text-right text-gray-200">
                    Node.js & Express
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-gray-500">Database</span>
                  <span className="text-right text-gray-200">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="mt-28">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              My Journey
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Learning & <span className="text-violet-400">Growing</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
              Every project and new technology helps me improve as a
              developer.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-3xl space-y-6">
            {journey.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-[#101522] p-6 transition duration-300 hover:border-violet-500/40 sm:p-8"
              >
                <p className="text-sm font-semibold text-violet-400">
                  {item.year}
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mt-28">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              My Technologies
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Tools I <span className="text-violet-400">Work With</span>
            </h2>
          </div>

          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-xl border border-white/10 bg-[#101522] px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Goals */}
        <section className="mt-28 rounded-3xl border border-violet-500/20 bg-linear-to-br from-violet-600/10 to-blue-600/10 px-6 py-12 text-center sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            What's Next?
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Always Learning, Always Building.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            I want to keep improving my development skills, explore new
            technologies, and build projects that solve real-world problems.
            My journey as a developer is just getting started.
          </p>
        </section>
      </div>
    </main>
  );
}

export default About;
