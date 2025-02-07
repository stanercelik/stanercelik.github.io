"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Contact</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto text-center"
      >
        <p className="mb-8">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/stanercelik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/tanerc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a href="mailto:tanercelik2001@gmail.com" className="hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact

