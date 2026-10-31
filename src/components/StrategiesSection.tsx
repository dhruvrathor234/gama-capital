import React, { useState } from 'react';
import {
  TrendingUp,
  Cpu,
  Brain,
  Activity,
  LineChart,
  ShieldAlert,
  ArrowRight,
  X,
  CheckCircle2,
} from 'lucide-react';

interface StrategyDetail {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  description: string;
  researchFocus: string[];
  executionScope: string;
  riskControl: string;
}

export const StrategiesSection: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<StrategyDetail | null>(null);

  const strategies: StrategyDetail[] = [
    {
      id: 'quant-trading',
      name: 'Quantitative Trading',
      category: 'Systematic Execution',
      icon: TrendingUp,
      tagline: 'Statistical arbitrage and mean-reversion modeling grounded in econometric rigor.',
      description:
        'Our quantitative trading research studies short- to medium-horizon relative price anomalies, cointegration structures, and structural shifts across correlated asset baskets.',
      researchFocus: [
        'Multi-factor statistical mean reversion and cointegration',
        'Cross-asset pairs and basket dispersion models',
        'High-dimensional factor risk decomposition',
        'Empirical out-of-sample parameter stability testing',
      ],
      executionScope: 'Liquid global futures, equities, and FX macro instruments.',
      riskControl: 'Hard dynamic stop-loss triggers and volatility-adjusted sizing.',
    },
    {
      id: 'algo-strategies',
      name: 'Algorithmic Strategies',
      category: 'Automated Execution',
      icon: Cpu,
      tagline: 'High-throughput algorithmic routing and automated order slice execution.',
      description:
        'Engineered to minimize implementation shortfall and market footprint, our algorithmic routing capabilities analyze microstructural liquidity queues and order book depth.',
      researchFocus: [
        'Time-Weighted and Volume-Weighted Average Price (TWAP/VWAP) optimization',
        'Adaptive dark liquidity seeking algorithms',
        'Queue position estimation and adverse selection mitigation',
        'Sub-millisecond execution state management',
      ],
      executionScope: 'Institutional electronic liquidity venues and exchanges.',
      riskControl: 'Pre-trade fat-finger, price deviation, and message-rate throttles.',
    },
    {
      id: 'ai-market-intel',
      name: 'AI-Powered Market Intelligence',
      category: 'Predictive Analytics',
      icon: Brain,
      tagline: 'Deep learning feature extraction and natural language macroeconomic intelligence.',
      description:
        'Applying modern statistical learning models to process heterogeneous information streams, including central bank communications, earnings sentiment, and supply chain shifts.',
      researchFocus: [
        'Natural language processing of central bank press conferences and policy text',
        'Alternative data integration and clustering techniques',
        'Nonlinear market regime change classification',
        'Feature importance attribution via explainable AI frameworks',
      ],
      executionScope: 'Global macro signals informing portfolio posture and sector exposure.',
      riskControl: 'Confidence-threshold gates preventing execution on ambiguous signals.',
    },
    {
      id: 'smart-money-orderflow',
      name: 'Smart Money & Order Flow Analysis',
      category: 'Microstructure Research',
      icon: Activity,
      tagline: 'Deciphering institutional positioning, volume profile, and bid-ask inventory shifts.',
      description:
        'By analyzing high-frequency Level 2 and Level 3 order book deltas, this capability identifies institutional accumulation, absorption patterns, and aggressive liquidity sweeps.',
      researchFocus: [
        'Cumulative volume delta (CVD) and order book liquidity imbalances',
        'Footprint charts and cluster volume distribution modeling',
        'Hidden liquidity detection via iceberg order reconstruction',
        'Absorption versus exhaustion breakout dynamics',
      ],
      executionScope: 'Intraday tactical positioning and optimal entry timing.',
      riskControl: 'Automated invalidation whenever microstructure imbalances revert.',
    },
    {
      id: 'technical-research',
      name: 'Technical Market Research',
      category: 'Structural Geometry',
      icon: LineChart,
      tagline: 'Rigorous multi-timeframe structural charting and liquidity pool mapping.',
      description:
        'Systematizing classical structural technical analysis into verifiable rules, examining fair value gaps, liquidity pools, and multi-session price action fractals.',
      researchFocus: [
        'Algorithmic identification of key support/resistance inflection bands',
        'Multi-timeframe liquidity sweep and reclaim patterns',
        'Statistical distribution of daily open-high-low-close (OHLC) expansion',
        'Trend exhaustion indicators and volatility contraction regimes',
      ],
      executionScope: 'Complementary confirmation layer for multi-strategy deployments.',
      riskControl: 'Structural invalidation levels determined strictly by key market pivots.',
    },
    {
      id: 'risk-portfolio-analytics',
      name: 'Risk & Portfolio Analytics',
      category: 'Governance & Capital Preservation',
      icon: ShieldAlert,
      tagline: 'Multi-layer stress testing, historical scenario replay, and real-time VaR tracking.',
      description:
        'Our risk infrastructure provides real-time portfolio oversight, running thousands of Monte Carlo scenarios, tail-risk simulations, and liquidity shock stress tests continuously.',
      researchFocus: [
        'Parametric and historical Value-at-Risk (VaR) / Expected Shortfall (CVaR)',
        'Historical crisis stress simulations (e.g., 2008, 2020 liquidity dislocations)',
        'Dynamic cross-asset beta and factor exposure decomposition',
        'Automated capital preservation gates and exposure scaling',
      ],
      executionScope: 'Firm-wide operational risk oversight and capital allocation limits.',
      riskControl: 'Automated real-time position derisking upon breach of variance tolerances.',
    },
  ];

  return (
    <section id="strategies" className="relative py-28 bg-[#0B0E14] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C6A76A] mb-3">
              Research & Strategy Spectrum
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight">
              Our Trading & <span className="font-semibold text-white">Research Capabilities</span>
            </h2>
            <p className="mt-4 text-base text-[#C4CAD4] leading-relaxed font-light">
              We engineer specialized operational frameworks designed to process market complexity into disciplined, systematic execution hypotheses.
            </p>
          </div>
          <div className="text-xs text-[#C4CAD4]/60 tracking-wider font-mono">
            OPERATIONAL RESEARCH · SYSTEMATIC METHODOLOGY
          </div>
        </div>

        {/* Strategy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((strategy) => {
            const Icon = strategy.icon;
            return (
              <div
                key={strategy.id}
                onClick={() => setSelectedStrategy(strategy)}
                className="group relative bg-[#11151D] border border-white/5 hover:border-[#C6A76A]/50 p-8 rounded-sm transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:shadow-[#C6A76A]/5"
              >
                <div>
                  {/* Category and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-[#C6A76A]">
                      {strategy.category}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-[#080A0F] border border-white/5 flex items-center justify-center group-hover:border-[#C6A76A]/40 transition-colors">
                      <Icon className="w-5 h-5 text-[#C4CAD4]/80 group-hover:text-[#C6A76A] transition-colors" />
                    </div>
                  </div>

                  {/* Name and Tagline */}
                  <h3 className="text-xl font-semibold text-white tracking-tight mb-3 group-hover:text-[#EAD8AC] transition-colors">
                    {strategy.name}
                  </h3>
                  <p className="text-sm text-[#C4CAD4] leading-relaxed font-light mb-6">
                    {strategy.tagline}
                  </p>
                </div>

                {/* Bottom Trigger Action */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#C6A76A] group-hover:text-white transition-colors">
                  <span className="font-medium tracking-wide">View Research Scope</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Regulatory Compliance Notice */}
        <div className="mt-12 p-5 bg-[#080A0F] border border-white/5 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#C4CAD4]/70">
          <div>
            <strong className="text-white block sm:inline font-medium">Compliance & Scope Notice: </strong>
            Strategy descriptions reflect operational research capabilities and analytical modeling frameworks. They do not constitute investment advice, offer of fund management, or guarantee of future returns.
          </div>
          <span className="shrink-0 text-[#C6A76A] font-mono text-[11px]">
            DISCIPLINED GOVERNANCE
          </span>
        </div>
      </div>

      {/* Interactive Strategy Deep-Dive Modal */}
      {selectedStrategy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#11151D] border border-[#C6A76A]/40 rounded-sm shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedStrategy(null)}
              className="absolute top-6 right-6 p-2 text-[#C4CAD4] hover:text-white hover:bg-white/5 rounded transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded bg-[#080A0F] border border-[#C6A76A]/40 flex items-center justify-center shrink-0">
                <selectedStrategy.icon className="w-6 h-6 text-[#C6A76A]" />
              </div>
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-[#C6A76A]">
                  {selectedStrategy.category}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {selectedStrategy.name}
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#C4CAD4] leading-relaxed mb-6 font-light">
              {selectedStrategy.description}
            </p>

            {/* Research Focus Areas */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-widest text-white/60 mb-3 font-mono">
                Key Research Vectors
              </h4>
              <div className="space-y-2">
                {selectedStrategy.researchFocus.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#C4CAD4]">
                    <CheckCircle2 className="w-4 h-4 text-[#C6A76A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution & Risk Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10 text-xs">
              <div className="p-3 bg-[#080A0F] border border-white/5 rounded-sm">
                <span className="text-[#C6A76A] uppercase font-mono block mb-1">Execution Scope</span>
                <span className="text-[#C4CAD4] font-light">{selectedStrategy.executionScope}</span>
              </div>
              <div className="p-3 bg-[#080A0F] border border-white/5 rounded-sm">
                <span className="text-[#C6A76A] uppercase font-mono block mb-1">Risk Protocol</span>
                <span className="text-[#C4CAD4] font-light">{selectedStrategy.riskControl}</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedStrategy(null)}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#080A0F] bg-[#C6A76A] hover:bg-[#EAD8AC] rounded-sm transition-colors"
              >
                Close Specification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
