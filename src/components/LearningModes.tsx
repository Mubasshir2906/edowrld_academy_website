import React, { useState } from 'react';
import { School, Laptop, Check, MapPin, Wifi, Users, Clock, Video, MessageCircle } from 'lucide-react';
import { ACADEMY_CONTACT } from '../data/academyData.ts';

export const LearningModes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'offline' | 'online'>('both');

  return (
    <section id="learning-modes" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Section Header mimicking the flyer's banner */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a333d] text-amber-300 text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
            <span>FLEXIBLE STUDY OPTIONS</span>
          </div>
          
          {/* Stylized Heading mimicking flyer banner */}
          <div className="relative inline-block">
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0a333d] uppercase tracking-tight">
              OFFLINE <span className="text-[#f37021]">&amp;</span> ONLINE CLASSES
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#f37021] to-transparent mt-2" />
          </div>

          <p className="mt-4 text-base text-slate-600">
            Choose the mode that best fits your daily commute and study routine. Both modes deliver the exact same high-touch personal mentorship from Kabeer Sir.
          </p>
        </div>

        {/* Dual Mode Cards (Side by Side comparison) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Offline Classes Card */}
          <div className="relative rounded-3xl p-8 bg-gradient-to-b from-teal-900 to-[#07252c] text-white shadow-xl overflow-hidden border border-teal-800 flex flex-col justify-between">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-teal-800/80 border border-teal-600/50 text-xs font-bold text-teal-200 uppercase tracking-wider">
                  In-Person Campus
                </span>
                <span className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  Shah Ali Banda Center
                </span>
              </div>

              {/* Title & Icon Lockup */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-teal-800/60 flex items-center justify-center shrink-0 border border-teal-700/50">
                  <School className="w-7 h-7 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-black text-white">
                    OFFLINE CLASSES
                  </h3>
                  <p className="text-sm font-semibold text-teal-200">
                    Interactive Classroom Learning
                  </p>
                </div>
              </div>

              <p className="text-sm text-teal-100/85 leading-relaxed mb-6">
                Experience high-energy physical classroom instruction in a distraction-free environment. Students get direct blackboard problem-solving drills, face-to-face eye contact with Kabeer Sir, and structured daily discipline.
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {[
                  { text: 'Small batches strictly capped at 15–20 students', sub: 'Every desk receives active supervision' },
                  { text: 'Air-conditioned modern classrooms', sub: 'Ergonomic seating & acoustic comfort' },
                  { text: 'Daily physical notebook & homework checking', sub: 'Instant feedback on presentation errors' },
                  { text: 'Dedicated 1-on-1 post-class doubt desk', sub: 'Sit with faculty till every concept is clear' },
                  { text: 'Printed chapter worksheets & formula charts', sub: 'Comprehensive take-home reference sets' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#f37021] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white stroke-[3]" />
                    </div>
                    <div>
                      <span className="font-bold text-white">{item.text}</span>
                      <span className="text-teal-300 block text-[11px]">{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Offline Card Footer */}
            <div className="pt-6 border-t border-teal-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-teal-200">
                <span className="font-bold text-white block">Morning &amp; Evening Batches</span>
                <span>Near Shah Ali Banda New Road</span>
              </div>
              <a
                href={ACADEMY_CONTACT.whatsappCourseUrl('Offline Classroom Batch')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#f37021] hover:bg-[#e05e10] transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#f37021]" />
                <span>Inquire Offline Seats</span>
              </a>
            </div>
          </div>

          {/* Online Classes Card */}
          <div className="relative rounded-3xl p-8 bg-gradient-to-b from-amber-500/10 via-orange-500/5 to-white text-slate-800 shadow-xl overflow-hidden border border-orange-200/90 flex flex-col justify-between">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-orange-100 border border-orange-300 text-xs font-bold text-[#f37021] uppercase tracking-wider">
                  Digital Classroom
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <Wifi className="w-3.5 h-3.5 text-emerald-600" />
                  Live &amp; Interactive
                </span>
              </div>

              {/* Title & Icon Lockup */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0 border border-orange-200">
                  <Laptop className="w-7 h-7 text-[#f37021]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-black text-[#0a333d]">
                    ONLINE CLASSES
                  </h3>
                  <p className="text-sm font-semibold text-[#f37021]">
                    Learn from Anywhere at Your Convenience
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Ideal for students traveling from distant parts of Hyderabad or balancing heavy schedules. High-definition live classes with full two-way audio participation, digital notes, and recorded backups.
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {[
                  { text: 'Live 2-Way Interactive Sessions', sub: 'Students un-mute and ask doubts in real-time' },
                  { text: 'Full Video Recording of Every Class', sub: 'Watch revisions before exams with zero FOMO' },
                  { text: 'Digital Annotated Notes & PDFs', sub: 'Download board question banks directly to phone' },
                  { text: 'Online Chapter Tests & Quizzes', sub: 'Instant analytics and step-by-step scoring' },
                  { text: 'Zero Commute Fatigue & Travel Costs', sub: 'Save 1.5–2 hours of travel time every single day' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white stroke-[3]" />
                    </div>
                    <div>
                      <span className="font-bold text-[#0a333d]">{item.text}</span>
                      <span className="text-slate-500 block text-[11px]">{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Online Card Footer */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600">
                <span className="font-bold text-[#0a333d] block">Accessible across Hyderabad</span>
                <span>Zoom / Google Meet Live Integration</span>
              </div>
              <a
                href={ACADEMY_CONTACT.whatsappCourseUrl('Online Interactive Batch')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Inquire Online Batch</span>
              </a>
            </div>
          </div>
        </div>

        {/* Both Modes Guarantee Pill */}
        <div className="mt-12 text-center bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            <strong className="text-[#0a333d]">Hybrid Flexibility:</strong> Enrolled offline students who fall sick or travel out of town can join the live online stream seamlessly, ensuring zero loss of class continuity!
          </p>
        </div>
      </div>
    </section>
  );
};
