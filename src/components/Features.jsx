
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  MousePointer,
  Palette,
  Zap,
  Download,
  Code,
  Smartphone,
  Globe,
  Settings,
  ImageIcon,
  ExternalLink,
  CheckCircle,
} from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: ImageIcon,
      title: "Image-to-Particles Conversion",
      description:
        "Transform any image into animated particles with pixel-perfect accuracy. Supports PNG, JPG, SVG, and data URLs.",
      category: "Core",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MousePointer,
      title: "Dynamic Mouse Interactions",
      description:
        "Particles respond to mouse hover, clicks, and movement. Includes repulsion forces and vortex mode for engaging user experiences.",
      category: "Interaction",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Palette,
      title: "Visual Customization",
      description:
        "Apply color filters (grayscale, sepia, invert), hue rotation (0-360°), and choose from multiple particle shapes.",
      category: "Styling",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Framework Agnostic",
      description:
        "Works seamlessly with React, Vue, Angular, Svelte, or vanilla JavaScript. No framework dependencies required.",
      category: "Compatibility",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Settings,
      title: "Highly Configurable",
      description:
        "Fine-tune particle behavior with 12+ configuration options including gravity, noise, forces, and animation parameters.",
      category: "Customization",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Automatically adapts to container size and device dimensions. Optimized for both desktop and mobile experiences.",
      category: "Responsive",
      color: "from-teal-500 to-blue-500",
    },
    {
      icon: Download,
      title: "Image Export",
      description:
        "Save the current particle state as a PNG image. Perfect for creating unique artwork and sharing creations.",
      category: "Export",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Code,
      title: "TypeScript Support",
      description:
        "Full type definitions included for better development experience. IntelliSense support in VS Code and other editors.",
      category: "Developer",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Zap,
      title: "Zero Dependencies",
      description:
        "Lightweight pure JavaScript implementation with no external dependencies. Minimal bundle size impact.",
      category: "Performance",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  const configOptions = [
    { name: "imageSrc", description: "Source image path or data URL" },
    { name: "width/height", description: "Canvas dimensions in pixels" },
    { name: "particleGap", description: "Spacing between particles (2-10)" },
    { name: "mouseForce", description: "Mouse repulsion strength (10-100)" },
    { name: "gravity", description: "Return force to origin (0.01-0.2)" },
    { name: "noise", description: "Random particle movement (0-50)" },
    { name: "clickStrength", description: "Click interaction force (0-200)" },
    { name: "hueRotation", description: "Color hue shift in degrees (0-360)" },
    { name: "filter", description: "Color filters: none, grayscale, sepia, invert" },
    { name: "particleShape", description: "Particle shapes: square, circle, triangle" },
    { name: "vortexMode", description: "Vortex interaction on click (boolean)" },
  ]

  const useCases = [
    {
      title: "Interactive Websites",
      description: "Add engaging hover effects to hero sections, portfolios, and landing pages",
      icon: Globe,
    },
    {
      title: "Digital Art Projects",
      description: "Create unique particle-based artwork and visual experiences",
      icon: Palette,
    },
    {
      title: "Game Development",
      description: "Implement particle effects for game UI, transitions, and visual feedback",
      icon: Zap,
    },
    {
      title: "Marketing Campaigns",
      description: "Create memorable interactive advertisements and promotional content",
      icon: Sparkles,
    },
  ]

  return (
    <div className="bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container max-w-6xl mx-auto py-14 px-6">
        {/* Enhanced Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="relative group p-6">
              <Sparkles className="h-20 w-20 text-primary drop-shadow-xl group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse group-hover:bg-primary/50 transition-colors" />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 relative"
          >
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-300% drop-shadow-2xl">
              Powerful Features
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl -z-10" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto m-10 leading-relaxed"
          >
            Discover the powerful capabilities of our interactive particle effects library.
            <br />
            <span className="text-primary font-semibold">Transform images into stunning animated experiences with ease.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 m-15"
          >
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl px-8 py-4">
                <a href="https://www.npmjs.com/package/package-particlefx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <ExternalLink className="h-6 w-6" />
                  View on NPM
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary/30 hover:border-primary bg-background/80 hover:bg-primary/10 backdrop-blur-sm px-8 py-4">
                <a href="/docs" className="flex items-center gap-3">
                  <Code className="h-6 w-6" />
                  Documentation
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="lg" className="border-2 border-accent/30 hover:border-accent bg-background/80 hover:bg-accent/10 backdrop-blur-sm px-8 py-4">
                <a href="/" className="flex items-center gap-3">
                  <Sparkles className="h-6 w-6" />
                  Try Playground
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 mt-40"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="relative h-full bg-gradient-to-br from-card/80 via-card/60 to-card/40 border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 overflow-hidden group backdrop-blur-xl shadow-lg hover:shadow-2xl">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-2xl -translate-y-8 translate-x-8`} />
                    
                    <CardHeader className="relative pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <motion.div 
                          className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Icon className="h-7 w-7 text-white drop-shadow" />
                        </motion.div>
                        <Badge variant="secondary" className="text-xs px-3 py-1 bg-primary/10 border-primary/30 text-primary font-medium">
                          {feature.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 mb-2">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                        {feature.description}
                      </p>
                      
                      {/* Subtle hover indicator */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Configuration Options */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center mb-6"
            >
              <div className="p-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl">
                <Settings className="h-10 w-10 text-primary" />
              </div>
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Configuration Options
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Customize every aspect of your particle effects with our comprehensive configuration system.
              <br />
              <span className="text-primary font-semibold">Fine-tune behavior, appearance, and interactions.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {configOptions.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group"
              >
                <div className="relative flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-card/80 to-card/40 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl overflow-hidden">
                  {/* Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0 drop-shadow" />
                  </motion.div>
                  
                  <div className="relative">
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {option.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {option.description}
                    </p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center mb-6"
            >
              <div className="p-3 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl">
                <Globe className="h-10 w-10 text-accent" />
              </div>
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Perfect For Any Project
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Versatile applications across different industries and creative endeavors.
              <br />
              <span className="text-accent font-semibold">Bring your vision to life with interactive particles.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card className="relative text-center p-8 bg-gradient-to-br from-card/80 to-card/40 border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 backdrop-blur-sm shadow-lg hover:shadow-2xl overflow-hidden group">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                    
                    <div className="relative">
                      <motion.div 
                        className="mb-6 flex justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 shadow-lg">
                          <Icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />
                        </div>
                      </motion.div>
                      
                      <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {useCase.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                        {useCase.description}
                      </p>
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Enhanced Installation & Quick Start */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02, rotateX: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl mx-auto"
          >
            <Card className="relative p-12 bg-gradient-to-br from-card/90 via-card/70 to-card/50 border-2 border-primary/30 shadow-2xl backdrop-blur-xl overflow-hidden group">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl" />
              
              <div className="relative space-y-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center mb-6">
                    <motion.div
                      className="p-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Sparkles className="h-16 w-16 text-primary" />
                    </motion.div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-300%">
                      Get Started Today
                    </span>
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Install package-particlefx and start creating amazing particle effects in minutes.
                    <br />
                    <span className="text-primary font-bold">Zero configuration required!</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-r from-muted/80 to-muted/60 rounded-2xl p-8 border-2 border-primary/20 backdrop-blur-sm shadow-inner">
                    <code className="text-xl md:text-2xl font-mono text-primary font-bold tracking-wide">
                      npm install package-particlefx
                    </code>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl -z-10" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap justify-center gap-6"
                >
                  <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl px-8 py-4">
                      <a href="/" className="flex items-center gap-3">
                        <Sparkles className="h-6 w-6" />
                        Try Playground
                      </a>
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild variant="outline" size="lg" className="border-2 border-primary/30 hover:border-primary bg-background/80 hover:bg-primary/10 backdrop-blur-sm px-8 py-4">
                      <a href="/docs" className="flex items-center gap-3">
                        <Code className="h-6 w-6" />
                        View Documentation
                      </a>
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild variant="outline" size="lg" className="border-2 border-accent/30 hover:border-accent bg-background/80 hover:bg-accent/10 backdrop-blur-sm px-8 py-4">
                      <a href="https://www.npmjs.com/package/package-particlefx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                        <ExternalLink className="h-6 w-6" />
                        NPM Package
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Enhanced Stats Row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-10 border-t border-primary/20"
                >
                  <div className="text-center space-y-2">
                    <motion.div 
                      className="text-3xl font-bold text-primary"
                      whileHover={{ scale: 1.1 }}
                    >
                      0
                    </motion.div>
                    <div className="text-sm text-muted-foreground">Dependencies</div>
                  </div>
                  <div className="text-center space-y-2">
                    <motion.div 
                      className="text-3xl font-bold text-accent"
                      whileHover={{ scale: 1.1 }}
                    >
                      12+
                    </motion.div>
                    <div className="text-sm text-muted-foreground">Config Options</div>
                  </div>
                  <div className="text-center space-y-2">
                    <motion.div 
                      className="text-3xl font-bold text-primary"
                      whileHover={{ scale: 1.1 }}
                    >
                      TypeScript
                    </motion.div>
                    <div className="text-sm text-muted-foreground">Full Support</div>
                  </div>
                  <div className="text-center space-y-2">
                    <motion.div 
                      className="text-3xl font-bold text-accent"
                      whileHover={{ scale: 1.1 }}
                    >
                      All
                    </motion.div>
                    <div className="text-sm text-muted-foreground">Frameworks</div>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Features
