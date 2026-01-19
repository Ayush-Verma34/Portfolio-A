import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let width = window.innerWidth;
        let height = window.innerHeight;

        // Resize handling
        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initParticles();
        };

        window.addEventListener('resize', handleResize);
        canvas.width = width;
        canvas.height = height;

        // Mouse interaction
        const mouse = { x: -1000, y: -1000 };
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 1) * 0.1;
                this.vy = (Math.random() - 1) * 0.1;
                this.size = Math.random() * 3 + 1.5;
                // Premium gold/blue accents
                const colors = ['rgba(59, 130, 246, 0.5)', 'rgba(139, 92, 246, 0.5)', 'rgba(255, 255, 255, 0.3)'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    const angle = Math.atan2(dy, dx);
                    const force = (100 - distance) / 100;
                    const pushX = Math.cos(angle) * force * 0.5;
                    const pushY = Math.sin(angle) * force * 0.5;
                    this.vx -= pushX;
                    this.vy -= pushY;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            const particleCount = Math.min(width * 0.1, 100); // Responsive count
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            // Draw connections
            particles.forEach((p, index) => {
                p.update();
                p.draw();

                // Connect particles
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 150)})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        initParticles();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed top-0 left-0 w-full h-full -z-10 bg-background"
            />
            <svg
                className="w-full h-full fixed hidden sm:flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10  opacity-10 select-none pointer-events-none"
            >
                {/* Define the gradient */}
                <defs>
                    <linearGradient id="stroke-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                </defs>

                {/* <text
                    x="50%"
                    y="35%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    stroke="url(#stroke-gradient)"
                    strokeWidth="5"
                    fill="transparent"
                    fontSize="20vw"
                    fontWeight="900"
                    letterSpacing="1.5vw"
                >
                    AYUSH
                </text>

                <text
                    x="50%"
                    y="80%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    stroke="url(#stroke-gradient)"
                    strokeWidth="5"
                    fontSize="20vw"
                    fontWeight="900"
                    letterSpacing="1vw"
                >
                    VERMA
                </text> */}
            </svg>
        </>
    );
};

export default Background;
