import React, { useState } from 'react';
import { AlphabetLetter, LanguageCode } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import { HINDI_ALPHABET, BENGALI_ALPHABET, MARATHI_ALPHABET } from '../data/curriculumData';
import { ThemeBackground, SparkleStar } from './ThemeBackground';
import { Volume2, Sparkles, Filter, Info, BookOpen } from 'lucide-react';
import { speechService } from '../services/speech';

interface AlphabetLabViewProps {
  selectedLanguage: LanguageCode;
}

export const AlphabetLabView: React.FC<AlphabetLabViewProps> = ({
  selectedLanguage,
}) => {
  const lang = LANGUAGES[selectedLanguage];
  const ui = UI_TRANSLATIONS[selectedLanguage];

  const letters: AlphabetLetter[] =
    selectedLanguage === 'hi'
      ? HINDI_ALPHABET
      : selectedLanguage === 'bn'
      ? BENGALI_ALPHABET
      : MARATHI_ALPHABET;

  const [activeFilter, setActiveFilter] = useState<'all' | 'vowel' | 'consonant'>('all');
  const [selectedLetter, setSelectedLetter] = useState<AlphabetLetter>(letters[0]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const filteredLetters = letters.filter((l) => {
    if (activeFilter === 'all') return true;
    return l.type === activeFilter;
  });

  const handlePlaySound = (text: string) => {
    setIsPlayingAudio(true);
    speechService.speak(text, selectedLanguage, false, undefined, () =>
      setIsPlayingAudio(false)
    );
  };

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
                  {lang.nativeName} ({lang.script}) · Phonetics &amp; Articulation
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                {ui.alphabet}
              </h1>
              <p className="text-xs md:text-sm text-[#D4C1B6] max-w-2xl leading-relaxed">
                Explore authentic vocalic resonance, velar/retroflex/dental consonant places of articulation, and signature regional letters like Devanagari ळ and Bengali ড়/ঢ়.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-2 bg-[#032342]/40 backdrop-blur-md p-1.5 rounded-2xl border border-[#60A6DC]/25 shrink-0">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[#60A6DC] text-[#02223E] shadow-[0_0_15px_rgba(96,166,220,0.4)]'
                    : 'text-[#D4C1B6] hover:text-white'
                }`}
              >
                All ({letters.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('vowel')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'vowel'
                    ? 'bg-[#60A6DC] text-[#02223E] shadow-[0_0_15px_rgba(96,166,220,0.4)]'
                    : 'text-[#D4C1B6] hover:text-white'
                }`}
              >
                Vowels (स्वर/স্বর)
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('consonant')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'consonant'
                    ? 'bg-[#60A6DC] text-[#02223E] shadow-[0_0_15px_rgba(96,166,220,0.4)]'
                    : 'text-[#D4C1B6] hover:text-white'
                }`}
              >
                Consonants (व्यंजन/ব্যঞ্জন)
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Studio: Left Interactive Alphabet Grid + Right Sound Lab */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Alphabet Grid (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-[#032342]/35 border border-[#60A6DC]/25 backdrop-blur-xl rounded-[28px] p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4C1B6]">
                Interactive Letter Matrix (Click letter to inspect &amp; listen)
              </span>
              <span className="text-xs text-[#60A6DC] font-mono">
                {filteredLetters.length} Letters
              </span>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
              {filteredLetters.map((l) => {
                const isSelected = selectedLetter.char === l.char;
                return (
                  <button
                    key={l.char}
                    type="button"
                    onClick={() => {
                      setSelectedLetter(l);
                      handlePlaySound(l.char);
                    }}
                    className={`aspect-square rounded-[20px] p-2 flex flex-col items-center justify-center border transition-all cursor-pointer group active:scale-95 ${
                      isSelected
                        ? 'bg-[#60A6DC] border-[#60A6DC] shadow-[0_0_20px_rgba(96,166,220,0.4)] text-[#02223E]'
                        : 'bg-[#032342]/45 border-[#60A6DC]/20 hover:border-[#60A6DC]/50 hover:bg-[#032342]/65 text-white'
                    }`}
                  >
                    <span
                      className={`text-2xl sm:text-3xl font-bold tracking-tight ${
                        isSelected ? 'text-[#02223E]' : 'text-white group-hover:text-[#60A6DC]'
                      }`}
                    >
                      {l.char}
                    </span>
                    <span
                      className={`text-[10px] font-mono mt-0.5 ${
                        isSelected ? 'text-[#02223E]/80 font-bold' : 'text-[#D4C1B6]'
                      }`}
                    >
                      {l.transliteration}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Letter Deep Inspector (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-[#032342]/35 border border-[#60A6DC]/25 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#60A6DC]/15 border border-[#60A6DC]/30 text-[#60A6DC] text-xs font-semibold uppercase tracking-wider">
                {selectedLetter.type} Sound
              </div>

              {/* Giant Glyph Card */}
              <div className="p-8 rounded-[28px] bg-[#032545]/50 border border-[#60A6DC]/30 shadow-inner relative flex flex-col items-center justify-center">
                <div className="text-7xl sm:text-8xl font-bold text-white tracking-tight">
                  {selectedLetter.char}
                </div>
                <div className="text-sm font-mono text-[#60A6DC] font-semibold mt-2">
                  IPA: {selectedLetter.ipa} · Translit: {selectedLetter.transliteration}
                </div>

                <button
                  type="button"
                  onClick={() => handlePlaySound(selectedLetter.char)}
                  className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs hover:bg-[#72b3e5] shadow-[0_0_20px_rgba(96,166,220,0.4)] transition-all cursor-pointer active:scale-95"
                >
                  <Volume2 className="w-4 h-4 text-[#02223E]" />
                  <span>Pronounce Letter</span>
                </button>
              </div>
            </div>

            {/* Articulation & Phonetic Details */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-[20px] bg-[#032342]/45 border border-[#60A6DC]/20">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A6DC] mb-1">
                  Vocalic &amp; Articulation Note
                </div>
                <p className="text-xs sm:text-sm text-[#D4C1B6] leading-relaxed">
                  {selectedLetter.soundDescription}
                </p>
              </div>

              {/* Verified Vocabulary Example */}
              <div className="p-4 rounded-[20px] bg-[#032342]/45 border border-[#60A6DC]/20 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-[#D4C1B6] mb-0.5">
                    Authentic Word Example
                  </div>
                  <div className="text-xl font-bold text-white">
                    {selectedLetter.exampleWord}
                  </div>
                  <div className="text-xs font-mono text-[#60A6DC]">
                    {selectedLetter.exampleTranslit}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-[#D4C1B6] bg-[#011425]/50 px-3 py-1.5 rounded-xl border border-[#60A6DC]/15">
                    {selectedLetter.exampleEnglish}
                  </div>
                  <button
                    type="button"
                    onClick={() => handlePlaySound(selectedLetter.exampleWord)}
                    className="mt-2 text-[11px] font-bold text-[#60A6DC] hover:underline flex items-center gap-1 justify-end ml-auto"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Hear Word</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeBackground>
  );
};
