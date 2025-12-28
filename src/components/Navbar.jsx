import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import logo from "../assets/RefinedTDLogo.png"

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg border-b border-white/5 bg-black/20">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-6 px-8 lg:px-16">
        <div className="flex flex-shrink-0 items-center">
          <a href="/" aria-label="Home" className="group">
            <img
              src={logo}
              className="relative transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              width={50}
              height={50}
              alt="Logo"
            />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://www.linkedin.com/in/tanmoy-dednath" target="blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="p-2 text-stone-400 hover:text-blue-500 hover:bg-stone-800/40 rounded-full transition-all duration-300">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="https://github.com/TanmoyFRu" target="blank" rel="noopener noreferrer" aria-label="GitHub"
            className="p-2 text-stone-400 hover:text-white hover:bg-stone-800/40 rounded-full transition-all duration-300">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://www.facebook.com/tanmoy.debnath.9699523" target="blank" rel="noopener noreferrer" aria-label="Facebook"
            className="p-2 text-stone-400 hover:text-blue-600 hover:bg-stone-800/40 rounded-full transition-all duration-300">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/_tanmoy.pvt/" target="blank" rel="noopener noreferrer" aria-label="Instagram"
            className="p-2 text-stone-400 hover:text-pink-500 hover:bg-stone-800/40 rounded-full transition-all duration-300">
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
