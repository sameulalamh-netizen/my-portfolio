
function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#101522] transition duration-300 hover:-translate-y-2 hover:border-violet-500/40">

      {/* Project Preview */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-linear-to-br from-[#171b32] to-[#0c1222]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18),transparent_65%)]" />

        <div className="relative text-center transition duration-500 group-hover:scale-110">
          <div className="text-6xl">
            {project.icon}
          </div>

          <p className="mt-4 text-sm font-semibold tracking-widest text-violet-300">
            {project.category}
          </p>
        </div>

        <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-300 backdrop-blur">
          {project.status}
        </span>
      </div>

      {/* Project Details */}
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-bold transition group-hover:text-violet-400">
          {project.title}
        </h2>

        <p className="mt-4 min-h-20 leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-8 flex flex-wrap gap-4 border-t border-white/10 pt-6">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium transition hover:border-violet-400 hover:text-violet-400"
            >
              GitHub
            </a>
          ) : (
            <span className="rounded-lg border border-white/10 px-5 py-2.5 text-sm text-gray-500">
              GitHub coming soon
            </span>
          )}

          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium transition hover:bg-violet-500"
            >
              Live Preview ↗
            </a>
          ) : (
            <span className="rounded-lg bg-violet-600/20 px-5 py-2.5 text-sm text-violet-300">
              Live preview coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
