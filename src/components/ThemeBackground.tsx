import React from 'react';

// 4-point sparkle star matching the reference design sheet
export const SparkleStar: React.FC<{ className?: string; color?: string; size?: number }> = ({
  className = '',
  color = '#60A6DC',
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={{ color }}
  >
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
  </svg>
);

interface ThemeBackgroundProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export const ThemeBackground: React.FC<ThemeBackgroundProps> = ({
  children,
  className = '',
  contentClassName = '',
}) => {
  return (
    <div
      className={`relative min-h-[calc(100vh-65px)] bg-gradient-to-b from-[#011425] via-[#02223E] to-[#04284b] text-[#f0f4f9] font-averta overflow-hidden ${className}`}
    >
      {/* Background layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none">
        {/* User Cleaned Mountain Landscape Background */}
        <img
          src="/assets/aistudio/clean_mountain_bg.jpg"
          alt="Clean Mountain Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Subtle translucent tint ensuring crisp contrast for the frosted glass cards */}
        <div className="absolute inset-0 bg-[#02223E]/20" />

        {/* Ambient sparkle stars */}
        <div className="absolute top-16 left-[10%] animate-sparkle-1">
          <SparkleStar color="#60A6DC" size={24} />
        </div>
        <div className="absolute top-28 right-[18%] animate-sparkle-2">
          <SparkleStar color="#D4C1B6" size={20} />
        </div>
        <div className="absolute top-[52%] left-[6%] animate-sparkle-2">
          <SparkleStar color="#60A6DC" size={18} />
        </div>
        <div className="absolute top-[68%] right-[10%] animate-sparkle-1">
          <SparkleStar color="#D4C1B6" size={24} />
        </div>

        {/* Soft, Faint Translucent Meteors */}
        <div
          className="absolute -top-10 right-[18%] w-56 h-[1.5px] bg-gradient-to-r from-transparent via-[#60A6DC]/50 to-white/90 rounded-full shadow-[0_0_12px_rgba(96,166,220,0.8)] animate-meteor-1"
          style={{ transformOrigin: 'right center' }}
        />
        <div
          className="absolute top-[26%] right-[8%] w-40 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4C1B6]/50 to-white/90 rounded-full shadow-[0_0_10px_rgba(212,193,182,0.8)] animate-meteor-2"
          style={{ transformOrigin: 'right center' }}
        />
      </div>

      {/* Content wrapper */}
      <div className={`relative z-10 ${contentClassName}`}>{children}</div>
    </div>
  );
};
