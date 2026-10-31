import { LanguageCode } from '../types';

class SpeechService {
  private isSupported: boolean;
  private voices: SpeechSynthesisVoice[] = [];

  constructor() {
    this.isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;
    if (this.isSupported) {
      this.loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices(): void {
    if (!this.isSupported) return;
    this.voices = window.speechSynthesis.getVoices();
  }

  public getAvailableVoice(language: LanguageCode): SpeechSynthesisVoice | null {
    if (!this.isSupported) return null;
    if (this.voices.length === 0) {
      this.loadVoices();
    }

    const langTags: Record<LanguageCode, string[]> = {
      hi: ['hi-IN', 'hi_IN', 'hi'],
      bn: ['bn-IN', 'bn_BD', 'bn-BD', 'bn'],
      mr: ['mr-IN', 'mr_IN', 'mr'],
    };

    const targetTags = langTags[language] || [];
    for (const tag of targetTags) {
      const match = this.voices.find(v => v.lang.toLowerCase() === tag.toLowerCase() || v.lang.toLowerCase().startsWith(tag.toLowerCase()));
      if (match) return match;
    }

    // Generic fallback: check if any voice has language name in its name
    const langNames: Record<LanguageCode, string> = {
      hi: 'hindi',
      bn: 'bengali',
      mr: 'marathi',
    };
    const nameMatch = this.voices.find(v => v.name.toLowerCase().includes(langNames[language]));
    return nameMatch || null;
  }

  public speak(
    text: string,
    language: LanguageCode,
    isSlow: boolean = false,
    onStart?: () => void,
    onEnd?: () => void
  ): boolean {
    if (!this.isSupported) {
      return false;
    }

    try {
      window.speechSynthesis.cancel(); // Stop any pending speech

      const utterance = new SpeechSynthesisUtterance(text);
      const voice = this.getAvailableVoice(language);
      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      } else {
        const fallbackLangs: Record<LanguageCode, string> = {
          hi: 'hi-IN',
          bn: 'bn-IN',
          mr: 'mr-IN',
        };
        utterance.lang = fallbackLangs[language];
      }

      utterance.rate = isSlow ? 0.7 : 0.95;
      utterance.pitch = 1.0;

      if (onStart) utterance.onstart = onStart;
      if (onEnd) {
        utterance.onend = onEnd;
        utterance.onerror = onEnd;
      }

      window.speechSynthesis.speak(utterance);
      return true;
    } catch {
      if (onEnd) onEnd();
      return false;
    }
  }

  public stop(): void {
    if (this.isSupported) {
      window.speechSynthesis.cancel();
    }
  }

  public checkSupport(): { supported: boolean; hasVoiceFor: (lang: LanguageCode) => boolean } {
    return {
      supported: this.isSupported,
      hasVoiceFor: (lang: LanguageCode) => !!this.getAvailableVoice(lang),
    };
  }
}

export const speechService = new SpeechService();
