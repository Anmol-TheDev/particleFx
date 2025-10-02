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
import { Copy, Check } from "lucide-react";

// Assuming these components are in your project structure
// Since I cannot create them, I'll define placeholders for compilation
const Accordion = ({ children, ...props }) => <div {...props}>{children}</div>;
const AccordionItem = ({ children, ...props }) => <div {...props}>{children}</div>;
const AccordionTrigger = ({ children, ...props }) => <div {...props}><h3>{children}</h3></div>;
const AccordionContent = ({ children, ...props }) => <div {...props}>{children}</div>;


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
      type: "'fireworks' | 'snow' | 'galaxy' | 'rain' | 'confetti' | 'sparkle' | 'aurora'",
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

  const features = [
    "Image-to-Particles: Convert any image into animated particles",
    "Dynamic Interactions: Particles respond to mouse hover, clicks, and even a vortex mode",
    "Visual Customization: Apply color filters (grayscale, sepia, invert), hue rotation, and choose particle shapes",
    "Framework Agnostic: Works seamlessly with React, Vue, Angular, or vanilla JS",
    "Highly Configurable: Fine-tune particle behavior, forces, and appearance",
    "Responsive: Automatically adapts to container size",
    "Image Download: Save the current canvas state as a PNG image",
    "TypeScript Support: Full type definitions included",
    "Lightweight: Zero dependencies, pure JavaScript"
  ];

  const whatsNew = [
    "Responsive Units: width and height now accept responsive units like '100vw', '80vh', or '50%'",
    "Presets: Quickly apply stunning visual styles with pre-configured presets like 'fireworks', 'snow', 'galaxy', and 'rain'",
    "New Default Image: A vibrant, dynamically generated placeholder image is now used by default",
    "Improved Mouse Detection: Replaced mouseout with mouseleave for more reliable event handling"
  ];

  const implementationGuide = {
    step1: `export const presets = {
  fireworks: {
    mouseForce: 50,
    gravity: 0.1,
    noise: 15,
    // ... other options
  },
  snow: {
    // ... options
  },
  galaxy: {
    // ... options
  },
  rain: {
    // ... options
  }
};`,
    step2: `export const presets = {
  // ... existing presets (fireworks, snow, galaxy, rain)
  
  // NEW: Confetti preset
  confetti: {
    mouseForce: 25,
    gravity: 0.15,
    noise: 20,
    clickStrength: 150,
    hueRotation: 45,
    filter: 'none',
    particleShape: 'square',
    particleGap: 5,
    vortexMode: false
  },
  
  // NEW: Sparkle preset
  sparkle: {
    mouseForce: 10,
    gravity: 0.03,
    noise: 25,
    clickStrength: 80,
    hueRotation: 120,
    filter: 'none',
    particleShape: 'circle',
    particleGap: 6,
    vortexMode: false
  },
  
  // NEW: Aurora preset (Northern Lights)
  aurora: {
    mouseForce: 15,
    gravity: 0.05,
    noise: 18,
    clickStrength: 60,
    hueRotation: 180,
    filter: 'none',
    particleShape: 'circle',
    particleGap: 3,
    vortexMode: false
  }
};`,
    step3: `// Find this line:
export type PresetName = 'fireworks' | 'snow' | 'galaxy' | 'rain';

// Change it to:
export type PresetName = 'fireworks' | 'snow' | 'galaxy' | 'rain' | 'confetti' | 'sparkle' | 'aurora';`,
    step4: `// Use the new presets
const particleCanvas = createParticleCanvas(container, {
  preset: 'confetti'  // or 'sparkle' or 'aurora'
});`,
    step5_confetti: `createParticleCanvas(container, {
  preset: 'confetti',
  width: '100%',
  height: '500px'
});`,
    step5_sparkle: `createParticleCanvas(container, {
  preset: 'sparkle',
  width: '100%',
  height: '400px'
});`,
    step5_aurora: `createParticleCanvas(container, {
  preset: 'aurora',
  width: '100vw',
  height: '100vh'
});`
  };


  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-5xl mx-auto py-12 px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            package-particlefx
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A lightweight, framework-agnostic JavaScript library that renders interactive
            particle-based image hover effects using canvas. Customize particle behavior with
            extensive options for physics, visual effects, and user interaction.
          </p>
        </div>

        {/* What's New */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-3xl font-semibold">What's New in 1.2.0</h2>
            <Badge variant="default">Latest</Badge>
          </div>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {whatsNew.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-md">
                <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                  Breaking Changes:
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  The <code className="bg-amber-100 dark:bg-amber-800 px-1 rounded">unit</code> option has been removed.
                  Instead, specify units directly in the width and height properties (e.g., <code className="bg-amber-100 dark:bg-amber-800 px-1 rounded">width: '100vw'</code>).
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Features */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-3xl font-semibold">Features</h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Installation */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-3xl font-semibold">Installation</h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard("npm install package-particlefx", "install")}
                  className="absolute top-2 right-2 h-8 w-8 p-0 bg-background/80 hover:bg-background border border-border/50 hover:border-border z-10"
                >
                  {copiedStates.install ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </Button>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto pr-12">
                  <code className="text-sm font-mono">
                    npm install package-particlefx
                  </code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Start */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-3xl font-semibold">Quick Start</h2>
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
        </section>

        {/* Configuration Options */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-3xl font-semibold">Configuration Options</h2>
          </div>
          <Card>
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
        </section>

        {/* API Reference */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-3xl font-semibold">API Reference</h2>
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
        </section>

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
        <section className="mb-12">
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
        
        {/* NEW SECTION: Implementation Guide */}
        <section>
            <div className="flex items-center gap-2 mb-6">
                <h2 className="text-3xl font-semibold">Implementation Guide for New Presets</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Step 1: Locate and Edit the Presets File</AccordionTrigger>
                    <AccordionContent>
                        <p className="mb-4 text-sm text-muted-foreground">
                            Look for a file like <code>src/presets.js</code>, <code>src/config.js</code>, or the presets definition in <code>src/index.js</code>. The file probably looks something like this:
                        </p>
                        <div className="relative">
                            <Button variant="ghost" size="sm" onClick={() => copyToClipboard(implementationGuide.step1, "guide1")} className="absolute top-2 right-2 h-8 w-8 p-0 bg-background/80 hover:bg-background border border-border/50 hover:border-border z-10">
                                {copiedStates.guide1 ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                            </Button>
                            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm pr-12"><code>{implementationGuide.step1}</code></pre>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Step 2: Add Three New Presets</AccordionTrigger>
                    <AccordionContent>
                         <p className="mb-4 text-sm text-muted-foreground">Add these THREE new presets to the presets object:</p>
                        <div className="relative">
                            <Button variant="ghost" size="sm" onClick={() => copyToClipboard(implementationGuide.step2, "guide2")} className="absolute top-2 right-2 h-8 w-8 p-0 bg-background/80 hover:bg-background border border-border/50 hover:border-border z-10">
                                {copiedStates.guide2 ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                            </Button>
                            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm pr-12"><code>{implementationGuide.step2}</code></pre>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-3">
                    <AccordionTrigger>Step 3: Update TypeScript Definitions (if exists)</AccordionTrigger>
                    <AccordionContent>
                        <p className="mb-4 text-sm text-muted-foreground">Look for a file like <code>index.d.ts</code>, <code>types.d.ts</code>, or <code>src/types.ts</code>. Find the preset type definition and add the new presets:</p>
                        <div className="relative">
                            <Button variant="ghost" size="sm" onClick={() => copyToClipboard(implementationGuide.step3, "guide3")} className="absolute top-2 right-2 h-8 w-8 p-0 bg-background/80 hover:bg-background border border-border/50 hover:border-border z-10">
                                {copiedStates.guide3 ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                            </Button>
                            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm pr-12"><code>{implementationGuide.step3}</code></pre>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Step 4: Update README.md</AccordionTrigger>
                    <AccordionContent>
                        <p className="mb-4 text-sm text-muted-foreground">Find the "Available Presets" section in README.md and update it:</p>
                        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                            <code>
                                {`## Available Presets\n\nChoose from these stunning visual presets:\n\n- fireworks - Explosive, colorful particles\n- snow - Gentle falling snowflakes\n- galaxy - Cosmic, swirling effect\n- rain - Falling rain droplets\n- confetti - 🎉 Celebratory confetti particles\n- sparkle - ✨ Twinkling sparkle effect\n- aurora - 🌌 Northern lights waves`}
                            </code>
                        </pre>
                         <p className="my-4 text-sm text-muted-foreground">Example Usage:</p>
                         <div className="relative">
                            <Button variant="ghost" size="sm" onClick={() => copyToClipboard(implementationGuide.step4, "guide4")} className="absolute top-2 right-2 h-8 w-8 p-0 bg-background/80 hover:bg-background border border-border/50 hover:border-border z-10">
                                {copiedStates.guide4 ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                            </Button>
                            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm pr-12"><code>{implementationGuide.step4}</code></pre>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-5">
                    <AccordionTrigger>Step 5: Add Examples to README</AccordionTrigger>
                    <AccordionContent className="space-y-4">
                         <p className="text-sm text-muted-foreground">Add a new section with usage examples:</p>
                         <div>
                            <p className="text-sm font-semibold">Confetti Effect - Perfect for celebrations:</p>
                            <div className="relative mt-2">
                                <Button variant="ghost" size="sm" onClick={() => copyToClipboard(implementationGuide.step5_confetti, "guide5c")} className="absolute top-2 right-2 h-8 w-8 p-0 bg-background/80 hover:bg-background border border-border/50 hover:border-border z-10">
                                    {copiedStates.guide5c ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                                </Button>
                                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm pr-12"><code>{implementationGuide.step5_confetti}</code></pre>
                            </div>
                         </div>
                         <div>
                            <p className="text-sm font-semibold">Sparkle Effect - Magical twinkling:</p>
                             <div className="relative mt-2">
                                <Button variant="ghost" size="sm" onClick={() => copyToClipboard(implementationGuide.step5_sparkle, "guide5s")} className="absolute top-2 right-2 h-8 w-8 p-0 bg-background/80 hover:bg-background border border-border/50 hover:border-border z-10">
                                    {copiedStates.guide5s ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                                </Button>
                                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm pr-12"><code>{implementationGuide.step5_sparkle}</code></pre>
                            </div>
                         </div>
                          <div>
                            <p className="text-sm font-semibold">Aurora Effect - Northern lights simulation:</p>
                             <div className="relative mt-2">
                                <Button variant="ghost" size="sm" onClick={() => copyToClipboard(implementationGuide.step5_aurora, "guide5a")} className="absolute top-2 right-2 h-8 w-8 p-0 bg-background/80 hover:bg-background border border-border/50 hover:border-border z-10">
                                    {copiedStates.guide5a ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                                </Button>
                                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm pr-12"><code>{implementationGuide.step5_aurora}</code></pre>
                            </div>
                         </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>Files You Need to Modify</AccordionTrigger>
                     <AccordionContent>
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                            <li>✅ <code>src/presets.js</code> (or wherever presets are defined) - Add 3 new presets</li>
                            <li>✅ <code>index.d.ts</code> or <code>src/types.ts</code> (if exists) - Update TypeScript types</li>
                            <li>✅ <code>README.md</code> - Document the new presets with examples</li>
                        </ul>
                     </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-7">
                    <AccordionTrigger>Testing Checklist</AccordionTrigger>
                     <AccordionContent>
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                            <li>[ ] Run <code>npm run dev</code> successfully</li>
                            <li>[ ] Test each new preset in the browser</li>
                            <li>[ ] Try <code>explodeParticles()</code> with each preset</li>
                            <li>[ ] Try <code>resetParticles()</code> with each preset</li>
                            <li>[ ] Check mobile responsiveness (Chrome DevTools)</li>
                            <li>[ ] Run <code>npm run build</code> successfully</li>
                            <li>[ ] No console errors in browser</li>
                        </ul>
                     </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>


      </div>
    </div>
  );
};

export default Docs;