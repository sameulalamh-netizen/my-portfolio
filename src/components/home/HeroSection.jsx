import { lazy, Suspense } from "react";
import HeroActions from "./HeroActions";
import WorkspaceFallback from "../workspace/WorkspaceFallback";

const WorkspaceScene = lazy(() => import("../workspace/WorkspaceScene"));

function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#050816]">
      {/* Full-screen 3D background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<WorkspaceFallback />}>
          <WorkspaceScene />
        </Suspense>
      </div>

      {/* Left overlay - keep text readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1 bg-linear-to-r from-[#050816]/95 via-[#050816]/40 to-transparent"
      />

      {/* Bottom overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1 bg-linear-to-t from-[#050816]/20 via-transparent to-transparent"
      />
      {/* Blue-purple ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 z-1 h-80 w-80 rounded-full bg-blue-600/15 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 z-1 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]"
      />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-28 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="text-xs font-medium tracking-wide text-gray-200 sm:text-sm">
              Developer Portfolio
            </span>
          </div>

          {/* Introduction */}
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-violet-300 sm:text-base">
            Hello, I&apos;m
          </p>

          {/* Name */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Sameul Alam
            <span className="mt-3 block bg-linear-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-3xl text-transparent sm:text-5xl lg:text-6xl">
              Full Stack Web Developer
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
            I build modern web experiences with clean code, thoughtful design,
            and a focus on performance. Explore my projects and the ideas
            behind them.
          </p>

          {/* Existing buttons */}
          <div className="mt-8">
            <HeroActions />
          </div>

          {/* Skills summary */}
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-6">
            <div>
              <p className="text-sm font-semibold text-white sm:text-base">
                Frontend
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-400 sm:text-sm">
                Modern interfaces
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white sm:text-base">
                Full Stack
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-400 sm:text-sm">
                Complete applications
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white sm:text-base">
                Performance
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-400 sm:text-sm">
                Lightweight experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;