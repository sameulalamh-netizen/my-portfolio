
function SkillCard({ category, description, skills, icon, number }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#101522] px-7 py-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/5">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-600/10 blur-3xl transition duration-500 group-hover:bg-violet-500/20" />

      {/* Card Header */}
      <div className="relative flex items-center gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-3xl transition duration-300 group-hover:scale-110 group-hover:bg-violet-500/20">
          {icon}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            {number}
          </p>

          <h2 className="mt-1 text-xl font-bold text-white transition group-hover:text-violet-400">
            {category}
          </h2>
        </div>
      </div>

      {/* Description */}
      <p className="relative mt-7 min-h-14 text-sm leading-7 text-gray-400">
        {description}
      </p>

      {/* Divider */}
      <div className="my-6 h-px bg-white/10" />

      {/* Skills */}
      <div className="relative">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
          Technologies
        </p>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-white/10 bg-[#191f30] px-4 py-2.5 text-sm font-medium text-gray-300 transition duration-300 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </article>
  );
}

export default SkillCard;
