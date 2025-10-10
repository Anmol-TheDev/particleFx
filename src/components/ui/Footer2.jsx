import { Github, Twitter, Linkedin, Mail, ArrowUp, Heart, Code, Star, Coffee, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

const Footer2 = () => {
  const [email, setEmail] = useState("")

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Docs", href: "/docs" },
    { name: "Features", href: "/features" },
    { name: "NPM Package", href: "https://www.npmjs.com/package/package-particlefx", external: true },
  ]

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/AnmolTheDev", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/anmol-thedev", color: "hover:text-blue-500" },
    { icon: Github, href: "https://github.com/Anmol-TheDev/package-particleFx", color: "hover:text-purple-400" },
    { icon: Mail, href: "mailto:contact@anmolthedev.com", color: "hover:text-green-400" },
  ]

  const handleSubscribe = () => {
    if (email.trim()) {
      alert(`Subscribed with: ${email}`)
      setEmail("")
    }
  }

  return (
    <footer className="relative border-t border-primary/20 bg-gradient-to-b from-background to-background/90 backdrop-blur-xl mt-20 overflow-hidden">
      {/* Subtle Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Social */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Sparkles className="h-10 w-10 text-primary" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ParticleFX
              </h2>
              <p className="text-sm text-muted-foreground">Interactive Particle Effects</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
            Transform images into stunning particle effects in real-time.
            Framework-agnostic JavaScript library with zero dependencies.
          </p>

          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="text-xs bg-primary/10 border-primary/30 text-primary">
              <Star className="h-3 w-3 mr-1" /> Open Source
            </Badge>
            <Badge variant="outline" className="text-xs bg-accent/10 border-accent/30 text-accent">
              <Code className="h-3 w-3 mr-1" /> TypeScript
            </Badge>
            <Badge variant="outline" className="text-xs bg-green-500/10 border-green-500/30 text-green-400">
              <Coffee className="h-3 w-3 mr-1" /> Zero Deps
            </Badge>
          </div>

          <div className="flex space-x-3 pt-3">
            {socialLinks.map((social, i) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-muted-foreground transition-all duration-300 ${social.color}`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-4 text-foreground text-lg">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((link, i) => (
              <motion.li key={i} whileHover={{ x: 5 }}>
                <a
                  href={link.href}
                  {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-4 text-foreground text-lg">Contact Info</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>123 Particle Street, Animation City, PX 12345</li>
            <li>+1 (555) 123-4567 | Mon–Fri 9AM–6PM</li>
            <li>support@particlefx.com</li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-4 text-foreground text-lg">Newsletter</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Subscribe to get the latest updates, tips, and particle effect guides delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 rounded-md bg-background text-foreground border border-primary/20 focus:border-primary outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <motion.button
              onClick={handleSubscribe}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="mt-12 border-t border-primary/10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p>© 2025 ParticleFX. All rights reserved.</p>
        <p className="flex items-center space-x-1">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500" />
          <span>by ParticleFX Team</span>
        </p>
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all"
        >
          <ArrowUp className="w-5 h-5 text-primary" />
        </motion.button>
      </motion.div>
    </footer>
  )
}

export default Footer2
