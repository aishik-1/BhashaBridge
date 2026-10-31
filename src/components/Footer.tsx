import React from 'react';
import { LanguageCode } from '../types';
import { LANGUAGES } from '../data/languages';
import { Globe, Heart, WifiOff, Github, BookOpen } from 'lucide-react';
import { storageService } from '../services/storage';

interface FooterProps {
  selectedLanguage: LanguageCode;
  onOpenDataSources: () => void;
  onOpenLanguageModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  selectedLanguage,
  onOpenDataSources,
  onOpenLanguageModal,
}) => {
  const [isOfflineDownloaded, setIsOfflineDownloaded] = React.useState(
    storageService.isOfflinePackDownloaded(selectedLanguage)
  );

  const handleToggleOfflinePack = () => {
    const newState = !isOfflineDownloaded;
    storageService.setOfflinePackDownloaded(selectedLanguage, newState);
    setIsOfflineDownloaded(newState);
  };

  return (
    <footer className="bg-white border-t border-slate-200/90 py-12 px-4 sm:px-6 mt-16 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & mission */}
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-emerald-800 text-amber-300 font-bold flex items-center justify-center font-heading text-xs">
              भा
            </span>
            <span className="font-bold text-slate-900 font-heading text-sm">
              BhashaBridge
            </span>
          </div>
          <p className="leading-relaxed text-slate-600">
            An open-source multilingual educational platform helping learners master Hindi, Bengali, and Marathi through practical conversations and verified vocabulary.
          </p>
          <div className="text-[11px] text-slate-400">
            Open-source under MIT License. Reused Wikimedia content under CC BY-SA 4.0.
          </div>
        </div>

        {/* Supported Languages */}
        <div>
          <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[11px]">
            Languages
          </h4>
          <ul className="space-y-2">
            <li>
              <button
                type="button"
                onClick={onOpenLanguageModal}
                className="hover:text-emerald-800 transition-colors cursor-pointer"
              >
                हिन्दी (Hindi) · Devanagari
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={onOpenLanguageModal}
                className="hover:text-emerald-800 transition-colors cursor-pointer"
              >
                বাংলা (Bengali) · Eastern Nagari
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={onOpenLanguageModal}
                className="hover:text-emerald-800 transition-colors cursor-pointer"
              >
                मराठी (Marathi) · Balbodh
              </button>
            </li>
          </ul>
        </div>

        {/* Learning Resources */}
        <div>
          <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[11px]">
            Educational Tools
          </h4>
          <ul className="space-y-2">
            <li>Interactive Flashcards with Dual-Speed Voice</li>
            <li>Subject-Object-Verb Sentence Builder</li>
            <li>Cultural Context from Wikipedia</li>
            <li>
              <button
                type="button"
                onClick={onOpenDataSources}
                className="hover:text-emerald-800 underline transition-colors cursor-pointer"
              >
                Data Sources &amp; Attribution
              </button>
            </li>
          </ul>
        </div>

        {/* Offline Readiness & PWA Support */}
        <div>
          <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[11px]">
            Offline Capability
          </h4>
          <p className="leading-relaxed mb-3">
            All starter vocabulary, quizzes, and grammar notes are cached in your browser.
          </p>
          <button
            type="button"
            onClick={handleToggleOfflinePack}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
              isOfflineDownloaded
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <WifiOff className="w-3.5 h-3.5" />
            <span>
              {isOfflineDownloaded
                ? `${LANGUAGES[selectedLanguage].name} Pack Cached ✓`
                : `Download ${LANGUAGES[selectedLanguage].name} for Offline`}
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
        <div>
          &copy; {new Date().getFullYear()} BhashaBridge. Dedicated to bringing Indian cultures closer together.
        </div>
        <div className="flex items-center gap-4">
          <span>Accessible WCAG AA Compliant</span>
          <span>·</span>
          <span>No Paid API Dependencies</span>
        </div>
      </div>
    </footer>
  );
};
