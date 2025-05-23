"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    id: 1,
    title: "Unity Certified Developer",
    issuer: "Unity Technologies",
    date: "2023",
    description: "Professional certification for Unity development and real-time 3D applications.",
    credentialUrl: "#",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022",
    description: "Expertise in designing distributed systems on AWS cloud infrastructure.",
    credentialUrl: "#",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 3,
    title: "Google UX Design Professional Certificate",
    issuer: "Google",
    date: "2022",
    description: "Comprehensive training in user experience design principles and methodologies.",
    credentialUrl: "#",
    color: "from-green-500 to-blue-600",
  },
  {
    id: 4,
    title: "Adobe Certified Expert",
    issuer: "Adobe",
    date: "2021",
    description: "Expert-level certification in Adobe Creative Suite applications.",
    credentialUrl: "#",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 5,
    title: "Meta Front-End Developer",
    issuer: "Meta",
    date: "2023",
    description: "Professional certificate in modern front-end development practices and React.",
    credentialUrl: "#",
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: 6,
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    description: "Expertise in Kubernetes cluster administration and container orchestration.",
    credentialUrl: "#",
    color: "from-teal-500 to-cyan-600",
  },
]

export function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 0],
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const cardVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="certifications" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            Professional <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
            Industry-recognized certifications that validate my expertise across various technologies
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div key={cert.id} variants={itemVariants}>
              <motion.div variants={cardVariants} whileHover="hover" className="h-full">
                <Card className="h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg group overflow-hidden relative">
                  {/* Gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 0.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  <CardHeader className="flex flex-row items-start gap-4 relative z-10">
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                      className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} shadow-lg`}
                    >
                      <Award className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="space-y-1 flex-1">
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                        {cert.title}
                      </CardTitle>
                      <div className="text-sm text-muted-foreground font-medium">{cert.issuer}</div>
                      <motion.div
                        className="flex items-center text-sm text-muted-foreground"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        {cert.date}
                      </motion.div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cert.description}</p>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Button variant="outline" size="sm" className="w-full group/btn overflow-hidden relative" asChild>
                        <a href={cert.credentialUrl} target="_blank" rel="noreferrer">
                          <motion.div className="absolute inset-0 bg-primary/10 scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300" />
                          <span className="relative">View Credential</span>
                          <ExternalLink className="ml-2 h-3.5 w-3.5 relative" />
                        </a>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
