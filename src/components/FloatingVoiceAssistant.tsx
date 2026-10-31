import React, { useState } from 'react';
import { Bot, Mic, Square, Volume2, X, Loader2, Sparkles } from 'lucide-react';
import { aiAssistantService } from '../services/aiAssistant';

export const FloatingVoiceAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState('Tap microphone to speak');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleToggleRecord = async () => {
    if (isProcessing) return;

    if (!isRecording) {
      try {
        setAudioUrl(null);
        setQuestion('');
        setAnswer('');
        setStatusText('Listening... Speak your question now.');
        await aiAssistantService.startRecording();
        setIsRecording(true);
      } catch (err: any) {
        setStatusText(err?.message || 'Could not access microphone.');
      }
    } else {
      setIsRecording(false);
      setIsProcessing(true);
      setStatusText('Processing your speech...');

      try {
        const response = await aiAssistantService.stopRecordingAndProcess('English');
        setQuestion(response.transcription || '');
        setAnswer(response.answer);
        setAudioUrl(response.audio_url || null);
        setStatusText('Answer ready!');

        if (response.audio_url) {
          setIsPlayingAudio(true);
          aiAssistantService.playAudio(response.audio_url, () => setIsPlayingAudio(false));
        }
      } catch (err: any) {
        setStatusText(err?.message || 'Speech recognition failed. Try again.');
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const handleReplayAudio = () => {
    if (audioUrl) {
      setIsPlayingAudio(true);
      aiAssistantService.playAudio(audioUrl, () => setIsPlayingAudio(false));
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Collapsed Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-[#032545] to-[#053561] border border-[#60A6DC]/50 shadow-[0_10px_30px_rgba(1,20,37,0.6)] backdrop-blur-xl text-white cursor-pointer hover:scale-105 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-[#60A6DC] text-[#02223E] flex items-center justify-center shadow-[0_0_15px_rgba(96,166,220,0.5)]">
            <Bot className="w-4 h-4" />
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>Offline AI Voice</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-[10px] text-[#D4C1B6]">Tap to ask questions</div>
          </div>
          <Mic className="w-4 h-4 text-[#60A6DC] group-hover:scale-110 transition-transform" />
        </button>
      )}

      {/* Expanded Assistant Card */}
      {isOpen && (
        <div className="w-[360px] sm:w-[420px] rounded-[24px] bg-[#02182c]/95 border border-[#60A6DC]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl p-5 text-white space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#60A6DC]/20 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#60A6DC] text-[#02223E] flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">AI Voice Teacher</h4>
                <p className="text-[10px] text-[#D4C1B6]">100% Offline • Apple Silicon</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                aiAssistantService.stopCurrentAudio();
                setIsOpen(false);
              }}
              className="p-1.5 rounded-lg hover:bg-white/10 text-[#D4C1B6] hover:text-white cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Q&A Area */}
          <div className="space-y-3 min-h-[140px] max-h-[220px] overflow-y-auto pr-1 text-xs">
            {question && (
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#D4C1B6]">
                <span className="text-[10px] uppercase font-mono text-[#60A6DC] block mb-0.5">You asked:</span>
                "{question}"
              </div>
            )}

            {answer ? (
              <div className="p-3 rounded-xl bg-[#032545]/60 border border-[#60A6DC]/30 text-white space-y-2">
                <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono text-[#60A6DC]">
                  <Sparkles className="w-3 h-3" />
                  <span>Answer:</span>
                </div>
                <div className="text-xs leading-relaxed">{answer}</div>
                {audioUrl && (
                  <button
                    type="button"
                    onClick={handleReplayAudio}
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#60A6DC] hover:underline cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{isPlayingAudio ? 'Speaking...' : 'Listen Again'}</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="text-center py-8 text-[#D4C1B6]/70 space-y-2">
                <Bot className="w-8 h-8 mx-auto text-[#60A6DC]/50" />
                <p className="text-xs">{statusText}</p>
              </div>
            )}
          </div>

          {/* Bottom Record Action */}
          <div className="pt-2 border-t border-[#60A6DC]/20 flex items-center justify-between gap-3">
            <span className="text-[11px] text-[#D4C1B6] truncate">
              {isRecording ? 'Recording active...' : isProcessing ? 'AI thinking...' : 'Ready to listen'}
            </span>

            <button
              type="button"
              onClick={handleToggleRecord}
              disabled={isProcessing}
              className={`px-4 py-2.5 rounded-full flex items-center gap-2 text-xs font-bold transition-all cursor-pointer shadow-lg ${
                isRecording
                  ? 'bg-rose-500 text-white animate-pulse'
                  : isProcessing
                  ? 'bg-[#032545] text-[#D4C1B6] cursor-wait'
                  : 'bg-[#60A6DC] text-[#02223E] hover:bg-[#72b3e5]'
              }`}
            >
              {isRecording ? (
                <>
                  <Square className="w-3.5 h-3.5 fill-white" />
                  <span>Stop &amp; Ask</span>
                </>
              ) : isProcessing ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Thinking...</span>
                </>
              ) : (
                <>
                  <Mic className="w-3.5 h-3.5" />
                  <span>Tap to Speak</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
