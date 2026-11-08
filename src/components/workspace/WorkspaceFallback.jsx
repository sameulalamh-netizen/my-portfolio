function WorkspaceFallback() {
  return (
    <div
      className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#070d1b]"
      aria-label="Developer workspace preview"
    >
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-blue-600/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-violet-600/20 blur-3xl"
      />

      <div className="absolute inset-4 flex flex-col rounded-xl border border-white/10 bg-black/20 p-4 sm:inset-6 sm:p-6">
        {/* Window header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>

          <span className="text-xs text-gray-400">developer.js</span>
        </div>

        {/* Dual monitor preview */}
        <div className="grid flex-1 grid-cols-2 gap-3 py-5">
          <div className="rounded-lg border border-cyan-400/20 bg-[#0c172b] p-3">
            <p className="mb-3 text-xs text-cyan-300">Code Editor</p>

            <div className="space-y-2 font-mono text-[10px] sm:text-xs">
              <p className="text-violet-300">const developer = {"{"}</p>
              <p className="pl-3 text-sky-300">name: "Developer",</p>
              <p className="pl-3 text-emerald-300">skills: ["React"],</p>
              <p className="text-violet-300">{"}"}</p>

              <div className="mt-4 h-1 w-4/5 rounded bg-blue-400/50" />
              <div className="h-1 w-3/5 rounded bg-violet-400/40" />
              <div className="h-1 w-2/3 rounded bg-cyan-400/40" />
            </div>
          </div>

          <div className="rounded-lg border border-violet-400/20 bg-[#111329] p-3">
            <p className="mb-3 text-xs text-violet-300">Live Preview</p>

            <div className="flex h-[75%] flex-col items-center justify-center rounded-md bg-linear-to-br from-blue-950 to-violet-950">
              <div className="text-3xl font-bold text-white">&lt;/&gt;</div>

              <div className="mt-3 h-1.5 w-2/3 rounded-full bg-cyan-400/70" />

              <div className="mt-2 h-1.5 w-1/2 rounded-full bg-white/20" />
            </div>
          </div>
        </div>

        {/* Workspace status */}
        <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[10px] text-gray-400 sm:text-xs">
          <span>Developer Workspace</span>
          <span className="text-emerald-400">● Ready</span>
        </div>
      </div>
    </div>
  );
}

export default WorkspaceFallback;