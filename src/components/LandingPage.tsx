import React, { useState, useEffect, useRef } from 'react';
import { LanguageCode } from '../types';
import {
  ArrowRight,
  ArrowDown
} from 'lucide-react';

interface TrailCardItem {
  letter: string;
  word: string;
  meaning: string;
  lang: string;
  script: string;
  textColor: string;
  borderColor: string;
  dotColor: string;
}

const TRAIL_ITEMS: TrailCardItem[] = [
  {
    letter: 'अ',
    word: 'नमस्ते',
    meaning: 'Hello · Peace',
    lang: 'Hindi',
    script: 'font-devanagari',
    textColor: 'text-[#00f59b]',
    borderColor: 'border-[#00f59b]/40',
    dotColor: 'bg-[#00f59b]',
  },
  {
    letter: 'অ',
    word: 'আনন্দ',
    meaning: 'Joy · Delight',
    lang: 'Bengali',
    script: 'font-bengali',
    textColor: 'text-[#f472b6]',
    borderColor: 'border-[#f472b6]/40',
    dotColor: 'bg-[#f472b6]',
  },
  {
    letter: 'ळ',
    word: 'संभाषण',
    meaning: 'Dialogue · Speech',
    lang: 'Marathi',
    script: 'font-devanagari',
    textColor: 'text-[#ffb703]',
    borderColor: 'border-[#ffb703]/40',
    dotColor: 'bg-[#ffb703]',
  },
  {
    letter: 'জ্ঞ',
    word: 'ज्ञान',
    meaning: 'Wisdom · Light',
    lang: 'Hindi',
    script: 'font-devanagari',
    textColor: 'text-[#38bdf8]',
    borderColor: 'border-[#38bdf8]/40',
    dotColor: 'bg-[#38bdf8]',
  },
  {
    letter: 'ভ',
    word: 'ভালোবাসা',
    meaning: 'Love · Warmth',
    lang: 'Bengali',
    script: 'font-bengali',
    textColor: 'text-[#e879f9]',
    borderColor: 'border-[#e879f9]/40',
    dotColor: 'bg-[#e879f9]',
  },
  {
    letter: 'प्र',
    word: 'प्रयास',
    meaning: 'Effort · Strive',
    lang: 'Marathi',
    script: 'font-devanagari',
    textColor: 'text-[#a855f7]',
    borderColor: 'border-[#a855f7]/40',
    dotColor: 'bg-[#a855f7]',
  },
  {
    letter: 'ব',
    word: 'বন্ধু',
    meaning: 'Friend · Amity',
    lang: 'Bengali',
    script: 'font-bengali',
    textColor: 'text-[#34d399]',
    borderColor: 'border-[#34d399]/40',
    dotColor: 'bg-[#34d399]',
  },
  {
    letter: 'सु',
    word: 'सुप्रभात',
    meaning: 'Good Morning',
    lang: 'Hindi',
    script: 'font-devanagari',
    textColor: 'text-[#fbbf24]',
    borderColor: 'border-[#fbbf24]/40',
    dotColor: 'bg-[#fbbf24]',
  },
  {
    letter: 'गो',
    word: 'गोड',
    meaning: 'Sweet · Beloved',
    lang: 'Marathi',
    script: 'font-devanagari',
    textColor: 'text-[#f472b6]',
    borderColor: 'border-[#f472b6]/40',
    dotColor: 'bg-[#f472b6]',
  },
  {
    letter: 'শ',
    word: 'শান্তি',
    meaning: 'Serenity · Peace',
    lang: 'Bengali',
    script: 'font-bengali',
    textColor: 'text-[#818cf8]',
    borderColor: 'border-[#818cf8]/40',
    dotColor: 'bg-[#818cf8]',
  },
  {
    letter: 'उ',
    word: 'उत्सव',
    meaning: 'Celebration · Gala',
    lang: 'Marathi',
    script: 'font-devanagari',
    textColor: 'text-[#00f59b]',
    borderColor: 'border-[#00f59b]/40',
    dotColor: 'bg-[#00f59b]',
  },
  {
    letter: 'क',
    word: 'कविता',
    meaning: 'Poetry · Verse',
    lang: 'Hindi',
    script: 'font-devanagari',
    textColor: 'text-[#ffb703]',
    borderColor: 'border-[#ffb703]/40',
    dotColor: 'bg-[#ffb703]',
  },
];

