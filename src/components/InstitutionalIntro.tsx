import React from 'react';
import { Network, BarChart3, ShieldAlert, Cpu } from 'lucide-react';

export const InstitutionalIntro: React.FC = () => {
  const pillars = [
    {
      index: '01',
      title: 'Quantitative Research',
      description: 'Developing mathematical and statistical hypotheses grounded in econometric empirical analysis and high-frequency data sets.',
      icon: BarChart3,
    },
    {
      index: '02',
      title: 'Advanced Trading Technology',
      description: 'Building multi-asset algorithmic execution infrastructure engineered for precision, latency resilience, and order-routing efficiency.',
      icon: Cpu,
    },
    {
      index: '03',
      title: 'Structured Risk Governance',
      description: 'Enforcing deterministic drawdown thresholds, position limits, real-time value-at-risk (VaR) monitoring, and scenario stress testing.',
      icon: ShieldAlert,
    },
    {
      index: '04',
      title: 'Market Intelligence Matrix',
      description: 'Synthesizing global order book dynamics, liquidity dispersion, and macroeconomic signals into systematic strategy signals.',
      icon: Network,
    },
  ];

  return (
    <section className="relative py-24 bg-[#080A0F] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C6A76A] mb-3">
            Institutional Foundations
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight [text-wrap:balance]">
            Where Intelligence Meets{' '}
            <span className="font-semibold text-[#C6A76A]">Market Precision.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#C4CAD4] leading-relaxed">
            We combine quantitative research, advanced trading technology and structured risk management to build a modern approach to financial markets.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.index}
                className="group relative bg-[#11151D] border border-white/5 hover:border-[#C6A76A]/40 p-8 rounded-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Human Editorial Numbering with Subtle Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold tracking-wider text-[#C6A76A]/80 font-mono">
                      {pillar.index}
                    </span>
                    <Icon className="w-5 h-5 text-[#C4CAD4]/40 group-hover:text-[#C6A76A] transition-colors" />
                  </div>

                  <h3 className="text-lg font-semibold text-white tracking-tight mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#C4CAD4]/80 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#C4CAD4]/50">
                  <span>Core Framework</span>
                  <span className="text-[#C6A76A] opacity-0 group-hover:opacity-100 transition-opacity">
                    Operational
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
