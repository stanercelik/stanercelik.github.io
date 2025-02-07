"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaGooglePlay } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useState, useEffect } from 'react'
import { FastAverageColor } from 'fast-average-color'

const fac = new FastAverageColor()

const projects = [
  {
    id: 1,
    title: "POLYSLEEP",
    description: "A polyphasic sleep scheduling iOS app that generates personalized sleep plans based on user preferences.",
    images: [
      "/images/polysleep/polysleep-3.jpg",
      "/images/polysleep/polysleep-1.jpg",
      "/images/polysleep/polysleep-2.jpg",
    ],
    technologies: ["SwiftUI", "MVVM", "SwiftData", "RevenueCat", "UserNotifications", "AVFoundation", "Localization"],
    link: "https://github.com/stanercelik/PolySleep",
    githubLink: true,
    status: "In Development"
  },
  {
    id: 2,
    title: "LOOM AI",
    description: "An AI-powered Turkish carpet generation app using Fal.AI models for custom carpet designs.",
    images: [
      "/images/loom-ai/loomai-1.jpg",
      "/images/loom-ai/loomai-2.jpg",
      "/images/loom-ai/loomai-3.jpg"
    ],
    technologies: ["Flutter", "Fal.AI", "GetX", "SharedPreferences"],
    link: "https://github.com/stanercelik/LoomAI",
    githubLink: true
  },
  {
    id: 3,
    title: "BILDIRGEC APP",
    description: "An interactive word-guessing game with AI-based word similarity ranking.",
    images: [
      "/images/bildirgec/image1.jpg",
      "/images/bildirgec/image2.jpg",
      "/images/bildirgec/image3.jpg"
    ],
    technologies: ["Flutter", "GetX", "MVVM", "FastText", "Flask API"],
    links: [
      {
        title: "Client",
        url: "https://github.com/stanercelik/bildirgec-client",
        icon: FaGithub
      },
      {
        title: "Backend",
        url: "https://github.com/stanercelik/bildirgec-backend",
        icon: FaGithub
      }
    ],
    githubLink: true,
    multipleLinks: true
  },
  {
    id: 4,
    title: "TESBEE APP",
    description: "A realistic prayer bead application for tracking dhikrs with haptic feedback.",
    images: [
      "/images/tesbee/tesbee-1.jpg",
      "/images/tesbee/tesbee-2.jpg",
      "/images/tesbee/tesbee-3.jpg",
      "/images/tesbee/tesbee-4.jpg",
      "/images/tesbee/tesbee-5.jpg"
    ],
    technologies: ["Flutter", "GetX", "MVVM", "Firebase", "Google Ads"],
    links: [
      {
        title: "GitHub",
        url: "https://github.com/stanercelik/TesbeeApp",
        icon: FaGithub
      },
      {
        title: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.tesbee.release&hl=tr",
        icon: FaGooglePlay
      }
    ],
    multipleLinks: true
  },
  {
    id: 5,
    title: "VYZE",
    description: "A virtual try-on and outfit recommendation app inspired by Google's visual try-on models.",
    images: [
      "/images/virtual-try-on/vyze-1.png",
      "/images/virtual-try-on/vyze-2.png",
      "/images/virtual-try-on/vyze-3.png",
      "/images/virtual-try-on/vyze-4.png",
    ],
    technologies: ["Flutter", "Clean Architecture", "MobX", "AWS Lambda", "AWS S3", "AWS DynamoDB"],
    link: "/projects/virtual-try-on",
  },
]

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})
  const [dominantColors, setDominantColors] = useState<{ [key: string]: string }>({})

  const getDominantColor = async (projectId: number, imageUrl: string) => {
    try {
      const color = await fac.getColorAsync(imageUrl)
      setDominantColors(prev => ({
        ...prev,
        [`${projectId}-${imageUrl}`]: color.rgba
      }))
    } catch (e) {
      console.error('Error getting dominant color:', e)
    }
  }

  const nextImage = (projectId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    const project = projects.find(p => p.id === projectId)
    if (!project) return
    
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % project.images.length
    }))
  }

  const prevImage = (projectId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    const project = projects.find(p => p.id === projectId)
    if (!project) return
    
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + project.images.length) % project.images.length
    }))
  }

  useEffect(() => {
    // Preload dominant colors for all images
    projects.forEach(project => {
      project.images.forEach(imageUrl => {
        getDominantColor(project.id, imageUrl)
      })
    })
  }, [])

  return (
    <section id="projects" className="py-20 noise gradient-bg">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => {
          const currentImage = project.images[currentImageIndex[project.id] || 0]
          const shadowColor = dominantColors[`${project.id}-${currentImage}`] || 'rgba(0,0,0,0.1)'
          
          return (
            <div key={project.id} className="relative" style={{ height: 'fit-content' }}>
              <motion.div
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => {
                  setHoveredProject(null)
                  setCurrentImageIndex({})
                }}
                className="rounded-lg overflow-hidden transition-all duration-700 relative group"
                animate={{
                  zIndex: hoveredProject === project.id ? 10 : 0,
                  scale: hoveredProject === project.id ? 1.05 : 1,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1]
                }}
                style={{
                  boxShadow: `0 4px 30px ${shadowColor}`,
                  height: hoveredProject === project.id ? 'auto' : '100%',
                  background: 'transparent'
                }}
              >
                <motion.div 
                  className="relative w-full"
                  animate={{ 
                    aspectRatio: hoveredProject === project.id ? '2/3' : '4/3'
                  }}
                  transition={{ 
                    duration: 0.7,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${project.id}-${currentImageIndex[project.id] || 0}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ 
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      className="absolute inset-0"
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={currentImage}
                          alt={`Project ${project.title} screenshot ${currentImageIndex[project.id] || 0 + 1}`}
                          quality={95}
                          fill
                          className={`transition-all duration-700 ${
                            hoveredProject === project.id 
                              ? 'object-contain' 
                              : 'object-cover blur-sm scale-105'
                          }`}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <motion.div
                          initial={false}
                          animate={{
                            opacity: hoveredProject === project.id ? 0 : 0.7,
                            y: hoveredProject === project.id ? -20 : 0
                          }}
                          transition={{
                            duration: 0.5,
                            ease: [0.4, 0, 0.2, 1]
                          }}
                          className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent via-transparent to-transparent backdrop-blur-[1px]"
                        >
                          <h3 className="text-2xl font-bold text-white text-center px-4">{project.title}</h3>
                        </motion.div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {hoveredProject === project.id && (
                    <>
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => prevImage(project.id, e)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors duration-300 z-10 backdrop-blur-sm"
                      >
                        <IoIosArrowBack size={20} />
                      </motion.button>
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => nextImage(project.id, e)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors duration-300 z-10 backdrop-blur-sm"
                      >
                        <IoIosArrowForward size={20} />
                      </motion.button>

                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10"
                      >
                        {project.images.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              (currentImageIndex[project.id] || 0) === idx
                                ? 'bg-white scale-125'
                                : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </motion.div>
                    </>
                  )}
                </motion.div>

                <motion.div 
                  className="p-6 flex flex-col flex-grow relative z-10 bg-transparent h-[280px]"
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0.9
                  }}
                  transition={{
                    duration: 0.5
                  }}
                >
                  <motion.h3 
                    className="text-xl font-bold mb-2"
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0
                    }}
                    transition={{
                      duration: 0.3
                    }}
                  >
                    {project.title}
                  </motion.h3>
                  {project.status && (
                    <span className="px-2 py-1 text-xs mb-2 inline-block w-fit rounded-full border border-current">
                      {project.status}
                    </span>
                  )}
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md border border-current/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.multipleLinks ? (
                    <div className="flex gap-2 mt-auto">
                      {project.links?.map((link, i) => (
                        <Link
                          key={i}
                          href={link.url}
                          target="_blank"
                          className="flex-1 px-4 py-2 rounded-md border border-current hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 text-center flex items-center justify-center gap-2"
                        >
                          {('icon' in link) && <link.icon className="text-lg" />}
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  ) : project.link ? (
                    <Link
                      href={project.link}
                      target={project.githubLink ? "_blank" : "_self"}
                      className="mt-auto inline-block w-full px-4 py-2 rounded-md border border-current hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 text-center flex items-center justify-center gap-2"
                    >
                      {project.githubLink && <FaGithub className="text-lg" />}
                      {project.githubLink ? "GitHub" : "Learn More"}
                    </Link>
                  ) : null}
                </motion.div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