interface ActiveTrailCard extends TrailCardItem {
  id: number;
  x: number;
  y: number;
  rotation: number;
}

interface LandingPageProps {
  onStartLearning: () => void;
  onSelectLanguageDirect: (lang: LanguageCode) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onStartLearning,
  onSelectLanguageDirect,
}) => {
  // Mouse parallax state for 3D floating shapes and study materials
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Cursor trail state for Indian words/letters animation above footer
  const [trailCards, setTrailCards] = useState<ActiveTrailCard[]>([]);
  const lastTrailPos = useRef({ x: 0, y: 0 });
  const trailItemIdx = useRef(0);

  // Typewriter effect state
  const typeWords = ['fingertips', 'conversations', 'daily life', 'fluency'];
  const [wordIdx, setWordIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullWord = typeWords[wordIdx];
    const typingSpeed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullWord.slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentFullWord.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayedText(currentFullWord.slice(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % typeWords.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIdx]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  // Cleanup trail cards when their 1.4s animation finishes
  useEffect(() => {
    if (trailCards.length === 0) return;
    const interval = setTimeout(() => {
      const now = Date.now();
      setTrailCards((prev) => prev.filter((c) => now - c.id < 1400));
    }, 200);
    return () => clearTimeout(interval);
  }, [trailCards]);

  // Cursor trail mouse handler: spawns cards every ~38px of cursor travel
  const handleTrailMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = x - lastTrailPos.current.x;
    const dy = y - lastTrailPos.current.y;
    const dist = Math.hypot(dx, dy);

    if (dist > 38) {
      lastTrailPos.current = { x, y };
      const item = TRAIL_ITEMS[trailItemIdx.current % TRAIL_ITEMS.length];
      trailItemIdx.current += 1;

      const rotation = Math.floor(Math.random() * 24) - 12; // -12deg to +12deg
      const newCard: ActiveTrailCard = {
        id: Date.now() + Math.random(),
        x,
        y,
        rotation,
        ...item,
      };

      setTrailCards((prev) => [...prev.slice(-14), newCard]);
    }
  };

  // Touch support for mobile devices
  const handleTrailTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const dx = x - lastTrailPos.current.x;
    const dy = y - lastTrailPos.current.y;
    if (Math.hypot(dx, dy) > 38) {
      lastTrailPos.current = { x, y };
      const item = TRAIL_ITEMS[trailItemIdx.current % TRAIL_ITEMS.length];
      trailItemIdx.current += 1;

      const rotation = Math.floor(Math.random() * 24) - 12;
      const newCard: ActiveTrailCard = {
        id: Date.now() + Math.random(),
        x,
        y,
        rotation,
        ...item,
      };

      setTrailCards((prev) => [...prev.slice(-14), newCard]);
    }
  };

  return (
    <div className="relative min-h-screen text-[#f3effa] bg-[#0d061f] overflow-hidden selection:bg-[#9d174d] selection:text-white">
      {/* =========================================================================
          COSMIC AURA NEON GRADIENTS (Ambient lighting)
          ========================================================================= */}
      <div className="absolute top-[8%] left-[5%] w-[450px] h-[450px] bg-[#00f59b]/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-[6%] right-[8%] w-[550px] h-[550px] bg-[#a82467]/12 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[8%] w-[500px] h-[500px] bg-[#a855f7]/12 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-[15%] right-[10%] w-[500px] h-[500px] bg-[#ffb703]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* =========================================================================
          HERO SECTION WITH CONFINED BACKGROUND STUDY MATERIALS & CHALK SCRIPT
          ========================================================================= */}
      <section
        onMouseMove={handleMouseMove}
        className="relative min-h-[90vh] flex flex-col justify-between py-12 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden z-10"
      >
        {/* =========================================================================
            TRANSLUCENT STUDY MATERIALS & CHALK WRITING (Strictly inside Hero, non-overlapping)
            ========================================================================= */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
          {/* --- TRANSLUCENT LINED NOTEBOOK PAPER 1 (Top-Right, compact notepad) --- */}
          <div
            className="absolute top-[2%] right-[2%] sm:right-[4%] w-32 h-40 sm:w-36 sm:h-48 rounded-xl bg-white/[0.03] border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.4)] transform rotate-[12deg] transition-transform duration-500 ease-out"
            style={{
              transform: `translate(${mousePos.x * -14}px, ${mousePos.y * -10}px) rotate(12deg)`,
            }}
          >
            {/* Folded paper corner */}
            <div className="absolute top-0 right-0 w-5 h-5 border-b border-l border-white/20 bg-white/[0.06] rounded-bl-md" />
            {/* Left binder holes */}
            <div className="absolute left-2 top-4 bottom-4 flex flex-col justify-between">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0d061f] border border-white/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#0d061f] border border-white/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#0d061f] border border-white/20" />
            </div>
            {/* Red/pink vertical margin line */}
            <div className="absolute left-5 top-0 bottom-0 w-[1px] bg-rose-400/20" />
            {/* Ruled lines with small faint handwritten notes */}
            <div className="pl-7 pr-2 pt-3.5 space-y-2.5">
              <div className="h-[1px] bg-white/[0.08] relative">
                <span className="absolute -top-3 left-1 font-devanagari text-[9px] text-white/30 chalk-script">
                  क ख ग · अभ्यास
                </span>
              </div>
              <div className="h-[1px] bg-white/[0.08] relative">
                <span className="absolute -top-3 left-1 font-bengali text-[9px] text-white/30 chalk-script">
                  অ আ ই · প্রথম পাঠ
                </span>
              </div>
              <div className="h-[1px] bg-white/[0.08] relative">
                <span className="absolute -top-3 left-1 font-devanagari text-[9px] text-white/30 chalk-script">
                  संवाद · भाषा
                </span>
              </div>
              <div className="h-[1px] bg-white/[0.08]" />
              <div className="h-[1px] bg-white/[0.08]" />
            </div>
          </div>

          {/* --- TRANSLUCENT STUDY SLATE / GRID PAPER 2 (Confined to Mid-Left of Hero, compact) --- */}
          <div
            className="absolute top-[34%] left-[1%] sm:left-[3%] w-32 h-38 sm:w-36 sm:h-44 rounded-xl bg-white/[0.03] border border-white/10 shadow-lg transform -rotate-[8deg] transition-transform duration-500 ease-out"
            style={{
              transform: `translate(${mousePos.x * 14}px, ${mousePos.y * 10}px) rotate(-8deg)`,
            }}
          >
            <div className="p-3 space-y-1.5">
              <div className="text-[8px] font-mono text-white/25 border-b border-white/10 pb-1 flex justify-between">
                <span>NOTES.01</span>
                <span>देवनागरी + বাংলা</span>
              </div>
              <div className="space-y-1 pt-0.5 font-devanagari text-[9px] text-white/30 leading-snug">
                <div className="chalk-script">१. वर्ण (Letters)</div>
                <div className="chalk-script">२. शब्द (Words)</div>
                <div className="chalk-script">३. संभाषण (Speak)</div>
              </div>
              <div className="pt-1.5 border-t border-white/10 grid grid-cols-4 gap-1 opacity-30">
                <div className="h-4 rounded bg-white/5 border border-white/10 flex items-center justify-center font-devanagari text-[8px]">अ</div>
                <div className="h-4 rounded bg-white/5 border border-white/10 flex items-center justify-center font-bengali text-[8px]">ক</div>
                <div className="h-4 rounded bg-white/5 border border-white/10 flex items-center justify-center font-devanagari text-[8px]">ज्ञा</div>
                <div className="h-4 rounded bg-white/5 border border-white/10 flex items-center justify-center font-devanagari text-[8px]">ळ</div>
              </div>
            </div>
          </div>

          {/* --- TRANSLUCENT FOUNTAIN PEN (Floating Upper-Left, compact) --- */}
          <div
            className="absolute top-[6%] left-[20%] sm:left-[24%] w-6 h-22 sm:w-7 sm:h-26 transition-transform duration-500 ease-out animate-float-1 opacity-25"
            style={{
              transform: `translate(${mousePos.x * -18}px, ${mousePos.y * -14}px) rotate(35deg)`,
            }}
          >
            <svg viewBox="0 0 40 180" fill="none" className="w-full h-full drop-shadow-[0_6px_12px_rgba(0,245,155,0.2)]">
              <path d="M20 0 L26 35 L14 35 Z" fill="rgba(255, 215, 0, 0.45)" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1" />
              <line x1="20" y1="2" x2="20" y2="28" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1" />
              <circle cx="20" cy="22" r="1.5" fill="rgba(255, 255, 255, 0.7)" />
              <rect x="15" y="35" width="10" height="25" rx="2" fill="rgba(255, 255, 255, 0.2)" stroke="rgba(255, 255, 255, 0.3)" />
              <rect x="13" y="60" width="14" height="4" rx="1" fill="rgba(255, 215, 0, 0.5)" />
              <rect x="14" y="64" width="12" height="95" rx="5" fill="rgba(255, 255, 255, 0.12)" stroke="rgba(255, 255, 255, 0.25)" />
              <rect x="11" y="70" width="3" height="50" rx="1.5" fill="rgba(255, 255, 255, 0.35)" />
              <path d="M14 159 Q20 168 26 159 Z" fill="rgba(255, 255, 255, 0.2)" stroke="rgba(255, 255, 255, 0.3)" />
            </svg>
          </div>

          {/* --- TRANSLUCENT WOODEN PENCIL (Floating Mid-Right, compact) --- */}
          <div
            className="absolute top-[38%] right-[2%] sm:right-[3%] w-5 h-22 sm:w-6 sm:h-26 transition-transform duration-500 ease-out animate-float-4 opacity-25"
            style={{
              transform: `translate(${mousePos.x * 18}px, ${mousePos.y * 14}px) rotate(-28deg)`,
            }}
          >
            <svg viewBox="0 0 35 170" fill="none" className="w-full h-full drop-shadow-[0_6px_12px_rgba(255,183,3,0.2)]">
              <polygon points="17.5,0 21,18 14,18" fill="rgba(255, 255, 255, 0.7)" />
              <polygon points="14,18 21,18 23,38 12,38" fill="rgba(255, 210, 160, 0.35)" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="0.8" />
              <rect x="12" y="38" width="11" height="95" fill="rgba(255, 183, 3, 0.3)" stroke="rgba(255, 255, 255, 0.25)" />
              <line x1="16" y1="38" x2="16" y2="133" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.8" />
              <line x1="19" y1="38" x2="19" y2="133" stroke="rgba(0, 0, 0, 0.2)" strokeWidth="0.8" />
              <rect x="11.5" y="133" width="12" height="12" fill="rgba(220, 220, 230, 0.45)" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.8" />
              <rect x="12" y="145" width="11" height="16" rx="4" fill="rgba(255, 120, 150, 0.45)" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.8" />
            </svg>
          </div>

          {/* CHALK WORDS CONFINED TO HERO BACKGROUND - Compact, refined font & no overlap */}
          <div
            className="absolute top-[18%] left-[2%] sm:left-[4%] font-devanagari text-white/25 text-[10px] sm:text-[11px] font-semibold tracking-wider border border-dashed border-white/10 px-2.5 py-0.5 rounded-lg transition-transform duration-500 ease-out chalk-script"
            style={{
              transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -8}px) rotate(-6deg)`,
            }}
          >
            नमस्ते · Namaste
          </div>

          <div
            className="absolute top-[26%] right-[2%] sm:right-[4%] font-bengali text-white/25 text-[10px] sm:text-[11px] font-semibold tracking-wider border border-dashed border-white/10 px-2.5 py-0.5 rounded-lg transition-transform duration-500 ease-out chalk-script"
            style={{
              transform: `translate(${mousePos.x * 12}px, ${mousePos.y * -10}px) rotate(6deg)`,
            }}
          >
            বাংলা · Bangla
          </div>

          <div
            className="absolute top-[3%] left-[45%] font-devanagari text-white/20 text-[9px] sm:text-[10px] font-mono chalk-script transition-transform duration-500 ease-out"
            style={{
              transform: `translate(${mousePos.x * 8}px, ${mousePos.y * -6}px) rotate(-2deg)`,
            }}
          >
            वर्णमाला · अ आ इ
          </div>

          <div
            className="absolute bottom-[20%] left-[8%] sm:left-[12%] font-devanagari text-white/22 text-[10px] sm:text-[11px] font-semibold tracking-wider border border-dashed border-white/10 px-2 py-0.5 rounded-lg transition-transform duration-500 ease-out chalk-script"
            style={{
              transform: `translate(${mousePos.x * -10}px, ${mousePos.y * 12}px) rotate(-6deg)`,
            }}
          >
            मराठी · संभाषण
          </div>

          <div
            className="absolute bottom-[20%] right-[8%] sm:right-[12%] font-bengali text-white/20 text-[10px] sm:text-[11px] font-medium tracking-wide chalk-script transition-transform duration-500 ease-out"
            style={{
              transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px) rotate(-3deg)`,
            }}
          >
            আনন্দ ও জ্ঞান
          </div>
        </div>

        {/* Center Stage with 4 Floating 3D Shapes */}
        <div className="relative my-auto py-8 flex flex-col items-center text-center z-10">
          {/* ================= 3D SHAPE 1: TOP-LEFT MINT CYLINDER ================= */}
          <div
            className="absolute -top-6 left-2 sm:left-8 w-20 h-28 sm:w-28 sm:h-36 pointer-events-none transition-transform duration-300 ease-out animate-float-1 z-0"
            style={{
              transform: `translate(${mousePos.x * -35}px, ${mousePos.y * -25}px) rotate(-18deg)`,
            }}
          >
            <div className="relative w-full h-full">
              <div className="w-full h-full rounded-[40px] bg-gradient-to-b from-[#00f59b] via-[#00c978] to-[#017849] shadow-[0_20px_40px_rgba(0,245,155,0.35),inset_0_4px_8px_rgba(255,255,255,0.6)] flex items-start justify-center pt-2">
                <div className="w-10 h-7 sm:w-14 sm:h-9 rounded-full bg-[#00603a] shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)] border-2 border-[#00f59b]/50" />
              </div>
            </div>
          </div>

          {/* ================= 3D SHAPE 2: TOP-RIGHT SOFT MAGENTA ORB ================= */}
          <div
            className="absolute -top-4 right-2 sm:right-12 w-20 h-20 sm:w-28 sm:h-28 pointer-events-none transition-transform duration-300 ease-out animate-float-2 z-0"
            style={{
              transform: `translate(${mousePos.x * 40}px, ${mousePos.y * -30}px)`,
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#e0659a] via-[#be185d] to-[#700d36] shadow-[0_20px_45px_rgba(190,24,93,0.35),inset_-6px_-6px_14px_rgba(0,0,0,0.5),inset_6px_6px_14px_rgba(255,255,255,0.6)]" />
          </div>

          {/* ================= 3D SHAPE 3: BOTTOM-LEFT LAVENDER TORUS ================= */}
          <div
            className="absolute -bottom-8 -left-4 sm:left-4 w-28 h-28 sm:w-40 sm:h-40 pointer-events-none transition-transform duration-300 ease-out animate-float-3 z-0"
            style={{
              transform: `translate(${mousePos.x * -30}px, ${mousePos.y * 30}px) rotate(25deg)`,
            }}
          >
            <div className="w-full h-full rounded-full border-[22px] sm:border-[30px] border-[#a855f7] bg-transparent shadow-[0_25px_50px_rgba(168,85,247,0.35),inset_0_6px_12px_rgba(255,255,255,0.5),0_0_20px_rgba(168,85,247,0.5)]" />
          </div>

          {/* ================= 3D SHAPE 4: BOTTOM-RIGHT GOLDEN CUBE ================= */}
          <div
            className="absolute -bottom-6 right-2 sm:right-8 w-24 h-24 sm:w-32 sm:h-32 pointer-events-none transition-transform duration-300 ease-out animate-float-4 z-0"
            style={{
              transform: `translate(${mousePos.x * 35}px, ${mousePos.y * 35}px) rotate(22deg)`,
            }}
          >
            <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[#ffe066] via-[#ffb703] to-[#c78000] shadow-[0_20px_45px_rgba(255,183,3,0.4),inset_4px_4px_10px_rgba(255,255,255,0.6),inset_-4px_-4px_10px_rgba(0,0,0,0.3)] transform rotate-12" />
          </div>

          {/* ================= 3D RAINBOW CHROME BRAND MARK ================= */}
          <div className="relative mb-6 select-none">
            <div className="text-5xl sm:text-7xl lg:text-8xl font-black font-heading tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#00f59b] via-[#38bdf8] via-[#a855f7] via-[#be185d] to-[#ffb703] drop-shadow-[0_10px_25px_rgba(168,85,247,0.5)]">
              BHASHA
            </div>
          </div>

          {/* ================= SERIF HEADLINE ================= */}
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-display font-medium text-white tracking-tight leading-[1.2]">
              Bringing delightful Indian languages to your{' '}
              <span className="text-[#38bdf8]">
                {displayedText}
              </span>
            </h1>
            <p className="text-sm sm:text-base text-[#baa8d8] max-w-xl mx-auto leading-relaxed pt-2">
              Learn Hindi, Bengali, and Marathi with dual-speed audio, authentic native scripts, and interactive sentence building.
            </p>
          </div>

          {/* ================= DOTTED CURVED PATH & CTA BUTTON ================= */}
          <div className="relative mt-8 flex flex-col items-center">
            {/* SVG Dotted Trajectory Arc */}
            <svg
              className="w-48 h-16 -mb-4 pointer-events-none opacity-80"
              viewBox="0 0 200 80"
              fill="none"
            >
              <path
                d="M 20 10 Q 70 80 170 50"
                stroke="rgba(255, 255, 255, 0.4)"
                strokeWidth="2"
                strokeDasharray="4 6"
              />
            </svg>

            {/* Glowing Electric Violet CTA Button */}
            <a
              href="#languages-showcase"
              className="relative inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold text-sm shadow-[0_0_30px_rgba(79,70,229,0.55)] hover:shadow-[0_0_40px_rgba(79,70,229,0.8)] transition-all cursor-pointer transform active:scale-95 z-10"
            >
              <span>Explore the 3 Languages</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ================= BOTTOM FROSTED GLASS MILESTONE DOCK BAR ================= */}
        <div className="w-full max-w-4xl mx-auto pt-6 z-10">
          <div className="relative bg-white/10 backdrop-blur-md rounded-full p-2.5 sm:p-3 border border-white/15 shadow-2xl flex items-center justify-between text-[10px] sm:text-xs font-semibold">
            {/* Connecting Track Line */}
            <div className="absolute left-8 right-8 top-1/2 h-0.5 bg-white/20 -translate-y-1/2 -z-10" />

            {/* Node 1: SCRIPT (Dark pill) */}
            <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-[#1b1035] text-white border border-white/20 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#00f59b]" />
              <span className="uppercase tracking-wider">01. SCRIPT (वर्णमाला)</span>
            </div>

            {/* Node 2: WORDS (Yellow pill) */}
            <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-[#ffb703] text-[#120826] shadow-xs">
              <span className="uppercase tracking-wider font-bold">02. WORDS (शब्द)</span>
            </div>

            {/* Node 3: SENTENCE (Refined Soft Rose Pill) */}
            <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-[#be185d] text-white shadow-xs">
              <span className="uppercase tracking-wider font-bold">03. SENTENCE (वाक्य)</span>
            </div>

            {/* Node 4: FLUENCY (Blue pill) */}
            <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-[#3b82f6] text-white shadow-xs">
              <span className="uppercase tracking-wider font-bold">04. FLUENCY (संभाषण)</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: THE 3 LANGUAGES SHOWCASE (Clean, opaque background layer)
          ========================================================================= */}
      <section id="languages-showcase" className="py-24 px-6 sm:px-12 bg-[#12072b] border-t border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="pb-6 border-b border-white/10">
            <h2 className="text-3xl sm:text-5xl font-serif-display font-medium text-white tracking-tight">
              Choose Your Language Track
            </h2>
            <p className="text-sm text-[#baa8d8] mt-2 max-w-xl">
              Click any of the three tracks below. You will be prompted to log in or create a free profile, then enter directly into your personalized study studio.
            </p>
          </div>

          {/* 3 Glowing Language Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. HINDI */}
            <div
              onClick={() => onSelectLanguageDirect('hi')}
              className="group relative bg-[#1c0f3c]/85 hover:bg-[#251550] rounded-3xl p-8 border border-white/15 hover:border-[#00f59b] transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl hover:shadow-[0_0_35px_rgba(0,245,155,0.25)]"
            >
              <div>
                <div className="text-6xl font-bold font-devanagari text-white mb-2 group-hover:text-[#00f59b] transition-colors">
                  हिन्दी
                </div>
                <div className="text-xl font-bold font-heading text-white">
                  Hindi
                </div>
                <div className="text-xs font-mono text-[#baa8d8] mt-1">
                  Devanagari Script (देवनागरी)
                </div>

                <p className="text-xs text-[#baa8d8] mt-4 leading-relaxed">
                  The expressive, widely spoken lingua franca of northern and central India, famous for classical poetry, cinema, and heartfelt everyday greetings.
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <button
                  type="button"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#4f46e5] text-white font-bold text-xs uppercase tracking-wider group-hover:bg-[#00f59b] group-hover:text-[#0d061f] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Start Studying Hindi</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 2. BENGALI */}
            <div
              onClick={() => onSelectLanguageDirect('bn')}
              className="group relative bg-[#1c0f3c]/85 hover:bg-[#251550] rounded-3xl p-8 border border-white/15 hover:border-[#be185d] transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl hover:shadow-[0_0_35px_rgba(190,24,93,0.25)]"
            >
              <div>
                <div className="text-6xl font-bold font-bengali text-white mb-2 group-hover:text-[#f472b6] transition-colors">
                  বাংলা
                </div>
                <div className="text-xl font-bold font-heading text-white">
                  Bengali
                </div>
                <div className="text-xs font-mono text-[#baa8d8] mt-1">
                  Bengali-Assamese Script (বাংলা লিপি)
                </div>

                <p className="text-xs text-[#baa8d8] mt-4 leading-relaxed">
                  The sweet, melodic language of Rabindranath Tagore, spoken across West Bengal and Bangladesh, famous for literature, music, and unhurried adda conversations.
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <button
                  type="button"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#4f46e5] text-white font-bold text-xs uppercase tracking-wider group-hover:bg-[#be185d] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Start Studying Bengali</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 3. MARATHI */}
            <div
              onClick={() => onSelectLanguageDirect('mr')}
              className="group relative bg-[#1c0f3c]/85 hover:bg-[#251550] rounded-3xl p-8 border border-white/15 hover:border-[#ffb703] transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl hover:shadow-[0_0_35px_rgba(255,183,3,0.25)]"
            >
              <div>
                <div className="text-6xl font-bold font-devanagari text-white mb-2 group-hover:text-[#ffb703] transition-colors">
                  मराठी
                </div>
                <div className="text-xl font-bold font-heading text-white">
                  Marathi
                </div>
                <div className="text-xs font-mono text-[#baa8d8] mt-1">
                  Balbodh Devanagari (बाळबोध)
                </div>

                <p className="text-xs text-[#baa8d8] mt-4 leading-relaxed">
                  The historic, energetic language of Maharashtra and saint-poets, featuring rich cultural idioms and distinctive sounds like the retroflex ळ (ḷa).
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <button
                  type="button"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#4f46e5] text-white font-bold text-xs uppercase tracking-wider group-hover:bg-[#ffb703] group-hover:text-[#0d061f] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Start Studying Marathi</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: INTERACTIVE CURSOR TRAIL SECTION (Just above footer, matching video reference)
          ========================================================================= */}
      <section
        onMouseMove={handleTrailMouseMove}
        onTouchMove={handleTrailTouchMove}
        className="relative z-20 min-h-[460px] py-24 px-6 sm:px-12 bg-[#0c041d] border-t border-white/10 flex flex-col items-center justify-center text-center overflow-hidden select-none cursor-default"
      >
        {/* Subtle grid pattern & soft central berry/rose aura */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] [background-size:26px_26px] pointer-events-none opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-[#9d174d]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

        {/* Trail cards rendered dynamically behind cursor with Indian letters and words */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {trailCards.map((card) => (
            <div
              key={card.id}
              className={`absolute pointer-events-none animate-trail-card w-32 h-40 sm:w-36 sm:h-44 rounded-2xl p-3 flex flex-col justify-between shadow-[0_20px_45px_rgba(0,0,0,0.7)] border ${card.borderColor} backdrop-blur-md`}
              style={{
                left: `${card.x}px`,
                top: `${card.y}px`,
                ['--rot' as any]: `${card.rotation}deg`,
                background: 'rgba(15, 6, 32, 0.92)',
              }}
            >
              {/* Language Tag */}
              <div className="flex items-center justify-between">
                <span className={`text-[9px] font-mono tracking-wider px-2 py-0.5 rounded-full border border-white/15 bg-white/5 uppercase ${card.textColor} font-bold`}>
                  {card.lang}
                </span>
                <span className={`w-1.5 h-1.5 rounded-full ${card.dotColor}`} />
              </div>

              {/* Native Letter & Word */}
              <div className="text-center my-auto py-1">
                <div className={`text-4xl sm:text-5xl font-black ${card.script} ${card.textColor} leading-none drop-shadow-md`}>
                  {card.letter}
                </div>
                <div className={`text-xs font-bold ${card.script} text-white/95 mt-1.5 tracking-wide`}>
                  {card.word}
                </div>
              </div>

              {/* English Meaning */}
              <div className="text-[10px] text-white/60 font-mono border-t border-white/10 pt-1 text-center truncate">
                {card.meaning}
              </div>
            </div>
          ))}
        </div>

        {/* Center Content: Title, Interactive Note, and Button (like the video) */}
        <div className="relative z-20 max-w-2xl mx-auto space-y-6 pointer-events-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight leading-[1.15]">
            Ready to speak another Indian language?
          </h2>
          <p className="text-sm sm:text-base text-[#baa8d8] max-w-lg mx-auto leading-relaxed">
            Move your cursor across this space to reveal native words &amp; letters in Hindi, Bengali, and Marathi.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={onStartLearning}
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#9d174d] hover:bg-[#be185d] text-white font-bold text-sm shadow-[0_0_30px_rgba(157,23,77,0.55)] hover:shadow-[0_0_40px_rgba(190,24,93,0.75)] transition-all cursor-pointer transform active:scale-95"
            >
              <span>Enter Study Studio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FOOTER & INFINITE MARQUEE
          ========================================================================= */}
      <section className="relative z-20 bg-[#070110] text-white pt-12 pb-12 px-6 sm:px-12 overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Floating infinite marquee text */}
          <div className="w-full overflow-hidden py-4 select-none">
            <div className="flex w-max animate-marquee-left whitespace-nowrap">
              <span className="text-[13vw] sm:text-[14vw] font-black font-heading tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#00f59b] via-[#a855f7] to-[#be185d] opacity-80 pr-10 uppercase">
                bhashabridge · bhashabridge · 
              </span>
              <span className="text-[13vw] sm:text-[14vw] font-black font-heading tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#00f59b] via-[#a855f7] to-[#be185d] opacity-80 pr-10 uppercase" aria-hidden="true">
                bhashabridge · bhashabridge · 
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-[#8e7dae]">
            <div>
              &copy; {new Date().getFullYear()} BhashaBridge. Multilingual Indian Language Learning Platform.
            </div>
            <div className="text-[11px] font-mono text-[#8e7dae]/70">
              Devanagari · Bengali · Balbodh
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
