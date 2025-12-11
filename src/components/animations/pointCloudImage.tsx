import { useRef, useEffect } from 'react';

type Particle = {
  x: number;
  y: number;
  color: string;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
};

const EASE = 1;
const FRICTION = 0.92;
const FORCE_MULTIPLIER = 12;

type Props = {
  src: string;
  particleSize?: number;
  particleStep?: number;
  mouseRadius?: number;
};

export default function PointCloudImage({
  src,
  particleSize = 4,
  particleStep = 6,
  mouseRadius = 8000,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -1000, y: -1000, radius: mouseRadius });
  const animationId = useRef<number>(0);
  const loadedImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = parentRef.current;
    if (!canvas || !parent) return;

    // keep mouse radius updated if prop changes
    mouse.current.radius = mouseRadius;

    const ctx = canvas.getContext('2d', { 
      willReadFrequently: false,
    });
    if (!ctx) return;

    const generateParticles = () => {
      const img = loadedImageRef.current;
      if (!img) return;

      if (canvas.width === 0 || canvas.height === 0) return;

      // Draw image to temp canvas
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext('2d')!;
      
      // Cover mode
      const imgAspect = img.width / img.height;
      const canvasAspect = canvas.width / canvas.height;
      let drawWidth, drawHeight, offsetX = 0, offsetY = 0;
      
      if (imgAspect > canvasAspect) {
        drawHeight = canvas.height;
        drawWidth = drawHeight * imgAspect;
        offsetX = (canvas.width - drawWidth) / 2;
      } else {
        drawWidth = canvas.width;
        drawHeight = drawWidth / imgAspect;
        offsetY = (canvas.height - drawHeight) / 2;
      }
      
      tempCtx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // Récupère les données de l'image
      const imageData = tempCtx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Crée les particules selon alpha et couleur
      const arr: Particle[] = [];
      for (let y = particleStep / 2; y < canvas.height; y += particleStep) {
        for (let x = particleStep / 2; x < canvas.width; x += particleStep) {
          const i = (Math.floor(y) * canvas.width + Math.floor(x)) * 4;
          const a = data[i + 3] / 255;
          if (a > 0.05) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
            arr.push({
              x, y,
              ox: x, oy: y,
              vx: 0, vy: 0,
              color: `rgb(${gray},${gray},${gray})`
            });
          }
        }
      }
      particles.current = arr;
    };

    // Resize canvas to parent
    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const newWidth = rect.width * window.devicePixelRatio;
      const newHeight = rect.height * window.devicePixelRatio;
      
      // Only update if dimensions changed significantly
      if (Math.abs(canvas.width - newWidth) > 1 || Math.abs(canvas.height - newHeight) > 1) {
        canvas.width = newWidth;
        canvas.height = newHeight;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        generateParticles();
      }
    };
    
    // Initial resize
    resize();

    // Load image
    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => {
      loadedImageRef.current = img;
      generateParticles();
    };

    // Mouse events
    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) * window.devicePixelRatio;
      mouse.current.y = (e.clientY - rect.top) * window.devicePixelRatio;
    };
    const handleLeave = () => {
      mouse.current.x = -1000;
      mouse.current.y = -1000;
    };
    canvas.addEventListener('mousemove', handleMove, { passive: true });
    canvas.addEventListener('mouseleave', handleLeave, { passive: true });

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Grouper par couleur pour réduire les changements de fillStyle
      const byColor = new Map<string, Particle[]>();
      for (const p of particles.current) {
        if (!byColor.has(p.color)) byColor.set(p.color, []);
        byColor.get(p.color)!.push(p);
      }
      
      // Dessiner toutes les particules de la même couleur ensemble
      for (const [color, parts] of byColor) {
        ctx.fillStyle = color;
        for (const p of parts) {
          // Calcul de physique
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const dist = dx * dx + dy * dy;
          if (dist < mouse.current.radius) {
            const force = -mouse.current.radius / dist * FORCE_MULTIPLIER;
            const angle = Math.atan2(dy, dx);
            p.vx += force * Math.cos(angle);
            p.vy += force * Math.sin(angle);
          }
          p.vx *= FRICTION;
          p.vy *= FRICTION;
          p.x += p.vx + (p.ox - p.x) * EASE;
          p.y += p.vy + (p.oy - p.y) * EASE;
          
          ctx.fillRect(p.x - particleSize / 2, p.y - particleSize / 2, particleSize, particleSize);
        }
      }
      
      animationId.current = requestAnimationFrame(animate);
    };
    animate();

    // Resize observer
    const resizeObserver = new window.ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(parent);

    return () => {
      cancelAnimationFrame(animationId.current);
      canvas.removeEventListener('mousemove', handleMove);
      canvas.removeEventListener('mouseleave', handleLeave);
      resizeObserver.disconnect();
    };
  }, [src, particleSize, particleStep, mouseRadius]);

  return (
    <div ref={parentRef} style={{ width: '100%', height: '100%' }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          imageRendering: 'pixelated',
        }}
      />
    </div>
  );
}