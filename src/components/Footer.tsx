import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ArrowUpRight, ExternalLink, Mail, Phone, MessageSquare } from 'lucide-react';
import { LegalModalType } from './LegalModals';

interface FooterProps {
  onOpenLegal: (type: NonNullable<LegalModalType>) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Gama', href: '#why-gama' },
    { name: 'Our Strategies', href: '#strategies' },
    { name: 'Our Plans', href: '#plans' },
    { name: 'Technology', href: '#technology' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#05070A] text-[#C4CAD4] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Direct Contact Highlight Bar */}
        <div className="mb-14 p-6 sm:p-8 bg-[#0D1118] border border-[#C6A76A]/25 rounded-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-widest text-[#C6A76A] block">
              Direct Institutional Contact
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Get in Touch with GAMA CAPITAL
            </h3>
            <p className="text-xs text-[#C4CAD4]/80 font-light">
              Submit your inquiries directly to our desk for immediate review.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="mailto:gamacapitalai@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#141923] border border-white/10 hover:border-[#C6A76A]/50 rounded-sm text-xs font-medium text-white hover:text-[#C6A76A] transition-all"
            >
              <Mail className="w-4 h-4 text-[#C6A76A]" />
              <span>gamacapitalai@gmail.com</span>
            </a>

            <a
              href="tel:+919319799796"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#141923] border border-white/10 hover:border-[#C6A76A]/50 rounded-sm text-xs font-mono font-medium text-white hover:text-[#C6A76A] transition-all"
            >
              <Phone className="w-4 h-4 text-[#C6A76A]" />
              <span>+91 9319799796</span>
            </a>

            <a
              href="https://wa.me/919319799796?text=Hello%20GAMA%20CAPITAL,%20I%20am%20interested%20in%20a%20strategic%20partnership."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600/20 border border-emerald-500/40 hover:bg-emerald-600/30 rounded-sm text-xs font-semibold text-emerald-400 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Brand & Positioning Column */}
          <div className="lg:col-span-5 space-y-5">
            <BrandLogo size="lg" showTagline={true} />
            <p className="text-sm text-[#C4CAD4]/80 leading-relaxed font-light max-w-sm pt-2">
              An institutional quantitative trading and capital operations venture combining intelligent technology, econometric research, and invariant risk governance.
            </p>
            <div className="flex items-center gap-3 pt-3">
              <span className="text-xs uppercase font-mono tracking-widest text-[#C6A76A]">
                Tagline:
              </span>
              <span className="text-xs text-white font-medium tracking-wide">
                “Precision. Strategy. Performance.”
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#C6A76A]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavScroll(link.href);
                    }}
                    className="hover:text-[#C6A76A] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Partner & Socials Column */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#C6A76A] mb-3">
                Technology Partner
              </h4>
              <a
                href="https://www.nebulamarket.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 p-3.5 bg-[#11151D] border border-white/5 hover:border-[#C6A76A]/40 rounded-sm transition-all text-xs text-white"
              >
                <div>
                  <span className="font-semibold block text-sm group-hover:text-[#C6A76A] transition-colors">
                    NebulaMarket V5
                  </span>
                  <span className="text-[11px] text-[#C4CAD4]/60 block font-light">
                    Market Intelligence & Trading Infrastructure
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#C6A76A] ml-2 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#C6A76A] mb-3">
                Direct Channels
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="mailto:gamacapitalai@gmail.com"
                  className="px-3.5 py-1.5 bg-[#11151D] border border-white/5 hover:border-[#C6A76A]/40 text-xs text-white/80 hover:text-[#C6A76A] rounded-sm transition-colors"
                >
                  gamacapitalai@gmail.com
                </a>
                <a
                  href="tel:+919319799796"
                  className="px-3.5 py-1.5 bg-[#11151D] border border-white/5 hover:border-[#C6A76A]/40 text-xs font-mono text-white/80 hover:text-[#C6A76A] rounded-sm transition-colors"
                >
                  +91 9319799796
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Links & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#C4CAD4]/60">
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-white/20">·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
            <span className="text-white/20">·</span>
            <button
              onClick={() => onOpenLegal('risk')}
              className="hover:text-white transition-colors"
            >
              Risk Disclosure
            </button>
            <span className="text-white/20">·</span>
            <button
              onClick={() => onOpenLegal('disclaimer')}
              className="hover:text-white transition-colors"
            >
              Disclaimer
            </button>
          </div>

          <div className="font-mono text-white/50">
            © 2026 GAMA CAPITAL. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
