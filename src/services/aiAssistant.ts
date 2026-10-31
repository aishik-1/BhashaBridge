/**
 * Client service to communicate with the Offline/Online AI Voice Assistant.
 * Supports:
 * 1. Dedicated backend (when running locally with Python FastAPI + Ollama/MLX Whisper)
 * 2. Standalone cloud / Vercel serverless mode (using browser Web Speech API & built-in educational language knowledge)
 */

import { speechService } from './speech';
import { LanguageCode } from '../types';

export interface AssistantResponse {
  transcription?: string;
  question?: string;
  answer: string;
  audio_url?: string | null;
  language: string;
  error?: string;
}

class AIAssistantService {
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private currentAudio: HTMLAudioElement | null = null;
  private recognition: any = null;
  private lastRecognizedText: string = '';

  private getBaseUrl(): string {
    if (typeof window !== 'undefined' && window.location.port === '7860') {
      return '';
    }
    return 'http://127.0.0.1:7860';
  }

  /**
   * Generates a context-rich educational explanation when deployed on Vercel
   * or when the local backend server is unreachable.
   */
  private generateLocalEducationalAnswer(question: string, language: string): string {
    const qLower = question.toLowerCase();
    const isHindi = language.toLowerCase().includes('hindi') || /[\u0900-\u097F]/.test(question);
    const isBengali = language.toLowerCase().includes('bengali') || /[\u0980-\u09FF]/.test(question);
    const isMarathi = language.toLowerCase().includes('marathi');

    if (qLower.includes('hello') || qLower.includes('namaste') || qLower.includes('greet')) {
      if (isBengali) {
        return 'In Bengali, you say "নমস্কার" (Nômoshkar) or "সালাম" (Salam) as a polite greeting! You can follow it with "আপনি কেমন আছেন?" (Apni kemon achhen? - How are you?).';
      }
      if (isMarathi) {
        return 'In Marathi, you greet someone with "नमस्कार" (Namaskār). To ask how they are, say "तुम्ही कसे आहात?" (Tumhi kase ahat? - formal) or "तू कसा आहेस?" (Tu kasa ahes? - informal to a male).';
      }
      return 'In Hindi, standard greetings include "नमस्ते" (Namaste) or "नमस्कार" (Namaskār). To politely ask how someone is doing, say "आप कैसे हैं?" (Aap kaise hain?).';
    }

    if (qLower.includes('thank') || qLower.includes('dhanyavad')) {
      if (isBengali) {
        return 'In Bengali, say "ধন্যবাদ" (Dhonnobad). To express deeper gratitude, you can say "অসংখ্য ধন্যবাদ" (Oshongkho dhonnobad - many thanks).';
      }
      if (isMarathi) {
        return 'In Marathi, say "धन्यवाद" (Dhanyavād) or "आभार" (Ābhār) to express appreciation.';
      }
      return 'In Hindi, say "धन्यवाद" (Dhanyavād) or "शुक्रिया" (Shukriyā) for thank you!';
    }

    if (qLower.includes('water') || qLower.includes('pani') || qLower.includes('jol')) {
      if (isBengali) {
        return 'In Bengali, water is "জল" (Jol) or "পানি" (Pani). To ask for water: "আমাকে একটু জল দিন" (Amake ektu jol din - Please give me some water).';
      }
      if (isMarathi) {
        return 'In Marathi, water is "पाणी" (Pāṇī). Note the retroflex "ṇ" sound. To ask politely: "कृपया मला पाणी द्या" (Krupaya mala pani dya).';
      }
      return 'In Hindi, water is "पानी" (Pānī). Sentence example: "मुझे पानी चाहिए" (Mujhe pani chahiye - I need water).';
    }

    if (qLower.includes('name') || qLower.includes('naam')) {
      if (isBengali) {
        return 'In Bengali: "আপনার নাম কি?" (Apanar naam ki? - What is your name?) and reply with "আমার নাম..." (Aamar naam...).';
      }
      if (isMarathi) {
        return 'In Marathi: "तुमचे नाव काय आहे?" (Tumche naav kaay aahe? - What is your name?) and reply with "माझे नाव..." (Majhe naav...).';
      }
      return 'In Hindi: "आपका नाम क्या है?" (Aapka naam kya hai? - What is your name?) and respond: "मेरा नाम... है" (Mera naam... hai).';
    }

    if (qLower.includes('grammar') || qLower.includes('order') || qLower.includes('verb')) {
      return 'Indian languages like Hindi, Marathi, and Bengali follow the Subject-Object-Verb (SOV) sentence structure! For example: "I (Subject) book (Object) read (Verb)". Verbs and postpositions inflect based on gender, number, and politeness levels.';
    }

    // Default intelligent learning mentor answer
    const langLabel = isBengali ? 'Bengali (বাংলা)' : isMarathi ? 'Marathi (मराठी)' : 'Hindi (हिन्दी)';
    return `Great question! In ${langLabel}, conversational phrasing balances respect and grammatical gender. Remember the core Subject-Object-Verb (SOV) structure when composing sentences. Practicing active speech and matching verb forms with the subject will build your confidence quickly!`;
  }

