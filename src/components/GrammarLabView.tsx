import React, { useState } from 'react';
import { LanguageCode } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/languages';
import { ThemeBackground, SparkleStar } from './ThemeBackground';
import { CheckCircle2, Volume2, Sparkles, BookOpen, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { speechService } from '../services/speech';

interface GrammarLabViewProps {
  selectedLanguage: LanguageCode;
}

export const GrammarLabView: React.FC<GrammarLabViewProps> = ({
  selectedLanguage,
}) => {
  const lang = LANGUAGES[selectedLanguage];
  const ui = UI_TRANSLATIONS[selectedLanguage];

  const [activeTab, setActiveTab] = useState<'comparison' | 'topics' | 'tenses'>('comparison');

  // Linguistic comparison data between Hindi, Bengali, and Marathi (highlighted in user brief)
  const comparisonData = [
    {
      feature: 'Script & Writing',
      hindi: 'Devanagari (देवनागरी)',
      bengali: 'Bengali-Assamese script (বাংলা লিপি)',
      marathi: 'Balbodh Devanagari with distinct ळ (बाळबोध)',
      insight: 'Devanagari is shared by Hindi & Marathi, but Marathi adds the retroflex lateral ळ and loan vowels ॲ and ऑ.'
    },
    {
      feature: 'Grammatical Gender System',
      hindi: 'Strict 2 Genders (Masculine, Feminine). Inanimate objects have gender.',
      bengali: 'NO grammatical gender! Verbs & adjectives do not change for gender.',
      marathi: 'Rich 3 Genders (Masculine तो, Feminine ती, Neuter ते).',
      insight: 'CRITICAL: Sharing scripts does NOT mean sharing grammar. Bengali verbs never inflect for gender (সে যায় for both he and she).'
    },
    {
      feature: 'Typical Word Order',
      hindi: 'SOV (Subject - Object - Verb)',
      bengali: 'SOV (Subject - Object - Verb)',
      marathi: 'SOV (Subject - Object - Verb)',
      insight: 'All three follow Subject-Object-Verb, placing the main finite verb at the end of the sentence.'
    },
    {
      feature: 'Case Marking & Suffixes',
      hindi: 'Independent Postpositions (ने, को, से, का/की, में, पर)',
      bengali: 'Direct Case Suffixes (-কে, -দিয়ে, -র/-এর, -তে/-এ)',
      marathi: 'Fused Case Suffixes + Oblique Stem change (Samanyaroop)',
      insight: 'Marathi alters the root noun (घोडा → घोड्या-ने) before attaching case suffixes.'
    },
    {
      feature: 'Verb Agreement',
      hindi: 'Agrees with Person, Number, and Gender',
      bengali: 'Agrees with Person and Honorific levels (no gender change)',
      marathi: 'Agrees with Person, Number, and Gender (3 genders)',
      insight: 'Bengali differentiates 3 honorific tiers (তুই intimate, তুমি familiar, আপনি formal).'
    }
  ];

  // Language-specific grammar rule cards
  const grammarTopics = [
    {
      title: 'Noun Morphology & Oblique Plurals',
      description: 'How nouns change their endings directly and before postpositions or case markers.',
      rule:
        selectedLanguage === 'hi'
          ? 'आकारान्त पुल्लिंग संज्ञा बहुवचन में "े" बनती है (लड़का → लड़के)। विभक्ति आने पर "ों" जुड़ता है (लड़कों ने)।'
          : selectedLanguage === 'bn'
          ? 'প্রাণীবাচক বিশেষ্যে "-রা / -এরা" এবং অপ্রাণীবাচকে "-গুলো / -গুলি" যুক্ত হয় (ছেলেরা, বইগুলো)।'
          : 'मराठीत नामाला विभक्ती लागण्यापूर्वी त्याचे "सामान्यरूप" होते (उदा. घोडा → घोड्या-ने, शाळा → शाळेत).',
      examples:
        selectedLanguage === 'hi'
          ? [
              { native: 'लड़का पढ़ता है।', translit: 'Ladka padhta hai.', en: 'The boy reads.' },
              { native: 'लड़के पढ़ते हैं।', translit: 'Ladke padhte hain.', en: 'The boys read.' },
              { native: 'लड़कों ने किताब पढ़ी।', translit: 'Ladkon ne kitaab padhi.', en: 'The boys read the book (Oblique).' }
            ]
          : selectedLanguage === 'bn'
          ? [
              { native: 'ছেলেটি বই পড়ছে।', translit: 'Chheleti boi podchhe.', en: 'The boy is reading a book.' },
              { native: 'ছেলেরা স্কুলে যাচ্ছে।', translit: 'Chhelera schoole jaachhe.', en: 'The boys are going to school.' },
              { native: 'বইগুলো টেবিলের ওপর আছে।', translit: 'Boigulo tebiler opor aachhe.', en: 'The books are on the table.' }
            ]
          : [
              { native: 'मुलगा पुस्तक वाचतो.', translit: 'Mulga pustak vaachto.', en: 'The boy reads a book.' },
              { native: 'मुले शाळेत जातात.', translit: 'Mule shaalet jaataat.', en: 'The children go to school.' },
              { native: 'मुलांनी अभ्यास केला.', translit: 'Mulaanni abhyaas kela.', en: 'The children studied (Oblique).' }
            ]
    },
    {
      title: 'Three-Aspect Tense Paradigm',
      description: 'Present, Past, and Future conjugations with aspectual markers.',
      rule:
        selectedLanguage === 'hi'
          ? 'वर्तमान: ता/ती/ते + है; भूत: आ/ई/ए अथवा था/थी; भविष्यत्: गा/गी/गे।'
          : selectedLanguage === 'bn'
          ? 'বর্তমান: -ই/-ও/-েন; অতীত: -লাম/-লে/-লেন; ভবিষ্যৎ: -ব/-বে/-বেন।'
          : 'वर्तमान: तो/ते/तात; भूत: ला/ली/ले; भविष्य: एन/शील/तील.',
      examples:
        selectedLanguage === 'hi'
          ? [
              { native: 'मैं रोज़ हिन्दी सीखता हूँ।', translit: 'Main roz Hindi seekhta hoon.', en: 'I learn Hindi daily (Present).' },
              { native: 'मैंने कल नया पाठ सीखा।', translit: 'Maine kal naya paath seekha.', en: 'I learned a new lesson yesterday (Past).' },
              { native: 'मैं कल परीक्षा दूँगा।', translit: 'Main kal pariksha doonga.', en: 'I will take the exam tomorrow (Future).' }
            ]
          : selectedLanguage === 'bn'
          ? [
              { native: 'আমি প্রতিদিন বাংলা শিখি।', translit: 'Aami protidin Bangla shikhi.', en: 'I learn Bengali daily (Present).' },
              { native: 'আমি গতকাল নতুন পাঠ পড়েছিলাম।', translit: 'Aami gotokaal notun paath...', en: 'I read the new lesson yesterday (Past).' },
              { native: 'আমি কাল পরীক্ষা দেব।', translit: 'Aami kaal porikkha debo.', en: 'I will give the exam tomorrow (Future).' }
            ]
          : [
              { native: 'मी रोज मराठी शिकतो.', translit: 'Mee roj Marathi shikto.', en: 'I learn Marathi daily (Present).' },
              { native: 'मी काल नवीन धडा वाचला.', translit: 'Mee kaal naveen dhada vaachla.', en: 'I read the new chapter yesterday (Past).' },
              { native: 'मी उद्या परीक्षा देईन.', translit: 'Mee udya pariksha deyin.', en: 'I will take the exam tomorrow (Future).' }
            ]
    }
  ];

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
                  {lang.nativeName} ({lang.name}) · Complete Grammar Lab (व्याकरण प्रयोगशाळा)
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                {ui.grammar}
              </h1>
              <p className="text-xs md:text-sm text-[#D4C1B6] max-w-2xl leading-relaxed">
                Rigorous grammatical explanations from noun gender rules and postpositional cases to verb conjugations and comparative syntax across Hindi, Bengali, and Marathi.
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 bg-[#032342]/40 backdrop-blur-md p-1.5 rounded-2xl border border-[#60A6DC]/25 shrink-0">
              <button
                type="button"
                onClick={() => setActiveTab('comparison')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'comparison'
                    ? 'bg-[#60A6DC] text-[#02223E] shadow-[0_0_15px_rgba(96,166,220,0.4)]'
                    : 'text-[#D4C1B6] hover:text-white'
                }`}
              >
                Tri-Language Linguistic Matrix
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('topics')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'topics'
                    ? 'bg-[#60A6DC] text-[#02223E] shadow-[0_0_15px_rgba(96,166,220,0.4)]'
                    : 'text-[#D4C1B6] hover:text-white'
                }`}
              >
                Core Grammar Topics
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Tri-Language Linguistic Comparison Matrix */}
        {activeTab === 'comparison' && (
          <div className="space-y-6">
            <div className="bg-[#032342]/35 border border-[#60A6DC]/25 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#60A6DC]/15 mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Critical Differences Between Hindi, Bengali &amp; Marathi
                  </h2>
                  <p className="text-xs text-[#D4C1B6] mt-1">
                    "Sharing the same script does not mean sharing the same grammar."
                  </p>
                </div>
                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#60A6DC]/15 text-[#60A6DC] text-xs font-mono font-bold">
                  <ShieldCheck className="w-4 h-4" /> Academic Rigour
                </div>
              </div>

              {/* Responsive Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[#60A6DC]/25 text-[#60A6DC] font-mono uppercase tracking-wider">
                      <th className="py-3 px-4">Grammatical Feature</th>
                      <th className="py-3 px-4">Hindi (हिन्दी)</th>
                      <th className="py-3 px-4">Bengali (বাংলা)</th>
                      <th className="py-3 px-4">Marathi (मराठी)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#60A6DC]/15 text-white">
                    {comparisonData.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-[#032342]/40 transition-colors"
                      >
                        <td className="py-4 px-4 font-bold text-[#60A6DC] whitespace-nowrap">
                          {row.feature}
                        </td>
                        <td className="py-4 px-4 text-[#D4C1B6] leading-relaxed">
                          {row.hindi}
                        </td>
                        <td className="py-4 px-4 text-white font-medium leading-relaxed bg-[#60A6DC]/5">
                          {row.bengali}
                        </td>
                        <td className="py-4 px-4 text-[#D4C1B6] leading-relaxed">
                          {row.marathi}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Core Grammar Topics for Selected Language */}
        {activeTab === 'topics' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {grammarTopics.map((top, idx) => (
              <div
                key={idx}
                className="bg-[#032342]/35 border border-[#60A6DC]/25 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 space-y-5 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#60A6DC]/15 border border-[#60A6DC]/30 text-[#60A6DC] text-xs font-mono font-bold mb-3">
                    Module 0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {top.title}
                  </h3>
                  <p className="text-xs text-[#D4C1B6] mt-1 leading-relaxed">
                    {top.description}
                  </p>

                  <div className="mt-4 p-4 rounded-2xl bg-[#032545]/45 border border-[#60A6DC]/25 backdrop-blur-sm">
                    <div className="text-[11px] font-mono font-bold text-[#60A6DC] uppercase tracking-wider mb-1">
                      Grammatical Rule (नियम)
                    </div>
                    <div className="text-sm font-semibold text-white leading-relaxed">
                      {top.rule}
                    </div>
                  </div>

                  {/* Examples */}
                  <div className="mt-5 space-y-2.5">
                    <div className="text-xs font-mono font-bold text-[#D4C1B6] uppercase tracking-wider">
                      Target Sentences (वाक्य उदाहरण)
                    </div>
                    {top.examples.map((ex, exIdx) => (
                      <div
                        key={exIdx}
                        className="p-3.5 rounded-xl bg-[#032342]/45 border border-[#60A6DC]/15 flex items-center justify-between gap-3"
                      >
                        <div>
                          <div className="text-base font-bold text-white tracking-tight">
                            {ex.native}
                          </div>
                          <div className="text-xs font-mono text-[#60A6DC]">
                            {ex.translit}
                          </div>
                          <div className="text-xs text-[#D4C1B6] mt-0.5 font-medium">
                            {ex.en}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => speechService.speak(ex.native, selectedLanguage)}
                          className="p-2 rounded-xl bg-[#60A6DC]/15 text-[#60A6DC] hover:bg-[#60A6DC] hover:text-[#02223E] transition-all cursor-pointer shrink-0"
                          title="Listen pronunciation"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ThemeBackground>
  );
};
