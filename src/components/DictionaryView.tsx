import React, { useState, useMemo } from 'react';
import { DictionaryEntry, LanguageCode, UserProgress } from '../types';
import { DICTIONARY_ENTRIES } from '../data/dictionaryData';
import { speechService } from '../services/speech';
import { ThemeBackground, SparkleStar } from './ThemeBackground';
import {
  Search,
  Volume2,
  Bookmark,
  BookmarkCheck,
  BookOpen,
  Filter,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Layers,
  Check,
  Hash
} from 'lucide-react';

interface DictionaryViewProps {
  selectedLanguage: LanguageCode;
  onSelectLanguage?: (lang: LanguageCode) => void;
  progress?: UserProgress;
  onToggleSavedWord?: (wordId: string) => void;
}

export const DictionaryView: React.FC<DictionaryViewProps> = ({
  selectedLanguage,
  onSelectLanguage,
  progress,
  onToggleSavedWord,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLangFilter, setActiveLangFilter] = useState<'all' | LanguageCode>(selectedLanguage);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activePartOfSpeech, setActivePartOfSpeech] = useState<string>('all');
  const [selectedEntry, setSelectedEntry] = useState<DictionaryEntry | null>(null);
  const [speakingWordId, setSpeakingWordId] = useState<string | null>(null);
  const [savedLocally, setSavedLocally] = useState<Record<string, boolean>>({});

  // Categories present in dictionary
  const categories = useMemo(() => {
    const set = new Set<string>();
    DICTIONARY_ENTRIES.forEach((e) => set.add(e.category));
    return ['all', ...Array.from(set)];
  }, []);

  // Filtered entries
  const filteredEntries = useMemo(() => {
    return DICTIONARY_ENTRIES.filter((entry) => {
      // Language filter
      if (activeLangFilter !== 'all' && entry.language !== activeLangFilter) {
        return false;
      }
      // Category filter
      if (activeCategory !== 'all' && entry.category !== activeCategory) {
        return false;
      }
      // Part of speech filter
      if (activePartOfSpeech !== 'all' && entry.partOfSpeech !== activePartOfSpeech) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesWord = entry.word.toLowerCase().includes(q);
        const matchesTranslit = entry.transliteration.toLowerCase().includes(q);
        const matchesEnglish = entry.englishMeaning.toLowerCase().includes(q);
        const matchesCategory = entry.category.toLowerCase().includes(q);
        const matchesDefinition = entry.definitionNative?.toLowerCase().includes(q);
        const matchesSynonym = entry.synonyms.some((s) => s.toLowerCase().includes(q));

        return matchesWord || matchesTranslit || matchesEnglish || matchesCategory || matchesDefinition || matchesSynonym;
      }
      return true;
    });
  }, [searchQuery, activeLangFilter, activeCategory, activePartOfSpeech]);

  // Word of the day
  const wordOfTheDay = useMemo(() => {
    const list = DICTIONARY_ENTRIES.filter((e) => e.language === selectedLanguage);
    return list[0] || DICTIONARY_ENTRIES[0];
  }, [selectedLanguage]);

  const handlePlayAudio = (entry: DictionaryEntry, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSpeakingWordId(entry.id);
    speechService.speak(entry.word, entry.language, false, undefined, () => {
      setSpeakingWordId(null);
    });
  };

  const handleToggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (onToggleSavedWord) {
      onToggleSavedWord(id);
    } else {
      setSavedLocally((prev) => ({ ...prev, [id]: !prev[id] }));
    }
  };

  const isWordSaved = (id: string) => {
    if (progress?.savedWordIds) {
      return progress.savedWordIds.includes(id);
    }
    return !!savedLocally[id];
  };

  return (
    <ThemeBackground>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        
        {/* Banner Section */}
        <div className="relative rounded-[28px] bg-gradient-to-r from-[#032545]/50 via-[#053561]/40 to-[#021f3a]/50 p-6 sm:p-8 border border-[#60A6DC]/25 backdrop-blur-xl shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#60A6DC]/15 border border-[#60A6DC]/30 text-[#60A6DC] text-xs font-semibold backdrop-blur-sm">
                <SparkleStar color="#60A6DC" size={14} />
                <span>त्रिभाषी शब्दकोश · Tri-Lingual Student Dictionary</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                {selectedLanguage === 'hi' ? 'हिन्दी-अंग्रेजी शब्दकोश' : selectedLanguage === 'bn' ? 'বাংলা-ইংরেজি অভিধান' : 'मराठी-इंग्रजी शब्दकोश'}
              </h1>
              <p className="text-xs md:text-sm text-[#D4C1B6] max-w-2xl leading-relaxed">
                Explore words in Hindi, Bengali, and Marathi with precise audio pronunciation, grammar genders, real example sentences, and cross-language sister comparisons.
              </p>
            </div>

            {/* Word of the day spotlight */}
            {wordOfTheDay && (
              <div
                onClick={() => setSelectedEntry(wordOfTheDay)}
                className="bg-[#032342]/70 p-4 sm:p-5 rounded-2xl border border-[#60A6DC]/35 shadow-lg max-w-sm w-full cursor-pointer hover:border-[#60A6DC] transition-all"
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-mono text-[#60A6DC] font-bold uppercase text-[10px] tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#60A6DC]" /> Word of the Day
                  </span>
                  <span className="text-[10px] font-mono text-[#D4C1B6] uppercase">
                    {wordOfTheDay.language.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white tracking-tight">
                      {wordOfTheDay.word}
                    </div>
                    <div className="text-xs font-mono text-[#60A6DC]">
                      {wordOfTheDay.transliteration}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => handlePlayAudio(wordOfTheDay, e)}
                    className="p-2.5 rounded-full bg-[#60A6DC]/20 border border-[#60A6DC]/30 text-[#60A6DC] hover:bg-[#60A6DC] hover:text-[#02223E] transition-all cursor-pointer"
                    title="Listen"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-xs text-[#D4C1B6] mt-2 line-clamp-1">
                  {wordOfTheDay.englishMeaning}
                </div>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#60A6DC]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search in English, Hindi, Bengali, Marathi, or Roman transliteration (e.g. 'water', 'पानी', 'namaste', 'bhalo')..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#021a30]/80 border border-[#60A6DC]/30 text-white placeholder-[#D4C1B6]/50 text-sm focus:outline-none focus:border-[#60A6DC] focus:ring-2 focus:ring-[#60A6DC]/20 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-[#D4C1B6] hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Language Space Switcher & Category Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#60A6DC]/15">
            {/* Language filter */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#02182c]/70 border border-[#60A6DC]/20 text-xs">
              <span className="text-[11px] font-semibold text-[#D4C1B6] px-2">Space:</span>
              {(['all', 'hi', 'bn', 'mr'] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setActiveLangFilter(l)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeLangFilter === l
                      ? 'bg-[#60A6DC] text-[#02223E] font-bold shadow-sm'
                      : 'text-[#D4C1B6] hover:text-white'
                  }`}
                >
                  {l === 'all' ? 'All Languages' : l === 'hi' ? '🇮🇳 हिन्दी (Hindi)' : l === 'bn' ? '🐅 বাংলা (Bengali)' : '🚩 मराठी (Marathi)'}
                </button>
              ))}
            </div>

            {/* Part of Speech */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#D4C1B6] font-semibold">Type:</span>
              <select
                value={activePartOfSpeech}
                onChange={(e) => setActivePartOfSpeech(e.target.value)}
                className="bg-[#02182c] border border-[#60A6DC]/25 text-white rounded-xl px-3 py-1.5 text-xs focus:outline-none focus:border-[#60A6DC]"
              >
                <option value="all">All Parts of Speech</option>
                <option value="noun">Noun (संज्ञा / বিশেষ্য)</option>
                <option value="verb">Verb (क्रिया / ক্রিয়া)</option>
                <option value="adjective">Adjective (विशेषण)</option>
                <option value="phrase">Phrase (अभिवादन / वाक्य)</option>
              </select>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-[#D4C1B6] font-semibold flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#60A6DC]" /> Themes:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#60A6DC] text-[#02223E] font-bold shadow-sm'
                    : 'bg-[#032342]/40 text-[#D4C1B6] border border-[#60A6DC]/15 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Themes' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dictionary Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#D4C1B6] px-1">
          <div>
            Showing <strong className="text-white">{filteredEntries.length}</strong> words matching your criteria
          </div>
          <div className="text-[11px] font-mono text-[#60A6DC]">
            Click any word card to view deep linguistic breakdown
          </div>
        </div>

        {/* Word Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredEntries.map((entry) => {
            const isSpeaking = speakingWordId === entry.id;
            const saved = isWordSaved(entry.id);

            return (
              <div
                key={entry.id}
                onClick={() => setSelectedEntry(entry)}
                className="p-5 rounded-[22px] bg-[#032342]/40 border border-[#60A6DC]/20 hover:border-[#60A6DC]/50 hover:bg-[#032342]/60 transition-all cursor-pointer shadow-lg space-y-3.5 group backdrop-blur-md"
              >
                {/* Card Top: Language & Actions */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[10px] uppercase px-2 py-0.5 rounded-full bg-[#60A6DC]/15 border border-[#60A6DC]/30 text-[#60A6DC]">
                      {entry.language === 'hi' ? 'HINDI' : entry.language === 'bn' ? 'BENGALI' : 'MARATHI'}
                    </span>
                    <span className="text-[11px] font-mono text-[#D4C1B6]">
                      {entry.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={(e) => handlePlayAudio(entry, e)}
                      className={`p-2 rounded-full border transition-all cursor-pointer ${
                        isSpeaking
                          ? 'bg-[#60A6DC] text-[#02223E]'
                          : 'bg-[#02182c] text-[#60A6DC] border-[#60A6DC]/25 hover:bg-[#60A6DC] hover:text-[#02223E]'
                      }`}
                      title="Listen audio"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleToggleBookmark(entry.id, e)}
                      className="p-2 rounded-full bg-[#02182c] border border-[#60A6DC]/25 text-[#D4C1B6] hover:text-amber-400 transition-all cursor-pointer"
                      title={saved ? 'Saved' : 'Save word'}
                    >
                      {saved ? (
                        <BookmarkCheck className="w-3.5 h-3.5 text-amber-400" />
                      ) : (
                        <Bookmark className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Primary Word & Transliteration */}
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#60A6DC] transition-colors">
                    {entry.word}
                  </h3>
                  <div className="text-xs font-mono text-[#60A6DC] flex items-center gap-2 mt-0.5">
                    <span>{entry.transliteration}</span>
                    {entry.gender && (
                      <span className="text-[10px] text-[#D4C1B6] bg-[#02182c] px-2 py-0.5 rounded-full border border-[#60A6DC]/15">
                        {entry.gender === 'masculine' ? 'पुल्लिंग (M)' : entry.gender === 'feminine' ? 'स्त्रीलिंग (F)' : 'नपुंसकलिंग (N)'}
                      </span>
                    )}
                  </div>
                </div>

                {/* English Meaning */}
                <div className="text-sm font-semibold text-[#D4C1B6]">
                  {entry.englishMeaning}
                </div>

                {/* Example Sentence Preview */}
                <div className="p-3 rounded-xl bg-[#011425]/60 border border-[#60A6DC]/15 space-y-1 text-xs">
                  <div className="text-white font-medium line-clamp-1">
                    {entry.exampleSentence.native}
                  </div>
                  <div className="text-[11px] text-[#D4C1B6]/80 italic line-clamp-1">
                    "{entry.exampleSentence.english}"
                  </div>
                </div>

                {/* Sister Language Equivalents Preview */}
                <div className="pt-2 border-t border-[#60A6DC]/15 flex items-center justify-between text-[11px] text-[#D4C1B6]">
                  <span>Sister Comparisons:</span>
                  <span className="text-[#60A6DC] font-mono group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                    View full details <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredEntries.length === 0 && (
          <div className="text-center py-16 space-y-4 rounded-3xl bg-[#032342]/20 border border-[#60A6DC]/20 p-8">
            <BookOpen className="w-12 h-12 text-[#60A6DC] mx-auto opacity-70" />
            <h3 className="text-xl font-bold text-white">No dictionary words found</h3>
            <p className="text-xs text-[#D4C1B6] max-w-md mx-auto">
              Try searching for common terms like "water", "friend", "book", "read", or switch your language and theme filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveLangFilter('all');
                setActiveCategory('all');
                setActivePartOfSpeech('all');
              }}
              className="px-5 py-2 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Word Detail Modal */}
        {selectedEntry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#011425]/85 backdrop-blur-md">
            <div className="bg-[#021d37] border border-[#60A6DC]/35 rounded-[28px] max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
              
              <div className="flex items-start justify-between pb-4 border-b border-[#60A6DC]/20">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-mono font-bold text-[#60A6DC] bg-[#60A6DC]/15 px-2.5 py-0.5 rounded-full border border-[#60A6DC]/30 uppercase text-[10px]">
                      {selectedEntry.language.toUpperCase()} · {selectedEntry.category}
                    </span>
                    {selectedEntry.gender && (
                      <span className="text-[11px] text-[#D4C1B6] bg-[#032342] px-2 py-0.5 rounded-full border border-[#60A6DC]/20">
                        {selectedEntry.gender}
                      </span>
                    )}
                  </div>
                  <h2 className="text-3xl font-bold text-white tracking-tight mt-1">
                    {selectedEntry.word}
                  </h2>
                  <div className="text-sm font-mono text-[#60A6DC]">
                    {selectedEntry.transliteration} {selectedEntry.pronunciationIpa && `· ${selectedEntry.pronunciationIpa}`}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => handlePlayAudio(selectedEntry, e)}
                    className="p-3 rounded-full bg-[#60A6DC] text-[#02223E] hover:bg-[#72b3e5] shadow-[0_0_15px_rgba(96,166,220,0.4)] transition-all cursor-pointer"
                    title="Listen pronunciation"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedEntry(null)}
                    className="text-[#D4C1B6] hover:text-white p-2 rounded-xl bg-[#032342] border border-[#60A6DC]/20"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Meanings */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-[#60A6DC] uppercase">
                  English Definition:
                </div>
                <div className="text-lg font-semibold text-white">
                  {selectedEntry.englishMeaning}
                </div>
                {selectedEntry.definitionNative && (
                  <p className="text-xs text-[#D4C1B6] leading-relaxed italic bg-[#032545]/40 p-3 rounded-xl border border-[#60A6DC]/15">
                    {selectedEntry.definitionNative}
                  </p>
                )}
              </div>

              {/* Sister Language Equivalents */}
              <div className="p-4 rounded-2xl bg-[#032342]/60 border border-[#60A6DC]/25 space-y-2.5">
                <div className="text-xs font-mono font-bold text-[#60A6DC] uppercase">
                  Sister Language Comparative Bridge:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-[#011425]/60 border border-[#60A6DC]/15">
                    <div className="font-mono text-[10px] text-[#60A6DC]">HINDI</div>
                    <div className="font-bold text-white text-sm">{selectedEntry.equivalents.hi || '—'}</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#011425]/60 border border-[#60A6DC]/15">
                    <div className="font-mono text-[10px] text-[#60A6DC]">BENGALI</div>
                    <div className="font-bold text-white text-sm">{selectedEntry.equivalents.bn || '—'}</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#011425]/60 border border-[#60A6DC]/15">
                    <div className="font-mono text-[10px] text-[#60A6DC]">MARATHI</div>
                    <div className="font-bold text-white text-sm">{selectedEntry.equivalents.mr || '—'}</div>
                  </div>
                </div>
              </div>

              {/* Example Sentence */}
              <div className="p-4 rounded-2xl bg-[#032342]/40 border border-[#60A6DC]/20 space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#60A6DC] uppercase">
                  <span>Context Example Sentence:</span>
                  <button
                    type="button"
                    onClick={() => speechService.speak(selectedEntry.exampleSentence.native, selectedEntry.language)}
                    className="hover:underline flex items-center gap-1 text-[11px]"
                  >
                    <Volume2 className="w-3 h-3" /> Speak
                  </button>
                </div>
                <div className="text-base font-bold text-white">
                  {selectedEntry.exampleSentence.native}
                </div>
                <div className="text-xs font-mono text-[#60A6DC]">
                  {selectedEntry.exampleSentence.transliteration}
                </div>
                <div className="text-xs text-[#D4C1B6] italic pt-1">
                  "{selectedEntry.exampleSentence.english}"
                </div>
              </div>

              {/* Synonyms */}
              {selectedEntry.synonyms.length > 0 && (
                <div className="space-y-1.5">
                  <div className="text-xs font-mono font-bold text-[#D4C1B6] uppercase">
                    Synonyms (समानार्थी / প্রতিশব্দ):
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedEntry.synonyms.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-[#032342] border border-[#60A6DC]/20 text-xs text-white"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer actions */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleToggleBookmark(selectedEntry.id)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#032342] border border-[#60A6DC]/25 text-xs text-white hover:text-amber-400 cursor-pointer"
                >
                  {isWordSaved(selectedEntry.id) ? (
                    <>
                      <BookmarkCheck className="w-3.5 h-3.5 text-amber-400" />
                      <span>Bookmarked in Study List</span>
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>Save Word to Flashcards</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedEntry(null)}
                  className="px-6 py-2 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </ThemeBackground>
  );
};
