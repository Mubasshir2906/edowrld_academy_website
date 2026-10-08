import React, { useState } from 'react';
import { Users, Trophy, BookOpen, Star, Sparkles, CheckCircle2, MessageCircle, Laptop, School, GraduationCap } from 'lucide-react';
import { ACADEMY_CONTACT } from '../data/academyData.ts';

export const HeroVisualCollage: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'classroom' | 'digital'>('classroom');

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
      {/* Outer Glow Backdrop */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#f37021]/20 via-amber-500/15 to-teal-500/25 rounded-3xl blur-2xl pointer-events-none" />

      {/* Main Visual Container */}
      <div className="relative rounded-3xl bg-[#062127]/95 border border-teal-700/60 p-4 sm:p-5 shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Top Control Bar: Visual Mode Switcher */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-teal-800/70 text-xs">
          <div className="flex items-center gap-1.5 p-1 bg-black/40 rounded-xl">
            <button
              onClick={() => setActiveMode('classroom')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                activeMode === 'classroom'
                  ? 'bg-[#f37021] text-white shadow-sm'
                  : 'text-teal-300 hover:text-white'
              }`}
            >
              <School className="w-3.5 h-3.5" />
              <span>Offline Campus</span>
            </button>
            <button
              onClick={() => setActiveMode('digital')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                activeMode === 'digital'
                  ? 'bg-[#f37021] text-white shadow-sm'
                  : 'text-teal-300 hover:text-white'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>Online Interactive</span>
            </button>
          </div>

          <span className="hidden xs:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-semibold text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Shah Ali Banda</span>
          </span>
        </div>

        {/* Hero Visual Scene: High-Fidelity Educational Classroom & Coaching Studio */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#0a333d] to-[#041a1f] border border-teal-800/80 aspect-[16/11] sm:aspect-[16/10] flex flex-col justify-between p-4 sm:p-5">
          {/* Ambient Lighting Gradient */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Background Mathematical & Scientific Blueprint Grid */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
                  <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#38bdf8" strokeWidth="0.6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Scene Header */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                {activeMode === 'classroom' ? 'Classroom in Session' : 'Live Interactive Lecture'}
              </span>
            </div>
            <span className="px-2.5 py-0.5 rounded-md bg-amber-400/20 text-amber-300 font-bold text-[11px] border border-amber-400/30">
              Small Batch: 15–20 Max
            </span>
          </div>

          {/* Central Illustrated Classroom Blackboard Artwork */}
          <div className="relative z-10 my-auto py-2">
            <div className="bg-[#051c22]/90 rounded-xl p-3.5 sm:p-4 border border-teal-600/40 shadow-inner">
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-teal-800/60">
                <span className="text-[10px] font-mono text-teal-300 uppercase tracking-widest font-bold">
                  {activeMode === 'classroom' ? 'Smart Board · Concept Derivation' : 'Digital Whiteboard · Live Stream'}
                </span>
                <span className="text-[10px] text-amber-400 font-bold">Kabeer Sir's Session</span>
              </div>

              {/* Core formulas & concepts preview */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2 rounded-lg bg-black/40 border border-teal-900/60 text-teal-200">
                  <span className="text-[10px] text-amber-300 block font-bold">MPC / Science:</span>
                  <span className="text-white font-bold text-xs">∫ x² dx = x³/3 + C</span>
                  <span className="block text-[10px] text-teal-400">F = dp/dt = ma</span>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-teal-900/60 text-teal-200">
                  <span className="text-[10px] text-amber-300 block font-bold">CEC / MEC:</span>
                  <span className="text-white font-bold text-xs">Assets = Liab + Equity</span>
                  <span className="block text-[10px] text-teal-400">Elasticity Ed = %ΔQ/%ΔP</span>
                </div>
              </div>

              {/* Live student progress ticker */}
              <div className="mt-2.5 pt-2 border-t border-teal-800/50 flex items-center justify-between text-[11px] text-teal-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Concept Clarity</span>
                </span>
                <span className="text-amber-400 font-bold">Zero Rote Memorization</span>
              </div>
            </div>
          </div>

          {/* Scene Footer: Student Desks & Atmosphere */}
          <div className="relative z-10 flex items-center justify-between pt-1 text-[11px] text-teal-200">
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#f37021]" />
              <span>Personal Desk Visits Daily</span>
            </span>
            <span className="font-semibold text-white">Shah Ali Banda New Road</span>
          </div>
        </div>

        {/* Secondary Overlapping Cards (Modern Layered Collage) */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          {/* Card 1: 10.0 GPA & 986 Marks */}
          <div className="p-3 rounded-2xl bg-[#0a333d]/90 border border-teal-700/60 text-white flex items-center gap-2.5 shadow-lg">
            <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center shrink-0 text-amber-400">
              <Trophy className="w-4 h-4" />
            </div>
            <div className="leading-tight">
              <span className="font-display font-black text-sm text-amber-300 block tabular-nums">
                10.0 GPA / 986
              </span>
              <span className="text-[10px] text-teal-200">State Board Record</span>
            </div>
          </div>

          {/* Card 2: 1-on-1 Doubts with Kabeer Sir */}
          <div className="p-3 rounded-2xl bg-[#0a333d]/90 border border-teal-700/60 text-white flex items-center gap-2.5 shadow-lg">
            <div className="w-9 h-9 rounded-xl bg-[#f37021]/20 border border-[#f37021]/30 flex items-center justify-center shrink-0 text-[#f37021]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="leading-tight">
              <span className="font-display font-black text-sm text-white block">
                1-on-1 Doubts
              </span>
              <span className="text-[10px] text-teal-200">With Kabeer Sir</span>
            </div>
          </div>
        </div>

        {/* Quick Inquire Banner Inside Collage */}
        <div className="mt-3 p-3 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-teal-950/60 border border-emerald-700/40 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs text-white font-medium">
              Next batch starting this Monday
            </span>
          </div>
          <a
            href={ACADEMY_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm transition-colors flex items-center gap-1 shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Ask Kabeer Sir</span>
          </a>
        </div>
      </div>
    </div>
  );
};
