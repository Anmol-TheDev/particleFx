import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Copy, 
  Check, 
  Sparkles, 
  Code, 
  Settings, 
  Zap,
  Download,
  Globe,
  Palette,
  MousePointer,
  ImageIcon,
  Smartphone,
  ExternalLink,
  Book,
  Rocket,
  Star,
  Play,
  Square,
  Circle,
  Triangle,
  RotateCcw,
  RefreshCw,
  Package
} from "lucide-react";

const Docs = () => {
  const [copiedStates, setCopiedStates] = useState({});

  const copyToClipboard = (text, buttonId) => {
    navigator.clipboard.writeText(text);
    setCopiedStates(prev => ({ ...prev, [buttonId]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [buttonId]: false }));
    }, 2000);
  };

  const configOptions = [
    {
      option: "preset",
      type: "'fireworks' | 'snow' | 'galaxy' | 'rain'",
      default: "undefined",
      description: "Applies a pre-configured set of options",
    },
    {
      option: "imageSrc",
      type: "string",
      default: "Built-in gradient",
      description: "Path or data URL of the image to convert",
    },
    {
      option: "width",
      type: "number | string",
      default: "400",
      description: "Canvas width in pixels or string with units (e.g., '100vw')",
    },
    {
      option: "height",
      type: "number | string",
      default: "400",
      description: "Canvas height in pixels or string with units (e.g., '100vh')",
    },
    {
      option: "particleGap",
      type: "number",
      default: "4",
      description: "Spacing between particles (lower = more particles)",
    },
    {
      option: "mouseForce",
      type: "number",
      default: "30",
      description: "Strength of mouse repulsion effect",
    },
    {
      option: "gravity",
      type: "number",
      default: "0.08",
      description: "Force pulling particles back to origin",
    },
    {
      option: "noise",
      type: "number",
      default: "10",
      description: "Random movement applied to particles",
    },
    {
      option: "clickStrength",
      type: "number",
      default: "100",
      description: "Force applied when clicking on canvas",
    },
    {
      option: "hueRotation",
      type: "number",
      default: "0",
      description: "Rotates the hue of particle colors (0-360 degrees)",
    },
    {
      option: "filter",
      type: "'none' | 'grayscale' | 'sepia' | 'invert'",
      default: "'none'",
      description: "Applies a color filter to particles",
    },
    {
      option: "particleShape",
      type: "'square' | 'circle' | 'triangle'",
      default: "'square'",
      description: "Shape of individual particles",
    },
    {
      option: "vortexMode",
      type: "boolean",
      default: "false",
      description: "If true, clicks create a vortex effect instead of a ripple",
    },
  ];

  const apiMethods = [
    {
      name: "resetParticles()",
      description: "Resets all particles to their original positions with minimal random offset.",
    },
    {
      name: "explodeParticles()",
      description: "Applies random outward forces to all particles, creating an explosion effect.",
    },
    {
      name: "updateConfig(newOptions)",
      description: "Updates configuration options dynamically. Only changed options need to be provided.",
    },
    {
      name: "downloadImage(filename?)",
      description: "Downloads the current canvas content as a PNG image.",
    },
    {
      name: "destroy()",
      description: "Stops animation and removes the canvas from DOM. Call this for cleanup.",
    },
    {
      name: "getParticleCount()",
      description: "Returns the current number of particles.",
    },
    {
      name: "getConfig()",
      description: "Returns a copy of the current configuration.",
    },
    {
      name: "stopAnimation()",
      description: "Stops the animation loop manually.",
    },
    {
      name: "startAnimation()",
      description: "Starts the animation loop manually.",
    },
  ];



  const whatsNew = [
    "Responsive Units: width and height now accept responsive units like '100vw', '80vh', or '50%'",
    "Presets: Quickly apply stunning visual styles with pre-configured presets like 'fireworks', 'snow', 'galaxy', and 'rain'",
    "New Default Image: A vibrant, dynamically generated placeholder image is now used by default",
    "Improved Mouse Detection: Replaced mouseout with mouseleave for more reliable event handling"
  ];

  return (
    <div className="bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container max-w-6xl mx-auto py-14 px-6">
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="relative group">
              <div className="p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl shadow-lg">
                <Book className="h-16 w-16 text-primary" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto m-10">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
              Complete guide to <span className="text-primary font-bold">package-particlefx</span> - A lightweight, framework-agnostic JavaScript library for interactive particle effects.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-base px-4 py-2 bg-primary/10 border-primary/30 text-primary">
                <Package className="h-4 w-4 mr-2" />
                Zero Dependencies
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2 bg-accent/10 border-accent/30 text-accent">
                <Code className="h-4 w-4 mr-2" />
                TypeScript Support
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2 bg-green-500/10 border-green-500/30 text-green-500">
                <Globe className="h-4 w-4 mr-2" />
                Framework Agnostic
              </Badge>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg">
                <a href="/" className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Try Playground
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary/30 hover:border-primary bg-background/80 hover:bg-primary/10">
                <a href="https://www.npmjs.com/package/package-particlefx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  NPM Package
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced What's New */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl">
              <Rocket className="h-6 w-6 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold">What's New in 1.2.0</h2>
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">Latest</Badge>
          </div>
          
          <Card className="bg-gradient-to-br from-card/80 to-card/40 border-2 border-primary/20 shadow-lg backdrop-blur-sm">
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {whatsNew.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10"
                  >
                    <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-xl"
              >
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-amber-500/20 rounded-lg">
                    <Zap className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                      Breaking Changes:
                    </p>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      The <code className="bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded font-mono">unit</code> option has been removed. 
                      Instead, specify units directly in the width and height properties (e.g., <code className="bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded font-mono">width: '100vw'</code>).
                    </p>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Enhanced Features */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Key Features</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ImageIcon, title: "Image-to-Particles", desc: "Convert any image into animated particles", color: "from-blue-500 to-cyan-500" },
              { icon: MousePointer, title: "Dynamic Interactions", desc: "Particles respond to mouse hover, clicks, and vortex mode", color: "from-purple-500 to-pink-500" },
              { icon: Palette, title: "Visual Customization", desc: "Apply color filters, hue rotation, and particle shapes", color: "from-green-500 to-emerald-500" },
              { icon: Globe, title: "Framework Agnostic", desc: "Works with React, Vue, Angular, or vanilla JS", color: "from-orange-500 to-red-500" },
              { icon: Settings, title: "Highly Configurable", desc: "Fine-tune particle behavior with 12+ options", color: "from-indigo-500 to-purple-500" },
              { icon: Smartphone, title: "Responsive Design", desc: "Automatically adapts to container size", color: "from-teal-500 to-blue-500" },
              { icon: Download, title: "Image Export", desc: "Save particle state as PNG image", color: "from-pink-500 to-rose-500" },
              { icon: Code, title: "TypeScript Support", desc: "Full type definitions included", color: "from-violet-500 to-purple-500" },
              { icon: Zap, title: "Zero Dependencies", desc: "Lightweight pure JavaScript implementation", color: "from-yellow-500 to-orange-500" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-card/80 to-card/40 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 bg-gradient-to-br ${feature.color} rounded-xl shadow-lg`}>
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced Installation */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">
              <Package className="h-6 w-6 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold">Installation</h2>
          </div>
          
          <Card className="bg-gradient-to-br from-card/80 to-card/40 border-2 border-primary/20 shadow-lg backdrop-blur-sm">
            <CardContent className="pt-8">
              <div className="relative group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-3 right-3 z-10"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("npm install package-particlefx", "install")}
                    className="h-10 w-10 p-0 bg-primary/10 hover:bg-primary/20 border-2 border-primary/30 hover:border-primary/50 text-primary"
                  >
                    {copiedStates.install ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </motion.div>
                
                <div className="bg-gradient-to-r from-muted/90 to-muted/70 p-6 rounded-xl border-2 border-primary/10 group-hover:border-primary/30 transition-all duration-300">
                  <code className="text-lg md:text-xl font-mono font-bold text-primary block">
                    npm install package-particlefx
                  </code>
                </div>
                
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="font-bold text-primary text-xl">0</div>
                  <div className="text-sm text-muted-foreground">Dependencies</div>
                </div>
                <div className="p-4 bg-accent/5 rounded-lg border border-accent/10">
                  <div className="font-bold text-accent text-xl">~15KB</div>
                  <div className="text-sm text-muted-foreground">Bundle Size</div>
                </div>
                <div className="p-4 bg-green-500/5 rounded-lg border border-green-500/10">
                  <div className="font-bold text-green-500 text-xl">100%</div>
                  <div className="text-sm text-muted-foreground">TypeScript</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Enhanced Quick Start */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl">
              <Rocket className="h-6 w-6 text-purple-500" />
            </div>
            <h2 className="text-3xl font-bold">Quick Start</h2>
          </div>

          <div className="space-y-8">
            {/* Vanilla JS */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Vanilla JavaScript
                  <Badge variant="secondary">JavaScript</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(`import { createParticleCanvas } from 'package-particlefx';

const container = document.getElementById('my-container');
const particleCanvas = createParticleCanvas(container, {
  preset: 'fireworks', // Use a preset for a quick start
  width: '100vw',      // Responsive width
  height: '100vh',     // Responsive height
});

// Control the animation
particleCanvas.explodeParticles();
particleCanvas.resetParticles();
particleCanvas.downloadImage('my-particle-art.png');`, "vanilla")}
                    className="absolute top-2 right-2 h-8 w-8 p-0 bg-background/80 hover:bg-background border border-border/50 hover:border-border z-10"
                  >
                    {copiedStates.vanilla ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm pr-12">
                    <code>{`import { createParticleCanvas } from 'package-particlefx';

const container = document.getElementById('my-container');
const particleCanvas = createParticleCanvas(container, {
  preset: 'fireworks', // Use a preset for a quick start
  width: '100vw',      // Responsive width
  height: '100vh',     // Responsive height
});

// Control the animation
particleCanvas.explodeParticles();
particleCanvas.resetParticles();
particleCanvas.downloadImage('my-particle-art.png');`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* React */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  React
                  <Badge variant="secondary">React</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(`import React, { useRef, useEffect, useState } from 'react';
import { createParticleCanvas } from 'package-particlefx';

function ParticleComponent() {
  const containerRef = useRef(null);
  const particleCanvasRef = useRef(null);
  const [config, setConfig] = useState({
    preset: 'galaxy',
    width: '100%',
    height: '400px',
  });

  useEffect(() => {
    if (containerRef.current) {
      particleCanvasRef.current = createParticleCanvas(containerRef.current, config);
    }

    return () => {
      particleCanvasRef.current?.destroy();
    };
  }, [config]);

  const handleExplode = () => {
    particleCanvasRef.current?.explodeParticles();
  };

  const handleReset = () => {
    particleCanvasRef.current?.resetParticles();
  };

  const handleDownload = () => {
    particleCanvasRef.current?.downloadImage();
  };

  return (
    <div>
      <div ref={containerRef} style={{ width: '100%', height: '400px' }} />
      <button onClick={handleExplode}>Explode</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDownload}>Download</button>
      <button onClick={() => setConfig(prev => ({ ...prev, preset: 'snow' }))}>
        Change to Snow
      </button>
    </div>
  );
}

export default ParticleComponent;`, "react")}
                    className="absolute top-2 right-2 h-8 w-8 p-0 bg-background/80 hover:bg-background border border-border/50 hover:border-border z-10"
                  >
                    {copiedStates.react ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm pr-12">
                    <code>{`import React, { useRef, useEffect, useState } from 'react';
import { createParticleCanvas } from 'package-particlefx';

function ParticleComponent() {
  const containerRef = useRef(null);
  const particleCanvasRef = useRef(null);
  const [config, setConfig] = useState({
    preset: 'galaxy',
    width: '100%',
    height: '400px',
  });

  useEffect(() => {
    if (containerRef.current) {
      particleCanvasRef.current = createParticleCanvas(containerRef.current, config);
    }

    return () => {
      particleCanvasRef.current?.destroy();
    };
  }, [config]);

  const handleExplode = () => {
    particleCanvasRef.current?.explodeParticles();
  };

  const handleReset = () => {
    particleCanvasRef.current?.resetParticles();
  };

  const handleDownload = () => {
    particleCanvasRef.current?.downloadImage();
  };

  return (
    <div>
      <div ref={containerRef} style={{ width: '100%', height: '400px' }} />
      <button onClick={handleExplode}>Explode</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDownload}>Download</button>
      <button onClick={() => setConfig(prev => ({ ...prev, preset: 'snow' }))}>
        Change to Snow
      </button>
    </div>
  );
}

