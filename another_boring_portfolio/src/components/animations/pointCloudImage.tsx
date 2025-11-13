import React, { useRef, useEffect } from 'react';

type Particle = {
  x: number;
  y: number;
  color: string;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
};

const PARTICLE_SIZE = 4;
const PARTICLE_STEP = 6;
const MOUSE_RADIUS = 5000;
const EASE = 1;
const FRICTION = 0.92;
const FORCE_MULTIPLIER = 12;

export default function PointCloudImage({ src }: { src: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -1000, y: -1000, radius: MOUSE_RADIUS });
  const animationId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = parentRef.current;
    if (!canvas || !parent) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas to parent
    const resize = () => {
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };
    resize();

    // Load image and create particles
    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => {
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
  for (let y = PARTICLE_STEP / 2; y < canvas.height; y += PARTICLE_STEP) {
    for (let x = PARTICLE_STEP / 2; x < canvas.width; x += PARTICLE_STEP) {
      const i = (Math.floor(y) * canvas.width + Math.floor(x)) * 4;
      const a = data[i + 3] / 255;
      // Seuil alpha et couleur (par exemple, alpha > 0.05)
      if (a > 0.05) {
        arr.push({
          x, y,
          ox: x, oy: y,
          vx: 0, vy: 0,
          color: `rgb(${data[i]},${data[i + 1]},${data[i + 2]})`
        });
      }
    }
  }
  particles.current = arr;
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
      ctx.fillStyle = 'rgba(0,0,0,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (const p of particles.current) {
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
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, PARTICLE_SIZE / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
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
  }, [src]);

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