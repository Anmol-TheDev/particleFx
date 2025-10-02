# package-particlefx

A lightweight, framework-agnostic JavaScript library that renders interactive particle-based image hover effects using canvas. Customize particle behavior with extensive options for physics, visual effects, and user interaction. Easily integrate into React, Vue, or plain HTML projects by passing a DOM container element.

## What's New in 1.2.0

- **Responsive Units**: `width` and `height` now accept responsive units like `'100vw'`, `'80vh'`, or `'50%'`.
- **Presets**: Quickly apply stunning visual styles with pre-configured presets like `'fireworks'`, `'snow'`, `'galaxy'`, and `'rain'`.
- **New Default Image**: A vibrant, dynamically generated placeholder image is now used by default.
- **Improved Mouse Detection**: Replaced `mouseout` with `mouseleave` for more reliable event handling.

**Breaking Changes:**
- The `unit` option has been removed. Instead, specify units directly in the `width` and `height` properties (e.g., `width: '100vw'`).

## Features

-  **Image-to-Particles**: Convert any image into animated particles
-  **Dynamic Interactions**: Particles respond to mouse hover, clicks, and even a vortex mode
-  **Visual Customization**: Apply color filters (grayscale, sepia, invert), hue rotation, and choose particle shapes (square, circle, triangle)
-  **Framework Agnostic**: Works seamlessly with React, Vue, Angular, or vanilla JS
-  **Highly Configurable**: Fine-tune particle behavior, forces, and appearance
-  **Responsive**: Automatically adapts to container size
-  **Image Download**: Save the current canvas state as a PNG image
-  **TypeScript Support**: Full type definitions included
-  **Lightweight**: Zero dependencies, pure JavaScript

## Installation

```bash
npm install package-particlefx
```

## Available Presets

Choose from these stunning visual styles to get started quickly:

fireworks - Explosive, colorful particles.
snow - Gentle, falling snowflakes. ❄️
galaxy - A cosmic, swirling effect.
rain - Simulates falling rain droplets. 💧
confetti - Celebratory confetti particles. 🎉
sparkle - A magical, twinkling sparkle effect. ✨
aurora - Waving patterns like the Northern Lights. 🌌

## Quick Start

### Vanilla JavaScript
```javascript
import { createParticleCanvas } from 'package-particlefx';

const container = document.getElementById('my-container');
const particleCanvas = createParticleCanvas(container, {
  preset: 'confetti', // Use a preset for a quick start
  width: '100vw',      // Responsive width
  height: '100vh',     // Responsive height
});

// Control the animation
particleCanvas.explodeParticles();
particleCanvas.resetParticles();
particleCanvas.downloadImage('my-particle-art.png');
```

### React
```jsx
import React, { useRef, useEffect, useState } from 'react';
import { createParticleCanvas } from 'package-particlefx';

function ParticleComponent() {
  const containerRef = useRef(null);
  const particleCanvasRef = useRef(null);
  const [config, setConfig] = useState({
    preset: 'aurora',
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
      <button onClick={() => setConfig(prev => ({ ...prev, preset: 'sparkle' }))}>
        Change to Sparkle
      </button>
    </div>
  );
}

export default ParticleComponent;
```

## Configuration Options

| Option | Type | Default | Description |
|---|---|---|---|
| `preset` | 'fireworks' \| 'snow' \| 'galaxy' \| 'rain' \| 'confetti' \| 'sparkle' \| 'aurora' |  `undefined` | Applies a pre-configured set of options. |
| `imageSrc` | string | Built-in gradient | Path or data URL of the image to convert. |
| `width` | number \| string | 400 | Canvas width in pixels or a string with units (e.g., `'100vw'`). |
| `height` | number \| string | 400 | Canvas height in pixels or a string with units (e.g., `'100vh'`). |
| `particleGap` | number | 4 | Spacing between particles (lower = more particles). |
| `mouseForce` | number | 30 | Strength of mouse repulsion effect. |
| `gravity` | number | 0.08 | Force pulling particles back to origin. |
| `noise` | number | 10 | Random movement applied to particles. |
| `clickStrength` | number | 100 | Force applied when clicking on canvas. |
| `hueRotation` | number | 0 | Rotates the hue of particle colors (0-360 degrees). |
| `filter` | 'none' \| 'grayscale' \| 'sepia' \| 'invert' | 'none' | Applies a color filter to particles. |
| `particleShape` | 'square' \| 'circle' \| 'triangle' | 'square' | Shape of individual particles. |
| `vortexMode` | boolean | false | If true, clicks create a vortex effect instead of a ripple. |

## API Reference

### createParticleCanvas(container, options)

Creates a new particle canvas instance.

**Parameters:**
- `container` (Element|string): DOM element or CSS selector
- `options` (Object): Configuration options

**Returns:** ParticleCanvas instance

### ParticleCanvas Methods

#### `resetParticles()`
Resets all particles to their original positions with minimal random offset.

#### `explodeParticles()`
Applies random outward forces to all particles, creating an explosion effect.

#### `updateConfig(newOptions)`
Updates configuration options dynamically. Only changed options need to be provided.

```javascript
particleCanvas.updateConfig({
  mouseForce: 80,
  gravity: 0.12,
  particleGap: 2,
  filter: 'grayscale'
});
```

#### `downloadImage(filename?: string)`
Downloads the current canvas content as a PNG image.

**Parameters:**
- `filename` (string, optional): The name of the file to download (default: `particle-art.png`)

#### `destroy()`
Stops animation and removes the canvas from DOM. Call this for cleanup.

#### `getParticleCount()`
Returns the current number of particles.

#### `getConfig()`
Returns a copy of the current configuration.

#### `stopAnimation()` / `startAnimation()`
Controls the animation loop manually.

## Performance Tips

- **Particle Gap**: Higher values (4-8) create fewer particles and better performance.
- **Image Size**: Smaller images process faster during initialization.
- **Canvas Size**: Larger canvases require more computational power.
- **Mobile**: Consider reducing particle count on mobile devices.

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

MIT © Anmol Singh

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