export default ParticleComponent;`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Enhanced Configuration Options */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl">
              <Settings className="h-6 w-6 text-blue-500" />
            </div>
            <h2 className="text-3xl font-bold">Configuration Options</h2>
          </div>
          
          <Card className="bg-gradient-to-br from-card/80 to-card/40 border-2 border-primary/20 shadow-lg backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Option</th>
                      <th className="text-left p-4 font-semibold">Type</th>
                      <th className="text-left p-4 font-semibold">Default</th>
                      <th className="text-left p-4 font-semibold">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {configOptions.map((item, index) => (
                      <tr key={index} className="border-b last:border-b-0">
                        <td className="p-4 font-mono text-sm">{item.option}</td>
                        <td className="p-4 font-mono text-sm text-muted-foreground">
                          {item.type}
                        </td>
                        <td className="p-4 font-mono text-sm">
                          {item.default}
                        </td>
                        <td className="p-4 text-sm">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Enhanced API Reference */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl">
              <Code className="h-6 w-6 text-emerald-500" />
            </div>
            <h2 className="text-3xl font-bold">API Reference</h2>
          </div>

          <div className="space-y-6">
            {/* createParticleCanvas */}
            <Card>
              <CardHeader>
                <CardTitle>createParticleCanvas(container, options)</CardTitle>
                <CardDescription>
                  Creates a new particle canvas instance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <strong className="text-sm">Parameters:</strong>
                    <ul className="text-sm text-muted-foreground ml-4 mt-1">
                      <li>• <code>container</code> (Element|string): DOM element or CSS selector</li>
                      <li>• <code>options</code> (Object): Configuration options</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-sm">Returns:</strong>
                    <span className="text-sm text-muted-foreground ml-2">ParticleCanvas instance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Methods */}
            <Card>
              <CardHeader>
                <CardTitle>ParticleCanvas Methods</CardTitle>
                <CardDescription>
                  Available methods for controlling particle behavior
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {apiMethods.map((method, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="font-mono text-xs">
                        {method.name}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground ml-2">
                      {method.description}
                    </p>
                    {index < apiMethods.length - 1 && (
                      <Separator className="mt-4" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Example Usage */}
            <Card>
              <CardHeader>
                <CardTitle>Example: updateConfig()</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(`particleCanvas.updateConfig({
  mouseForce: 80,
  gravity: 0.12,
  particleGap: 2,
  filter: 'grayscale'
});`, "updateConfig")}
                    className="absolute top-2 right-2 h-8 w-8 p-0 bg-background/80 hover:bg-background border border-border/50 hover:border-border z-10"
                  >
                    {copiedStates.updateConfig ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm pr-12">
                    <code>{`particleCanvas.updateConfig({
  mouseForce: 80,
  gravity: 0.12,
  particleGap: 2,
  filter: 'grayscale'
});`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Performance Tips */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-3xl font-semibold">Performance Tips</h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary-foreground rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-sm">Particle Gap:</strong>
                    <span className="text-sm text-muted-foreground ml-2">
                      Higher values (4-8) create fewer particles and better performance
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary-foreground rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-sm">Image Size:</strong>
                    <span className="text-sm text-muted-foreground ml-2">
                      Smaller images process faster during initialization
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary-foreground rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-sm">Canvas Size:</strong>
                    <span className="text-sm text-muted-foreground ml-2">
                      Larger canvases require more computational power
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary-foreground rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-sm">Mobile:</strong>
                    <span className="text-sm text-muted-foreground ml-2">
                      Consider reducing particle count on mobile devices
                    </span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Browser Support */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-3xl font-semibold">Browser Support</h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center border rounded-lg p-4">
                  <div className="font-semibold text-sm mb-1">Chrome</div>
                  <div className="text-xs text-muted-foreground">Version 60+</div>
                </div>
                <div className="text-center border rounded-lg p-4">
                  <div className="font-semibold text-sm mb-1">Firefox</div>
                  <div className="text-xs text-muted-foreground">Version 55+</div>
                </div>
                <div className="text-center border rounded-lg p-4">
                  <div className="font-semibold text-sm mb-1">Safari</div>
                  <div className="text-xs text-muted-foreground">Version 12+</div>
                </div>
                <div className="text-center border rounded-lg p-4">
                  <div className="font-semibold text-sm mb-1">Edge</div>
                  <div className="text-xs text-muted-foreground">Version 79+</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Docs;