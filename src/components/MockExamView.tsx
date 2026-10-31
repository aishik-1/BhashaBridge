import React, { useState, useEffect } from 'react';
import { ExamQuestion, LanguageCode } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import { MOCK_EXAM_HINDI } from '../data/academicData';
import { ThemeBackground, SparkleStar } from './ThemeBackground';
import {
  Award,
  Clock,
  CheckCircle,
  XCircle,
  RotateCcw,
  Volume2,
  FileText,
  AlertCircle,
  Download,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { speechService } from '../services/speech';

interface MockExamViewProps {
  selectedLanguage: LanguageCode;
  onOpenCertificateModal?: () => void;
}

export const MockExamView: React.FC<MockExamViewProps> = ({
  selectedLanguage,
  onOpenCertificateModal,
}) => {
  const lang = LANGUAGES[selectedLanguage];
  const ui = UI_TRANSLATIONS[selectedLanguage];

  // We use the 100-mark master exam questions bank
  const questions: ExamQuestion[] = MOCK_EXAM_HINDI;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isExamCompleted, setIsExamCompleted] = useState(false);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(45 * 60); // 45 minutes

  // Countdown timer
  useEffect(() => {
    if (isExamCompleted) return;
    const timer = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsExamCompleted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isExamCompleted]);

  const currentQ: ExamQuestion = questions[currentIdx];

  const handleSelectAnswer = (ans: string) => {
    if (isExamCompleted) return;
    setUserAnswers((prev) => ({ ...prev, [currentQ.id]: ans }));
  };

  // Calculate scores per section
  const sectionBreakdown: Record<string, { earned: number; total: number }> = {};
  let totalScore = 0;
  let maxTotal = 0;

  questions.forEach((q) => {
    maxTotal += q.marks;
    if (!sectionBreakdown[q.sectionName]) {
      sectionBreakdown[q.sectionName] = { earned: 0, total: 0 };
    }
    sectionBreakdown[q.sectionName].total += q.marks;

    if (userAnswers[q.id] === q.correctAnswer) {
      sectionBreakdown[q.sectionName].earned += q.marks;
      totalScore += q.marks;
    }
  });

  const percentage = Math.round((totalScore / maxTotal) * 100);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
                  {lang.nativeName} ({lang.name}) · Official Comprehensive Examination (100 Marks)
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                {ui.mockExam}
              </h1>
              <p className="text-xs md:text-sm text-[#D4C1B6] max-w-2xl leading-relaxed">
                Standard academic evaluation blueprint covering Alphabet, Vocabulary, Grammar, Reading, Writing, Translation, Listening, and Speaking with automatic evaluation and certificate generation.
              </p>
            </div>

            {/* Countdown timer pill */}
            {!isExamCompleted && (
              <div className="bg-[#032342]/60 px-5 py-3 rounded-2xl border border-[#60A6DC]/30 text-center shrink-0 shadow-md">
                <div className="text-[11px] font-mono text-[#D4C1B6] uppercase">
                  Time Remaining
                </div>
                <div className="text-3xl font-mono font-bold text-white tracking-tight flex items-center gap-2 justify-center">
                  <Clock className="w-5 h-5 text-[#60A6DC]" />
                  <span>{formatTimer(timeLeftSeconds)}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* =========================================================================
            EXAM ENGINE: QUESTIONS & SECTION PROGRESS
           ========================================================================= */}
        {!isExamCompleted ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Question Box (8 Cols) */}
            <div className="lg:col-span-8 bg-[#032342]/35 border border-[#60A6DC]/25 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#60A6DC]/15">
                <span className="text-xs font-mono font-bold text-[#60A6DC] uppercase tracking-wider">
                  {currentQ.sectionName} · Question {currentIdx + 1} of {questions.length}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#60A6DC]/15 border border-[#60A6DC]/30 text-xs font-bold text-[#60A6DC]">
                  {currentQ.marks} Marks
                </span>
              </div>

              {/* Passage if present */}
              {currentQ.passage && (
                <div className="p-4 rounded-xl bg-[#032545]/50 border border-[#60A6DC]/20 text-xs sm:text-sm text-white leading-relaxed">
                  <div className="font-bold text-[#60A6DC] text-xs font-mono mb-1">
                    Reading Passage:
                  </div>
                  {currentQ.passage}
                </div>
              )}

              {/* Audio Prompt if present */}
              {currentQ.audioPrompt && (
                <div className="p-4 rounded-xl bg-[#032545]/50 border border-[#60A6DC]/20 flex items-center justify-between">
                  <div className="text-xs text-white">
                    Listen to the spoken audio prompt carefully:
                  </div>
                  <button
                    type="button"
                    onClick={() => speechService.speak(currentQ.audioPrompt!, selectedLanguage)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#60A6DC] text-[#02223E] font-bold text-xs"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Play Audio</span>
                  </button>
                </div>
              )}

              {/* Prompt */}
              <div className="space-y-1">
                <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {currentQ.prompt}
                </div>
                {currentQ.promptNative && (
                  <div className="text-sm font-semibold text-[#D4C1B6]">
                    {currentQ.promptNative}
                  </div>
                )}
              </div>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {currentQ.options?.map((opt) => {
                  const isSelected = userAnswers[currentQ.id] === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleSelectAnswer(opt)}
                      className={`w-full p-4 rounded-2xl border text-left text-sm md:text-base transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#60A6DC]/25 border-[#60A6DC] text-white font-bold shadow-[0_0_15px_rgba(96,166,220,0.3)]'
                          : 'bg-[#032342]/40 border-[#60A6DC]/20 text-white hover:bg-[#032342]/70'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Navigation controls */}
              <div className="pt-4 border-t border-[#60A6DC]/15 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentIdx((p) => Math.max(0, p - 1))}
                  disabled={currentIdx === 0}
                  className="px-5 py-2.5 rounded-full bg-[#032342] border border-[#60A6DC]/30 text-[#D4C1B6] text-xs font-bold disabled:opacity-30"
                >
                  ← Previous
                </button>

                {currentIdx < questions.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentIdx((p) => p + 1)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs hover:bg-[#72b3e5] shadow-[0_0_15px_rgba(96,166,220,0.4)]"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-4 h-4 text-[#02223E]" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsExamCompleted(true)}
                    className="px-8 py-2.5 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                  >
                    Final Submit Exam
                  </button>
                )}
              </div>
            </div>

            {/* Right Question Palette (4 Cols) */}
            <div className="lg:col-span-4 bg-[#032342]/35 border border-[#60A6DC]/25 backdrop-blur-xl rounded-[28px] p-6 space-y-4 shadow-xl">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4C1B6]">
                Question Palette ({Object.keys(userAnswers).length} / {questions.length} Answered)
              </div>

              <div className="grid grid-cols-5 gap-2">
                {questions.map((q, idx) => {
                  const isCurrent = currentIdx === idx;
                  const isAnswered = Boolean(userAnswers[q.id]);

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setCurrentIdx(idx)}
                      className={`h-9 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                        isCurrent
                          ? 'border-2 border-white bg-[#60A6DC] text-[#02223E]'
                          : isAnswered
                          ? 'bg-[#60A6DC]/30 text-white border border-[#60A6DC]'
                          : 'bg-[#032342]/60 text-[#D4C1B6] border border-[#60A6DC]/20'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-[#60A6DC]/15 space-y-2 text-[11px] text-[#D4C1B6]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#60A6DC]" />
                  <span>Answered Question</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#032342] border border-[#60A6DC]/30" />
                  <span>Unanswered Question</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* =========================================================================
              EXAMINATION REPORT CARD & CERTIFICATE ACTION
             ========================================================================= */
          <div className="bg-[#032342]/35 border border-[#60A6DC]/25 backdrop-blur-xl rounded-[28px] p-8 space-y-8 shadow-2xl text-center max-w-4xl mx-auto">
            <div className="w-24 h-24 rounded-full bg-[#60A6DC]/15 border-2 border-[#60A6DC] text-[#60A6DC] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(96,166,220,0.35)]">
              <Award className="w-12 h-12 text-[#60A6DC]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A6DC]">
                Official Academic Assessment Report
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {percentage >= 80 ? 'Distinction Pass! 🎉' : 'Assessment Completed! 📚'}
              </h2>
              <p className="text-sm text-[#D4C1B6]">
                You scored{' '}
                <strong className="text-white text-2xl font-mono">{totalScore}</strong> out of{' '}
                <strong className="text-white font-mono">{maxTotal}</strong> Marks ({percentage}%)
              </p>
            </div>

            {/* Section-Wise Breakdown Table */}
            <div className="text-left space-y-3 pt-4 border-t border-[#60A6DC]/15">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4C1B6]">
                Blueprint Section-Wise Breakdown (100 Marks Total)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(sectionBreakdown).map(([sec, stats]) => {
                  const secPct = Math.round((stats.earned / stats.total) * 100);
                  return (
                    <div
                      key={sec}
                      className="p-3.5 rounded-xl bg-[#032545]/45 border border-[#60A6DC]/20 flex items-center justify-between"
                    >
                      <div>
                        <div className="font-bold text-xs text-white">{sec}</div>
                        <div className="text-[10px] text-[#D4C1B6]">{secPct}% Mastery</div>
                      </div>
                      <div className="text-sm font-mono font-bold text-[#60A6DC]">
                        {stats.earned} / {stats.total}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-[#60A6DC]/15 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setIsExamCompleted(false);
                  setUserAnswers({});
                  setCurrentIdx(0);
                  setTimeLeftSeconds(45 * 60);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#032342] text-white border border-[#60A6DC]/30 font-bold text-xs hover:bg-[#032342]/70 transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Examination</span>
              </button>

              {onOpenCertificateModal && (
                <button
                  type="button"
                  onClick={onOpenCertificateModal}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs md:text-sm hover:bg-[#72b3e5] shadow-[0_0_20px_rgba(96,166,220,0.4)] transition-all cursor-pointer active:scale-95"
                >
                  <Award className="w-4 h-4 text-[#02223E]" />
                  <span>View &amp; Print Completion Certificate</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </ThemeBackground>
  );
};
