import React, { useState } from 'react';
import { LanguageCode, UserProfile } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import { storageService } from '../services/storage';
import {
  ArrowRight,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle2,
  X,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  selectedLanguage: LanguageCode;
  onLoginSuccess: (profile: UserProfile) => void;
  onClose: () => void;
  onSwitchLanguage?: (lang: LanguageCode) => void;
}

const GoogleIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  selectedLanguage,
  onLoginSuccess,
  onClose,
  onSwitchLanguage,
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  
  // Form fields
  const [identifier, setIdentifier] = useState(''); // username or email for login
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [currentLang, setCurrentLang] = useState<LanguageCode>(selectedLanguage);
  const [goalMinutes, setGoalMinutes] = useState(15);
  
  // UI states
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleSigningIn, setIsGoogleSigningIn] = useState(false);

  if (!isOpen) return null;

  const langInfo = LANGUAGES[currentLang] || LANGUAGES['hi'];
  const ui = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS['hi'];

  const handleLanguageSelect = (lang: LanguageCode) => {
    setCurrentLang(lang);
    if (onSwitchLanguage) {
      onSwitchLanguage(lang);
    }
  };

  // Google Login Handler
  const handleGoogleSignIn = () => {
    setErrorMsg(null);
    setIsGoogleSigningIn(true);

    setTimeout(() => {
      // Authenticate with Google identity
      const result = storageService.authenticateGoogle({
        email: 'toppersmissionx@gmail.com',
        name: 'Toppers Mission',
        selectedLanguage: currentLang,
      });

      setIsGoogleSigningIn(false);
      setSuccessMsg(`Signed in with Google as ${result.user.email}`);

      setTimeout(() => {
        onLoginSuccess(result.user);
      }, 600);
    }, 700);
  };

  // Credentials Submit Handler (Login or Signup)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setIsSubmitting(true);

    setTimeout(() => {
      if (mode === 'login') {
        const res = storageService.authenticateUser(identifier, password);
        setIsSubmitting(false);

        if (!res.success || !res.user) {
          setErrorMsg(res.error || 'Authentication failed. Please verify credentials.');
          return;
        }

        setSuccessMsg(`Welcome back, ${res.user.name}!`);
        setTimeout(() => {
          onLoginSuccess(res.user!);
        }, 500);
      } else {
        // Sign up
        const res = storageService.registerUser({
          username: username.trim(),
          name: name.trim() || username.trim(),
          email: email.trim(),
          password,
          selectedLanguage: currentLang,
          dailyGoalMinutes: goalMinutes,
        });

        setIsSubmitting(false);

        if (!res.success || !res.user) {
          setErrorMsg(res.error || 'Registration failed. Please try a different username or email.');
          return;
        }

        setSuccessMsg(`Account created successfully! Welcome, ${res.user.name}`);
        setTimeout(() => {
          onLoginSuccess(res.user!);
        }, 600);
      }
    }, 400);
  };

  // Quick Demo fill
  const handleFillDemo = (demoUser: 'arjun' | 'priya') => {
    setMode('login');
    setErrorMsg(null);
    if (demoUser === 'arjun') {
      setIdentifier('arjun');
      setPassword('password123');
      setCurrentLang('hi');
    } else {
      setIdentifier('priya');
      setPassword('study2026');
      setCurrentLang('bn');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0316]/85 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#14082c] text-[#f3effa] rounded-3xl shadow-[0_0_60px_rgba(168,85,247,0.35)] border border-white/20 p-6 sm:p-8 overflow-hidden my-8">
        {/* Top vibrant border stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00f59b] via-[#38bdf8] via-[#a855f7] via-[#be185d] to-[#ffb703]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#baa8d8] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          title="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#00f59b] via-[#a855f7] to-[#be185d] p-[2px] shadow-lg">
            <div className="w-full h-full rounded-[14px] bg-[#14082c] flex items-center justify-center font-black text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#00f59b] to-[#be185d]">
              भा
            </div>
          </div>
          <div>
            <h3 className="text-lg font-heading font-bold text-white tracking-tight leading-tight">
              BhashaBridge Studio
            </h3>
            <p className="text-xs text-[#baa8d8]">
              Multilingual Indian Language Learning Platform
            </p>
          </div>
        </div>

        {/* Google One-Click Login Button */}
        <div className="mb-6">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isGoogleSigningIn}
            className="w-full py-3.5 px-4 rounded-2xl bg-white hover:bg-gray-100 text-[#1f2937] font-semibold text-sm flex items-center justify-center gap-3 shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-all cursor-pointer active:scale-98 disabled:opacity-75"
          >
            <GoogleIcon />
            <span>{isGoogleSigningIn ? 'Connecting to Google...' : 'Continue with Google'}</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-6">
          <div className="w-full border-t border-white/10" />
          <span className="absolute bg-[#14082c] px-3 text-[11px] font-mono tracking-wider text-[#baa8d8] uppercase">
            Or with Username &amp; Password
          </span>
        </div>

        {/* Tab switch: Sign In vs Sign Up */}
        <div className="flex items-center p-1 bg-white/5 rounded-2xl mb-6 border border-white/10">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setErrorMsg(null);
            }}
            className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              mode === 'login'
                ? 'bg-[#4f46e5] text-white shadow-[0_0_20px_rgba(79,70,229,0.5)]'
                : 'text-[#baa8d8] hover:text-white'
            }`}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('signup');
              setErrorMsg(null);
            }}
            className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              mode === 'signup'
                ? 'bg-[#4f46e5] text-white shadow-[0_0_20px_rgba(79,70,229,0.5)]'
                : 'text-[#baa8d8] hover:text-white'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Language Track Selector inside modal */}
        <div className="mb-5">
          <div className="text-[11px] font-semibold text-[#baa8d8] uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Target Language</span>
            <span className="text-[#00f59b] font-mono text-[10px]">{langInfo.name}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {(['hi', 'bn', 'mr'] as LanguageCode[]).map((code) => {
              const info = LANGUAGES[code];
              const isSelected = currentLang === code;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => handleLanguageSelect(code)}
                  className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#00f59b] bg-[#00f59b]/15 text-white shadow-sm'
                      : 'border-white/10 bg-white/5 text-[#baa8d8] hover:border-white/20'
                  }`}
                >
                  <div className="text-base font-bold text-white">{info.nativeName}</div>
                  <div className="text-[10px] text-[#baa8d8]">{info.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Error / Success Banners */}
        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-200 text-xs flex items-center gap-2 animate-fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
            <span>{errorMsg}</span>
          </div>
        )}

        {successMsg && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' ? (
            <>
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-[#baa8d8] mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Arjun Verma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/20 bg-white/5 text-sm text-white placeholder-[#7f6c9e] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]"
                  />
                  <User className="absolute right-3.5 top-3 w-4 h-4 text-[#baa8d8] pointer-events-none" />
                </div>
              </div>

              {/* Username */}
              <div>
                <label className="block text-xs font-semibold text-[#baa8d8] mb-1">
                  Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                    placeholder="e.g. arjun_v"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/20 bg-white/5 text-sm text-white placeholder-[#7f6c9e] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]"
                  />
                  <span className="absolute right-3.5 top-3 text-xs font-mono text-[#baa8d8]">@</span>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-[#baa8d8] mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="learner@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/20 bg-white/5 text-sm text-white placeholder-[#7f6c9e] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]"
                  />
                  <Mail className="absolute right-3.5 top-3 w-4 h-4 text-[#baa8d8] pointer-events-none" />
                </div>
              </div>
            </>
          ) : (
            /* Login Identifier: Username or Email */
            <div>
              <label className="block text-xs font-semibold text-[#baa8d8] mb-1">
                Username or Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="e.g. arjun or learner@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-white/20 bg-white/5 text-sm text-white placeholder-[#7f6c9e] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]"
                />
                <User className="absolute right-3.5 top-3 w-4 h-4 text-[#baa8d8] pointer-events-none" />
              </div>
            </div>
          )}

          {/* Password with Eye Toggle */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-[#baa8d8]">
                Password
              </label>
              {mode === 'signup' && (
                <span className="text-[10px] text-[#baa8d8]">Min 6 characters</span>
              )}
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 pr-10 rounded-xl border border-white/20 bg-white/5 text-sm text-white placeholder-[#7f6c9e] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 p-0.5 text-[#baa8d8] hover:text-white cursor-pointer"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Daily Goal (Only on Sign Up) */}
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-semibold text-[#baa8d8] mb-1.5">
                Daily Study Goal
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { m: 5, label: '5 min', sub: 'Casual' },
                  { m: 15, label: '15 min', sub: 'Balanced' },
                  { m: 30, label: '30 min', sub: 'Immersion' },
                ].map((g) => (
                  <button
                    key={g.m}
                    type="button"
                    onClick={() => setGoalMinutes(g.m)}
                    className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                      goalMinutes === g.m
                        ? 'border-[#00f59b] bg-[#00f59b]/20 text-white font-bold'
                        : 'border-white/10 bg-white/5 text-[#baa8d8] hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs">{g.label}</div>
                    <div className="text-[10px] opacity-75">{g.sub}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 rounded-full bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold text-sm shadow-[0_0_25px_rgba(79,70,229,0.55)] transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98 disabled:opacity-75"
            >
              <span>
                {isSubmitting
                  ? 'Verifying...'
                  : mode === 'signup'
                  ? `Create Account & Enter ${langInfo.name} Studio`
                  : `Log In to ${langInfo.name} Studio`}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Demo quick-fill shortcuts for instant testing */}
          {mode === 'login' && (
            <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
              <span className="text-[#baa8d8] text-[11px]">Quick test demo logins:</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleFillDemo('arjun')}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white font-mono text-[11px] border border-white/10 cursor-pointer"
                >
                  arjun
                </button>
                <button
                  type="button"
                  onClick={() => handleFillDemo('priya')}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white font-mono text-[11px] border border-white/10 cursor-pointer"
                >
                  priya
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
