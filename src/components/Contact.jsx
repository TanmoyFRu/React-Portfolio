import { CONTACT } from "../constants"
import { motion } from "framer-motion"
const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl lg:text-5xl font-bold tracking-tight"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-stone-400">
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 text-stone-400">
          {CONTACT.phoneNo}
        </motion.p>
        <a href={`mailto:${CONTACT.email}`} className="border-b border-stone-600 hover:border-white transition-colors duration-300">
          {CONTACT.email}
        </a>
      </div>
    </div>
  )
}

export default Contact
