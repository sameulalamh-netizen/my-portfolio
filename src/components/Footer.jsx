import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080b14] px-5 pt-14 text-white sm:px-8">

      <div className="mx-auto grid max-w-7xl gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-3">

        {/* Brand */}
        <div>
          <Link to="/" className="text-2xl font-bold">
            Sameul<span className="text-violet-400">.</span>
          </Link>

          <p className="mt-4 text-sm text-gray-400">
            Full Stack Web Developer
          </p>

          <p className="mt-3 max-w-xs text-sm leading-7 text-gray-500">
            Building modern, responsive and user-friendly web applications
            with clean and efficient code.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-400 transition hover:text-violet-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold text-white">
            Connect With Me
          </h3>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-[#101522] px-4 py-3 text-sm text-gray-400 transition hover:border-violet-500/50 hover:text-violet-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-[#101522] px-4 py-3 text-sm text-gray-400 transition hover:border-violet-500/50 hover:text-violet-400"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://www.facebook.com/md.sameul.alam.184876"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-[#101522] px-4 py-3 text-sm text-gray-400 transition hover:border-violet-500/50 hover:text-violet-400"
            >
              Facebook ↗
            </a>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Feel free to connect and collaborate.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-sm text-gray-500 sm:flex-row">

          <p>
            © {new Date().getFullYear()} Sameul Alam. All rights reserved.
          </p>

          <p>
            Designed & built with{" "}
            <span className="text-violet-400">React</span> and{" "}
            <span className="text-violet-400">Tailwind CSS</span>.
          </p>

        </div>
      </div>

    </footer>
  );
}

export default Footer;