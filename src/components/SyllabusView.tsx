import React, { useState } from 'react';
import { ChapterItem, LanguageCode, UserLevel } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import {
  HINDI_CHAPTERS,
  BENGALI_CHAPTERS,
  MARATHI_CHAPTERS,
  PRACTICE_SET_H01,
  PRACTICE_SET_B01,
  PRACTICE_SET_M01
} from '../data/curriculumData';
import { ThemeBackground, SparkleStar } from './ThemeBackground';
import {
  BookOpen,
  CheckCircle,
  Clock,
  Sparkles,
  ChevronRight,
  Filter,
  Award,
  Layers,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  RotateCcw
} from 'lucide-react';
import { LessonTheoryModal } from './LessonTheoryModal';
import { LESSON_THEORIES } from '../data/lessonTheoryData';

interface SyllabusViewProps {
  selectedLanguage: LanguageCode;
  onNavigate: (view: string, extra?: any) => void;
}

export const SyllabusView: React.FC<SyllabusViewProps> = ({
  selectedLanguage,
  onNavigate,
}) => {
  const lang = LANGUAGES[selectedLanguage];
  const ui = UI_TRANSLATIONS[selectedLanguage];

  const chapters: ChapterItem[] =
    selectedLanguage === 'hi'
      ? HINDI_CHAPTERS
      : selectedLanguage === 'bn'
      ? BENGALI_CHAPTERS
      : MARATHI_CHAPTERS;

  const [activeLevelFilter, setActiveLevelFilter] = useState<'all' | UserLevel>('all');
  const [selectedChapter, setSelectedChapter] = useState<ChapterItem>(chapters[0]);
  const [isPracticeModalOpen, setIsPracticeModalOpen] = useState(false);
  const [isTheoryModalOpen, setIsTheoryModalOpen] = useState(false);

  // Practice set states
  const practiceQuestions =
    selectedLanguage === 'hi'
      ? PRACTICE_SET_H01
      : selectedLanguage === 'bn'
      ? PRACTICE_SET_B01
      : PRACTICE_SET_M01;

  const [practiceAnswers, setPracticeAnswers] = useState<Record<string, string>>({});
  const [isPracticeSubmitted, setIsPracticeSubmitted] = useState(false);

  const filteredChapters = chapters.filter((c) => {
    if (activeLevelFilter === 'all') return true;
    return c.level === activeLevelFilter;
  });

  const handleSelectPracticeOption = (qId: string, opt: string) => {
    if (isPracticeSubmitted) return;
    setPracticeAnswers((prev) => ({ ...prev, [qId]: opt }));
  };

  const handleResetPractice = () => {
    setPracticeAnswers({});
    setIsPracticeSubmitted(false);
  };

  const calculatePracticeScore = () => {
    let score = 0;
    practiceQuestions.forEach((q) => {
      if (practiceAnswers[q.id] === q.correctAnswer) {
        score += q.marks || 2;
      }
    });
    return score;
  };

  return (
    <ThemeBackground>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-8 space-y-8">
        {/* Academic Syllabus Banner */}
        <div className="relative rounded-[28px] bg-gradient-to-r from-[#032545]/40 via-[#053561]/35 to-[#021f3a]/40 p-6 sm:p-8 overflow-hidden shadow-[0_12px_40px_rgba(1,20,37,0.35)] border border-[#60A6DC]/25 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#60A6DC]/15 border border-[#60A6DC]/30 text-[#60A6DC] text-xs font-semibold backdrop-blur-sm">
                <SparkleStar color="#60A6DC" size={14} />
                <span>
                  {lang.nativeName} ({lang.name}) · Complete 40-Chapter Academic Syllabus
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                {ui.syllabus}
              </h1>
              <p className="text-xs md:text-sm text-[#D4C1B6] max-w-2xl leading-relaxed">
                Comprehensive subject-wise curriculum from Devanagari/Bengali script foundation, phonetics, and morphology to advanced syntax, literature, and formal translation.
              </p>
            </div>

            {/* Quick Practice Launcher */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsPracticeModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs md:text-sm hover:bg-[#72b3e5] shadow-[0_0_20px_rgba(96,166,220,0.4)] transition-all cursor-pointer active:scale-95"
              >
                <Award className="w-4 h-4 text-[#02223E]" />
                <span>
                  Launch Practice Set {selectedLanguage.toUpperCase()}-01 (10 Marks)
                </span>
              </button>
            </div>
          </div>

          {/* Level Filter Tabs */}
          <div className="flex items-center gap-2 mt-6 pt-6 border-t border-[#60A6DC]/15 overflow-x-auto pb-1">
            <span className="text-xs text-[#D4C1B6] font-semibold mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#60A6DC]" /> Filter:
            </span>
            {(['all', 'beginner', 'intermediate', 'advanced'] as const).map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => setActiveLevelFilter(lvl)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeLevelFilter === lvl
                    ? 'bg-[#60A6DC] text-[#02223E] shadow-[0_0_15px_rgba(96,166,220,0.35)]'
                    : 'bg-[#032342]/40 text-[#D4C1B6] border border-[#60A6DC]/20 hover:text-white'
                }`}
              >
                {lvl} {lvl !== 'all' ? `(${chapters.filter((c) => c.level === lvl).length})` : `(40)`}
              </button>
            ))}
          </div>
        </div>

        {/* Master Syllabus Grid: Left Chapter Navigation + Right Chapter Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Chapter Selector (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-3 max-h-[750px] overflow-y-auto pr-2 scrollbar-thin">
            {filteredChapters.map((ch) => {
              const isSelected = selectedChapter.code === ch.code;
              return (
                <div
                  key={ch.code}
                  onClick={() => setSelectedChapter(ch)}
                  className={`p-4 rounded-[20px] transition-all cursor-pointer border backdrop-blur-xl ${
                    isSelected
                      ? 'bg-[#032545]/60 border-[#60A6DC] shadow-[0_0_20px_rgba(96,166,220,0.3)]'
                      : 'bg-[#032342]/35 border-[#60A6DC]/20 hover:border-[#60A6DC]/40 hover:bg-[#032342]/45'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-mono text-[#60A6DC] font-bold">
                      {ch.code}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#032342]/50 text-[#D4C1B6] border border-[#60A6DC]/20">
                      {ch.level}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-white tracking-tight">
                    {ch.titleNative}
                  </h3>
                  <div className="text-xs text-[#60A6DC] font-mono mt-0.5">
                    {ch.titleEn}
                  </div>
                  <p className="text-[11px] text-[#D4C1B6] line-clamp-1 mt-1.5">
                    {ch.summaryEn}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Chapter Detail Inspector (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-[#032342]/35 border border-[#60A6DC]/25 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#60A6DC]/15">
              <div>
                <span className="text-xs font-mono font-bold text-[#60A6DC]">
                  Chapter {selectedChapter.code} · {selectedChapter.category.toUpperCase()}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                  {selectedChapter.titleNative}
                </h2>
                <div className="text-sm font-semibold text-[#D4C1B6]">
                  {selectedChapter.titleEn}
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#60A6DC]/15 border border-[#60A6DC]/30 text-[#60A6DC]">
                {selectedChapter.level}
              </span>
            </div>

            {/* Key Grammar / Concept Rule Banner */}
            {selectedChapter.keyRuleNative && (
              <div className="rounded-[20px] bg-[#032545]/45 border border-[#60A6DC]/30 p-5 backdrop-blur-sm">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A6DC] mb-1">
                  मुख्य नियम व सिद्धांत (Core Pedagogical Rule)
                </div>
                <div className="text-base text-white font-medium leading-relaxed">
                  {selectedChapter.keyRuleNative}
                </div>
              </div>
            )}

            {/* Topics Included */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4C1B6] mb-3">
                Topics Taught in This Chapter (अध्ययन विषय)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedChapter.topics.map((tpc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-3 rounded-xl bg-[#032342]/40 border border-[#60A6DC]/15 text-xs text-white"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#60A6DC] shrink-0" />
                    <span>{tpc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Authentic Examples */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4C1B6] mb-3">
                Curriculum Learning Examples (उदाहरण)
              </h4>
              <div className="space-y-2.5">
                {selectedChapter.examples.map((ex, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-[18px] bg-[#032342]/45 border border-[#60A6DC]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="text-base font-bold text-white tracking-tight">
                        {ex.native}
                      </div>
                      <div className="text-xs font-mono text-[#60A6DC]">
                        {ex.translit}
                      </div>
                    </div>
                    <div className="text-xs text-[#D4C1B6] font-medium bg-[#011425]/50 px-3 py-1.5 rounded-lg border border-[#60A6DC]/15 sm:text-right">
                      {ex.english}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#60A6DC]/15 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-[#D4C1B6]">
                Target Questions in Bank: <span className="font-bold text-white">{selectedChapter.practiceQuestionsCount} MCQs</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsTheoryModalOpen(true)}
                  className="px-5 py-2.5 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs hover:bg-[#72b3e5] shadow-[0_0_15px_rgba(96,166,220,0.35)] transition-all cursor-pointer active:scale-95 inline-flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Full Theory & Rules</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsPracticeModalOpen(true)}
                  className="px-5 py-2.5 rounded-full bg-[#032545] border border-[#60A6DC]/35 text-white font-bold text-xs hover:bg-[#032545]/80 transition-all cursor-pointer active:scale-95"
                >
                  Start Chapter Test
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PRACTICE SET MODAL (Directly implements the exact prompts from user brief)
           ========================================================================= */}
        {isPracticeModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#011425]/80 backdrop-blur-md">
            <div className="bg-[#02223E] border border-[#60A6DC]/35 rounded-[28px] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#60A6DC]/20">
                <div>
                  <span className="text-xs font-mono font-bold text-[#60A6DC] uppercase tracking-wider">
                    Official Practice Set {selectedLanguage.toUpperCase()}-01: Beginner
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    10 Marks Comprehensive Evaluation
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPracticeModalOpen(false)}
                  className="text-[#D4C1B6] hover:text-white p-2 rounded-xl border border-[#60A6DC]/20 hover:bg-[#032342]"
                >
                  ✕
                </button>
              </div>

              {/* 5 Specific Practice Questions */}
              <div className="space-y-6">
                {practiceQuestions.map((q, idx) => {
                  const userChoice = practiceAnswers[q.id];
                  const isCorrect = userChoice === q.correctAnswer;

                  return (
                    <div
                      key={q.id}
                      className="p-5 rounded-[22px] bg-[#032342]/45 border border-[#60A6DC]/25 space-y-3"
                    >
                      <div className="flex items-center justify-between text-xs text-[#D4C1B6]">
                        <span className="font-mono font-bold text-[#60A6DC]">
                          Q{idx + 1}. ({q.marks || 2} marks)
                        </span>
                        <span className="font-mono">{q.category}</span>
                      </div>

                      <div className="text-base font-semibold text-white">
                        {q.prompt}
                      </div>
                      {q.promptNative && (
                        <div className="text-sm text-[#D4C1B6] font-medium">
                          {q.promptNative}
                        </div>
                      )}

                      {/* Options */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        {q.options.map((opt) => {
                          const isSelected = userChoice === opt;
                          let btnStyle =
                            'bg-[#032342]/40 border-[#60A6DC]/20 text-white hover:bg-[#032342]/70';

                          if (isSelected && !isPracticeSubmitted) {
                            btnStyle =
                              'bg-[#60A6DC]/25 border-[#60A6DC] text-white font-bold shadow-[0_0_15px_rgba(96,166,220,0.3)]';
                          } else if (isPracticeSubmitted) {
                            if (opt === q.correctAnswer) {
                              btnStyle =
                                'bg-[#60A6DC]/35 border-[#60A6DC] text-white font-bold';
                            } else if (isSelected && !isCorrect) {
                              btnStyle =
                                'bg-[#D4C1B6]/20 border-[#D4C1B6] text-[#D4C1B6]';
                            }
                          }

                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => handleSelectPracticeOption(q.id, opt)}
                              disabled={isPracticeSubmitted}
                              className={`p-3 rounded-xl border text-left text-sm font-medium transition-all cursor-pointer ${btnStyle}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      {isPracticeSubmitted && (
                        <div
                          className={`p-3 rounded-xl border text-xs leading-relaxed ${
                            isCorrect
                              ? 'bg-[#60A6DC]/15 border-[#60A6DC]/40 text-white'
                              : 'bg-[#D4C1B6]/15 border-[#D4C1B6]/40 text-white'
                          }`}
                        >
                          <div className="font-bold text-[#60A6DC] mb-0.5">
                            {isCorrect ? '✓ Correct Answer!' : `✗ Right Answer: "${q.correctAnswer}"`}
                          </div>
                          <p className="text-[#D4C1B6]">{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Evaluation Control */}
              <div className="pt-4 border-t border-[#60A6DC]/20 flex items-center justify-between">
                <div>
                  {isPracticeSubmitted && (
                    <div className="text-sm font-bold text-white">
                      Your Score:{' '}
                      <span className="text-[#60A6DC] text-xl font-mono">
                        {calculatePracticeScore()} / 10
                      </span>{' '}
                      Marks ({calculatePracticeScore() >= 8 ? 'Distinction! 🌟' : 'Good Effort! 📚'})
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {!isPracticeSubmitted ? (
                    <button
                      type="button"
                      onClick={() => setIsPracticeSubmitted(true)}
                      disabled={Object.keys(practiceAnswers).length === 0}
                      className="px-6 py-2.5 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs hover:bg-[#72b3e5] disabled:opacity-40 transition-all cursor-pointer shadow-[0_0_15px_rgba(96,166,220,0.4)]"
                    >
                      Check My Answers
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResetPractice}
                      className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#032342] border border-[#60A6DC]/30 text-white font-bold text-xs hover:bg-[#032342]/70 transition-all cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Retake Practice Set</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            DEEP LESSON THEORY MODAL (Theory, Rules, Dialogues, Audio, Pitfalls, Quiz)
           ========================================================================= */}
        {isTheoryModalOpen && (
          <LessonTheoryModal
            chapterCode={selectedChapter.code}
            chapterTitleNative={selectedChapter.titleNative}
            chapterTitleEn={selectedChapter.titleEn}
            language={selectedLanguage}
            onClose={() => setIsTheoryModalOpen(false)}
            onLaunchPractice={() => {
              setIsTheoryModalOpen(false);
              setIsPracticeModalOpen(true);
            }}
          />
        )}
      </div>
    </ThemeBackground>
  );
};
