import AboutImg from "../assets/TanmoyDebnathAbout.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"
const About = () => {
  return (
    <div className="pb-20">
      <h2 className="my-20 text-center text-4xl lg:text-5xl font-bold tracking-tight">
        About
        <span className="text-stone-500"> Me</span>
      </h2>
      <div className="flex justify-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-2/3 px-4"
        >
          <div className="flex justify-center text-center">
            <p className="my-2 max-w-3xl py-6 text-xl lg:text-2xl leading-relaxed tracking-tight text-stone-400 font-light">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
