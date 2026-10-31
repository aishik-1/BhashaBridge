import React, { useState } from 'react';
import { LanguageCode, LiteratureAuthor } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import { LITERATURE_AUTHORS } from '../data/academicData';
import { ThemeBackground, SparkleStar } from './ThemeBackground';
import { BookOpen, Volume2, Sparkles, Feather, ArrowRight, Quote } from 'lucide-react';
import { speechService } from '../services/speech';

interface LiteratureViewProps {
  selectedLanguage: LanguageCode;
}

export const LiteratureView: React.FC<LiteratureViewProps> = ({
  selectedLanguage,
}) => {
  const lang = LANGUAGES[selectedLanguage];
  const ui = UI_TRANSLATIONS[selectedLanguage];

  // Filter authors belonging to this language track
  const authors = LITERATURE_AUTHORS.filter((a) => a.language === selectedLanguage);
  const [selectedAuthor, setSelectedAuthor] = useState<LiteratureAuthor>(authors[0] || LITERATURE_AUTHORS[0]);

  return (
    <ThemeBackground>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-8 space-y-8">
        {/* Banner */}
        <div className="relative rounded-[28px] bg-gradient-to-r from-[#032545]/40 via-[#053561]/35 to-[#021f3a]/40 p-6 sm:p-8 overflow-hidden shadow-[0_12px_40px_rgba(1,20,37,0.35)] border border-[#60A6DC]/25 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#60A6DC]/15 border border-[#60A6DC]/30 text-[#60A6DC] text-xs font-semibold backdrop-blur-sm">
                <SparkleStar color="#60A6DC" size={14} />
                <span>
                  {lang.nativeName} ({lang.name}) · Canonical Literature &amp; Poetry
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                {ui.literature}
              </h1>
              <p className="text-xs md:text-sm text-[#D4C1B6] max-w-2xl leading-relaxed">
                Discover the great literary titans of Indian letters—from medieval mystic saints and renaissance pioneers to modern novelists, dramatists, and poets.
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column Studio: Left Author Selector + Right Excerpt Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Author Selector (Left 4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4C1B6] px-1">
              Celebrated Authors ({authors.length})
            </div>

            {authors.map((a) => {
              const isSelected = selectedAuthor.id === a.id;
              return (
                <div
                  key={a.id}
                  onClick={() => setSelectedAuthor(a)}
                  className={`p-4 rounded-[20px] border transition-all cursor-pointer backdrop-blur-xl ${
                    isSelected
                      ? 'bg-[#032545]/60 border-[#60A6DC] shadow-[0_0_20px_rgba(96,166,220,0.3)]'
                      : 'bg-[#032342]/35 border-[#60A6DC]/20 hover:border-[#60A6DC]/40 hover:bg-[#032342]/45'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] text-[#60A6DC] font-mono mb-1">
                    <span>{a.era}</span>
                    <Feather className="w-3.5 h-3.5 text-[#60A6DC]" />
                  </div>
                  <h3 className="font-bold text-lg text-white tracking-tight">
                    {a.nameNative}
                  </h3>
                  <div className="text-xs font-medium text-[#D4C1B6]">
                    {a.nameEn}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Excerpt & Literary Analysis (8 Cols) */}
          <div className="lg:col-span-8 bg-[#032342]/35 border border-[#60A6DC]/25 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 space-y-6 shadow-2xl">
            {/* Author Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#60A6DC]/15">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A6DC]">
                  {selectedAuthor.genre}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                  {selectedAuthor.nameNative}
                </h2>
                <div className="text-sm text-[#D4C1B6] font-medium">
                  {selectedAuthor.nameEn}
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  speechService.speak(
                    selectedAuthor.sampleExcerpt.originalScript,
                    selectedLanguage
                  )
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs hover:bg-[#72b3e5] shadow-[0_0_15px_rgba(96,166,220,0.4)] transition-all cursor-pointer active:scale-95 shrink-0"
              >
                <Volume2 className="w-4 h-4 text-[#02223E]" />
                <span>Hear Recitation</span>
              </button>
            </div>

            {/* Author Bio */}
            <p className="text-xs sm:text-sm text-[#D4C1B6] leading-relaxed">
              {selectedAuthor.bioEn}
            </p>

            {/* Masterpiece Works Pills */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                Major Works &amp; Masterpieces:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedAuthor.famousWorks.map((work, wIdx) => (
                  <span
                    key={wIdx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#032545]/50 border border-[#60A6DC]/25 text-white"
                  >
                    {work}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Excerpt Card */}
            <div className="p-6 rounded-[22px] bg-[#032545]/50 border border-[#60A6DC]/30 space-y-4 shadow-inner relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#60A6DC]/20 pointer-events-none" />
              <div className="text-xs font-mono font-bold text-[#60A6DC] uppercase tracking-wider">
                Featured Excerpt: {selectedAuthor.sampleExcerpt.title}
              </div>

              {/* Native Script Verse */}
              <div className="text-lg sm:text-xl font-bold text-white tracking-tight leading-relaxed whitespace-pre-line">
                {selectedAuthor.sampleExcerpt.originalScript}
              </div>

              {/* English Translation */}
              <div className="text-xs sm:text-sm text-[#D4C1B6] leading-relaxed whitespace-pre-line italic border-t border-[#60A6DC]/15 pt-3">
                {selectedAuthor.sampleExcerpt.englishTranslation}
              </div>

              {/* Literary Analysis */}
              <div className="p-3.5 rounded-xl bg-[#032342]/60 border border-[#60A6DC]/20 text-xs text-white">
                <strong className="text-[#60A6DC] font-mono">Literary Insight: </strong>
                {selectedAuthor.sampleExcerpt.analysis}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeBackground>
  );
};
