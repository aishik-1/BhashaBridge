import React from 'react';
import { LanguageCode } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import { WIKIMEDIA_ARTICLES } from '../data/wikimedia';
import { BookOpen, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

interface WikimediaViewProps {
  selectedLanguage: LanguageCode;
}

export const WikimediaView: React.FC<WikimediaViewProps> = ({
  selectedLanguage,
}) => {
  const lang = LANGUAGES[selectedLanguage];
  const ui = UI_TRANSLATIONS[selectedLanguage];

  const articles = WIKIMEDIA_ARTICLES.filter((a) => a.language === selectedLanguage);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      <div className="text-center">
        <span className="text-xs uppercase tracking-wider font-semibold text-emerald-800">
          {lang.nativeName} ({lang.name}) · Cultural Context &amp; Etymology
        </span>
        <h1 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mt-0.5">
          {ui.culturalNotes}
        </h1>
        <p className="text-xs md:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
          Contextual linguistic history, script genesis, and literary traditions curated from Wikipedia and Wiktionary under CC BY-SA 4.0.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((art) => (
          <div
            key={art.title}
            className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
                {art.category}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                {art.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {art.summary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1 text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                {art.license}
              </span>
              <a
                href={art.fullUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-semibold"
              >
                <span>Read More</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Attribution & Data Sources Note */}
      <div className="bg-[#f6f4ee] rounded-2xl p-6 border border-amber-900/10 text-xs text-slate-600 leading-relaxed">
        <h4 className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-emerald-800" />
          <span>Open Knowledge &amp; Data Sources</span>
        </h4>
        <p>
          BhashaBridge uses verified linguistic datasets, Wiktionary lexical records, and Wikipedia cultural summaries. Reused educational material is attributed under the Creative Commons Attribution-ShareAlike (CC BY-SA 4.0) license. All core lessons are cached locally for offline accessibility.
        </p>
      </div>
    </div>
  );
};
