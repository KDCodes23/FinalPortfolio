"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  }

  const highlights = ["Full-Stack Development", "UI/UX Design", "3D Graphics", "Creative Technology"]

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container"
      >
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div variants={itemVariants} className="lg:w-1/2 space-y-6">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold tracking-tighter">
              About <span className="text-primary">Me</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-4 text-muted-foreground text-lg">
              <p>
                I'm a passionate creative developer and the founder of{" "}
                <span className="text-primary font-semibold">Vertex Studio Canada</span>, where I combine technical
                expertise with creative vision to build exceptional digital experiences.
              </p>
              <p>
                My journey spans full-stack development, 3D graphics, UI/UX design, and emerging technologies. I believe
                in pushing the boundaries of what's possible in digital media and interactive experiences.
              </p>
              <p>
                When I'm not coding or designing, you'll find me exploring new technologies, contributing to open source
                projects, and sharing knowledge with the developer community.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <h3 className="text-lg font-semibold">What I Do</h3>
              <motion.div className="flex flex-wrap gap-2" variants={containerVariants}>
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    variants={badgeVariants}
                    custom={index}
                    whileHover={{
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400, damping: 10 },
                    }}
                  >
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      {highlight}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div variants={imageVariants} className="lg:w-1/2">
            <motion.div
              className="relative h-[500px] w-full rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center overflow-hidden"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {/* Animated background elements */}
              <motion.div
                className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-10 right-10 w-16 h-16 bg-primary/30 rounded-full"
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-1/2 right-20 w-12 h-12 bg-primary/25 rounded-full"
                animate={{
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              <div className="text-6xl font-bold text-primary/30 text-center">
                <div>Creative</div>
                <div>Developer</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
