import { LanguageCode, RegisteredUser, UserProfile, UserProgress } from '../types';

const STORAGE_KEYS = {
  USER_PROFILE: 'bhashabridge_user_profile',
  USER_PROGRESS: 'bhashabridge_user_progress',
  OFFLINE_PACKS: 'bhashabridge_offline_packs',
  REGISTERED_USERS: 'bhashabridge_registered_users',
};

const SEED_USERS: RegisteredUser[] = [
  {
    id: 'user_arjun_01',
    username: 'arjun',
    name: 'Arjun Verma',
    email: 'arjun.verma@example.com',
    passwordHash: 'password123',
    avatar: '👨‍🎓',
    selectedLanguage: 'hi',
    dailyGoalMinutes: 15,
    createdAt: '2026-01-15T10:00:00.000Z',
    authProvider: 'credentials',
  },
  {
    id: 'user_priya_02',
    username: 'priya',
    name: 'Priya Sen',
    email: 'priya.sen@example.com',
    passwordHash: 'study2026',
    avatar: '👩‍🏫',
    selectedLanguage: 'bn',
    dailyGoalMinutes: 20,
    createdAt: '2026-02-01T12:00:00.000Z',
    authProvider: 'credentials',
  },
  {
    id: 'user_rohit_03',
    username: 'rohit',
    name: 'Rohit Joshi',
    email: 'rohit.joshi@example.com',
    passwordHash: 'bhasha2026',
    avatar: '🚀',
    selectedLanguage: 'mr',
    dailyGoalMinutes: 15,
    createdAt: '2026-02-10T14:30:00.000Z',
    authProvider: 'credentials',
  },
];

const DEFAULT_PROFILE: UserProfile = {
  id: 'guest-learner',
  name: 'Learner',
  avatar: '🎓',
  dailyGoalMinutes: 15,
  selectedLanguage: 'hi',
  createdAt: new Date().toISOString(),
  authProvider: 'guest',
};

const DEFAULT_PROGRESS: UserProgress = {
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  learnedWordIds: ['hi-greet-1', 'hi-food-1'],
  savedWordIds: ['hi-greet-2'],
  completedLessonIds: ['greetings'],
  quizScores: [],
  todayMinutesSpent: 6,
};

