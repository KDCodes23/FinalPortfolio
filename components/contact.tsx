"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react"

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: {
      scale: 0.98,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  }

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Send me a message
                </CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div className="space-y-2" whileFocus="focus" variants={inputVariants}>
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="transition-all duration-200 focus:border-primary/50"
                      />
                    </motion.div>
                    <motion.div className="space-y-2" whileFocus="focus" variants={inputVariants}>
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="transition-all duration-200 focus:border-primary/50"
                      />
                    </motion.div>
                  </div>
                  <motion.div className="space-y-2" whileFocus="focus" variants={inputVariants}>
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="transition-all duration-200 focus:border-primary/50"
                    />
                  </motion.div>
                  <motion.div className="space-y-2" whileFocus="focus" variants={inputVariants}>
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      className="transition-all duration-200 focus:border-primary/50 resize-none"
                    />
                  </motion.div>
                </form>
              </CardContent>
              <CardFooter>
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="w-full">
                  <Button className="w-full group overflow-hidden relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <Send className="mr-2 h-4 w-4 relative" />
                    <span className="relative">Send Message</span>
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <Card className="group hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
                <CardDescription>Reach out to me directly using the information below.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div
                  className="flex items-start group/item cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="h-5 w-5 mr-3 text-primary mt-0.5 group-hover/item:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">your.email@example.com</p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start group/item cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="h-5 w-5 mr-3 text-primary mt-0.5 group-hover/item:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+1 (123) 456-7890</p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start group/item cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5 group-hover/item:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Vancouver, BC, Canada</p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>

            <Card className="group hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <motion.div
                    className="flex justify-between items-center p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-primary">9:00 AM - 6:00 PM PST</span>
                  </motion.div>
                  <motion.div
                    className="flex justify-between items-center p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="font-medium">Saturday</span>
                    <span className="text-muted-foreground">10:00 AM - 4:00 PM PST</span>
                  </motion.div>
                  <motion.div
                    className="flex justify-between items-center p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="font-medium">Sunday</span>
                    <span className="text-muted-foreground">By appointment</span>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20"
                >
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-medium">Quick response:</span> I typically respond to emails
                    within 24 hours during business days.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
