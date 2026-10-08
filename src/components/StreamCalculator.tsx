import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, BookOpen, MessageCircle, ArrowRight, Check } from 'lucide-react';
import { ACADEMY_CONTACT } from '../data/academyData.ts';

export const StreamCalculator: React.FC = () => {
  const [level, setLevel] = useState<'school' | 'intermediate'>('school');
  const [grade, setGrade] = useState<string>('10th');
  const [boardOrStream, setBoardOrStream] = useState<string>('State Board (SSC)');
  const [mode, setMode] = useState<'Offline' | 'Online'>('Offline');

  const schoolGrades = ['6th Standard', '7th Standard', '8th Standard', '9th Standard', '10th Standard'];
  const interGrades = ['Inter 1st Year (11th)', 'Inter 2nd Year (12th)'];

  const boards = ['State Board (SSC)', 'CBSE', 'ICSE'];
  const interStreams = ['MPC (Maths, Physics, Chem)', 'BiPC (Biology, Physics, Chem)', 'CEC (Commerce, Econ, Civics)', 'MEC (Maths, Econ, Commerce)'];

  const getRecommendations = () => {
    if (level === 'school') {
      return {
        hoursPerWeek: '12 – 14 Hours / Week',
        recommendedBatch: mode === 'Offline' ? 'Evening: 5:00 PM – 7:15 PM' : 'Evening: 6:00 PM – 8:00 PM',
        coreFocus: 'Daily concept strengthening in Mathematics, Physical Science & English Grammar with weekly unit tests.',
        materials: 'Comprehensive EdWorld Chapter Workbooks + 10 Years Past Board Papers + Formula Pocket Diary',
        targetGoal: 'Target 10.0 / 10.0 GPA (SSC) or 95%+ (CBSE/ICSE)',
      };
    } else {
      return {
        hoursPerWeek: '14 – 16 Hours / Week',
        recommendedBatch: mode === 'Offline' ? 'Morning 6:30 AM or Evening 5:00 PM' : 'Evening 5:30 PM – 8:00 PM',
        coreFocus: `Rigorous IPE Board scoring techniques combined with entrance foundations for ${boardOrStream.split(' ')[0]}.`,
        materials: 'IPE 1000 Marks Blueprint Handbook + Solved Chapter Question Banks + Weekly Timed Mock Tests',
        targetGoal: 'Target 970+ / 1000 in IPE Board + Competitive Ranks',
      };
    }
  };

  const plan = getRecommendations();

  const handleLevelChange = (newLevel: 'school' | 'intermediate') => {
    setLevel(newLevel);
    if (newLevel === 'school') {
      setGrade('10th Standard');
      setBoardOrStream('State Board (SSC)');
    } else {
      setGrade('Inter 1st Year (11th)');
      setBoardOrStream('MPC (Maths, Physics, Chem)');
    }
  };

  const whatsappInquiryUrl = `https://wa.me/919618715969?text=${encodeURIComponent(
    `Hello Kabeer Sir! I used the Academic Planner on your website and would like to register.\n\nLevel: ${level === 'school' ? 'School Wing' : 'Intermediate'}\nGrade: ${grade}\nStream/Board: ${boardOrStream}\nPreferred Mode: ${mode} Classes\n\nPlease share batch seat status and admission details!`
  )}`;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#faf8f5] to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f37021] block mb-2">
            INTERACTIVE BATCH FINDER
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0a333d] tracking-tight">
            Find Your Child’s Ideal <span className="text-[#f37021]">Study Roadmap</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Customize grade level, board or stream, and study mode to preview the personalized batch schedule and curriculum roadmap.
          </p>
        </div>

        {/* Planner Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Controls Column (Left) */}
          <div className="p-4 sm:p-10 lg:col-span-7 bg-white">
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#0a333d] mb-5 sm:mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#f37021] shrink-0" />
              <span>Step 1: Select Academic Category</span>
            </h3>

            {/* Level Switcher */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-5 sm:mb-6">
              <button
                type="button"
                onClick={() => handleLevelChange('school')}
                className={`py-3 px-3 sm:px-4 min-h-[46px] rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                  level === 'school'
                    ? 'bg-[#0a333d] text-white border-[#0a333d] shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                6th to 10th Standard
              </button>
              <button
                type="button"
                onClick={() => handleLevelChange('intermediate')}
                className={`py-3 px-3 sm:px-4 min-h-[46px] rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                  level === 'intermediate'
                    ? 'bg-[#0a333d] text-white border-[#0a333d] shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Intermediate
              </button>
            </div>

            {/* Grade Selection */}
            <div className="mb-5 sm:mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Select Class / Year
              </label>
              <div className="flex flex-wrap gap-2">
                {(level === 'school' ? schoolGrades : interGrades).map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGrade(g)}
                    className={`px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                      grade === g
                        ? 'bg-[#f37021] text-white border-[#f37021] shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-orange-300'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Board / Stream Selection */}
            <div className="mb-5 sm:mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                {level === 'school' ? 'Select Educational Board' : 'Select Intermediate Stream'}
              </label>
              <div className="flex flex-wrap gap-2">
                {(level === 'school' ? boards : interStreams).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setBoardOrStream(item)}
                    className={`px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                      boardOrStream === item
                        ? 'bg-[#0a333d] text-white border-[#0a333d] shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-teal-400'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mode Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Preferred Learning Mode
              </label>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setMode('Offline')}
                  className={`p-3 min-h-[48px] rounded-xl border text-left transition-all cursor-pointer ${
                    mode === 'Offline'
                      ? 'bg-amber-50/70 border-amber-400 ring-1 ring-amber-400'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="font-display font-bold text-xs sm:text-sm text-[#0a333d] block">
                    Offline Classroom
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500">
                    Shah Ali Banda Center
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setMode('Online')}
                  className={`p-3 min-h-[48px] rounded-xl border text-left transition-all cursor-pointer ${
                    mode === 'Online'
                      ? 'bg-amber-50/70 border-amber-400 ring-1 ring-amber-400'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="font-display font-bold text-xs sm:text-sm text-[#0a333d] block">
                    Online Interactive
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500">
                    Live with recording
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary Column (Right) */}
          <div className="p-5 sm:p-10 lg:col-span-5 bg-[#0a333d] text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-teal-900">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-teal-800/80 mb-6">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-teal-300 font-bold">
                    RECOMMENDED PLAN
                  </span>
                  <h4 className="font-display text-xl font-bold text-white mt-0.5">
                    {grade} · {boardOrStream.split(' ')[0]}
                  </h4>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#f37021] text-white text-xs font-black uppercase">
                  {mode}
                </span>
              </div>

              {/* Roadmap points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-teal-300 block font-semibold">Weekly Commitment:</span>
                    <span className="text-sm font-bold text-white">{plan.hoursPerWeek}</span>
                    <span className="text-xs text-teal-200/70 block mt-0.5">({plan.recommendedBatch})</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-teal-300 block font-semibold">Academic Focus:</span>
                    <span className="text-xs text-teal-100 leading-relaxed block mt-0.5">{plan.coreFocus}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#f37021] shrink-0 mt-0.5 stroke-[3]" />
                  <div>
                    <span className="text-xs text-teal-300 block font-semibold">Included Materials:</span>
                    <span className="text-xs text-teal-100 block mt-0.5">{plan.materials}</span>
                  </div>
                </div>

                <div className="p-3 bg-teal-950/60 rounded-xl border border-teal-700/60 text-xs text-amber-300 font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Target Outcome: {plan.targetGoal}</span>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-6 mt-6 border-t border-teal-800/80">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-950/40"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Inquire Plan via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-center text-teal-300/80 mt-2">
                Sends configured details directly to Kabeer Sir (961 871 5969)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
