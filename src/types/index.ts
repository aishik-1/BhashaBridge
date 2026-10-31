export type LanguageCode = 'hi' | 'bn' | 'mr';

export type UserLevel = 'beginner' | 'intermediate' | 'advanced';

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
  script: string;
  greeting: string;
  speakers: string;
  bcp47: string;
  description: string;
  accentColor: string;
  samplePhrase: {
    native: string;
    transliteration: string;
    english: string;
  };
}

export type CategoryId =
  | 'greetings'
  | 'numbers'
  | 'family'
  | 'food'
  | 'travel'
  | 'shopping'
  | 'time'
  | 'verbs'
  | 'questions'
  | 'school'
  | 'work'
  | 'health'
  | 'directions'
  | 'feelings'
  | 'daily';

export interface CategoryInfo {
  id: CategoryId;
  nameEn: string;
  nameNative: {
    hi: string;
    bn: string;
    mr: string;
  };
  iconName: string;
  descriptionEn: string;
}

export interface VocabularyItem {
  id: string;
  language: LanguageCode;
  category: CategoryId;
  english: string;
  nativeScript: string;
  transliteration: string;
  meaningEn: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'phrase' | 'pronoun' | 'adverb' | 'number';
  exampleNative: string;
  exampleEnglish: string;
  pronunciationNotes?: string;
  sourceProject?: string;
  license?: string;
}

export interface DictionaryEntry {
  id: string;
  word: string;
  language: LanguageCode;
  transliteration: string;
  englishMeaning: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'pronoun' | 'phrase' | 'conjunction' | 'interjection';
  gender?: 'masculine' | 'feminine' | 'neuter' | 'common';
  category: string;
  definitionNative?: string;
  pronunciationIpa?: string;
  audioHint?: string;
  synonyms: string[];
  antonyms?: string[];
  exampleSentence: {
    native: string;
    transliteration: string;
    english: string;
  };
  equivalents: {
    hi?: string;
    bn?: string;
    mr?: string;
    en: string;
  };
  tags?: string[];
}

