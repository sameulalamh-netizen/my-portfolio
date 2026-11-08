import { Route, Routes, Link } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ScrollToTop from "../components/ScrollToTop";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#080b14] px-5 text-center text-white">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          Page Not Found
        </p>

        <h1 className="mt-4 text-7xl font-bold">404</h1>

        <p className="mt-4 text-gray-400">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-lg bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

function AppRoutes() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      {/* Pages with shared layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* 404: Any unmatched URL */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default AppRoutes;