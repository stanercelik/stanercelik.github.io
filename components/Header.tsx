"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Github, Linkedin, Mail } from "lucide-react"

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    if (sectionId === '#about') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      const section = document.querySelector(sectionId)
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
    // Update URL without causing a jump
    window.history.pushState({}, '', sectionId)
  }

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, '#about')}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                About Me
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, '#projects')}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={(e) => scrollToSection(e, '#skills')}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/stanercelik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/tanerc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a href="mailto:tanercelik2001@gmail.com" className="hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:text-primary transition-colors"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
