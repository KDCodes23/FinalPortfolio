import { Github, Mail, Linkedin } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Certifications } from "@/components/certifications"
import { GithubRepos } from "@/components/github-repos"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="min-h-screen bg-background font-sans">
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="font-heading font-bold tracking-tight text-xl">
              <span className="text-primary">Your Name</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm font-medium transition-colors hover:text-primary interactive">
                About
              </a>
              <a href="#skills" className="text-sm font-medium transition-colors hover:text-primary interactive">
                Skills
              </a>
              <a href="#projects" className="text-sm font-medium transition-colors hover:text-primary interactive">
                Projects
              </a>
              <a
                href="#certifications"
                className="text-sm font-medium transition-colors hover:text-primary interactive"
              >
                Certifications
              </a>
              <a href="#github" className="text-sm font-medium transition-colors hover:text-primary interactive">
                GitHub
              </a>
              <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary interactive">
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
        </header>
        <main className="container py-6 md:py-12">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <GithubRepos />
          <Contact />
        </main>
        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors interactive"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors interactive"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors interactive"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
