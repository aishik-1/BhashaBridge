import React, { useState } from 'react';
import { EducationalResource, LanguageCode } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import { EDUCATIONAL_RESOURCES } from '../data/academicData';
import { ThemeBackground, SparkleStar } from './ThemeBackground';
import {
  ExternalLink,
  BookOpen,
  GraduationCap,
  Building,
  Globe,
  Cpu,
  Search,
  Award,
  Filter
} from 'lucide-react';

interface ResourcesViewProps {
  selectedLanguage: LanguageCode;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({
  selectedLanguage,
}) => {
  const lang = LANGUAGES[selectedLanguage];
  const ui = UI_TRANSLATIONS[selectedLanguage];

  const [filterType, setFilterType] = useState<'all' | 'official' | 'dictionary' | 'course' | 'research'>('all');

  const filteredResources = EDUCATIONAL_RESOURCES.filter((r) => {
    if (filterType !== 'all' && r.type !== filterType) return false;
    return r.languagesSupported.includes(selectedLanguage);
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#60A6DC]" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#60A6DC]" />;
      case 'Building':
        return <Building className="w-5 h-5 text-[#60A6DC]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#60A6DC]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#60A6DC]" />;
      case 'Search':
        return <Search className="w-5 h-5 text-[#60A6DC]" />;
      default:
        return <Award className="w-5 h-5 text-[#60A6DC]" />;
    }
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
                  {lang.nativeName} ({lang.name}) · Official Educational Repositories
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                {ui.resources}
              </h1>
              <p className="text-xs md:text-sm text-[#D4C1B6] max-w-2xl leading-relaxed">
                Connect seamlessly with NCERT ePathshala, Maharashtra Balbharati e-books, Central Institute of Indian Languages (CIIL), Bharatavani, and academic university dictionaries.
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-2 bg-[#032342]/40 backdrop-blur-md p-1.5 rounded-2xl border border-[#60A6DC]/25 shrink-0">
              {(['all', 'official', 'dictionary', 'course', 'research'] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setFilterType(t)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer ${
                    filterType === t
                      ? 'bg-[#60A6DC] text-[#02223E] shadow-[0_0_15px_rgba(96,166,220,0.4)]'
                      : 'text-[#D4C1B6] hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-[#032342]/35 border border-[#60A6DC]/20 hover:border-[#60A6DC]/50 hover:bg-[#032342]/45 backdrop-blur-xl rounded-[26px] p-6 shadow-lg flex flex-col justify-between transition-all space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-[#60A6DC]/15 border border-[#60A6DC]/30 flex items-center justify-center">
                    {getIcon(res.iconType)}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#032545]/60 text-[#60A6DC] px-2.5 py-1 rounded-full border border-[#60A6DC]/20">
                    {res.type}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-[#60A6DC] transition-colors tracking-tight">
                    {res.title}
                  </h3>
                  <div className="text-xs text-[#D4C1B6] font-mono mt-0.5">
                    {res.provider}
                  </div>
                </div>

                <p className="text-xs text-[#D4C1B6] leading-relaxed line-clamp-3">
                  {res.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {res.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-medium bg-[#011425]/50 border border-[#60A6DC]/15 text-[#D4C1B6] px-2.5 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* External Link Action */}
              <div className="pt-3 border-t border-[#60A6DC]/15">
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#60A6DC] text-[#02223E] font-bold text-xs hover:bg-[#72b3e5] shadow-[0_0_15px_rgba(96,166,220,0.35)] transition-all cursor-pointer active:scale-95"
                >
                  <span>Open Educational Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ThemeBackground>
  );
};
