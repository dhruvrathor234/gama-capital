import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onPartnerClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPartnerClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Gama', href: '#why-gama' },
    { name: 'Our Strategies', href: '#strategies' },
    { name: 'Our Plans', href: '#plans' },
    { name: 'Technology', href: '#technology' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePartnerAction = () => {
    setMobileMenuOpen(false);
    if (onPartnerClick) {
      onPartnerClick();
    } else {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080A0F]/95 backdrop-blur-md border-b border-[#C6A76A]/20 py-3.5 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-[#080A0F]/90 via-[#080A0F]/50 to-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Monogram */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="flex items-center whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A76A]"
            aria-label="GAMA CAPITAL Home"
          >
            <BrandLogo size="md" />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide text-[#C4CAD4]"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="relative py-1 transition-colors hover:text-[#C6A76A] whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C6A76A] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button
              onClick={handlePartnerAction}
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#080A0F] bg-gradient-to-r from-[#EAD8AC] via-[#C6A76A] to-[#C6A76A] rounded-sm hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#C6A76A]/20 whitespace-nowrap"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#C4CAD4] hover:text-[#C6A76A] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A76A]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0E14] border-b border-[#C6A76A]/25 px-5 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="py-2 text-base font-medium text-[#C4CAD4] hover:text-[#C6A76A] border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={handlePartnerAction}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#080A0F] bg-gradient-to-r from-[#EAD8AC] via-[#C6A76A] to-[#C6A76A] rounded-sm hover:brightness-110 transition-all"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
