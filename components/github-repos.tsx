"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, GitFork, Github, Code, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

// Mock GitHub repository data (replace with actual API call in production)
const mockRepos = [
  {
    id: 1,
    name: "3d-model-viewer",
    description: "A WebGL-based 3D model viewer with support for glTF and OBJ formats",
    language: "JavaScript",
    stars: 124,
    forks: 32,
    url: "https://github.com/vertexstudio/3d-model-viewer",
  },
  {
    id: 2,
    name: "ar-web-toolkit",
    description: "Web-based augmented reality toolkit using WebXR and Three.js",
    language: "TypeScript",
    stars: 87,
    forks: 21,
    url: "https://github.com/vertexstudio/ar-web-toolkit",
  },
  {
    id: 3,
    name: "data-viz-components",
    description: "Reusable React components for data visualization dashboards",
    language: "TypeScript",
    stars: 156,
    forks: 43,
    url: "https://github.com/vertexstudio/data-viz-components",
  },
  {
    id: 4,
    name: "shader-collection",
    description: "Collection of GLSL shaders for creative coding and visual effects",
    language: "GLSL",
    stars: 210,
    forks: 65,
    url: "https://github.com/vertexstudio/shader-collection",
  },
  {
    id: 5,
    name: "animation-library",
    description: "JavaScript animation library for web interactions and UI effects",
    language: "JavaScript",
    stars: 98,
    forks: 27,
    url: "https://github.com/vertexstudio/animation-library",
  },
  {
    id: 6,
    name: "design-system",
    description: "Vertex Studio's design system and component library",
    language: "TypeScript",
    stars: 76,
    forks: 18,
    url: "https://github.com/vertexstudio/design-system",
  },
]

const languageColors = {
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-500",
  GLSL: "bg-purple-500",
  Python: "bg-green-500",
  Rust: "bg-orange-500",
}

export function GithubRepos() {
  const [repos, setRepos] = useState(mockRepos)
  const [searchTerm, setSearchTerm] = useState("")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Filter repositories based on search term
  useEffect(() => {
    if (searchTerm === "") {
      setRepos(mockRepos)
    } else {
      const filtered = mockRepos.filter(
        (repo) =>
          repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          repo.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setRepos(filtered)
    }
  }, [searchTerm])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="github" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Open Source <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Explore our GitHub repositories and open source contributions.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search repositories..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {repos.map((repo) => (
            <motion.div key={repo.id} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-primary/50">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <Github className="h-5 w-5 mr-2 text-primary" />
                      <CardTitle className="text-lg">{repo.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <CardDescription className="min-h-[60px]">{repo.description}</CardDescription>
                  <div className="flex items-center mt-4 text-sm">
                    <div className="flex items-center mr-4">
                      <div
                        className={`h-3 w-3 rounded-full ${languageColors[repo.language] || "bg-gray-400"} mr-1`}
                      ></div>
                      {repo.language}
                    </div>
                    <div className="flex items-center mr-4">
                      <Star className="h-4 w-4 mr-1" />
                      {repo.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="h-4 w-4 mr-1" />
                      {repo.forks}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={repo.url} target="_blank" rel="noreferrer">
                      <Code className="mr-2 h-4 w-4" /> View Repository
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/vertexstudio" target="_blank" rel="noreferrer">
              <Github className="mr-2 h-5 w-5" /> View All Repositories
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
