import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import logo from "../assets/TanmoyDebnathLogo.png"

const Navbar = () => {
  return (
<nav className="flex item-center justify-between py-6">
  <div className="flex flex-shrink-0 items-center">
    <a href="/" aria-label="Home">
    <img src={logo} className="mx-2" width={50} height={25} alt="Logo"/></a>
  </div>
  <div className="m-8 flex item-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/tanmoy-dednath" target="blank" rel="noopener noreferrer" aria-label="LinkedIn" ><FaLinkedin /></a>
    <a href="https://github.com/TanmoyFRu" target="blank" rel="noopener noreferrer" aria-label="GitHub" ><FaGithub /></a>
    <a href="https://www.facebook.com/tanmoy.debnath.9699523" target="blank" rel="noopener noreferrer" aria-label="Facebook" ><FaFacebook /></a>
    <a href="https://www.instagram.com/_tanmoy.pvt/" target="blank" rel="noopener noreferrer" aria-label="Instagram" ><FaInstagram /></a>
  </div>
</nav>
  )
}

export default Navbar
