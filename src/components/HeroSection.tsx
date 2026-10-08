import React from 'react';
import { MessageCircle, Phone, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas.tsx';
import { AcademyLogo } from './AcademyLogo.tsx';
import { ACADEMY_CONTACT, CORE_VALUES } from '../data/academyData.ts';

interface HeroSectionProps {
  onOpenDemoModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemoModal }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#07242b] via-[#0a333d] to-[#082a32] text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Dynamic Interactive Particle Canvas */}
      <ParticleCanvas className="opacity-70" particleCount={65} interactive={true} />

      {/* Background Graphic Accents (evoking the flyer's orange geometric cuts) */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#f37021]/25 via-amber-500/10 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-tr from-[#0d9488]/30 via-[#f37021]/15 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Dotted Grid pattern like flyer's top-right corner */}
      <div
        className="absolute top-6 right-6 sm:top-10 sm:right-12 hidden md:grid grid-cols-4 gap-2 opacity-35 pointer-events-none"
        aria-hidden="true"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-teal-300" />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Admissions Open Announcement Ribbon */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-xs sm:text-sm font-medium text-amber-300 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#f37021] animate-pulse" />
            <span className="text-white/90">Admissions Open for 2025–2026 Academic Year</span>
            <span aria-hidden="true" className="text-amber-400">·</span>
            <span className="text-amber-300 font-semibold">Limited Seats in Small Batches</span>
          </div>

          {/* Master Brand Emblem & Typography */}
          <div className="mb-4">
            <AcademyLogo size="hero" showText={false} className="justify-center mx-auto mb-4 hover:scale-105 transition-transform duration-300" />
            
            <p className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#ff8a00] font-bold tracking-wide drop-shadow-sm -mb-2">
              Kabeer Sir's
            </p>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white drop-shadow-md">
              EDWORLD <span className="text-[#f37021]">ACADEMY</span>
            </h1>

            {/* Sub-banner line with lines */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2 mb-6">
              <span className="h-0.5 w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#f37021]" />
              <span className="text-xs sm:text-sm md:text-base font-extrabold tracking-[0.25em] text-teal-100 uppercase">
                {ACADEMY_CONTACT.tagline}
              </span>
              <span className="h-0.5 w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#f37021]" />
            </div>
          </div>

          {/* Classes Banner Frame (Mimicking Flyer Centerpiece) */}
          <div className="w-full max-w-3xl mx-auto mb-8 bg-gradient-to-r from-white/10 via-white/15 to-white/10 p-1 rounded-2xl border border-white/20 backdrop-blur-md shadow-2xl">
            <div className="bg-[#062127]/90 rounded-xl px-4 py-5 sm:px-8 sm:py-6 text-center">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-teal-300 block mb-1">
                ADMISSIONS NOW OPEN
              </span>
              
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                CLASSES FOR <span className="text-amber-400">6TH TO 10TH</span> & <span className="text-[#f37021]">INTERMEDIATE</span>
              </h2>

              {/* Stream Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {['MPC', 'BiPC', 'CEC', 'MEC'].map((stream) => (
                  <div
                    key={stream}
                    className="px-4 py-1.5 sm:px-6 sm:py-2 rounded-lg bg-gradient-to-r from-[#f37021] to-[#ff7b1a] text-white font-display font-black text-sm sm:text-base tracking-wider shadow-md hover:scale-105 transition-transform"
                  >
                    {stream}
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-teal-800/60 flex items-center justify-center gap-2 text-xs sm:text-sm text-teal-200/90 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#f37021] shrink-0" />
                <span>State Board (SSC) · CBSE · ICSE · IPE Board · EAMCET & NEET Foundation</span>
              </div>
            </div>
          </div>

          {/* Subtitle Callout: "Join Today... Shape Your Tomorrow!" */}
          <p className="font-script text-2xl sm:text-3xl text-amber-300 font-bold mb-8">
            "{ACADEMY_CONTACT.subTagline}"
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xl mb-12">
            {/* Direct WhatsApp Button */}
            <a
              href={ACADEMY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>Contact on WhatsApp</span>
            </a>

            {/* Book Demo Class */}
            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#f37021] to-[#e05e10] hover:from-[#ff7e2b] hover:to-[#ea580c] shadow-lg shadow-orange-950/40 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Book Free Demo Class</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Direct Phone Call */}
            <a
              href={`tel:${ACADEMY_CONTACT.phoneNumberClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-sm sm:text-base font-bold text-teal-100 bg-white/10 hover:bg-white/15 border border-white/20 transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span className="tabular-nums font-mono">{ACADEMY_CONTACT.phoneDisplay}</span>
            </a>
          </div>

          {/* Offline & Online Dual Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-teal-200/90 mb-12">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="font-semibold text-white">Offline Classes:</span>
              <span>Shah Ali Banda New Road Center</span>
            </div>
            <span aria-hidden="true" className="hidden sm:inline text-teal-600">|</span>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="font-semibold text-white">Online Classes:</span>
              <span>Interactive Live from Anywhere</span>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Strip (Bottom bar from the flyer) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-teal-800/60">
          {CORE_VALUES.map((val) => (
            <div
              key={val.title}
              className="bg-[#051c21]/80 rounded-xl p-3.5 sm:p-4 border border-teal-800/50 hover:border-amber-500/50 transition-colors"
            >
              <span className="text-[11px] font-bold text-amber-400 tracking-wider uppercase block">
                {val.title}
              </span>
              <p className="font-display font-extrabold text-sm sm:text-base text-white mt-0.5">
                {val.subtitle}
              </p>
              <p className="text-xs text-teal-200/70 mt-1 line-clamp-2">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
