import React from 'react';
import { Award, BookOpen, HeartHandshake, Sparkles, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';
import { ACADEMY_CONTACT } from '../data/academyData.ts';

export const AboutFaculty: React.FC = () => {
  return (
    <section id="faculty" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase Card (Left) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#f37021]/20 via-[#0a333d]/20 to-amber-400/20 blur-xl opacity-75" />

              <div className="relative rounded-3xl bg-gradient-to-b from-[#0a333d] to-[#062127] text-white p-8 border border-teal-800 shadow-2xl overflow-hidden">
                {/* Emblem Badge */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/10 border border-white/20 p-3 flex items-center justify-center">
                  <div className="w-full h-full rounded-xl bg-[#f37021] flex items-center justify-center text-white font-display font-black text-2xl shadow-inner">
                    KS
                  </div>
                </div>

                <div className="text-center">
                  <span className="font-script text-2xl text-amber-300 font-bold block -mb-1">
                    Founder &amp; Chief Academic Mentor
                  </span>
                  <h3 className="font-display text-3xl font-extrabold text-white">
                    Kabeer Sir
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-teal-200 mt-1 font-semibold">
                    EdWorld Academy · Hyderabad
                  </p>
                </div>

                {/* Quote Box */}
                <div className="my-6 p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-teal-100 italic leading-relaxed text-center">
                  "No student is born weak in studies. With clear basics, patient guidance, and personal encouragement, any child can master concepts and top their exams."
                </div>

                {/* Mentorship Highlights */}
                <div className="space-y-2.5 text-xs text-teal-100 pt-2 border-t border-teal-800/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f37021] shrink-0" />
                    <span>Personalized oversight for every enrolled student</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f37021] shrink-0" />
                    <span>Direct phone/WhatsApp access for student doubts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f37021] shrink-0" />
                    <span>Bi-weekly progress counseling with parents</span>
                  </div>
                </div>

                {/* Quick WhatsApp Contact */}
                <a
                  href={ACADEMY_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Talk Directly to Kabeer Sir</span>
                </a>
              </div>
            </div>
          </div>

          {/* Narrative Content (Right) */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f37021] block mb-2">
              MEET THE MENTOR
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0a333d] tracking-tight">
              A Mission to Make Learning <span className="text-[#f37021]">Easy, Clear &amp; Joyful</span>
            </h2>

            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              At <strong className="text-[#0a333d]">Kabeer Sir's EdWorld Academy</strong>, we reject the assembly-line coaching model where students are just seat numbers in a crowded batch of 80. Kabeer Sir established EdWorld Academy in Shah Ali Banda with a single core philosophy: <em className="text-[#0a333d] font-medium">every child deserves personal attention and crystal-clear basics</em>.
            </p>

            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Whether preparing a 10th-standard student for the state SSC board or mentoring an Intermediate student through complex Physics derivations and Commerce balance sheets, our teachers break down intimidating topics into intuitive everyday logic.
            </p>

            {/* 3 Pillars of Pedagogy */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#faf8f5] border border-slate-200">
                <BookOpen className="w-6 h-6 text-[#f37021] mb-2" />
                <h4 className="font-display font-bold text-sm text-[#0a333d]">
                  Zero Intimidation
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Students feel completely safe to raise hands and ask even the simplest doubts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#faf8f5] border border-slate-200">
                <Award className="w-6 h-6 text-[#f37021] mb-2" />
                <h4 className="font-display font-bold text-sm text-[#0a333d]">
                  Exam Technique
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Special answer presentation drills to capture every single board mark.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#faf8f5] border border-slate-200">
                <HeartHandshake className="w-6 h-6 text-[#f37021] mb-2" />
                <h4 className="font-display font-bold text-sm text-[#0a333d]">
                  Parent Partnership
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Continuous updates, transparent progress reports, and guidance for home study.
                </p>
              </div>
            </div>

            {/* Direct Call / Action banner */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${ACADEMY_CONTACT.phoneNumberClean}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#0a333d] bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-300/80"
              >
                <Phone className="w-4 h-4 text-[#f37021]" />
                <span>Call Center: {ACADEMY_CONTACT.phoneDisplay}</span>
              </a>
              <span className="text-xs text-slate-500">
                Located at Shah Ali Banda New Road, Hyderabad
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
