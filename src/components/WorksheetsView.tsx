import React, { useState } from 'react';
import { LanguageCode, Worksheet } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import { PRACTICE_WORKSHEETS } from '../data/academicData';
import { ThemeBackground, SparkleStar } from './ThemeBackground';
import { FileText, Printer, CheckCircle2, Eye, EyeOff, Award, Clock } from 'lucide-react';

interface WorksheetsViewProps {
  selectedLanguage: LanguageCode;
}

export const WorksheetsView: React.FC<WorksheetsViewProps> = ({
  selectedLanguage,
}) => {
  const lang = LANGUAGES[selectedLanguage];
  const ui = UI_TRANSLATIONS[selectedLanguage];

  const sheets = PRACTICE_WORKSHEETS.filter((s) => s.language === selectedLanguage);
  const currentSheet = sheets[0] || PRACTICE_WORKSHEETS[0];

  const [showAnswerKeys, setShowAnswerKeys] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <ThemeBackground>
      <div className="max-w-5xl mx-auto px-6 sm:px-12 py-8 space-y-8">
        {/* Banner */}
        <div className="relative rounded-[28px] bg-gradient-to-r from-[#032545]/40 via-[#053561]/35 to-[#021f3a]/40 p-6 sm:p-8 overflow-hidden shadow-[0_12px_40px_rgba(1,20,37,0.35)] border border-[#60A6DC]/25 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#60A6DC]/15 border border-[#60A6DC]/30 text-[#60A6DC] text-xs font-semibold backdrop-blur-sm">
                <SparkleStar color="#60A6DC" size={14} />
                <span>
                  {lang.nativeName} ({lang.name}) · Academic Worksheets &amp; Solution Keys
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                {ui.worksheets}
              </h1>
              <p className="text-xs md:text-sm text-[#D4C1B6] max-w-2xl leading-relaxed">
                Structured self-study worksheets with complete printable question papers and toggleable teacher verification answer keys.
              </p>
            </div>

            {/* Actions: Toggle Answers & Print */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setShowAnswerKeys(!showAnswerKeys)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#032342] border border-[#60A6DC]/30 text-[#60A6DC] hover:text-white text-xs font-bold transition-all cursor-pointer"
              >
                {showAnswerKeys ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{showAnswerKeys ? 'Hide Answer Keys' : 'Reveal Solution Keys'}</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs hover:bg-[#72b3e5] shadow-[0_0_15px_rgba(96,166,220,0.35)] transition-all cursor-pointer active:scale-95"
              >
                <Printer className="w-4 h-4" />
                <span>Print Worksheet</span>
              </button>
            </div>
          </div>
        </div>

        {/* Printable Worksheet Document Container */}
        <div className="bg-[#032342]/35 border border-[#60A6DC]/25 backdrop-blur-xl rounded-[28px] p-6 sm:p-10 space-y-8 shadow-2xl">
          {/* Header Strip */}
          <div className="border-b-2 border-[#60A6DC]/30 pb-6 text-center space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-[#60A6DC]">
              <span>CODE: {currentSheet.code}</span>
              <span>LEVEL: {currentSheet.level.toUpperCase()}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {currentSheet.title}
            </h2>
            <div className="flex items-center justify-center gap-6 text-xs text-[#D4C1B6] pt-1">
              <span>Time Allowed: {currentSheet.timeMinutes} Minutes</span>
              <span>•</span>
              <span>Maximum Marks: {currentSheet.totalMarks} Marks</span>
            </div>
            <p className="text-xs text-[#D4C1B6]/80 italic pt-1">
              {currentSheet.instructions}
            </p>
          </div>

          {/* Exercises List */}
          <div className="space-y-6">
            {currentSheet.exercises.map((ex, idx) => (
              <div
                key={idx}
                className="p-5 rounded-[22px] bg-[#032545]/40 border border-[#60A6DC]/20 space-y-3"
              >
                <div className="flex items-center justify-between text-xs pb-2 border-b border-[#60A6DC]/15">
                  <span className="font-bold text-white font-mono uppercase tracking-wider">
                    {ex.sectionTitle}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#60A6DC]/15 text-[#60A6DC] font-mono font-bold">
                    [{ex.marks} Marks]
                  </span>
                </div>

                <div className="text-base text-white font-medium leading-relaxed">
                  {ex.question}
                </div>

                {/* Solution Reveal Box */}
                {showAnswerKeys && (
                  <div className="mt-3 p-4 rounded-xl bg-[#032342]/80 border border-emerald-400/40 text-xs text-white space-y-1">
                    <div className="font-bold text-emerald-400 font-mono">
                      ✓ Answer Key (सटीक उत्तर):
                    </div>
                    <div className="text-emerald-100 font-medium">
                      {ex.answerKey}
                    </div>
                    <div className="text-[#D4C1B6] text-[11px] pt-1">
                      <strong className="text-white">Explanation Note: </strong>
                      {ex.solutionNote}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ThemeBackground>
  );
};
