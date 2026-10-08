import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Calendar, X } from 'lucide-react';
import { ACADEMY_CONTACT } from '../data/academyData.ts';

interface FloatingWhatsAppProps {
  onOpenDemoModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenDemoModal }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show gentle tooltip after 3 seconds if not dismissed
    const timer = setTimeout(() => {
      if (!dismissed) {
        setShowTooltip(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  return (
    <>
      {/* Desktop & Tablet Floating WhatsApp Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2">
        {/* Tooltip bubble */}
        {showTooltip && (
          <div className="relative max-w-xs bg-white rounded-2xl p-3.5 shadow-xl border border-slate-200 text-xs text-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <button
              onClick={() => {
                setShowTooltip(false);
                setDismissed(true);
              }}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-300 text-[10px] cursor-pointer"
              aria-label="Dismiss chat tooltip"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-start gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1 shrink-0 animate-ping" />
              <div>
                <strong className="text-[#0a333d] block font-bold">
                  Kabeer Sir is Available
                </strong>
                <span>
                  Have questions about admissions or fees? Chat with us directly on WhatsApp!
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Pulsing WhatsApp CTA Button */}
        <a
          href={ACADEMY_CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/30 transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          title="Chat directly on WhatsApp with Kabeer Sir"
          aria-label="Chat directly on WhatsApp with Kabeer Sir"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-pulse pointer-events-none" />

          <MessageCircle className="w-6 h-6 fill-white text-emerald-600 shrink-0" />
          <span className="whitespace-nowrap">WhatsApp Us</span>
          <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar (<15% viewport height, safe-area inset) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] flex items-center justify-between gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <a
          href={`tel:${ACADEMY_CONTACT.phoneNumberClean}`}
          className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0a333d] font-bold text-xs transition-colors"
        >
          <Phone className="w-4 h-4 text-[#f37021]" />
          <span>Call</span>
        </a>

        <a
          href={ACADEMY_CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors"
        >
          <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenDemoModal}
          className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 px-2 rounded-xl bg-[#f37021] hover:bg-[#e05e10] text-white font-bold text-xs shadow-sm transition-colors cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Free Demo</span>
        </button>
      </div>
    </>
  );
};
