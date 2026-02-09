import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTerminal } from "react-icons/fa"
import logo from "../assets/RefinedTDLogo.webp"
import Magnetic from "./Magnetic"
import ThemeToggle from "./ThemeToggle"

const Navbar = ({ onTerminalToggle }) => {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg border-b [border-color:var(--border-color)] [background-color:color-mix(in_srgb,var(--bg-primary),transparent_80%)]">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-6 px-8 lg:px-16">
        <div className="flex flex-shrink-0 items-center">
          <Magnetic>
            <a href="/" aria-label="Home" className="group">
              <img
                src={logo}
                className="relative transition-transform duration-500 group-hover:scale-105"
                width={50}
                height={50}
                alt="Logo"
              />
            </a>
          </Magnetic>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <Magnetic>
              <button
                onClick={onTerminalToggle}
                className="p-2 [color:var(--text-secondary)] hover:[color:var(--accent)] rounded-full transition-colors duration-300"
                aria-label="Open Terminal"
                title="Open Terminal (`)"
              >
                <FaTerminal className="text-xl" />
              </button>
            </Magnetic>
            <ThemeToggle />
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Magnetic>
              <a href="https://www.linkedin.com/in/tanmoy-debnath" target="blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="p-2 [color:var(--text-secondary)] hover:[color:var(--accent)] rounded-full transition-colors duration-300">
                <FaLinkedin className="text-2xl" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://github.com/TanmoyFRu" target="blank" rel="noopener noreferrer" aria-label="GitHub"
                className="p-2 [color:var(--text-secondary)] hover:[color:var(--text-primary)] rounded-full transition-colors duration-300">
                <FaGithub className="text-2xl" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://www.facebook.com/tanmoy.debnath.9699523" target="blank" rel="noopener noreferrer" aria-label="Facebook"
                className="p-2 [color:var(--text-secondary)] hover:[color:var(--accent)] rounded-full transition-colors duration-300">
                <FaFacebook className="text-2xl" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://www.instagram.com/_tanmoy.pvt/" target="blank" rel="noopener noreferrer" aria-label="Instagram"
                className="p-2 [color:var(--text-secondary)] hover:text-pink-500 rounded-full transition-colors duration-300">
                <FaInstagram className="text-2xl" />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
