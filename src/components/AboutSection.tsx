import React, { useState } from 'react';
import { Target, Compass, BookOpen, Layers } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'philosophy' | 'approach'>('vision');

  const tabContent = {
    vision: {
      title: 'Our Vision',
      quote: '“To build a globally recognized technology-driven trading and capital operations company.”',
      detail:
        'We envision a financial ecosystem where high-performance computational infrastructure, quantitative rigor, and intelligent analytics converge. Our objective is long-term institutional resilience and international market participation.',
      icon: Target,
      highlight: 'Global Technology-Driven Footprint',
    },
    mission: {
      title: 'Our Mission',
      quote: '“To combine intelligent technology, systematic strategies and disciplined risk management into a scalable trading ecosystem.”',
      detail:
        'By removing behavioral biases and replacing them with empirical algorithmic models, our mission is to execute multi-market strategies with unwavering consistency, deterministic risk parameters, and continuous technological innovation.',
      icon: Compass,
      highlight: 'Scalable Institutional Ecosystem',
    },
    philosophy: {
      title: 'Our Philosophy',
      quote: '“Precision in formulation, rigor in backtesting, invariant discipline in risk governance.”',
      detail:
        'Financial markets are complex, adaptive dynamical systems. We believe enduring operational edge is not born of speculative sentiment, but of mathematical precision, structural order-flow understanding, and non-negotiable capital preservation protocols.',
      icon: BookOpen,
      highlight: 'Invariant Risk & Analytical Rigor',
    },
    approach: {
      title: 'Our Approach',
      quote: '“Hypothesis-driven quantitative science paired with high-throughput execution technology.”',
      detail:
        'Every strategy undergoes rigorous out-of-sample stress testing, multi-regime simulation, slippage modeling, and latency audit before operational integration. Our research pipeline is modular, continuous, and grounded in empirical verification.',
      icon: Layers,
      highlight: 'Multi-Regime Algorithmic Architecture',
    },
  };

  const CurrentIcon = tabContent[activeTab].icon;

  return (
    <section id="about" className="relative py-28 bg-[#0B0E14] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#C6A76A] mb-3">
              Corporate Overview
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight">
              About <span className="font-semibold text-white">GAMA CAPITAL</span>
            </h2>
          </div>
          <div className="text-xs text-[#C4CAD4]/60 tracking-wider uppercase font-mono">
            EST. 2026 · QUANTITATIVE VENTURE & TRADING TECH
          </div>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Authentic Brand Narrative */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-[#C4CAD4] leading-relaxed">
            <p className="text-base sm:text-lg text-white/90 font-light">
              <strong className="text-white font-semibold">GAMA CAPITAL</strong> is an emerging financial technology and trading operations venture focused on quantitative research, AI-powered market intelligence and systematic trading strategies.
            </p>
            <p className="text-sm sm:text-base font-light">
              Our vision is to develop an institutional-grade trading ecosystem that combines technology, analytical research and disciplined execution.
            </p>
            <p className="text-sm sm:text-base font-light">
              Through our technology infrastructure and trading operations, we aim to build scalable capabilities for the evolving global financial markets.
            </p>

            {/* Core Values Strip */}
            <div className="pt-6 grid grid-cols-2 gap-4 border-t border-white/10 text-xs text-white">
              <div className="p-3 bg-[#11151D] border border-white/5 rounded-sm">
                <span className="text-[#C6A76A] block font-mono text-xs mb-1">01. PRE-TRADE GOVERNANCE</span>
                <span className="text-[#C4CAD4] font-light">Zero unhedged systemic exposure</span>
              </div>
              <div className="p-3 bg-[#11151D] border border-white/5 rounded-sm">
                <span className="text-[#C6A76A] block font-mono text-xs mb-1">02. SYSTEMATIC EXECUTION</span>
                <span className="text-[#C4CAD4] font-light">Algorithmic latency optimization</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Architectural Visual Frame */}
          <div className="lg:col-span-6">
            <div className="relative group rounded-xl overflow-hidden border border-[#C6A76A]/20 bg-[#11151D] shadow-2xl">
              <img
                src="/src/assets/images/gama_institutional_architecture_1793445050025.jpg"
                alt="GAMA CAPITAL Institutional Architecture"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-center filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F] via-[#080A0F]/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C6A76A] block font-mono">
                    GLOBAL INSTITUTIONAL FOUNDATION
                  </span>
                  <span className="text-white font-medium text-sm sm:text-base">
                    Built for International Financial Markets
                  </span>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="text-[10px] text-[#C4CAD4]/60 uppercase tracking-widest block font-mono">
                    INFRASTRUCTURE
                  </span>
                  <span className="text-xs text-[#C4CAD4]">Multi-Venue Connectivity</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Structured Tabs: Vision / Mission / Philosophy / Approach */}
        <div className="mt-20 pt-12 border-t border-white/10">
          {/* Segmented Interactive Tabs (Functional buttons with click handlers) */}
          <div className="flex flex-wrap items-center gap-2 mb-8 bg-[#11151D] p-1.5 rounded-lg border border-white/5 max-w-2xl">
            {(['vision', 'mission', 'philosophy', 'approach'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2.5 px-4 text-xs font-semibold tracking-wider uppercase rounded-md transition-all duration-200 whitespace-nowrap shrink-0 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-[#C6A76A]/20 to-[#C6A76A]/10 text-[#C6A76A] border border-[#C6A76A]/40 shadow-sm'
                    : 'text-[#C4CAD4]/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {tabContent[tab].title}
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          <div className="bg-[#11151D] border border-white/5 p-8 sm:p-10 rounded-sm relative overflow-hidden transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#C6A76A]/5 to-transparent pointer-events-none" />
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-[#080A0F] border border-[#C6A76A]/30 flex items-center justify-center shrink-0">
                  <CurrentIcon className="w-6 h-6 text-[#C6A76A]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C6A76A] font-mono">
                    Strategic Foundation
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {tabContent[activeTab].title}
                  </h3>
                </div>
              </div>
              <div className="text-xs font-mono text-[#C4CAD4]/70 tracking-wider">
                {tabContent[activeTab].highlight}
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <blockquote className="text-lg sm:text-xl font-light italic text-[#EAD8AC] leading-relaxed">
                {tabContent[activeTab].quote}
              </blockquote>
              <p className="text-sm sm:text-base text-[#C4CAD4] leading-relaxed font-light max-w-4xl">
                {tabContent[activeTab].detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
