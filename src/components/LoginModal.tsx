import React, { useState } from 'react';
import { LanguageCode, UserProfile } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import { Sparkles, BookOpen, Clock, ArrowRight, User } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  selectedLanguage: LanguageCode;
  onLoginSuccess: (profile: UserProfile) => void;
  onBackToLanguage: () => void;
}

const AVATARS = ['🎓', '📖', '🧭', '🗣️', '✨', '☕'];
const GOALS = [
  { minutes: 5, label: '5 min / day', desc: 'Casual brushup' },
  { minutes: 15, label: '15 min / day', desc: 'Recommended pace' },
  { minutes: 30, label: '30 min / day', desc: 'Intensive immersion' },
];

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  selectedLanguage,
  onLoginSuccess,
  onBackToLanguage,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState(AVATARS[0]);
  const [goalMinutes, setGoalMinutes] = useState(15);

  if (!isOpen) return null;

  const langInfo = LANGUAGES[selectedLanguage];
  const ui = UI_TRANSLATIONS[selectedLanguage];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = name.trim() || 'Learner';
    const profile: UserProfile = {
      id: 'student_' + Date.now(),
      name: finalName,
      email: email.trim() || undefined,
      avatar,
      dailyGoalMinutes: goalMinutes,
      selectedLanguage,
      createdAt: new Date().toISOString(),
    };
    onLoginSuccess(profile);
  };

  const handleGuestLogin = () => {
    const profile: UserProfile = {
      id: 'guest_' + Date.now(),
      name: 'Guest Learner',
      avatar: '🎓',
      dailyGoalMinutes: 15,
      selectedLanguage,
      createdAt: new Date().toISOString(),
    };
    onLoginSuccess(profile);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#faf8f5] rounded-2xl shadow-2xl border border-amber-900/10 p-6 md:p-8 overflow-hidden">
        {/* Accent top bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-amber-500 to-sky-600" />

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold mb-2">
            <span>{langInfo.greeting}!</span>
            <span>·</span>
            <span>Step 2 of 2: Learner Setup</span>
          </div>
          <h2 className="text-2xl font-bold font-heading text-slate-900">
            Welcome to {ui.appTitle}
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Learning {langInfo.name} ({langInfo.nativeName}) · Track your streak, saved words, and quizzes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Student Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Your Name / Nickname
            </label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Arjun, Maya, Dev..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
              />
              <User className="absolute right-3 top-2.5 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Email (Optional) */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-slate-700">
                Email Address
              </label>
              <span className="text-[11px] text-slate-400">Optional (for progress sync)</span>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="learner@example.com"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
            />
          </div>

          {/* Choose Avatar */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Choose Study Avatar
            </label>
            <div className="flex items-center gap-2">
              {AVATARS.map((av) => (
                <button
                  key={av}
                  type="button"
                  onClick={() => setAvatar(av)}
                  className={`w-10 h-10 rounded-xl text-lg flex items-center justify-center transition-all cursor-pointer ${
                    avatar === av
                      ? 'bg-emerald-100 border-2 border-emerald-700 scale-105 shadow-sm'
                      : 'bg-white border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {av}
                </button>
              ))}
            </div>
          </div>

          {/* Daily Study Goal */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Daily Practice Commitment
            </label>
            <div className="grid grid-cols-3 gap-2">
              {GOALS.map((g) => (
                <button
                  key={g.minutes}
                  type="button"
                  onClick={() => setGoalMinutes(g.minutes)}
                  className={`p-2 rounded-lg text-left border transition-all cursor-pointer ${
                    goalMinutes === g.minutes
                      ? 'bg-emerald-50 border-emerald-700 text-emerald-950 font-medium'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-semibold">{g.label}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{g.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-800 text-white font-medium text-sm hover:bg-emerald-900 shadow-sm transition-all cursor-pointer active:scale-98"
            >
              <span>Enter Study Room</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <button
                type="button"
                onClick={onBackToLanguage}
                className="hover:text-slate-800 underline underline-offset-2 cursor-pointer"
              >
                ← Change Language ({langInfo.name})
              </button>
              <button
                type="button"
                onClick={handleGuestLogin}
                className="font-medium text-emerald-800 hover:text-emerald-950 underline underline-offset-2 cursor-pointer"
              >
                Skip &amp; Continue as Guest
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
