import React from 'react';
import {
  BrainCircuit,
  BarChart2,
  ShieldCheck,
  Server,
  Sparkles,
  Globe2,
  ArrowRight,
} from 'lucide-react';

export const WhyGamaSection: React.FC = () => {
  const features = [
    {
      index: '01',
      title: 'Technology-Driven Intelligence',
      summary: 'Advanced market intelligence and AI-powered analytical infrastructure.',
      detail:
        'Harnessing high-throughput data processing, machine-learning feature extractors, and automated market sentiment parsing to decode nonlinear cross-asset correlations.',
      icon: BrainCircuit,
      metricLabel: 'Engine Architecture',
      metricValue: 'AI / Statistical Inference',
    },
    {
      index: '02',
      title: 'Quantitative Research',
      summary: 'Systematic research and data-driven trading methodologies.',
      detail:
        'Continuous mathematical hypothesis formulation and empirical statistical backtesting across historical tick, order book, and volatility regimes.',
      icon: BarChart2,
      metricLabel: 'Methodology',
      metricValue: 'Empirical Rigor',
    },
    {
      index: '03',
      title: 'Structured Risk Management',
      summary: 'Risk controls, exposure monitoring and disciplined execution frameworks.',
      detail:
        'Multilayered pre-trade limits, real-time portfolio margin tracking, dynamic delta hedging, and automated circuit breakers designed to guard capital invariant to volatility.',
      icon: ShieldCheck,
      metricLabel: 'Governance',
      metricValue: 'Deterministic Limits',
    },
    {
      index: '04',
      title: 'Advanced Trading Infrastructure',
      summary: 'Modern trading technology designed for multi-market analysis and execution.',
      detail:
        'Low-latency connectivity, algorithmic smart order routing (SOR), and unified multi-venue order execution pipelines built for high resilience.',
      icon: Server,
      metricLabel: 'Routing Protocol',
      metricValue: 'Smart Order Execution',
    },
    {
      index: '05',
      title: 'Research & Innovation',
      summary: 'Continuous development of trading strategies, analytical tools and market intelligence.',
      detail:
        'Iterative development of proprietary alpha signals, statistical arbitrage mechanisms, and quantitative modeling tools adapted for shifting market regimes.',
      icon: Sparkles,
      metricLabel: 'Pipeline',
      metricValue: 'Continuous Evolution',
    },
    {
      index: '06',
      title: 'Global Vision',
      summary: 'Building an ecosystem designed for participation in international financial markets.',
      detail:
        'Architected from day one for international liquidity venues, cross-border regulatory compatibility, and institutional collaboration across global financial hubs.',
      icon: Globe2,
      metricLabel: 'Market Reach',
      metricValue: 'Global Cross-Asset',
    },
  ];

  return (
    <section id="why-gama" className="relative py-28 bg-[#080A0F] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C6A76A] mb-3">
            Distinctive Edge
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight">
            Why <span className="font-semibold text-[#C6A76A]">GAMA CAPITAL</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#C4CAD4] leading-relaxed font-light">
            An institutional foundation designed to navigate volatility through quantitative science, rigorous engineering, and invariant risk control.
          </p>
        </div>

        {/* 6 Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.index}
                className="group relative bg-[#11151D] border border-white/5 hover:border-[#C6A76A]/40 p-8 sm:p-9 rounded-sm transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-black/70"
              >
                <div>
                  {/* Top Bar: Editorial Index & Minimalist Icon */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5">
                    <span className="text-sm font-semibold tracking-widest text-[#C6A76A] font-mono">
                      {feature.index}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-[#080A0F] border border-white/5 flex items-center justify-center group-hover:border-[#C6A76A]/30 transition-colors">
                      <Icon className="w-5 h-5 text-[#C4CAD4]/70 group-hover:text-[#C6A76A] transition-colors" />
                    </div>
                  </div>

                  {/* Title & Core Summary */}
                  <h3 className="text-xl font-semibold text-white tracking-tight mb-3 group-hover:text-[#EAD8AC] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-medium text-[#C6A76A]/90 mb-4 leading-normal">
                    {feature.summary}
                  </p>
                  <p className="text-sm text-[#C4CAD4]/80 leading-relaxed font-light">
                    {feature.detail}
                  </p>
                </div>

                {/* Bottom Metric Strip */}
                <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase tracking-wider">
                      {feature.metricLabel}
                    </span>
                    <span className="text-white font-medium">
                      {feature.metricValue}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#C6A76A]/60 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
