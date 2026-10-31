import React, { useState } from 'react';
import { LanguageCode, UserProfile, UserProgress } from '../types';
import { UI_TRANSLATIONS, LANGUAGES } from '../data/languages';
import {
  LogOut,
  Sparkles,
  BookOpen,
  Map,
  BookA,
  FlaskConical,
  GraduationCap,
  ChevronDown,
  LayoutDashboard,
  Bot,
  Layers,
  Award,
  Menu,
  X
} from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, extra?: any) => void;
  selectedLanguage: LanguageCode;
  onSelectLanguage: (lang: LanguageCode) => void;
  onOpenLanguageModal?: () => void;
  profile: UserProfile | null;
  progress: UserProgress;
  isStudyMode: boolean;
  onExitStudyMode: () => void;
  onEnterStudyMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  selectedLanguage,
  onSelectLanguage,
  profile,
  isStudyMode,
  onExitStudyMode,
  onEnterStudyMode,
}) => {
  const ui = UI_TRANSLATIONS[selectedLanguage];
  const currentLang = LANGUAGES[selectedLanguage];
  const [isLabsDropdownOpen, setIsLabsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Grouped practice labs
  const practiceLabs = [
    { id: 'alphabet', label: ui.alphabet, icon: 'अ/অ' },
    { id: 'grammar', label: ui.grammar, icon: '⚙️' },
    { id: 'vocabulary', label: ui.vocabulary, icon: '🗂️' },
    { id: 'sentence-builder', label: ui.sentenceBuilder, icon: '🧩' },
    { id: 'reading-writing', label: ui.readingWriting, icon: '✍️' },
    { id: 'listening-speaking', label: ui.listeningSpeaking, icon: '🎙️' },
    { id: 'literature', label: ui.literature, icon: '📜' },
  ];

  const handleLabClick = (labId: string) => {
    setIsLabsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    onNavigate(labId);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#011425]/95 backdrop-blur-md border-b border-[#60A6DC]/20 text-white">
      {/* Top Primary Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Current Space Marker */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate(isStudyMode ? 'dashboard' : 'landing')}
            className="flex items-center gap-2.5 text-left cursor-pointer shrink-0 group"
          >
            <div className="relative w-8 h-8 rounded-full p-[2px] bg-gradient-to-tr from-[#60A6DC] via-[#D4C1B6] to-[#8ac3ec] shadow-[0_0_15px_rgba(96,166,220,0.5)]">
              <div className="w-full h-full rounded-full bg-[#02223E] flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#60A6DC] to-[#D4C1B6]" />
              </div>
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight group-hover:text-[#60A6DC] transition-colors whitespace-nowrap">
                भाषाब्रिज
              </span>
              <span className="text-[10px] text-[#60A6DC] font-mono ml-1.5 hidden sm:inline">
                BhashaBridge
              </span>
            </div>
          </button>
        </div>

        {/* Dedicated Language Space Switcher (Separating Hindi, Bengali, Marathi) */}
        {isStudyMode && (
          <div className="hidden md:flex items-center gap-1.5 p-1 rounded-2xl bg-[#02182c] border border-[#60A6DC]/30 shadow-inner">
            <span className="text-[11px] font-mono text-[#D4C1B6] px-2 font-semibold">
              SPACE:
            </span>
            <button
              type="button"
              onClick={() => onSelectLanguage('hi')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedLanguage === 'hi'
                  ? 'bg-rose-600/30 text-rose-300 border border-rose-500/50 shadow-[0_0_12px_rgba(225,29,72,0.3)]'
                  : 'text-[#D4C1B6] hover:text-white hover:bg-[#032342]'
              }`}
            >
              <span>🇮🇳</span>
              <span>हिन्दी Space</span>
            </button>
            <button
              type="button"
              onClick={() => onSelectLanguage('bn')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedLanguage === 'bn'
                  ? 'bg-sky-600/30 text-sky-300 border border-sky-500/50 shadow-[0_0_12px_rgba(2,132,199,0.3)]'
                  : 'text-[#D4C1B6] hover:text-white hover:bg-[#032342]'
              }`}
            >
              <span>🐅</span>
              <span>বাংলা Space</span>
            </button>
            <button
              type="button"
              onClick={() => onSelectLanguage('mr')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedLanguage === 'mr'
                  ? 'bg-amber-600/30 text-amber-300 border border-amber-500/50 shadow-[0_0_12px_rgba(217,119,6,0.3)]'
                  : 'text-[#D4C1B6] hover:text-white hover:bg-[#032342]'
              }`}
            >
              <span>🚩</span>
              <span>मराठी Space</span>
            </button>
          </div>
        )}

        {/* Right Student Profile & Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {isStudyMode ? (
            <div className="flex items-center gap-2.5">
              {profile && (
                <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#032342]/70 border border-[#60A6DC]/25 text-xs text-white">
                  <span className="text-sm">{profile.avatar || '🎓'}</span>
                  <span className="font-semibold text-white truncate max-w-[100px]">
                    {profile.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#60A6DC] bg-[#60A6DC]/15 px-2 py-0.5 rounded-full">
                    {profile.selectedLevel ? profile.selectedLevel.toUpperCase() : 'STUDENT'}
                  </span>
                </div>
              )}

              <button
                type="button"
                onClick={onExitStudyMode}
                title={ui.logOut}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-[#D4C1B6] hover:text-white hover:bg-[#032342] transition-colors cursor-pointer border border-[#60A6DC]/20"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Log Out</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-[#032342] border border-[#60A6DC]/25 text-[#60A6DC]"
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={onEnterStudyMode}
              className="px-6 py-2 text-xs font-bold text-[#02223E] bg-[#60A6DC] rounded-full hover:bg-[#72b3e5] shadow-[0_0_20px_rgba(96,166,220,0.4)] transition-all whitespace-nowrap cursor-pointer active:scale-95"
            >
              Enter Hub
            </button>
          )}
        </div>
      </div>

      {/* Streamlined Student Navigation (Clean, uncluttered, no horizontal overflowing pills!) */}
      {isStudyMode && (
        <div className="border-t border-[#60A6DC]/15 bg-[#01172c]/90 px-4 sm:px-8 py-2">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs">
            
            {/* Core Learning Links */}
            <nav className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {/* Dashboard */}
              <button
                type="button"
                onClick={() => onNavigate('dashboard')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  currentView === 'dashboard'
                    ? 'bg-[#60A6DC] text-[#02223E] font-bold shadow-[0_0_12px_rgba(96,166,220,0.4)]'
                    : 'text-[#D4C1B6] hover:text-white hover:bg-[#032342]/60'
                }`}
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Dashboard</span>
              </button>

              {/* Syllabus & Lessons */}
              <button
                type="button"
                onClick={() => onNavigate('syllabus')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  currentView === 'syllabus'
                    ? 'bg-[#60A6DC] text-[#02223E] font-bold shadow-[0_0_12px_rgba(96,166,220,0.4)]'
                    : 'text-[#D4C1B6] hover:text-white hover:bg-[#032342]/60'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Syllabus & Theory (40 Lessons)</span>
              </button>

              {/* Roadmap */}
              <button
                type="button"
                onClick={() => onNavigate('roadmap')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  currentView === 'roadmap'
                    ? 'bg-[#60A6DC] text-[#02223E] font-bold shadow-[0_0_12px_rgba(96,166,220,0.4)]'
                    : 'text-[#D4C1B6] hover:text-white hover:bg-[#032342]/60'
                }`}
              >
                <Map className="w-3.5 h-3.5" />
                <span>Roadmap</span>
              </button>

              {/* Dictionary (NEW & FRONT-AND-CENTER) */}
              <button
                type="button"
                onClick={() => onNavigate('dictionary')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  currentView === 'dictionary'
                    ? 'bg-[#60A6DC] text-[#02223E] font-bold shadow-[0_0_12px_rgba(96,166,220,0.4)]'
                    : 'text-[#D4C1B6] hover:text-white hover:bg-[#032342]/60'
                }`}
              >
                <BookA className="w-3.5 h-3.5" />
                <span className="font-bold text-amber-300">Dictionary (शब्दकोश)</span>
              </button>

              {/* Practice Labs Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsLabsDropdownOpen(!isLabsDropdownOpen)}
                  className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    ['alphabet', 'grammar', 'vocabulary', 'sentence-builder', 'reading-writing', 'listening-speaking', 'literature'].includes(currentView)
                      ? 'bg-[#60A6DC]/25 border border-[#60A6DC] text-white font-bold'
                      : 'text-[#D4C1B6] hover:text-white hover:bg-[#032342]/60'
                  }`}
                >
                  <FlaskConical className="w-3.5 h-3.5 text-[#60A6DC]" />
                  <span>Practice Labs</span>
                  <ChevronDown className="w-3 h-3 text-[#60A6DC]" />
                </button>

                {isLabsDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 rounded-2xl bg-[#021d37] border border-[#60A6DC]/35 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                    <div className="px-3 py-1.5 text-[10px] font-mono text-[#60A6DC] uppercase tracking-wider border-b border-[#60A6DC]/15">
                      Select Interactive Lab
                    </div>
                    {practiceLabs.map((lab) => (
                      <button
                        key={lab.id}
                        type="button"
                        onClick={() => handleLabClick(lab.id)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                          currentView === lab.id
                            ? 'bg-[#60A6DC] text-[#02223E] font-bold'
                            : 'text-[#D4C1B6] hover:text-white hover:bg-[#032545]'
                        }`}
                      >
                        <span>{lab.label}</span>
                        <span className="text-xs font-mono">{lab.icon}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Exams & Worksheets */}
              <button
                type="button"
                onClick={() => onNavigate('mock-exam')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  currentView === 'mock-exam' || currentView === 'worksheets'
                    ? 'bg-[#60A6DC] text-[#02223E] font-bold shadow-[0_0_12px_rgba(96,166,220,0.4)]'
                    : 'text-[#D4C1B6] hover:text-white hover:bg-[#032342]/60'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>100-Mark Exam</span>
              </button>

              {/* AI Tutor */}
              <button
                type="button"
                onClick={() => onNavigate('ai-tutor')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  currentView === 'ai-tutor'
                    ? 'bg-[#60A6DC] text-[#02223E] font-bold shadow-[0_0_12px_rgba(96,166,220,0.4)]'
                    : 'text-[#D4C1B6] hover:text-white hover:bg-[#032342]/60'
                }`}
              >
                <Bot className="w-3.5 h-3.5" />
                <span>AI Tutor</span>
              </button>
            </nav>

            {/* Language Space Indicator Badge on Desktop */}
            <div className="hidden xl:flex items-center gap-1.5 text-[11px] font-mono text-[#60A6DC] bg-[#02182c] px-3 py-1 rounded-full border border-[#60A6DC]/20 shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#60A6DC] animate-pulse" />
              <span>Active: {currentLang.nativeName} ({currentLang.name})</span>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer (When Open) */}
      {isMobileMenuOpen && isStudyMode && (
        <div className="md:hidden border-t border-[#60A6DC]/20 bg-[#02182c] p-4 space-y-4">
          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase text-[#60A6DC]">
              Switch Language Space:
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => {
                  onSelectLanguage('hi');
                  setIsMobileMenuOpen(false);
                }}
                className={`p-2 rounded-xl text-xs font-bold text-center ${
                  selectedLanguage === 'hi' ? 'bg-rose-600/30 text-rose-300 border border-rose-500/50' : 'bg-[#032342] text-white'
                }`}
              >
                🇮🇳 हिन्दी
              </button>
              <button
                type="button"
                onClick={() => {
                  onSelectLanguage('bn');
                  setIsMobileMenuOpen(false);
                }}
                className={`p-2 rounded-xl text-xs font-bold text-center ${
                  selectedLanguage === 'bn' ? 'bg-sky-600/30 text-sky-300 border border-sky-500/50' : 'bg-[#032342] text-white'
                }`}
              >
                🐅 বাংলা
              </button>
              <button
                type="button"
                onClick={() => {
                  onSelectLanguage('mr');
                  setIsMobileMenuOpen(false);
                }}
                className={`p-2 rounded-xl text-xs font-bold text-center ${
                  selectedLanguage === 'mr' ? 'bg-amber-600/30 text-amber-300 border border-amber-500/50' : 'bg-[#032342] text-white'
                }`}
              >
                🚩 मराठी
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
