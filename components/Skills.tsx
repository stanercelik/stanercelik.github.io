"use client"

import { motion } from "framer-motion"
import { 
  SiSwift, SiDart, SiKotlin, SiPython, SiOpenjdk, SiMysql,
  SiFlutter, SiSwift as SiSwiftUI, SiJetpackcompose, SiFirebase,
  SiGit, SiJira, SiFigma, SiBitbucket, SiAmazon, SiAmazondynamodb
} from 'react-icons/si'
import { BiCodeAlt } from 'react-icons/bi'

const skills = [
  { 
    category: "Programming Languages", 
    items: [
      { name: "Swift", icon: SiSwift },
      { name: "Dart", icon: SiDart },
      { name: "Kotlin", icon: SiKotlin },
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: SiMysql }
    ] 
  },
  {
    category: "Frameworks and Libraries",
    items: [
      { name: "Flutter", icon: SiFlutter },
      { name: "SwiftUI", icon: SiSwiftUI },
      { name: "UIKit", icon: SiSwift },
      { name: "Jetpack Compose", icon: SiJetpackcompose },
      { name: "GetX", icon: BiCodeAlt },
      { name: "MobX", icon: BiCodeAlt }
    ]
  },
  { 
    category: "Database Management", 
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "SwiftData", icon: SiSwift },
      { name: "DynamoDB", icon: SiAmazondynamodb },
      { name: "Firebase Firestore", icon: SiFirebase }
    ] 
  },
  { 
    category: "Backend and Cloud Services", 
    items: [
      { name: "AWS (RDS, S3)", icon: SiAmazon },
      { name: "Firebase", icon: SiFirebase },
      { name: "RESTful APIs", icon: BiCodeAlt }
    ] 
  },
  { 
    category: "Design and Development Tools", 
    items: [
      { name: "Git", icon: SiGit },
      { name: "JIRA", icon: SiJira },
      { name: "Figma", icon: SiFigma },
      { name: "Confluence", icon: BiCodeAlt },
      { name: "BitBucket", icon: SiBitbucket }
    ] 
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillCategory, index) => (
          <motion.div
            key={skillCategory.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">{skillCategory.category}</h3>
            <ul className="space-y-2">
              {skillCategory.items.map((skill) => (
                <li key={skill.name} className="flex items-center gap-2">
                  <skill.icon className="text-xl text-primary" />
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
