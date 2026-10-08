import React from 'react';

interface AcademyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showText?: boolean;
  theme?: 'dark' | 'light';
}

export const AcademyLogo: React.FC<AcademyLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  theme = 'light',
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    hero: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Emblem SVG mimicking the flyer's golden globe & graduation cap */}
      <div className={`relative shrink-0 ${iconSizes[size]} flex items-center justify-center`}>
        {/* Outer glowing ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500 via-orange-400 to-yellow-300 p-[2.5px] shadow-md">
          <div className="w-full h-full rounded-full bg-[#0a333d] flex items-center justify-center relative overflow-hidden">
            {/* Ambient radial inner glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#134e5e]/40 to-transparent pointer-events-none" />

            <svg
              viewBox="0 0 100 100"
              className="w-[84%] h-[84%] drop-shadow-sm"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Laurel Wreath Left */}
              <path
                d="M 28 35 C 22 45 22 62 33 72 C 34 68 32 60 30 52 C 28 44 30 38 28 35 Z"
                fill="#f59e0b"
                opacity="0.9"
              />
              <path
                d="M 24 45 C 18 52 20 62 26 66"
                stroke="#fbbf24"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Laurel Wreath Right */}
              <path
                d="M 72 35 C 78 45 78 62 67 72 C 66 68 68 60 70 52 C 72 44 70 38 72 35 Z"
                fill="#f59e0b"
                opacity="0.9"
              />
              <path
                d="M 76 45 C 82 52 80 62 74 66"
                stroke="#fbbf24"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Globe Core */}
              <circle cx="50" cy="55" r="22" stroke="#f59e0b" strokeWidth="2.5" fill="#062228" />
              {/* Globe Longitude Ellipse */}
              <ellipse cx="50" cy="55" rx="10" ry="22" stroke="#fbbf24" strokeWidth="1.8" />
              {/* Globe Latitude lines */}
              <line x1="30" y1="48" x2="70" y2="48" stroke="#fbbf24" strokeWidth="1.8" />
              <line x1="28" y1="55" x2="72" y2="55" stroke="#fbbf24" strokeWidth="2" />
              <line x1="30" y1="62" x2="70" y2="62" stroke="#fbbf24" strokeWidth="1.8" />
              <line x1="50" y1="33" x2="50" y2="77" stroke="#fbbf24" strokeWidth="1.8" />

              {/* Graduation Cap Top */}
              <polygon points="50,15 76,26 50,35 24,26" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
              {/* Cap under-lip */}
              <path d="M 36 29 L 36 37 C 36 41 64 41 64 37 L 64 29" fill="#d97706" />
              {/* Tassel */}
              <line x1="48" y1="26" x2="33" y2="34" stroke="#f59e0b" strokeWidth="1.8" />
              <circle cx="33" cy="36" r="2" fill="#f59e0b" />

              {/* 3 Stars at Bottom */}
              <polygon points="50,78 51.5,82 55,82 52,84.5 53.5,88.5 50,86 46.5,88.5 48,84.5 45,82 48.5,82" fill="#fbbf24" />
              <polygon points="40,76 41,79 44,79 41.5,81 42.5,84 40,82 37.5,84 38.5,81 36,79 39,79" fill="#fbbf24" opacity="0.85" />
              <polygon points="60,76 61,79 64,79 61.5,81 62.5,84 60,82 57.5,84 58.5,81 56,79 59,79" fill="#fbbf24" opacity="0.85" />
            </svg>
          </div>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-script text-base sm:text-lg text-[#f37021] font-bold tracking-wide -mb-1">
            Kabeer Sir's
          </span>
          <div className="flex items-baseline gap-1">
            <span
              className={`font-display font-black tracking-tight ${
                size === 'sm' ? 'text-lg' : size === 'hero' ? 'text-2xl sm:text-3xl' : 'text-xl'
              } ${theme === 'dark' ? 'text-white' : 'text-[#0a333d]'}`}
            >
              EDWORLD
            </span>
            <span
              className={`font-display font-black tracking-tight ${
                size === 'sm' ? 'text-lg' : size === 'hero' ? 'text-2xl sm:text-3xl' : 'text-xl'
              } text-[#f37021]`}
            >
              ACADEMY
            </span>
          </div>
          <span
            className={`text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold ${
              theme === 'dark' ? 'text-teal-200/70' : 'text-slate-500'
            }`}
          >
            Making Learning Easy
          </span>
        </div>
      )}
    </div>
  );
};
