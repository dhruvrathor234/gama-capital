/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InstitutionalIntro } from './components/InstitutionalIntro';
import { AboutSection } from './components/AboutSection';
import { WhyGamaSection } from './components/WhyGamaSection';
import { StrategiesSection } from './components/StrategiesSection';
import { PlansSection } from './components/PlansSection';
import { TechnologySection } from './components/TechnologySection';
import { ContactSection } from './components/ContactSection';
import { RiskDisclosure } from './components/RiskDisclosure';
import { Footer } from './components/Footer';
import { LegalModal, LegalModalType } from './components/LegalModals';

export default function App() {
  const [selectedPlanInterest, setSelectedPlanInterest] = useState<string>('');
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlanInterest(planName);
    scrollToSection('#contact');
  };

  return (
    <div className="min-h-screen bg-[#080A0F] text-slate-100 flex flex-col font-sans selection:bg-[#C6A76A]/20 selection:text-[#C6A76A]">
      {/* Top Navigation Bar */}
      <Navbar onPartnerClick={() => scrollToSection('#contact')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1 & 3: Hero & Institutional Visual Statement */}
        <Hero
          onExploreClick={() => scrollToSection('#about')}
          onPartnerClick={() => scrollToSection('#contact')}
        />

        {/* Institutional Transition Section */}
        <InstitutionalIntro />

        {/* Section 4: About GAMA CAPITAL */}
        <AboutSection />

        {/* Section 5: Why Gama */}
        <WhyGamaSection />

        {/* Section 6: Our Trading & Research Capabilities */}
        <StrategiesSection />

        {/* Section 7: Partnership & Engagement Models */}
        <PlansSection onSelectPlan={handleSelectPlan} />

        {/* Section 8: Technology Ecosystem - NebulaMarket V5 */}
        <TechnologySection />

        {/* Section 9: Institutional Contact Form */}
        <ContactSection initialInterest={selectedPlanInterest} />

        {/* Section 11: Mandatory Risk & Regulatory Disclosure */}
        <RiskDisclosure onOpenLegalModal={(type) => setActiveLegalModal(type)} />
      </main>

      {/* Section 10: Institutional Footer */}
      <Footer onOpenLegal={(type) => setActiveLegalModal(type)} />

      {/* Legal Dialog Modal */}
      <LegalModal
        modalType={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}
