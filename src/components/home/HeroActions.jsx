import { Link } from "react-router-dom";

function HeroActions() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <Link
        to="/projects"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-medium text-white shadow-lg shadow-violet-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-violet-500"
      >
        Explore Projects
        <span aria-hidden="true">↗</span>
      </Link>

      <Link
        to="/contact"
        className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-medium text-gray-200 transition duration-300 hover:border-violet-400/50 hover:bg-white/5"
      >
        Contact Me
      </Link>
    </div>
  );
}

export default HeroActions;