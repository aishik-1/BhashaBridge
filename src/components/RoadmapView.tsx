import React, { useState } from 'react';
import { LanguageCode } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import { MASTER_ROADMAP } from '../data/academicData';
import { ThemeBackground, SparkleStar } from './ThemeBackground';
import { LessonTheoryModal } from './LessonTheoryModal';
import {
  CheckCircle2,
  Clock,
  Calendar,
  Milestone,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Sparkles,
  Trophy,
  Check,
  Award
} from 'lucide-react';

interface RoadmapViewProps {
  selectedLanguage: LanguageCode;
  onNavigate: (view: string, extra?: any) => void;
  onSelectLanguage?: (lang: LanguageCode) => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({
  selectedLanguage,
  onNavigate,
  onSelectLanguage,
}) => {
  const lang = LANGUAGES[selectedLanguage];
  const ui = UI_TRANSLATIONS[selectedLanguage];

  const [completedPhases, setCompletedPhases] = useState<number[]>([0, 1]);
  const [activeTheoryChapter, setActiveTheoryChapter] = useState<{
    code: string;
    titleNative: string;
    titleEn: string;
  } | null>(null);

  // Language specific roadmap milestones with mapped chapters
  const roadmapStages = [
    {
      phaseNumber: 1,
      weekRange: 'Weeks 1 – 3',
      titleNative: selectedLanguage === 'hi' ? 'वर्णमाला व उच्चारण आधार' : selectedLanguage === 'bn' ? 'বর্ণমালা ও ধ্বনিতত্ত্ব ভিত্তি' : 'मुळाक्षरे व उच्चार पाया',
      titleEn: 'Script, Phonetics & Core Sounds',
      level: 'Beginner',
      hours: '3-4 hrs/wk',
      description: selectedLanguage === 'hi'
        ? 'Master 11 Swar, 33 Vyanjan, Shirorekha rules, and dental vs retroflex consonants.'
        : selectedLanguage === 'bn'
        ? 'Master 11 Swaraborno, 39 Byanjonborno, the inherent /ɔ/ vowel, and Matra placement.'
        : 'Master 14-vowel Chavdakhadi, retroflex ळ sound, and Balbodh Devanagari script.',
      associatedChapter: {
        code: selectedLanguage === 'hi' ? 'H01' : selectedLanguage === 'bn' ? 'B01' : 'M01',
        titleNative: selectedLanguage === 'hi' ? 'हिन्दी भाषा का परिचय एवं उद्भव' : selectedLanguage === 'bn' ? 'বাংলা ভাষার উৎপত্তি ও লিপি পরিচয়' : 'मराठी भाषा, इतिहास व बाळबोध लिपी',
        titleEn: 'Introduction & Foundations',
      },
      goals: [
        'Recognize all basic vowel and consonant glyphs without hesitation',
        'Learn correct vocal tract tongue positioning (dental vs retroflex)',
        'Accurately draw script letters with appropriate top line / matra',
      ],
      checkpoint: 'Pass 10-Mark Script & Phonetics Diagnostic Test (Score ≥ 80%)',
    },
    {
      phaseNumber: 2,
      weekRange: 'Weeks 4 – 6',
      titleNative: selectedLanguage === 'hi' ? 'मात्राएं व शब्दावली निर्माण' : selectedLanguage === 'bn' ? 'কার চিহ্ন ও প্রাথমিক শব্দ' : 'बाराखडी व शब्दसंग्रह',
      titleEn: 'Vowel Diacritics, Barakhadi & Core Words',
      level: 'Beginner',
      hours: '4 hrs/wk',
      description: selectedLanguage === 'hi'
        ? 'Combine consonants with 10 vowel matras, explore conjuncts (क्ष, त्र, ज्ञ, श्र), and master 100 essential words.'
        : selectedLanguage === 'bn'
        ? 'Learn all 10 Kaar symbols, practice Juktoborno (যুক্তবর্ণ), and build a 100-word daily vocabulary.'
        : 'Master Barakhadi combinations, modern loan sounds (ॲ, ऑ), and essential greetings.',
      associatedChapter: {
        code: selectedLanguage === 'hi' ? 'H02' : selectedLanguage === 'bn' ? 'B02' : 'M02',
        titleNative: selectedLanguage === 'hi' ? 'स्वर और मात्राएं' : selectedLanguage === 'bn' ? 'স্বরবর্ণ ও কার চিহ্ন' : 'मराठी स्वर व बाराखडी',
        titleEn: 'Vowels & Diacritics',
      },
      goals: [
        'Fluently read 2-syllable and 3-syllable modified words',
        'Understand short vs long vowel timing (ह्रस्व vs दीर्घ)',
        'Memorize essential greetings, numbers 1-50, and family terms',
      ],
      checkpoint: 'Complete 50-word flashcard review with zero pronunciation errors',
    },
    {
      phaseNumber: 3,
      weekRange: 'Weeks 7 – 10',
      titleNative: selectedLanguage === 'hi' ? 'वाक्य संरचना व व्याकरण आधार' : selectedLanguage === 'bn' ? 'বাক্য গঠন ও ব্যাকরণ ভিত্তি' : 'वाक्य रचना व मूलभूत व्याकरण',
      titleEn: 'Sentence Architecture & Core Grammar',
      level: 'Intermediate',
      hours: '5 hrs/wk',
      description: selectedLanguage === 'hi'
        ? 'Master Subject-Object-Verb (SOV) order, noun gender agreement, and postpositions (का, के, की, में, पर).'
        : selectedLanguage === 'bn'
        ? 'Construct SOV sentences, practice postpositions (এ, তে, র, এর), and honorific registers (তুই, তুমি, আপনি).'
        : 'Understand the three grammatical genders (पुल्लिंग, स्त्रीलिंग, नपुंसकलिंग) and essential Vibhakti cases.',
      associatedChapter: {
        code: selectedLanguage === 'hi' ? 'H03' : selectedLanguage === 'bn' ? 'B03' : 'M03',
        titleNative: selectedLanguage === 'hi' ? 'व्यंजन एवं वाक्य संरचना' : selectedLanguage === 'bn' ? 'ব্যঞ্জনবর্ণ ও বাক্য রীতি' : 'मराठी व्यंजन व लिंग विचार',
        titleEn: 'Syntax & Grammatical Form',
      },
      goals: [
        'Form simple affirmative, negative, and interrogative sentences',
        'Correctly align verb inflections with subject gender and number',
        'Use appropriate polite forms when talking to elders or teachers',
      ],
      checkpoint: 'Translate 10 daily life conversational sentences into native script',
    },
    {
      phaseNumber: 4,
      weekRange: 'Weeks 11 – 15',
      titleNative: selectedLanguage === 'hi' ? 'काल, क्रिया रूप व संभाषण' : selectedLanguage === 'bn' ? 'কাল, ক্রিয়াপদ ও কথোপকথন' : 'काळ, क्रियापदे व संभाषण',
      titleEn: 'Tenses, Verb Paradigms & Oral Fluency',
      level: 'Intermediate',
      hours: '5-6 hrs/wk',
      description: 'Conjugate verbs across Past, Present, and Future. Practice spontaneous dialogues for market, travel, dining, and workplace.',
      associatedChapter: {
        code: selectedLanguage === 'hi' ? 'H08' : selectedLanguage === 'bn' ? 'B08' : 'M08',
        titleNative: selectedLanguage === 'hi' ? 'काल व क्रिया' : selectedLanguage === 'bn' ? 'ক্রিয়াপদের কাল' : 'काळ व विभक्ती विचार',
        titleEn: 'Tenses & Active Dialogue',
      },
      goals: [
        'Freely alternate between Present Habitual, Continuous, and Past',
        'Hold a 5-minute unscripted conversation with native speakers',
        'Order food, ask for directions, and negotiate prices comfortably',
      ],
      checkpoint: 'Record a 2-minute oral monologue describing your daily routine',
    },
    {
      phaseNumber: 5,
      weekRange: 'Weeks 16 – 20',
      titleNative: selectedLanguage === 'hi' ? 'पठन, लेखन व मुहावरे' : selectedLanguage === 'bn' ? 'পঠন, লিখন ও প্রবাদ' : 'वाचन, लेखन व म्हणी',
      titleEn: 'Reading Comprehension, Writing & Idioms',
      level: 'Advanced',
      hours: '6 hrs/wk',
      description: 'Read newspaper editorials, short stories, and cultural essays. Enrich expression with idiomatic phrases and metaphors.',
      associatedChapter: {
        code: selectedLanguage === 'hi' ? 'H15' : selectedLanguage === 'bn' ? 'B15' : 'M15',
        titleNative: selectedLanguage === 'hi' ? 'मुहावरे व लोकोक्तियाँ' : selectedLanguage === 'bn' ? 'প্রবাদ-প্রবচন ও বাগধারা' : 'मराठी म्हणी व वाक्प्रचार',
        titleEn: 'Idiomatic Mastery & Prose',
      },
      goals: [
        'Read an authentic short story without translating every word',
        'Write a 250-word formal letter or descriptive paragraph',
        'Incorporate at least 10 native proverbs naturally in speech',
      ],
      checkpoint: 'Score ≥ 75% on the Reading Comprehension & Translation Section',
    },
    {
      phaseNumber: 6,
      weekRange: 'Weeks 21 – 24',
      titleNative: selectedLanguage === 'hi' ? 'साहित्य, काव्य व संपूर्ण प्रवीणता' : selectedLanguage === 'bn' ? 'সাহিত্য, কাব্য ও পূর্ণ দক্ষতা' : 'साहित्य, काव्य व प्रभुत्व',
      titleEn: 'Literature, Poetry & Native Fluency',
      level: 'Advanced',
      hours: '6-7 hrs/wk',
      description: selectedLanguage === 'hi'
        ? 'Explore Premchand, Kabir, and Mahadevi Varma. Take the full 100-mark certified final examination.'
        : selectedLanguage === 'bn'
        ? 'Immerse in Tagore’s Gitanjali, Nazrul’s poetry, and Sukumar Ray. Complete the final 100-mark evaluation.'
        : 'Appreciate Sant Dnyaneshwar, Tukaram, and Kusumagraj. Clear the 100-mark comprehensive diploma test.',
      associatedChapter: {
        code: selectedLanguage === 'hi' ? 'H40' : selectedLanguage === 'bn' ? 'B40' : 'M40',
        titleNative: selectedLanguage === 'hi' ? 'साहित्यिक विमर्श' : selectedLanguage === 'bn' ? 'সাহিত্য আলোচনা' : 'मराठी साहित्य समीक्षा',
        titleEn: 'Literary Mastery & Certification',
      },
      goals: [
        'Analyze literary metaphors, meter, and philosophical themes',
        'Achieve CEFR B2/C1 equivalent working proficiency',
        'Earn the Official BhashaBridge Course Completion Certificate',
      ],
      checkpoint: 'Score ≥ 70/100 on the Formal Proctored 100-Mark Examination',
    },
  ];

  const togglePhaseCompletion = (idx: number) => {
    setCompletedPhases((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const progressPct = Math.round((completedPhases.length / roadmapStages.length) * 100);

  return (
    <ThemeBackground>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        
        {/* Banner with Language Space Tabs */}
        <div className="relative rounded-[28px] bg-gradient-to-r from-[#032545]/50 via-[#053561]/40 to-[#021f3a]/50 p-6 sm:p-8 border border-[#60A6DC]/25 backdrop-blur-xl shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#60A6DC]/15 border border-[#60A6DC]/30 text-[#60A6DC] text-xs font-semibold backdrop-blur-sm">
                <SparkleStar color="#60A6DC" size={14} />
                <span>
                  {lang.nativeName} ({lang.name}) Space · 24-Week Pedagogical Learning Roadmap
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                {ui.roadmap}
              </h1>
              <p className="text-xs md:text-sm text-[#D4C1B6] max-w-2xl leading-relaxed">
                Step-by-step master journey from script phonetics to native literary fluency. Each milestone connects directly to comprehensive lesson theory, dialogues, and practice drills.
              </p>
            </div>

            {/* Overall Progress Gauge */}
            <div className="bg-[#032342]/70 px-6 py-5 rounded-2xl border border-[#60A6DC]/35 text-center shrink-0 shadow-lg min-w-[200px]">
              <div className="text-[11px] font-mono text-[#D4C1B6] uppercase tracking-wider">
                Roadmap Mastery
              </div>
              <div className="text-3xl font-mono font-bold text-white tracking-tight my-1">
                {progressPct}% <span className="text-xs text-[#60A6DC]">Complete</span>
              </div>
              <div className="text-[11px] text-[#D4C1B6]">
                {completedPhases.length} of {roadmapStages.length} Milestones Cleared
              </div>
            </div>
          </div>

          {/* Quick Language Space Switcher Tabs on Roadmap */}
          {onSelectLanguage && (
            <div className="flex items-center gap-2 pt-4 border-t border-[#60A6DC]/15 overflow-x-auto">
              <span className="text-xs text-[#D4C1B6] font-semibold mr-2">Language Space:</span>
              <button
                type="button"
                onClick={() => onSelectLanguage('hi')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedLanguage === 'hi'
                    ? 'bg-rose-600/30 text-rose-300 border border-rose-500/50 shadow-sm'
                    : 'bg-[#032342]/40 text-[#D4C1B6] hover:text-white border border-[#60A6DC]/20'
                }`}
              >
                🇮🇳 Hindi Roadmap
              </button>
              <button
                type="button"
                onClick={() => onSelectLanguage('bn')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedLanguage === 'bn'
                    ? 'bg-sky-600/30 text-sky-300 border border-sky-500/50 shadow-sm'
                    : 'bg-[#032342]/40 text-[#D4C1B6] hover:text-white border border-[#60A6DC]/20'
                }`}
              >
                🐅 Bengali Roadmap
              </button>
              <button
                type="button"
                onClick={() => onSelectLanguage('mr')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedLanguage === 'mr'
                    ? 'bg-amber-600/30 text-amber-300 border border-amber-500/50 shadow-sm'
                    : 'bg-[#032342]/40 text-[#D4C1B6] hover:text-white border border-[#60A6DC]/20'
                }`}
              >
                🚩 Marathi Roadmap
              </button>
            </div>
          )}
        </div>

        {/* 6 Structured Roadmap Milestones */}
        <div className="space-y-6">
          {roadmapStages.map((phase, idx) => {
            const isDone = completedPhases.includes(idx);

            return (
              <div
                key={phase.phaseNumber}
                className={`p-6 sm:p-8 rounded-[28px] border backdrop-blur-xl transition-all shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative overflow-hidden ${
                  isDone
                    ? 'bg-[#032545]/55 border-[#60A6DC]/50 shadow-[0_0_25px_rgba(96,166,220,0.2)]'
                    : 'bg-[#032342]/35 border-[#60A6DC]/20 hover:border-[#60A6DC]/40'
                }`}
              >
                {/* Left Phase Identity & Goals */}
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5 text-xs">
                    <span className="font-mono font-bold text-[#60A6DC] bg-[#60A6DC]/15 px-3 py-1 rounded-full border border-[#60A6DC]/30">
                      Phase {phase.phaseNumber} · {phase.weekRange}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#021a30] text-[#D4C1B6] border border-[#60A6DC]/20">
                      {phase.level}
                    </span>
                    <span className="text-[#D4C1B6] flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-[#60A6DC]" /> {phase.hours}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {phase.titleNative}
                    </h3>
                    <div className="text-xs sm:text-sm text-[#60A6DC] font-mono mt-0.5">
                      {phase.titleEn}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#D4C1B6] leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Concrete Learning Goals */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-mono font-bold text-[#60A6DC] uppercase">
                      Curriculum Goals & Deliverables:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#D4C1B6]">
                      {phase.goals.map((g, gIdx) => (
                        <li key={gIdx} className="flex items-start gap-2">
                          <span className="text-[#60A6DC] font-bold">•</span>
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Evaluation Checkpoint */}
                  <div className="p-3.5 rounded-xl bg-[#011425]/60 border border-[#60A6DC]/20 text-xs text-white flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#60A6DC] shrink-0" />
                    <div>
                      <strong className="text-[#60A6DC] font-mono">Milestone Checkpoint: </strong>
                      <span className="text-[#D4C1B6]">{phase.checkpoint}</span>
                    </div>
                  </div>
                </div>

                {/* Right Interactive Controls: Open Lesson Theory + Mark Completed */}
                <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-center gap-3 border-t lg:border-t-0 lg:border-l border-[#60A6DC]/15 pt-4 lg:pt-0 lg:pl-6">
                  {/* Button to Open Theory directly from Roadmap */}
                  <button
                    type="button"
                    onClick={() => setActiveTheoryChapter(phase.associatedChapter)}
                    className="w-full sm:w-auto lg:w-48 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs hover:bg-[#72b3e5] shadow-[0_0_15px_rgba(96,166,220,0.35)] transition-all cursor-pointer active:scale-95"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Open Lesson Theory</span>
                  </button>

                  {/* Toggle Phase Completion */}
                  <button
                    type="button"
                    onClick={() => togglePhaseCompletion(idx)}
                    className={`w-full sm:w-auto lg:w-48 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs transition-all cursor-pointer ${
                      isDone
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-sm'
                        : 'bg-[#032342] text-[#D4C1B6] border border-[#60A6DC]/30 hover:text-white'
                    }`}
                  >
                    {isDone ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Phase Cleared ✓</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Mark Phase Done</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Lesson Theory when triggered from roadmap */}
        {activeTheoryChapter && (
          <LessonTheoryModal
            chapterCode={activeTheoryChapter.code}
            chapterTitleNative={activeTheoryChapter.titleNative}
            chapterTitleEn={activeTheoryChapter.titleEn}
            language={selectedLanguage}
            onClose={() => setActiveTheoryChapter(null)}
            onLaunchPractice={() => {
              setActiveTheoryChapter(null);
              onNavigate('syllabus');
            }}
          />
        )}

      </div>
    </ThemeBackground>
  );
};
