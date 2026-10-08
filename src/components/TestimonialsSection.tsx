import React, { useState } from 'react';
import { Star, Trophy, Quote, ArrowRight, MessageCircle } from 'lucide-react';
import { RESULTS, ACADEMY_CONTACT } from '../data/academyData.ts';

export const TestimonialsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'school' | 'intermediate'>('all');

  const filtered = RESULTS.filter((res) => {
    if (activeTab === 'school') return res.course.includes('10th') || res.course.includes('CBSE') || res.course.includes('SSC');
    if (activeTab === 'intermediate') return res.course.includes('Intermediate');
    return true;
  });

  return (
    <section id="results" className="py-16 sm:py-24 bg-[#faf8f5] relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f37021] block mb-2">
            PROVEN TRACK RECORD
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0a333d] tracking-tight">
            Our Students' <span className="text-[#f37021]">Board &amp; Entrance Triumphs</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Real scores, real confidence, and genuine testimonials from students and parents across Shah Ali Banda and Hyderabad.
          </p>

          {/* Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-[#f37021] block tabular-nums">
                15 - 20
              </span>
              <span className="text-xs font-semibold text-slate-600 mt-0.5 block">
                Strict Max Batch Size
              </span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-[#0a333d] block tabular-nums">
                10.0 GPA
              </span>
              <span className="text-xs font-semibold text-slate-600 mt-0.5 block">
                Top SSC Board Results
              </span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-[#f37021] block tabular-nums">
                986 / 1000
              </span>
              <span className="text-xs font-semibold text-slate-600 mt-0.5 block">
                Intermediate Record Score
              </span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-[#0a333d] block tabular-nums">
                100%
              </span>
              <span className="text-xs font-semibold text-slate-600 mt-0.5 block">
                Personalized Care
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header Lockup */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#0a333d]">
                      {item.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500">
                      {item.course} · {item.schoolCollege}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-orange-100 text-[#f37021] font-display font-black text-xs tabular-nums shrink-0">
                    {item.score}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3" aria-label="5 stars rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Achievement Badge */}
                <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-50 border border-teal-200/60 text-[11px] font-bold text-[#0a333d]">
                  <Trophy className="w-3 h-3 text-[#f37021]" />
                  <span>{item.achievement}</span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Verified EdWorld Scholar</span>
                <span>Batch of {item.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct WhatsApp Callout */}
        <div className="mt-12 text-center">
          <a
            href={ACADEMY_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>Chat on WhatsApp to See More Verified Marksheets</span>
          </a>
        </div>
      </div>
    </section>
  );
};
