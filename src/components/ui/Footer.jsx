
import { Github, Twitter, Heart, Sparkles, Mail, ExternalLink, Code, Star, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Anmol-TheDev",
      icon: Github,
      color: "hover:text-purple-400",
      description: "Source Code"
    },
    {
      name: "Twitter",
      href: "https://x.com/anmolthedev",
      icon: Twitter,
      color: "hover:text-blue-400",
      description: "Updates"
    },
    {
      name: "Email",
      href: "mailto:contact@anmolthedev.com",
      icon: Mail,
      color: "hover:text-green-400",
      description: "Contact"
    },
  ]

  const quickLinks = [
    { name: "Documentation", href: "/docs", icon: Code },
    { name: "Features", href: "/features", icon: Sparkles },
    { name: "NPM Package", href: "https://www.npmjs.com/package/package-particlefx", icon: ExternalLink, external: true },
  ]

  return (
    <footer className="relative border-t border-primary/20 bg-gradient-to-b from-background to-background/90 backdrop-blur-xl mt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <Sparkles className="h-10 w-10 text-primary" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ParticleFX
                </h3>
                <p className="text-sm text-muted-foreground">Interactive Particle Effects</p>
              </div>
            </motion.div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Transform images into stunning particle effects with real-time customization. 
              Framework-agnostic JavaScript library with zero dependencies.
            </p>

            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="text-xs bg-primary/10 border-primary/30 text-primary">
                <Star className="h-3 w-3 mr-1" />
                Open Source
              </Badge>
              <Badge variant="outline" className="text-xs bg-accent/10 border-accent/30 text-accent">
                <Code className="h-3 w-3 mr-1" />
                TypeScript
              </Badge>
              <Badge variant="outline" className="text-xs bg-green-500/10 border-green-500/30 text-green-400">
                <Coffee className="h-3 w-3 mr-1" />
                Zero Deps
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.li key={link.name} whileHover={{ x: 5 }}>
                    <a
                      href={link.href}
                      {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                    >
                      <Icon className="h-4 w-4 group-hover:text-primary" />
                      <span>{link.name}</span>
                    </a>
                  </motion.li>
                )
              })}
            </ul>
          </div>

          {/* Social & Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.div
                    key={social.name}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
                    >
                      <Icon className={`h-5 w-5 text-muted-foreground ${social.color} transition-colors duration-300`} />
                      <div>
                        <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {social.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {social.description}
                        </div>
                      </div>
                    </a>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-muted-foreground">
              © 2025 Anmol Singh. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-3 w-3 text-red-500" />
              <span>using React + Vite + shadcn/ui</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <motion.a
              href="https://github.com/Anmol-TheDev/package-particleFx"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://x.com/anmolthedev"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-blue-400 transition-colors duration-300"
            >
              <Twitter className="h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
