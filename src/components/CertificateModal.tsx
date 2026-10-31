import React from 'react';
import { LanguageCode } from '../types';
import { LANGUAGES } from '../data/languages';
import { Award, Printer, X, ShieldCheck, Sparkles } from 'lucide-react';

interface CertificateModalProps {
  studentName: string;
  selectedLanguage: LanguageCode;
  score: number;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  studentName,
  selectedLanguage,
  score,
  onClose,
}) => {
  const lang = LANGUAGES[selectedLanguage];
  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const certificateId = `BB-${selectedLanguage.toUpperCase()}-${Math.floor(
    100000 + Math.random() * 900000
  )}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#011425]/85 backdrop-blur-md overflow-y-auto">
      <div className="relative max-w-3xl w-full bg-[#02223E] border-2 border-[#60A6DC]/50 rounded-[32px] p-8 sm:p-12 shadow-[0_20px_60px_rgba(1,20,37,0.8)] text-center text-white space-y-6">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#032342] text-[#D4C1B6] hover:text-white border border-[#60A6DC]/30 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Frame Borders */}
        <div className="p-8 sm:p-10 rounded-[24px] border-2 border-double border-[#D4C1B6]/40 bg-gradient-to-b from-[#032545]/60 to-[#02182c]/80 space-y-6 relative overflow-hidden">
          {/* Watermark Crest */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5">
            <Award className="w-96 h-96 text-white" />
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#60A6DC]">
              <Sparkles className="w-4 h-4 text-[#60A6DC]" />
              <span>BHASHABRIDGE ACADEMIC COUNCIL OF INDIAN LANGUAGES</span>
              <Sparkles className="w-4 h-4 text-[#60A6DC]" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif-display font-bold text-white tracking-tight mt-2">
              Certificate of Academic Achievement
            </h1>
            <p className="text-xs text-[#D4C1B6] font-mono">
              VERIFIED CREDENTIAL ID: {certificateId}
            </p>
          </div>

          <div className="py-2 text-xs text-[#D4C1B6] uppercase tracking-wider">
            This is to certify that
          </div>

          {/* Student Name */}
          <div className="text-3xl sm:text-4xl font-bold font-serif-display text-[#60A6DC] border-b-2 border-[#60A6DC]/40 pb-2 max-w-md mx-auto">
            {studentName || 'Learner'}
          </div>

          <p className="text-xs sm:text-sm text-[#D4C1B6] max-w-xl mx-auto leading-relaxed">
            has successfully fulfilled all curriculum requirements, continuous chapter assessments, and the full 100-mark comprehensive examination in{' '}
            <strong className="text-white font-bold">
              {lang.name} ({lang.nativeName})
            </strong>{' '}
            with an evaluation grade of{' '}
            <strong className="text-[#60A6DC] font-mono">
              {score >= 80 ? 'Distinction' : 'First Class Mastery'} ({score}%)
            </strong>.
          </p>

          {/* Seal and Signatures */}
          <div className="pt-6 border-t border-[#60A6DC]/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#D4C1B6]">
            <div className="text-left space-y-1">
              <div className="font-mono text-white font-bold">{currentDate}</div>
              <div className="text-[10px] text-[#D4C1B6] uppercase tracking-wider">
                Date of Issue
              </div>
            </div>

            {/* Gold Seal */}
            <div className="w-20 h-20 rounded-full border-2 border-[#D4C1B6] bg-[#032342] flex flex-col items-center justify-center shadow-[0_0_20px_rgba(212,193,182,0.3)]">
              <ShieldCheck className="w-7 h-7 text-[#D4C1B6]" />
              <span className="text-[9px] font-mono font-bold uppercase text-[#D4C1B6] mt-0.5">
                VERIFIED
              </span>
            </div>

            <div className="text-right space-y-1">
              <div className="font-serif italic text-base text-white font-bold">
                Director of Pedagogy
              </div>
              <div className="text-[10px] text-[#D4C1B6] uppercase tracking-wider">
                BhashaBridge Academic Council
              </div>
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#60A6DC] text-[#02223E] font-bold text-xs hover:bg-[#72b3e5] shadow-[0_0_20px_rgba(96,166,220,0.4)] transition-all cursor-pointer active:scale-95"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save Certificate PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
