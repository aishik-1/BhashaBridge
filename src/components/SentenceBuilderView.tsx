import React, { useState } from 'react';
import { LanguageCode, SentenceExercise } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import { SENTENCE_EXERCISES } from '../data/quizzes';
import {
  CheckCircle,
  XCircle,
  RotateCcw,
  Volume2,
  ArrowRight,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import { speechService } from '../services/speech';
import { ThemeBackground, SparkleStar } from './ThemeBackground';

interface SentenceBuilderViewProps {
  selectedLanguage: LanguageCode;
}

export const SentenceBuilderView: React.FC<SentenceBuilderViewProps> = ({
  selectedLanguage,
}) => {
  const lang = LANGUAGES[selectedLanguage];
  const ui = UI_TRANSLATIONS[selectedLanguage];

  const exercises = SENTENCE_EXERCISES.filter((e) => e.language === selectedLanguage);
  const [currentIdx, setCurrentIdx] = useState(0);

  const currentExercise: SentenceExercise | undefined = exercises[currentIdx];

  // Selected word tiles in the user's sentence slot
  const [selectedTiles, setSelectedTiles] = useState<string[]>([]);
  // Available tiles pool
  const [availableTiles, setAvailableTiles] = useState<string[]>(
    currentExercise ? [...currentExercise.wordTiles] : []
  );
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  // When current exercise changes, reset tiles
  React.useEffect(() => {
    if (currentExercise) {
      setSelectedTiles([]);
      setAvailableTiles([...currentExercise.wordTiles]);
      setFeedback('idle');
    }
  }, [currentIdx, selectedLanguage]);

  const handleTileClick = (word: string, index: number) => {
    if (feedback === 'correct') return;
    const newAvailable = [...availableTiles];
    newAvailable.splice(index, 1);
    setAvailableTiles(newAvailable);
    setSelectedTiles((prev) => [...prev, word]);
    setFeedback('idle');
  };

  const handleRemoveTile = (word: string, index: number) => {
    if (feedback === 'correct') return;
    const newSelected = [...selectedTiles];
    newSelected.splice(index, 1);
    setSelectedTiles(newSelected);
    setAvailableTiles((prev) => [...prev, word]);
    setFeedback('idle');
  };

  const handleResetTiles = () => {
    if (!currentExercise) return;
    setSelectedTiles([]);
    setAvailableTiles([...currentExercise.wordTiles]);
    setFeedback('idle');
  };

  const handleCheckSentence = () => {
    if (!currentExercise || selectedTiles.length === 0) return;

    const userSentence = selectedTiles.join(' ').trim();
    const isMatched = currentExercise.acceptableAnswers.some(
      (ans: string) =>
        ans.replace(/[।?!.]/g, '').trim() ===
        userSentence.replace(/[।?!.]/g, '').trim()
    );

    if (isMatched) {
      setFeedback('correct');
      speechService.speak(currentExercise.targetSentence, selectedLanguage);
    } else {
      setFeedback('incorrect');
    }
  };

  const handleNextExercise = () => {
    if (currentIdx < exercises.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setCurrentIdx(0);
    }
  };

  if (!currentExercise) {
    return (
      <ThemeBackground>
        <div className="max-w-2xl mx-auto px-6 py-20 text-center text-white">
          <div className="bg-[#032342]/35 backdrop-blur-xl rounded-[28px] p-8 border border-[#60A6DC]/25 shadow-xl">
            <Layers className="w-12 h-12 text-[#60A6DC] mx-auto mb-3" />
            <h2 className="text-xl font-bold text-white">Sentence Builder Exercises Coming Soon</h2>
            <p className="text-xs text-[#D4C1B6] mt-2">Check back shortly as more grammar exercises are added.</p>
          </div>
        </div>
      </ThemeBackground>
    );
  }

  return (
    <ThemeBackground>
      <div className="max-w-3xl mx-auto px-6 sm:px-12 py-8 space-y-8">
        {/* Top Header Banner - Translucent Frosted Glass */}
        <div className="relative rounded-[28px] bg-gradient-to-r from-[#032545]/40 via-[#053561]/35 to-[#021f3a]/40 p-6 sm:p-8 overflow-hidden shadow-[0_12px_40px_rgba(1,20,37,0.35)] border border-[#60A6DC]/25 backdrop-blur-xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#60A6DC]/15 border border-[#60A6DC]/30 text-[#60A6DC] text-xs font-semibold backdrop-blur-sm mb-2">
            <SparkleStar color="#60A6DC" size={14} />
            <span>
              {lang.nativeName} ({lang.name}) · Syntax &amp; Word Order
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            {ui.sentenceBuilder}
          </h1>
          <p className="text-xs md:text-sm text-[#D4C1B6] mt-2 max-w-lg mx-auto leading-relaxed">
            Tap the word tiles below in the correct sequence to build the authentic sentence.
          </p>
        </div>

        {/* Builder Container (Translucent Glass Box) */}
        <div className="bg-[#032342]/35 backdrop-blur-xl rounded-[28px] p-6 md:p-8 border border-[#60A6DC]/25 shadow-2xl space-y-6">
          {/* Progress & Reset */}
          <div className="flex items-center justify-between text-xs text-[#D4C1B6] pb-3 border-b border-[#60A6DC]/15 font-mono">
            <span className="font-semibold text-white">
              Exercise {currentIdx + 1} of {exercises.length}
            </span>
            <button
              type="button"
              onClick={handleResetTiles}
              className="inline-flex items-center gap-1.5 text-[#D4C1B6] hover:text-white cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Tiles</span>
            </button>
          </div>

          {/* English Prompt */}
          <div className="text-center p-6 rounded-[22px] bg-[#032342]/40 border border-[#60A6DC]/20 backdrop-blur-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#60A6DC] mb-1 font-mono">
              English Sentence
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              "{currentExercise.englishPrompt}"
            </div>
          </div>

          {/* Target Sentence Construction Drop Zone */}
          <div>
            <div className="text-xs font-semibold text-[#D4C1B6] mb-2 font-mono">
              Your Sentence (Tap a word to remove):
            </div>
            <div
              className={`min-h-24 p-5 rounded-[22px] border-2 border-dashed flex flex-wrap items-center gap-2.5 transition-all backdrop-blur-sm ${
                feedback === 'correct'
                  ? 'border-[#60A6DC] bg-[#60A6DC]/15'
                  : feedback === 'incorrect'
                  ? 'border-[#D4C1B6] bg-[#D4C1B6]/15'
                  : 'border-[#60A6DC]/30 bg-[#032342]/30'
              }`}
            >
              {selectedTiles.length === 0 ? (
                <span className="text-xs text-[#D4C1B6]/70 italic">
                  Tap the word tiles below to place them here in order...
                </span>
              ) : (
                selectedTiles.map((word, idx) => (
                  <button
                    key={`${word}-${idx}`}
                    type="button"
                    onClick={() => handleRemoveTile(word, idx)}
                    className="px-4 py-2.5 rounded-xl bg-[#60A6DC] text-[#02223E] font-bold text-base shadow-[0_0_15px_rgba(96,166,220,0.35)] hover:bg-[#72b3e5] transition-transform active:scale-95 cursor-pointer"
                  >
                    {word}
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Available Word Tiles Pool */}
          <div>
            <div className="text-xs font-semibold text-[#D4C1B6] mb-2 font-mono">
              Available Word Tiles:
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              {availableTiles.length === 0 ? (
                <span className="text-xs text-[#D4C1B6]/70">All tiles placed in the sentence slot.</span>
              ) : (
                availableTiles.map((word, idx) => (
                  <button
                    key={`${word}-${idx}`}
                    type="button"
                    onClick={() => handleTileClick(word, idx)}
                    className="px-4 py-2.5 rounded-xl bg-[#032342]/45 border border-[#60A6DC]/30 text-white font-semibold text-base shadow-sm hover:border-[#60A6DC] hover:bg-[#60A6DC]/20 transition-all cursor-pointer active:scale-95 backdrop-blur-sm"
                  >
                    {word}
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Feedback Section */}
          {feedback === 'correct' && (
            <div className="p-5 rounded-[22px] bg-[#032342]/45 border border-[#60A6DC]/40 backdrop-blur-sm text-white space-y-2 text-xs md:text-sm">
              <div className="flex items-center justify-between">
                <span className="font-bold flex items-center gap-1.5 text-[#60A6DC]">
                  <CheckCircle className="w-4 h-4 text-[#60A6DC]" />
                  {ui.correct}!
                </span>
                <button
                  type="button"
                  onClick={() => speechService.speak(currentExercise.targetSentence, selectedLanguage)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#60A6DC] hover:underline cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5 text-[#60A6DC]" />
                  <span>Listen Sentence</span>
                </button>
              </div>
              <div className="font-bold text-lg text-white">
                {currentExercise.targetSentence}
              </div>
              <div className="text-xs font-mono text-[#60A6DC]">
                {currentExercise.transliteration}
              </div>
              <div className="pt-2 text-[#D4C1B6] border-t border-[#60A6DC]/20">
                <strong className="text-white">Grammar Tip: </strong>
                {currentExercise.grammarTip}
              </div>
            </div>
          )}

          {feedback === 'incorrect' && (
            <div className="p-5 rounded-[22px] bg-[#032342]/45 border border-[#D4C1B6]/40 backdrop-blur-sm text-white text-xs md:text-sm flex items-start gap-2.5">
              <XCircle className="w-4 h-4 text-[#D4C1B6] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white">{ui.tryAgain}.</span>
                <p className="mt-1 text-[#D4C1B6]">
                  Check the word order. Remember that Indian languages typically use Subject-Object-Verb (SOV) order.
                </p>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="pt-3 flex items-center justify-end gap-3">
            {feedback !== 'correct' ? (
              <button
                type="button"
                onClick={handleCheckSentence}
                disabled={selectedTiles.length === 0}
                className="px-8 py-3 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs md:text-sm hover:bg-[#72b3e5] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-[0_0_20px_rgba(96,166,220,0.4)] active:scale-95"
              >
                {ui.checkAnswer}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNextExercise}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs md:text-sm hover:bg-[#72b3e5] transition-all cursor-pointer shadow-[0_0_20px_rgba(96,166,220,0.4)] active:scale-95"
              >
                <span>Next Sentence Exercise</span>
                <ArrowRight className="w-4 h-4 text-[#02223E]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </ThemeBackground>
  );
};
