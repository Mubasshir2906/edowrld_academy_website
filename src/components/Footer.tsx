import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, ArrowUp } from 'lucide-react';
import { AcademyLogo } from './AcademyLogo.tsx';
import { ACADEMY_CONTACT } from '../data/academyData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051e24] text-white pt-16 pb-12 border-t border-teal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-teal-800/60">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2">
            <AcademyLogo size="md" showText={true} theme="dark" className="mb-4" />
            <p className="text-xs sm:text-sm text-teal-100/75 leading-relaxed max-w-sm mt-3">
              Premier coaching institute led by Kabeer Sir in Shah Ali Banda, Hyderabad. Specializing in small-batch conceptual learning for 6th to 10th and Intermediate (MPC, BiPC, CEC, MEC).
            </p>
            <p className="font-script text-xl text-amber-300 font-bold mt-4">
              "{ACADEMY_CONTACT.subTagline}"
            </p>

            {/* Quick Contact Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={ACADEMY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
                <span>WhatsApp: {ACADEMY_CONTACT.phoneDisplay}</span>
              </a>

              <a
                href={`tel:${ACADEMY_CONTACT.phoneNumberClean}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-teal-100 bg-white/10 hover:bg-white/15 border border-white/15 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Center</span>
              </a>
            </div>
          </div>

          {/* Column 2: Academic Programs */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-4">
              Academic Streams
            </span>
            <ul className="space-y-2.5 text-xs text-teal-100/80">
              <li>
                <a href="#programs" className="hover:text-white transition-colors">Class 6th to 10th (SSC Board)</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">Class 6th to 10th (CBSE &amp; ICSE)</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">Intermediate MPC (Maths, Phys, Chem)</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">Intermediate BiPC (Bio, Phys, Chem)</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">Intermediate CEC (Commerce, Econ, Civics)</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">Intermediate MEC (Maths, Econ, Com)</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-4">
              Quick Links
            </span>
            <ul className="space-y-2.5 text-xs text-teal-100/80">
              <li>
                <a href="#hallmarks" className="hover:text-white transition-colors">The 4 EdWorld Hallmarks</a>
              </li>
              <li>
                <a href="#learning-modes" className="hover:text-white transition-colors">Offline vs Online Classes</a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-white transition-colors">Meet Kabeer Sir</a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition-colors">Student Hall of Fame</a>
              </li>
              <li>
                <a href="#demo-booking" className="hover:text-white transition-colors">Book Free 2-Day Demo</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Shah Ali Banda Location</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Timings */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-4">
              Center Address
            </span>
            <div className="space-y-3 text-xs text-teal-100/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#f37021] shrink-0 mt-0.5" />
                <span>Shah Ali Banda New Road, Old City, Hyderabad - 500065</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#f37021] shrink-0 mt-0.5" />
                <span className="font-mono tabular-nums">{ACADEMY_CONTACT.phoneDisplay}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#f37021] shrink-0 mt-0.5" />
                <span>{ACADEMY_CONTACT.email}</span>
              </div>
              <div className="pt-2 text-[11px] text-teal-300">
                <span>Timings: 8:00 AM – 8:30 PM (Daily)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teal-300/70">
          <p>
            © {new Date().getFullYear()} Kabeer Sir's EdWorld Academy. All rights reserved. Shah Ali Banda, Hyderabad.
          </p>
          <div className="flex items-center gap-6">
            <span>Making Learning Easy</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
