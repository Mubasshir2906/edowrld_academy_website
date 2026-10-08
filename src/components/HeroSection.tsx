import React from 'react';
import { MessageCircle, Phone, ArrowRight, Sparkles, Check, Star } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas.tsx';
import { HeroVisualCollage } from './HeroVisualCollage.tsx';
import { ACADEMY_CONTACT, CORE_VALUES } from '../data/academyData.ts';

interface HeroSectionProps {
  onOpenDemoModal: (programId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemoModal }) => {
  return (
    <section className="relative overflow-hidden w-full max-w-full bg-gradient-to-b from-[#061d23] via-[#092d35] to-[#07242b] text-white pt-6 pb-14 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-24">
      {/* Interactive Floating Knowledge Particles */}
      <ParticleCanvas className="opacity-50" particleCount={45} interactive={true} />

      {/* Contained Ambient Mesh Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#0d9488]/15 blur-[100px]" />
        <div className="absolute top-10 -right-20 w-80 h-80 rounded-full bg-[#f37021]/15 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern 2-Column Combination: Left Content & Right Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline & Small Details */}
          <div className="lg:col-span-7 text-left">
            {/* Small Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs text-amber-300 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#f37021] animate-pulse shrink-0" />
              <span className="text-white/95 text-[11px] sm:text-xs">
                admissions open 2025–2026 · shah ali banda center
              </span>
            </div>

            {/* Main Headline requested by user */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] break-words">
              Making learning clear,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#ff8a00] to-[#f37021]">
                intuitive
              </span>{' '}
              &amp; effortless.
            </h1>

            {/* Small text description */}
            <p className="mt-4 text-xs sm:text-sm text-teal-100/90 leading-relaxed max-w-2xl">
              specialized coaching for 6th to 10th and intermediate (mpc · bipc · cec · mec). small batches strictly capped at 15–20 students ensure every concept is thoroughly understood with zero rote memorization.
            </p>

            {/* Small Checklist Points */}
            <div className="mt-5 space-y-2 text-xs text-teal-100">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#f37021] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                </div>
                <span>small batches strictly limited to 15–20 students for personal attention</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#f37021] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                </div>
                <span>daily 1-on-1 problem-solving and desk reviews with kabeer sir</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#f37021] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                </div>
                <span>offline interactive classroom in shah ali banda + live online option</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#f37021] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                </div>
                <span>weekly chapter-wise mock assessments with detailed parent reports</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-xl">
              {/* WhatsApp Button */}
              <a
                href={ACADEMY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/40 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600 shrink-0" />
                <span>Chat on WhatsApp ({ACADEMY_CONTACT.phoneDisplay})</span>
              </a>

              {/* Free Demo Trial */}
              <button
                onClick={() => onOpenDemoModal()}
                className="min-h-[48px] px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#f37021] to-[#e05e10] hover:from-[#ff7e2b] hover:to-[#ea580c] shadow-lg shadow-orange-950/40 transition-all flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Book Free Demo Class</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              {/* Call Direct */}
              <a
                href={`tel:${ACADEMY_CONTACT.phoneNumberClean}`}
                className="min-h-[48px] px-4 py-3.5 rounded-xl font-bold text-xs text-teal-100 bg-white/10 hover:bg-white/15 border border-white/20 transition-all flex items-center justify-center gap-1.5"
                title="Call Kabeer Sir"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-mono tabular-nums">{ACADEMY_CONTACT.phoneDisplay}</span>
              </a>
            </div>

            {/* Small Trust Rating */}
            <div className="mt-6 pt-4 border-t border-teal-800/60 flex items-center gap-3 text-xs text-teal-200">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-[11px] sm:text-xs text-teal-100">
                <strong className="text-white">4.9/5 satisfaction</strong> from 180+ parents · 10.0 GPA &amp; 986/1000 board scorers
              </span>
            </div>
          </div>

          {/* Right Column: Imagery & Visual Showcase */}
          <div className="lg:col-span-5">
            <HeroVisualCollage />
          </div>
        </div>

        {/* 4 Core Pillars Strip */}
        <div className="mt-12 pt-8 border-t border-teal-800/60 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {CORE_VALUES.map((val) => (
            <div
              key={val.title}
              className="bg-[#051c21]/90 rounded-2xl p-4 sm:p-5 border border-teal-800/60 hover:border-[#f37021]/50 transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-black text-amber-400 tracking-wider uppercase">
                  {val.title}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#f37021]" />
              </div>
              <p className="font-display font-extrabold text-sm sm:text-base text-white">
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
