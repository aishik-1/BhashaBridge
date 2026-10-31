import React, { useState } from 'react';
import { CategoryId, LanguageCode, QuizQuestion } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import { QUIZZES } from '../data/quizzes';
import {
  Award,
  CheckCircle,
  XCircle,
  RotateCcw,
  Volume2,
  ArrowRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { speechService } from '../services/speech';
import { ThemeBackground, SparkleStar } from './ThemeBackground';

interface QuizViewProps {
  selectedLanguage: LanguageCode;
  initialCategoryId?: CategoryId;
  onRecordScore: (quizId: string, score: number, total: number) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  selectedLanguage,
  initialCategoryId,
  onRecordScore,
}) => {
  const lang = LANGUAGES[selectedLanguage];
  const ui = UI_TRANSLATIONS[selectedLanguage];

  // Filter quizzes for this language
  const availableQuizzes = QUIZZES.filter((q) => {
    if (q.language !== selectedLanguage) return false;
    if (initialCategoryId && q.category !== initialCategoryId) return false;
    return true;
  });

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [answersHistory, setAnswersHistory] = useState<{
    question: QuizQuestion;
    userChoice: string;
    isCorrect: boolean;
  }[]>([]);

  const currentQuestion: QuizQuestion | undefined = availableQuizzes[currentIdx];

  const handleSelectOption = (opt: string) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(opt);
  };

  const handleCheckAnswer = () => {
    if (!selectedAnswer || !currentQuestion || isAnswerSubmitted) return;
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    setIsAnswerSubmitted(true);
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setAnswersHistory((prev) => [
      ...prev,
      {
        question: currentQuestion,
        userChoice: selectedAnswer,
        isCorrect,
      },
    ]);
  };

  const handleNext = () => {
    if (currentIdx < availableQuizzes.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsCompleted(true);
      onRecordScore(
        initialCategoryId || 'general',
        score + (selectedAnswer === currentQuestion?.correctAnswer ? 1 : 0),
        availableQuizzes.length
      );
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsCompleted(false);
    setAnswersHistory([]);
  };

  const handlePlayVoice = (text: string) => {
    speechService.speak(text, selectedLanguage);
  };

  if (availableQuizzes.length === 0) {
    return (
      <ThemeBackground>
        <div className="max-w-2xl mx-auto px-6 py-20 text-center text-white">
          <div className="bg-[#032342]/35 backdrop-blur-xl rounded-[28px] p-8 border border-[#60A6DC]/25 shadow-xl">
            <HelpCircle className="w-12 h-12 text-[#60A6DC] mx-auto mb-3" />
            <h2 className="text-xl font-bold text-white">No Quizzes Found for this Category</h2>
            <p className="text-xs text-[#D4C1B6] mt-2">Please select another topic from the Lesson Library.</p>
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
              {lang.nativeName} ({lang.name}) · Knowledge Check
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            {ui.quizzes}
          </h1>
          <p className="text-xs md:text-sm text-[#D4C1B6] max-w-xl mx-auto mt-2 leading-relaxed">
            Test your comprehension, listening recognition, and grammatical mastery.
          </p>
        </div>

        {!isCompleted && currentQuestion ? (
          <div className="bg-[#032342]/35 backdrop-blur-xl rounded-[28px] p-6 md:p-8 border border-[#60A6DC]/25 shadow-2xl space-y-6">
            {/* Progress bar */}
            <div className="flex items-center justify-between text-xs text-[#D4C1B6] pb-3 border-b border-[#60A6DC]/15 font-mono">
              <span className="font-semibold text-white">
                Question {currentIdx + 1} of {availableQuizzes.length}
              </span>
              <span className="font-bold text-[#60A6DC] text-sm">Score: {score}</span>
            </div>

            <div className="w-full bg-[#011425]/70 rounded-full h-2 overflow-hidden border border-[#60A6DC]/20">
              <div
                className="bg-gradient-to-r from-[#60A6DC] to-[#D4C1B6] h-2 rounded-full transition-all duration-300 shadow-[0_0_12px_#60A6DC]"
                style={{
                  width: `${((currentIdx + 1) / availableQuizzes.length) * 100}%`,
                }}
              />
            </div>

            {/* Question Prompt */}
            <div className="space-y-4">
              {currentQuestion.promptNative && (
                <div className="p-6 rounded-[22px] bg-[#032342]/40 border border-[#60A6DC]/20 backdrop-blur-sm text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                    {currentQuestion.promptNative}
                  </div>
                  <button
                    type="button"
                    onClick={() => handlePlayVoice(currentQuestion.promptNative!)}
                    className="inline-flex items-center gap-1.5 text-xs text-[#60A6DC] hover:text-[#8ac3ec] font-bold cursor-pointer transition-colors"
                  >
                    <Volume2 className="w-4 h-4 text-[#60A6DC]" />
                    <span>Listen Audio</span>
                  </button>
                </div>
              )}

              <h3 className="text-lg md:text-xl font-semibold text-white text-center leading-relaxed">
                {currentQuestion.prompt}
              </h3>
            </div>

            {/* Options (Translucent Glass Buttons) */}
            <div className="space-y-3 pt-2">
              {currentQuestion.options.map((opt) => {
                const isSelected = selectedAnswer === opt;
                const isCorrect = opt === currentQuestion.correctAnswer;

                let optionClasses =
                  'border-[#60A6DC]/20 hover:border-[#60A6DC]/40 hover:bg-[#032342]/55 bg-[#032342]/35 text-white backdrop-blur-sm';

                if (isSelected && !isAnswerSubmitted) {
                  optionClasses =
                    'border-[#60A6DC] bg-[#60A6DC]/25 text-white font-semibold shadow-[0_0_20px_rgba(96,166,220,0.35)]';
                } else if (isAnswerSubmitted) {
                  if (isCorrect) {
                    optionClasses =
                      'border-[#60A6DC] bg-[#60A6DC]/35 text-white font-bold shadow-[0_0_20px_rgba(96,166,220,0.4)]';
                  } else if (isSelected && !isCorrect) {
                    optionClasses =
                      'border-[#D4C1B6] bg-[#D4C1B6]/20 text-[#D4C1B6]';
                  }
                }

                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleSelectOption(opt)}
                    disabled={isAnswerSubmitted}
                    className={`w-full p-4 rounded-2xl border-2 text-left text-sm md:text-base flex items-center justify-between transition-all cursor-pointer ${optionClasses}`}
                  >
                    <span>{opt}</span>
                    {isAnswerSubmitted && isCorrect && (
                      <CheckCircle className="w-5 h-5 text-[#60A6DC] shrink-0" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-[#D4C1B6] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation Banner when answered */}
            {isAnswerSubmitted && (
              <div
                className={`p-4 rounded-2xl border text-xs md:text-sm leading-relaxed backdrop-blur-sm ${
                  selectedAnswer === currentQuestion.correctAnswer
                    ? 'bg-[#60A6DC]/15 border-[#60A6DC]/40 text-white'
                    : 'bg-[#D4C1B6]/15 border-[#D4C1B6]/30 text-white'
                }`}
              >
                <div className="font-bold mb-1 text-[#60A6DC]">
                  {selectedAnswer === currentQuestion.correctAnswer
                    ? ui.correct
                    : `Incorrect. The right answer is "${currentQuestion.correctAnswer}".`}
                </div>
                <p className="text-[#D4C1B6]">{currentQuestion.explanation}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 flex items-center justify-end">
              {!isAnswerSubmitted ? (
                <button
                  type="button"
                  onClick={handleCheckAnswer}
                  disabled={!selectedAnswer}
                  className="px-8 py-3 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs md:text-sm hover:bg-[#72b3e5] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-[0_0_20px_rgba(96,166,220,0.4)] active:scale-95"
                >
                  {ui.checkAnswer}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs md:text-sm hover:bg-[#72b3e5] transition-all cursor-pointer shadow-[0_0_20px_rgba(96,166,220,0.4)] active:scale-95"
                >
                  <span>{currentIdx < availableQuizzes.length - 1 ? ui.nextQuestion : 'Complete Quiz'}</span>
                  <ArrowRight className="w-4 h-4 text-[#02223E]" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* QUIZ SUMMARY SCREEN */
          <div className="bg-[#032342]/35 backdrop-blur-xl rounded-[28px] p-8 border border-[#60A6DC]/25 shadow-2xl text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-[#D4C1B6]/20 border border-[#D4C1B6]/40 text-[#D4C1B6] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(212,193,182,0.3)]">
              <Award className="w-10 h-10" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                {ui.quizCompleted}
              </h2>
              <p className="text-sm text-[#D4C1B6] mt-2">
                You scored{' '}
                <strong className="text-[#60A6DC] font-bold tabular-nums text-lg">
                  {score} out of {availableQuizzes.length}
                </strong>{' '}
                ({Math.round((score / availableQuizzes.length) * 100)}%)
              </p>
            </div>

            {/* Review of answers */}
            <div className="text-left space-y-3 pt-6 border-t border-[#60A6DC]/15">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#D4C1B6] font-mono">
                Question Summary Review
              </h3>
              {answersHistory.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#032342]/40 border border-[#60A6DC]/20 text-xs flex items-start gap-3 backdrop-blur-sm"
                >
                  <div className="mt-0.5">
                    {item.isCorrect ? (
                      <CheckCircle className="w-4 h-4 text-[#60A6DC]" />
                    ) : (
                      <XCircle className="w-4 h-4 text-[#D4C1B6]" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">
                      {item.question.prompt}
                    </div>
                    <div className="text-[#D4C1B6] mt-1">
                      Your answer: <span className="font-medium text-white">{item.userChoice}</span>
                    </div>
                    {!item.isCorrect && (
                      <div className="text-[#60A6DC] mt-1 font-semibold">
                        Correct answer: {item.question.correctAnswer}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs md:text-sm hover:bg-[#72b3e5] transition-all cursor-pointer shadow-[0_0_20px_rgba(96,166,220,0.4)] active:scale-95"
              >
                <RotateCcw className="w-4 h-4 text-[#02223E]" />
                <span>Retry Quiz</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </ThemeBackground>
  );
};