export const storageService = {
  getRegisteredUsers(): RegisteredUser[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.REGISTERED_USERS);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.REGISTERED_USERS, JSON.stringify(SEED_USERS));
        return SEED_USERS;
      }
      return JSON.parse(data);
    } catch {
      return SEED_USERS;
    }
  },

  registerUser(userData: {
    username: string;
    name: string;
    email: string;
    password: string;
    selectedLanguage: LanguageCode;
    dailyGoalMinutes?: number;
    avatar?: string;
  }): { success: boolean; user?: UserProfile; error?: string } {
    const users = this.getRegisteredUsers();
    const cleanUsername = userData.username.trim().toLowerCase();
    const cleanEmail = userData.email.trim().toLowerCase();

    if (!cleanUsername || cleanUsername.length < 3) {
      return { success: false, error: 'Username must be at least 3 characters' };
    }
    if (!cleanEmail || !cleanEmail.includes('@')) {
      return { success: false, error: 'Please enter a valid email address' };
    }
    if (!userData.password || userData.password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters' };
    }

    const usernameExists = users.some((u) => u.username.toLowerCase() === cleanUsername);
    if (usernameExists) {
      return { success: false, error: 'An account with this username already exists' };
    }

    const emailExists = users.some((u) => u.email.toLowerCase() === cleanEmail);
    if (emailExists) {
      return { success: false, error: 'An account with this email already exists' };
    }

    const newUser: RegisteredUser = {
      id: 'user_' + Date.now(),
      username: cleanUsername,
      name: userData.name.trim() || cleanUsername,
      email: cleanEmail,
      passwordHash: userData.password,
      avatar: userData.avatar || '🎓',
      selectedLanguage: userData.selectedLanguage || 'hi',
      dailyGoalMinutes: userData.dailyGoalMinutes || 15,
      createdAt: new Date().toISOString(),
      authProvider: 'credentials',
    };

    users.push(newUser);
    try {
      localStorage.setItem(STORAGE_KEYS.REGISTERED_USERS, JSON.stringify(users));
    } catch (e) {
      console.warn('Failed to save registered user', e);
    }

    const profile: UserProfile = {
      id: newUser.id,
      name: newUser.name,
      username: newUser.username,
      email: newUser.email,
      avatar: newUser.avatar,
      dailyGoalMinutes: newUser.dailyGoalMinutes,
      selectedLanguage: newUser.selectedLanguage,
      createdAt: newUser.createdAt,
      authProvider: 'credentials',
    };

    this.saveProfile(profile);
    return { success: true, user: profile };
  },

  authenticateUser(identifier: string, password: string): { success: boolean; user?: UserProfile; error?: string } {
    const cleanId = identifier.trim().toLowerCase();
    const cleanPw = password.trim();

    if (!cleanId || !cleanPw) {
      return { success: false, error: 'Please enter your username/email and password' };
    }

    const users = this.getRegisteredUsers();
    const found = users.find((u) =>
      u.username.toLowerCase() === cleanId || u.email.toLowerCase() === cleanId
    );

    if (!found) {
      return { success: false, error: 'No account found with this username or email' };
    }

    if (found.passwordHash !== cleanPw) {
      return { success: false, error: 'Incorrect password. Please try again.' };
    }

    const profile: UserProfile = {
      id: found.id,
      name: found.name,
      username: found.username,
      email: found.email,
      avatar: found.avatar,
      dailyGoalMinutes: found.dailyGoalMinutes,
      selectedLanguage: found.selectedLanguage,
      createdAt: found.createdAt,
      authProvider: 'credentials',
    };

    this.saveProfile(profile);
    return { success: true, user: profile };
  },

  authenticateGoogle(googleData?: { name?: string; email?: string; avatar?: string; selectedLanguage?: LanguageCode }): { success: boolean; user: UserProfile } {
    const email = googleData?.email || 'toppersmissionx@gmail.com';
    const name = googleData?.name || email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
    const username = email.split('@')[0].toLowerCase();
    const avatar = googleData?.avatar || '🌟';

    const users = this.getRegisteredUsers();
    let existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

    if (!existing) {
      existing = {
        id: 'google_' + Date.now(),
        username,
        name,
        email,
        passwordHash: 'google_oauth_token',
        avatar,
        selectedLanguage: googleData?.selectedLanguage || 'hi',
        dailyGoalMinutes: 15,
        createdAt: new Date().toISOString(),
        authProvider: 'google',
      };
      users.push(existing);
      try {
        localStorage.setItem(STORAGE_KEYS.REGISTERED_USERS, JSON.stringify(users));
      } catch (e) {
        console.warn('Failed to save google user', e);
      }
    }

    const profile: UserProfile = {
      id: existing.id,
      name: existing.name,
      username: existing.username,
      email: existing.email,
      avatar: existing.avatar,
      dailyGoalMinutes: existing.dailyGoalMinutes,
      selectedLanguage: existing.selectedLanguage,
      createdAt: existing.createdAt,
      authProvider: 'google',
    };

    this.saveProfile(profile);
    return { success: true, user: profile };
  },

  logout(): void {
    try {
      localStorage.removeItem(STORAGE_KEYS.USER_PROFILE);
    } catch (e) {
      console.warn('Logout error', e);
    }
  },

  getProfile(): UserProfile | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  saveProfile(profile: UserProfile): void {
    try {
      localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
    } catch (e) {
      console.warn('Storage save error', e);
    }
  },

  getProgress(): UserProgress {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.USER_PROGRESS);
      if (!data) return DEFAULT_PROGRESS;
      const progress: UserProgress = JSON.parse(data);

      // Verify and update streak
      const today = new Date().toISOString().split('T')[0];
      const lastActive = progress.lastActiveDate;
      if (lastActive !== today) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        if (lastActive === yesterday) {
          progress.streakDays += 1;
        } else if (lastActive < yesterday) {
          progress.streakDays = 1;
        }
        progress.lastActiveDate = today;
        progress.todayMinutesSpent = 0;
        this.saveProgress(progress);
      }
      return progress;
    } catch {
      return DEFAULT_PROGRESS;
    }
  },

  saveProgress(progress: UserProgress): void {
    try {
      localStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify(progress));
    } catch (e) {
      console.warn('Storage save error', e);
    }
  },

  toggleLearnedWord(wordId: string): boolean {
    const progress = this.getProgress();
    const index = progress.learnedWordIds.indexOf(wordId);
    let isNowLearned = false;
    if (index >= 0) {
      progress.learnedWordIds.splice(index, 1);
      isNowLearned = false;
    } else {
      progress.learnedWordIds.push(wordId);
      isNowLearned = true;
      progress.todayMinutesSpent = (progress.todayMinutesSpent || 0) + 1;
    }
    this.saveProgress(progress);
    return isNowLearned;
  },

  toggleSavedWord(wordId: string): boolean {
    const progress = this.getProgress();
    const index = progress.savedWordIds.indexOf(wordId);
    let isNowSaved = false;
    if (index >= 0) {
      progress.savedWordIds.splice(index, 1);
      isNowSaved = false;
    } else {
      progress.savedWordIds.push(wordId);
      isNowSaved = true;
    }
    this.saveProgress(progress);
    return isNowSaved;
  },

  recordQuizScore(quizId: string, score: number, total: number): void {
    const progress = this.getProgress();
    progress.quizScores.push({
      quizId,
      score,
      total,
      date: new Date().toISOString(),
    });
    progress.todayMinutesSpent = (progress.todayMinutesSpent || 0) + 3;
    this.saveProgress(progress);
  },

  markLessonCompleted(categoryId: string): void {
    const progress = this.getProgress();
    if (!progress.completedLessonIds.includes(categoryId)) {
      progress.completedLessonIds.push(categoryId);
      this.saveProgress(progress);
    }
  },

  isOfflinePackDownloaded(lang: LanguageCode): boolean {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.OFFLINE_PACKS);
      if (!data) return false;
      const packs: Record<string, boolean> = JSON.parse(data);
      return !!packs[lang];
    } catch {
      return false;
    }
  },

  setOfflinePackDownloaded(lang: LanguageCode, downloaded: boolean): void {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.OFFLINE_PACKS);
      const packs: Record<string, boolean> = data ? JSON.parse(data) : {};
      packs[lang] = downloaded;
      localStorage.setItem(STORAGE_KEYS.OFFLINE_PACKS, JSON.stringify(packs));
    } catch (e) {
      console.warn('Storage save error', e);
    }
  },
};
