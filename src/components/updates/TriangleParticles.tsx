"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Floating triangle particle canvas — web port of the in-app
 * PostUpdateModal background. Parent must be `position: relative` for
 * the absolute-positioned canvas to size correctly.
 */
interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    rotation: number;
    rotSpeed: number;
    opacity: number;
    opacityDir: number;
}

export default function TriangleParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animFrameRef = useRef(0);

    const initParticles = useCallback((w: number, h: number) => {
        const count = Math.min(35, Math.floor((w * h) / 12000));
        const particles: Particle[] = [];
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: 4 + Math.random() * 10,
                rotation: Math.random() * Math.PI * 2,
                rotSpeed: (Math.random() - 0.5) * 0.015,
                opacity: 0.03 + Math.random() * 0.08,
                opacityDir: Math.random() > 0.5 ? 1 : -1,
            });
        }
        particlesRef.current = particles;
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            const rect = canvas.parentElement?.getBoundingClientRect();
            if (!rect) return;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            // Reset transform to avoid compounding scale on resize
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
            initParticles(rect.width, rect.height);
        };

        resize();

        // ResizeObserver catches parent container size changes (better than window resize)
        const parent = canvas.parentElement;
        const ro = parent && "ResizeObserver" in window
            ? new ResizeObserver(() => resize())
            : null;
        if (ro && parent) ro.observe(parent);
        window.addEventListener("resize", resize);

        const drawTriangle = (
            x: number,
            y: number,
            size: number,
            rotation: number,
            opacity: number,
        ) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.beginPath();
            ctx.moveTo(0, -size);
            ctx.lineTo(-size * 0.866, size * 0.5);
            ctx.lineTo(size * 0.866, size * 0.5);
            ctx.closePath();
            ctx.strokeStyle = `rgba(29, 185, 84, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.fillStyle = `rgba(29, 185, 84, ${opacity * 0.3})`;
            ctx.fill();
            ctx.restore();
        };

        const animate = () => {
            const dpr = window.devicePixelRatio || 1;
            const w = canvas.width / dpr;
            const h = canvas.height / dpr;
            ctx.clearRect(0, 0, w, h);

            particlesRef.current.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                p.rotation += p.rotSpeed;

                p.opacity += p.opacityDir * 0.0004;
                if (p.opacity > 0.12) {
                    p.opacity = 0.12;
                    p.opacityDir = -1;
                }
                if (p.opacity < 0.02) {
                    p.opacity = 0.02;
                    p.opacityDir = 1;
                }

                if (p.x < -20) p.x = w + 20;
                if (p.x > w + 20) p.x = -20;
                if (p.y < -20) p.y = h + 20;
                if (p.y > h + 20) p.y = -20;

                drawTriangle(p.x, p.y, p.size, p.rotation, p.opacity);
            });

            animFrameRef.current = requestAnimationFrame(animate);
        };

        animFrameRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animFrameRef.current);
            window.removeEventListener("resize", resize);
            if (ro) ro.disconnect();
        };
    }, [initParticles]);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
}
