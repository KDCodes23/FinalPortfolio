"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Settings } from "lucide-react"

const skillCategories = {
  frontend: {
    title: "Frontend",
    icon: Code,
    skills: [
      "React/Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "Framer Motion",
      "Vue.js",
      "SCSS/Sass",
      "Webpack",
      "Vite",
      "React Native",
    ],
  },
  backend: {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "REST APIs",
      "Express.js",
      "FastAPI",
      "Redis",
      "Prisma",
    ],
  },
  devops: {
    title: "DevOps",
    icon: Settings,
    skills: [
      "Docker",
      "AWS",
      "Vercel",
      "GitHub Actions",
      "Kubernetes",
      "Terraform",
      "Linux",
      "Nginx",
      "CI/CD",
      "Monitoring",
    ],
  },
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const buttonVariants = {
    inactive: {
      scale: 1,
      backgroundColor: "transparent",
    },
    active: {
      scale: 1.05,
      backgroundColor: "hsl(var(--primary))",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  const skillsVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  }

  const skillItemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
            Full-stack development across frontend, backend, and DevOps technologies
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Category Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap justify-center gap-2 p-2 bg-background rounded-xl border shadow-sm">
              {Object.entries(skillCategories).map(([key, category]) => {
                const Icon = category.icon
                return (
                  <motion.div key={key} className="interactive">
                    <Button
                      variant={activeCategory === key ? "default" : "ghost"}
                      size="lg"
                      onClick={() => setActiveCategory(key)}
                      className={`flex items-center gap-2 px-6 py-3 ${
                        activeCategory === key
                          ? "text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      asChild
                    >
                      <motion.button
                        variants={buttonVariants}
                        animate={activeCategory === key ? "active" : "inactive"}
                        whileHover="hover"
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="h-5 w-5" />
                        {category.title}
                      </motion.button>
                    </Button>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Skills Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={skillItemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  className="group interactive"
                >
                  <Badge
                    variant="secondary"
                    className="w-full justify-center py-3 px-4 text-sm font-medium transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
