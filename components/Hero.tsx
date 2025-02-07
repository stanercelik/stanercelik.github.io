"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { FastAverageColor } from 'fast-average-color'

const fac = new FastAverageColor()

const Hero = () => {
  const [shadowColor, setShadowColor] = useState('rgba(0,0,0,0.1)')

  useEffect(() => {
    const getDominantColor = async () => {
      try {
        const color = await fac.getColorAsync('/images/profile.jpg')
        setShadowColor(color.rgba)
      } catch (e) {
        console.error('Error getting dominant color:', e)
      }
    }
    getDominantColor()
  }, [])

  return (
    <section id="about" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-48 h-48 relative rounded-full overflow-hidden"
            style={{
              boxShadow: `0 4px 30px ${shadowColor}`
            }}
          >
            <Image
              src="/images/profile.jpg"
              alt="Salim Taner Çelik"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 text-left"
          >
            <h1 className="text-4xl font-bold mb-4 text-foreground">Salim Taner Çelik</h1>
            <h2 className="text-2xl text-muted-foreground mb-6">Mobile App Developer</h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a passionate mobile developer specializing in creating innovative applications using Swift and Flutter. 
                With a keen eye for detail and a love for clean, efficient code, I bring ideas to life through beautiful and 
                functional mobile experiences.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I embrace failures as opportunities for growth and am always eager to take on new challenges. As they say:
              </p>
              <p className="text-xl italic text-foreground border-l-4 border-border pl-4 my-4">
                "The magic you're looking for is in the work you're avoiding."
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
