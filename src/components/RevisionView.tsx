import React, { useState } from 'react';
import { LanguageCode, UserProgress, VocabularyItem } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import { STARTER_VOCABULARY } from '../data/vocabulary';
import {
  Bookmark,
  CheckCircle2,
  Volume2,
  Trash2,
  Search,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { speechService } from '../services/speech';

interface RevisionViewProps {
  selectedLanguage: LanguageCode;
  progress: UserProgress;
  onToggleSaved: (id: string) => void;
  onToggleLearned: (id: string) => void;
}

export const RevisionView: React.FC<RevisionViewProps> = ({
  selectedLanguage,
  progress,
  onToggleSaved,
  onToggleLearned,
}) => {
  const lang = LANGUAGES[selectedLanguage];
  const ui = UI_TRANSLATIONS[selectedLanguage];

  const [activeTab, setActiveTab] = useState<'saved' | 'learned'>('saved');
  const [search, setSearch] = useState('');

  const langVocab = STARTER_VOCABULARY.filter((v) => v.language === selectedLanguage);

  const displayedItems = langVocab.filter((item) => {
    if (activeTab === 'saved' && !progress.savedWordIds.includes(item.id)) return false;
    if (activeTab === 'learned' && !progress.learnedWordIds.includes(item.id)) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        item.english.toLowerCase().includes(q) ||
        item.nativeScript.includes(q) ||
        item.transliteration.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handlePlayVoice = (text: string) => {
    speechService.speak(text, selectedLanguage);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-12 py-8 space-y-8 text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-[#00f59b] font-mono">
            {lang.nativeName} ({lang.name}) · Memory Bank
          </span>
          <h1 className="text-3xl md:text-4xl font-serif-display font-medium text-white mt-1">
            {ui.revision}
          </h1>
        </div>

        {/* Tab switch */}
        <div className="flex items-center bg-white/10 backdrop-blur-md p-1 rounded-2xl border border-white/15">
          <button
            type="button"
            onClick={() => setActiveTab('saved')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              activeTab === 'saved'
                ? 'bg-[#4f46e5] text-white shadow-md'
                : 'text-[#baa8d8] hover:text-white'
            }`}
          >
            Saved Words ({progress.savedWordIds.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('learned')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              activeTab === 'learned'
                ? 'bg-[#4f46e5] text-white shadow-md'
                : 'text-[#baa8d8] hover:text-white'
            }`}
          >
            Mastered Words ({progress.learnedWordIds.length})
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-4 top-3 w-4 h-4 text-[#baa8d8]" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filter saved items..."
          className="w-full pl-11 pr-4 py-2.5 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md text-xs md:text-sm text-white placeholder-[#8e7dae] focus:outline-none focus:ring-2 focus:ring-[#00f59b]/40 focus:border-[#00f59b]"
        />
      </div>

      {/* Item List */}
      {displayedItems.length === 0 ? (
        <div className="bg-[#180b33]/85 backdrop-blur-md rounded-3xl p-12 text-center border border-white/15 text-[#baa8d8]">
          <Bookmark className="w-8 h-8 text-[#ffb703] mx-auto mb-2" />
          <p className="text-base font-semibold text-white">
            No words in this list yet.
          </p>
          <p className="text-xs text-[#baa8d8] mt-1 max-w-md mx-auto">
            Tap the star/bookmark button on any vocabulary card while studying to save it here for quick revision.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#180b33]/85 backdrop-blur-md rounded-3xl p-6 border border-white/15 shadow-xl flex flex-col justify-between hover:border-white/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#baa8d8] mb-3">
                  <span className="font-semibold text-[#00f59b] uppercase tracking-wider text-[11px] font-mono">
                    {item.category}
                  </span>
                  <button
                    type="button"
                    onClick={() => onToggleSaved(item.id)}
                    className="text-[#ffb703] hover:text-[#baa8d8] p-1 cursor-pointer transition-colors"
                    title="Remove from saved"
                  >
                    <Bookmark className="w-4 h-4 fill-current" />
                  </button>
                </div>

                <div className="text-3xl font-bold text-white mb-1">
                  {item.nativeScript}
                </div>
                <div className="text-xs font-mono text-[#38bdf8] mb-1">
                  {item.transliteration}
                </div>
                <div className="text-base font-semibold text-white">
                  {item.english}
                </div>

                <div className="mt-4 p-3 rounded-2xl bg-white/5 border border-white/10 text-xs">
                  <div className="font-semibold text-white">{item.exampleNative}</div>
                  <div className="text-[#baa8d8] text-[11px] mt-0.5">{item.exampleEnglish}</div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handlePlayVoice(item.nativeScript)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00f59b] hover:text-white transition-colors cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{ui.listen}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onToggleLearned(item.id)}
                  className={`text-xs font-semibold cursor-pointer transition-colors ${
                    progress.learnedWordIds.includes(item.id)
                      ? 'text-[#00f59b]'
                      : 'text-[#baa8d8] hover:text-white'
                  }`}
                >
                  {progress.learnedWordIds.includes(item.id) ? 'Mastered ✓' : 'Mark Mastered'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
