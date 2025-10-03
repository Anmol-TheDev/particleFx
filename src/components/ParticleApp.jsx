'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas';
import ParticleControls from './ParticleControl';
import MobileBottomSheet from './MobileBottomSheet';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Sparkles,
  Zap,
  MousePointer,
  Settings,
  ExternalLink,
  Code,
  Github,
  Star,
} from 'lucide-react';
import CodeTabs from './CodeTabs';

const ParticleApp = () => {
  // Default configuration
  const [config, setConfig] = useState({
    particleGap: 4,
    mouseForce: 45,
    gravity: 0.08,
    noise: 10,
    clickStrength: 100,
    particleShape: 'square',
    hueRotation: 0,
    vortexMode: false,
  });

  const controlSections = [
    {
      title: 'Physics',
      icon: Settings,
      controls: [
        {
          key: 'particleGap',
          label: 'Particle Gap',
          min: 2,
          max: 10,
          step: 1,
          description: 'Spacing between particles',
        },
        {
          key: 'gravity',
          label: 'Gravity',
          min: 0.01,
          max: 0.2,
          step: 0.01,
          description: 'Return force strength',
        },
        {
          key: 'noise',
          label: 'Noise',
          min: 0,
          max: 50,
          step: 1,
          description: 'Random movement',
        },
      ],
    },
    {
      title: 'Interaction',
      icon: MousePointer,
      controls: [
        {
          key: 'mouseForce',
          label: 'Mouse Force',
          min: 10,
          max: 100,
          step: 1,
          description: 'Mouse repulsion strength',
        },
        {
          key: 'clickStrength',
          label: 'Click Power',
          min: 0,
          max: 200,
          step: 1,
          description: 'Click interaction force',
        },
      ],
    },
  ];

  // Default image URL
  const [imageUrl, setImageUrl] = useState('favicon_io/img.png');

  // Triggers for actions
  const [resetTrigger, setResetTrigger] = useState(0);
  const [explodeTrigger, setExplodeTrigger] = useState(0);

  // Particle system info
  const [particleInfo, setParticleInfo] = useState({
    particleCount: 0,
    speed: 1,
    gravityFactor: 0.92,
  });

  const [perfStats, setPerfStats] = useState({
    fps: 0,
    particleCount: 0,
    memoryMB: null,
    warnings: [],
  });

  // Handlers
  const handleConfigChange = useCallback((newConfig) => {
    setConfig(newConfig);
  }, []);

  const handleReset = useCallback(() => {
    setResetTrigger((prev) => prev + 1);
  }, []);

  const handleExplode = useCallback(() => {
    setExplodeTrigger((prev) => prev + 1);
  }, []);

  const handleRandomize = () => {
    const newConfig = { ...config };

    controlSections.forEach((section) => {
      section.controls.forEach((ctrl) => {
        const rand = ctrl.min + Math.random() * (ctrl.max - ctrl.min);
        const steps = Math.round((rand - ctrl.min) / ctrl.step);
        newConfig[ctrl.key] = +(ctrl.min + steps * ctrl.step).toFixed(2); // 2 decimals
      });
    });

    setConfig(newConfig);
    setResetTrigger((prev) => prev + 1);
  };

  const handleImageLoad = useCallback((newImageUrl) => {
    setImageUrl(newImageUrl);
  }, []);

  const handleParticlesInit = useCallback((info) => {
    setParticleInfo(info);
  }, []);

  return (
    <div className="bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container max-w-6xl mx-auto py-16 px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Advanced Animated Background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Floating Particles - Fixed with persistent animations */}
            <div
              className="absolute top-10 left-10 w-2 h-2 bg-primary/80 rounded-full animate-bounce opacity-60"
              style={{
                animationDelay: '0s',
                animationDuration: '3s',
                animationIterationCount: 'infinite',
              }}
            />
            <div
              className="absolute top-20 right-20 w-1 h-1 bg-accent/70 rounded-full animate-bounce opacity-50"
              style={{
                animationDelay: '0.5s',
                animationDuration: '4s',
                animationIterationCount: 'infinite',
              }}
            />
            <div
              className="absolute bottom-32 left-16 w-3 h-3 bg-primary/60 rounded-full animate-bounce opacity-40"
              style={{
                animationDelay: '1s',
                animationDuration: '5s',
                animationIterationCount: 'infinite',
              }}
            />
            <div
              className="absolute top-40 left-1/3 w-1.5 h-1.5 bg-accent/70 rounded-full animate-bounce opacity-50"
              style={{
                animationDelay: '1.5s',
                animationDuration: '3.5s',
                animationIterationCount: 'infinite',
              }}
            />
            <div
              className="absolute bottom-20 right-1/3 w-2.5 h-2.5 bg-primary/50 rounded-full animate-bounce opacity-45"
              style={{
                animationDelay: '2s',
                animationDuration: '4.5s',
                animationIterationCount: 'infinite',
              }}
            />
            <div
              className="absolute top-16 left-2/3 w-1 h-1 bg-accent/80 rounded-full animate-bounce opacity-55"
              style={{
                animationDelay: '2.5s',
                animationDuration: '3.2s',
                animationIterationCount: 'infinite',
              }}
            />

            {/* Animated Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-accent/20 to-primary/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            <div
              className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-primary/15 to-accent/15 rounded-full blur-2xl animate-pulse transform -translate-x-1/2 -translate-y-1/2"
              style={{ animationDelay: '2s' }}
            />

            {/* Geometric Shapes - Fixed with persistent animations */}
            <div
              className="absolute top-32 right-32 w-8 h-8 border-2 border-primary/25 rotate-45 animate-spin opacity-40"
              style={{ animationDuration: '20s', animationIterationCount: 'infinite' }}
            />
            <div
              className="absolute bottom-40 left-40 w-6 h-6 border border-accent/30 rounded-full animate-ping opacity-30"
              style={{ animationDelay: '1s', animationIterationCount: 'infinite' }}
            />
            <div
              className="absolute top-52 left-52 w-4 h-4 bg-primary/15 transform rotate-45 animate-pulse opacity-35"
              style={{ animationIterationCount: 'infinite' }}
            />

            {/* Flowing Lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M 0,100 Q 50,50 100,80 T 200,60"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
              />
              <path
                d="M 200,20 Q 250,60 300,40 T 400,50"
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: '1s' }}
              />
            </svg>
          </div>

          <div className="space-y- py-3 ">
            {/* Logo and Title - Redesigned with Enhanced Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring', bounce: 0.4 }}
              className="relative"
            >
              <div className="flex items-center justify-center space-x-4 mb-8">
                <motion.div 
                  className="relative group p-4"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
                  >
                    <Sparkles className="h-16 w-16 lg:h-20 lg:w-20 text-primary drop-shadow-lg" />
                  </motion.div>
                  <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse group-hover:bg-primary/40 transition-colors" />
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />

                  {/* Additional magical sparkles around the main icon */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-3 h-3 bg-accent rounded-full"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0,
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary rounded-full"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.7,
                    }}
                  />
                  <motion.div
                    className="absolute top-0 -left-3 w-1.5 h-1.5 bg-accent rounded-full"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1.4,
                    }}
                  />
                </motion.div>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black relative mb-5">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-300% drop-shadow-2xl">
                  ParticleFX
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl -z-10" />
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground font-mono tracking-wider"
              >
                <span className="bg-gradient-to-r from-muted-foreground to-primary/80 bg-clip-text text-transparent mb-5">
                  package-particlefx playground
                </span>
              </motion.p>
            </motion.div>

            {/* Enhanced Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="max-w-4xl mx-auto mt-4"
            >
              <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed">
                Interactive playground for{' '}
                <motion.a
                  href="https://www.npmjs.com/package/package-particlefx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-primary hover:text-accent transition-all duration-300 font-bold underline decoration-primary/30 hover:decoration-accent/70 decoration-2 underline-offset-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  package-particlefx
                  <motion.div
                    className="absolute -inset-1 bg-primary/10 rounded blur-sm -z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>{' '}
                — Transform images into stunning particle effects with real-time customization and
                interactive controls.
              </p>
            </motion.div>

            {/* Enhanced Quick Actions */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto m-7"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a
                    href="https://github.com/Anmol-TheDev/package-particleFx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3"
                  >
                    <Github className="h-5 w-5" />
                    <Star className="h-5 w-5" />
                    Star on GitHub
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary/30 hover:border-primary bg-background/80 hover:bg-primary/10 backdrop-blur-sm"
                >
                  <a
                    href="https://www.npmjs.com/package/package-particlefx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3"
                  >
                    <ExternalLink className="h-5 w-5" />
                    NPM Package
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-accent/30 hover:border-accent bg-background/80 hover:bg-accent/10 backdrop-blur-sm"
                >
                  <a href="/docs" className="flex items-center gap-2 px-6 py-3">
                    <Code className="h-5 w-5" />
                    Documentation
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary/30 hover:border-primary bg-background/80 hover:bg-primary/10 backdrop-blur-sm"
                >
                  <a href="/features" className="flex items-center gap-2 px-6 py-3">
                    <Sparkles className="h-5 w-5" />
                    Features
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Stats */}
          {particleInfo.particleCount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-base bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-2 border-primary/30 shadow-lg backdrop-blur-sm"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  {particleInfo.particleCount.toLocaleString()} Particles
                </Badge>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-base bg-gradient-to-r from-accent/20 to-accent/10 text-accent border-2 border-accent/30 shadow-lg backdrop-blur-sm"
                >
                  <MousePointer className="h-5 w-5 mr-2" />
                  Speed: {particleInfo.speed.toFixed(2)}x
                </Badge>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* Enhanced Main Playground Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {/* Canvas Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateX: 2 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Card className="relative p-6 bg-gradient-to-br from-card/80 via-card/60 to-card/40 border-2 border-primary/30 shadow-2xl backdrop-blur-xl h-full overflow-hidden group">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl -translate-y-16 translate-x-16" />

                <div className="relative space-y-6">
                  <div className="flex items-center justify-between">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-2">
                        Interactive Canvas
                      </h2>
                      <p className="text-base text-muted-foreground flex items-center gap-2">
                        <MousePointer className="h-4 w-4 text-primary" />
                        Hover to attract • Click for ripples • Drag to interact
                      </p>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Badge
                        variant="outline"
                        className="text-sm px-3 py-1 bg-primary/10 border-primary/30 text-primary"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                        Live Preview
                      </Badge>
                    </motion.div>
                  </div>

                  {perfStats && (
                    <div className="mt-2 px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-background/80 to-muted/80 backdrop-blur-sm border border-border shadow-lg">
                      <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs font-mono">
                        {/* FPS */}
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              perfStats.fps >= 50
                                ? 'bg-green-500 animate-pulse'
                                : perfStats.fps >= 30
                                  ? 'bg-yellow-500'
                                  : 'bg-destructive animate-pulse'
                            }`}
                          />
                          <span className="text-muted-foreground hidden sm:inline">FPS</span>
                          <span
                            className={`font-semibold ${
                              perfStats.fps >= 50
                                ? 'text-green-500'
                                : perfStats.fps >= 30
                                  ? 'text-yellow-500'
                                  : 'text-destructive'
                            }`}
                          >
                            {perfStats.fps}
                            <span className="sm:hidden text-muted-foreground text-[10px] ml-0.5">
                              fps
                            </span>
                          </span>
                        </div>

                        <div className="hidden sm:block w-px h-4 bg-border" />

                        {/* Particles */}
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <svg
                            className="w-3 h-3 text-primary"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <circle cx="10" cy="10" r="2" />
                            <circle cx="4" cy="6" r="1.5" />
                            <circle cx="16" cy="6" r="1.5" />
                            <circle cx="4" cy="14" r="1.5" />
                            <circle cx="16" cy="14" r="1.5" />
                          </svg>
                          <span className="text-foreground">
                            {perfStats.particleCount.toLocaleString()}
                          </span>
                          <span className="sm:hidden text-muted-foreground text-[10px]">p</span>
                        </div>

                        <div className="hidden sm:block w-px h-4 bg-border" />

                        {/* Memory */}
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <svg
                            className="w-3 h-3 text-accent-foreground"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
                            <path d="M9 9h6v6H9z" strokeWidth="2" />
                          </svg>
                          <span className="text-foreground">{perfStats.memoryMB ?? 'n/a'}</span>
                          <span className="text-muted-foreground text-[10px]">MB</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <motion.div
                    className="flex justify-center relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="relative">
                      <ParticleCanvas
                        config={config}
                        imageUrl={imageUrl}
                        resetTrigger={resetTrigger}
                        explodeTrigger={explodeTrigger}
                        onParticlesInit={handleParticlesInit}
                        onPerfStats={setPerfStats}
                      />
                      {/* Canvas Border Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg blur-xl -z-10 opacity-50" />
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Enhanced Controls Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-1"
          >
            {/* Desktop Controls - Enhanced */}
            <div className="hidden lg:block h-full">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <ParticleControls
                  config={config}
                  onConfigChange={handleConfigChange}
                  onReset={handleReset}
                  onExplode={handleExplode}
                  onRandomize={handleRandomize}
                  onImageLoad={handleImageLoad}
                  onClose={() => {}}
                />
              </motion.div>
            </div>

            {/* Mobile Bottom Sheet - Enhanced */}
            <div className="lg:hidden">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <MobileBottomSheet
                  config={config}
                  onConfigChange={handleConfigChange}
                  onReset={handleReset}
                  onExplode={handleExplode}
                  onRandomize={handleRandomize}
                  onImageLoad={handleImageLoad}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Installation Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring', bounce: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.02, rotateX: 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Card className="relative p-10 bg-gradient-to-br from-card/90 via-card/70 to-card/50 border-2 border-primary/20 shadow-2xl backdrop-blur-xl overflow-hidden group">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl" />

              <div className="relative text-center space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center mb-6">
                    <motion.div
                      className="p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Code className="h-12 w-12 text-primary" />
                    </motion.div>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      Ready to Use package-particlefx?
                    </span>
                  </h2>

                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Install the package and start creating amazing particle effects in your
                    projects.
                    <br />
                    <span className="text-primary font-semibold">
                      Zero dependencies, maximum impact.
                    </span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mx-auto w-full max-w-2xl"
                >
                  <CodeTabs />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap justify-center gap-6"
                >
                  <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl px-8 py-4"
                    >
                      <a href="/docs" className="flex items-center gap-3">
                        <Code className="h-6 w-6" />
                        Get Started
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-2 border-primary/30 hover:border-primary bg-background/80 hover:bg-primary/10 backdrop-blur-sm px-8 py-4"
                    >
                      <a
                        href="https://www.npmjs.com/package/package-particlefx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <ExternalLink className="h-6 w-6" />
                        View on NPM
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-2 border-accent/30 hover:border-accent bg-background/80 hover:bg-accent/10 backdrop-blur-sm px-8 py-4"
                    >
                      <a
                        href="https://github.com/Anmol-TheDev/package-particleFx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <Github className="h-6 w-6" />
                        GitHub Repository
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-primary/20"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">0</div>
                    <div className="text-sm text-muted-foreground">Dependencies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-2">TypeScript</div>
                    <div className="text-sm text-muted-foreground">Full Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">
                      React + Vue + Vanilla
                    </div>
                    <div className="text-sm text-muted-foreground">Framework Support</div>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ParticleApp;
