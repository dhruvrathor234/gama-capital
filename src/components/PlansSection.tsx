import React from 'react';
import { Check, ArrowRight, Shield, Cpu, Landmark } from 'lucide-react';

interface PlansSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onSelectPlan }) => {
  const models = [
    {
      id: 'technology-partner',
      name: 'Technology Partner',
      tagline: 'Collaborative algorithmic tooling & intelligence systems.',
      icon: Cpu,
      isFeatured: false,
      focus: 'Tech Infrastructure & Analytics',
      features: [
        'Access to trading technology discussions',
        'Market intelligence infrastructure',
        'Strategic technology collaboration',
        'Customized partnership discussions',
        'Multi-market execution API evaluation',
        'Co-development of analytical tooling',
      ],
      complianceNote: 'Focuses on software, data infrastructure, and algorithmic pipelines.',
    },
    {
      id: 'strategic-capital-partner',
      name: 'Strategic Capital Partner',
      tagline: 'Capital allocation frameworks and disciplined risk governance.',
      icon: Landmark,
      isFeatured: true,
      focus: 'Allocation & Framework Exploration',
      features: [
        'Institutional partnership discussions',
        'Capital allocation framework exploration',
        'Risk management framework discussions',
        'Periodic reporting framework',
        'Customized engagement subject to regulatory eligibility',
        'Multi-scenario stress testing reviews',
      ],
      complianceNote: 'Structured strictly through compliant legal frameworks and accredited eligibility.',
    },
    {
      id: 'institutional-partner',
      name: 'Institutional Partner',
      tagline: 'Enduring ecosystem collaboration across global venues.',
      icon: Shield,
      isFeatured: false,
      focus: 'Enterprise & Ecosystem Growth',
      features: [
        'Long-term strategic collaboration',
        'Quantitative research collaboration',
        'Trading infrastructure partnerships',
        'Institutional relationship development',
        'Customized institutional engagement',
        'Executive committee briefing sessions',
      ],
      complianceNote: 'Designed for institutions, sovereign entities, and quantitative desks.',
    },
  ];

  return (
    <section id="plans" className="relative py-28 bg-[#080A0F] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C6A76A] mb-3">
            Engagement Frameworks
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight">
            Partnership & <span className="font-semibold text-[#C6A76A]">Engagement Models</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#C4CAD4] leading-relaxed font-light">
            We engage with qualified counterparties, quantitative researchers, and technology collaborators through structured, regulatory-compliant partnership pathways.
          </p>
        </div>

        {/* 3 Premium Engagement Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {models.map((model) => {
            const Icon = model.icon;
            return (
              <div
                key={model.id}
                className={`relative flex flex-col justify-between p-8 sm:p-9 rounded-sm transition-all duration-300 ${
                  model.isFeatured
                    ? 'bg-[#141923] border-2 border-[#C6A76A] shadow-2xl shadow-[#C6A76A]/10'
                    : 'bg-[#11151D] border border-white/10 hover:border-white/20'
                }`}
              >
                {model.isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#EAD8AC] via-[#C6A76A] to-[#C6A76A] text-[#080A0F] text-[10px] font-bold uppercase tracking-[0.25em] px-3.5 py-1 rounded-sm shadow-md whitespace-nowrap">
                    Core Institutional Model
                  </div>
                )}

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#C6A76A] block">
                        {model.focus}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight mt-1">
                        {model.name}
                      </h3>
                    </div>
                    <div
                      className={`w-11 h-11 rounded-sm flex items-center justify-center ${
                        model.isFeatured
                          ? 'bg-[#C6A76A]/15 border border-[#C6A76A]/40 text-[#C6A76A]'
                          : 'bg-[#080A0F] border border-white/10 text-[#C4CAD4]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-sm text-[#C4CAD4]/80 font-light leading-relaxed mb-6">
                    {model.tagline}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                            model.isFeatured
                              ? 'bg-[#C6A76A]/20 text-[#C6A76A]'
                              : 'bg-white/5 text-[#C4CAD4]'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="text-xs sm:text-sm text-[#C4CAD4] font-light">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer and Action */}
                <div>
                  <p className="text-[11px] text-white/40 italic mb-6 leading-normal border-t border-white/5 pt-4">
                    {model.complianceNote}
                  </p>

                  <button
                    onClick={() => onSelectPlan(model.name)}
                    className={`w-full group inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-semibold tracking-wider uppercase rounded-sm transition-all duration-200 ${
                      model.isFeatured
                        ? 'bg-gradient-to-r from-[#EAD8AC] via-[#C6A76A] to-[#C6A76A] text-[#080A0F] hover:brightness-110 shadow-lg shadow-[#C6A76A]/20'
                        : 'bg-[#080A0F] border border-white/10 text-white hover:border-[#C6A76A]/50 hover:bg-[#161C26]'
                    }`}
                  >
                    <span>Discuss Partnership</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Integrity Reminder */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#C4CAD4]/60 max-w-2xl mx-auto font-light">
            GAMA CAPITAL does not offer retail investment accounts or solicit public deposits. All partnerships are evaluated on strategic alignment, technical synergy, and regulatory qualification.
          </p>
        </div>
      </div>
    </section>
  );
};
