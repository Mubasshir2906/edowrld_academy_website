import React, { useState } from 'react';
import { X, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { ACADEMY_CONTACT } from '../data/academyData.ts';

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export const DemoBookingModal: React.FC<DemoBookingModalProps> = ({
  isOpen,
  onClose,
  defaultProgram = '10th SSC / CBSE',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState(defaultProgram);
  const [mode, setMode] = useState('Offline Classroom');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const message = `Hello Kabeer Sir! I am requesting a Free Demo Class reservation at EdWorld Academy:\n\nStudent Name: ${name.trim()}\nContact: ${phone.trim()}\nGrade / Stream: ${grade}\nPreferred Mode: ${mode}\n\nPlease share the upcoming batch timings. Thank you!`;
    const waUrl = `https://wa.me/919618715969?text=${encodeURIComponent(message)}`;

    setSubmitted(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-[#0a333d] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-[11px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>2-Day Free Trial</span>
          </div>
          <h3 id="modal-title" className="font-display text-2xl font-black text-white">
            Book Your Free Demo Class
          </h3>
          <p className="text-xs text-teal-200 mt-1">
            Experience Kabeer Sir's teaching firsthand with zero obligation.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-6 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-lg text-slate-800">
                Reservation Ready!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-6">
                We've redirected your demo request to Kabeer Sir on WhatsApp. You'll receive a confirmation with batch timings shortly.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={ACADEMY_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Open WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Student Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Mohammed Arham"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#f37021]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9876543210"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#f37021]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Class / Stream
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#f37021]"
                  >
                    <option value="6th to 8th Standard">6th to 8th Standard</option>
                    <option value="9th Standard">9th Standard</option>
                    <option value="10th SSC (State)">10th SSC (State)</option>
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
                    Class Mode
                  </label>
                  <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#f37021]"
                  >
                    <option value="Offline Classroom">Offline (Shah Ali Banda)</option>
                    <option value="Online Live Interactive">Online Interactive</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#f37021] to-[#e05e10] hover:from-[#ff7e2b] hover:to-[#ea580c] shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#f37021]" />
                  <span>Confirm on WhatsApp (961 871 5969)</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                Direct instant booking. No credit card or registration fee required.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
