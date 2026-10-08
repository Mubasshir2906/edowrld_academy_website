import React, { useState } from 'react';
import { BookOpen, Clock, CheckCircle2, MessageCircle, Calendar } from 'lucide-react';
import { PROGRAMS, ACADEMY_CONTACT } from '../data/academyData.ts';
import { CourseProgram } from '../types/index.ts';

interface ProgramsSectionProps {
  onOpenDemoModal: (programId?: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenDemoModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'school' | 'intermediate'>('all');
  const [selectedCourse, setSelectedCourse] = useState<CourseProgram>(PROGRAMS[0]);

  const filteredPrograms = PROGRAMS.filter((prog) => {
    if (selectedFilter === 'all') return true;
    return prog.category === selectedFilter;
  });

  return (
    <section id="programs" className="py-16 sm:py-24 bg-[#faf8f5] relative border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f37021] block mb-2">
            ACADEMIC CURRICULUM
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0a333d] tracking-tight">
            Programs Offered for <span className="text-[#f37021]">6th to 10th & Intermediate</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Tailored syllabus coverage, regular assessments, and conceptual depth designed to maximize board marks and competitive exam readiness.
          </p>

          {/* Interactive Filter Tabs (Mobile Scrollable) */}
          <div className="mt-6 sm:mt-8 flex overflow-x-auto no-scrollbar max-w-full items-center p-1 sm:p-1.5 bg-slate-200/80 rounded-xl gap-1 justify-start sm:justify-center">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 sm:px-4 py-2 min-h-[40px] text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedFilter === 'all'
                  ? 'bg-white text-[#0a333d] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Programs ({PROGRAMS.length})
            </button>
            <button
              onClick={() => setSelectedFilter('school')}
              className={`px-3 sm:px-4 py-2 min-h-[40px] text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedFilter === 'school'
                  ? 'bg-white text-[#0a333d] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              6th to 10th (School Boards)
            </button>
            <button
              onClick={() => setSelectedFilter('intermediate')}
              className={`px-3 sm:px-4 py-2 min-h-[40px] text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedFilter === 'intermediate'
                  ? 'bg-white text-[#0a333d] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Intermediate (MPC, BiPC, CEC, MEC)
            </button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* List of program selector buttons on left/top */}
          <div className="lg:col-span-1 space-y-2.5 sm:space-y-3">
            {filteredPrograms.map((prog) => {
              const isCurrent = selectedCourse.id === prog.id;
              return (
                <div
                  key={prog.id}
                  onClick={() => setSelectedCourse(prog)}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer text-left active:scale-[0.99] ${
                    isCurrent
                      ? 'bg-[#0a333d] text-white border-[#0a333d] shadow-md sm:-translate-x-1'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-orange-300 hover:bg-orange-50/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-black tracking-wider uppercase ${
                        isCurrent
                          ? 'bg-[#f37021] text-white'
                          : 'bg-orange-100 text-[#f37021]'
                      }`}
                    >
                      {prog.code}
                    </span>
                    <span
                      className={`text-[10px] sm:text-[11px] font-medium ${
                        isCurrent ? 'text-teal-200' : 'text-slate-500'
                      }`}
                    >
                      {prog.modes.join(' & ')}
                    </span>
                  </div>
                  <h3
                    className={`font-display font-bold text-sm sm:text-lg ${
                      isCurrent ? 'text-white' : 'text-[#0a333d]'
                    }`}
                  >
                    {prog.title}
                  </h3>
                  <p
                    className={`text-xs mt-0.5 line-clamp-1 ${
                      isCurrent ? 'text-teal-200' : 'text-slate-500'
                    }`}
                  >
                    {prog.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Active Program Detail Showcase */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-4 sm:p-8 border border-slate-200/90 shadow-md flex flex-col justify-between">
            <div>
              {/* Header Badge & Title */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 pb-4 sm:pb-5 border-b border-slate-100">
                <div>
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#f37021]">
                    {selectedCourse.category === 'school' ? 'Middle & High School Wing' : 'Junior College / Intermediate Wing'}
                  </span>
                  <h3 className="font-display text-xl sm:text-3xl font-extrabold text-[#0a333d] mt-0.5">
                    {selectedCourse.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                    {selectedCourse.subtitle}
                  </p>
                </div>
                <div className="self-start sm:self-auto px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800">
                  {selectedCourse.highlight}
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-base text-slate-600 leading-relaxed">
                {selectedCourse.description}
              </p>

              {/* Subjects Matrix */}
              <div className="mt-5 sm:mt-6">
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Subjects Covered In Depth
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedCourse.subjects.map((sub) => (
                    <span
                      key={sub}
                      className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-teal-50 border border-teal-200/60 text-xs font-semibold text-[#0a333d]"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Target Exams */}
              <div className="mt-5 sm:mt-6">
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Target Board &amp; Entrance Exams
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedCourse.targetExams.map((exam) => (
                    <span
                      key={exam}
                      className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-orange-50 border border-orange-200/70 text-xs font-semibold text-[#f37021]"
                    >
                      {exam}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mt-5 sm:mt-6">
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Course Structure &amp; Methodology
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {selectedCourse.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timings */}
              <div className="mt-5 sm:mt-6 p-3 sm:p-3.5 bg-slate-50 rounded-xl border border-slate-200/60 flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700">
                <Clock className="w-4 h-4 text-[#f37021] shrink-0" />
                <div>
                  <span className="font-bold text-[#0a333d]">Batch Timings: </span>
                  <span>{selectedCourse.batchTimings}</span>
                </div>
              </div>
            </div>

            {/* Program Specific CTAs */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
              <a
                href={ACADEMY_CONTACT.whatsappCourseUrl(selectedCourse.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Inquire on WhatsApp for {selectedCourse.code}</span>
              </a>

              <button
                onClick={() => onOpenDemoModal(selectedCourse.id)}
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#0a333d] bg-amber-100 hover:bg-amber-200 border border-amber-300 transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#0a333d]" />
                <span>Book Free Demo Class</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
