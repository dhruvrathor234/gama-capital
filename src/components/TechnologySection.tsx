import React, { useState } from 'react';
import {
  ExternalLink,
  Cpu,
  LineChart,
  BrainCircuit,
  Shield,
  Layers,
  Activity,
  Maximize2,
  TrendingUp,
  SlidersHorizontal,
} from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const [activeFeatureTab, setActiveFeatureTab] = useState<'ai' | 'chart' | 'smart' | 'screener'>('chart');
  const [selectedTimeframe, setSelectedTimeframe] = useState('1H');

  const features = [
    {
      title: 'AI Market Intelligence',
      description: 'Continuous NLP and statistical feature models parsing central bank sentiment, news flow, and structural liquidity regimes.',
      icon: BrainCircuit,
    },
    {
      title: 'Advanced Charting',
      description: 'Precision multi-timeframe geometric charting engine equipped with automated order-block mapping and harmonic structure detection.',
      icon: LineChart,
    },
    {
      title: 'Smart Money Analytics',
      description: 'Level-2/Level-3 order book flow monitoring, cumulative volume delta (CVD), and institutional liquidity absorption footprints.',
      icon: Activity,
    },
    {
      title: 'Multi-Market Screener',
      description: 'Ultra-low latency real-time asset screener evaluating volatility contraction, momentum breaks, and correlation spikes across global venues.',
      icon: SlidersHorizontal,
    },
    {
      title: 'Trading Signals & Analytics',
      description: 'Deterministic quantitative signal validation pipelines with rigorous out-of-sample statistical significance tests.',
      icon: Cpu,
    },
    {
      title: 'Risk Monitoring',
      description: 'Real-time pre-trade risk telemetry, portfolio value-at-risk (VaR) distribution, and automated drawdown circuit breakers.',
      icon: Shield,
    },
  ];

  const marketAssets = [
    { ticker: 'S&P 500 E-MINI', price: '5,892.25', change: '+0.68%', bias: 'Bullish Expansion', vol: '1.42M' },
    { ticker: 'EUR / USD', price: '1.0842', change: '-0.14%', bias: 'Consolidation', vol: '840K' },
    { ticker: 'GOLD SPOT (XAU)', price: '2,746.80', change: '+1.12%', bias: 'Institutional Inflow', vol: '620K' },
    { ticker: '10Y US TREASURY', price: '4.24%', change: '+0.03', bias: 'Yield Flattening', vol: '980K' },
    { ticker: 'BRENT CRUDE', price: '74.35', change: '-0.45%', bias: 'Mean Reversion', vol: '510K' },
  ];

  return (
    <section id="technology" className="relative py-28 bg-[#0B0E14] border-b border-white/5 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#C6A76A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C6A76A] mb-3">
              Technology Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight">
              Powered by <span className="font-semibold text-white">NebulaMarket V5</span>
            </h2>
            <p className="mt-4 text-base text-[#C4CAD4] leading-relaxed font-light">
              Powered by advanced trading intelligence infrastructure, NebulaMarket V5 supports market analysis, AI-powered insights, technical research, multi-market monitoring and structured trading workflows.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://www.nebulamarket.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#080A0F] bg-gradient-to-r from-[#EAD8AC] via-[#C6A76A] to-[#C6A76A] rounded-sm hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-[#C6A76A]/20 whitespace-nowrap"
            >
              <span>Explore NebulaMarket</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-[#11151D] border border-white/5 hover:border-[#C6A76A]/30 p-6 rounded-sm transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-sm bg-[#080A0F] border border-white/10 flex items-center justify-center mb-4 text-[#C6A76A] group-hover:border-[#C6A76A]/40 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white tracking-tight mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#C4CAD4]/80 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* High-Fidelity Interactive Trading Terminal Showcase */}
        <div className="relative rounded-lg overflow-hidden border border-[#C6A76A]/30 bg-[#080A0F] shadow-2xl">
          {/* Terminal Window Header Bar */}
          <div className="bg-[#11151D] px-4 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <span className="text-xs font-mono font-semibold tracking-wider text-white">
                NEBULAMARKET V5
              </span>
              <span className="text-[11px] text-[#C4CAD4]/40 font-mono hidden sm:inline">
                | INSTITUTIONAL WORKSPACE
              </span>
            </div>

            {/* Interactive Module Tabs */}
            <div className="flex items-center gap-1 bg-[#080A0F] p-1 rounded border border-white/5 text-xs">
              <button
                onClick={() => setActiveFeatureTab('chart')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeFeatureTab === 'chart'
                    ? 'bg-[#C6A76A]/20 text-[#C6A76A] font-medium'
                    : 'text-[#C4CAD4]/70 hover:text-white'
                }`}
              >
                Advanced Charting
              </button>
              <button
                onClick={() => setActiveFeatureTab('ai')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeFeatureTab === 'ai'
                    ? 'bg-[#C6A76A]/20 text-[#C6A76A] font-medium'
                    : 'text-[#C4CAD4]/70 hover:text-white'
                }`}
              >
                AI Market Intelligence
              </button>
              <button
                onClick={() => setActiveFeatureTab('smart')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeFeatureTab === 'smart'
                    ? 'bg-[#C6A76A]/20 text-[#C6A76A] font-medium'
                    : 'text-[#C4CAD4]/70 hover:text-white'
                }`}
              >
                Order Flow & Depth
              </button>
              <button
                onClick={() => setActiveFeatureTab('screener')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeFeatureTab === 'screener'
                    ? 'bg-[#C6A76A]/20 text-[#C6A76A] font-medium'
                    : 'text-[#C4CAD4]/70 hover:text-white'
                }`}
              >
                Multi-Asset Screener
              </button>
            </div>

            {/* System Status Indicators */}
            <div className="hidden md:flex items-center gap-3 text-xs font-mono text-[#C4CAD4]/70">
              <span className="text-[#C6A76A]">FEED: LOW LATENCY</span>
              <span>FEED RATE: 12.4k msg/s</span>
            </div>
          </div>

          {/* Sub Toolbar */}
          <div className="px-6 py-2.5 bg-[#0D1118] border-b border-white/5 flex flex-wrap items-center justify-between text-xs text-[#C4CAD4]">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-white font-semibold">S&P 500 E-MINI (ES1!)</span>
                <span className="font-mono text-[#C6A76A] font-medium tabular-nums">5,892.25</span>
                <span className="font-mono text-emerald-400 text-[11px] tabular-nums">+0.68%</span>
              </div>
              <div className="hidden sm:flex items-center gap-1 font-mono">
                {['1M', '5M', '15M', '1H', '4H', '1D'].map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setSelectedTimeframe(tf)}
                    className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
                      selectedTimeframe === tf
                        ? 'bg-[#C6A76A] text-[#080A0F] font-bold'
                        : 'text-[#C4CAD4]/60 hover:text-white'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-white/50">
              <span>VOL: 1,428,910</span>
              <span>SPREAD: 0.25</span>
            </div>
          </div>

          {/* Interactive Workspace Body */}
          <div className="p-6 min-h-[380px] flex flex-col justify-between">
            {activeFeatureTab === 'chart' && (
              <div className="space-y-4">
                {/* SVG Candlestick & Volume Chart Visualization */}
                <div className="relative h-64 w-full bg-[#080A0F] border border-white/5 rounded p-4 flex flex-col justify-between overflow-hidden">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 grid grid-rows-4 grid-cols-6 pointer-events-none opacity-10">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="border-b border-r border-white" />
                    ))}
                  </div>

                  {/* Dynamic Candlesticks Mockup */}
                  <svg className="w-full h-44 overflow-visible" viewBox="0 0 800 160">
                    <defs>
                      <linearGradient id="chartAreaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#C6A76A" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#C6A76A" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Trend Line Curve */}
                    <path
                      d="M 20 120 Q 120 130 200 95 T 380 70 T 540 45 T 700 35 L 780 20"
                      fill="none"
                      stroke="#C6A76A"
                      strokeWidth="2.5"
                    />

                    {/* Area fill */}
                    <path
                      d="M 20 120 Q 120 130 200 95 T 380 70 T 540 45 T 700 35 L 780 20 L 780 160 L 20 160 Z"
                      fill="url(#chartAreaGrad)"
                    />

                    {/* Dynamic Candle sticks */}
                    {[
                      { x: 50, o: 130, c: 115, h: 110, l: 135, up: true },
                      { x: 100, o: 115, c: 122, h: 110, l: 125, up: false },
                      { x: 150, o: 122, c: 105, h: 100, l: 128, up: true },
                      { x: 200, o: 105, c: 92, h: 88, l: 110, up: true },
                      { x: 250, o: 92, c: 98, h: 85, l: 102, up: false },
                      { x: 300, o: 98, c: 80, h: 75, l: 104, up: true },
                      { x: 350, o: 80, c: 68, h: 65, l: 85, up: true },
                      { x: 400, o: 68, c: 72, h: 64, l: 78, up: false },
                      { x: 450, o: 72, c: 55, h: 50, l: 76, up: true },
                      { x: 500, o: 55, c: 48, h: 42, l: 60, up: true },
                      { x: 550, o: 48, c: 52, h: 44, l: 56, up: false },
                      { x: 600, o: 52, c: 38, h: 32, l: 55, up: true },
                      { x: 650, o: 38, c: 34, h: 28, l: 42, up: true },
                      { x: 700, o: 34, c: 26, h: 22, l: 38, up: true },
                      { x: 750, o: 26, c: 18, h: 14, l: 30, up: true },
                    ].map((c, i) => (
                      <g key={i}>
                        {/* High-Low Wick */}
                        <line
                          x1={c.x}
                          y1={c.h}
                          x2={c.x}
                          y2={c.l}
                          stroke={c.up ? '#10B981' : '#EF4444'}
                          strokeWidth="1.2"
                        />
                        {/* Candle Body */}
                        <rect
                          x={c.x - 5}
                          y={Math.min(c.o, c.c)}
                          width="10"
                          height={Math.max(4, Math.abs(c.o - c.c))}
                          fill={c.up ? '#10B981' : '#EF4444'}
                          rx="1"
                        />
                      </g>
                    ))}
                  </svg>

                  {/* Volume Bars */}
                  <div className="flex items-end gap-1.5 h-12 pt-2 border-t border-white/5">
                    {[35, 60, 45, 80, 50, 95, 70, 85, 100, 65, 40, 90, 110, 85, 95].map((val, i) => (
                      <div
                        key={i}
                        style={{ height: `${val}%` }}
                        className={`flex-1 rounded-t-xs ${
                          i % 3 === 0 ? 'bg-red-500/40' : 'bg-emerald-500/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between text-xs text-[#C4CAD4]/80 pt-2">
                  <div className="flex items-center gap-4">
                    <span>EMA 21: <strong className="text-white font-mono">5,876.10</strong></span>
                    <span>EMA 50: <strong className="text-white font-mono">5,848.40</strong></span>
                    <span>VWAP: <strong className="text-[#C6A76A] font-mono">5,888.50</strong></span>
                  </div>
                  <span className="font-mono text-[#C6A76A]">Algorithmic Momentum: POSITIVE ACCELERATION</span>
                </div>
              </div>
            )}

            {activeFeatureTab === 'ai' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-[#11151D] border border-white/5 rounded">
                    <span className="text-[11px] font-mono uppercase text-[#C6A76A] block mb-1">
                      Macro Regime Model
                    </span>
                    <span className="text-lg font-bold text-white block">
                      Disinflationary Expansion
                    </span>
                    <span className="text-xs text-[#C4CAD4]/60 font-light mt-1 block">
                      Confidence Score: 87.4%
                    </span>
                  </div>
                  <div className="p-4 bg-[#11151D] border border-white/5 rounded">
                    <span className="text-[11px] font-mono uppercase text-[#C6A76A] block mb-1">
                      Central Bank NLP Tone
                    </span>
                    <span className="text-lg font-bold text-white block">
                      Neutral / Dovish Skew
                    </span>
                    <span className="text-xs text-[#C4CAD4]/60 font-light mt-1 block">
                      Fed, ECB, BOJ Speech Aggregation
                    </span>
                  </div>
                  <div className="p-4 bg-[#11151D] border border-white/5 rounded">
                    <span className="text-[11px] font-mono uppercase text-[#C6A76A] block mb-1">
                      Volatility Regime
                    </span>
                    <span className="text-lg font-bold text-white block">
                      Contraction / Low Skew
                    </span>
                    <span className="text-xs text-[#C4CAD4]/60 font-light mt-1 block">
                      VIX Implied Surface: Normal Term Structure
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-[#0D1118] border border-white/5 rounded text-xs leading-relaxed text-[#C4CAD4]">
                  <strong className="text-white block mb-1 font-mono">NebulaMarket AI Inference Summary:</strong>
                  Cross-asset factor clustering reflects synchronized risk-on allocation in index futures with moderate bond yield stabilization. Algorithmic liquidity indicators recommend trend continuation parameters over defensive hedging.
                </div>
              </div>
            )}

            {activeFeatureTab === 'smart' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-[#11151D] border border-white/5 rounded">
                    <span className="text-xs font-mono text-[#C6A76A] uppercase block mb-3">
                      Order Book Liquidity Imbalance (Bid / Ask Depth)
                    </span>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-emerald-400">Total Bids: 64.2%</span>
                        <span className="text-rose-400">Total Asks: 35.8%</span>
                      </div>
                      <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden flex">
                        <div className="h-full bg-emerald-500/80 w-[64%]" />
                        <div className="h-full bg-rose-500/80 w-[36%]" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-[#11151D] border border-white/5 rounded">
                    <span className="text-xs font-mono text-[#C6A76A] uppercase block mb-3">
                      Cumulative Volume Delta (CVD)
                    </span>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-emerald-400 font-mono">+18,450 Lots</span>
                        <span className="text-xs text-[#C4CAD4]/60 block mt-0.5">Aggressive Market Buyers</span>
                      </div>
                      <span className="text-xs font-mono text-[#C6A76A] bg-[#C6A76A]/10 px-2 py-1 rounded">
                        Absorption Detected
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#0D1118] border border-white/5 rounded text-xs text-[#C4CAD4]">
                  Microstructure research indicates passive resting liquidity above 5,900. Institutional order flow tracking registers structured block sweeps in near-the-money index options.
                </div>
              </div>
            )}

            {activeFeatureTab === 'screener' && (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-white/10 text-white/40 pb-2">
                      <th className="py-2">ASSET / TICKER</th>
                      <th className="py-2">LAST PRICE</th>
                      <th className="py-2">24H CHANGE</th>
                      <th className="py-2">QUANTITATIVE BIAS</th>
                      <th className="py-2 text-right">VOLUME</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {marketAssets.map((asset, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="py-3 font-semibold text-white">{asset.ticker}</td>
                        <td className="py-3 text-[#C6A76A] tabular-nums font-medium">{asset.price}</td>
                        <td className={`py-3 tabular-nums ${asset.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {asset.change}
                        </td>
                        <td className="py-3 text-[#C4CAD4]">{asset.bias}</td>
                        <td className="py-3 text-right text-white/70 tabular-nums">{asset.vol}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Bottom Footer Action */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-[#C4CAD4]/60 font-light">
                NebulaMarket V5 is the dedicated quantitative technology partner platform powering GAMA CAPITAL research workflows.
              </span>
              <a
                href="https://www.nebulamarket.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#C6A76A] hover:text-[#EAD8AC] font-semibold uppercase tracking-wider transition-colors whitespace-nowrap"
              >
                <span>Launch NebulaMarket Console</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
