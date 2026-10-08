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

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Call Link */}
            <a
              href={`tel:${ACADEMY_CONTACT.phoneNumberClean}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0a333d] hover:bg-[#0a333d]/5 rounded-lg border border-[#0a333d]/20 transition-colors whitespace-nowrap"
              title="Call Kabeer Sir"
            >
              <Phone className="w-3.5 h-3.5 text-[#f37021]" />
              <span className="tabular-nums font-mono">{ACADEMY_CONTACT.phoneDisplay}</span>
            </a>

            {/* Direct WhatsApp Action */}
            <a
              href={ACADEMY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-all hover:shadow hover:-translate-y-0.5 whitespace-nowrap"
              title="Chat directly on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
              <span>WhatsApp Chat</span>
            </a>

            {/* Book Free Demo Button */}
            <button
              onClick={onOpenDemoModal}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#f37021] hover:bg-[#e05e10] rounded-lg shadow-sm transition-all hover:shadow-orange-500/25 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Free Demo</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 pb-2">
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-[#f37021] hover:bg-orange-50/60 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`tel:${ACADEMY_CONTACT.phoneNumberClean}`}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-[#0a333d] bg-slate-100 rounded-lg"
                >
                  <Phone className="w-4 h-4 text-[#f37021]" />
                  <span>Call: {ACADEMY_CONTACT.phoneDisplay}</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemoModal();
                  }}
                  className="w-full py-2.5 px-4 text-sm font-bold text-white bg-[#f37021] hover:bg-[#e05e10] rounded-lg shadow-sm flex items-center justify-center gap-2 cursor-pointer"
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
