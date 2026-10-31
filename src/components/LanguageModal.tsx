import React from 'react';
import { LanguageCode } from '../types';
import { LANGUAGES } from '../data/languages';
import { Volume2, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { speechService } from '../services/speech';

interface LanguageModalProps {
  isOpen: boolean;
  onSelect: (lang: LanguageCode) => void;
  onClose?: () => void;
  currentSelected?: LanguageCode;
}

export const LanguageModal: React.FC<LanguageModalProps> = ({
  isOpen,
  onSelect,
  onClose,
  currentSelected = 'hi',
}) => {
  const [selected, setSelected] = React.useState<LanguageCode>(currentSelected);
  const [isPlaying, setIsPlaying] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const handlePlaySample = (e: React.MouseEvent, lang: LanguageCode) => {
    e.stopPropagation();
    setIsPlaying(lang);
    const phrase = LANGUAGES[lang].samplePhrase.native;
    speechService.speak(phrase, lang, false, undefined, () => setIsPlaying(null));
  };

  const handleConfirm = () => {
    onSelect(selected);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0d061f]/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#180b33] text-[#f3effa] rounded-3xl shadow-[0_0_60px_rgba(168,85,247,0.35)] border border-white/20 p-6 md:p-8 overflow-hidden">
        {/* Accent top line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00f59b] via-[#a855f7] to-[#ff2a8d]" />

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 text-[#baa8d8] hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <div className="text-center mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00f59b] block font-bold">
            STEP 1 · SELECT LANGUAGE
          </span>
          <h2 className="text-2xl md:text-3xl font-serif-display font-medium text-white mt-1">
            Choose Your Focus Language
          </h2>
          <p className="text-xs text-[#baa8d8] mt-1 max-w-md mx-auto">
            Choose Hindi, Bengali, or Marathi. Once selected, your entire study room and dashboard will adapt.
          </p>
        </div>

        {/* 3 Language Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {(Object.keys(LANGUAGES) as LanguageCode[]).map((code) => {
            const lang = LANGUAGES[code];
            const isChosen = selected === code;

            return (
              <div
                key={code}
                onClick={() => setSelected(code)}
                className={`relative cursor-pointer rounded-2xl p-5 transition-all duration-200 border-2 text-left flex flex-col justify-between ${
                  isChosen
                    ? 'border-[#00f59b] bg-[#221047] shadow-[0_0_25px_rgba(0,245,155,0.25)] transform -translate-y-0.5'
                    : 'border-white/15 bg-white/5 hover:border-white/30 text-white'
                }`}
              >
                {isChosen && (
                  <div className="absolute top-3 right-3 text-[#00f59b]">
                    <CheckCircle2 className="w-5 h-5 fill-current" />
                  </div>
                )}

                <div>
                  <div className="text-4xl font-bold text-white mb-1">
                    {lang.nativeName}
                  </div>
                  <div className="text-base font-bold font-heading text-[#38bdf8]">
                    {lang.name}
                  </div>
                  <div className="text-xs font-mono text-[#baa8d8] mt-0.5">
                    {lang.script.split(' ')[0]}
                  </div>
                  <div className="text-xs font-semibold text-[#ffb703] mt-1">
                    {lang.speakers}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="text-[11px] text-[#baa8d8]">
                    Sample Greeting:
                  </div>
                  <div className="text-xs font-semibold text-white line-clamp-1 mt-0.5">
                    {lang.samplePhrase.native}
                  </div>
                  <button
                    type="button"
                    onClick={(e) => handlePlaySample(e, code)}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-[#00f59b] hover:text-white cursor-pointer"
                  >
                    <Volume2 className={`w-3.5 h-3.5 ${isPlaying === code ? 'animate-bounce' : ''}`} />
                    <span>{isPlaying === code ? 'Playing...' : 'Hear Voice'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <div className="text-xs text-[#baa8d8]">
            Switch languages anytime inside the study studio.
          </div>
          <button
            type="button"
            onClick={handleConfirm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#4f46e5] text-white font-bold text-sm hover:bg-[#4338ca] shadow-[0_0_25px_rgba(79,70,229,0.5)] transition-all cursor-pointer whitespace-nowrap active:scale-95"
          >
            <span>Proceed with {LANGUAGES[selected].name} ({LANGUAGES[selected].nativeName})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
