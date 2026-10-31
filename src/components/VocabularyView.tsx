import React, { useState } from 'react';
import { CategoryId, LanguageCode, UserProgress, VocabularyItem } from '../types';
import { CATEGORIES, LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import { STARTER_VOCABULARY } from '../data/vocabulary';
import {
  Volume2,
  Bookmark,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  Search,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import { speechService } from '../services/speech';
import { ThemeBackground, SparkleStar } from './ThemeBackground';

interface VocabularyViewProps {
  selectedLanguage: LanguageCode;
  initialCategory?: CategoryId;
  progress: UserProgress;
  onToggleLearned: (id: string) => void;
  onToggleSaved: (id: string) => void;
}

export const VocabularyView: React.FC<VocabularyViewProps> = ({
  selectedLanguage,
  initialCategory,
  progress,
  onToggleLearned,
  onToggleSaved,
}) => {
  const [selectedCat, setSelectedCat] = useState<string>(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSlowMode, setIsSlowMode] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [viewMode, setViewMode] = useState<'card' | 'grid'>('card');

  const lang = LANGUAGES[selectedLanguage];
  const ui = UI_TRANSLATIONS[selectedLanguage];

  // Filter vocabulary by language, category, and search query
  const filteredVocab = STARTER_VOCABULARY.filter((item) => {
    if (item.language !== selectedLanguage) return false;
    if (selectedCat !== 'all' && item.category !== selectedCat) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchEn = item.english.toLowerCase().includes(q);
      const matchNative = item.nativeScript.includes(q);
      const matchTranslit = item.transliteration.toLowerCase().includes(q);
      const matchMeaning = item.meaningEn.toLowerCase().includes(q);
      if (!matchEn && !matchNative && !matchTranslit && !matchMeaning) return false;
    }
    return true;
  });

  const currentItem: VocabularyItem | undefined = filteredVocab[currentIndex];

  const handlePlayAudio = (text: string) => {
    setIsPlayingAudio(true);
    speechService.speak(text, selectedLanguage, isSlowMode, undefined, () =>
      setIsPlayingAudio(false)
    );
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev < filteredVocab.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredVocab.length - 1));
  };

  return (
    <ThemeBackground>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-8 space-y-8">
        {/* Header & Controls - Frosted Translucent Glass Banner */}
        <div className="relative rounded-[28px] bg-gradient-to-r from-[#032545]/40 via-[#053561]/35 to-[#021f3a]/40 p-6 sm:p-8 overflow-hidden shadow-[0_12px_40px_rgba(1,20,37,0.35)] border border-[#60A6DC]/25 backdrop-blur-xl">
          <div className="pointer-events-none absolute -right-10 -bottom-10 w-64 h-64 bg-[#D4C1B6]/10 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute left-1/3 -top-10 w-64 h-64 bg-[#60A6DC]/15 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#60A6DC]/15 border border-[#60A6DC]/30 text-[#60A6DC] text-xs font-semibold backdrop-blur-sm">
                <SparkleStar color="#60A6DC" size={14} />
                <span>
                  {lang.nativeName} ({lang.name}) · {filteredVocab.length} Words Available
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                {ui.vocabulary}
              </h1>
              <p className="text-xs md:text-sm text-[#D4C1B6] max-w-2xl leading-relaxed">
                Master core vocabulary, pronunciation, and practical sample sentences with interactive bilingual flashcards.
              </p>
            </div>

            {/* View mode toggle */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#032342]/40 backdrop-blur-md p-1 rounded-2xl border border-[#60A6DC]/25 shadow-md">
                <button
                  type="button"
                  onClick={() => setViewMode('card')}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    viewMode === 'card'
                      ? 'bg-[#60A6DC] text-[#02223E] shadow-[0_0_15px_rgba(96,166,220,0.4)]'
                      : 'text-[#D4C1B6] hover:text-white'
                  }`}
                >
                  Flashcard Mode
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-[#60A6DC] text-[#02223E] shadow-[0_0_15px_rgba(96,166,220,0.4)]'
                      : 'text-[#D4C1B6] hover:text-white'
                  }`}
                >
                  List View
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar (Translucent glass containers) */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-3 w-4 h-4 text-[#D4C1B6]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentIndex(0);
              }}
              placeholder={ui.searchPlaceholder}
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl border border-[#60A6DC]/25 bg-[#032342]/35 backdrop-blur-xl text-xs md:text-sm text-white placeholder-[#D4C1B6]/60 focus:outline-none focus:ring-2 focus:ring-[#60A6DC]/50 focus:border-[#60A6DC]"
            />
          </div>

          <select
            value={selectedCat}
            onChange={(e) => {
              setSelectedCat(e.target.value);
              setCurrentIndex(0);
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-2xl border border-[#60A6DC]/25 bg-[#032342]/45 backdrop-blur-xl text-xs md:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#60A6DC]/50 cursor-pointer shadow-lg"
          >
            <option value="all" className="bg-[#02223E] text-white">
              {ui.allCategories}
            </option>
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id} className="bg-[#02223E] text-white">
                {c.nameNative[selectedLanguage]} ({c.nameEn})
              </option>
            ))}
          </select>
        </div>

        {filteredVocab.length === 0 ? (
          <div className="bg-[#032342]/35 rounded-[24px] p-12 text-center border border-[#60A6DC]/20 backdrop-blur-xl text-[#D4C1B6]">
            <Info className="w-8 h-8 text-[#60A6DC] mx-auto mb-2" />
            <p className="text-sm font-semibold text-white">No words found for this search or filter.</p>
            <p className="text-xs text-[#D4C1B6] mt-1">Try resetting the search box or choosing "All Categories".</p>
          </div>
        ) : viewMode === 'card' && currentItem ? (
          /* SINGLE FLASHCARD MODE */
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Card counter strip */}
            <div className="flex items-center justify-between text-xs text-[#D4C1B6]">
              <span className="font-semibold text-[#60A6DC]">
                Word {currentIndex + 1} of {filteredVocab.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsSlowMode(!isSlowMode)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors cursor-pointer backdrop-blur-sm ${
                    isSlowMode
                      ? 'bg-[#D4C1B6]/25 text-white border-[#D4C1B6]/60'
                      : 'bg-[#032342]/40 text-[#D4C1B6] border-[#60A6DC]/20 hover:bg-[#032342]/60'
                  }`}
                >
                  {isSlowMode ? ui.slowSpeed : ui.normalSpeed}
                </button>
              </div>
            </div>

            {/* Interactive 3D Card (Translucent Glass Effect) */}
            <div
              className="relative h-96 w-full perspective-1000 cursor-pointer select-none"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div
                className={`w-full h-full rounded-[28px] transition-transform duration-500 transform-style-3d shadow-2xl ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* FRONT OF CARD */}
                <div className="absolute inset-0 backface-hidden bg-[#032545]/40 backdrop-blur-xl rounded-[28px] border border-[#60A6DC]/30 p-8 flex flex-col justify-between shadow-[0_12px_40px_rgba(1,20,37,0.4)]">
                  {/* Top strip */}
                  <div className="flex items-center justify-between text-xs text-[#D4C1B6]">
                    <span className="font-semibold text-[#60A6DC] uppercase tracking-wider text-[11px] font-mono">
                      {currentItem.category} · {currentItem.partOfSpeech}
                    </span>
                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      <button
                        type="button"
                        onClick={() => onToggleSaved(currentItem.id)}
                        className={`p-2 rounded-xl border transition-colors cursor-pointer backdrop-blur-sm ${
                          progress.savedWordIds.includes(currentItem.id)
                            ? 'bg-[#D4C1B6]/25 text-white border-[#D4C1B6]/50'
                            : 'text-[#D4C1B6] hover:text-white border-[#60A6DC]/20 hover:bg-[#032342]/40'
                        }`}
                        title={ui.saveWord}
                      >
                        <Bookmark className="w-4 h-4 fill-current" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onToggleLearned(currentItem.id)}
                        className={`p-2 rounded-xl border transition-colors cursor-pointer backdrop-blur-sm ${
                          progress.learnedWordIds.includes(currentItem.id)
                            ? 'bg-[#60A6DC]/25 text-[#60A6DC] border-[#60A6DC]/50'
                            : 'text-[#D4C1B6] hover:text-white border-[#60A6DC]/20 hover:bg-[#032342]/40'
                        }`}
                        title={ui.markAsLearned}
                      >
                        <CheckCircle2 className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                  </div>

                  {/* Central Native Script */}
                  <div className="text-center my-auto">
                    <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                      {currentItem.nativeScript}
                    </div>
                    <div className="text-lg font-medium text-[#60A6DC] font-mono tracking-wide">
                      {currentItem.transliteration}
                    </div>
                    <div className="text-xl font-bold text-white mt-2">
                      {currentItem.english}
                    </div>
                    <div className="text-xs text-[#D4C1B6] max-w-md mx-auto mt-1 leading-relaxed">
                      {currentItem.meaningEn}
                    </div>
                  </div>

                  {/* Bottom Card Controls */}
                  <div
                    className="flex items-center justify-between pt-4 border-t border-[#60A6DC]/15 text-xs"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      type="button"
                      onClick={() => handlePlayAudio(currentItem.nativeScript)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#60A6DC] text-[#02223E] font-bold hover:bg-[#72b3e5] transition-all shadow-[0_0_18px_rgba(96,166,220,0.35)] cursor-pointer active:scale-95"
                    >
                      <Volume2
                        className={`w-4 h-4 ${isPlayingAudio ? 'animate-bounce text-[#02223E]' : ''}`}
                      />
                      <span>{ui.listen}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsFlipped(true)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#D4C1B6] hover:text-white cursor-pointer transition-colors"
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                      <span>Show Example Sentence →</span>
                    </button>
                  </div>
                </div>

                {/* BACK OF CARD: Example & Deep Usage */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#03203c]/45 backdrop-blur-xl rounded-[28px] border border-[#D4C1B6]/35 p-8 flex flex-col justify-between shadow-[0_12px_40px_rgba(1,20,37,0.4)]">
                  <div className="flex items-center justify-between text-xs text-[#D4C1B6]">
                    <span className="font-semibold text-[#D4C1B6] uppercase tracking-wider text-[11px] font-mono">
                      Context &amp; Verified Sentence
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsFlipped(false)}
                      className="inline-flex items-center gap-1 text-[#D4C1B6] hover:text-white cursor-pointer text-[11px]"
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                      <span>Flip Back</span>
                    </button>
                  </div>

                  <div className="my-auto space-y-4">
                    <div className="bg-[#032342]/40 p-5 rounded-2xl border border-[#60A6DC]/20 backdrop-blur-sm">
                      <div className="text-xl md:text-2xl font-bold text-white mb-2 leading-relaxed">
                        {currentItem.exampleNative}
                      </div>
                      <div className="text-sm text-[#60A6DC] font-medium">
                        {currentItem.exampleEnglish}
                      </div>
                    </div>

                    {currentItem.pronunciationNotes && (
                      <div className="bg-[#D4C1B6]/12 p-3 rounded-xl border border-[#D4C1B6]/25 text-xs text-[#D4C1B6] backdrop-blur-sm">
                        <span className="font-semibold text-white">Pronunciation Guidance: </span>
                        {currentItem.pronunciationNotes}
                      </div>
                    )}

                    <div className="text-[11px] text-[#D4C1B6]/70 font-mono">
                      Source: {currentItem.sourceProject || 'Wiktionary'} · License:{' '}
                      {currentItem.license || 'CC BY-SA 4.0'}
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between pt-4 border-t border-[#D4C1B6]/20 text-xs"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      type="button"
                      onClick={() => handlePlayAudio(currentItem.exampleNative)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D4C1B6] text-[#02223E] font-bold hover:bg-[#eae0d8] transition-all cursor-pointer shadow-[0_0_15px_rgba(212,193,182,0.4)] active:scale-95"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-[#02223E]" />
                      <span>Listen Example</span>
                    </button>

                    <span className="text-[11px] text-[#D4C1B6]">Tap anywhere to flip back</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Bottom Controls */}
            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#032342]/40 border border-[#D4C1B6]/30 text-[#D4C1B6] hover:text-white hover:bg-[#032342]/60 font-semibold text-xs md:text-sm transition-all cursor-pointer active:scale-95 backdrop-blur-sm"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="text-xs text-[#D4C1B6] font-semibold font-mono tabular-nums">
                {currentIndex + 1} / {filteredVocab.length}
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-[#60A6DC] text-[#02223E] hover:bg-[#72b3e5] font-bold text-xs md:text-sm transition-all cursor-pointer shadow-[0_0_20px_rgba(96,166,220,0.35)] active:scale-95"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4 text-[#02223E]" />
              </button>
            </div>
          </div>
        ) : (
          /* GRID / LIST VIEW OF WORDS (Translucent Frosted Glass Cards) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredVocab.map((item) => {
              const isLearned = progress.learnedWordIds.includes(item.id);
              const isSaved = progress.savedWordIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  className="bg-[#032342]/35 backdrop-blur-xl rounded-[24px] p-6 border border-[#60A6DC]/20 shadow-lg flex flex-col justify-between hover:border-[#60A6DC]/40 hover:bg-[#032342]/45 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#D4C1B6] mb-3">
                      <span className="font-semibold text-[#60A6DC] uppercase tracking-wider text-[11px] font-mono">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onToggleSaved(item.id)}
                          className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                            isSaved
                              ? 'text-white border-[#D4C1B6]/50 bg-[#D4C1B6]/25'
                              : 'text-[#D4C1B6] border-[#60A6DC]/20 hover:text-white'
                          }`}
                        >
                          <Bookmark className="w-4 h-4 fill-current" />
                        </button>
                        <button
                          type="button"
                          onClick={() => onToggleLearned(item.id)}
                          className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                            isLearned
                              ? 'text-[#60A6DC] border-[#60A6DC]/50 bg-[#60A6DC]/25'
                              : 'text-[#D4C1B6] border-[#60A6DC]/20 hover:text-white'
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4 fill-current" />
                        </button>
                      </div>
                    </div>

                    <div className="text-3xl font-bold text-white mb-1 tracking-tight">
                      {item.nativeScript}
                    </div>
                    <div className="text-xs font-mono text-[#60A6DC] mb-1">
                      {item.transliteration}
                    </div>
                    <div className="text-base font-semibold text-white">{item.english}</div>
                    <div className="text-xs text-[#D4C1B6] mt-1 line-clamp-2">
                      {item.meaningEn}
                    </div>

                    <div className="mt-4 p-3 rounded-2xl bg-[#032342]/40 border border-[#60A6DC]/20 text-xs backdrop-blur-sm">
                      <div className="font-semibold text-white">{item.exampleNative}</div>
                      <div className="text-[#D4C1B6] text-[11px] mt-0.5">
                        {item.exampleEnglish}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#60A6DC]/15 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handlePlayAudio(item.nativeScript)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#60A6DC] hover:text-[#8ac3ec] transition-colors cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-[#60A6DC]" />
                      <span>{ui.listen}</span>
                    </button>
                    <span className="text-[11px] text-[#D4C1B6]/80 font-mono capitalize">
                      {item.partOfSpeech}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </ThemeBackground>
  );
};
