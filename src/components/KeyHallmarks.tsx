import React, { useState } from 'react';
import { Users, Target, BookOpen, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { HALLMARKS, ACADEMY_CONTACT } from '../data/academyData.ts';

export const KeyHallmarks: React.FC = () => {
  const [activeHallmark, setActiveHallmark] = useState<string>(HALLMARKS[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-6 h-6 text-[#f37021]" />;
      case 'Target':
        return <Target className="w-6 h-6 text-[#f37021]" />;
      case 'GraduationCap':
        return <BookOpen className="w-6 h-6 text-[#f37021]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#f37021]" />;
      default:
        return <Users className="w-6 h-6 text-[#f37021]" />;
    }
  };

  return (
    <section id="hallmarks" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f37021] block mb-2">
            THE EDWORLD ADVANTAGE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0a333d] tracking-tight">
            Why Parents & Students Choose <span className="text-[#f37021]">Kabeer Sir</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Every child is unique. Our systematic methodology builds deep conceptual clarity, academic resilience, and lifelong self-confidence.
          </p>
        </div>

        {/* 4 Cards Grid - Matches Flyer Icons & Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HALLMARKS.map((item) => {
            const isSelected = activeHallmark === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveHallmark(item.id)}
                className={`relative rounded-2xl p-6 transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0a333d] text-white border-[#0a333d] shadow-xl shadow-teal-950/20 -translate-y-1'
                    : 'bg-[#faf8f5] text-slate-800 border-slate-200/90 hover:border-[#f37021]/50 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Icon Circle */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors ${
                      isSelected ? 'bg-white/10 ring-1 ring-white/20' : 'bg-white shadow-sm ring-1 ring-slate-200/60'
                    }`}
                  >
                    {getIcon(item.iconName)}
                  </div>

                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider block mb-1 ${
                      isSelected ? 'text-amber-400' : 'text-[#f37021]'
                    }`}
                  >
                    FEATURE 0{HALLMARKS.findIndex((h) => h.id === item.id) + 1}
                  </span>

                  <h3
                    className={`font-display text-xl font-bold tracking-tight mb-2 ${
                      isSelected ? 'text-white' : 'text-[#0a333d]'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm font-medium mb-4 ${
                      isSelected ? 'text-teal-200' : 'text-slate-600'
                    }`}
                  >
                    {item.subtitle}
                  </p>

                  <p
                    className={`text-xs leading-relaxed mb-6 ${
                      isSelected ? 'text-teal-100/80' : 'text-slate-500'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Bullets List */}
                <div className="pt-4 border-t border-dashed border-slate-200/40">
                  <ul className="space-y-2">
                    {item.bullets.slice(0, 3).map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <CheckCircle
                          className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                            isSelected ? 'text-amber-400' : 'text-[#f37021]'
                          }`}
                        />
                        <span className={isSelected ? 'text-teal-100' : 'text-slate-600'}>
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Banner */}
        <div className="mt-12 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-2xl p-6 sm:p-8 border border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-display text-lg sm:text-xl font-bold text-[#0a333d]">
              Experience our personal attention in a small batch
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              Join Kabeer Sir's 2-Day Free Trial class to see how easily your child grasps concepts.
            </p>
          </div>
          <a
            href={ACADEMY_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#f37021] hover:bg-[#e05e10] shadow-md transition-all whitespace-nowrap shrink-0 active:scale-[0.98]"
          >
            <span>Inquire Batch Availability</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
