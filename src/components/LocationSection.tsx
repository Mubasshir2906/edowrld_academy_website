import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, Navigation, Sparkles } from 'lucide-react';
import { ACADEMY_CONTACT } from '../data/academyData.ts';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-[#faf8f5] relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f37021] block mb-2">
            CAMPUS &amp; ADMISSIONS DESK
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0a333d] tracking-tight">
            Visit Our <span className="text-[#f37021]">Shah Ali Banda Center</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Conveniently situated on Shah Ali Banda New Road, easily accessible from Charminar, Falaknuma, Chandrayangutta, Bahadurpura, and surrounding Old City localities.
          </p>
        </div>

        {/* 2 Column Layout: Details on left, Interactive Map card on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#f37021] text-xs font-bold uppercase tracking-wider mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>Prime Hyderabad Location</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#0a333d] mb-4">
                Shah Ali Banda New Road
              </h3>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#f37021] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">Full Address:</strong>
                    <span>{ACADEMY_CONTACT.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#f37021] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">Visiting &amp; Class Hours:</strong>
                    <span>{ACADEMY_CONTACT.timing}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#f37021] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">Direct Admissions Phone:</strong>
                    <a
                      href={`tel:${ACADEMY_CONTACT.phoneNumberClean}`}
                      className="font-mono font-bold text-base text-[#0a333d] hover:text-[#f37021] transition-colors"
                    >
                      {ACADEMY_CONTACT.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Center Amenities */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  Campus Facilities
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Air-Conditioned Rooms</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Doubt-Clearing Corner</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Parent Meeting Lounge</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Safe Pickup/Drop Area</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href={ACADEMY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>WhatsApp Directions</span>
              </a>

              <a
                href={`tel:${ACADEMY_CONTACT.phoneNumberClean}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#0a333d] bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#f37021]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Map Visualizer */}
          <div className="lg:col-span-7 bg-[#0a333d] rounded-3xl overflow-hidden border border-teal-800 shadow-xl flex flex-col justify-between text-white p-6 sm:p-8 relative">
            {/* Map styling frame */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Interactive Hyderabad Navigation
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/10 text-[11px] font-semibold text-teal-200">
                  Old City Zone
                </span>
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                Easy To Reach From Anywhere in South Hyderabad
              </h4>
              <p className="text-xs sm:text-sm text-teal-100/80 mb-6 leading-relaxed">
                Located right along Shah Ali Banda New Road with swift access from major landmarks:
              </p>

              {/* Landmark Distances */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {[
                  { place: 'Charminar', time: '3 Mins' },
                  { place: 'Falaknuma', time: '5 Mins' },
                  { place: 'Chandrayangutta', time: '6 Mins' },
                  { place: 'Bahadurpura', time: '7 Mins' },
                  { place: 'Nayapul / Madina', time: '8 Mins' },
                  { place: 'Santosh Nagar', time: '10 Mins' },
                ].map((item) => (
                  <div key={item.place} className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xs text-teal-200 block">{item.place}</span>
                    <span className="font-display font-bold text-sm text-amber-400 tabular-nums">~{item.time} away</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stylized Map View Box */}
            <div className="relative rounded-2xl bg-[#062127] border border-teal-700/60 p-6 flex flex-col items-center justify-center text-center my-4 overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-[#f37021]/20 border border-[#f37021]/40 flex items-center justify-center mb-3 animate-pulse">
                <MapPin className="w-8 h-8 text-[#f37021]" />
              </div>
              <h5 className="font-display font-bold text-base text-white">
                Kabeer Sir's EdWorld Academy
              </h5>
              <p className="text-xs text-teal-300 mt-0.5">
                Shah Ali Banda New Road, Hyderabad, Telangana - 500065
              </p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Shah Ali Banda New Road Hyderabad')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-[#0a333d] bg-amber-400 hover:bg-amber-300 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Footnote */}
            <p className="text-[11px] text-teal-300/70 text-center">
              Parking space available for two-wheelers and comfortable drop-off lane for students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
