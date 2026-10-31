import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, Cpu, LineChart, Globe } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onPartnerClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onPartnerClick }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle interactive particle & financial wave vector canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Nodes and quantitative trajectories
    const nodeCount = 38;
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.6 + 0.8,
        alpha: Math.random() * 0.4 + 0.2,
      });
    }

    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      t += 0.008;

      // Draw subtle quantitative spline curves (algorithmic market trajectories)
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(198, 167, 106, 0.15)';
      for (let x = 0; x < width; x += 6) {
        const y =
          height * 0.62 +
          Math.sin(x * 0.003 + t) * 35 +
          Math.cos(x * 0.007 + t * 0.5) * 18;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 0.75;
      ctx.strokeStyle = 'rgba(196, 202, 212, 0.1)';
      for (let x = 0; x < width; x += 8) {
        const y =
          height * 0.72 +
          Math.cos(x * 0.004 - t * 0.8) * 45 +
          Math.sin(x * 0.002 + t) * 22;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Render connecting network vectors
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        n1.x += n1.vx;
        n1.y += n1.vy;

        if (n1.x < 0) n1.x = width;
        if (n1.x > width) n1.x = 0;
        if (n1.y < 0) n1.y = height;
        if (n1.y > height) n1.y = 0;

        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(198, 167, 106, ${n1.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(198, 167, 106, ${0.12 * (1 - dist / 130)})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 overflow-hidden bg-[#080A0F]">
      {/* Background Image Asset with Measured Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/src/assets/images/gama_abstract_hero_network_1793445048596.jpg"
          alt="GAMA CAPITAL Abstract Quantitative Financial Network"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-35 filter brightness-75 contrast-125 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Multilayered radial and vertical darkening scrims */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080A0F] via-[#080A0F]/85 to-[#080A0F]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#080A0F]/60 to-[#080A0F]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(8,10,15,0.95),rgba(8,10,15,0.4),rgba(8,10,15,0.95))]" />
      </div>

      {/* Interactive Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-1 w-full h-full pointer-events-none"
      />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Unboxed Institutional Kicker */}
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#C6A76A]">
              <span>Institutional Trading</span>
              <span className="text-white/20">/</span>
              <span>Quantitative Strategies</span>
              <span className="text-white/20">/</span>
              <span>Capital Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.12] [text-wrap:balance]">
              Building the Future of{' '}
              <span className="font-semibold bg-gradient-to-r from-white via-[#EAD8AC] to-[#C6A76A] bg-clip-text text-transparent">
                Intelligent Capital.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#C4CAD4] font-normal leading-relaxed max-w-2xl">
              GAMA CAPITAL is developing a technology-driven trading and quantitative research platform focused on market intelligence, systematic strategies and disciplined risk management.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onExploreClick}
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#080A0F] bg-gradient-to-r from-[#EAD8AC] via-[#C6A76A] to-[#C6A76A] rounded-sm hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-xl shadow-[#C6A76A]/20 whitespace-nowrap"
              >
                <span>Explore Gama</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onPartnerClick}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#C4CAD4] bg-[#11151D] border border-white/10 hover:border-[#C6A76A]/50 hover:text-white rounded-sm transition-all duration-200 whitespace-nowrap"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Tagline Indicator */}
            <div className="pt-6 border-t border-white/10 w-full flex items-center justify-between text-xs text-[#C4CAD4]/80">
              <span className="tracking-[0.2em] font-medium text-[#C6A76A]">
                PRECISION · STRATEGY · PERFORMANCE
              </span>
              <span className="hidden sm:inline text-white/40">
                Institutional-Grade Quantitative Framework
              </span>
            </div>
          </div>

          {/* Right Column: 3D Metallic Geometric 'G' Symbol & Terminal Emblem */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center group">
              {/* Outer ambient glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#C6A76A]/10 via-[#C6A76A]/5 to-transparent blur-3xl transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-4 rounded-full border border-dashed border-[#C6A76A]/20 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-10 rounded-full border border-white/5" />

              {/* 3D Precision Metallic Geometric G Monogram Object */}
              <div className="relative z-10 w-52 h-52 sm:w-64 sm:h-64 flex items-center justify-center bg-[#11151D]/90 backdrop-blur-xl border border-[#C6A76A]/30 rounded-2xl shadow-2xl shadow-black p-6">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full filter drop-shadow-[0_10px_25px_rgba(198,167,106,0.3)]"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="heroGoldMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFF2D6" />
                      <stop offset="30%" stopColor="#C6A76A" />
                      <stop offset="70%" stopColor="#8C7241" />
                      <stop offset="100%" stopColor="#4A3B1F" />
                    </linearGradient>
                    <linearGradient id="heroSilverMetal" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="50%" stopColor="#B4BAC5" />
                      <stop offset="100%" stopColor="#4B5563" />
                    </linearGradient>
                    <radialGradient id="monogramCenterGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#C6A76A" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#C6A76A" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Inner ambient fill */}
                  <circle cx="100" cy="100" r="75" fill="url(#monogramCenterGlow)" />

                  {/* Geometric Octagonal Structure */}
                  <polygon
                    points="100,10 165,35 190,100 165,165 100,190 35,165 10,100 35,35"
                    stroke="url(#heroSilverMetal)"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                  />

                  {/* Secondary Inner Framework */}
                  <polygon
                    points="100,24 154,46 176,100 154,154 100,176 46,154 24,100 46,46"
                    stroke="url(#heroGoldMetal)"
                    strokeWidth="1.2"
                    strokeOpacity="0.3"
                  />

                  {/* Sculptural Heavy 3D 'G' Path */}
                  <path
                    d="M145 65 L100 38 L55 65 L55 135 L100 162 L145 135 L145 100 L95 100"
                    stroke="url(#heroGoldMetal)"
                    strokeWidth="11"
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                  />

                  {/* Metallic Precision Shading Inset */}
                  <path
                    d="M145 65 L100 38 L55 65 L55 135 L100 162 L145 135 L145 100 L95 100"
                    stroke="url(#heroSilverMetal)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                    strokeOpacity="0.75"
                  />

                  {/* Center Node Diamond */}
                  <rect
                    x="94"
                    y="94"
                    width="12"
                    height="12"
                    transform="rotate(45 100 100)"
                    fill="url(#heroGoldMetal)"
                  />

                  {/* Horizon Target Nodes */}
                  <circle cx="100" cy="38" r="3.5" fill="#C6A76A" />
                  <circle cx="55" cy="100" r="3" fill="#C4CAD4" />
                  <circle cx="100" cy="162" r="3.5" fill="#C6A76A" />
                  <circle cx="145" cy="100" r="3" fill="#EAD8AC" />
                </svg>

                {/* Subtitle Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#080A0F] border border-[#C6A76A]/40 px-3.5 py-1 rounded text-[10px] tracking-[0.25em] text-[#C6A76A] uppercase whitespace-nowrap shadow-lg">
                  GAMA ENGINE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Institutional Strip / Market Ticker Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 pt-8 border-t border-white/5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
          <div className="flex flex-col">
            <span className="text-white/40 tracking-wider uppercase mb-1">Architecture</span>
            <span className="text-white font-medium">Systematic & Quantitative</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white/40 tracking-wider uppercase mb-1">Risk Governance</span>
            <span className="text-white font-medium">Dynamic Pre-Trade Controls</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white/40 tracking-wider uppercase mb-1">Market Scope</span>
            <span className="text-white font-medium">Multi-Asset & Liquid Venues</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white/40 tracking-wider uppercase mb-1">Execution Tech</span>
            <span className="text-white font-medium">NebulaMarket V5 Ecosystem</span>
          </div>
        </div>
      </div>
    </section>
  );
};
