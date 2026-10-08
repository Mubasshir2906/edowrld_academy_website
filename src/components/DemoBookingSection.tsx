import React, { useState } from 'react';
import { Calendar, CheckCircle2, MessageCircle, Phone, Sparkles, MapPin } from 'lucide-react';
import { ACADEMY_CONTACT } from '../data/academyData.ts';

export const DemoBookingSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState('10th SSC / CBSE');
  const [mode, setMode] = useState('Offline (Shah Ali Banda)');
  const [subjectFocus, setSubjectFocus] = useState('Mathematics & Science');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Build WhatsApp message
    const text = `Hello Kabeer Sir! I would like to book a 2-Day Free Demo Class at EdWorld Academy.\n\n👤 Student Name: ${name.trim()}\n📱 Contact Number: ${phone.trim()}\n📚 Class/Stream: ${grade}\n🏫 Preferred Mode: ${mode}\n🎯 Priority Subjects: ${subjectFocus}\n\nPlease confirm the upcoming batch schedule for the demo class!`;
    const waUrl = `https://wa.me/919618715969?text=${encodeURIComponent(text)}`;

    setSubmitted(true);
    // Open WhatsApp in new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="demo-booking" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0a333d] via-[#0d3b46] to-[#062127] rounded-3xl p-6 sm:p-12 text-white shadow-2xl border border-teal-800 relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Zero Risk · 100% Free Experience</span>
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Book a Free 2-Day <span className="text-[#f37021]">Demo Class</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-teal-100/90 leading-relaxed">
                Experience Kabeer Sir's concept-first teaching before committing to admission. Let your child sit in a live session, ask questions freely, and observe how easily formulas and concepts can be mastered.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  'Experience personal attention in a small batch of 15–20 students',
                  'Receive a complimentary Diagnostic Concept Evaluation for your child',
                  'Get printed sample chapter worksheets and formula sheets',
                  'Direct consultation with Kabeer Sir regarding board preparation strategy',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-teal-100">
                    <CheckCircle2 className="w-4 h-4 text-[#f37021] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-teal-800/80 flex items-center gap-6">
                <div>
                  <span className="text-xs text-teal-300 block">Direct Inquiry Helpline</span>
                  <a
                    href={`tel:${ACADEMY_CONTACT.phoneNumberClean}`}
                    className="font-mono font-bold text-lg text-white hover:text-amber-400 transition-colors"
                  >
                    {ACADEMY_CONTACT.phoneDisplay}
                  </a>
                </div>
                <div>
                  <span className="text-xs text-teal-300 block">Campus Center</span>
                  <span className="text-xs font-semibold text-white">
                    Shah Ali Banda New Road
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 text-slate-800 shadow-xl border border-white/20">
                <h3 className="font-display text-xl font-bold text-[#0a333d] mb-1">
                  Reserve Your Demo Seat
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Fill in your details below. You will be instantly connected with Kabeer Sir on WhatsApp.
                </p>

                {submitted ? (
                  <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-emerald-800">
                      Demo Request Sent!
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-700 mt-1">
                      WhatsApp chat opened with Kabeer Sir. If it did not open automatically, please click below:
                    </p>
                    <a
                      href={ACADEMY_CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Open WhatsApp Chat</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="block mx-auto mt-3 text-xs text-slate-500 hover:underline cursor-pointer"
                    >
                      Book for another student
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Mohammed Arham"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#f37021] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        WhatsApp Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 9876543210"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#f37021] focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Class / Stream *
                        </label>
                        <select
                          value={grade}
                          onChange={(e) => setGrade(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f37021]"
                        >
                          <option value="6th Standard">6th Standard</option>
                          <option value="7th Standard">7th Standard</option>
                          <option value="8th Standard">8th Standard</option>
                          <option value="9th Standard">9th Standard</option>
                          <option value="10th SSC (State Board)">10th SSC (State Board)</option>
                          <option value="10th CBSE">10th CBSE</option>
                          <option value="10th ICSE">10th ICSE</option>
                          <option value="Intermediate MPC">Intermediate MPC</option>
                          <option value="Intermediate BiPC">Intermediate BiPC</option>
                          <option value="Intermediate CEC">Intermediate CEC</option>
                          <option value="Intermediate MEC">Intermediate MEC</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Preferred Mode *
                        </label>
                        <select
                          value={mode}
                          onChange={(e) => setMode(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f37021]"
                        >
                          <option value="Offline (Shah Ali Banda)">Offline Classroom (Shah Ali Banda)</option>
                          <option value="Online Interactive">Online Interactive (Live)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Priority Subjects for Demo
                      </label>
                      <input
                        type="text"
                        value={subjectFocus}
                        onChange={(e) => setSubjectFocus(e.target.value)}
                        placeholder="e.g. Maths & Physics / Accountancy"
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#f37021]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#f37021] to-[#e05e10] hover:from-[#ff7e2b] hover:to-[#ea580c] shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-white text-[#f37021]" />
                      <span>Confirm &amp; Send on WhatsApp</span>
                    </button>

                    <p className="text-[11px] text-center text-slate-500">
                      Redirects instantly to WhatsApp chat with Kabeer Sir at <span className="font-semibold text-slate-700">961 871 5969</span>. No upfront fees required.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