  /**
   * Send a text question to the AI Teacher.
   */
  public async askTextQuestion(
    question: string,
    language: string = 'English'
  ): Promise<AssistantResponse> {
    const trimmed = question.trim();
    if (!trimmed) {
      throw new Error('Question cannot be empty.');
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      const url = `${this.getBaseUrl()}/api/assistant/chat`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmed, language }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        const data: AssistantResponse = await res.json();
        return data;
      }
    } catch {
      // Backend unavailable or timed out (e.g. running on Vercel deployment)
    }

    // Seamless fallback for Vercel cloud hosting
    const localAnswer = this.generateLocalEducationalAnswer(trimmed, language);
    let langCode: LanguageCode = 'hi';
    if (language.toLowerCase().includes('bengali') || /[\u0980-\u09FF]/.test(localAnswer)) {
      langCode = 'bn';
    } else if (language.toLowerCase().includes('marathi')) {
      langCode = 'mr';
    }

    return {
      question: trimmed,
      answer: localAnswer,
      audio_url: `speech:${langCode}:${encodeURIComponent(localAnswer)}`,
      language,
    };
  }

  /**
   * Start microphone recording in browser with Web Speech API integration.
   */
  public async startRecording(): Promise<void> {
    this.stopCurrentAudio();
    this.audioChunks = [];
    this.lastRecognizedText = '';

    // Initialize browser speech recognition if supported
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        try {
          this.recognition = new SpeechRecognition();
          this.recognition.continuous = false;
          this.recognition.interimResults = false;
          this.recognition.lang = 'en-US';
          this.recognition.onresult = (event: any) => {
            if (event.results && event.results[0] && event.results[0][0]) {
              this.lastRecognizedText = event.results[0][0].transcript;
            }
          };
          this.recognition.start();
        } catch {
          // Ignore recognition start errors
        }
      }
    }

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      if (this.lastRecognizedText) return;
      throw new Error('Microphone access is not supported in this browser.');
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      const mimeTypes = [
        'audio/webm;codecs=opus',
        'audio/webm',
        'audio/ogg;codecs=opus',
        'audio/mp4',
        'audio/wav',
      ];
      let selectedMime = '';
      for (const mime of mimeTypes) {
        if (MediaRecorder.isTypeSupported(mime)) {
          selectedMime = mime;
          break;
        }
      }

      const options = selectedMime ? { mimeType: selectedMime } : undefined;
      this.mediaRecorder = new MediaRecorder(stream, options);

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };

      this.mediaRecorder.start(100);
    } catch (err: any) {
      if (this.recognition) {
        return;
      }
      throw err;
    }
  }

  /**
   * Stop microphone recording and process speech input.
   */
  public async stopRecordingAndProcess(
    language: string = 'English'
  ): Promise<AssistantResponse> {
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch {}
    }

    return new Promise((resolve) => {
      const handleFallback = () => {
        const recognized = this.lastRecognizedText.trim() || 'Hello, can you help me practice?';
        const localAnswer = this.generateLocalEducationalAnswer(recognized, language);
        let langCode: LanguageCode = 'hi';
        if (language.toLowerCase().includes('bengali') || /[\u0980-\u09FF]/.test(localAnswer)) {
          langCode = 'bn';
        } else if (language.toLowerCase().includes('marathi')) {
          langCode = 'mr';
        }

        resolve({
          transcription: recognized,
          answer: localAnswer,
          audio_url: `speech:${langCode}:${encodeURIComponent(localAnswer)}`,
          language,
        });
      };

      if (!this.mediaRecorder) {
        handleFallback();
        return;
      }

      this.mediaRecorder.onstop = async () => {
        try {
          this.mediaRecorder?.stream.getTracks().forEach((track) => track.stop());

          const blob = new Blob(this.audioChunks, {
            type: this.mediaRecorder?.mimeType || 'audio/webm',
          });

          if (blob.size === 0) {
            handleFallback();
            return;
          }

          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 4000);

          const formData = new FormData();
          formData.append('audio', blob, 'recording.webm');
          formData.append('language', language);

          const url = `${this.getBaseUrl()}/api/assistant/voice`;
          const res = await fetch(url, {
            method: 'POST',
            body: formData,
            signal: controller.signal,
          });

          clearTimeout(timeoutId);

          if (res.ok) {
            const data = await res.json();
            resolve(data as AssistantResponse);
            return;
          }
        } catch {
          // Backend offline or timeout
        }

        handleFallback();
      };

      try {
        this.mediaRecorder.stop();
      } catch {
        handleFallback();
      }
    });
  }

  /**
   * Play synthesized speech audio returned from backend or via Web Speech.
   */
  public playAudio(audioUrl: string, onEnd?: () => void): void {
    this.stopCurrentAudio();

    // Check for speech synthesis fallback scheme: "speech:<lang>:<text>"
    if (audioUrl.startsWith('speech:')) {
      const parts = audioUrl.split(':');
      const lang = (parts[1] as LanguageCode) || 'hi';
      const text = decodeURIComponent(parts.slice(2).join(':'));
      const played = speechService.speak(text, lang, false, undefined, onEnd);
      if (!played && onEnd) {
        onEnd();
      }
      return;
    }

    const fullUrl = audioUrl.startsWith('http') ? audioUrl : `${this.getBaseUrl()}${audioUrl}`;
    this.currentAudio = new Audio(fullUrl);
    if (onEnd) {
      this.currentAudio.onended = onEnd;
      this.currentAudio.onerror = () => {
        if (onEnd) onEnd();
      };
    }
    this.currentAudio.play().catch((err) => {
      console.warn('Audio playback error:', err);
      if (onEnd) onEnd();
    });
  }

  /**
   * Immediately silence any playing audio.
   */
  public stopCurrentAudio(): void {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    speechService.stop();

    try {
      fetch(`${this.getBaseUrl()}/api/assistant/stop-audio`, { method: 'POST' }).catch(() => {});
    } catch {}
  }
}

export const aiAssistantService = new AIAssistantService();
