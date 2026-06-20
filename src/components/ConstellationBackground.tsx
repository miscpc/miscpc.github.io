import { useEffect, useRef } from 'react';

export const ConstellationBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId = 0;
    let particles: Particle[] = [];

    const particleCount = window.matchMedia('(max-width: 768px)').matches ? 45 : 85;
    const connectionDistance = 140;
    const mouseDistance = 180;
    const mouse = { x: null as number | null, y: null as number | null };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      pulse: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = Math.random() * 1.8 + 1.2;
        this.color = Math.random() > 0.7 ? '#00f0ff' : (Math.random() > 0.5 ? '#bd00ff' : '#4facfe');
        this.pulse = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        this.pulse += 0.04;
      }

      draw() {
        const r = this.radius + Math.sin(this.pulse) * 0.5;

        ctx.beginPath();
        ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(this.x, this.y, r + 3, 0, Math.PI * 2);
        ctx.strokeStyle = this.color;
        ctx.globalAlpha = 0.25;
        ctx.lineWidth = 0.8;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      resize();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = '#00f0ff';
            ctx.globalAlpha = 1 - dist / mouseDistance;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            gradient.addColorStop(0, p.color);
            gradient.addColorStop(1, p2.color);
            ctx.strokeStyle = gradient;
            ctx.globalAlpha = (1 - dist / connectionDistance) * 0.55;
            ctx.lineWidth = 0.7;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      drawConnections();
      animationFrameId = window.requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', init);

    init();
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes constellationBgPulse {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.15); }
        }
      `}</style>
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 15% 25%, rgba(0,240,255,0.08) 0%, transparent 35%), radial-gradient(circle at 85% 75%, rgba(189,0,255,0.08) 0%, transparent 35%), radial-gradient(circle at 50% 50%, rgba(0,120,255,0.04) 0%, transparent 50%)',
            animation: 'constellationBgPulse 12s ease-in-out infinite',
          }}
        />
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background:
              'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.15) 3px)',
            backgroundSize: '100% 4px',
          }}
        />
      </div>
    </>
  );
};
