import React from 'react';
import { X, ShieldAlert, FileText, Lock, Scale } from 'lucide-react';

export type LegalModalType = 'risk' | 'disclaimer' | 'terms' | 'privacy' | null;

interface LegalModalProps {
  modalType: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ modalType, onClose }) => {
  if (!modalType) return null;

  const contentMap = {
    risk: {
      title: 'Risk Disclosure Statement',
      icon: ShieldAlert,
      sections: [
        {
          heading: '1. Inherent Market Volatility',
          body: 'Participation in global financial markets, including equities, futures, options, commodities, and derivatives, entails substantial economic risk. Capital values can fluctuate violently in response to macroeconomic changes, geopolitical events, liquidity shocks, and system latency.',
        },
        {
          heading: '2. No Capital or Return Guarantees',
          body: 'Past performance, backtested results, and statistical simulations conducted by GAMA CAPITAL or its partner tools (such as NebulaMarket V5) do not guarantee future performance. No returns, yields, or profits are assured or guaranteed under any circumstances.',
        },
        {
          heading: '3. Algorithmic and Technological Risk',
          body: 'Quantitative and systematic execution strategies rely on software, networks, data feeds, and execution routing systems. Disruption in data feeds, hardware failures, unexpected algorithmic edge cases, and market flash events may impact strategy performance.',
        },
      ],
    },
    disclaimer: {
      title: 'Regulatory Status & Disclaimer',
      icon: Scale,
      sections: [
        {
          heading: '1. General Informational Use Only',
          body: 'The content provided on this website is for informational, educational, and business communication purposes only. Nothing contained herein constitutes financial advice, tax guidance, investment recommendation, or an endorsement of any security or trading strategy.',
        },
        {
          heading: '2. Regulatory Clarification',
          body: 'GAMA CAPITAL is an emerging financial technology and quantitative trading venture. GAMA CAPITAL does not operate as a registered public hedge fund, SEBI-registered portfolio management service, or retail deposit-taking institution unless and until required statutory licenses are formally granted by relevant jurisdictions.',
        },
        {
          heading: '3. Jurisdiction Restrictions',
          body: 'This website is not directed at any person in any jurisdiction where the publication or availability of this website is prohibited by reason of nationality, residence, or local law.',
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions of Use',
      icon: FileText,
      sections: [
        {
          heading: '1. Acceptance of Terms',
          body: 'By accessing the GAMA CAPITAL website, you agree to be bound by these Terms & Conditions and all applicable laws and regulations.',
        },
        {
          heading: '2. Intellectual Property',
          body: 'All brand names, logos, proprietary models, methodologies, UI architectures, and written content appearing on this website are the intellectual property of GAMA CAPITAL and its technology partners.',
        },
        {
          heading: '3. Limitation of Liability',
          body: 'In no event shall GAMA CAPITAL, its directors, partners, or affiliates be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website or its referenced materials.',
        },
      ],
    },
    privacy: {
      title: 'Institutional Privacy Policy',
      icon: Lock,
      sections: [
        {
          heading: '1. Information We Collect',
          body: 'We collect institutional contact details voluntarily submitted via our partnership inquiry portal (such as name, organization, corporate email, role, and inquiry scope).',
        },
        {
          heading: '2. Use of Information',
          body: 'Submitted information is used exclusively to evaluate partnership suitability, conduct professional correspondence, and fulfill compliance obligations. We never sell, lease, or monetize partner information.',
        },
        {
          heading: '3. Data Security & Retention',
          body: 'All institutional inquiry communications are stored using industry-standard encrypted storage mechanisms and accessed only by authorized partnership officers.',
        },
      ],
    },
  };

  const current = contentMap[modalType];
  const Icon = current.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#11151D] border border-[#C6A76A]/40 rounded-sm shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#C4CAD4] hover:text-white hover:bg-white/5 rounded transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
          <div className="w-10 h-10 rounded bg-[#080A0F] border border-[#C6A76A]/40 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-[#C6A76A]" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#C6A76A] block">
              GAMA CAPITAL Legal Framework
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {current.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 text-sm text-[#C4CAD4] font-light leading-relaxed">
          {current.sections.map((section, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="text-white font-semibold text-sm tracking-tight">
                {section.heading}
              </h4>
              <p className="text-xs sm:text-sm text-[#C4CAD4]/80">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
          <span>Last revised: October 2026</span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#080A0F] bg-[#C6A76A] hover:bg-[#EAD8AC] rounded-sm transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
