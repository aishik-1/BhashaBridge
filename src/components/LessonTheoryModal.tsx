import React, { useState } from 'react';
import { LessonTheoryItem, LanguageCode } from '../types';
import { LESSON_THEORIES } from '../data/lessonTheoryData';
import { speechService } from '../services/speech';
import {
  BookOpen,
  Volume2,
  CheckCircle,
  XCircle,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  Check,
  ChevronRight,
  HelpCircle,
  Award,
  Layers,
  ArrowRight,
  Clock,
  Quote
} from 'lucide-react';

interface LessonTheoryModalProps {
  chapterCode: string;
  chapterTitleNative: string;
  chapterTitleEn: string;
  language: LanguageCode;
  onClose: () => void;
  onLaunchPractice?: () => void;
  onMarkComplete?: (chapterCode: string) => void;
  isCompleted?: boolean;
}

export const LessonTheoryModal: React.FC<LessonTheoryModalProps> = ({
  chapterCode,
  chapterTitleNative,
  chapterTitleEn,
  language,
  onClose,
  onLaunchPractice,
  onMarkComplete,
  isCompleted = false,
}) => {
  // Check if we have tailored rich theory for this chapter; if not, create a comprehensive default theory based on the chapter info
  const theory: LessonTheoryItem = LESSON_THEORIES[chapterCode] || {
    chapterCode,
    language,
    titleNative: chapterTitleNative,
    titleEn: chapterTitleEn,
    level: 'beginner',
    estimatedMinutes: 15,
    overview: `${chapterTitleEn} provides the fundamental building blocks for mastering ${language === 'hi' ? 'Hindi' : language === 'bn' ? 'Bengali' : 'Marathi'}. Understanding this chapter builds your intuitive grasp of vocabulary, grammar patterns, and real-life conversational syntax.`,
    historicalContext: `Rooted in classical Indo-Aryan linguistic heritage, this grammatical and phonetic rule set has evolved over centuries to convey rich cultural and emotional nuance in everyday Indian speech.`,
    linguisticCore: {
      ruleTitle: `Core Pedagogical Principle for ${chapterCode}`,
      ruleDescription: `Mastering ${chapterTitleEn} requires active recognition of phonetic patterns, proper articulation placement, and standard grammatical agreements.`,
      breakdownTable: {
        headers: ['Concept Layer', 'Description', 'Application'],
        rows: [
          ['Phonetic Base', 'Vocal tract articulation', 'Accurate pronunciation without native-language interference'],
          ['Syntactic Rule', 'Subject-Object-Verb (SOV) alignment', 'Keep the primary action verb at the conclusion of the thought'],
          ['Cultural Context', 'Honorific registers and politeness', 'Use polite pronouns for respected persons and elders'],
        ],
      },
    },
    grammarFormulas: [
      {
        name: 'Standard Word Order',
        pattern: 'Subject (कर्ता) + Object (कर्म) + Verb (क्रिया)',
        explanation: 'Always construct thoughts with the main predicate verb anchoring the end of the sentence.',
      },
    ],
    dialogue: {
      context: 'Daily practical conversation applying this chapter',
      lines: [
        {
          speaker: 'वक्ता १ (Speaker 1)',
          native: language === 'hi' ? 'क्या आप इस विषय को विस्तार से समझा सकते हैं?' : language === 'bn' ? 'আপনি কি এই বিষয়টি বিস্তারিতভাবে ব্যাখ্যা করতে পারেন?' : 'तुम्ही हा विषय सविस्तर समजावून सांगू शकता का?',
          transliteration: language === 'hi' ? 'Kya aap is vishay ko vistaar se samjha sakte hain?' : language === 'bn' ? 'Aapni ki ei bishoyti bistaritobhabe byakhya korte paren?' : 'Tumhi haa vishay savistar samjavun saangoo shakta ka?',
          english: 'Could you explain this topic in detail?',
        },
        {
          speaker: 'वक्ता २ (Speaker 2)',
          native: language === 'hi' ? 'हाँ बिल्कुल! नियमित अभ्यास से यह बहुत सरल हो जाता है।' : language === 'bn' ? 'হ্যাঁ অবশ্যই! নিয়মিত অনুশীলনের মাধ্যমে এটি খুব সহজ হয়ে যায়।' : 'हो नक्कीच! नियमित सरावाने हे खूप सोपे होते.',
          transliteration: language === 'hi' ? 'Haan bilkul! Niyamit abhyaas se yeh bahut saral ho jaata hai.' : language === 'bn' ? 'Hya oboshyoi! Niyomito onusheeloner madhyome eti khub shohoj hoye jaay.' : 'Ho nakkich! Niyamit saraavane he khoop sope hote.',
          english: 'Yes certainly! With regular practice it becomes very simple.',
        },
      ],
    },
    keyVocabulary: [
      { native: chapterTitleNative, translit: chapterCode, english: chapterTitleEn },
      { native: language === 'hi' ? 'अभ्यास' : language === 'bn' ? 'অনুশীলন' : 'सराव', translit: 'Abhyas / Practice', english: 'Practice / Drill' },
      { native: language === 'hi' ? 'शुद्ध' : language === 'bn' ? 'শুদ্ধ' : 'शुद्ध', translit: 'Shuddha', english: 'Pure / Correct' },
      { native: language === 'hi' ? 'ज्ञान' : language === 'bn' ? 'জ্ঞান' : 'ज्ञान', translit: 'Gyaan', english: 'Knowledge' },
    ],
    commonMistakes: [
      {
        wrong: 'Translating word-for-word from English word order (SVO)',
        correct: 'Think in SOV: place the action verb at the very end of the sentence.',
        why: 'English leads with the verb right after the subject; Indian languages anchor the verb at the conclusion.',
      },
    ],
    culturalProverb: {
      native: language === 'hi' ? 'विद्या ददाति विनयम्।' : language === 'bn' ? 'বিদ্যা বিনয় দান করে।' : 'विद्या विनयेन शोभते.',
      translit: 'Vidya dadati vinayam.',
      literal: 'True knowledge bestows humility.',
      culturalMeaning: 'Deep understanding brings gentleness, respect for others, and true wisdom.',
    },
    knowledgeCheck: [
      {
        question: `What is the most effective approach to mastering ${chapterTitleEn}?`,
        options: [
          'Relying solely on English transliteration without reading script',
          'Daily phonetic listening, reading in native script, and speaking aloud',
          'Memorizing vocabulary lists without understanding sentence context',
          'Skipping grammar rules and guessing word forms',
        ],
        correctIndex: 1,
        explanation: 'Consistent multi-sensory exposure (script, audio, and active speaking) builds long-term fluency.',
      },
      {
        question: 'Where does the main verb typically belong in a sentence in this language?',
        options: ['At the very start', 'Directly after the subject', 'At the very end of the sentence (SOV)', 'In the middle of the nouns'],
        correctIndex: 2,
        explanation: 'Subject-Object-Verb (SOV) is the hallmark grammatical structure of Hindi, Bengali, and Marathi.',
      },
    ],
  };

  const [activeTab, setActiveTab] = useState<'theory' | 'dialogue' | 'vocabulary' | 'quiz'>('theory');
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<number, number>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [speakingLineIdx, setSpeakingLineIdx] = useState<number | null>(null);

  const handlePlayAudio = (text: string, lineIdx?: number) => {
    if (lineIdx !== undefined) setSpeakingLineIdx(lineIdx);
    speechService.speak(text, language, false, undefined, () => {
      setSpeakingLineIdx(null);
    });
  };

  const handleSelectQuizAnswer = (qIdx: number, optIdx: number) => {
    if (showQuizResults) return;
    setSelectedQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#011425]/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#021d37] border border-[#60A6DC]/35 rounded-[28px] max-w-4xl w-full max-h-[92vh] flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#032545] via-[#053561] to-[#021f3a] border-b border-[#60A6DC]/20 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-mono font-bold text-[#60A6DC] bg-[#60A6DC]/15 px-2.5 py-0.5 rounded-full border border-[#60A6DC]/30">
                  {theory.chapterCode}
                </span>
                <span className="text-[#D4C1B6] uppercase tracking-wider text-[11px] font-semibold">
                  {language === 'hi' ? 'हिन्दी कक्षा' : language === 'bn' ? 'বাংলা পাঠ' : 'मराठी धडा'}
                </span>
                <span className="text-white/60">·</span>
                <span className="text-xs text-[#D4C1B6] flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#60A6DC]" /> ~{theory.estimatedMinutes} mins
                </span>
                {isCompleted && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-semibold">
                    <Check className="w-3 h-3" /> Mastered
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {theory.titleNative}
              </h2>
              <div className="text-sm font-semibold text-[#60A6DC]">
                {theory.titleEn}
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-[#D4C1B6] hover:text-white p-2 rounded-xl bg-[#032342]/60 hover:bg-[#032342] border border-[#60A6DC]/20 transition-all cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 mt-5 pt-3 border-t border-[#60A6DC]/15 overflow-x-auto pb-1 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('theory')}
              className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'theory'
                  ? 'bg-[#60A6DC] text-[#02223E] shadow-[0_0_15px_rgba(96,166,220,0.4)]'
                  : 'bg-[#032342]/50 text-[#D4C1B6] hover:text-white border border-[#60A6DC]/20'
              }`}
            >
              📖 Theory & Rules
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('dialogue')}
              className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'dialogue'
                  ? 'bg-[#60A6DC] text-[#02223E] shadow-[0_0_15px_rgba(96,166,220,0.4)]'
                  : 'bg-[#032342]/50 text-[#D4C1B6] hover:text-white border border-[#60A6DC]/20'
              }`}
            >
              💬 Real Dialogue & Audio
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('vocabulary')}
              className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'vocabulary'
                  ? 'bg-[#60A6DC] text-[#02223E] shadow-[0_0_15px_rgba(96,166,220,0.4)]'
                  : 'bg-[#032342]/50 text-[#D4C1B6] hover:text-white border border-[#60A6DC]/20'
              }`}
            >
              📝 Vocabulary & Common Traps
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('quiz')}
              className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'quiz'
                  ? 'bg-[#60A6DC] text-[#02223E] shadow-[0_0_15px_rgba(96,166,220,0.4)]'
                  : 'bg-[#032342]/50 text-[#D4C1B6] hover:text-white border border-[#60A6DC]/20'
              }`}
            >
              🎯 Knowledge Check
            </button>
          </div>
        </div>

        {/* Modal Body / Tab Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">
          {activeTab === 'theory' && (
            <div className="space-y-6">
              {/* Concept Overview Box */}
              <div className="p-5 rounded-2xl bg-[#032545]/50 border border-[#60A6DC]/30 space-y-2 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#60A6DC]">
                  <Sparkles className="w-4 h-4 text-[#60A6DC]" />
                  <span>पाठ परिचय व आधार (Core Pedagogical Exposition)</span>
                </div>
                <p className="text-sm sm:text-base text-white/95 leading-relaxed font-sans">
                  {theory.overview}
                </p>
                {theory.historicalContext && (
                  <p className="text-xs text-[#D4C1B6] leading-relaxed pt-2 border-t border-[#60A6DC]/15 italic">
                    <strong>Historical Insight: </strong> {theory.historicalContext}
                  </p>
                )}
              </div>

              {/* Core Linguistic Rule & Breakdown */}
              <div className="p-6 rounded-2xl bg-[#032342]/40 border border-[#60A6DC]/25 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {theory.linguisticCore.ruleTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D4C1B6] mt-1 leading-relaxed">
                    {theory.linguisticCore.ruleDescription}
                  </p>
                </div>

                {/* Structured Breakdown Table */}
                {theory.linguisticCore.breakdownTable && (
                  <div className="overflow-x-auto rounded-xl border border-[#60A6DC]/20">
                    <table className="w-full text-left text-xs text-white">
                      <thead className="bg-[#032545]/80 text-[#60A6DC] font-mono border-b border-[#60A6DC]/20">
                        <tr>
                          {theory.linguisticCore.breakdownTable.headers.map((hdr, hIdx) => (
                            <th key={hIdx} className="p-3 font-semibold uppercase tracking-wider">
                              {hdr}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#60A6DC]/10">
                        {theory.linguisticCore.breakdownTable.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-[#032545]/30">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-3 font-medium">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Script Notes */}
                {theory.linguisticCore.scriptNotes && (
                  <div className="space-y-1.5 pt-2">
                    <div className="text-xs font-mono font-bold uppercase text-[#60A6DC]">
                      Important Writing & Script Tips:
                    </div>
                    {theory.linguisticCore.scriptNotes.map((note, nIdx) => (
                      <div key={nIdx} className="flex items-start gap-2 text-xs text-[#D4C1B6]">
                        <span className="text-[#60A6DC] font-bold">•</span>
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Grammar Formulas */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4C1B6]">
                  Essential Grammatical Formulas (व्याकरण सूत्र)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {theory.grammarFormulas.map((formula, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-4 rounded-xl bg-[#032342]/45 border border-[#60A6DC]/20 space-y-2"
                    >
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#60A6DC]" />
                        <span>{formula.name}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#011425]/70 border border-[#60A6DC]/30 font-mono text-xs text-[#60A6DC] font-semibold">
                        {formula.pattern}
                      </div>
                      <p className="text-[11px] text-[#D4C1B6] leading-relaxed">
                        {formula.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'dialogue' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-[#032545]/40 border border-[#60A6DC]/20 text-xs text-[#D4C1B6] flex items-center justify-between">
                <span>
                  <strong>Scenario: </strong> {theory.dialogue?.context || 'Practical real-life conversation'}
                </span>
                <span className="text-[#60A6DC] font-mono">Click speaker icon to listen</span>
              </div>

              <div className="space-y-3">
                {theory.dialogue?.lines.map((line, lIdx) => (
                  <div
                    key={lIdx}
                    className="p-4 rounded-2xl bg-[#032342]/45 border border-[#60A6DC]/20 hover:border-[#60A6DC]/40 transition-all flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1 flex-1">
                      <div className="text-xs font-bold text-[#60A6DC] font-mono">
                        {line.speaker}
                      </div>
                      <div className="text-lg font-bold text-white tracking-tight">
                        {line.native}
                      </div>
                      <div className="text-xs font-mono text-[#D4C1B6]">
                        {line.transliteration}
                      </div>
                      <div className="text-xs text-white/70 italic pt-1">
                        "{line.english}"
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handlePlayAudio(line.native, lIdx)}
                      className={`p-3 rounded-full border transition-all cursor-pointer ${
                        speakingLineIdx === lIdx
                          ? 'bg-[#60A6DC] text-[#02223E] shadow-[0_0_15px_rgba(96,166,220,0.5)]'
                          : 'bg-[#032545] text-[#60A6DC] border-[#60A6DC]/30 hover:bg-[#60A6DC] hover:text-[#02223E]'
                      }`}
                      title="Listen to native pronunciation"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'vocabulary' && (
            <div className="space-y-6">
              {/* Key Words */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4C1B6] mb-3">
                  Lesson Vocabulary Bank (शब्दावली)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {theory.keyVocabulary.map((v, vIdx) => (
                    <div
                      key={vIdx}
                      className="p-3.5 rounded-xl bg-[#032342]/45 border border-[#60A6DC]/20 flex items-center justify-between gap-2"
                    >
                      <div>
                        <div className="text-base font-bold text-white">
                          {v.native}
                        </div>
                        <div className="text-xs font-mono text-[#60A6DC]">
                          {v.translit} {v.gender && `· (${v.gender})`}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#D4C1B6] bg-[#011425]/60 px-2.5 py-1 rounded-lg border border-[#60A6DC]/15">
                          {v.english}
                        </span>
                        <button
                          type="button"
                          onClick={() => handlePlayAudio(v.native)}
                          className="p-1.5 rounded-lg bg-[#032545] text-[#60A6DC] hover:text-white"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Pitfalls & Mistakes */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4C1B6] mb-3 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Common Student Pitfalls to Avoid (सामान्य गलतियाँ)</span>
                </h4>
                <div className="space-y-3">
                  {theory.commonMistakes.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-4 rounded-xl bg-[#032342]/40 border border-amber-500/25 space-y-2 text-xs"
                    >
                      <div className="flex items-start gap-2 text-rose-300">
                        <XCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                        <span><strong>Incorrect:</strong> {m.wrong}</span>
                      </div>
                      <div className="flex items-start gap-2 text-emerald-300">
                        <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                        <span><strong>Correct:</strong> {m.correct}</span>
                      </div>
                      <p className="text-[#D4C1B6] pl-6 pt-1 border-t border-[#60A6DC]/10 italic">
                        <strong>Why:</strong> {m.why}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cultural Wisdom Proverb */}
              {theory.culturalProverb && (
                <div className="p-5 rounded-2xl bg-gradient-to-r from-[#032545]/60 to-[#021f3a]/60 border border-[#60A6DC]/30 space-y-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A6DC] flex items-center gap-1.5">
                    <Quote className="w-3.5 h-3.5" />
                    <span>Cultural Proverb & Wisdom (मुहावरे व लोकोक्तियाँ)</span>
                  </div>
                  <div className="text-lg font-bold text-white">
                    "{theory.culturalProverb.native}"
                  </div>
                  <div className="text-xs font-mono text-[#D4C1B6]">
                    {theory.culturalProverb.translit}
                  </div>
                  <div className="text-xs text-[#D4C1B6]">
                    <strong>Literal: </strong> {theory.culturalProverb.literal}
                  </div>
                  <div className="text-xs text-[#60A6DC] font-medium pt-1">
                    <strong>Cultural Meaning: </strong> {theory.culturalProverb.culturalMeaning}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'quiz' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-[#032545]/40 border border-[#60A6DC]/20 text-xs text-[#D4C1B6]">
                Test your comprehension of <strong>{theory.titleEn}</strong> with these quick concept questions.
              </div>

              <div className="space-y-5">
                {theory.knowledgeCheck.map((kc, qIdx) => {
                  const selectedOpt = selectedQuizAnswers[qIdx];
                  const isAnswered = selectedOpt !== undefined;
                  const isCorrect = selectedOpt === kc.correctIndex;

                  return (
                    <div
                      key={qIdx}
                      className="p-5 rounded-2xl bg-[#032342]/45 border border-[#60A6DC]/25 space-y-3"
                    >
                      <div className="flex items-center justify-between text-xs text-[#D4C1B6]">
                        <span className="font-mono font-bold text-[#60A6DC]">
                          Question {qIdx + 1} of {theory.knowledgeCheck.length}
                        </span>
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-white">
                        {kc.question}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        {kc.options.map((opt, oIdx) => {
                          const isSelected = selectedOpt === oIdx;
                          let btnStyle =
                            'bg-[#032342]/50 border-[#60A6DC]/20 text-white hover:bg-[#032342]/80';

                          if (showQuizResults) {
                            if (oIdx === kc.correctIndex) {
                              btnStyle = 'bg-emerald-500/20 border-emerald-400 text-white font-bold';
                            } else if (isSelected && !isCorrect) {
                              btnStyle = 'bg-rose-500/20 border-rose-400 text-rose-200';
                            }
                          } else if (isSelected) {
                            btnStyle = 'bg-[#60A6DC]/30 border-[#60A6DC] text-white font-bold';
                          }

                          return (
                            <button
                              key={oIdx}
                              type="button"
                              onClick={() => handleSelectQuizAnswer(qIdx, oIdx)}
                              disabled={showQuizResults}
                              className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all cursor-pointer ${btnStyle}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {showQuizResults && (
                        <div
                          className={`p-3 rounded-xl border text-xs leading-relaxed ${
                            isCorrect
                              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                              : 'bg-rose-500/10 border-rose-500/30 text-rose-200'
                          }`}
                        >
                          <div className="font-bold mb-0.5">
                            {isCorrect ? '✓ Correct!' : '✗ Explanation:'}
                          </div>
                          <p>{kc.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setShowQuizResults(true)}
                  disabled={Object.keys(selectedQuizAnswers).length < theory.knowledgeCheck.length}
                  className="px-6 py-2.5 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs hover:bg-[#72b3e5] disabled:opacity-40 transition-all cursor-pointer shadow-[0_0_15px_rgba(96,166,220,0.4)]"
                >
                  Verify My Answers
                </button>
                {showQuizResults && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedQuizAnswers({});
                      setShowQuizResults(false);
                    }}
                    className="text-xs font-semibold text-[#D4C1B6] hover:text-white"
                  >
                    Reset Check
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-5 bg-[#011425] border-t border-[#60A6DC]/20 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handlePlayAudio(theory.titleNative + '. ' + theory.overview)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#032342] border border-[#60A6DC]/25 text-xs text-[#60A6DC] hover:text-white transition-all cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Listen Summary</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            {onMarkComplete && (
              <button
                type="button"
                onClick={() => onMarkComplete(theory.chapterCode)}
                className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full font-bold text-xs transition-all cursor-pointer ${
                  isCompleted
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'bg-[#032545] text-white border border-[#60A6DC]/30 hover:bg-[#032545]/80'
                }`}
              >
                <Check className="w-3.5 h-3.5" />
                <span>{isCompleted ? 'Completed ✓' : 'Mark Lesson Mastered'}</span>
              </button>
            )}

            {onLaunchPractice && (
              <button
                type="button"
                onClick={onLaunchPractice}
                className="inline-flex items-center gap-1.5 px-6 py-2 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs hover:bg-[#72b3e5] shadow-[0_0_15px_rgba(96,166,220,0.4)] transition-all cursor-pointer"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Start Practice Quiz</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
