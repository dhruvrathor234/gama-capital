import React from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

interface RiskDisclosureProps {
  onOpenLegalModal: (type: 'risk' | 'disclaimer' | 'terms' | 'privacy') => void;
}

export const RiskDisclosure: React.FC<RiskDisclosureProps> = ({ onOpenLegalModal }) => {
  return (
    <section className="relative py-16 bg-[#06080C] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B0E14] border border-[#C6A76A]/20 p-8 sm:p-10 rounded-sm relative overflow-hidden">
          {/* Subtle top indicator */}
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-4 h-4 text-[#C6A76A]" />
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#C6A76A]">
              Regulatory & Risk Disclosure
            </span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#C4CAD4]/80 leading-relaxed font-light">
            <p>
              GAMA CAPITAL’s website is intended for general informational and business communication purposes only. Nothing on this website constitutes an offer, invitation, solicitation or recommendation to invest, subscribe to any financial product, or enter into any investment arrangement.
            </p>
            <p>
              Trading in financial markets involves substantial risk, including the potential loss of capital. Past performance does not guarantee future results. No returns or profits are guaranteed.
            </p>
            <p>
              Any future investment-related activities, capital arrangements or financial services will be undertaken only through appropriately structured arrangements and subject to applicable regulatory requirements.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-[#C4CAD4]/60">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C6A76A]" />
              <span>Institutional Governance Framework</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => onOpenLegalModal('risk')}
                className="hover:text-[#C6A76A] transition-colors underline underline-offset-4"
              >
                Comprehensive Risk Notice
              </button>
              <button
                onClick={() => onOpenLegalModal('disclaimer')}
                className="hover:text-[#C6A76A] transition-colors underline underline-offset-4"
              >
                Regulatory Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
