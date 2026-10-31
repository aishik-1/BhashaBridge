/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CategoryId, LanguageCode, UserProfile, UserProgress } from './types';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { LanguageModal } from './components/LanguageModal';
import { AuthModal } from './components/AuthModal';
import { Dashboard } from './components/Dashboard';
import { SyllabusView } from './components/SyllabusView';
import { AlphabetLabView } from './components/AlphabetLabView';
import { GrammarLabView } from './components/GrammarLabView';
import { ReadingWritingView } from './components/ReadingWritingView';
import { ListeningSpeakingView } from './components/ListeningSpeakingView';
import { MockExamView } from './components/MockExamView';
import { RoadmapView } from './components/RoadmapView';
import { LiteratureView } from './components/LiteratureView';
import { WorksheetsView } from './components/WorksheetsView';
import { ResourcesView } from './components/ResourcesView';
import { AITutorView } from './components/AITutorView';
import { CertificateModal } from './components/CertificateModal';
import { LessonLibrary } from './components/LessonLibrary';
import { VocabularyView } from './components/VocabularyView';
import { DictionaryView } from './components/DictionaryView';
import { QuizView } from './components/QuizView';
import { SentenceBuilderView } from './components/SentenceBuilderView';
import { FloatingVoiceAssistant } from './components/FloatingVoiceAssistant';
import { storageService } from './services/storage';

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>('hi');
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [progress, setProgress] = useState<UserProgress>(storageService.getProgress());

  // Modal Flow States
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);
  const [isStudyMode, setIsStudyMode] = useState(false);

  // Current view in study mode
  const [currentView, setCurrentView] = useState<string>('landing');
  const [activeCategoryId, setActiveCategoryId] = useState<CategoryId | undefined>(undefined);

  // Initialize stored profile and progress
  useEffect(() => {
    const savedProfile = storageService.getProfile();
    if (savedProfile) {
      setProfile(savedProfile);
      setSelectedLanguage(savedProfile.selectedLanguage || 'hi');
    }
  }, []);

  // Handler: User clicks "Enter Hub"
  const handleStartLearningFlow = () => {
    if (!profile) {
      setIsAuthModalOpen(true);
    } else {
      setIsStudyMode(true);
      setCurrentView('dashboard');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handler: Direct click on one of the 3 languages in the Landing Page showcase
  const handleSelectLanguageDirect = (lang: LanguageCode) => {
    setSelectedLanguage(lang);
    if (!profile) {
      setIsAuthModalOpen(true);
    } else {
      const updated = { ...profile, selectedLanguage: lang };
      setProfile(updated);
      storageService.saveProfile(updated);
      setIsStudyMode(true);
      setCurrentView('dashboard');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handler: Language selected inside the Language Modal
  const handleLanguageChosen = (lang: LanguageCode) => {
    setSelectedLanguage(lang);
    setIsLanguageModalOpen(false);

    if (!profile) {
      setIsAuthModalOpen(true);
    } else {
      const updated = { ...profile, selectedLanguage: lang };
      setProfile(updated);
      storageService.saveProfile(updated);
      setIsStudyMode(true);
      setCurrentView('dashboard');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handler: Student finishes login or signup
  const handleAuthSuccess = (newProfile: UserProfile) => {
    setProfile(newProfile);
    storageService.saveProfile(newProfile);
    setSelectedLanguage(newProfile.selectedLanguage || 'hi');
    setIsAuthModalOpen(false);
    setIsStudyMode(true);
    setCurrentView('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler: Navigation across study views
  const handleNavigate = (view: string, categoryId?: CategoryId) => {
    if (categoryId) {
      setActiveCategoryId(categoryId);
    }
    if (view === 'landing') {
      setIsStudyMode(false);
      setCurrentView('landing');
    } else {
      setIsStudyMode(true);
      setCurrentView(view);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Vocabulary handlers
  const handleToggleLearned = (id: string) => {
    storageService.toggleLearnedWord(id);
    setProgress(storageService.getProgress());
  };

  const handleToggleSaved = (id: string) => {
    storageService.toggleSavedWord(id);
    setProgress(storageService.getProgress());
  };

  const handleRecordQuizScore = (quizId: string, score: number, total: number) => {
    storageService.recordQuizScore(quizId, score, total);
    setProgress(storageService.getProgress());
  };

  // Handler: Instant Language Space Switcher from top navigation or roadmap
  const handleSelectLanguageSpace = (lang: LanguageCode) => {
    setSelectedLanguage(lang);
    if (profile) {
      const updated = { ...profile, selectedLanguage: lang };
      setProfile(updated);
      storageService.saveProfile(updated);
    }
  };

  const defaultProfile: UserProfile = profile || {
    id: 'guest',
    name: 'Learner',
    avatar: '🎓',
    dailyGoalMinutes: 15,
    selectedLanguage,
    selectedLevel: 'beginner',
    xp: 420,
    createdAt: new Date().toISOString(),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#011425] text-[#f0f4f9] font-averta">
      {/* Top Bar Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={handleSelectLanguageSpace}
        onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
        profile={profile}
        progress={progress}
        isStudyMode={isStudyMode}
        onExitStudyMode={() => {
          storageService.logout();
          setProfile(null);
          setIsStudyMode(false);
          setCurrentView('landing');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onEnterStudyMode={handleStartLearningFlow}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {!isStudyMode || currentView === 'landing' ? (
          <LandingPage
            onStartLearning={handleStartLearningFlow}
            onSelectLanguageDirect={handleSelectLanguageDirect}
          />
        ) : currentView === 'dashboard' ? (
          <Dashboard
            selectedLanguage={selectedLanguage}
            profile={defaultProfile}
            progress={progress}
            onNavigate={handleNavigate}
            onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
            onOpenCertificateModal={() => setIsCertificateModalOpen(true)}
            onSelectLanguage={handleSelectLanguageSpace}
          />
        ) : currentView === 'syllabus' ? (
          <SyllabusView
            selectedLanguage={selectedLanguage}
            onNavigate={handleNavigate}
          />
        ) : currentView === 'roadmap' ? (
          <RoadmapView
            selectedLanguage={selectedLanguage}
            onNavigate={handleNavigate}
            onSelectLanguage={handleSelectLanguageSpace}
          />
        ) : currentView === 'dictionary' ? (
          <DictionaryView
            selectedLanguage={selectedLanguage}
            onSelectLanguage={handleSelectLanguageSpace}
            progress={progress}
            onToggleSavedWord={handleToggleSaved}
          />
        ) : currentView === 'alphabet' ? (
          <AlphabetLabView selectedLanguage={selectedLanguage} />
        ) : currentView === 'grammar' ? (
          <GrammarLabView selectedLanguage={selectedLanguage} />
        ) : currentView === 'reading-writing' ? (
          <ReadingWritingView selectedLanguage={selectedLanguage} />
        ) : currentView === 'listening-speaking' ? (
          <ListeningSpeakingView selectedLanguage={selectedLanguage} />
        ) : currentView === 'mock-exam' ? (
          <MockExamView
            selectedLanguage={selectedLanguage}
            onOpenCertificateModal={() => setIsCertificateModalOpen(true)}
          />
        ) : currentView === 'literature' ? (
          <LiteratureView selectedLanguage={selectedLanguage} />
        ) : currentView === 'worksheets' ? (
          <WorksheetsView selectedLanguage={selectedLanguage} />
        ) : currentView === 'resources' ? (
          <ResourcesView selectedLanguage={selectedLanguage} />
        ) : currentView === 'ai-tutor' ? (
          <AITutorView selectedLanguage={selectedLanguage} />
        ) : currentView === 'lessons' ? (
          <LessonLibrary
            selectedLanguage={selectedLanguage}
            progress={progress}
            onSelectCategory={(catId) => handleNavigate('vocabulary', catId)}
            onTakeCategoryQuiz={(catId) => handleNavigate('quizzes', catId)}
          />
        ) : currentView === 'vocabulary' ? (
          <VocabularyView
            selectedLanguage={selectedLanguage}
            initialCategory={activeCategoryId}
            progress={progress}
            onToggleLearned={handleToggleLearned}
            onToggleSaved={handleToggleSaved}
          />
        ) : currentView === 'quizzes' ? (
          <QuizView
            selectedLanguage={selectedLanguage}
            initialCategoryId={activeCategoryId}
            onRecordScore={handleRecordQuizScore}
          />
        ) : currentView === 'sentence-builder' ? (
          <SentenceBuilderView selectedLanguage={selectedLanguage} />
        ) : (
          <Dashboard
            selectedLanguage={selectedLanguage}
            profile={defaultProfile}
            progress={progress}
            onNavigate={handleNavigate}
            onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
            onOpenCertificateModal={() => setIsCertificateModalOpen(true)}
          />
        )}
      </main>

      {/* Language Selection Modal Pop-up */}
      <LanguageModal
        isOpen={isLanguageModalOpen}
        currentSelected={selectedLanguage}
        onSelect={handleLanguageChosen}
        onClose={() => setIsLanguageModalOpen(false)}
      />

      {/* Login / Sign Up Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        selectedLanguage={selectedLanguage}
        onLoginSuccess={handleAuthSuccess}
        onClose={() => setIsAuthModalOpen(false)}
        onSwitchLanguage={() => {
          setIsAuthModalOpen(false);
          setIsLanguageModalOpen(true);
        }}
      />

      {/* Verified Certificate Modal */}
      {isCertificateModalOpen && (
        <CertificateModal
          studentName={defaultProfile.name}
          selectedLanguage={selectedLanguage}
          score={94}
          onClose={() => setIsCertificateModalOpen(false)}
        />
      )}

      {/* Offline AI Voice Assistant Widget */}
      <FloatingVoiceAssistant />
    </div>
  );
}
