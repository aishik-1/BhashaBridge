import React, { useState } from 'react';
import { LanguageCode } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import { ThemeBackground, SparkleStar } from './ThemeBackground';
import {
  Bot,
  Send,
  Sparkles,
  Coffee,
  ShoppingBag,
  Train,
  Volume2,
  Mic,
  MicOff,
  Loader2,
  Square
} from 'lucide-react';
import { speechService } from '../services/speech';
import { aiAssistantService } from '../services/aiAssistant';

interface AITutorViewProps {
  selectedLanguage: LanguageCode;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'tutor';
  text: string;
  nativeHighlight?: string;
  grammarTip?: string;
  audioUrl?: string | null;
}

export const AITutorView: React.FC<AITutorViewProps> = ({
  selectedLanguage,
}) => {
  const lang = LANGUAGES[selectedLanguage] || LANGUAGES['hi'];
  const ui = UI_TRANSLATIONS[selectedLanguage] || UI_TRANSLATIONS['hi'];

  const [activeMode, setActiveMode] = useState<'qna' | 'simulator'>('qna');
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [recordingStatus, setRecordingStatus] = useState<string>('');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'tutor',
      text: `Hello! I am your Offline AI Educational Tutor. You can tap the microphone to speak your question aloud, or type it below. I will provide fast, factual answers and speak them to you!`,
      grammarTip: 'Try asking: "What is photosynthesis?", "Who was the first person on the moon?", or "10 plus 15".'
    }
  ]);

  // Scenarios for conversation simulator
  const scenarios = [
    {
      id: 'cafe',
      title: 'Ordering Chai & Snacks at a Local Stall',
      icon: Coffee,
      starter: 'Namaste! Please give me one cup of special tea and two samosas.'
    },
    {
      id: 'travel',
      title: 'Hiring a Cab or Auto-Rickshaw',
      icon: Train,
      starter: 'Excuse me, will you go to the railway station? How much by the meter?'
    },
    {
      id: 'market',
      title: 'Bargaining at the Traditional Market',
      icon: ShoppingBag,
      starter: 'These apples seem a bit expensive. Can you give a discount?'
    }
  ];

  // Handler for sending text message to AI Assistant
  const handleSendMessage = async () => {
    if (!inputText.trim() || isProcessing) return;

    const userText = inputText.trim();
    setInputText('');
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsProcessing(true);

    try {
      const response = await aiAssistantService.askTextQuestion(userText, 'English');
      const tutorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'tutor',
        text: response.answer,
        audioUrl: response.audio_url,
      };
      setMessages((prev) => [...prev, tutorMsg]);

      if (response.audio_url) {
        setPlayingId(tutorMsg.id);
        aiAssistantService.playAudio(response.audio_url, () => setPlayingId(null));
      }
    } catch (err: any) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'tutor',
        text: `Error contacting local AI Teacher: ${err?.message || err}. Please ensure the local server is running.`,
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsProcessing(false);
    }
  };

  // Handler for Microphone Voice Turn
  const handleToggleVoiceRecording = async () => {
    if (isProcessing) return;

    if (!isRecording) {
      try {
        setRecordingStatus('Listening... Speak your question clearly into your microphone.');
        await aiAssistantService.startRecording();
        setIsRecording(true);
      } catch (err: any) {
        setRecordingStatus(err?.message || 'Could not access microphone.');
        setTimeout(() => setRecordingStatus(''), 4000);
      }
    } else {
      setIsRecording(false);
      setIsProcessing(true);
      setRecordingStatus('Transcribing speech and generating response...');

      try {
        const response = await aiAssistantService.stopRecordingAndProcess('English');
        setRecordingStatus('');

        const userMsg: ChatMessage = {
          id: Date.now().toString(),
          sender: 'user',
          text: response.transcription || 'Spoken Question'
        };

        const tutorMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'tutor',
          text: response.answer,
          audioUrl: response.audio_url,
        };

        setMessages((prev) => [...prev, userMsg, tutorMsg]);

        if (response.audio_url) {
          setPlayingId(tutorMsg.id);
          aiAssistantService.playAudio(response.audio_url, () => setPlayingId(null));
        }
      } catch (err: any) {
        setRecordingStatus(err?.message || 'Speech recognition failed. Please try speaking again.');
        setTimeout(() => setRecordingStatus(''), 4000);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const handlePlayAudio = (audioUrl: string, msgId: string) => {
    if (playingId === msgId) {
      aiAssistantService.stopCurrentAudio();
      setPlayingId(null);
    } else {
      setPlayingId(msgId);
      aiAssistantService.playAudio(audioUrl, () => setPlayingId(null));
    }
  };

  const handleSelectScenario = (sc: typeof scenarios[0]) => {
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: `Let's practice the scenario: "${sc.title}". How should I start?`
    };

    const tutorReply: ChatMessage = {
      id: (Date.now() + 1).toString(),
      sender: 'tutor',
      text: `Great choice! Here is a natural opening sentence for "${sc.title}". Repeat after me or reply with your order:`,
      nativeHighlight: sc.starter,
      grammarTip: 'Notice the friendly courtesy in this conversational opening.'
    };

    setMessages((prev) => [...prev, userMsg, tutorReply]);
    speechService.speak(sc.starter, 'hi');
  };

  return (
    <ThemeBackground>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-8 space-y-8">
        {/* Banner */}
        <div className="relative rounded-[28px] bg-gradient-to-r from-[#032545]/40 via-[#053561]/35 to-[#021f3a]/40 p-6 sm:p-8 overflow-hidden shadow-[0_12px_40px_rgba(1,20,37,0.35)] border border-[#60A6DC]/25 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#60A6DC]/15 border border-[#60A6DC]/30 text-[#60A6DC] text-xs font-semibold backdrop-blur-sm">
                <SparkleStar color="#60A6DC" size={14} />
                <span>
                  Offline AI Voice Assistant • Local Apple Silicon Tutor
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
                {ui.aiTutor}
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                  100% OFFLINE
                </span>
              </h1>
              <p className="text-xs md:text-sm text-[#D4C1B6] max-w-2xl leading-relaxed">
                Powered by MLX Whisper speech recognition, local Ollama Qwen brain, and macOS natural speech synthesis. Speak using the microphone or type any question!
              </p>
            </div>

            {/* Mode switcher */}
            <div className="flex items-center gap-2 bg-[#032342]/40 backdrop-blur-md p-1.5 rounded-2xl border border-[#60A6DC]/25 shrink-0">
              <button
                type="button"
                onClick={() => setActiveMode('qna')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeMode === 'qna'
                    ? 'bg-[#60A6DC] text-[#02223E] shadow-[0_0_15px_rgba(96,166,220,0.4)]'
                    : 'text-[#D4C1B6] hover:text-white'
                }`}
              >
                AI Voice Tutor
              </button>
              <button
                type="button"
                onClick={() => setActiveMode('simulator')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeMode === 'simulator'
                    ? 'bg-[#60A6DC] text-[#02223E] shadow-[0_0_15px_rgba(96,166,220,0.4)]'
                    : 'text-[#D4C1B6] hover:text-white'
                }`}
              >
                Conversation Practice
              </button>
            </div>
          </div>
        </div>

        {/* Simulator Scenarios Strip if in Simulator mode */}
        {activeMode === 'simulator' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {scenarios.map((sc) => {
              const Icon = sc.icon;
              return (
                <div
                  key={sc.id}
                  onClick={() => handleSelectScenario(sc)}
                  className="p-5 rounded-[22px] bg-[#032342]/35 border border-[#60A6DC]/20 hover:border-[#60A6DC]/50 hover:bg-[#032342]/50 backdrop-blur-xl cursor-pointer transition-all space-y-2 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#60A6DC]/15 border border-[#60A6DC]/30 flex items-center justify-center text-[#60A6DC] group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white group-hover:text-[#60A6DC] transition-colors">
                    {sc.title}
                  </h4>
                  <div className="text-xs text-[#D4C1B6] line-clamp-1">
                    "{sc.starter}"
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Interactive Chat Console */}
        <div className="bg-[#032342]/35 border border-[#60A6DC]/25 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 space-y-6 shadow-2xl flex flex-col h-[650px]">
          {/* Chat Messages Log */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-thin">
            {messages.map((m) => {
              const isTutor = m.sender === 'tutor';
              return (
                <div
                  key={m.id}
                  className={`flex items-start gap-3 ${
                    isTutor ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {isTutor && (
                    <div className="w-9 h-9 rounded-xl bg-[#60A6DC] text-[#02223E] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(96,166,220,0.4)]">
                      <Bot className="w-5 h-5" />
                    </div>
                  )}

                  <div
                    className={`max-w-2xl p-5 rounded-[22px] border text-xs sm:text-sm leading-relaxed space-y-2.5 ${
                      isTutor
                        ? 'bg-[#032545]/50 border-[#60A6DC]/30 text-white'
                        : 'bg-[#60A6DC] text-[#02223E] border-[#60A6DC] font-semibold'
                    }`}
                  >
                    <div>{m.text}</div>

                    {/* Audio Player Button if voice response available */}
                    {m.audioUrl && (
                      <div className="pt-2 flex items-center gap-2 border-t border-[#60A6DC]/15">
                        <button
                          type="button"
                          onClick={() => handlePlayAudio(m.audioUrl!, m.id)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#60A6DC]/20 border border-[#60A6DC]/40 text-[#60A6DC] hover:bg-[#60A6DC]/30 text-xs font-semibold cursor-pointer transition-colors"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>{playingId === m.id ? 'Playing Voice...' : 'Listen to Spoken Answer'}</span>
                        </button>
                      </div>
                    )}

                    {/* Grammar Tip Callout */}
                    {m.grammarTip && (
                      <div className="text-[11px] text-[#D4C1B6] pt-1 border-t border-[#60A6DC]/15 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#60A6DC] shrink-0" />
                        <span>{m.grammarTip}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {isProcessing && (
              <div className="flex items-center gap-3 text-xs text-[#60A6DC] p-3 rounded-2xl bg-[#032545]/40 border border-[#60A6DC]/20">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>AI Teacher is thinking and preparing audio...</span>
              </div>
            )}
          </div>

          {/* Recording Status Notification */}
          {recordingStatus && (
            <div className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>{recordingStatus}</span>
            </div>
          )}

          {/* Prompt Input Box & Microphone Controls */}
          <div className="pt-4 border-t border-[#60A6DC]/20">
            <div className="relative flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
                }}
                disabled={isRecording || isProcessing}
                placeholder="Speak using the microphone button or type any educational question..."
                className="w-full pl-5 pr-28 py-3.5 rounded-full bg-[#032545]/50 border border-[#60A6DC]/30 text-white placeholder-[#D4C1B6]/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#60A6DC] disabled:opacity-50"
              />

              {/* Microphone Tap-to-Speak Button */}
              <button
                type="button"
                onClick={handleToggleVoiceRecording}
                disabled={isProcessing}
                title={isRecording ? 'Tap to Stop & Ask AI' : 'Tap to Speak Microphone'}
                className={`absolute right-12 w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-lg ${
                  isRecording
                    ? 'bg-rose-500 text-white animate-pulse ring-4 ring-rose-400/30'
                    : 'bg-[#032545] border border-[#60A6DC]/40 text-[#60A6DC] hover:bg-[#60A6DC]/20'
                }`}
              >
                {isRecording ? <Square className="w-4 h-4 fill-white" /> : <Mic className="w-4 h-4" />}
              </button>

              {/* Text Send Button */}
              <button
                type="button"
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isProcessing || isRecording}
                className="absolute right-2 w-10 h-10 rounded-full bg-[#60A6DC] text-[#02223E] flex items-center justify-center hover:bg-[#72b3e5] disabled:opacity-40 transition-all cursor-pointer shadow-[0_0_15px_rgba(96,166,220,0.4)]"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </ThemeBackground>
  );
};
