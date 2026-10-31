import React from 'react';
import { CategoryId, LanguageCode, UserProgress } from '../types';
import { CATEGORIES, LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import { STARTER_VOCABULARY } from '../data/vocabulary';
import {
  CheckCircle,
  Clock,
  BookOpen,
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ThemeBackground, SparkleStar } from './ThemeBackground';

interface LessonLibraryProps {
  selectedLanguage: LanguageCode;
  progress: UserProgress;
  onSelectCategory: (categoryId: CategoryId) => void;
  onTakeCategoryQuiz: (categoryId: CategoryId) => void;
}

export const LessonLibrary: React.FC<LessonLibraryProps> = ({
  selectedLanguage,
  progress,
  onSelectCategory,
  onTakeCategoryQuiz,
}) => {
  const lang = LANGUAGES[selectedLanguage];
  const ui = UI_TRANSLATIONS[selectedLanguage];

  return (
    <ThemeBackground>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-8 space-y-8">
        {/* Header Banner - Frosted Translucent Glass */}
        <div className="relative rounded-[28px] bg-gradient-to-r from-[#032545]/40 via-[#053561]/35 to-[#021f3a]/40 p-6 sm:p-8 overflow-hidden shadow-[0_12px_40px_rgba(1,20,37,0.35)] border border-[#60A6DC]/25 backdrop-blur-xl">
          <div className="pointer-events-none absolute -right-10 -bottom-10 w-64 h-64 bg-[#D4C1B6]/10 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute left-1/3 -top-10 w-64 h-64 bg-[#60A6DC]/15 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#60A6DC]/15 border border-[#60A6DC]/30 text-[#60A6DC] text-xs font-semibold backdrop-blur-sm">
                <SparkleStar color="#60A6DC" size={14} />
                <span>
                  {lang.nativeName} ({lang.name}) · 15 Structured Topics
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                {ui.lessons}
              </h1>
              <p className="text-xs md:text-sm text-[#D4C1B6] max-w-2xl leading-relaxed">
                Explore authentic regional vocabulary, master pronunciation, and test your understanding across all curated life themes.
              </p>
            </div>

            <div className="shrink-0 bg-[#032342]/40 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#60A6DC]/30 shadow-md">
              <div className="text-[11px] uppercase tracking-wider text-[#D4C1B6] font-semibold">
                Completed
              </div>
              <div className="text-2xl font-bold text-white tabular-nums">
                <span className="text-[#60A6DC]">{progress.completedLessonIds.length}</span>{' '}
                <span className="text-xs text-[#D4C1B6] font-normal">/ {CATEGORIES.length} Topics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of 15 Categories (Translucent Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, index) => {
            const vocabInCat = STARTER_VOCABULARY.filter(
              (v) => v.language === selectedLanguage && v.category === cat.id
            );
            const isCompleted = progress.completedLessonIds.includes(cat.id);
            const learnedInCat = vocabInCat.filter((v) =>
              progress.learnedWordIds.includes(v.id)
            ).length;

            return (
              <div
                key={cat.id}
                className={`rounded-[24px] p-6 flex flex-col justify-between transition-all duration-300 bg-[#032342]/35 backdrop-blur-xl shadow-lg hover:shadow-[0_8px_30px_rgba(96,166,220,0.2)] hover:bg-[#032342]/45 ${
                  isCompleted
                    ? 'border border-[#60A6DC]/50 shadow-[0_0_20px_rgba(96,166,220,0.15)]'
                    : 'border border-[#60A6DC]/20 hover:border-[#60A6DC]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-mono text-[#D4C1B6] text-[11px]">
                      Topic {(index + 1).toString().padStart(2, '0')}
                    </span>
                    {isCompleted ? (
                      <span className="inline-flex items-center gap-1.5 text-[#60A6DC] font-semibold text-[11px] bg-[#60A6DC]/15 px-2.5 py-0.5 rounded-full border border-[#60A6DC]/30">
                        <CheckCircle className="w-3.5 h-3.5 text-[#60A6DC]" />
                        Completed
                      </span>
                    ) : (
                      <span className="text-[#D4C1B6] flex items-center gap-1.5 text-[11px]">
                        <Clock className="w-3 h-3 text-[#D4C1B6]" /> ~8 mins
                      </span>
                    )}
                  </div>

                  <div className="text-2xl font-bold text-white mb-0.5 tracking-tight">
                    {cat.nameNative[selectedLanguage]}
                  </div>
                  <div className="text-xs font-semibold text-[#60A6DC] mb-2 font-mono">
                    {cat.nameEn}
                  </div>

                  <p className="text-xs text-[#D4C1B6] line-clamp-2 leading-relaxed">
                    {cat.descriptionEn}
                  </p>

                  {/* Progress bar inside card */}
                  {vocabInCat.length > 0 && (
                    <div className="mt-5 pt-3 border-t border-[#60A6DC]/15 text-[11px] text-[#D4C1B6]">
                      <div className="flex justify-between mb-1.5">
                        <span>Mastery:</span>
                        <span className="font-semibold text-white tabular-nums">
                          {learnedInCat} / {vocabInCat.length}
                        </span>
                      </div>
                      <div className="w-full bg-[#011425]/70 rounded-full h-1.5 overflow-hidden border border-[#60A6DC]/20">
                        <div
                          className="bg-gradient-to-r from-[#60A6DC] to-[#D4C1B6] h-1.5 rounded-full transition-all duration-300"
                          style={{
                            width: `${Math.round((learnedInCat / vocabInCat.length) * 100)}%`,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#60A6DC]/15 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectCategory(cat.id)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#60A6DC] text-[#02223E] font-bold text-xs hover:bg-[#72b3e5] shadow-[0_0_18px_rgba(96,166,220,0.35)] transition-all cursor-pointer active:scale-95"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#02223E]" />
                    <span>Learn Words</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onTakeCategoryQuiz(cat.id)}
                    title="Take quiz for this category"
                    className="py-2.5 px-3.5 rounded-xl border border-[#D4C1B6]/30 bg-[#02223E]/40 text-[#D4C1B6] hover:bg-[#02223E]/70 hover:text-white font-medium text-xs transition-colors cursor-pointer"
                  >
                    <Award className="w-4 h-4 text-[#D4C1B6]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ThemeBackground>
  );
};
