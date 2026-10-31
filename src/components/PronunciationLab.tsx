import React, { useState } from 'react';
import { LanguageCode } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import { STARTER_VOCABULARY } from '../data/vocabulary';
import {
  Volume2,
  Sparkles,
  Play,
  RotateCcw,
  CheckCircle,
  HelpCircle,
  Mic
} from 'lucide-react';
import { speechService } from '../services/speech';

interface PronunciationLabProps {
  selectedLanguage: LanguageCode;
}

export const PronunciationLab: React.FC<PronunciationLabProps> = ({
  selectedLanguage,
}) => {
  const lang = LANGUAGES[selectedLanguage];
  const ui = UI_TRANSLATIONS[selectedLanguage];
  const words = STARTER_VOCABULARY.filter((v) => v.language === selectedLanguage);

  const [activeWordIdx, setActiveWordIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSlow, setIsSlow] = useState(false);

  const activeWord = words[activeWordIdx] || words[0];

  const handlePlay = (slowRate: boolean) => {
    if (!activeWord) return;
    setIsPlaying(true);
    speechService.speak(
      activeWord.nativeScript,
      selectedLanguage,
      slowRate,
      undefined,
      () => setIsPlaying(false)
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      <div className="text-center">
        <span className="text-xs uppercase tracking-wider font-semibold text-emerald-800">
          {lang.nativeName} ({lang.name}) · Phonetics &amp; Listening Lab
        </span>
        <h1 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mt-0.5">
          {ui.pronunciation}
        </h1>
        <p className="text-xs md:text-sm text-slate-600 mt-1">
          Master the subtle differences in Indian consonants: dental vs retroflex, and unaspirated vs aspirated.
        </p>
      </div>

      {/* Main Pronunciation Studio Sandbox */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 shadow-sm space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
            {activeWord.category.toUpperCase()}
          </div>

          <div className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">
            {activeWord.nativeScript}
          </div>

          <div className="text-lg md:text-xl font-mono text-emerald-800 font-medium">
            {activeWord.transliteration}
          </div>

          <div className="text-sm text-slate-600">
            Meaning: <strong className="text-slate-900 font-semibold">{activeWord.english}</strong>
          </div>
        </div>

        {/* Animated Audio Waveform Simulator */}
        <div className="h-16 bg-[#faf8f5] rounded-xl border border-amber-900/10 flex items-center justify-center gap-1.5 px-4 overflow-hidden">
          {[40, 65, 85, 30, 95, 70, 50, 100, 45, 80, 60, 90, 75, 40, 85, 55, 95, 60, 40, 70].map((h, i) => (
            <div
              key={i}
              className={`w-1 rounded-full bg-emerald-700 transition-all duration-150 ${
                isPlaying ? 'animate-pulse' : 'opacity-40'
              }`}
              style={{
                height: isPlaying ? `${Math.max(15, (h * (i % 3 + 1)) % 100)}%` : '20%',
              }}
            />
          ))}
        </div>

        {/* Dual Playback Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => handlePlay(false)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-800 text-white font-medium text-sm hover:bg-emerald-900 transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <Volume2 className={`w-4 h-4 ${isPlaying && !isSlow ? 'animate-bounce' : ''}`} />
            <span>Normal Speed (1.0x)</span>
          </button>

          <button
            type="button"
            onClick={() => handlePlay(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 font-medium text-sm hover:bg-amber-200 transition-all cursor-pointer active:scale-95"
          >
            <RotateCcw className={`w-4 h-4 ${isPlaying && isSlow ? 'animate-spin' : ''}`} />
            <span>Slow Phonetics (0.75x)</span>
          </button>
        </div>

        {/* Pronunciation Advice Note */}
        {activeWord.pronunciationNotes && (
          <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200/80 text-xs md:text-sm text-amber-950">
            <strong className="text-amber-900">Acoustic Guide: </strong>
            {activeWord.pronunciationNotes}
          </div>
        )}

        {/* Quick word selector buttons */}
        <div className="pt-4 border-t border-slate-100">
          <div className="text-xs font-semibold text-slate-500 mb-2">
            Select Word from Starter Pack:
          </div>
          <div className="flex flex-wrap gap-2">
            {words.slice(0, 12).map((w, idx) => (
              <button
                key={w.id}
                type="button"
                onClick={() => setActiveWordIdx(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                  activeWordIdx === idx
                    ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {w.nativeScript} ({w.english})
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
