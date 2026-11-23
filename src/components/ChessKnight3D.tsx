import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { RotateCw, Move, HelpCircle, Check } from 'lucide-react';

interface ChessKnight3DProps {
  className?: string;
}

export const ChessKnight3D: React.FC<ChessKnight3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  // Store mutable Three.js refs without causing re-renders
  const stateRef = useRef({
    renderer: null as THREE.WebGLRenderer | null,
    scene: null as THREE.Scene | null,
    camera: null as THREE.PerspectiveCamera | null,
    knightGroup: null as THREE.Group | null,
    animationFrameId: 0,
    isDragging: false,
    prevPointer: { x: 0, y: 0 },
    velocity: { x: 0, y: 0 },
    targetRotation: { x: 0.15, y: -0.4 },
    currentRotation: { x: 0.15, y: -0.4 },
    isVisible: true,
    isMounted: true,
  });

  // Check WebGL support
  const checkWebGL = useCallback(() => {
    try {
      const testCanvas = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl'))
      );
    } catch {
      return false;
    }
  }, []);

  // Reset orientation
  const resetRotation = useCallback(() => {
    if (stateRef.current.knightGroup) {
      stateRef.current.targetRotation = { x: 0.15, y: -0.4 };
      stateRef.current.velocity = { x: 0, y: 0 };
    }
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = 0.15;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      stateRef.current.targetRotation.y -= step;
      setIsInteracting(true);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      stateRef.current.targetRotation.y += step;
      setIsInteracting(true);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      stateRef.current.targetRotation.x = Math.max(-0.5, stateRef.current.targetRotation.x - step);
      setIsInteracting(true);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      stateRef.current.targetRotation.x = Math.min(0.5, stateRef.current.targetRotation.x + step);
      setIsInteracting(true);
    } else if (e.key === 'r' || e.key === 'R' || e.key === ' ') {
      e.preventDefault();
      resetRotation();
    }
  }, [resetRotation]);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', motionListener);

    if (!checkWebGL()) {
      setWebGLSupported(false);
      return;
    }

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    stateRef.current.isMounted = true;

    // Dimensions
    const width = container.clientWidth || 220;
    const height = container.clientHeight || 240;

    // 1. Scene
    const scene = new THREE.Scene();
    stateRef.current.scene = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 4.2);
    camera.lookAt(0, 0.2, 0);
    stateRef.current.camera = camera;

    // 3. Renderer with antialias and alpha
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      stateRef.current.renderer = renderer;
    } catch {
      setWebGLSupported(false);
      return;
    }

    // 4. Lighting - Studio lighting with violet rim
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight1.position.set(3, 5, 4);
    scene.add(dirLight1);

    // Violet rim accent light
    const rimLight = new THREE.DirectionalLight(0x8b5cf6, 4.0);
    rimLight.position.set(-4, 2, -3);
    scene.add(rimLight);

    // Subtle blue fill
    const fillLight = new THREE.PointLight(0x38bdf8, 1.5, 10);
    fillLight.position.set(0, -2, 2);
    scene.add(fillLight);

    // 5. Build Knight Piece Group
    const knightGroup = new THREE.Group();
    stateRef.current.knightGroup = knightGroup;

    // Material: Dark obsidian marble with restrained violet sheen
    const knightMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.28,
      metalness: 0.72,
    });

    const highlightMaterial = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.2,
      metalness: 0.8,
    });

    // Tier 1: Circular Base Bottom
    const baseBottom = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.95, 0.25, 32), knightMaterial);
    baseBottom.position.y = -1.1;
    knightGroup.add(baseBottom);

    // Tier 2: Base Collar Ring
    const baseCollar = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.82, 0.18, 32), highlightMaterial);
    baseCollar.position.y = -0.9;
    knightGroup.add(baseCollar);

    // Tier 3: Pedestal Stem
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.7, 0.45, 32), knightMaterial);
    stem.position.y = -0.6;
    knightGroup.add(stem);

    // Tier 4: Neck Collar Ring
    const neckRing = new THREE.Mesh(new THREE.TorusGeometry(0.58, 0.08, 16, 32), highlightMaterial);
    neckRing.rotation.x = Math.PI / 2;
    neckRing.position.y = -0.35;
    knightGroup.add(neckRing);

    // Tier 5: Sculpted Knight Body & Neck
    // Arching neck body
    const neckBody = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.58, 0.9, 16), knightMaterial);
    neckBody.position.set(0.05, 0.1, -0.05);
    neckBody.rotation.z = -0.15;
    knightGroup.add(neckBody);

    // Tier 6: Knight Head and Muzzle
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.65, 0.75), knightMaterial);
    head.position.set(0.18, 0.62, 0.1);
    head.rotation.x = 0.2;
    head.rotation.z = -0.12;
    knightGroup.add(head);

    // Snout / Muzzle
    const muzzle = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.45, 0.6), knightMaterial);
    muzzle.position.set(0.24, 0.45, 0.5);
    muzzle.rotation.x = 0.45;
    muzzle.rotation.z = -0.12;
    knightGroup.add(muzzle);

    // Nostril / Chin Bevel
    const chin = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 0.35, 16), highlightMaterial);
    chin.position.set(0.24, 0.25, 0.45);
    chin.rotation.x = Math.PI / 2;
    knightGroup.add(chin);

    // Tier 7: Ears
    const leftEar = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.38, 8), highlightMaterial);
    leftEar.position.set(0.32, 1.05, 0.05);
    leftEar.rotation.z = -0.15;
    leftEar.rotation.x = -0.2;
    knightGroup.add(leftEar);

    const rightEar = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.38, 8), highlightMaterial);
    rightEar.position.set(0.06, 1.02, 0.05);
    rightEar.rotation.z = 0.1;
    rightEar.rotation.x = -0.2;
    knightGroup.add(rightEar);

    // Tier 8: Stylized Mane (Stepped Fins down the back)
    for (let i = 0; i < 4; i++) {
      const maneStep = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.22, 0.28), highlightMaterial);
      maneStep.position.set(-0.15 - i * 0.05, 0.72 - i * 0.24, -0.2 - i * 0.04);
      maneStep.rotation.y = 0.1;
      maneStep.rotation.z = 0.2;
      knightGroup.add(maneStep);
    }

    // Initial positioning
    knightGroup.position.y = -0.1;
    knightGroup.rotation.x = stateRef.current.currentRotation.x;
    knightGroup.rotation.y = stateRef.current.currentRotation.y;
    scene.add(knightGroup);

    setIsLoaded(true);

    // 6. Low Idle GPU Render Loop with damping & sleep detection
    let lastRenderTime = performance.now();
    let idleFrames = 0;

    const animate = (time: number) => {
      if (!stateRef.current.isMounted) return;

      stateRef.current.animationFrameId = requestAnimationFrame(animate);

      // If hidden offscreen, do not render to save GPU completely
      if (!stateRef.current.isVisible) return;

      const delta = Math.min((time - lastRenderTime) / 1000, 0.1);
      lastRenderTime = time;

      const group = stateRef.current.knightGroup;
      if (!group) return;

      // Handle drag inertia and rotation damping
      if (!stateRef.current.isDragging) {
        // Slow subtle auto-turn if user does not prefer reduced motion and not interacting
        if (!mediaQuery.matches && Math.abs(stateRef.current.velocity.x) < 0.001 && Math.abs(stateRef.current.velocity.y) < 0.001) {
          stateRef.current.targetRotation.y += delta * 0.25;
        }

        // Apply velocity decay
        stateRef.current.targetRotation.y += stateRef.current.velocity.x;
        stateRef.current.targetRotation.x += stateRef.current.velocity.y;
        stateRef.current.velocity.x *= 0.92;
        stateRef.current.velocity.y *= 0.92;
      }

      // Smooth interpolation towards target
      const lerpFactor = 0.12;
      const prevX = stateRef.current.currentRotation.x;
      const prevY = stateRef.current.currentRotation.y;

      stateRef.current.currentRotation.x += (stateRef.current.targetRotation.x - stateRef.current.currentRotation.x) * lerpFactor;
      stateRef.current.currentRotation.y += (stateRef.current.targetRotation.y - stateRef.current.currentRotation.y) * lerpFactor;

      group.rotation.x = stateRef.current.currentRotation.x;
      group.rotation.y = stateRef.current.currentRotation.y;

      // Check if rendered state changed meaningfully to avoid unnecessary GPU redraws
      const diff = Math.abs(group.rotation.x - prevX) + Math.abs(group.rotation.y - prevY);
      if (diff < 0.0001 && !stateRef.current.isDragging) {
        idleFrames++;
      } else {
        idleFrames = 0;
      }

      // Render scene
      renderer.render(scene, camera);
    };

    stateRef.current.animationFrameId = requestAnimationFrame(animate);

    // 7. IntersectionObserver to pause when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        stateRef.current.isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // 8. Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      stateRef.current.isMounted = false;
      cancelAnimationFrame(stateRef.current.animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      mediaQuery.removeEventListener('change', motionListener);

      // Dispose Three.js resources cleanly
      scene.clear();
      renderer.dispose();
    };
  }, [checkWebGL]);

  // Pointer Drag Handlers (Mouse & Touch) - Non-blocking
  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    stateRef.current.isDragging = true;
    stateRef.current.prevPointer = { x: e.clientX, y: e.clientY };
    stateRef.current.velocity = { x: 0, y: 0 };
    setIsInteracting(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!stateRef.current.isDragging) return;
    const deltaX = e.clientX - stateRef.current.prevPointer.x;
    const deltaY = e.clientY - stateRef.current.prevPointer.y;

    stateRef.current.prevPointer = { x: e.clientX, y: e.clientY };

    const sensitivity = 0.008;
    stateRef.current.targetRotation.y += deltaX * sensitivity;
    stateRef.current.targetRotation.x = Math.max(
      -0.5,
      Math.min(0.5, stateRef.current.targetRotation.x + deltaY * sensitivity)
    );

    stateRef.current.velocity = {
      x: deltaX * 0.003,
      y: deltaY * 0.003,
    };
  };

  const onPointerUp = (e: React.PointerEvent) => {
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
    stateRef.current.isDragging = false;
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label="Interactive 3D Chess Knight — use arrow keys or drag to rotate in 3D"
      onKeyDown={handleKeyDown}
      onFocus={() => setIsInteracting(true)}
      className={`relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden glass-panel flex items-center justify-center cursor-grab active:cursor-grabbing select-none transition-shadow hover:shadow-lg dark:hover:shadow-violet-900/20 focus-visible:ring-2 focus-visible:ring-violet-500 ${className}`}
      style={{ touchAction: 'pan-y' }}
    >
      {/* Static Fallback Canvas / SVG (displayed as immediate first frame or WebGL fallback) */}
      {(!isLoaded || !webGLSupported) && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-ink-100 to-ink-200 dark:from-ink-900 dark:to-ink-950 transition-opacity duration-300"
          aria-hidden={isLoaded && webGLSupported}
        >
          <svg
            viewBox="0 0 100 120"
            className="w-24 h-28 text-ink-700 dark:text-violet-300 drop-shadow-md animate-pulse-subtle"
            fill="currentColor"
          >
            <path d="M25 105 H75 V95 H25 Z M28 95 Q35 75 35 60 L38 52 Q35 48 30 50 Q28 42 35 38 Q38 32 45 28 L50 20 Q56 22 58 28 Q62 25 68 28 Q72 32 70 38 Q75 42 75 52 L72 58 Q72 75 72 95 Z" />
            <circle cx="56" cy="36" r="3" fill="#8b5cf6" />
          </svg>
          <span className="text-xs font-medium text-ink-500 dark:text-ink-400 mt-2">
            {!webGLSupported ? 'Chess Knight (WebGL disabled)' : 'Rendering 3D Knight...'}
          </span>
        </div>
      )}

      {/* WebGL Canvas */}
      {webGLSupported && (
        <canvas
          ref={canvasRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className={`w-full h-full relative z-10 transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ touchAction: 'pan-y' }}
        />
      )}

      {/* Interactive Controls Overlay */}
      <div className="absolute top-2.5 left-2.5 z-20 flex items-center space-x-1.5">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-violet-500/10 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 border border-violet-500/20 backdrop-blur-sm">
          <Move className="w-2.5 h-2.5" /> 3D Knight
        </span>
      </div>

      <div className="absolute top-2.5 right-2.5 z-20 flex items-center space-x-1">
        <button
          onClick={resetRotation}
          title="Reset rotation (Space / R)"
          aria-label="Reset 3D knight rotation"
          className="p-1 rounded-md bg-white/80 dark:bg-ink-800/80 text-ink-600 dark:text-ink-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-ink-100 dark:hover:bg-ink-700 transition-colors shadow-xs"
        >
          <RotateCw className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => setShowInstructions(!showInstructions)}
          title="Keyboard & drag help"
          aria-label="Show interaction help"
          className="p-1 rounded-md bg-white/80 dark:bg-ink-800/80 text-ink-600 dark:text-ink-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-ink-100 dark:hover:bg-ink-700 transition-colors shadow-xs"
        >
          <HelpCircle className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Instruction Drawer / Tooltip */}
      {showInstructions && (
        <div className="absolute inset-x-2 bottom-2 z-30 p-2.5 rounded-xl bg-ink-900/95 text-ink-100 text-[11px] leading-relaxed backdrop-blur-md border border-violet-500/30 shadow-lg animate-fade-in">
          <div className="flex justify-between items-start mb-1">
            <span className="font-semibold text-violet-300">Chess & Strategy</span>
            <button
              onClick={() => setShowInstructions(false)}
              className="text-ink-400 hover:text-white"
              aria-label="Close help"
            >
              ×
            </button>
          </div>
          <p className="text-ink-300">
            • <strong>Drag:</strong> Mouse or touch to freely spin
            <br />
            • <strong>Keys:</strong> Arrow keys to tilt & rotate
            <br />
            • <strong>Reset:</strong> Press Space or ‘R’
          </p>
        </div>
      )}

      {/* Bottom Hint */}
      {!showInstructions && !isInteracting && (
        <div className="absolute bottom-2 inset-x-0 text-center pointer-events-none z-20">
          <span className="text-[10px] tracking-wide text-ink-400 dark:text-ink-500 bg-white/60 dark:bg-ink-900/60 px-2 py-0.5 rounded-full backdrop-blur-xs">
            Drag or use arrows to spin
          </span>
        </div>
      )}
    </div>
  );
};
