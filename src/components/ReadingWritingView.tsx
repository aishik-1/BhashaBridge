import React, { useState, useRef, useEffect } from 'react';
import { LanguageCode } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import { ThemeBackground, SparkleStar } from './ThemeBackground';
import {
  BookOpen,
  Edit3,
  Volume2,
  CheckCircle,
  XCircle,
  RotateCcw,
  Sparkles,
  Eraser,
  PenTool,
  Save,
  Award
} from 'lucide-react';
import { speechService } from '../services/speech';

interface ReadingWritingViewProps {
  selectedLanguage: LanguageCode;
}

export const ReadingWritingView: React.FC<ReadingWritingViewProps> = ({
  selectedLanguage,
}) => {
  const lang = LANGUAGES[selectedLanguage];
  const ui = UI_TRANSLATIONS[selectedLanguage];

  const [activeTab, setActiveTab] = useState<'reading' | 'writing-pad' | 'essay'>('reading');

  // Reading Passage Data
  const readingPassage =
    selectedLanguage === 'hi'
      ? {
          title: 'मेरा प्रिय विद्यालय और पुस्तकालय',
          textNative:
            'मेरा विद्यालय नगर के शांत वातावरण में स्थित है। हमारे विद्यालय का भवन अत्यंत भव्य और सुंदर है। यहाँ एक विशाल पुस्तकालय है, जहाँ हजारों ज्ञानवर्धक पुस्तकें उपलब्ध हैं। हमारे शिक्षक हमें केवल किताबी ज्ञान ही नहीं देते, बल्कि अनुशासन और नैतिक मूल्यों की शिक्षा भी देते हैं। विद्यालय का हरा-भरा खेल का मैदान सभी विद्यार्थियों को प्रिय है, जहाँ हम शाम को मिलकर खेलते हैं।',
          questions: [
            {
              id: 'q1',
              q: 'विद्यालय कहाँ स्थित है?',
              options: ['शोरगुल वाले बाज़ार में', 'नगर के शांत वातावरण में', 'जंगल में', 'रेलवे स्टेशन के पास'],
              ans: 'नगर के शांत वातावरण में',
              exp: 'गद्यांश की पहली पंक्ति में स्पष्ट है कि विद्यालय नगर के शांत वातावरण में स्थित है।'
            },
            {
              id: 'q2',
              q: 'पुस्तकालय में किस प्रकार की पुस्तकें हैं?',
              options: ['केवल कॉमिक्स', 'हजारों ज्ञानवर्धक पुस्तकें', 'पुरानी फटी पुस्तकें', 'कोई पुस्तक नहीं'],
              ans: 'हजारों ज्ञानवर्धक पुस्तकें',
              exp: 'गद्यांश के अनुसार पुस्तकालय में हजारों ज्ञानवर्धक पुस्तकें उपलब्ध हैं।'
            },
            {
              id: 'q3',
              q: 'शिक्षक किताबी ज्ञान के अतिरिक्त क्या सिखाते हैं?',
              options: ['क्रोध करना', 'अनुशासन और नैतिक मूल्य', 'केवल परीक्षा पास करना', 'व्यापार करना'],
              ans: 'अनुशासन और नैतिक मूल्य',
              exp: 'शिक्षक अनुशासन और नैतिक मूल्यों की शिक्षा भी प्रदान करते हैं।'
            },
            {
              id: 'q4',
              q: 'विद्यार्थी शाम को कहाँ मिलकर खेलते हैं?',
              options: ['कक्षा में', 'हरे-भरे खेल के मैदान में', 'घर पर', 'सड़क पर'],
              ans: 'हरे-भरे खेल के मैदान में',
              exp: 'विद्यार्थी विद्यालय के हरे-भरे खेल के मैदान में शाम को खेलते हैं।'
            },
            {
              id: 'q5',
              q: '‘भव्य’ शब्द का सर्वाधिक उपयुक्त अर्थ क्या है?',
              options: ['छोटा', 'विशाल और शानदार', 'गंदा', 'अंधेरा'],
              ans: 'विशाल और शानदार',
              exp: '‘भव्य’ का अर्थ विशाल, गौरवशाली और अत्यंत सुंदर होता है।'
            }
          ]
        }
      : selectedLanguage === 'bn'
      ? {
          title: 'আমাদের বিদ্যালয় ও সোনার শৈশব',
          textNative:
            'আমাদের বিদ্যালয়টি একটি মনোরম ও শান্ত পরিবেশে প্রতিষ্ঠিত। বিদ্যালয়ের সামনে একটি সুন্দর ফুলের বাগান এবং পেছনে একটি বড় খেলার মাঠ রয়েছে। আমাদের প্রধান শিক্ষক অত্যন্ত স্নেহশীল এবং অন্যান্য শিক্ষকরা পরম যত্নে আমাদের পাঠদান করেন। বিদ্যালয়ের গ্রন্থাগারে বহু শিক্ষণীয় ও গল্পের বই আছে। বিদ্যালয়ে আমরা একসঙ্গে পড়াশোনা করি এবং দেশপ্রেম ও শৃঙ্খলা শিখি।',
          questions: [
            {
              id: 'q1',
              q: 'বিদ্যালয়ের পরিবেশ কেমন?',
              options: ['কোলাহলপূর্ণ', 'মনোরম ও শান্ত', 'অপরিচ্ছন্ন', 'ভীতিকর'],
              ans: 'মনোরম ও শান্ত',
              exp: 'প্রথম বাক্যেই বলা হয়েছে বিদ্যালয়টি একটি মনোরম ও শান্ত পরিবেশে প্রতিষ্ঠিত।'
            },
            {
              id: 'q2',
              q: 'বিদ্যালয়ের সামনে কী আছে?',
              options: ['গাড়ির রাস্তা', 'একটি সুন্দর ফুলের বাগান', 'নদী', 'পুকুর'],
              ans: 'একটি সুন্দর ফুলের বাগান',
              exp: 'বিদ্যালয়ের সামনে সুন্দর ফুলের বাগান অবস্থিত।'
            },
            {
              id: 'q3',
              q: 'গ্রন্থাগারে কী ধরনের বই রয়েছে?',
              options: ['খবরের কাগজ', 'বহু শিক্ষণীয় ও গল্পের বই', 'ব্যবসায়িক খাতা', 'শূন্য আলমারি'],
              ans: 'বহু শিক্ষণীয় ও গল্পের বই',
              exp: 'গ্রন্থাগারে বহু শিক্ষণীয় ও গল্পের বই আছে।'
            },
            {
              id: 'q4',
              q: 'শিক্ষার্থীরা বিদ্যালয়ে কী শিক্ষা লাভ করে?',
              options: ['অহংকার', 'দেশপ্রেম ও শৃঙ্খলা', 'শুধুমাত্র মুখস্থবিদ্যা', 'ঝগড়া'],
              ans: 'দেশপ্রেম ও শৃঙ্খলা',
              exp: 'শিক্ষার্থীরা দেশপ্রেম ও শৃঙ্খলার পরম পাঠ গ্রহণ করে।'
            },
            {
              id: 'q5',
              q: '‘মনোরম’ শব্দের অর্থ কী?',
              options: ['কষ্টকর', 'মন হরণকারী বা চমৎকার', 'কঠিন', 'ধীর'],
              ans: 'মন হরণকারী বা চমৎকার',
              exp: 'মনোরম অর্থ যা মনকে আনন্দ দেয়।'
            }
          ]
        }
      : {
          title: 'माझी शाळा – विद्येचे पवित्र मंदिर',
          textNative:
            'माझी शाळा गावातील एका प्रसन्न आणि निसर्गरम्य टेकडीजवळ आहे. शाळेची इमारत दुमजली व भव्य आहे. शाळेच्या आवारात मोठी वटवृक्षाची झाडे आणि सुंदर फुलबाग आहे. आमचे शिक्षक अत्यंत अभ्यासू असून आम्हाला केवळ पुस्तकी ज्ञान न देता संस्कार व खेळाचे महत्त्व शिकवतात. शाळेच्या वाचनालयात हजारो ग्रंथ उपलब्ध आहेत, जे आम्हाला नवा दृष्टिकोन देतात.',
          questions: [
            {
              id: 'q1',
              q: 'शाळा कोठे वसलेली आहे?',
              options: ['गर्दीच्या बाजारात', 'प्रसन्न आणि निसर्गरम्य टेकडीजवळ', 'नदीच्या पात्रात', 'रेल्वे फाटकाजवळ'],
              ans: 'प्रसन्न आणि निसर्गरम्य टेकडीजवळ',
              exp: 'शाळा एका प्रसन्न व निसर्गरम्य टेकडीजवळ वसलेली आहे.'
            },
            {
              id: 'q2',
              q: 'शाळेच्या आवारात कोणती झाडे आहेत?',
              options: ['कॅक्टस', 'मोठी वटवृक्षाची झाडे व फुलबाग', 'केवळ गवत', 'बांबू'],
              ans: 'मोठी वटवृक्षाची झाडे व फुलबाग',
              exp: 'शाळेच्या आवारात वटवृक्षाची झाडे आणि फुलबाग आहे.'
            },
            {
              id: 'q3',
              q: 'शिक्षक विद्यार्थ्यांना कशाचे महत्त्व शिकवतात?',
              options: ['आळस करण्याचे', 'संस्कार व खेळाचे महत्त्व', 'केवळ पाठांतर', 'पैशाचे'],
              ans: 'संस्कार व खेळाचे महत्त्व',
              exp: 'शिक्षक संस्कार आणि खेळाचे महत्त्व पटवून देतात.'
            },
            {
              id: 'q4',
              q: 'वाचनालयातील पुस्तके काय देतात?',
              options: ['नवा दृष्टिकोन', 'झोप', 'भीती', 'आळस'],
              ans: 'नवा दृष्टिकोन',
              exp: 'ग्रंथ विद्यार्थ्यांना नवा विचार व दृष्टिकोन देतात.'
            },
            {
              id: 'q5',
              q: '‘निसर्गरम्य’ शब्दाचा अर्थ काय?',
              options: ['कोरडे', 'निसर्गाने सुंदर असलेले', 'घाणेरडे', 'उजाड'],
              ans: 'निसर्गाने सुंदर असलेले',
              exp: 'निसर्गरम्य म्हणजे निसर्गाच्या सौंदर्याने समृद्ध असलेले ठिकाण.'
            }
          ]
        };

  // Reading answers state
  const [readingAnswers, setReadingAnswers] = useState<Record<string, string>>({});
  const [isReadingSubmitted, setIsReadingSubmitted] = useState(false);

  // Canvas Handwriting Pad
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState('#60A6DC');
  const [brushSize, setBrushSize] = useState(6);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, [activeTab]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.beginPath();
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
    }
  };

  // Essay writing state
  const [essayText, setEssayText] = useState('');
  const [isEssaySaved, setIsEssaySaved] = useState(false);
  const essayTargetWords = 150;
  const wordCount = essayText.trim().split(/\s+/).filter(Boolean).length;

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
                  {lang.nativeName} ({lang.name}) · Reading &amp; Penmanship Studio
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                {ui.readingWriting}
              </h1>
              <p className="text-xs md:text-sm text-[#D4C1B6] max-w-2xl leading-relaxed">
                Sharpen reading comprehension with authentic regional paragraphs, practice character strokes on the digital calligraphy canvas, and draft structured essays.
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 bg-[#032342]/40 backdrop-blur-md p-1.5 rounded-2xl border border-[#60A6DC]/25 shrink-0">
              <button
                type="button"
                onClick={() => setActiveTab('reading')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'reading'
                    ? 'bg-[#60A6DC] text-[#02223E] shadow-[0_0_15px_rgba(96,166,220,0.4)]'
                    : 'text-[#D4C1B6] hover:text-white'
                }`}
              >
                Reading Lab
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('writing-pad')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'writing-pad'
                    ? 'bg-[#60A6DC] text-[#02223E] shadow-[0_0_15px_rgba(96,166,220,0.4)]'
                    : 'text-[#D4C1B6] hover:text-white'
                }`}
              >
                Handwriting Canvas
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('essay')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'essay'
                    ? 'bg-[#60A6DC] text-[#02223E] shadow-[0_0_15px_rgba(96,166,220,0.4)]'
                    : 'text-[#D4C1B6] hover:text-white'
                }`}
              >
                150-Word Essay
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            TAB 1: READING LAB & 5-QUESTION COMPREHENSION
           ========================================================================= */}
        {activeTab === 'reading' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Passage Reader (7 Cols) */}
            <div className="lg:col-span-7 bg-[#032342]/35 border border-[#60A6DC]/25 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#60A6DC]/15">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A6DC]">
                    Authentic Reading Passage
                  </span>
                  <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
                    {readingPassage.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => speechService.speak(readingPassage.textNative, selectedLanguage)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs hover:bg-[#72b3e5] shadow-[0_0_15px_rgba(96,166,220,0.4)] transition-all cursor-pointer active:scale-95"
                >
                  <Volume2 className="w-4 h-4 text-[#02223E]" />
                  <span>Listen Recitation</span>
                </button>
              </div>

              {/* Passage Box with Averta typography and line spacing */}
              <div className="p-6 rounded-[22px] bg-[#032545]/45 border border-[#60A6DC]/25 text-base sm:text-lg text-white font-medium leading-relaxed tracking-wide shadow-inner">
                {readingPassage.textNative}
              </div>

              <div className="p-4 rounded-xl bg-[#032342]/50 border border-[#60A6DC]/15 text-xs text-[#D4C1B6] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#60A6DC] shrink-0" />
                <span>
                  Tip: Read the passage twice before tackling the 5 questions on the right.
                </span>
              </div>
            </div>

            {/* Right: 5 Questions (5 Cols) */}
            <div className="lg:col-span-5 bg-[#032342]/35 border border-[#60A6DC]/25 backdrop-blur-xl rounded-[28px] p-6 space-y-5 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#60A6DC]/15">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  5 Comprehension Questions
                </span>
                {isReadingSubmitted && (
                  <span className="text-xs font-bold font-mono text-[#60A6DC]">
                    Score:{' '}
                    {
                      readingPassage.questions.filter(
                        (q) => readingAnswers[q.id] === q.ans
                      ).length
                    }{' '}
                    / 5
                  </span>
                )}
              </div>

              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1">
                {readingPassage.questions.map((q, idx) => {
                  const userChoice = readingAnswers[q.id];
                  const isCorrect = userChoice === q.ans;

                  return (
                    <div
                      key={q.id}
                      className="p-4 rounded-[18px] bg-[#032342]/45 border border-[#60A6DC]/20 space-y-2.5 text-xs"
                    >
                      <div className="font-bold text-white text-sm">
                        Q{idx + 1}. {q.q}
                      </div>

                      <div className="space-y-1.5">
                        {q.options.map((opt) => {
                          const isSelected = userChoice === opt;
                          let style =
                            'bg-[#032342]/40 border-[#60A6DC]/15 text-white hover:bg-[#032342]/70';

                          if (isSelected && !isReadingSubmitted) {
                            style =
                              'bg-[#60A6DC]/25 border-[#60A6DC] text-white font-bold shadow-sm';
                          } else if (isReadingSubmitted) {
                            if (opt === q.ans) {
                              style =
                                'bg-[#60A6DC]/35 border-[#60A6DC] text-white font-bold';
                            } else if (isSelected && !isCorrect) {
                              style = 'bg-[#D4C1B6]/20 border-[#D4C1B6] text-[#D4C1B6]';
                            }
                          }

                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => {
                                if (isReadingSubmitted) return;
                                setReadingAnswers((prev) => ({ ...prev, [q.id]: opt }));
                              }}
                              className={`w-full p-2.5 rounded-xl border text-left transition-all cursor-pointer ${style}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {isReadingSubmitted && (
                        <div className="pt-2 text-[11px] text-[#D4C1B6] border-t border-[#60A6DC]/15">
                          <strong className={isCorrect ? 'text-[#60A6DC]' : 'text-[#D4C1B6]'}>
                            {isCorrect ? '✓ Correct! ' : `✗ Answer: ${q.ans} `}
                          </strong>
                          {q.exp}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-[#60A6DC]/15 flex items-center justify-end gap-3">
                {!isReadingSubmitted ? (
                  <button
                    type="button"
                    onClick={() => setIsReadingSubmitted(true)}
                    disabled={Object.keys(readingAnswers).length === 0}
                    className="w-full py-2.5 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs hover:bg-[#72b3e5] disabled:opacity-40 transition-all cursor-pointer shadow-[0_0_15px_rgba(96,166,220,0.35)]"
                  >
                    Submit Answers
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setReadingAnswers({});
                      setIsReadingSubmitted(false);
                    }}
                    className="w-full py-2.5 rounded-full bg-[#032342] border border-[#60A6DC]/30 text-white font-bold text-xs hover:bg-[#032342]/70 transition-all cursor-pointer"
                  >
                    Retake Reading Test
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: INTERACTIVE HANDWRITING & LETTER CANVAS PAD
           ========================================================================= */}
        {activeTab === 'writing-pad' && (
          <div className="bg-[#032342]/35 border border-[#60A6DC]/25 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#60A6DC]/15">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Devanagari &amp; Bengali Digital Calligraphy Pad
                </h3>
                <p className="text-xs text-[#D4C1B6] mt-1">
                  Practice strokes, top shirorekha headlines, loops, and consonant conjuncts using your mouse, trackpad, or stylus.
                </p>
              </div>

              {/* Canvas Controls: Brush Color & Size */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 bg-[#032342]/60 p-1 rounded-xl border border-[#60A6DC]/20">
                  {['#60A6DC', '#ffffff', '#D4C1B6', '#38bdf8'].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setBrushColor(c)}
                      style={{ backgroundColor: c }}
                      className={`w-6 h-6 rounded-full border-2 transition-transform cursor-pointer ${
                        brushColor === c ? 'scale-110 border-white' : 'border-transparent'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2 bg-[#032342]/60 px-3 py-1.5 rounded-xl border border-[#60A6DC]/20 text-xs text-[#D4C1B6]">
                  <span>Size:</span>
                  <input
                    type="range"
                    min="2"
                    max="16"
                    value={brushSize}
                    onChange={(e) => setBrushSize(Number(e.target.value))}
                    className="w-20 accent-[#60A6DC]"
                  />
                </div>

                <button
                  type="button"
                  onClick={clearCanvas}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#032342] border border-[#D4C1B6]/30 text-[#D4C1B6] hover:text-white text-xs font-bold transition-all cursor-pointer"
                >
                  <Eraser className="w-3.5 h-3.5" />
                  <span>Clear Pad</span>
                </button>
              </div>
            </div>

            {/* Drawing Canvas Area */}
            <div className="relative rounded-[22px] overflow-hidden border-2 border-dashed border-[#60A6DC]/30 bg-[#02182c]/80 flex justify-center">
              <canvas
                ref={canvasRef}
                width={800}
                height={380}
                onMouseDown={startDrawing}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onMouseMove={draw}
                onTouchStart={startDrawing}
                onTouchEnd={stopDrawing}
                onTouchMove={draw}
                className="w-full h-[380px] touch-none cursor-crosshair"
              />
              <div className="pointer-events-none absolute bottom-3 right-4 text-[11px] text-[#D4C1B6]/60 font-mono">
                Drawing Surface (800 × 380) · Smooth Stroke
              </div>
            </div>

            {/* Suggested Practice Characters strip */}
            <div className="p-4 rounded-[20px] bg-[#032545]/40 border border-[#60A6DC]/20 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A6DC]">
                Recommended Strokes to Practice:
              </span>
              <div className="flex items-center gap-3 text-2xl font-bold text-white">
                {(selectedLanguage === 'hi'
                  ? ['क', 'ख', 'ज्ञ', 'त्र', 'क्ष', 'श्र']
                  : selectedLanguage === 'bn'
                  ? ['ক', 'খ', 'ক্ষ', 'জ্ঞ', 'ড়', 'ৎ']
                  : ['क', 'ळ', 'ज्ञ', 'क्ष', 'ॲ', 'ऑ']
                ).map((char) => (
                  <span
                    key={char}
                    className="px-3 py-1 rounded-xl bg-[#032342]/60 border border-[#60A6DC]/25 hover:border-[#60A6DC] cursor-pointer"
                    onClick={() => speechService.speak(char, selectedLanguage)}
                    title="Click to hear sound"
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: 150-WORD ESSAY / PARAGRAPH COMPOSITION
           ========================================================================= */}
        {activeTab === 'essay' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8 bg-[#032342]/35 border border-[#60A6DC]/25 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 space-y-5 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#60A6DC]/15">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A6DC]">
                    Structured Composition Prompt
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                    {selectedLanguage === 'hi'
                      ? 'निबंध: मेरा विद्यालय (My School)'
                      : selectedLanguage === 'bn'
                      ? 'অনুচ্ছেদ: আমার পরিবার (My Family)'
                      : 'निबंध: माझी शाळा (My School)'}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono text-[#D4C1B6]">Word Count</div>
                  <div
                    className={`text-xl font-bold font-mono ${
                      wordCount >= essayTargetWords ? 'text-[#60A6DC]' : 'text-white'
                    }`}
                  >
                    {wordCount} / {essayTargetWords}
                  </div>
                </div>
              </div>

              {/* Textarea */}
              <textarea
                value={essayText}
                onChange={(e) => setEssayText(e.target.value)}
                placeholder={
                  selectedLanguage === 'hi'
                    ? 'यहाँ अपना 150 शब्दों का निबंध टाइप करें... (प्रस्तावना, विद्यालय भवन, पुस्तकालय, शिक्षक और निष्कर्ष)'
                    : selectedLanguage === 'bn'
                    ? 'এখানে ১৫০ শব্দের অনুচ্ছেদ লিখুন... (ভূমিকা, পরিবারের সদস্যগণ, স্নেহ-ভালোবাসা ও সমাপ্তি)'
                    : 'येथे तुमचा १५० शब्दांचा निबंध टाईप करा... (शाळेची माहिती, शिक्षक, क्रीडांगण व आवड)'
                }
                rows={12}
                className="w-full p-5 rounded-[22px] bg-[#032545]/45 border border-[#60A6DC]/25 text-white placeholder-[#D4C1B6]/50 text-sm md:text-base leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#60A6DC] backdrop-blur-sm"
              />

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-[#D4C1B6]">
                  Progress:{' '}
                  <strong className="text-white">
                    {Math.min(100, Math.round((wordCount / essayTargetWords) * 100))}%
                  </strong>{' '}
                  of target length
                </span>
                <div className="flex items-center gap-3">
                  {isEssaySaved && (
                    <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 animate-in fade-in">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Saved to Portfolio!</span>
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setIsEssaySaved(true);
                      setTimeout(() => setIsEssaySaved(false), 3000);
                    }}
                    disabled={wordCount < 10}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs hover:bg-[#72b3e5] disabled:opacity-40 transition-all cursor-pointer shadow-[0_0_15px_rgba(96,166,220,0.35)]"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Composition</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Model Essay Benchmark */}
            <div className="lg:col-span-4 bg-[#032342]/35 border border-[#60A6DC]/25 backdrop-blur-xl rounded-[28px] p-6 space-y-4 shadow-xl text-xs text-[#D4C1B6]">
              <div className="flex items-center gap-1.5 font-mono font-bold uppercase tracking-wider text-[#60A6DC]">
                <Award className="w-4 h-4" /> Model Benchmark Essay
              </div>
              <div className="p-4 rounded-[20px] bg-[#032545]/45 border border-[#60A6DC]/20 space-y-2 leading-relaxed text-white">
                <p className="font-semibold text-sm">
                  {selectedLanguage === 'hi'
                    ? 'मेरा विद्यालय (आदर्श निबंध)'
                    : selectedLanguage === 'bn'
                    ? 'আমার পরিবার (নমুনা রচনা)'
                    : 'माझी शाळा (आदर्श निबंध)'}
                </p>
                <p className="text-xs text-[#D4C1B6] leading-relaxed">
                  {selectedLanguage === 'hi'
                    ? 'मेरा विद्यालय नगर के स्वच्छ वातावरण में स्थित है। यहाँ 50 से अधिक अध्यापक हैं जो अत्यंत स्नेह से पढ़ाते हैं। हमारे विद्यालय में एक सुंदर बगीचा और विशाल खेल का मैदान है। पुस्तकालय में ज्ञान का अपार भंडार है। मुझे अपने विद्यालय पर गर्व है।'
                    : selectedLanguage === 'bn'
                    ? 'আমার পরিবারে চারজন সদস্য আছেন—বাবা, মা, ছোট বোন এবং আমি। বাবা শিক্ষক এবং মা গৃহিণী। আমরা সবাই মিলেমিশে সুখে বসবাস করি। পরিবার আমাদের জীবনের প্রথম শিক্ষালয়।'
                    : 'माझी शाळा खूप सुंदर व निसर्गरम्य आहे. शाळेत प्रशस्त वर्गखोल्या व वाचनालय आहे. आमचे शिक्षक आम्हाला खेळाचे व अभ्यासाचे महत्त्व पटवून देतात. मला माझ्या शाळेचा खूप अभिमान वाटतो.'}
                </p>
              </div>
              <div className="text-[11px] text-[#D4C1B6]/80 leading-normal">
                Evaluation Criteria: Proper Subject-Object-Verb syntax (SOV), absence of spelling errors, and coherent paragraph flow.
              </div>
            </div>
          </div>
        )}
      </div>
    </ThemeBackground>
  );
};
