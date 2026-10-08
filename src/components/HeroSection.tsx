import React, { useState } from 'react';
import { MessageCircle, Phone, ArrowRight, Sparkles, CheckCircle2, Users, Trophy, BookOpen, Star, Calendar } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas.tsx';
import { AcademyLogo } from './AcademyLogo.tsx';
import { ACADEMY_CONTACT, CORE_VALUES } from '../data/academyData.ts';

interface HeroSectionProps {
  onOpenDemoModal: (programId?: string) => void;
}

interface StreamTab {
  id: string;
  code: string;
  name: string;
  category: string;
  target: string;
  subjects: string;
  seatsStatus: string;
  timings: string;
}

const STREAM_TABS: StreamTab[] = [
  {
    id: 'school',
    code: '6TH – 10TH',
    name: 'School Board Foundation',
    category: 'State Board (SSC) · CBSE · ICSE',
    target: '10.0 / 10.0 GPA in SSC & 95%+ in CBSE Boards',
    subjects: 'Maths, Physical Science, Biology, English & Social',
    seatsStatus: 'Batch 1: 5 Seats Left',
    timings: 'Evening: 5:00 PM – 7:15 PM',
  },
  {
    id: 'mpc',
    code: 'MPC',
    name: 'Intermediate MPC',
    category: 'Junior College (1st & 2nd Year)',
    target: 'IPE Board (1000 Marks) + TG EAPCET / JEE Base',
    subjects: 'Mathematics 1A/1B/2A/2B, Physics, Chemistry',
    seatsStatus: 'Batch 2: 4 Seats Left',
    timings: 'Morning: 6:30 AM | Evening: 5:00 PM',
  },
  {
    id: 'bipc',
    code: 'BiPC',
    name: 'Intermediate BiPC',
    category: 'Junior College (Medical & Science)',
    target: 'IPE Board Marks + NEET Foundation Focus',
    subjects: 'Botany, Zoology, Physics, Chemistry',
    seatsStatus: 'Batch 1: 6 Seats Left',
    timings: 'Evening: 4:30 PM – 7:30 PM',
  },
  {
    id: 'cec',
    code: 'CEC',
    name: 'Intermediate CEC',
    category: 'Junior College (Commerce & Humanities)',
    target: 'State Merit in IPE + CA Foundation Base',
    subjects: 'Commerce, Accountancy, Economics, Civics',
    seatsStatus: 'Batch 1: 5 Seats Left',
    timings: 'Evening: 5:00 PM – 7:30 PM',
  },
  {
    id: 'mec',
    code: 'MEC',
    name: 'Intermediate MEC',
    category: 'Junior College (Maths & Commerce)',
    target: 'IPE Board + CUET / Finance Foundation',
    subjects: 'Mathematics, Economics, Commerce, Accountancy',
    seatsStatus: 'Batch 1: 7 Seats Left',
    timings: 'Evening: 5:00 PM – 8:00 PM',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemoModal }) => {
  const [activeTab, setActiveTab] = useState<StreamTab>(STREAM_TABS[0]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#061d23] via-[#092d35] to-[#07242b] text-white pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
      {/* Interactive Floating Knowledge Particles */}
      <ParticleCanvas className="opacity-60" particleCount={50} interactive={true} />

      {/* Modern Ambient Mesh Glows */}
      <div
        className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-[#0d9488]/15 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-10 -right-40 w-[450px] h-[450px] rounded-full bg-[#f37021]/15 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Brand, Narrative & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-medium text-amber-300 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#f37021] animate-pulse shrink-0" />
              <span className="text-white/90">Admissions Open 2025–2026</span>
              <span aria-hidden="true" className="text-white/30">|</span>
              <span className="text-amber-300 font-semibold">Strictly 15–20 Students / Batch</span>
            </div>

            {/* Brand Lockup */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <AcademyLogo size="md" showText={false} />
              <div className="text-left">
                <span className="font-script text-2xl text-amber-400 font-bold block leading-none">
                  Kabeer Sir's
                </span>
                <span className="font-display font-extrabold text-sm uppercase tracking-widest text-teal-200">
                  EdWorld Academy · Hyderabad
                </span>
              </div>
            </div>

            {/* Main Creative Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Making Learning <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#ff8a00] to-[#f37021]">
                Clear, Intuitive
              </span>{' '}
              &amp; Effortless.
            </h1>

            {/* Subtitle Value Proposition */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-teal-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Specialized coaching for <strong className="text-white">6th to 10th</strong> and{' '}
              <strong className="text-white">Intermediate (MPC · BiPC · CEC · MEC)</strong>. We eliminate rote
              memorization with strong conceptual foundations, personal desk visits, and daily doubt clearance.
            </p>

            {/* Class Modes Quick Tagline */}
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-teal-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Offline: Shah Ali Banda New Road Center</span>
              </span>
              <span aria-hidden="true" className="hidden sm:inline text-teal-600">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Online: Live Interactive Anywhere</span>
              </span>
            </div>

            {/* Action CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 max-w-xl mx-auto lg:mx-0">
              {/* WhatsApp Button */}
              <a
                href={ACADEMY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/40 transition-all flex items-center justify-center gap-2.5 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Free Demo Trial */}
              <button
                onClick={() => onOpenDemoModal(activeTab.id)}
                className="min-h-[48px] px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#f37021] to-[#e05e10] hover:from-[#ff7e2b] hover:to-[#ea580c] shadow-lg shadow-orange-950/40 transition-all flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Book 2-Day Free Demo</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              {/* Direct Call Button */}
              <a
                href={`tel:${ACADEMY_CONTACT.phoneNumberClean}`}
                className="min-h-[48px] px-4 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-teal-100 bg-white/10 hover:bg-white/15 border border-white/20 transition-all flex items-center justify-center gap-2"
                title="Call Kabeer Sir"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono tabular-nums">{ACADEMY_CONTACT.phoneDisplay}</span>
              </a>
            </div>

            {/* Social Trust Metrics */}
            <div className="mt-8 pt-6 border-t border-teal-800/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-teal-200">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-[10px] font-black text-slate-900 ring-2 ring-[#0a333d]">
                    10
                  </div>
                  <div className="w-6 h-6 rounded-full bg-emerald-400 flex items-center justify-center text-[10px] font-black text-slate-900 ring-2 ring-[#0a333d]">
                    98
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#f37021] flex items-center justify-center text-[10px] font-black text-white ring-2 ring-[#0a333d]">
                    KS
                  </div>
                </div>
                <span>
                  <strong className="text-white">10.0 GPA &amp; 986/1000</strong> Board Record
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-teal-100">
                  <strong className="text-white">4.9/5 Rating</strong> by Hyderabad Parents
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Interactive Live Hub Card (Not a flat flyer!) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Ambient Card Frame Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#f37021]/30 via-amber-500/20 to-teal-500/30 blur-xl opacity-70 pointer-events-none" />

              <div className="relative rounded-3xl bg-[#07242b]/95 border border-teal-700/60 shadow-2xl p-5 sm:p-7 backdrop-blur-xl">
                {/* Hub Header */}
                <div className="flex items-center justify-between pb-4 border-b border-teal-800/70 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-display font-bold text-xs uppercase tracking-wider text-teal-200">
                      Live Stream Selector
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                    {activeTab.seatsStatus}
                  </span>
                </div>

                {/* Interactive Stream Tabs Bar */}
                <div className="grid grid-cols-5 gap-1 p-1 bg-black/40 rounded-xl mb-5">
                  {STREAM_TABS.map((tab) => {
                    const isSelected = activeTab.id === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab)}
                        className={`py-2 px-1 rounded-lg text-xs font-bold transition-all cursor-pointer text-center ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#f37021] to-[#e05e10] text-white shadow-md'
                            : 'text-teal-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {tab.code}
                      </button>
                    );
                  })}
                </div>

                {/* Dynamic Content Display for Active Tab */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300">
                      {activeTab.category}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                      {activeTab.name}
                    </h3>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                      <span className="text-teal-300 block font-semibold mb-0.5">Primary Target:</span>
                      <span className="text-white font-bold">{activeTab.target}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                      <span className="text-teal-300 block font-semibold mb-0.5">Batch Schedule:</span>
                      <span className="text-white font-bold">{activeTab.timings}</span>
                    </div>
                  </div>

                  {/* Subjects Covered */}
                  <div className="p-3 rounded-xl bg-teal-950/60 border border-teal-800/70 text-xs">
                    <span className="text-amber-400 font-bold block mb-1">Curriculum &amp; Subjects:</span>
                    <span className="text-teal-100">{activeTab.subjects}</span>
                  </div>

                  {/* 3 Core Small Batch Guarantees */}
                  <div className="space-y-2 pt-1 text-xs text-teal-100">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#f37021] shrink-0" />
                      <span>Max 15–20 Students per classroom — no overcrowding</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#f37021] shrink-0" />
                      <span>Personal 1-on-1 problem-solving with Kabeer Sir</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-[#f37021] shrink-0" />
                      <span>Weekly chapter mock test &amp; WhatsApp progress reports</span>
                    </div>
                  </div>

                  {/* Quick Card Action */}
                  <div className="pt-2">
                    <a
                      href={ACADEMY_CONTACT.whatsappCourseUrl(activeTab.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full min-h-[46px] py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md flex items-center justify-center gap-2 active:scale-[0.98]"
                    >
                      <MessageCircle className="w-4 h-4 fill-white text-emerald-600 shrink-0" />
                      <span>Inquire {activeTab.code} Seats via WhatsApp</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Strip (Replacing flat bottom bar with refined card grid) */}
        <div className="mt-14 pt-8 border-t border-teal-800/60 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {CORE_VALUES.map((val) => (
            <div
              key={val.title}
              className="bg-[#051c21]/90 rounded-2xl p-4 sm:p-5 border border-teal-800/60 hover:border-[#f37021]/50 transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-2">
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
