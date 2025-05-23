"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Vertex Studio Canada",
    description:
      "My creative technology studio specializing in cutting-edge digital experiences and interactive solutions.",
    tags: ["Startup", "Creative Technology", "Digital Studio", "Innovation"],
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    status: "Active",
  },
  {
    id: 2,
    title: "Immersive VR Experience",
    description:
      "A fully immersive virtual reality experience for architectural visualization built with Unity and WebXR.",
    tags: ["VR", "Unity", "3D Modeling", "WebXR"],
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 3,
    title: "Interactive Data Dashboard",
    description: "Real-time data visualization dashboard with custom D3.js components and responsive design.",
    tags: ["D3.js", "React", "Data Visualization", "Dashboard"],
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 4,
    title: "Mobile AR Application",
    description: "Augmented reality mobile application for retail product visualization using ARKit and ARCore.",
    tags: ["AR", "React Native", "ARKit", "ARCore"],
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 5,
    title: "AI-Powered Design Tool",
    description: "Machine learning-powered design assistant that helps create layouts and color schemes.",
    tags: ["AI/ML", "Python", "TensorFlow", "Design"],
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 6,
    title: "Blockchain Portfolio Tracker",
    description: "Decentralized portfolio tracking application with Web3 integration and real-time analytics.",
    tags: ["Blockchain", "Web3", "React", "Ethereum"],
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
]

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: {
      scale: 0.95,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  }

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
            A showcase of my work spanning creative technology, web development, and digital innovation
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={project.featured ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <Card
                className={`overflow-hidden h-full transition-all duration-500 hover:shadow-xl hover:border-primary/50 group ${
                  project.featured ? "border-primary/30 bg-gradient-to-br from-primary/5 to-transparent" : ""
                }`}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    >
                      <Badge className="bg-primary text-primary-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </motion.div>
                  </div>
                )}

                <div className={`aspect-video overflow-hidden relative ${project.featured ? "aspect-[2/1]" : ""}`}>
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className={project.featured ? "text-xl" : "text-lg"}>{project.title}</CardTitle>
                    {project.status && (
                      <Badge variant="outline" className="text-xs">
                        {project.status}
                      </Badge>
                    )}
                  </div>
                  <CardDescription className={project.featured ? "text-base" : ""}>
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.tags.map((tag, index) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full group/btn" asChild>
                      <a href={project.link} target="_blank" rel="noreferrer">
                        <motion.div className="absolute inset-0 bg-primary/10 scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300" />
                        <span className="relative">View Project</span>
                        <ExternalLink className="ml-2 h-4 w-4 relative" />
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
