import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Calendar } from 'lucide-react';
import { AcademyLogo } from './AcademyLogo.tsx';
import { ACADEMY_CONTACT } from '../data/academyData.ts';

interface HeaderProps {
  onOpenDemoModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemoModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Programs', href: '#programs' },
    { label: 'Why EdWorld', href: '#hallmarks' },
    { label: 'Class Modes', href: '#learning-modes' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Results', href: '#results' },
    { label: 'Visit Us', href: '#location' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-[#faf8f5] border-b border-slate-200/50 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Brand Title Element */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg p-0.5"
            aria-label="Kabeer Sir's EdWorld Academy Home"
          >
            <AcademyLogo size="sm" showText={true} />
          </a>

          {/* Zone 2: Navigation Links (single line, clean typography) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#f37021] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions (Clean Icon Buttons + Book Demo CTA) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Call Icon Button */}
            <a
              href={`tel:${ACADEMY_CONTACT.phoneNumberClean}`}
              className="w-10 h-10 min-w-[40px] min-h-[40px] inline-flex items-center justify-center rounded-xl text-[#0a333d] hover:text-[#f37021] bg-slate-100 hover:bg-slate-200 border border-slate-200/80 transition-all hover:-translate-y-0.5 active:translate-y-0"
              title={`Call Kabeer Sir: ${ACADEMY_CONTACT.phoneDisplay}`}
              aria-label={`Call Kabeer Sir at ${ACADEMY_CONTACT.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 text-[#f37021]" />
            </a>

            {/* WhatsApp Icon Button */}
            <a
              href={ACADEMY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 min-w-[40px] min-h-[40px] inline-flex items-center justify-center rounded-xl bg-emerald-600 hover:bg-emerald-500 shadow-sm transition-all hover:shadow hover:-translate-y-0.5 active:translate-y-0"
              title="Chat on WhatsApp (961 871 5969)"
              aria-label="Chat directly on WhatsApp with Kabeer Sir"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
            </a>

            {/* Book Free Demo Button */}
            <button
              onClick={onOpenDemoModal}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] text-xs font-bold text-white bg-[#f37021] hover:bg-[#e05e10] rounded-xl shadow-sm transition-all hover:shadow-orange-500/25 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Free Demo</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 pb-3">
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-3 text-base font-semibold text-slate-700 hover:text-[#f37021] hover:bg-orange-50/60 rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-slate-400 text-xs">→</span>
                </a>
              ))}
              <div className="pt-3 mt-1 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`tel:${ACADEMY_CONTACT.phoneNumberClean}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 min-h-[46px] text-sm font-bold text-[#0a333d] bg-slate-100 rounded-xl"
                >
                  <Phone className="w-4 h-4 text-[#f37021]" />
                  <span>Call: {ACADEMY_CONTACT.phoneDisplay}</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemoModal();
                  }}
                  className="w-full py-3 px-4 min-h-[46px] text-sm font-bold text-white bg-[#f37021] hover:bg-[#e05e10] rounded-xl shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free Demo Class</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