export interface LessonTheoryItem {
  chapterCode: string;
  language: LanguageCode;
  titleNative: string;
  titleEn: string;
  level: UserLevel;
  estimatedMinutes: number;
  overview: string;
  historicalContext?: string;
  linguisticCore: {
    ruleTitle: string;
    ruleDescription: string;
    breakdownTable?: {
      headers: string[];
      rows: string[][];
    };
    scriptNotes?: string[];
  };
  grammarFormulas: {
    name: string;
    pattern: string;
    explanation: string;
  }[];
  dialogue?: {
    context: string;
    lines: {
      speaker: string;
      native: string;
      transliteration: string;
      english: string;
    }[];
  };
  keyVocabulary: {
    native: string;
    translit: string;
    english: string;
    gender?: string;
  }[];
  commonMistakes: {
    wrong: string;
    correct: string;
    why: string;
  }[];
  culturalProverb: {
    native: string;
    translit: string;
    literal: string;
    culturalMeaning: string;
  };
  knowledgeCheck: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export type QuizQuestionType =
  | 'translate-mcq'
  | 'script-match'
  | 'transliteration'
  | 'sentence-meaning'
  | 'fill-blank'
  | 'true-false';

export interface QuizQuestion {
  id: string;
  language: LanguageCode;
  category: string;
  type: QuizQuestionType;
  prompt: string;
  promptNative?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  marks?: number;
}

export interface SentenceExercise {
  id: string;
  language: LanguageCode;
  category: CategoryId;
  englishPrompt: string;
  targetSentence: string;
  acceptableAnswers: string[];
  wordTiles: string[];
  transliteration: string;
  grammarTip: string;
}

// Academic Curriculum Chapter (H01-H40, B01-B40, M01-M40)
export interface ChapterItem {
  code: string; // e.g. 'H01', 'B02', 'M15'
  language: LanguageCode;
  number: number;
  titleNative: string;
  titleEn: string;
  topics: string[];
  level: UserLevel;
  category: 'script' | 'phonetics' | 'grammar' | 'vocab' | 'writing' | 'reading' | 'literature' | 'communication';
  summaryEn: string;
  keyRuleNative?: string;
  examples: {
    native: string;
    translit: string;
    english: string;
    explanation?: string;
  }[];
  practiceQuestionsCount: number;
}

// Alphabet & Phonetics
export interface AlphabetLetter {
  char: string;
  ipa: string;
  transliteration: string;
  type: 'vowel' | 'consonant' | 'matra' | 'conjunct';
  exampleWord: string;
  exampleTranslit: string;
  exampleEnglish: string;
  strokeHint?: string;
  soundDescription: string;
}

// Literature Author & Works
export interface LiteratureAuthor {
  id: string;
  nameNative: string;
  nameEn: string;
  language: LanguageCode;
  era: string;
  genre: string;
  bioEn: string;
  famousWorks: string[];
  sampleExcerpt: {
    title: string;
    originalScript: string;
    englishTranslation: string;
    analysis: string;
  };
}

// External Official Resource
export interface EducationalResource {
  id: string;
  title: string;
  provider: string;
  url: string;
  description: string;
  type: 'official' | 'dictionary' | 'course' | 'research';
  languagesSupported: LanguageCode[];
  iconType: string;
  tags: string[];
}

// 24-Week Roadmap Item
export interface RoadmapWeek {
  weekRange: string;
  phase: string;
  level: UserLevel;
  title: string;
  goals: string[];
  recommendedHoursPerWeek: number;
  checkpoint: string;
  practicalTask: string;
}

// Full 100-Mark Examination Question
export interface ExamQuestion {
  id: string;
  section: 'alphabet' | 'vocab' | 'grammar' | 'reading' | 'writing' | 'translation' | 'listening' | 'speaking';
  sectionName: string;
  marks: number;
  prompt: string;
  promptNative?: string;
  audioPrompt?: string;
  passage?: string;
  type?: 'mcq' | 'fill' | 'subjective';
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

// Printable Worksheet Item
export interface Worksheet {
  id: string;
  language: LanguageCode;
  code: string;
  title: string;
  level: UserLevel;
  totalMarks: number;
  timeMinutes: number;
  instructions: string;
  exercises: {
    sectionTitle: string;
    marks: number;
    question: string;
    options?: string[];
    answerKey: string;
    solutionNote: string;
  }[];
}

export interface UserProfile {
  id: string;
  name: string;
  username?: string;
  email?: string;
  avatar: string;
  dailyGoalMinutes: number;
  selectedLanguage: LanguageCode;
  selectedLevel?: UserLevel;
  xp?: number;
  createdAt: string;
  authProvider?: 'google' | 'credentials' | 'guest';
}

export interface RegisteredUser {
  id: string;
  username: string;
  name: string;
  email: string;
  passwordHash: string;
  avatar: string;
  selectedLanguage: LanguageCode;
  dailyGoalMinutes: number;
  createdAt: string;
  authProvider: 'google' | 'credentials';
}

export interface UserProgress {
  streakDays: number;
  lastActiveDate: string;
  learnedWordIds: string[];
  savedWordIds: string[];
  completedLessonIds: string[];
  completedChapterCodes?: string[];
  completedRoadmapWeeks?: number[];
  examScores?: {
    examId: string;
    score: number;
    total: number;
    date: string;
    breakdown: Record<string, number>;
  }[];
  quizScores: {
    quizId: string;
    score: number;
    total: number;
    date: string;
  }[];
  todayMinutesSpent: number;
  xp?: number;
  badges?: string[];
}

export interface WikimediaEntry {
  title: string;
  language: LanguageCode;
  summary: string;
  fullUrl: string;
  license: string;
  category: string;
}

export interface UITranslation {
  appTitle: string;
  dashboard: string;
  syllabus: string;
  alphabet: string;
  grammar: string;
  lessons: string;
  dictionary: string;
  vocabulary: string;
  quizzes: string;
  sentenceBuilder: string;
  readingWriting: string;
  listeningSpeaking: string;
  mockExam: string;
  roadmap: string;
  literature: string;
  resources: string;
  worksheets: string;
  aiTutor: string;
  pronunciation?: string;
  revision?: string;
  culturalNotes?: string;
  streak: string;
  dailyGoal: string;
  wordsLearned: string;
  savedWords: string;
  continueLearning: string;
  switchLanguage: string;
  searchPlaceholder: string;
  markAsLearned: string;
  learned: string;
  saveWord: string;
  saved: string;
  listen: string;
  slowSpeed: string;
  normalSpeed: string;
  flipCard: string;
  allCategories: string;
  checkAnswer: string;
  correct: string;
  tryAgain: string;
  nextQuestion: string;
  quizCompleted: string;
  score: string;
  offlineReady: string;
  downloadOffline: string;
  logOut: string;
  guestUser: string;
}
