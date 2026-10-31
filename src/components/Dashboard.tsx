import React, { useState } from 'react';
import { CategoryId, LanguageCode, UserProfile, UserProgress, UserLevel } from '../types';
import { CATEGORIES, LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import { STARTER_VOCABULARY } from '../data/vocabulary';
import {
  BookOpen,
  Award,
  ArrowRight,
  Layers,
  Bookmark,
  Clock,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  GraduationCap,
  FileText,
  Volume2,
  Mic,
  PenTool,
  Globe,
  Milestone,
  Bot,
  ShieldCheck,
  Zap,
  BookA
} from 'lucide-react';
import { SparkleStar } from './ThemeBackground';

interface DashboardProps {
  selectedLanguage: LanguageCode;
  profile: UserProfile;
  progress: UserProgress;
  onNavigate: (view: string, extra?: any) => void;
  onOpenLanguageModal: () => void;
  onOpenCertificateModal?: () => void;
  onSelectLanguage?: (lang: LanguageCode) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  selectedLanguage,
  profile,
  progress,
  onNavigate,
  onOpenLanguageModal,
  onOpenCertificateModal,
  onSelectLanguage,
}) => {
  const lang = LANGUAGES[selectedLanguage];
  const ui = UI_TRANSLATIONS[selectedLanguage];

  const [activeLevel, setActiveLevel] = useState<UserLevel>(profile.selectedLevel || 'beginner');

  const langVocab = STARTER_VOCABULARY.filter((v) => v.language === selectedLanguage);
  const learnedCount = progress.learnedWordIds.filter((id) =>
    langVocab.some((v) => v.id === id)
  ).length;
  const totalWords = langVocab.length;
  const percentageLearned = totalWords > 0 ? Math.round((learnedCount / totalWords) * 100) : 0;

  const targetMinutes = profile.dailyGoalMinutes || 15;
  const spentMinutes = progress.todayMinutesSpent || 0;
  const goalPercentage = Math.min(100, Math.round((spentMinutes / targetMinutes) * 100));

  const totalXP = (progress.xp || 420) + (progress.quizScores?.length || 0) * 20;

  // Academic Hub Modules
  const academicHubModules = [
    {
      id: 'syllabus',
      title: 'Lessons & Syllabus (40 Chapters)',
      subtitle: 'अध्याय-वार संपूर्ण अभ्यासक्रम',
      description: 'Systematic 40-chapter curriculum spanning Script, Phonetics, Morphology, Syntax, and Composition.',
      icon: BookOpen,
      badge: '40 Chapters',
      action: 'Explore Syllabus'
    },
    {
      id: 'dictionary',
      title: 'Tri-Lingual Student Dictionary (शब्दकोश)',
      subtitle: 'हिन्दी · বাংলা · मराठी तुलनात्मक शब्दकोश',
      description: 'Search words across Hindi, Bengali, and Marathi with native audio, grammatical gender, example sentences, and cross-language comparisons.',
      icon: BookA,
      badge: 'Tri-Lingual Audio',
      action: 'Search Dictionary'
    },
    {
      id: 'alphabet',
      title: 'Alphabet & Pronunciation Lab',
      subtitle: 'वर्णमाला, मुळाक्षरे व उच्चार',
      description: 'Master vowels (स्वर), consonants (व्यंजन), Barakhadi/Juktoborno, and retroflex articulation.',
      icon: Volume2,
      badge: 'Interactive Audio',
      action: 'Open Alphabet Lab'
    },
    {
      id: 'grammar',
      title: 'Grammar from Basic to Advanced',
      subtitle: 'व्याकरण प्रयोगशाळा व तुलना',
      description: 'Deep dive into Gender systems (Bengali 0 vs Hindi 2 vs Marathi 3), Karak/Vibhakti, Sandhi, and Samas.',
      icon: Layers,
      badge: 'Linguistic Matrix',
      action: 'Open Grammar Lab'
    },
    {
      id: 'vocabulary',
      title: 'Vocabulary & Thematic Cards',
      subtitle: 'शब्दावली व दैनिक शब्द',
      description: 'Curated vocabulary decks across 15 real-life categories with dual-speed audio and usage examples.',
      icon: Bookmark,
      badge: 'Bilingual Decks',
      action: 'Open Flashcards'
    },
    {
      id: 'reading-writing',
      title: 'Reading & Penmanship Studio',
      subtitle: 'पठन, डिजिटल लेखन व निबंध',
      description: 'Passage comprehension drills, digital calligraphy canvas pad, and 150-word structured essay writing.',
      icon: PenTool,
      badge: 'Handwriting Canvas',
      action: 'Open Reading & Writing'
    },
    {
      id: 'listening-speaking',
      title: 'Listening & Speaking Acoustics Lab',
      subtitle: 'श्रवण, संभाषण व उच्चार चाचणी',
      description: 'Multi-speaker real-world dialogues, speech recognition pronunciation scoring, and 60s speech challenge.',
      icon: Mic,
      badge: 'Speech Recognition',
      action: 'Open Speaking Lab'
    },
    {
      id: 'mock-exam',
      title: 'Examinations & 100-Mark Mock Test',
      subtitle: '१०० गुणांची अधिकृत परीक्षा',
      description: 'Timed full-length exam blueprint: Alphabet 10, Vocab 10, Grammar 20, Reading 15, Writing 15, Translation 10, Listening 10, Speaking 10.',
      icon: Award,
      badge: '100 Marks Timed',
      action: 'Take Examination'
    },
    {
      id: 'roadmap',
      title: '24-Week Learning Roadmap',
      subtitle: '२४ आठवड्यांचा रोडमॅप',
      description: 'From absolute beginner foundation to real-world fluency and literature across 8 academic phases.',
      icon: Milestone,
      badge: 'Master Roadmap',
      action: 'View Milestones'
    },
    {
      id: 'literature',
      title: 'Literature & Classical Authors',
      subtitle: 'साहित्य, काव्य व रचनाकार',
      description: 'Tagore, Nazrul, Bankim (BN); Sant Tukaram, Kusumagraj, PuLa (MR); Premchand, Kabir, Bachchan (HI).',
      icon: GraduationCap,
      badge: 'Canonical Authors',
      action: 'Explore Literature'
    },
    {
      id: 'worksheets',
      title: 'Practice Worksheets & Solutions',
      subtitle: 'सराव कार्यपत्रिका व उत्तरे',
      description: 'Printable practice question sheets with toggleable teacher solution keys and explanations.',
      icon: FileText,
      badge: 'Answer Keys Included',
      action: 'Open Worksheets'
    },
    {
      id: 'resources',
      title: 'Official Educational Resources',
      subtitle: 'अधिकृत शैक्षणिक स्रोत',
      description: 'Direct connections to NCERT ePathshala, Maharashtra Balbharati, CIIL primers, and Bharatavani.',
      icon: Globe,
      badge: 'NCERT & Balbharati',
      action: 'Open Resources'
    },
    {
      id: 'ai-tutor',
      title: 'AI Language Tutor & Simulator',
      subtitle: 'एआय शिक्षक व संवाद सिम्युलेटर',
      description: 'Ask questions in English or Indian languages; practice conversations like ordering chai or hiring cabs.',
      icon: Bot,
      badge: 'AI Roleplay',
      action: 'Chat with AI Tutor'
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-65px)] bg-gradient-to-b from-[#011425] via-[#02223E] to-[#04284b] text-[#f0f4f9] font-averta overflow-hidden">
      {/* Background Theme Canvas */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none">
        <img
          src="/assets/aistudio/clean_mountain_bg.jpg"
          alt="Clean Mountain Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#02223E]/20" />

        {/* Ambient sparkles & meteors */}
        <div className="absolute top-16 left-[12%] animate-sparkle-1">
          <SparkleStar color="#60A6DC" size={24} />
        </div>
        <div className="absolute top-28 right-[24%] animate-sparkle-2">
          <SparkleStar color="#D4C1B6" size={20} />
        </div>
        <div className="absolute top-[62%] right-[10%] animate-sparkle-1">
          <SparkleStar color="#D4C1B6" size={24} />
        </div>

        <div
          className="absolute -top-10 right-[18%] w-56 h-[1.5px] bg-gradient-to-r from-transparent via-[#60A6DC]/50 to-white/90 rounded-full shadow-[0_0_12px_rgba(96,166,220,0.8)] animate-meteor-1"
          style={{ transformOrigin: 'right center' }}
        />
        <div
          className="absolute top-[26%] right-[8%] w-40 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4C1B6]/50 to-white/90 rounded-full shadow-[0_0_10px_rgba(212,193,182,0.8)] animate-meteor-2"
          style={{ transformOrigin: 'right center' }}
        />
      </div>

      {/* Main Dashboard Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-8 space-y-8">
        {/* Top Header / Welcome Banner in Calm Frosted Translucent Glass */}
        <div className="relative rounded-[28px] bg-gradient-to-r from-[#032545]/40 via-[#053561]/35 to-[#021f3a]/40 p-8 md:p-10 overflow-hidden shadow-[0_12px_40px_rgba(1,20,37,0.35)] border border-[#60A6DC]/25 backdrop-blur-xl">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              {/* Profile / Level Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A6DC]/15 border border-[#60A6DC]/30 text-[#60A6DC] text-xs font-semibold backdrop-blur-sm">
                <span className="text-sm">{profile.avatar || '🎓'}</span>
                <span>{lang.greeting}!</span>
                <span className="text-[#D4C1B6]">·</span>
                <span className="text-white font-bold">{profile.name}</span>
                <span className="text-[10px] bg-[#60A6DC]/20 px-2 py-0.5 rounded-full text-white font-mono border border-[#60A6DC]/30">
                  {activeLevel.toUpperCase()}
                </span>
                <span className="text-[#D4C1B6] font-mono text-xs flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-300" /> {totalXP} XP
                </span>
              </div>

              {/* Title & Description with Averta Typography */}
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                {lang.nativeName} ({lang.name}) Academic Learning Hub
              </h1>
              <p className="text-xs md:text-sm text-[#D4C1B6] max-w-2xl leading-relaxed font-normal">
                {lang.description} · Complete curriculum from Script, Grammar, and Vocabulary to Literature, 100-Mark Examinations, and Official Textbooks.
              </p>

              {/* Level Selector Pills */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs text-[#D4C1B6] font-mono font-bold mr-1">
                  Active Level:
                </span>
                {(['beginner', 'intermediate', 'advanced'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setActiveLevel(lvl)}
                    className={`px-3 py-1 rounded-full text-[11px] font-bold capitalize transition-all cursor-pointer ${
                      activeLevel === lvl
                        ? 'bg-[#60A6DC] text-[#02223E] shadow-[0_0_12px_rgba(96,166,220,0.4)]'
                        : 'bg-[#032342]/50 text-[#D4C1B6] hover:text-white border border-[#60A6DC]/20'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Banner Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('syllabus')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs md:text-sm hover:bg-[#72b3e5] shadow-[0_0_25px_rgba(96,166,220,0.45)] transition-all cursor-pointer whitespace-nowrap active:scale-95"
              >
                <span>Browse 40 Chapters</span>
                <ArrowRight className="w-4 h-4 text-[#02223E]" />
              </button>
              <button
                type="button"
                onClick={onOpenLanguageModal}
                className="px-5 py-3 rounded-full bg-[#02223E]/40 hover:bg-[#02223E]/70 text-[#D4C1B6] text-xs md:text-sm font-semibold border border-[#D4C1B6]/30 transition-colors cursor-pointer whitespace-nowrap backdrop-blur-sm"
              >
                {ui.switchLanguage}
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            LEARNING PATHS: HINDI, BENGALI, MARATHI PROGRESS STRIP
           ========================================================================= */}
        <div className="bg-[#032342]/35 rounded-[28px] p-6 border border-[#60A6DC]/20 shadow-lg backdrop-blur-xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SparkleStar color="#60A6DC" size={16} />
              <h3 className="font-bold text-base text-white tracking-tight">
                Tri-Language Academic Track Progress
              </h3>
            </div>
            <span className="text-xs text-[#D4C1B6] font-mono">
              Switch languages anytime to track parallel mastery
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { code: 'hi', name: 'Hindi Space (हिन्दी)', emblem: '🇮🇳', pct: selectedLanguage === 'hi' ? 80 : 35, color: '#60A6DC' },
              { code: 'bn', name: 'Bengali Space (বাংলা)', emblem: '🐅', pct: selectedLanguage === 'bn' ? 80 : 55, color: '#38bdf8' },
              { code: 'mr', name: 'Marathi Space (मराठी)', emblem: '🚩', pct: selectedLanguage === 'mr' ? 80 : 40, color: '#D4C1B6' },
            ].map((trk) => {
              const isSelected = selectedLanguage === trk.code;
              return (
                <div
                  key={trk.code}
                  onClick={() => onSelectLanguage && onSelectLanguage(trk.code as LanguageCode)}
                  className={`p-4 rounded-[20px] border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#032545]/80 border-[#60A6DC] shadow-[0_0_20px_rgba(96,166,220,0.35)] ring-1 ring-[#60A6DC]'
                      : 'bg-[#032342]/40 border-[#60A6DC]/15 hover:border-[#60A6DC]/40 hover:bg-[#032342]/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-white flex items-center gap-1.5">
                      <span>{trk.emblem}</span>
                      <span>{trk.name}</span>
                    </span>
                    <span className="font-mono font-bold text-xs text-[#60A6DC]">
                      {trk.pct}%
                    </span>
                  </div>
                  <div className="w-full bg-[#011425]/70 rounded-full h-2 overflow-hidden border border-[#60A6DC]/20">
                    <div
                      className="bg-gradient-to-r from-[#60A6DC] to-[#D4C1B6] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${trk.pct}%` }}
                    />
                  </div>
                  <div className="text-[10px] text-[#D4C1B6] mt-2 flex items-center justify-between">
                    <span>{isSelected ? '✓ Active Study Space' : 'Click to enter space'}</span>
                    <ArrowRight className="w-3 h-3 text-[#60A6DC]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            DAILY ACADEMIC ACTIVITIES
           ========================================================================= */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <SparkleStar color="#60A6DC" size={16} />
              <h2 className="text-xl font-bold tracking-tight text-white">
                Daily Learning Tasks (दैनिक अध्ययन कार्य)
              </h2>
            </div>
            <span className="text-xs text-[#D4C1B6] font-mono">
              Earn XP &amp; maintain your continuous learning momentum
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div
              onClick={() => onNavigate('syllabus')}
              className="p-5 rounded-[24px] bg-[#032342]/35 border border-[#60A6DC]/20 hover:border-[#60A6DC]/50 hover:bg-[#032342]/50 backdrop-blur-xl transition-all cursor-pointer flex items-center justify-between group shadow-lg"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#60A6DC] block mb-1">
                  10 Minutes · +10 XP
                </span>
                <h4 className="font-bold text-base text-white group-hover:text-[#60A6DC] transition-colors">
                  Learn a Lesson
                </h4>
                <p className="text-xs text-[#D4C1B6] mt-0.5">
                  Explore chapter rules and phonetic examples
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#60A6DC] group-hover:translate-x-1 transition-transform" />
            </div>

            <div
              onClick={() => onNavigate('vocabulary')}
              className="p-5 rounded-[24px] bg-[#032342]/35 border border-[#60A6DC]/20 hover:border-[#60A6DC]/50 hover:bg-[#032342]/50 backdrop-blur-xl transition-all cursor-pointer flex items-center justify-between group shadow-lg"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#D4C1B6] block mb-1">
                  10 Minutes · +20 XP
                </span>
                <h4 className="font-bold text-base text-white group-hover:text-[#D4C1B6] transition-colors">
                  Vocabulary Drill
                </h4>
                <p className="text-xs text-[#D4C1B6] mt-0.5">
                  Flashcard review with speech pronunciation
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#D4C1B6] group-hover:translate-x-1 transition-transform" />
            </div>

            <div
              onClick={() => onNavigate('listening-speaking')}
              className="p-5 rounded-[24px] bg-[#032342]/35 border border-[#60A6DC]/20 hover:border-[#60A6DC]/50 hover:bg-[#032342]/50 backdrop-blur-xl transition-all cursor-pointer flex items-center justify-between group shadow-lg"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#60A6DC] block mb-1">
                  5 Minutes · +20 XP
                </span>
                <h4 className="font-bold text-base text-white group-hover:text-[#60A6DC] transition-colors">
                  Speaking Challenge
                </h4>
                <p className="text-xs text-[#D4C1B6] mt-0.5">
                  Pronounce target sentences with microphone
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#60A6DC] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* =========================================================================
            CORE ACADEMIC MODULES GRID (12 MODULES)
           ========================================================================= */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <SparkleStar color="#60A6DC" size={16} />
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Comprehensive Academic Modules
              </h2>
            </div>
            <span className="text-xs text-[#D4C1B6] font-mono">
              12 Integrated Subjects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicHubModules.map((mod) => {
              const Icon = mod.icon;
              return (
                <div
                  key={mod.id}
                  onClick={() => onNavigate(mod.id)}
                  className="group bg-[#032444]/35 rounded-[28px] p-6 border border-[#60A6DC]/20 shadow-lg backdrop-blur-xl hover:bg-[#032444]/50 hover:border-[#60A6DC]/55 hover:shadow-[0_0_30px_rgba(96,166,220,0.25)] transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-[#60A6DC]/15 text-[#60A6DC] flex items-center justify-center font-bold border border-[#60A6DC]/30 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(96,166,220,0.15)]">
                        <Icon className="w-5 h-5 text-[#60A6DC]" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#032545]/60 text-[#D4C1B6] px-2.5 py-1 rounded-full border border-[#60A6DC]/20">
                        {mod.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-[#60A6DC] transition-colors">
                        {mod.title}
                      </h3>
                      <div className="text-[11px] font-mono text-[#60A6DC] mt-0.5">
                        {mod.subtitle}
                      </div>
                    </div>

                    <p className="text-xs text-[#D4C1B6] leading-relaxed line-clamp-3">
                      {mod.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#60A6DC]/15 flex items-center justify-between text-xs font-bold text-[#60A6DC]">
                    <span>{mod.action}</span>
                    <ArrowRight className="w-4 h-4 text-[#60A6DC] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            FINAL CERTIFICATION CLAIM BANNER
           ========================================================================= */}
        <div className="bg-gradient-to-r from-[#032545]/50 via-[#053561]/40 to-[#021f3a]/50 rounded-[28px] p-8 border border-[#60A6DC]/35 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl backdrop-blur-xl">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#60A6DC] flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#60A6DC]" /> Official BhashaBridge Credential
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Claim Your Course Completion Certificate
            </h3>
            <p className="text-xs text-[#D4C1B6] max-w-xl leading-relaxed">
              Upon finishing your chapter tests and the 100-mark assessment, generate an official, verifiable Certificate of Achievement with your name and evaluation grade.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenCertificateModal || (() => onNavigate('mock-exam'))}
            className="px-8 py-3.5 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs md:text-sm hover:bg-[#72b3e5] shadow-[0_0_25px_rgba(96,166,220,0.4)] transition-all cursor-pointer whitespace-nowrap active:scale-95"
          >
            Generate Verified Certificate →
          </button>
        </div>
      </div>
    </div>
  );
};
