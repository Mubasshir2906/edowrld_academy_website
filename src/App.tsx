/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { KeyHallmarks } from './components/KeyHallmarks.tsx';
import { ProgramsSection } from './components/ProgramsSection.tsx';
import { LearningModes } from './components/LearningModes.tsx';
import { StreamCalculator } from './components/StreamCalculator.tsx';
import { AboutFaculty } from './components/AboutFaculty.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { DemoBookingSection } from './components/DemoBookingSection.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { DemoBookingModal } from './components/DemoBookingModal.tsx';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedProgramForDemo, setSelectedProgramForDemo] = useState<string>('10th SSC / CBSE');

  const handleOpenDemoModal = (programCode?: string) => {
    if (programCode) {
      setSelectedProgramForDemo(programCode);
    }
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#faf8f5] text-slate-800 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Bar Header */}
      <Header onOpenDemoModal={() => handleOpenDemoModal()} />

      <main className="flex-1 pb-12 sm:pb-0">
        {/* Hero Section with Dynamic Interactive Particles */}
        <HeroSection onOpenDemoModal={() => handleOpenDemoModal()} />

        {/* The 4 EdWorld Key Hallmarks from the Flyer */}
        <KeyHallmarks />

        {/* Academic Curriculum: 6th to 10th & Intermediate (MPC, BiPC, CEC, MEC) */}
        <ProgramsSection onOpenDemoModal={handleOpenDemoModal} />

        {/* Offline & Online Classes Comparison */}
        <LearningModes />

        {/* Interactive Batch Finder & Roadmap Planner */}
        <StreamCalculator />

        {/* Meet Kabeer Sir & Mentorship Philosophy */}
        <AboutFaculty />

        {/* Results & Student Testimonials */}
        <TestimonialsSection />

        {/* Reserve Free Demo Class Section */}
        <DemoBookingSection />

        {/* Campus & Location Desk: Shah Ali Banda New Road */}
        <LocationSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action & Mobile Dock */}
      <FloatingWhatsApp onOpenDemoModal={() => handleOpenDemoModal()} />

      {/* Interactive Demo Booking Dialog Modal */}
      <DemoBookingModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
        defaultProgram={selectedProgramForDemo}
      />
    </div>
  );
}
