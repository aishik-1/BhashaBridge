import { ChapterItem, AlphabetLetter, QuizQuestion, LanguageCode } from '../types';

// =========================================================================
// 1. ALL 40 CHAPTERS PER LANGUAGE (H01-H40, B01-B40, M01-M40)
// =========================================================================

export const HINDI_CHAPTERS: ChapterItem[] = [
  {
    code: 'H01',
    language: 'hi',
    number: 1,
    titleNative: 'हिन्दी भाषा का परिचय',
    titleEn: 'Introduction to Hindi Language',
    topics: ['Origin of Hindi', 'Devanagari script overview', 'Official status & dialects', 'Standard Hindi conventions'],
    level: 'beginner',
    category: 'script',
    summaryEn: 'History, evolution from Sanskrit, Indo-Aryan roots, and Devanagari writing conventions.',
    keyRuleNative: 'हिन्दी बाएँ से दाएँ लिखी जाती है और प्रत्येक शब्द पर शिरोरेखा (ऊपरी रेखा) लगाई जाती है।',
    examples: [
      { native: 'नमस्ते', translit: 'Namaste', english: 'Greetings / Hello' },
      { native: 'भारत', translit: 'Bharat', english: 'India' },
      { native: 'हिन्दी हमारी राजभाषा है।', translit: 'Hindi hamari rajbhasha hai.', english: 'Hindi is our official language.' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H02',
    language: 'hi',
    number: 2,
    titleNative: 'स्वर (Vowels)',
    titleEn: 'Hindi Vowels & Independent Sounds',
    topics: ['ह्रस्व स्वर (अ, इ, उ, ऋ)', 'दीर्घ स्वर (आ, ई, ऊ, ए, ऐ, ओ, औ)', 'अनुस्वार (अं) और विसर्ग (अः)'],
    level: 'beginner',
    category: 'phonetics',
    summaryEn: '11 basic vowels plus Anusvara and Visarga, understanding short vs long vowel duration.',
    keyRuleNative: 'स्वर वे ध्वनियाँ हैं जो बिना किसी अन्य वर्ण की सहायता के बोली जाती हैं।',
    examples: [
      { native: 'अमरूद', translit: 'Amrood', english: 'Guava (Short vowel sound)' },
      { native: 'आम', translit: 'Aam', english: 'Mango (Long vowel sound)' },
      { native: 'ऋषि', translit: 'Rishi', english: 'Sage' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H03',
    language: 'hi',
    number: 3,
    titleNative: 'व्यंजन (Consonants)',
    titleEn: 'Hindi Consonants (Vyanjan)',
    topics: ['क-वर्ग, च-वर्ग, ट-वर्ग, त-वर्ग, प-वर्ग', 'अंतःस्थ (य, र, ल, व)', 'ऊष्म (श, ष, स, ह)', 'अल्पप्राण व महाप्राण'],
    level: 'beginner',
    category: 'phonetics',
    summaryEn: '33 standard consonants categorized by articulation place (velar, palatal, retroflex, dental, labial).',
    keyRuleNative: 'प्रत्येक शुद्ध व्यंजन में अंतर्निहित स्वर "अ" जुड़ा होता है; बिना स्वर के हलन्त (्) लगता है।',
    examples: [
      { native: 'कमल', translit: 'Kamal', english: 'Lotus' },
      { native: 'घर', translit: 'Ghar', english: 'Home' },
      { native: 'पानी', translit: 'Paani', english: 'Water' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H04',
    language: 'hi',
    number: 4,
    titleNative: 'बारहखड़ी and मात्रा',
    titleEn: 'Vowel Diacritics (Matras) & Barakhadi',
    topics: ['मात्राओं के चिन्ह (ा, ि, ी, ु, ू, ृ, े, ै, ो, औ)', 'क से ज्ञ तक बारहखड़ी शृंखला'],
    level: 'beginner',
    category: 'script',
    summaryEn: 'How consonants combine with each vowel diacritic to create phonetic syllables.',
    keyRuleNative: 'इ की मात्रा (ि) वर्ण से पहले लगती है, जबकि उच्चारण बाद में होता है (जैसे: दिन)।',
    examples: [
      { native: 'क, का, कि, की, कु, कू, के, कै, को, कौ, कं, कः', translit: 'Ka, Kaa, Ki, Kee...', english: 'Barakhadi sequence for Ka' },
      { native: 'किताब', translit: 'Kitaab', english: 'Book' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H05',
    language: 'hi',
    number: 5,
    titleNative: 'संयुक्त अक्षर and संयुक्त व्यंजन',
    titleEn: 'Conjunct Consonants (Ksh, Tra, Gya, Shra)',
    topics: ['क्ष (क्+ष)', 'त्र (त्+र)', 'ज्ञ (ज्+ञ)', 'श्र (श्+र)', 'र के रूप (रेफ़ व पदेन)'],
    level: 'beginner',
    category: 'script',
    summaryEn: 'Mastering fused consonant clusters, half-letters (अर्ध वर्ण), and the multiple graphical representations of "R".',
    keyRuleNative: 'रेफ़ (र्) वर्ण के ऊपर लगता है जब वह स्वररहित हो (कर्म), पदेन नीचे लगता है जब वर्ण स्वररहित हो (प्रकाश)।',
    examples: [
      { native: 'ज्ञान', translit: 'Gyaan', english: 'Knowledge' },
      { native: 'मित्र', translit: 'Mitra', english: 'Friend' },
      { native: 'धर्म', translit: 'Dharma', english: 'Duty / Righteousness' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H06',
    language: 'hi',
    number: 6,
    titleNative: 'उच्चारण (Pronunciation)',
    titleEn: 'Phonetics & Articulation Points',
    topics: ['कंठ्य, तालव्य, मूर्धन्य, दंत्य, ओष्ठ्य ध्वनियाँ', 'नुक्ता ध्वनियाँ (क़, ख़, ग़, ज़, फ़)'],
    level: 'beginner',
    category: 'phonetics',
    summaryEn: 'Precise vocal tract positioning, aspiration distinctions (ख vs क, घ vs ग), and Persian-Arabic loan sounds.',
    keyRuleNative: 'नुक्ता (नीचे बिंदु) लगाने से ध्वनि में घर्षण या विदेशी उच्चारण स्पष्ट होता है (ज़िन्दगी vs जल)।',
    examples: [
      { native: 'ज़िंदगी', translit: 'Zindagi', english: 'Life' },
      { native: 'फल', translit: 'Phal', english: 'Fruit' },
      { native: 'फिल्म', translit: 'Film', english: 'Movie' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H07',
    language: 'hi',
    number: 7,
    titleNative: 'वर्णमाला and spelling',
    titleEn: 'Devanagari Alphabet & Orthography',
    topics: ['वर्णमाला क्रम', 'अनुनासिक (ँ) व अनुस्वार (ं) में अंतर', 'मानक हिन्दी वर्तनी नियम'],
    level: 'beginner',
    category: 'script',
    summaryEn: 'Official Central Hindi Directorate standardized spelling norms and nasalization differences.',
    keyRuleNative: 'अनुस्वार (ं) बिंदु है और अनुनासिक (ँ) चंद्रबिंदु है। शिरोरेखा के ऊपर मात्रा होने पर केवल बिंदु लगता है।',
    examples: [
      { native: 'हँसना', translit: 'Hansna', english: 'To laugh (Chandrabindu)' },
      { native: 'हंस', translit: 'Hans', english: 'Swan (Anusvara)' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H08',
    language: 'hi',
    number: 8,
    titleNative: 'शब्द निर्माण (Word formation)',
    titleEn: 'Morphology & Root Word Derivation',
    topics: ['तत्सम शब्द (संस्कृत समान)', 'तद्भव शब्द (सरलीकृत)', 'देशज व विदेशज शब्द'],
    level: 'beginner',
    category: 'vocab',
    summaryEn: 'Understanding Tatsama, Tadbhava, Deshaj, and foreign borrowed vocabulary in Hindi.',
    keyRuleNative: 'तत्सम शब्द संस्कृत से ज्यों-के-त्यों लिए गए हैं (अग्नि), तद्भव उनके बदले रूप हैं (आग)।',
    examples: [
      { native: 'अग्नि → आग', translit: 'Agni → Aag', english: 'Fire (Tatsama → Tadbhava)' },
      { native: 'सूर्य → सूरज', translit: 'Surya → Sooraj', english: 'Sun (Tatsama → Tadbhava)' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H09',
    language: 'hi',
    number: 9,
    titleNative: 'संज्ञा (Nouns)',
    titleEn: 'Hindi Nouns & Classifications',
    topics: ['व्यक्तिवाचक संज्ञा', 'जातिवाचक संज्ञा', 'भाववाचक संज्ञा', 'द्रव्यवाचक व समूहवाचक संज्ञा'],
    level: 'beginner',
    category: 'grammar',
    summaryEn: 'Definition, proper, common, abstract, and collective nouns in Hindi sentence structure.',
    keyRuleNative: 'किसी व्यक्ति, वस्तु, स्थान, जाति या भाव के नाम को संज्ञा कहते हैं।',
    examples: [
      { native: 'राम, दिल्ली, हिमालय', translit: 'Ram, Dilli, Himalaya', english: 'Proper nouns (व्यक्तिवाचक)' },
      { native: 'किताब, नदी, लड़का', translit: 'Kitaab, Nadi, Ladka', english: 'Common nouns (जातिवाचक)' },
      { native: 'बचपन, मिठास, सुंदरता', translit: 'Bachpan, Mithaas, Sundarta', english: 'Abstract nouns (भाववाचक)' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H10',
    language: 'hi',
    number: 10,
    titleNative: 'सर्वनाम (Pronouns)',
    titleEn: 'Hindi Pronouns & Honorifics',
    topics: ['पुरुषवाचक (उत्तम, मध्यम, अन्य)', 'निश्चयवाचक व अनिश्चयवाचक', 'संबंधवाचक, प्रश्नवाचक, निजवाचक', 'तू vs तुम vs आप'],
    level: 'beginner',
    category: 'grammar',
    summaryEn: 'Personal, demonstrative, relative, interrogative, reflexive pronouns and polite levels.',
    keyRuleNative: 'बड़ों व आदरणीय व्यक्तियों के लिए सदैव "आप" का प्रयोग होता है और क्रिया बहुवचन होती है।',
    examples: [
      { native: 'मैं, हम', translit: 'Main, Hum', english: 'First person (I, We)' },
      { native: 'तू (घनिष्ठ), तुम (मित्र), आप (आदरणीय)', translit: 'Tu, Tum, Aap', english: 'Second person tiers' },
      { native: 'वह, वे', translit: 'Vah, Ve', english: 'Third person (He/She/They)' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H11',
    language: 'hi',
    number: 11,
    titleNative: 'विशेषण (Adjectives)',
    titleEn: 'Hindi Adjectives & Degrees of Comparison',
    topics: ['गुणवाचक विशेषण', 'संख्यावाचक विशेषण', 'परिमाणवाचक विशेषण', 'सार्वनामिक विशेषण', 'आकारान्त विशेषण में परिवर्तन'],
    level: 'beginner',
    category: 'grammar',
    summaryEn: 'Descriptive, numerical, quantitative, and demonstrative modifiers and inflection with noun gender/number.',
    keyRuleNative: 'आकारान्त विशेषण संज्ञा के लिंग और वचन के अनुसार बदलता है: अच्छा लड़का, अच्छी लड़की, अच्छे लड़के।',
    examples: [
      { native: 'बड़ा घर, बड़ी गाड़ी', translit: 'Bada ghar, badi gaadi', english: 'Big house (M), Big car (F)' },
      { native: 'सुंदर बगीचा', translit: 'Sundar bagicha', english: 'Beautiful garden (Invariable adj)' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H12',
    language: 'hi',
    number: 12,
    titleNative: 'क्रिया (Verbs)',
    titleEn: 'Hindi Verbs & Stems',
    topics: ['सकर्मक क्रिया (Transitive)', 'अकर्मक क्रिया (Intransitive)', 'धातु (Root verb)', 'सहायक क्रिया (हूँ, है, हैं, हो, था, थे)'],
    level: 'beginner',
    category: 'grammar',
    summaryEn: 'Transitive and intransitive dynamics, root stems + infinitive suffix -ना, and auxiliary verbs.',
    keyRuleNative: 'हिन्दी में क्रिया सदैव वाक्य के अंत में आती है और कर्ता अथवा कर्म के लिंग-वचन से अनुबंधित होती है।',
    examples: [
      { native: 'पढ़ना (पढ़् + ना)', translit: 'Padhna', english: 'To read' },
      { native: 'सीता गाना गाती है।', translit: 'Sita gaana gaati hai.', english: 'Sita sings a song.' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H13',
    language: 'hi',
    number: 13,
    titleNative: 'क्रिया विशेषण (Adverbs)',
    titleEn: 'Adverbs of Manner, Time & Place',
    topics: ['रीतिवाचक', 'स्थानवाचक', 'कालवाचक', 'परिमाणवाचक क्रियाविशेषण'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: 'How, when, where, and to what extent an action takes place.',
    keyRuleNative: 'क्रियाविशेषण अव्यय होते हैं, अर्थात् लिंग, वचन या कारक के कारण इनका रूप नहीं बदलता।',
    examples: [
      { native: 'तेज़, धीरे-धीरे', translit: 'Tez, Dhire-dhire', english: 'Fast, Slowly (Manner)' },
      { native: 'यहाँ, वहाँ', translit: 'Yahan, Wahan', english: 'Here, There (Place)' },
      { native: 'कल, आज', translit: 'Kal, Aaj', english: 'Tomorrow/Yesterday, Today (Time)' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H14',
    language: 'hi',
    number: 14,
    titleNative: 'लिंग (Gender)',
    titleEn: 'Grammatical Gender System in Hindi',
    topics: ['पुल्लिंग (Masculine)', 'स्त्रीलिंग (Feminine)', 'लिंग निर्धारण के नियम', 'अपवाद (Exceptions)'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: 'Hindi assigns grammatical gender (masculine or feminine) to ALL inanimate objects and concepts.',
    keyRuleNative: 'हिन्दी में केवल दो लिंग होते हैं (पुल्लिंग व स्त्रीलिंग)। नदियों, भाषाओं के नाम प्रायः स्त्रीलिंग होते हैं।',
    examples: [
      { native: 'लड़का – लड़की', translit: 'Ladka – Ladki', english: 'Boy – Girl' },
      { native: 'सूरज (पुल्लिंग), चाँद (पुल्लिंग), पृथ्वी (स्त्रीलिंग)', translit: 'Suraj, Chand, Prithvi', english: 'Cosmic bodies genders' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H15',
    language: 'hi',
    number: 15,
    titleNative: 'वचन (Singular and Plural)',
    titleEn: 'Number & Pluralization Rules',
    topics: ['एकवचन (Singular)', 'बहुवचन (Plural)', 'आकारांत पुल्लिंग का ए में परिवर्तन', 'स्त्रीलिंग में याँ / ें प्रत्यय'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: 'Direct vs oblique plural rules, creating plural forms of masculine and feminine nouns.',
    keyRuleNative: 'किताब (एकवचन) का बहुवचन "किताबें" होता है, पर परसर्ग (विभक्ति) आने पर "किताबों में" बन जाता है।',
    examples: [
      { native: 'लड़का → लड़के', translit: 'Ladka → Ladke', english: 'Boy → Boys' },
      { native: 'किताब → किताबें', translit: 'Kitaab → Kitaaben', english: 'Book → Books' },
      { native: 'नदी → नदियाँ', translit: 'Nadi → Nadiyan', english: 'River → Rivers' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H16',
    language: 'hi',
    number: 16,
    titleNative: 'कारक and विभक्ति',
    titleEn: 'Cases & Postposition Markers (Karak)',
    topics: ['कर्ता (ने)', 'कर्म (को)', 'करण (से)', 'संप्रदान (के लिए)', 'अपादान (से पृथक्)', 'संबंध (का/की/के)', 'अधिकरण (में/पर)', 'संबोधन (हे/अरे)'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: '8 Grammatical cases in Hindi and their postpositional markers.',
    keyRuleNative: 'भूतकाल में सकर्मक क्रिया होने पर कर्ता के साथ "ने" विभक्ति लगती है (राम ने खाना खाया)।',
    examples: [
      { native: 'राम ने रावण को बाण से मारा।', translit: 'Ram ne Ravan ko baan se maara.', english: 'Ram killed Ravan with an arrow.' },
      { native: 'पेड़ से पत्ता गिरा।', translit: 'Ped se patta gira.', english: 'A leaf fell from the tree (Apadan).' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H17',
    language: 'hi',
    number: 17,
    titleNative: 'काल (Tenses)',
    titleEn: 'Past, Present & Future Tenses',
    topics: ['वर्तमान काल (सामान्य, अपूर्ण, संदिग्ध)', 'भूतकाल (सामान्य, आसन्न, पूर्ण, अपूर्ण)', 'भविष्यत् काल (सामान्य, संभाव्य)'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: 'Complete conjugations across past, present, and future aspectual tiers.',
    keyRuleNative: 'वर्तमान: ता है/ती है/ते हैं; भूत: आ/ई/ए अथवा था/थी/थे; भविष्यत्: गा/गी/गे।',
    examples: [
      { native: 'मैं पढ़ता हूँ।', translit: 'Main padhta hoon.', english: 'I read (Present).' },
      { native: 'मैंने पढ़ा।', translit: 'Maine padha.', english: 'I read (Past).' },
      { native: 'मैं पढ़ूँगा।', translit: 'Main padhunga.', english: 'I will read (Future).' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H18',
    language: 'hi',
    number: 18,
    titleNative: 'पुरुष (Person)',
    titleEn: 'Grammatical Person & Verb Agreement',
    topics: ['उत्तम पुरुष (First person)', 'मध्यम पुरुष (Second person)', 'अन्य पुरुष (Third person)', 'लिंग-वचन संगति'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: 'Harmonizing subjects with verb endings based on person, gender, and plurality.',
    keyRuleNative: 'क्रिया का रूप कर्ता के पुरुष, लिंग और वचन के अनुसार बदलता है (हम जाते हैं, वह जाती है)।',
    examples: [
      { native: 'हम खाना खाते हैं।', translit: 'Hum khana khate hain.', english: 'We eat food.' },
      { native: 'तुम क्या कर रहे हो?', translit: 'Tum kya kar rahe ho?', english: 'What are you doing?' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H19',
    language: 'hi',
    number: 19,
    titleNative: 'वाक्य रचना (Sentence formation)',
    titleEn: 'Hindi Sentence Structure (SOV)',
    topics: ['उद्देश्य व विधेय', 'Subject-Object-Verb (SOV) नियम', 'पदक्रम (Word order)'],
    level: 'intermediate',
    category: 'writing',
    summaryEn: 'Canonical Subject + Object + Verb order in declarative and interrogative Hindi sentences.',
    keyRuleNative: 'अंग्रेज़ी (SVO) के विपरीत हिन्दी में मुख्य क्रिया वाक्य के अंत में आती है (राम [S] आम [O] खाता है [V])।',
    examples: [
      { native: 'अमित बाज़ार जाता है।', translit: 'Amit bazaar jaata hai.', english: 'Amit goes to the market.' },
      { native: 'जब बारिश होती है, तब मैं घर पर रहता हूँ।', translit: 'Jab baarish hoti hai, tab main ghar par rehta hoon.', english: 'When it rains, then I stay at home.' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H20',
    language: 'hi',
    number: 20,
    titleNative: 'वाक्य के प्रकार',
    titleEn: 'Types of Sentences (Simple, Compound, Complex)',
    topics: ['सरल वाक्य', 'संयुक्त वाक्य (और, किंतु, परंतु)', 'मिश्र वाक्य (कि, जो, जब...तब)', 'अर्थ के आधार पर 8 भेद'],
    level: 'intermediate',
    category: 'writing',
    summaryEn: 'Structural classification and semantic types (विधानवाचक, निषेधवाचक, आज्ञावाचक, प्रश्नवाचक, आदि)।',
    keyRuleNative: 'संयुक्त वाक्य स्वतंत्र उपवाक्यों को समुच्चयबोधक (और, लेकिन) से जोड़ता है; मिश्र वाक्य में एक प्रधान व अन्य आश्रित होते हैं।',
    examples: [
      { native: 'मोहन आया और सो गया।', translit: 'Mohan aaya aur so gaya.', english: 'Mohan came and fell asleep (संयुक्त).' },
      { native: 'गाँधीजी ने कहा कि सत्य ही ईश्वर है।', translit: 'Gandhiji ne kaha ki satya hi ishwar hai.', english: 'Gandhiji said that truth is God (मिश्र).' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H21',
    language: 'hi',
    number: 21,
    titleNative: 'उपसर्ग and प्रत्यय',
    titleEn: 'Prefixes (Upsarg) & Suffixes (Pratyay)',
    topics: ['संस्कृत, हिन्दी व उर्दू के उपसर्ग', 'कृत् प्रत्यय (क्रिया से)', 'तद्धित प्रत्यय (संज्ञा/विशेषण से)'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: 'Affixes that precede roots (उपसर्ग) and suffixes that follow stems (प्रत्यय) to generate new vocabulary.',
    keyRuleNative: 'उपसर्ग शब्द के आरंभ में जुड़कर अर्थ बदलते हैं (प्र + हार = प्रहार), प्रत्यय अंत में जुड़ते हैं (सुंदर + ता = सुंदरता)।',
    examples: [
      { native: 'अ + ज्ञान = अज्ञान', translit: 'A + Gyaan = Agyaan', english: 'Ignorance (Prefix A-)' },
      { native: 'मानव + ता = मानवता', translit: 'Maanav + Taa = Maanavta', english: 'Humanity (Suffix -taa)' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H22',
    language: 'hi',
    number: 22,
    titleNative: 'संधि',
    titleEn: 'Sandhi (Phonetic Euphonic Combination)',
    topics: ['स्वर संधि (दीर्घ, गुण, वृद्धि, यण, अयादि)', 'व्यंजन संधि', 'विसर्ग संधि'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: 'Rules governing how adjacent letters merge at word boundaries.',
    keyRuleNative: 'अ/आ + इ/ई = ए (गुण संधि: नर + ईश = नरेश); अ/आ + उ/ऊ = ओ (सूर्य + उदय = सूर्योदय)।',
    examples: [
      { native: 'विद्या + आलय = विद्यालय', translit: 'Vidya + Aalay = Vidyalaya', english: 'School (Dirgha Sandhi)' },
      { native: 'सत् + जन = सज्जन', translit: 'Sat + Jan = Sajjan', english: 'Noble person (Vyanjan Sandhi)' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H23',
    language: 'hi',
    number: 23,
    titleNative: 'समास',
    titleEn: 'Samas (Compound Words)',
    topics: ['अव्ययीभाव', 'तत्पुरुष', 'कर्मधारय', 'द्विगु', 'द्वंद्व', 'बहुव्रीहि समास'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: 'Combining two or more words into a concise compound term without postpositions.',
    keyRuleNative: 'द्वंद्व समास में दोनों पद प्रधान होते हैं (माता-पिता = माता और पिता); द्विगु में पहला पद संख्यावाचक होता है (चौराहा)।',
    examples: [
      { native: 'राजपुत्र = राजा का पुत्र', translit: 'Rajputra = Raja ka putra', english: 'King’s son (Tatpurush)' },
      { native: 'दशानन = दस हैं आनन जिसके (रावण)', translit: 'Dashanan = Ravan', english: 'Ten-headed one (Bahuvrihi)' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H24',
    language: 'hi',
    number: 24,
    titleNative: 'पर्यायवाची शब्द',
    titleEn: 'Hindi Synonyms (Paryayvachi)',
    topics: ['प्राकृतिक तत्वों के पर्याय', 'मानवीय भावनाओं के पर्याय', 'धार्मिक व साहित्यिक पर्याय'],
    level: 'intermediate',
    category: 'vocab',
    summaryEn: 'Expanding vocabulary with multiple interchangeable expressions.',
    keyRuleNative: 'यद्यपि पर्यायवाची समान अर्थ देते हैं, संदर्भ के अनुसार सही शब्द का चयन आवश्यक होता है।',
    examples: [
      { native: 'जल = पानी, नीर, तोय, वारि', translit: 'Jal, Paani, Neer, Toy, Vaari', english: 'Water' },
      { native: 'सूर्य = रवि, भानु, दिनकर, भास्कर', translit: 'Surya, Ravi, Bhaanu, Dinkar', english: 'Sun' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H25',
    language: 'hi',
    number: 25,
    titleNative: 'विलोम शब्द',
    titleEn: 'Antonyms (Vilom Shabd)',
    topics: ['उपसर्ग द्वारा विलोम निर्माण', 'स्वतंत्र विपरीतार्थक शब्द', 'युग्म शब्द'],
    level: 'intermediate',
    category: 'vocab',
    summaryEn: 'Opposite word pairs essential for balanced discourse.',
    keyRuleNative: 'तत्सम शब्द का विलोम तत्सम और तद्भव का विलोम तद्भव होना चाहिए (दिन का रात, दिवस का रात्रि)।',
    examples: [
      { native: 'दिन ↔ रात', translit: 'Din ↔ Raat', english: 'Day ↔ Night' },
      { native: 'सत्य ↔ असत्य', translit: 'Satya ↔ Asatya', english: 'Truth ↔ Falsehood' },
      { native: 'प्रकाश ↔ अंधकार', translit: 'Prakash ↔ Andhkaar', english: 'Light ↔ Darkness' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H26',
    language: 'hi',
    number: 26,
    titleNative: 'अनेकार्थी शब्द',
    titleEn: 'Homonyms & Multi-Meaning Words',
    topics: ['एक शब्द के भिन्न संदर्भ', 'श्लेष अलंकार में प्रयोग', 'दैनिक भाषा में भ्रम निवारण'],
    level: 'intermediate',
    category: 'vocab',
    summaryEn: 'Words that possess entirely distinct definitions depending on grammatical context.',
    keyRuleNative: 'अनेकार्थी शब्द प्रसंगानुसार अर्थ स्पष्ट करते हैं (जैसे कनक का अर्थ सोना भी है और धतूरा भी)।',
    examples: [
      { native: 'कर = हाथ / टैक्स / किरण / करना', translit: 'Kar = Hand / Tax / Ray / To do', english: 'Multiple meanings of Kar' },
      { native: 'तीर = बाण / नदी का किनारा', translit: 'Teer = Arrow / River bank', english: 'Multiple meanings of Teer' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H27',
    language: 'hi',
    number: 27,
    titleNative: 'मुहावरे and लोकोक्तियाँ',
    titleEn: 'Idioms & Proverbs (Muhavare & Lokoktiyan)',
    topics: ['अंग-संबंधी मुहावरे', 'पारंपरिक जनश्रुतियाँ व कहावतें', 'वाक्य में सटीक प्रयोग'],
    level: 'advanced',
    category: 'vocab',
    summaryEn: 'Expressive cultural figures of speech and popular rural proverbs.',
    keyRuleNative: 'मुहावरा लाक्षणिक अर्थ देता है और वाक्य का अंग होता है; लोकोक्ति अपने आप में पूर्ण वाक्य होती है।',
    examples: [
      { native: 'आँखों का तारा होना = अत्यधिक प्रिय होना', translit: 'Aankhon ka tara hona', english: 'Apple of one’s eye' },
      { native: 'नाच न जाने आँगन टेढ़ा = अपनी कमी छुपाने के लिए साधन को दोष देना', translit: 'Naach na jaane aangan tedha', english: 'A bad workman blames his tools' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H28',
    language: 'hi',
    number: 28,
    titleNative: 'विराम चिह्न',
    titleEn: 'Punctuation Marks in Devanagari',
    topics: ['पूर्ण विराम (।)', 'अल्पविराम (,)', 'प्रश्नवाचक (?)', 'विस्मयादिबोधक (!)', 'उद्धरण चिह्न (" ")'],
    level: 'advanced',
    category: 'writing',
    summaryEn: 'Proper usage of Devanagari vertical danda (पूर्णविराम) and modern punctuation.',
    keyRuleNative: 'हिन्दी में वाक्य समाप्ति पर अंग्रेज़ी फुल स्टॉप (.) के स्थान पर पूर्णविराम खड़ी पाई (।) लगाई जाती है।',
    examples: [
      { native: 'भारत मेरा देश है।', translit: 'Bharat mera desh hai.', english: 'India is my country. (Poorna Viram)' },
      { native: 'अरे! तुम कब आए?', translit: 'Are! Tum kab aaye?', english: 'Oh! When did you arrive?' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H29',
    language: 'hi',
    number: 29,
    titleNative: 'शुद्ध वर्तनी and अशुद्धि सुधार',
    titleEn: 'Orthographic Accuracy & Proofreading',
    topics: ['मात्रा संबंधी अशुद्धियाँ', 'लिंग-वचन संगति दोष', 'विभक्ति संबंधी त्रुटियाँ'],
    level: 'advanced',
    category: 'writing',
    summaryEn: 'Detecting and resolving common spelling, diacritic, and syntactic errors in student writing.',
    keyRuleNative: 'अशुद्ध: "मेरे को जाने दो।" → शुद्ध: "मुझे जाने दो।"',
    examples: [
      { native: 'कविइत्री (अशुद्ध) → कवयित्री (शुद्ध)', translit: 'Kavayitri', english: 'Poetess' },
      { native: 'उज्वल (अशुद्ध) → उज्ज्वल (शुद्ध)', translit: 'Ujjwal', english: 'Bright / Radiant' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H30',
    language: 'hi',
    number: 30,
    titleNative: 'पत्र लेखन',
    titleEn: 'Letter Writing (Formal & Informal)',
    topics: ['प्रार्थना पत्र (विद्यालय / कार्यालय)', 'अनौपचारिक पत्र (मित्र / संबंधी)', 'प्रारूप व अभिवादन'],
    level: 'advanced',
    category: 'writing',
    summaryEn: 'Standard Indian letter format: address, date, salutation, body, formal conclusion.',
    keyRuleNative: 'प्रार्थना पत्र में "सेवा में" से प्रारंभ कर अंत में "भवदीय / आपका आज्ञाकारी शिष्य" लिखा जाता है।',
    examples: [
      { native: 'सेवा में, श्रीमान प्रधानाचार्य महोदय...', translit: 'Seva mein, Shriman Pradhanacharya...', english: 'To, The Respected Principal...' },
      { native: 'प्रिय मित्र राहुल, सप्रेम नमस्ते।', translit: 'Priya mitra Rahul, saprem namaste.', english: 'Dear friend Rahul, warm greetings.' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H31',
    language: 'hi',
    number: 31,
    titleNative: 'अनुच्छेद लेखन',
    titleEn: 'Paragraph Composition (Anuchhed)',
    topics: ['केंद्रीय विचार का चयन', 'संक्षिप्तता व तारतम्यता', '80-120 शब्दों में प्रभावशाली रचना'],
    level: 'advanced',
    category: 'writing',
    summaryEn: 'Drafting structured single-topic analytical paragraphs with coherent thematic progression.',
    keyRuleNative: 'अनुच्छेद में अनावश्यक भूमिका नहीं बाँधी जाती; पहली पंक्ति से ही मुख्य विषय पर लिखा जाता है।',
    examples: [
      { native: 'समय का सदुपयोग', translit: 'Samay ka sadupyog', english: 'Proper use of time' },
      { native: 'पर्यावरण संरक्षण', translit: 'Paryavaran sanrakshan', english: 'Environmental protection' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H32',
    language: 'hi',
    number: 32,
    titleNative: 'निबंध लेखन',
    titleEn: 'Full Essay Writing (Nibandh)',
    topics: ['प्रस्तावना (Introduction)', 'विषय-विस्तार (Body arguments)', 'उपसंहार (Conclusion)', 'कोटेशन्स व सूक्तियाँ'],
    level: 'advanced',
    category: 'writing',
    summaryEn: 'Multi-paragraph formal compositions (250-400 words) on social, technological, and national topics.',
    keyRuleNative: 'निबंध के तीन मुख्य अंग होते हैं: प्रस्तावना, मुख्य विषय का विवेचन और उपसंहार (निष्कर्ष)।',
    examples: [
      { native: 'मेरा विद्यालय (My School)', translit: 'Mera Vidyalaya', english: '150-word standard school essay' },
      { native: 'डिजिटल भारत और शिक्षा क्रांति', translit: 'Digital Bharat aur Shiksha Kranti', english: 'Digital India and education' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H33',
    language: 'hi',
    number: 33,
    titleNative: 'संवाद लेखन',
    titleEn: 'Dialogue Writing (Samvaad)',
    topics: ['पात्रानुकूल भाषा', 'स्वाभाविक प्रवाह व संक्षिप्तता', 'दुकानदार-ग्राहक, डॉक्टर-रोगी संवाद'],
    level: 'advanced',
    category: 'communication',
    summaryEn: 'Scripting realistic conversations between two speakers reflecting vernacular nuances.',
    keyRuleNative: 'संवाद में भाषा सरल, पात्र के अनुकूल और कोष्ठक में भाव-भंगिमाएँ दर्शाने वाली होनी चाहिए।',
    examples: [
      { native: 'रोहन: नमस्ते चाचा जी! क्या आपके पास ताज़े सेब हैं?', translit: 'Rohan: Namaste Chacha ji...', english: 'Rohan: Hello Uncle! Do you have fresh apples?' },
      { native: 'फलवाला: हाँ बेटा, अभी कश्मीर से मँगवाए हैं।', translit: 'Phalwala: Haan beta...', english: 'Fruit seller: Yes son, just imported from Kashmir.' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H34',
    language: 'hi',
    number: 34,
    titleNative: 'कहानी लेखन',
    titleEn: 'Story Writing from Outlines (Kahani)',
    topics: ['रूपरेखा से कहानी विस्तार', 'शीर्षक व नैतिक शिक्षा (Moral)', 'कथानक व चरमोत्कर्ष (Climax)'],
    level: 'advanced',
    category: 'writing',
    summaryEn: 'Developing narrative arcs, character dynamics, dialogue, and ethical morals from cue points.',
    keyRuleNative: 'कहानी भूतकाल में लिखी जाती है और अंत में एक शिक्षाप्रद सीख (Moral) अवश्य दी जाती है।',
    examples: [
      { native: 'सच्चा मित्र वही जो विपत्ति में काम आए।', translit: 'Sachha mitra vahi...', english: 'A friend in need is a friend indeed.' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H35',
    language: 'hi',
    number: 35,
    titleNative: 'अपठित गद्यांश',
    titleEn: 'Unseen Reading Comprehension (Prose)',
    topics: ['तीव्र पठन कौशल', 'शीर्षक चयन', 'तथ्यात्मक व भावपूर्ण प्रश्नों के उत्तर'],
    level: 'advanced',
    category: 'reading',
    summaryEn: 'Reading authentic modern Hindi prose paragraphs and answering multi-level comprehension questions.',
    keyRuleNative: 'प्रश्नों के उत्तर गद्यांश की भाषा में ही नहीं, अपने शब्दों में सटीक भाव के साथ लिखने चाहिए।',
    examples: [
      { native: 'वैज्ञानिक युग और मानव मूल्य पर गद्यांश', translit: 'Passage on scientific age', english: 'Comprehension on modern technology' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H36',
    language: 'hi',
    number: 36,
    titleNative: 'अपठित काव्यांश',
    titleEn: 'Poetry Comprehension & Analysis',
    topics: ['काव्य की पंक्तियों का भावार्थ', 'रस, छंद व अलंकार की पहचान', 'प्रतीकात्मक अर्थ'],
    level: 'advanced',
    category: 'reading',
    summaryEn: 'Decoding lyrical verses, rhythm, figurative expressions, and emotional core in Hindi poetry.',
    keyRuleNative: 'काव्यांश के उत्तर में कवि का मूल संदेश और प्रतीकों (Symbols) का रहस्य उजागर किया जाता है।',
    examples: [
      { native: 'प्रकृति सौंदर्य और देशभक्ति कविताएँ', translit: 'Nature and patriotic poems', english: 'Lyrical interpretation' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H37',
    language: 'hi',
    number: 37,
    titleNative: 'कविता and पद्य',
    titleEn: 'Versification, Doha, Chaupai & Meter',
    topics: ['दोहा व चौपाई की मात्रा गणना', 'तुकबंदी (Rhyme scheme)', 'छायावादी व आधुनिक कविताएँ'],
    level: 'advanced',
    category: 'literature',
    summaryEn: 'Classic poetic meters, rhyming pairs, and modernist free-verse idioms.',
    keyRuleNative: 'दोहे के पहले व तीसरे चरण में 13-13 तथा दूसरे व चौथे चरण में 11-11 मात्राएँ होती हैं।',
    examples: [
      { native: 'गुरु गोविंद दोऊ खड़े, काके लागूं पांय। बलिहारी गुरु आपनो, गोविंद दियो बताय॥', translit: 'Guru Govind do-oo khade...', english: 'Kabir’s famous couplet on Teacher and God.' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H38',
    language: 'hi',
    number: 38,
    titleNative: 'हिंदी साहित्य and प्रमुख लेखक',
    titleEn: 'Hindi Literature & Prominent Authors',
    topics: ['भारतेन्दु युग से आधुनिक काल', 'मुंशी प्रेमचंद (उपन्यास सम्राट)', 'महादेवी वर्मा, दिनकर व बच्चन जी की रचनाएँ'],
    level: 'advanced',
    category: 'literature',
    summaryEn: 'Survey of Hindi literary movements, golden era prose, and foundational authors.',
    keyRuleNative: 'प्रेमचंद ने यथार्थवादी सामाजिक उपन्यासों (गोदान, गबन, ईदगाह) के माध्यम से हिन्दी को विश्व स्तर पर पहुँचाया।',
    examples: [
      { native: 'गोदान, कफ़न, ईदगाह - मुंशी प्रेमचंद', translit: 'Godaan, Kafan, Idgah', english: 'Premchand masterpieces' },
      { native: 'मधुशाला - हरिवंश राय बच्चन', translit: 'Madhushala', english: 'Harivansh Rai Bachchan’s poetic classic' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H39',
    language: 'hi',
    number: 39,
    titleNative: 'औपचारिक and अनौपचारिक भाषा',
    titleEn: 'Register: Formal vs Informal Hindi',
    topics: ['सरकारी कामकाज की भाषा (पारिभाषिक शब्दावली)', 'दैनिक बोलचाल व बाज़ार की भाषा', 'साक्षात्कार व सार्वजनिक भाषण'],
    level: 'advanced',
    category: 'communication',
    summaryEn: 'Adapting language register from bureaucratic administrative terminology to colloquial intimacy.',
    keyRuleNative: 'कार्यालयी भाषा में स्पष्टता, वस्तुनिष्ठता और पारिभाषिक शब्दों का प्रयोग होता है (जैसे: अनुमोदन, परिपत्र)।',
    examples: [
      { native: 'आवेदन पत्र स्वीकृत कर लिया गया है।', translit: 'Aavedan patra sweekrit...', english: 'Application has been approved (Formal).' },
      { native: 'अरे यार, चल चाय पीते हैं।', translit: 'Are yaar, chal chai peete hain.', english: 'Hey buddy, let’s grab tea (Informal).' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'H40',
    language: 'hi',
    number: 40,
    titleNative: 'Translation and advanced composition',
    titleEn: 'Bilingual Translation (English ↔ Hindi)',
    topics: ['वाक्य-से-वाक्य अनुवाद', 'मुहावरेदार अनुवाद की चुनौतियाँ', 'तकनीकी व विधिक अनुवाद अभ्यास'],
    level: 'advanced',
    category: 'communication',
    summaryEn: 'Accurate two-way translation handling syntax shifts (SVO to SOV), cultural idioms, and register.',
    keyRuleNative: 'शाब्दिक (Literal) अनुवाद के स्थान पर भावानुवाद (Idiomatic/Sense-for-sense) करना श्रेयस्कर होता है।',
    examples: [
      { native: 'Honesty is the best policy. → ईमानदारी सर्वोत्तम नीति है।', translit: 'Imandari sarvottam neeti hai.', english: 'Proverbial translation' },
      { native: 'She is reading a book. → वह एक किताब पढ़ रही है।', translit: 'Vah ek kitaab padh rahi hai.', english: 'Continuous tense translation' }
    ],
    practiceQuestionsCount: 10
  }
];

// =========================================================================
// 2. BENGALI 40 CHAPTERS (B01-B40)
// =========================================================================

export const BENGALI_CHAPTERS: ChapterItem[] = [
  {
    code: 'B01',
    language: 'bn',
    number: 1,
    titleNative: 'বাংলা ভাষার ভূমিকা',
    titleEn: 'Introduction to Bengali (Bangla)',
    topics: ['History of Bangla', 'Eastern Indo-Aryan family', 'Sadhu bhasha vs Cholito bhasha', 'Bengali-Assamese script'],
    level: 'beginner',
    category: 'script',
    summaryEn: 'Origins from Magadhi Prakrit, development of Cholito (modern colloquial) and Sadhu (formal literary) styles.',
    keyRuleNative: 'বাংলা ভাষায় ব্যাকরণগত লিঙ্গ নেই—স্ত্রী বা পুরুষভেদে ক্রিয়াপদের কোনো পরিবর্তন হয় না।',
    examples: [
      { native: 'নমস্কার / আসসালামু আলাইকুম', translit: 'Nomoshkar / Assalamu alaikum', english: 'Greetings' },
      { native: 'বাংলা আমাদের মাতৃভাষা।', translit: 'Bangla amader matribhasha.', english: 'Bengali is our mother tongue.' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B02',
    language: 'bn',
    number: 2,
    titleNative: 'স্বরবর্ণ (Vowels)',
    titleEn: 'Bengali Vowels (Shoroborno)',
    topics: ['১১টি স্বরবর্ণ (অ, আ, ই, ঈ, উ, ঊ, ঋ, এ, ঐ, ও, ঔ)', 'হ্রস্ব ও দীর্ঘ স্বর', 'অ-ধ্বনির সংবৃত ও বিবৃত উচ্চারণ'],
    level: 'beginner',
    category: 'phonetics',
    summaryEn: '11 independent vowel characters and the unique open vs closed pronunciation of the inherent "O" sound.',
    keyRuleNative: 'বাংলায় "অ" বর্ণের উচ্চারণ কখনো "অ" (যেমন: অনেক), কখনো "ও"-এর মতো (যেমন: অতি) হয়।',
    examples: [
      { native: 'আম', translit: 'Aam', english: 'Mango' },
      { native: 'বই', translit: 'Boi', english: 'Book' },
      { native: 'ঋতু', translit: 'Ritu', english: 'Season' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B03',
    language: 'bn',
    number: 3,
    titleNative: 'ব্যঞ্জনবর্ণ (Consonants)',
    titleEn: 'Bengali Consonants (Byanjonborno)',
    topics: ['৩৯টি ব্যঞ্জনবর্ণ', 'স্পর্শ বর্ণ (ক থেকে ম)', 'অন্তঃস্থ বর্ণ ও উষ্ম বর্ণ', 'ড়, ঢ়, য় এবং খণ্ড-ত (ৎ)'],
    level: 'beginner',
    category: 'phonetics',
    summaryEn: '39 consonants, retroflex flapped consonants (ড়, ঢ়), anusvara (ং), visarga (ঃ), and candrabindu (ঁ).',
    keyRuleNative: 'খণ্ড-ত (ৎ) হলো ‘ত’-এর স্বরহীন রূপ, যা কেবল শব্দের মাঝে বা শেষে বসে।',
    examples: [
      { native: 'কলম', translit: 'Kolom', english: 'Pen' },
      { native: 'মাটি', translit: 'Maati', english: 'Soil / Earth' },
      { native: 'হঠাৎ', translit: 'Hothat', english: 'Suddenly (Khanda-ta)' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B04',
    language: 'bn',
    number: 4,
    titleNative: 'বাংলা বর্ণমালা ও লিখন রীতি',
    titleEn: 'Bengali Alphabet & Penmanship',
    topics: ['মাত্রা ও মাত্রাহীন বর্ণ', 'পূর্ণমাত্রা, অর্ধমাত্রা ও মাত্রাহীন বর্ণের তালিকা', 'সঠিক হস্তলিপির নিয়ম'],
    level: 'beginner',
    category: 'script',
    summaryEn: 'Mastering top headline (matra) rules: full matra (ক, গ), half matra (খ, ণ), and matra-less letters (এ, ও).',
    keyRuleNative: 'বাংলায় ৩২টি পূর্ণমাত্রা, ৮টি অর্ধমাত্রা এবং ১০টি মাত্রাহীন বর্ণ রয়েছে।',
    examples: [
      { native: 'ক, খ, গ, ঘ, ঙ', translit: 'Ka, Kha, Ga, Gha, Uma', english: 'Velar group with matra variants' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B05',
    language: 'bn',
    number: 5,
    titleNative: 'কার and Vowel Signs',
    titleEn: 'Vowel Diacritics (Kaar)',
    topics: ['১০টি কার চিহ্ন (া, ি, ী, ু, ূ, ৃ, ে, ৈ, ো, ঔ)', 'অ-এর কোনো স্বতন্ত্র কার নেই'],
    level: 'beginner',
    category: 'script',
    summaryEn: 'Post-consonantal, pre-consonantal, and flanking vowel signs (like ে + া = ো).',
    keyRuleNative: '‘এ-কার’ (ে) বর্ণের আগে বসে এবং ‘ও-কার’ (ো) বর্ণের দুই পাশে ঘিরে বসে।',
    examples: [
      { native: 'ক + া = কা (কাকা)', translit: 'Kaakaa', english: 'Uncle' },
      { native: 'ক + ো = কো (কোকিল)', translit: 'Kokil', english: 'Cuckoo' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B06',
    language: 'bn',
    number: 6,
    titleNative: 'যুক্তবর্ণ (Conjunct letters)',
    titleEn: 'Conjunct Consonants (Juktoborno)',
    topics: ['নিত্য যুক্তবর্ণ (ক্ষ, জ্ঞ, ষ্ণ, ঙ্গ, ক্ত)', 'র-ফলা (্র) ও য-ফলা (্য)', 'ব-ফলা ও ম-ফলা'],
    level: 'beginner',
    category: 'script',
    summaryEn: 'Over 150 complex consonant clusters, visual ligature changes, and doubled sounds.',
    keyRuleNative: 'য-ফলা (্য) শব্দের শুরুতে বসলে ‘অ্যা’ ধ্বনি তৈরি করে (যেমন: ব্যক্তি = ব্যাকতি)।',
    examples: [
      { native: 'ক্ষ (ক+ষ)', translit: 'Khyo', english: 'Conjuct K+Sh (শিক্ষা - Education)' },
      { native: 'জ্ঞান (জ+ঞ)', translit: 'Gyan', english: 'Knowledge' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B07',
    language: 'bn',
    number: 7,
    titleNative: 'Bengali Pronunciation',
    titleEn: 'Phonology & Intonation',
    topics: ['নাসিক্য ধ্বনি ও চন্দ্রবিন্দু', 'শ, ষ, স-এর উচ্চারণ বৈচিত্র্য', 'মহাপ্রাণ ধ্বনির স্পষ্টতা'],
    level: 'beginner',
    category: 'phonetics',
    summaryEn: 'Standard Kolkata and Dhaka pronunciation norms, sibilant merges to [ʃ], and nasalization.',
    keyRuleNative: 'বাংলায় শ, ষ, স তিনটির উচ্চারণই প্রায় সবসময় তালব্য ‘শ’ (sh)-এর মতো হয়।',
    examples: [
      { native: 'চাঁদ', translit: 'Chaand', english: 'Moon (Nasalized)' },
      { native: 'শান্তি', translit: 'Shanti', english: 'Peace' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B08',
    language: 'bn',
    number: 8,
    titleNative: 'Spelling and word formation',
    titleEn: 'Bengali Orthography & Word Roots',
    topics: ['তৎসম, তদ্ভব, দেশি ও বিদেশি শব্দ', 'ণ-ত্ব ও ষ-ত্ব বিধান', 'বাংলা একাডেমি প্রমিত বানান নিয়ম'],
    level: 'beginner',
    category: 'vocab',
    summaryEn: 'Standard Bangla Academy spelling rules, Natva and Shatva Vidhan in Sanskrit borrowings.',
    keyRuleNative: 'ট-বর্গীয় ধ্বনির আগে যুক্ত হলে সর্বদাই মূর্ধন্য ‘ণ’ হয় (যেমন: ঘণ্টা, কাণ্ড)।',
    examples: [
      { native: 'সূর্য, চাঁদ, হাট, চেয়ার', translit: 'Surjo, Chand, Haat, Chair', english: 'Tatsama, Tadbhava, Deshi, Foreign' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B09',
    language: 'bn',
    number: 9,
    titleNative: 'বিশেষ্য (Nouns)',
    titleEn: 'Bengali Nouns (Bisheshyo)',
    topics: ['নামবাচক, জাতিবাচক, বস্তুবাচক, গুণবাচক ও ক্রিয়াবাচক বিশেষ্য', 'বহুবচনের রূপ (রা, এরা, গুলি, গুলো)'],
    level: 'beginner',
    category: 'grammar',
    summaryEn: 'Types of nouns and plural marker attachments.',
    keyRuleNative: 'মানুষ বা প্রাণীদের ক্ষেত্রে ‘-রা / -এরা’ এবং অপ্রাণিবাচক বস্তুর ক্ষেত্রে ‘-গুলো / -গুলি’ ব্যবহৃত হয়।',
    examples: [
      { native: 'ছেলে → ছেলেরা', translit: 'Chhele → Chheleraa', english: 'Boy → Boys' },
      { native: 'বই → বইগুলো', translit: 'Boi → Boigulo', english: 'Book → Books' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B10',
    language: 'bn',
    number: 10,
    titleNative: 'সর্বনাম (Pronouns)',
    titleEn: 'Bengali Pronouns & Honorific Tiers',
    topics: ['আমি, তুমি, আপনি, তুই, সে, তিনি, তারা, তাঁরা', 'অন্তরঙ্গ vs সাধারণ vs সম্ভ্রান্ত স্তর'],
    level: 'beginner',
    category: 'grammar',
    summaryEn: 'Three-tier formality system (তুই intimate, তুমি familiar, আপনি formal) with corresponding 3rd person tiers (সে, তিনি).',
    keyRuleNative: 'চন্দ্রবিন্দুযুক্ত সর্বনাম (তিনি, তাঁরা, যাঁর) গুরুজন ও সম্মানিত ব্যক্তিদের ক্ষেত্রে ব্যবহৃত হয়।',
    examples: [
      { native: 'আমি বই পড়ি।', translit: 'Aami boi podi.', english: 'I read books.' },
      { native: 'তিনি আমাদের শিক্ষক।', translit: 'Tini amader shikkhok.', english: 'He is our teacher (Honorific).' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B11',
    language: 'bn',
    number: 11,
    titleNative: 'বিশেষণ (Adjectives)',
    titleEn: 'Bengali Adjectives (Bisheshan)',
    topics: ['গুণবাচক ও সংখ্যাবাচক বিশেষণ', 'বিশেষ্যের বিশেষণ ও ক্রিয়ার বিশেষণ', 'তুলনামূলক মাত্রা (তর, তম)'],
    level: 'beginner',
    category: 'grammar',
    summaryEn: 'Adjectives in Bengali do NOT inflect for gender or number.',
    keyRuleNative: 'বিশেষণ পদের রূপ কোনো অবস্থাতেই লিঙ্গ বা বচনের সাথে পরিবর্তিত হয় না (ভালো ছেলে, ভালো মেয়ে)।',
    examples: [
      { native: 'সুন্দর ফুল, বড় নদী', translit: 'Sundor phul, Bodo nodi', english: 'Beautiful flower, Big river' },
      { native: 'ভালো', translit: 'Bhalo', english: 'Good' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B12',
    language: 'bn',
    number: 12,
    titleNative: 'ক্রিয়া (Verbs)',
    titleEn: 'Bengali Verbs (Kriya) & Conjugations',
    topics: ['ধাতু ও ক্রিয়াপদ', 'সমাপিকা ও অসমাপিকা ক্রিয়া', 'পুরুষভেদে রূপ পরিবর্তন (আমি খাই, তুমি খাও, আপনি খান)'],
    level: 'beginner',
    category: 'grammar',
    summaryEn: 'Verb roots, finite vs non-finite verbs, person-based endings with NO gender differentiation.',
    keyRuleNative: 'বাংলা ক্রিয়ায় কোনো লিঙ্গভেদ নেই—পুরুষ ও স্ত্রী উভয়ের জন্যই "সে যায়" ব্যবহৃত হয়।',
    examples: [
      { native: 'খাওয়া, যাওয়া, পড়া', translit: 'Khaoa, Jaoa, Poda', english: 'To eat, to go, to read' },
      { native: 'আমি প্রতিদিন স্কুলে যাই।', translit: 'Aami protidin schoole jaai.', english: 'I go to school every day.' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B13',
    language: 'bn',
    number: 13,
    titleNative: 'ক্রিয়া বিশেষণ (Adverbs)',
    titleEn: 'Bengali Adverbs of Manner & Time',
    topics: ['কীভাবে, কখন, কোথায় নির্দেশক পদ', 'দ্বিরুক্ত শব্দের ব্যবহার (ধীরে ধীরে, ঝমঝম)'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: 'Reduplicated onomatopoeic and manner adverbs in Bengali discourse.',
    keyRuleNative: 'বাংলায় দ্বিরুক্তি (একই শব্দ দুইবার) ক্রিয়াবিশেষণে বিশেষ ধ্বনিমাধুর্য যোগ করে।',
    examples: [
      { native: 'বৃষ্টি ঝমঝম করে পড়ছে।', translit: 'Brishti jhomjhom kore podche.', english: 'Rain is falling heavily.' },
      { native: 'সে দ্রুত দৌড়ায়।', translit: 'Se druto douday.', english: 'He runs quickly.' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B14',
    language: 'bn',
    number: 14,
    titleNative: 'লিঙ্গ and gender concepts',
    titleEn: 'Natural Gender Concepts in Bengali',
    topics: ['পুংলিঙ্গ ও স্ত্রীলিঙ্গ শব্দার্থ', 'লিঙ্গ পরিবর্তন প্রত্যয় (ী, ইনি, আনী)', 'ব্যাকরণগত লিঙ্গের অনুপস্থিতি'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: 'Understanding that gender in Bengali is semantic/biological only, never affecting verbs or adjectives.',
    keyRuleNative: 'হিন্দি ও মারাঠির মতো বাংলায় কোনো ব্যাকরণগত লিঙ্গ নেই; টেবিলে বা কলমে কোনো লিঙ্গ নির্ধারিত হয় না।',
    examples: [
      { native: 'কাকা – কাকিমা', translit: 'Kaka – Kakima', english: 'Uncle – Aunt' },
      { native: 'ছাত্র – ছাত্রী', translit: 'Chhatra – Chhatri', english: 'Male student – Female student' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B15',
    language: 'bn',
    number: 15,
    titleNative: 'বচন (Number)',
    titleEn: 'Singular & Plural (Bochon)',
    topics: ['একবচন ও বহুবচন', 'বহুবচনের প্রত্যয় (রা, এরা, গুলি, গুলো, দের)', 'নির্দেশক শব্দ (টি, টা, খানি, খানা)'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: 'Definite articles / classifiers (-ta, -ti) and pluralization of pronouns and nouns.',
    keyRuleNative: '-টা এবং -টি দ্বারা নির্দিষ্টতা বোঝায়: -টি দ্বারা স্নেহ/ক্ষুদ্রতা, -টা সাধারণ নির্দেশ করে (বইটি vs বইটা)।',
    examples: [
      { native: 'কলমটি খুব সুন্দর।', translit: 'Kolomti khub sundor.', english: 'The pen is very nice.' },
      { native: 'আমাদের বন্ধুরা আসবে।', translit: 'Amader bondhura ashbe.', english: 'Our friends will come.' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B16',
    language: 'bn',
    number: 16,
    titleNative: 'বিভক্তি and case markers',
    titleEn: 'Case Endings (Bhibhokti)',
    topics: ['প্রথমা (০), দ্বিতীয়া (কে), তৃতীয়া (দিয়ে/দ্বারা), চতুর্থী (কে/জন্য), পঞ্চমী (থেকে), ষষ্ঠী (র/এর), সপ্তমী (এ/তে/য়ে)'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: '7 Bengali grammatical case suffixes directly fused to the noun or pronoun.',
    keyRuleNative: 'ষষ্ঠী বিভক্তি (-র/-এর) মালিকানা বা সম্পর্ক নির্দেশ করে (যেমন: রামের বই, ভারতবর্ষের ইতিহাস)।',
    examples: [
      { native: 'আমি ভাইকে বই দিলাম।', translit: 'Aami bhaike boi dilam.', english: 'I gave the book to brother (দ্বিতীয়া/কে).' },
      { native: 'গাছ থেকে ফল পড়ল।', translit: 'Gaach theke phol podlo.', english: 'Fruit fell from the tree (পঞ্চমী/থেকে).' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B17',
    language: 'bn',
    number: 17,
    titleNative: 'কাল (Tenses)',
    titleEn: 'Tenses in Bengali',
    topics: ['বর্তমান কাল (সাধারণ, ঘটমান, পুরাঘটিত)', 'অতীত কাল (নিত্যবৃত্ত, ঘটমান, পুরাঘটিত)', 'ভবিষ্যৎ কাল'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: 'Conjugating verbs across habit, progressive, and perfective states in past, present, and future.',
    keyRuleNative: 'অতীতের সাধারণ অভ্যাস বোঝাতে নিত্যবৃত্ত অতীত (-তাম/-তে/-তেন) ব্যবহৃত হয় (যেমন: আমি রোজ যেতাম)।',
    examples: [
      { native: 'আমি বই পড়ি।', translit: 'Aami boi podi.', english: 'I read a book (Present).' },
      { native: 'আমি বই পড়েছিলাম।', translit: 'Aami boi podhechhilam.', english: 'I had read a book (Past).' },
      { native: 'আমি বই পড়ব।', translit: 'Aami boi podbo.', english: 'I will read a book (Future).' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B18',
    language: 'bn',
    number: 18,
    titleNative: 'পুরুষ (Person)',
    titleEn: 'Person in Verb Conjugations (Purush)',
    topics: ['উত্তম পুরুষ (আমি, আমরা)', 'মধ্যম পুরুষ (তুমি, তুই, আপনি)', 'নাম পুরুষ (সে, তিনি, তারা)'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: 'Matching personal pronouns with dedicated verb suffixes (-ই, -ও, -েন, -ে).',
    keyRuleNative: 'আপনি ও তিনি উভয়ের শেষেই সম্ভ্রান্ত ‘-েন’ প্রত্যয় যুক্ত হয় (আপনি করেন, তিনি বলেন)।',
    examples: [
      { native: 'আমি করি, তুমি করো, আপনি করেন, সে করে, তিনি করেন', translit: 'Kori, koro, koren, kore, koren', english: 'Person paradigm of Kora (To do)' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B19',
    language: 'bn',
    number: 19,
    titleNative: 'বাক্য গঠন (Sentence formation)',
    titleEn: 'Bengali Sentence Structure (SOV)',
    topics: ['কর্তা, কর্ম ও ক্রিয়া ক্রম', 'নেতিবাচক রূপ (না, নি)', 'প্রশ্নের বাক্য'],
    level: 'intermediate',
    category: 'writing',
    summaryEn: 'Subject + Object + Verb order, positioning "না" at the very end of sentences.',
    keyRuleNative: 'হিন্দির বিপরীত, বাংলায় না-বোধক অব্যয় "না" ক্রিয়ার পরে বসে (আমি যাব না, সে খায় না)।',
    examples: [
      { native: 'আমি যাব না।', translit: 'Aami jaabo naa.', english: 'I will not go (Negative after verb).' },
      { native: 'তুমি কোথায় যাচ্ছ?', translit: 'Tumi kothay jachho?', english: 'Where are you going?' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B20',
    language: 'bn',
    number: 20,
    titleNative: 'বাক্যের প্রকারভেদ',
    titleEn: 'Simple, Complex & Compound Sentences',
    topics: ['সরল বাক্য', 'জটিল বাক্য (যদি...তবে, যে...সে)', 'যৌগিক বাক্য (এবং, কিন্তু, অথবা)'],
    level: 'intermediate',
    category: 'writing',
    summaryEn: 'Classifying Bengali sentences by grammatical syntax and rhetorical intent.',
    keyRuleNative: 'জটিল বাক্যে সাপেক্ষ সর্বনাম জোড়া ব্যবহৃত হয় (যেমন: যিনি পরিশ্রম করেন, তিনিই সফল হন)।',
    examples: [
      { native: 'সূর্য উঠলে কুয়াশা দূর হয়।', translit: 'Surjo uthle...', english: 'When sun rises, fog clears (Simple).' },
      { native: 'তিনি ধনী কিন্তু সুখী নন।', translit: 'Tini dhoni kintu...', english: 'He is rich but not happy (Compound).' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B21',
    language: 'bn',
    number: 21,
    titleNative: 'শব্দের শ্রেণিবিভাগ',
    titleEn: 'Bengali Lexicon Classification',
    topics: ['উৎসমূলক (তৎসম, তদ্ভব, দেশি, বিদেশি)', 'গঠনমূলক (মৌলিক ও সাধিত)', 'অর্থমূলক শব্দ'],
    level: 'intermediate',
    category: 'vocab',
    summaryEn: 'Etymological stratification: Sanskrit roots, indigenous Austronesian/Dravidian substrate, and Persian/English loanwords.',
    keyRuleNative: 'দেশি শব্দ ভারতীয় মূল আদিবাসী ভাষার অবশিষ্টাংশ (যেমন: কুলা, ঢেঁকি, ডাব)।',
    examples: [
      { native: 'ডাব, পেট, খোকা', translit: 'Daab, Pet, Khoka', english: 'Deshi words' },
      { native: 'কাগজ, কলম, টেবিল', translit: 'Kaagoj, Kolom, Table', english: 'Foreign loanwords' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B22',
    language: 'bn',
    number: 22,
    titleNative: 'সন্ধি',
    titleEn: 'Sandhi in Bengali',
    topics: ['স্বরসন্ধি', 'ব্যঞ্জনসন্ধি', 'বিসর্গসন্ধি', 'বাংলা খাঁটি সন্ধি'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: 'Phonetic merging rules for Tatsama words and colloquial Bengali contractions.',
    keyRuleNative: 'অ/আ + ই/ঈ = এ (শুভ + ইচ্ছা = শুভেচ্ছা); অ/আ + উ/ঊ = ও (সূর্য + উদয় = সূর্যোদয়)।',
    examples: [
      { native: 'বিদ্যা + আলয় = বিদ্যালয়', translit: 'Biddaloy', english: 'School' },
      { native: 'দিক্ + অন্ত = দিগন্ত', translit: 'Diganta', english: 'Horizon' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B23',
    language: 'bn',
    number: 23,
    titleNative: 'উপসর্গ and প্রত্যয়',
    titleEn: 'Prefixes & Suffixes in Bengali',
    topics: ['খাঁটি বাংলা উপসর্গ (অ, অঘা, অজ, অনা, কু, নি)', 'সংস্কৃত উপসর্গ (প্র, পরা, অপ)', 'বিদেশি উপসর্গ'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: '21 native Bengali prefixes, 20 Sanskrit prefixes, and inflectional/derivational suffixes.',
    keyRuleNative: 'উপসর্গ নিজস্ব অর্থহীন কিন্তু অন্য শব্দের পূর্বে বসে নতুন অর্থ সৃষ্টি করে (যেমন: হার → আহার, প্রহার, উপহার)।',
    examples: [
      { native: 'উপ + হার = উপহার', translit: 'Upohaar', english: 'Gift' },
      { native: 'ঢাকা + আই = ঢাকাই', translit: 'Dhakai', english: 'From Dhaka (Suffix -ai)' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B24',
    language: 'bn',
    number: 24,
    titleNative: 'সমার্থক শব্দ',
    titleEn: 'Bengali Synonyms (Shomarthok Shobdo)',
    topics: ['জল, আগুন, আকাশ, পৃথিবী, বাতাস-এর সমার্থক শব্দ', 'কাব্যিক ও দৈনন্দিন প্রতিশব্দ'],
    level: 'intermediate',
    category: 'vocab',
    summaryEn: 'Synonym banks for descriptive enrichment.',
    keyRuleNative: 'জল = পানি, সলিল, বারি, নীর, উদক, পয়।',
    examples: [
      { native: 'জল = পানি, বারি, নীর', translit: 'Jol, Paani, Baari, Neer', english: 'Water' },
      { native: 'আকাশ = গগন, অম্বর, ব্যোম', translit: 'Aakash, Gogon, Ombor', english: 'Sky' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B25',
    language: 'bn',
    number: 25,
    titleNative: 'বিপরীতার্থক শব্দ',
    titleEn: 'Bengali Antonyms (Biporitarthok Shobdo)',
    topics: ['ন-কারক বিপরীত শব্দ', 'স্বতন্ত্র শব্দজোড়', 'অনুশীলনী'],
    level: 'intermediate',
    category: 'vocab',
    summaryEn: 'Complementary opposite pairs essential for logical precision.',
    keyRuleNative: 'ভালো ↔ খারাপ, দিন ↔ রাত, ধনী ↔ গরিব।',
    examples: [
      { native: 'ভালো ↔ খারাপ', translit: 'Bhalo ↔ Kharap', english: 'Good ↔ Bad' },
      { native: 'আলো ↔ অন্ধকার', translit: 'Aalo ↔ Ondhokaar', english: 'Light ↔ Darkness' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B26',
    language: 'bn',
    number: 26,
    titleNative: 'বাগধারা and প্রবাদ',
    titleEn: 'Bengali Idioms & Proverbs (Bagdhara)',
    topics: ['বিখ্যাত বাগধারা (আক্কেল সেলামি, গোঁফ খেজুরে)', 'গ্রামবাংলার জনপ্রিয় প্রবাদ ও উপকথা'],
    level: 'advanced',
    category: 'vocab',
    summaryEn: 'Quintessential idiomatic tropes and folklore aphorisms.',
    keyRuleNative: 'বাগধারা রূপক অর্থ প্রকাশ করে (যেমন: ডুমুরের ফুল = দুর্লভ বস্তু)।',
    examples: [
      { native: 'ডুমুরের ফুল = দুর্লভ বস্তু', translit: 'Dumurer phul', english: 'Rare sight / Rarity' },
      { native: 'চোরের মায়ের বড় গলা = অন্যায়কারীর আস্ফালন', translit: 'Chorer mayer bodo gola', english: 'Guilty barking loudest' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B27',
    language: 'bn',
    number: 27,
    titleNative: 'বিরামচিহ্ন',
    titleEn: 'Bengali Punctuation Rules',
    topics: ['দাঁড়ি (।)', 'কমা (,)', 'সেমিকোলন (;)', 'প্রশ্নচিহ্ন (?)', 'বিস্ময়চিহ্ন (!)'],
    level: 'advanced',
    category: 'writing',
    summaryEn: 'The traditional Bengali dandi (।) and adapted European punctuation standards.',
    keyRuleNative: 'বাংলায় বাক্য সমাপ্তিতে শুধুমাত্র দাঁড়ি (।) বসে, কোনো ডট (.) দেওয়া অনুচিত।',
    examples: [
      { native: 'আমার সোনার বাংলা, আমি তোমায় ভালোবাসি।', translit: 'Amar sonar bangla...', english: 'My golden Bengal, I love you (National anthem).' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B28',
    language: 'bn',
    number: 28,
    titleNative: 'শুদ্ধ বানান',
    titleEn: 'Bengali Spelling Accuracy & Reform',
    topics: ['ই/ঈ কারের নিয়ম', 'উ/ঊ কারের নিয়ম', 'ন/ণ এবং শ/ষ/স-এর সঠিক প্রয়োগ'],
    level: 'advanced',
    category: 'writing',
    summaryEn: 'Bengali Academy reforms eliminating archaic double-spellings for Tadbhava and loan terms.',
    keyRuleNative: 'সকল অতৎসম (তদ্ভব, দেশি, বিদেশি) শব্দে কেবল হ্রস্ব ‘ই’ এবং ‘উ’ কার ব্যবহৃত হবে (যেমন: পাখি, বাড়ি, শাড়ি)।',
    examples: [
      { native: 'পাখী (ভুল) → পাখি (শুদ্ধ)', translit: 'Paakhi', english: 'Bird' },
      { native: 'দায়ীত্ব (ভুল) → দায়িত্ব (শুদ্ধ)', translit: 'Dayitto', english: 'Responsibility' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B29',
    language: 'bn',
    number: 29,
    titleNative: 'অনুচ্ছেদ রচনা',
    titleEn: 'Paragraph Writing in Bengali',
    topics: ['একটি সুনির্দিষ্ট ভাব', 'ভাষার প্রাঞ্জলতা', '১০০-১৫০ শব্দে অনুচ্ছেদ গঠন'],
    level: 'advanced',
    category: 'writing',
    summaryEn: 'Concise paragraph development focusing on unity, order, and Bengali stylistic elegance.',
    keyRuleNative: 'অনুচ্ছেদের প্রথম বাক্যটি মূল ভাব প্রকাশ করে এবং শেষ বাক্য সিদ্ধান্ত টেনে আনে।',
    examples: [
      { native: 'আমার পরিবার (My Family)', translit: 'Amar Poribar', english: '150-word student paragraph' },
      { native: 'ঋতুরাজ বসন্ত', translit: 'Rituraj Bosonto', english: 'Spring season in Bengal' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B30',
    language: 'bn',
    number: 30,
    titleNative: 'চিঠি লেখা',
    titleEn: 'Letter Writing (Chithi)',
    topics: ['ব্যক্তিগত চিঠি (শ্রদ্ধেয় / প্রিয়)', 'দাপ্তরিক ও আবেদন পত্র', 'ঠিকানা ও খামের নকশা'],
    level: 'advanced',
    category: 'writing',
    summaryEn: 'Formal administrative petitions and intimate personal epistolary formats.',
    keyRuleNative: 'ব্যক্তিগত চিঠিতে গুরুজনদের "প্রণাম" ও ছোটদের "স্নেহাশিস" জানিয়ে চিঠি শুরু হয়।',
    examples: [
      { native: 'বরাবর, মাননীয় প্রধান শিক্ষক মহাশয়...', translit: 'Borabor, manonio prodhan shikkhok...', english: 'To, The Respected Headmaster...' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B31',
    language: 'bn',
    number: 31,
    titleNative: 'প্রবন্ধ রচনা',
    titleEn: 'Essay Writing (Probondho)',
    topics: ['ভূমিকা, মূল প্রসঙ্গ, উপশিরোনাম ও উপসংহার', 'উদ্ধৃতি ও যুক্তির উপস্থাপন'],
    level: 'advanced',
    category: 'writing',
    summaryEn: 'Formal argumentative and expository essays (250-400 words) with intellectual rigour.',
    keyRuleNative: 'প্রবন্ধে যুক্তিপূর্ণ চিন্তা এবং ভাষার শুদ্ধতা রক্ষা করা অত্যন্ত আবশ্যক।',
    examples: [
      { native: 'পরিবেশ দূষণ ও তার প্রতিকার', translit: 'Poribesh dushon...', english: 'Pollution and remedies' },
      { native: 'বিজ্ঞান ও আধুনিক জীবন', translit: 'Bigyan o adhunik jibon', english: 'Science in modern life' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B32',
    language: 'bn',
    number: 32,
    titleNative: 'সংলাপ লেখা',
    titleEn: 'Dialogue Writing (Songlaap)',
    topics: ['বাস্তবধর্মী কথপোকথন', 'চরিত্রানুগ ভাষা ও আবেগ', 'দৈনন্দিন সামাজিক পরিস্থিতি'],
    level: 'advanced',
    category: 'communication',
    summaryEn: 'Scripting lively theatrical and real-world interactions in contemporary spoken Bengali.',
    keyRuleNative: 'সংলাপে চলিত ভাষার স্বাভাবিক টান এবং সৌজন্যমূলক শব্দ (দয়া করে, ধন্যবাদ) ব্যবহার কাম্য।',
    examples: [
      { native: 'দোকানদার ও ক্রেতার মধ্যে ইলিশ মাছ কেনা নিয়ে সংলাপ', translit: 'Dialogue at fish market', english: 'Bargaining for Hilsa fish' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B33',
    language: 'bn',
    number: 33,
    titleNative: 'গল্প লেখা',
    titleEn: 'Creative Story Writing (Golpo)',
    topics: ['সংকেত থেকে গল্প নির্মাণ', 'চরিত্র চিত্রণ ও সংলাপ', 'নীতিকথা ও চমকপ্রদ সমাপ্তি'],
    level: 'advanced',
    category: 'writing',
    summaryEn: 'Crafting original short fiction from prompt outlines with setting, tension, and resolution.',
    keyRuleNative: 'গল্পের গতি অব্যাহত রাখতে হবে এবং শেষ বাক্যটিতে যেন গভীর চমক বা নৈতিক তাৎপর্য থাকে।',
    examples: [
      { native: 'একতাই বল (Unity is strength)', translit: 'Ekotai bol', english: 'Classic fable composition' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B34',
    language: 'bn',
    number: 34,
    titleNative: 'অদেখা গদ্যাংশ',
    titleEn: 'Unseen Reading Comprehension',
    topics: ['দ্রুত অনুধাবন', 'প্রসঙ্গমূলক প্রশ্নোত্তর', 'শব্দার্থ ও ভাবার্থ নির্ণয়'],
    level: 'advanced',
    category: 'reading',
    summaryEn: 'Testing analytical comprehension on authentic historical, scientific, and cultural prose.',
    keyRuleNative: 'উত্তর যেন নিজস্ব ভাষায় সংক্ষিপ্ত ও টু-দ্য-পয়েন্ট হয়।',
    examples: [
      { native: 'বাংলার লোকশিল্প ও নকশিকাঁথা বিষয়ক গদ্যাংশ', translit: 'Passage on Kantha embroidery', english: 'Bengali folk art reading test' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B35',
    language: 'bn',
    number: 35,
    titleNative: 'কবিতা and ছন্দ',
    titleEn: 'Bengali Poetry & Metrical Systems',
    topics: ['পয়ার, অক্ষরবৃত্ত, মাত্রাবৃত্ত ও দলবৃত্ত ছন্দ', 'মিল ও অন্ত্যমিল', 'আধুনিক গদ্যকবিতা'],
    level: 'advanced',
    category: 'literature',
    summaryEn: 'The three foundational metrics of Bengali versification (Mishrokolabrutto, Kolabrutto, Dalbrutto).',
    keyRuleNative: 'দলবৃত্ত বা ছড়ার ছন্দ দ্রুতলয়ে চার মাত্রার পর্বে উচ্চারিত হয় (যেমন: হাটে যাব হাটে যাব ঘাটে নেই খেয়া)।',
    examples: [
      { native: 'আমাদের ছোট নদী চলে বাঁকে বাঁকে / বৈশাখ মাসে তার হাঁটু জল থাকে', translit: 'Amader chhoto nodi...', english: 'Rabindranath Tagore’s timeless school rhyme' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B36',
    language: 'bn',
    number: 36,
    titleNative: 'Bengali Literature',
    titleEn: 'Survey of Bengali Literary Epochs',
    topics: ['চর্যাপদ ও মধ্যযুগীয় মঙ্গলকাব্য', 'উনবিংশ শতকের নবজাগরণ', 'আধুনিক উপন্যাস ও ছোটগল্প'],
    level: 'advanced',
    category: 'literature',
    summaryEn: 'From Charyapada (first written Bengali) through Bengal Renaissance to modern post-colonial literature.',
    keyRuleNative: 'উনিশ শতকের নবজাগরণে বাংলা সাহিত্য আধুনিক চিন্তাধারা ও বিশ্বমানের রূপ লাভ করে।',
    examples: [
      { native: 'চর্যাপদ (দশম শতক) → মেঘনাদবধ কাব্য (মাইকেল মধুসূদন দত্ত)', translit: 'From Charyapada to Madhusudan Dutt', english: 'Evolution of literature' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B37',
    language: 'bn',
    number: 37,
    titleNative: 'Famous Bengali Authors',
    titleEn: 'Literary Masters & Giants',
    topics: ['রবীন্দ্রনাথ ঠাকুর (নোবেলজয়ী)', 'কাজী নজরুল ইসলাম (বিদ্রোহী কবি)', 'বঙ্কিমচন্দ্র, শরৎচন্দ্র, জীবনানন্দ দাশ ও সুকুমার রায়'],
    level: 'advanced',
    category: 'literature',
    summaryEn: 'In-depth study of the 6 core Bengali literary luminaries outlined in the curriculum.',
    keyRuleNative: 'রবীন্দ্রনাথের গীতবিতান ও গল্পগুচ্ছ এবং নজরুলের অগ্নিবীণা বাংলা সাহিত্যের চিরন্তন সম্পদ।',
    examples: [
      { native: 'গীতাঞ্জলি (রবীন্দ্রনাথ), বিদ্রোহী (নজরুল), আনন্দমঠ (বঙ্কিম)', translit: 'Gitanjali, Bidrohi, Anandamath', english: 'Monumental classics' },
      { native: 'আবোল তাবোল (সুকুমার রায়)', translit: 'Abol Tabol', english: 'Children’s nonsense verse' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B38',
    language: 'bn',
    number: 38,
    titleNative: 'Formal and informal communication',
    titleEn: 'Register & Social Etiquette',
    topics: ['ভদ্রতা ও সৌজন্যপ্রকাশ', 'সভা সঞ্চালনা ও বিতর্ক', 'দৈনন্দিন আড্ডার রস ও শিষ্টাচার'],
    level: 'advanced',
    category: 'communication',
    summaryEn: 'Navigating Bengali social registers: adda conversation vs academic conferences and debate.',
    keyRuleNative: 'বাংলা সংস্কৃতিতে জ্যেষ্ঠদের প্রতি ‘আপনি’ এবং বয়োজ্যেষ্ঠদের সম্বোধনে ‘দাদা/দিদি/কাকু’ যোগ করা সামাজিক রীতি।',
    examples: [
      { native: 'আপনার মূল্যবান মতামতের জন্য অসংখ্য ধন্যবাদ।', translit: 'Formal thank you', english: 'Thank you immensely for your valuable opinion.' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B39',
    language: 'bn',
    number: 39,
    titleNative: 'Translation',
    titleEn: 'Bilingual Translation (English ↔ Bengali)',
    topics: ['ইংরেজি থেকে বাংলা ও বাংলা থেকে ইংরেজি', 'বাগধারা ও প্রবাদের সঠিক ভাবানুবাদ', 'কার্যালয় নথির অনুবাদ'],
    level: 'advanced',
    category: 'communication',
    summaryEn: 'Translating idioms, tenses, and passive voice structures between English and Bengali.',
    keyRuleNative: 'ইংরেজির প্যাসিভ ভয়েস বাংলায় সাধারণত ভাববাচ্যে রূপান্তরিত হয় (It was done by him = তাঁর দ্বারা এটি সম্পন্ন হয়েছে)।',
    examples: [
      { native: 'Where there is a will, there is a way. → ইচ্ছা থাকলে উপায় হয়।', translit: 'Ichha thakle upaay hoy.', english: 'Proverbial translation' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'B40',
    language: 'bn',
    number: 40,
    titleNative: 'Advanced Composition',
    titleEn: 'Critical Analysis & Research Writing',
    topics: ['বই ও নাটকের সমালোচনা', 'সম্পাদকীয় নিবন্ধ রচনা', 'সারসংক্ষেপ ও ভাবার্থ লিখন'],
    level: 'advanced',
    category: 'writing',
    summaryEn: 'High-level synthesis: book reviews, editorial writing, and formal precis construction.',
    keyRuleNative: 'সারসংক্ষেপে মূল রচনার এক-তৃতীয়াংশ শব্দে কেন্দ্রীয় ভাব নিজস্ব ভাষায় উপস্থাপন করা হয়।',
    examples: [
      { native: 'রবীন্দ্রনাথের ‘পোস্টমাস্টার’ গল্পের সমালোচনামূলক বিশ্লেষণ', translit: 'Critical analysis of Postmaster', english: 'Literary criticism composition' }
    ],
    practiceQuestionsCount: 10
  }
];

// =========================================================================
// 3. MARATHI 40 CHAPTERS (M01-M40)
// =========================================================================

export const MARATHI_CHAPTERS: ChapterItem[] = [
  {
    code: 'M01',
    language: 'mr',
    number: 1,
    titleNative: 'मराठी भाषेची ओळख',
    titleEn: 'Introduction to Marathi',
    topics: ['Origins from Maharashtri Prakrit', 'Balbodh Devanagari script', 'Spoken dialects (Puneri, Varhadi, Malvani, Ahirani)', 'Official language status'],
    level: 'beginner',
    category: 'script',
    summaryEn: 'History of Marathi, 1000+ year literary heritage, and the Balbodh orthographic style.',
    keyRuleNative: 'मराठी ही बाळबोध देवनागरी लिपीत डावीकडून उजवीकडे लिहिली जाते आणि यात ‘ळ’ हे स्वतंत्र मूळ अक्षर आहे।',
    examples: [
      { native: 'नमस्कार!', translit: 'Namaskar!', english: 'Greetings / Hello' },
      { native: 'मराठी माझी मातृभाषा आहे।', translit: 'Marathi majhi matrubhasha aahe.', english: 'Marathi is my mother tongue.' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M02',
    language: 'mr',
    number: 2,
    titleNative: 'स्वर (Vowels)',
    titleEn: 'Marathi Vowels (Swar)',
    topics: ['ह्रस्व व दीर्घ स्वर', '१४ स्वर (अ, आ, इ, ई, उ, ऊ, ऋ, ऌ, ए, ऐ, ओ, औ, ऑ, ॲ)', 'इंग्रजी प्रभावातील ऑ व ॲ'],
    level: 'beginner',
    category: 'phonetics',
    summaryEn: 'Modern Marathi 14-vowel system including the officially incorporated English-derived loan sounds ॲ and ऑ.',
    keyRuleNative: 'ॲ (कॅट) आणि ऑ (बॉल) हे इंग्रजीतून आलेले अधिकृत स्वर महाराष्ट्र शासनाने वर्णमालेत समाविष्ट केले आहेत।',
    examples: [
      { native: 'अननस', translit: 'Ananas', english: 'Pineapple' },
      { native: 'आई', translit: 'Aai', english: 'Mother' },
      { native: 'बॅट / बॉल', translit: 'Bat / Ball', english: 'Loan vowel sounds' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M03',
    language: 'mr',
    number: 3,
    titleNative: 'व्यंजन (Consonants)',
    titleEn: 'Marathi Consonants & Retroflex L (ळ)',
    topics: ['क ते ज्ञ पर्यंत ३४ व्यंजने', 'द्रविडियन प्रभावातील "ळ" वर्ण', 'दंततालव्य ध्वनी (च, छ, ज, झ)'],
    level: 'beginner',
    category: 'phonetics',
    summaryEn: '34 consonants plus the distinctive retroflex lateral flap ळ (La) not found in standard Hindi.',
    keyRuleNative: '‘ळ’ हे अक्षर मराठीच्या उच्चाराचे वैशिष्ट्य आहे (उदा. बाळ, पाणी, शाळा)—हिंदीत ‘ल’ वापरतात पण मराठीत ‘ळ’च हवा।',
    examples: [
      { native: 'कमळ', translit: 'Kamal (with ळ)', english: 'Lotus' },
      { native: 'शाळा', translit: 'Shaala (with ळ)', english: 'School' },
      { native: 'पाणी', translit: 'Paani', english: 'Water' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M04',
    language: 'mr',
    number: 4,
    titleNative: 'बाराखडी / चौदाखडी',
    titleEn: 'Barakhadi to Choudakhadi Chart',
    topics: ['१२ ते १४ अक्षरांची मालिका', 'काना, मात्रा, वेलांटी, उकार, अनुस्वार व विसर्ग', 'क ते ळ पर्यंत चौदाखडी'],
    level: 'beginner',
    category: 'script',
    summaryEn: 'The syllabic grid of consonants combined with all vowel matras.',
    keyRuleNative: 'पहिली वेलांटी (ि) आणि पहिला उकार (ु) ह्रस्व उच्चारासाठी वापरतात; दुसरी वेलांटी (ी) व दुसरा उकार (ू) दीर्घ उच्चारासाठी।',
    examples: [
      { native: 'क, का, कि, की, कु, कू, के, कै, को, कौ, कं, कः, कॅ, कॉ', translit: 'Ka to Kaw Choudakhadi', english: '14-syllable sequence' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M05',
    language: 'mr',
    number: 5,
    titleNative: 'मात्रा and Pronunciation',
    titleEn: 'Diacritic Signs & Articulation',
    topics: ['वेलांटी व उकाराचे शुद्धलेखन नियम', 'अंत्य अक्षराचे दीर्घत्व', 'दंततालव्य च, छ, ज, झ चे दोन उच्चार'],
    level: 'beginner',
    category: 'phonetics',
    summaryEn: 'Pronouncing affricates: Dental-palatal (ts, dz as in चार, जग) vs pure palatal (ch, j as in चंद्र, जीवन).',
    keyRuleNative: 'शब्दाच्या शेवटी येणारे इ-कार व उ-कार मराठीत नेहमी दीर्घ असतात (उदा. कवी, वाटी, सुरू)।',
    examples: [
      { native: 'जग (tsag - World) vs जग (jag - Live)', translit: 'Two articulations of Ja', english: 'Phonetic nuances' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M06',
    language: 'mr',
    number: 6,
    titleNative: 'संयुक्त अक्षरे',
    titleEn: 'Marathi Conjunct Letters',
    topics: ['क्ष (क्+ष) व ज्ञ (द्+न्+य)', 'र ची चार रूपे (रेफ, तिरपी रेघ, काकपद, रफार)', 'अर्ध्या अक्षरांचे नियम'],
    level: 'beginner',
    category: 'script',
    summaryEn: 'The four graphical realizations of consonant R, conjunct clusters, and half-letters.',
    keyRuleNative: 'मराठीत "ज्ञ" चा उच्चार ‘द्+न्+य’ असा होतो (ज्ञान = dnyaan), तर हिंदीत ‘ग्या’ (gyaan) असा होतो।',
    examples: [
      { native: 'ज्ञान', translit: 'Dnyaan', english: 'Knowledge (Marathi pronunciation)' },
      { native: 'सूर्य, प्रकाश, राष्ट्र, चऱ्हाट', translit: 'Four forms of R in Marathi', english: 'Conjunct R variants' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M07',
    language: 'mr',
    number: 7,
    titleNative: 'Spelling and word formation',
    titleEn: 'Orthography & Word Building',
    topics: ['अकारान्त, इकारान्त, उकारान्त नियम', 'तत्समेतर शब्दांमधील अनुस्वार', 'महाराष्ट्र साहित्य परिषद शुद्धलेखन'],
    level: 'beginner',
    category: 'vocab',
    summaryEn: 'Standard 18 rules of Marathi orthography certified by the Maharashtra Sahitya Parishad.',
    keyRuleNative: 'मराठीत स्पष्ट उच्चारल्या जाणाऱ्या अनुनासिकांवरच अनुस्वार द्यावा (उदा. आंबा, खंत; पण घरात, पानात नव्हे)।',
    examples: [
      { native: 'घर → घरात', translit: 'Ghar → Gharaat', english: 'In the house (Oblique form)' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M08',
    language: 'mr',
    number: 8,
    titleNative: 'नाम (Nouns)',
    titleEn: 'Marathi Nouns (Naam)',
    topics: ['विशेषनाम, सामान्यनाम, भाववाचक नाम', 'धातुसाधित नामे', 'नामाचे सामान्यरूप'],
    level: 'beginner',
    category: 'grammar',
    summaryEn: 'Proper, common, abstract nouns, and the essential concept of Samanyaroop (oblique stem formation).',
    keyRuleNative: 'नामाला विभक्ती प्रत्यय लागण्यापूर्वी त्याच्या मूळ रूपात जो बदल होतो, त्याला "सामान्यरूप" म्हणतात (उदा. घोडा → घोड्या-ने)।',
    examples: [
      { native: 'मुलगा, पुस्तक, घर', translit: 'Mulga, Pustak, Ghar', english: 'Boy, Book, House' },
      { native: 'चांगुलपणा, प्रामाणिकपणा', translit: 'Changulpana, Pramanikpana', english: 'Goodness, Honesty (Abstract)' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M09',
    language: 'mr',
    number: 9,
    titleNative: 'सर्वनाम (Pronouns)',
    titleEn: 'Marathi Pronouns & Formality',
    topics: ['मी, तू, तो, ती, ते, आम्ही, तुम्ही, आपण, स्वतः', 'पुरुषवाचक, दर्शक, संबंधी, प्रश्नार्थक', 'लिंगानुसार बदलणारी सर्वनामे'],
    level: 'beginner',
    category: 'grammar',
    summaryEn: '9 types of pronouns; noting that pronouns то, ती, ते change according to three grammatical genders.',
    keyRuleNative: 'तो (पुल्लिंग), ती (स्त्रीलिंग), ते (नपुंसकलिंग)—तृतीय पुरुषी सर्वनाम तीनही लिंगांत बदलते।',
    examples: [
      { native: 'मी, आम्ही', translit: 'Mee, Aamhi', english: 'I, We' },
      { native: 'तू, तुम्ही, आपण', translit: 'Tu, Tumhi, Aapan', english: 'Second person formality tiers' },
      { native: 'तो (He), ती (She), ते (It / They)', translit: 'To, Tee, Te', english: 'Third person genders' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M10',
    language: 'mr',
    number: 10,
    titleNative: 'विशेषण (Adjectives)',
    titleEn: 'Marathi Adjectives & Gender Inflection',
    topics: ['गुणविशेषण, संख्याविशेषण, सार्वनामिक विशेषण', 'आकारान्त विशेषणांचे लिंगानुसार बदल (चांगला, चांगली, चांगले)'],
    level: 'beginner',
    category: 'grammar',
    summaryEn: 'Adjectives ending in -aa inflect across three genders and two numbers.',
    keyRuleNative: 'चांगला मुलगा (M), चांगली मुलगी (F), चांगले पुस्तक (N)—विशेषण नामाच्या लिंगानुसार बदलते।',
    examples: [
      { native: 'मोठा ↔ लहान', translit: 'Motha ↔ Lahan', english: 'Big ↔ Small' },
      { native: 'सुंदर, हुशार', translit: 'Sundar, Hushaav', english: 'Invariable adjectives' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M11',
    language: 'mr',
    number: 11,
    titleNative: 'क्रियापद (Verbs)',
    titleEn: 'Marathi Verbs (Kriyapad)',
    topics: ['सकर्मक व अकर्मक क्रियापदे', 'धातु व प्रत्यय', 'संयुक्त क्रियापद व सहाय्यक क्रियापद (आहे, होते, नाही)'],
    level: 'beginner',
    category: 'grammar',
    summaryEn: 'Transitive and intransitive verbs, root stems, and auxiliary verb complexes.',
    keyRuleNative: 'मराठीत क्रियापद वाक्याच्या शेवटी येते आणि ते कर्त्यानुसार किंवा कर्मानुसार रूप बदलते।',
    examples: [
      { native: 'खाणे, जाणे, वाचणे', translit: 'Khane, Jaane, Vaachne', english: 'To eat, to go, to read' },
      { native: 'मी पुस्तक वाचतो। (M) / वाचते। (F)', translit: 'Mee pustak vaachto / vaachte.', english: 'I read a book (Gender marked).' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M12',
    language: 'mr',
    number: 12,
    titleNative: 'क्रियाविशेषण (Adverbs)',
    titleEn: 'Marathi Adverbs & Oblique Modifiers',
    topics: ['कालवाचक, स्थलवाचक, रीतिवाचक, परिमाणवाचक', 'क्रियाविशेषण अव्यये'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: 'Modifying verbs with temporal, spatial, qualitative, and quantitative adverbs.',
    keyRuleNative: 'क्रियाविशेषण अव्ययांचे लिंग किंवा वचनानुसार रूप बदलत नाही (हळू, रोज, पटकन)।',
    examples: [
      { native: 'हळू, पटकन, जोरात', translit: 'Halu, Patkan, Jorat', english: 'Slowly, Quickly, Loudly' },
      { native: 'मी रोज शाळेत जातो।', translit: 'Mee roj shaalet jaato.', english: 'I go to school daily.' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M13',
    language: 'mr',
    number: 13,
    titleNative: 'लिंग (Gender)',
    titleEn: 'The Three-Gender System in Marathi',
    topics: ['पुल्लिंग (Masculine - तो)', 'स्त्रीलिंग (Feminine - ती)', 'नपुंसकलिंग (Neuter - ते)', 'लिंग ओळखण्याचे नियम'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: 'Crucial contrast: Unlike Hindi (2 genders) and Bengali (0 genders), Marathi preserves a robust 3-gender system.',
    keyRuleNative: 'मराठीत तीन लिंगे असतात: ज्या नामापूर्वी "तो" येतो ते पुल्लिंग, "ती" येते ते स्त्रीलिंग, आणि "ते" येते ते नपुंसकलिंग (तो फळा, ती वही, ते पुस्तक)।',
    examples: [
      { native: 'तो घोडा (पुल्लिंग), ती घोडी (स्त्रीलिंग), ते शिंगरू (नपुंसकलिंग)', translit: 'To ghoda, tee ghodi, te shingru', english: 'Horse (M), Mare (F), Foal (N)' },
      { native: 'ते पुस्तक, ते घर', translit: 'Te pustak, te ghar', english: 'Neuter nouns in Marathi' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M14',
    language: 'mr',
    number: 14,
    titleNative: 'वचन (Number)',
    titleEn: 'Singular & Plural (Vachan)',
    topics: ['एकवचन व अनेकवचन', 'आकारान्त पुल्लिंगी नामाचे एकाकारात रूपांतर', 'नपुंसकलिंगी नामाचे ए/ई मध्ये रूपांतर'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: 'Pluralization rules across all three genders (मुलगा → मुलगे; नदी → नद्या; पुस्तक → पुस्तके).',
    keyRuleNative: 'नपुंसकलिंगी एकवचनी नामाचे अनेकवचन ‘-े’ किंवा ‘-ी’ होते (घर → घरे, फूल → फुले, केळे → केळी)।',
    examples: [
      { native: 'मुलगा → मुलगे / मुले', translit: 'Mulga → Mulge', english: 'Boy → Boys' },
      { native: 'पुस्तक → पुस्तके', translit: 'Pustak → Pustake', english: 'Book → Books' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M15',
    language: 'mr',
    number: 15,
    titleNative: 'विभक्ती and कारक',
    titleEn: 'Marathi Cases (Vibhakti) & Suffixes',
    topics: ['प्रथमा ते सप्तमी व संबोधन', 'प्रत्यय (ने, शी, ला, ना, चा/ची/चे, त, ई, आ)', 'कारकार्थ (कर्ता, कर्म, करण, संप्रदान, अपादान, संबंध, अधिकरण)'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: '8 Grammatical cases, postpositional enclitics, and the necessary Samanyaroop oblique stem change.',
    keyRuleNative: 'विभक्ती प्रत्यय लावताना नामाचे सामान्यरूप होते: शाळा + त = शाळेत; हात + ने = हाताने।',
    examples: [
      { native: 'रामाने रावणाला बाणाने मारले।', translit: 'Ramane Ravanala banane marle.', english: 'Ram killed Ravan with an arrow.' },
      { native: 'झाडावरून फळ पडले।', translit: 'Jhadavarun phol padle.', english: 'Fruit fell from the tree.' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M16',
    language: 'mr',
    number: 16,
    titleNative: 'काळ (Tenses)',
    titleEn: 'Past, Present & Future Tenses in Marathi',
    topics: ['वर्तमानकाळ (साधा, अपूर्ण, पूर्ण, रीती)', 'भूतकाळ (साधा, अपूर्ण, पूर्ण, रीती)', 'भविष्यकाळ'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: '12 aspectual tenses, including the distinctive habitual past (रीती भूतकाळ: मी रोज वाचत असे).',
    keyRuleNative: 'साधा भूतकाळ कर्त्याच्या व कर्माच्या लिंग-वचनानुसार बदलतो: मी आंबा खाल्ला (M), मी पोळी खाल्ली (F), मी केळे खाल्ले (N)।',
    examples: [
      { native: 'मी पुस्तक वाचतो।', translit: 'Mee pustak vaachto.', english: 'I read a book (Present).' },
      { native: 'मी पुस्तक वाचले।', translit: 'Mee pustak vaachle.', english: 'I read a book (Past).' },
      { native: 'मी पुस्तक वाचेन।', translit: 'Mee pustak vaachen.', english: 'I will read a book (Future).' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M17',
    language: 'mr',
    number: 17,
    titleNative: 'पुरुष (Person)',
    titleEn: 'Person & Verbal Inflection',
    topics: ['प्रथम पुरुष (मी, आम्ही)', 'द्वितीय पुरुष (तू, तुम्ही)', 'तृतीय पुरुष (तो, ती, ते, त्या, ती)'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: 'Inflectional tables for first, second, and third person with full honorific agreement.',
    keyRuleNative: 'आदरार्थी अनेकवचनात क्रियापद नेहमी बहुवचनी होते (गुरुजी आले, बाबांनी सांगितले)।',
    examples: [
      { native: 'आम्ही जेवतो, तुम्ही जेवता, ते जेवतात', translit: 'Aamhi jevto, tumhi jevta...', english: 'Person verb paradigm' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M18',
    language: 'mr',
    number: 18,
    titleNative: 'वाक्यरचना',
    titleEn: 'Marathi Sentence Architecture (SOV)',
    topics: ['उद्देश्य व विधेय', 'कर्ता-कर्म-क्रियापद क्रम', 'विस्तार व पूरक'],
    level: 'intermediate',
    category: 'writing',
    summaryEn: 'Canonical Subject + Object + Verb syntactic structure in spoken and formal Marathi.',
    keyRuleNative: 'वाक्यात सामान्यतः प्रथम कर्ता, मध्ये कर्म आणि शेवटी क्रियापद येते।',
    examples: [
      { native: 'आई बाळाला दूध पाजते।', translit: 'Aai baalaala doodh paajte.', english: 'Mother feeds milk to child (SOV).' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M19',
    language: 'mr',
    number: 19,
    titleNative: 'वाक्यांचे प्रकार',
    titleEn: 'Types of Sentences (Keval, Mishra, Sanyukta)',
    topics: ['केवल वाक्य (Simple)', 'मिश्र वाक्य (Complex)', 'संयुक्त वाक्य (Compound)', 'होकारार्थी व नकारार्थी'],
    level: 'intermediate',
    category: 'writing',
    summaryEn: 'Classifying sentences structurally and semantically.',
    keyRuleNative: 'संयुक्त वाक्यात प्रधान उपवाक्ये ‘आणि, व, परंतु, किंवा’ या उभयान्वयी अव्ययांनी जोडलेली असतात।',
    examples: [
      { native: 'पाऊस पडला आणि शेतकरी आनंदित झाले।', translit: 'Paus padla aani...', english: 'Rain fell and farmers rejoiced (Compound).' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M20',
    language: 'mr',
    number: 20,
    titleNative: 'शब्दांच्या जाती',
    titleEn: 'Eight Parts of Speech in Marathi',
    topics: ['सव्यय (विकारी): नाम, सर्वनाम, विशेषण, क्रियापद', 'अव्यय (अविकारी): क्रियाविशेषण, शब्दयोगी, उभयान्वयी, केवलप्रयोगी'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: '4 inflected (vikari) categories and 4 uninflected (avikari) categories in standard Marathi grammar.',
    keyRuleNative: 'विकारी शब्दांमध्ये लिंग, वचन किंवा विभक्तीमुळे बदल होतो; अविकारी (अव्यय) शब्दांमध्ये कोणताही बदल होत नाही।',
    examples: [
      { native: 'झाडावर (शब्दयोगी अव्यय "वर")', translit: 'Jhaadaavar', english: 'On the tree (Postposition)' },
      { native: 'अरेरे! किती वाईट झाले (केवलप्रयोगी)', translit: 'Arere! Kiti vaait jhaale', english: 'Alas! How bad it happened' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M21',
    language: 'mr',
    number: 21,
    titleNative: 'समानार्थी शब्द',
    titleEn: 'Marathi Synonyms (Samānārthī)',
    topics: ['निसर्ग, भावना, नातेसंबंध यांवरील प्रतिशब्द', 'काव्यात्मक व बोली भाषेतील समानार्थी शब्द'],
    level: 'intermediate',
    category: 'vocab',
    summaryEn: 'Expanding expressive vocabulary with authentic regional Marathi synonyms.',
    keyRuleNative: 'पाणी = जल, नीर, तोय, पय, जीवन, अंबू।',
    examples: [
      { native: 'पाणी = जल, नीर, जीवन', translit: 'Paani = Jal, Neer, Jeevan', english: 'Water' },
      { native: 'घर = सदन, गृह, निवास, निकेतन', translit: 'Ghar = Sadan, Gruha, Nivas', english: 'Home' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M22',
    language: 'mr',
    number: 22,
    titleNative: 'विरुद्धार्थी शब्द',
    titleEn: 'Marathi Antonyms (Viruddhārthī)',
    topics: ['अ, अन, अव, गैर, ना, बे उपसर्ग लावून तयार होणारे विरुद्धार्थी शब्द', 'स्वतंत्र जोड्या'],
    level: 'intermediate',
    category: 'vocab',
    summaryEn: 'Opposite word pairs and prefix-driven negation in Marathi.',
    keyRuleNative: 'मोठा ↔ लहान, चांगला ↔ वाईट, श्रीमंत ↔ गरीब।',
    examples: [
      { native: 'मोठा ↔ लहान', translit: 'Motha ↔ Lahan', english: 'Big ↔ Small' },
      { native: 'शक्य ↔ अशक्य', translit: 'Shakya ↔ Ashakya', english: 'Possible ↔ Impossible' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M23',
    language: 'mr',
    number: 23,
    titleNative: 'म्हणी and वाक्प्रचार',
    titleEn: 'Marathi Proverbs & Idioms (Mhani & Vakprachar)',
    topics: ['लोकप्रिय म्हणी व त्यांचे अर्थ', 'वाक्प्रचार व वाक्यात उपयोग', 'महाराष्ट्राच्या ग्रामीण संस्कृतीतील म्हणी'],
    level: 'advanced',
    category: 'vocab',
    summaryEn: 'Authentic Maharashtrian cultural idioms and rural wisdom sayings.',
    keyRuleNative: 'म्हण ही अनुभवाचे सार सांगणारे पूर्ण वाक्य असते; वाक्प्रचार हा विशिष्ट अर्थ देणारा शब्दसमूह असतो।',
    examples: [
      { native: 'अति शहाणा त्याचा बैल रिकामा', translit: 'Ati shahana tyacha bail rikama', english: 'Too much cleverness leads to ruin.' },
      { native: 'डोळे उघडणे = पश्चात्ताप होऊन सत्य उमगणे', translit: 'Dole ughadne', english: 'To have one’s eyes opened to reality.' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M24',
    language: 'mr',
    number: 24,
    titleNative: 'उपसर्ग and प्रत्यय',
    titleEn: 'Prefixes & Suffixes in Marathi',
    topics: ['संस्कृत, मराठी व फारसी उपसर्ग', 'धातुसाधित व नामाला लागणारे प्रत्यय'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: 'Affixation mechanisms creating rich secondary derivatives.',
    keyRuleNative: '‘गैर-’ हा फारसी उपसर्ग विरुद्ध अर्थ देतो (उदा. गैरहजर, गैरसमज)।',
    examples: [
      { native: 'अप + मान = अपमान', translit: 'Apmaan', english: 'Insult' },
      { native: 'शेत + करी = शेतकरी', translit: 'Shetkari', english: 'Farmer (Suffix -kari)' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M25',
    language: 'mr',
    number: 25,
    titleNative: 'संधी',
    titleEn: 'Sandhi in Marathi',
    topics: ['स्वरसंधी, व्यंजनसंधी, विसर्गसंधी', 'मराठीची विशेष संधी (पूर्वरूप व पररूप संधी)'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: 'Standard Sanskrit sandhi alongside Marathi-specific Poorvaroop and Pararoop phonetic mergers.',
    keyRuleNative: 'पररूप संधीत पहिल्या अक्षराचा लोप होऊन दुसरे अक्षर कायम राहते (उदा. घर + ई = घरी, हात + ऊन = हातून)।',
    examples: [
      { native: 'सूर्य + उदय = सूर्योदय', translit: 'Suryoday', english: 'Sunrise' },
      { native: 'सांग + ए = सांगे', translit: 'Saange', english: 'Pararoop sandhi' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M26',
    language: 'mr',
    number: 26,
    titleNative: 'समास',
    titleEn: 'Samas (Marathi Compound Words)',
    topics: ['अव्ययीभाव, तत्पुरुष, द्वंद्व, बहुव्रीहि समास', 'कर्मधारय व द्विगु'],
    level: 'intermediate',
    category: 'grammar',
    summaryEn: '6 Classical compound mechanisms reducing syntactic redundancy.',
    keyRuleNative: 'द्वंद्व समासात दोन्ही पदे महत्त्वाची असतात (उदा. बहिणभाऊ, भाजीपाला, खरेखोटे)।',
    examples: [
      { native: 'गजानन = गजाचे आनन ज्याला आहे तो (गणपती)', translit: 'Gajanan = Lord Ganesha', english: 'Bahuvrihi' },
      { native: 'त्रिभुवन = तीन भुवनांचा समूह', translit: 'Tribhuvan', english: 'Dvigu (Group of three)' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M27',
    language: 'mr',
    number: 27,
    titleNative: 'विरामचिन्हे',
    titleEn: 'Marathi Punctuation System',
    topics: ['पूर्णविराम (.), स्वल्पविराम (,), अर्धविराम (;)', 'प्रश्नचिन्ह, उद्गारचिन्ह, अवतरण चिन्हे', 'मराठीत पूर्णविरामाचा वापर'],
    level: 'advanced',
    category: 'writing',
    summaryEn: 'Modern Marathi orthographic conventions where a period (.) or danda (।) marks terminal closure.',
    keyRuleNative: 'मराठी मुद्रणात आधुनिक काळात वाक्याच्या शेवटी पूर्णविराम (.) देण्याची पद्धत रूढ झाली आहे।',
    examples: [
      { native: 'महाराष्ट्र ही संतांची भूमी आहे.', translit: 'Maharashtra hee santanchi bhoomi aahe.', english: 'Maharashtra is the land of saints.' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M28',
    language: 'mr',
    number: 28,
    titleNative: 'शुद्धलेखन',
    titleEn: 'Orthographic Accuracy & Error Rectification',
    topics: ['महामंडळाचे १८ नियम', 'वेलांटी व उकार ठरवणारे नियम', 'सामान्यरूपातील शुद्धलेखन'],
    level: 'advanced',
    category: 'writing',
    summaryEn: 'Comprehensive mastery of the official 18 orthography rules established by the Akhil Bharatiya Marathi Sahitya Mahamandal.',
    keyRuleNative: 'एकाक्षरी शब्दातील इ-कार किंवा उ-कार नेहमी दीर्घ लिहावा (उदा. मी, तू, ती, पी, बी; अपवाद: ‘नि’)।',
    examples: [
      { native: 'पाणि (हात) vs पाणी (जल)', translit: 'Paani distinction', english: 'Short vs Long diacritic meanings' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M29',
    language: 'mr',
    number: 29,
    titleNative: 'पत्रलेखन',
    titleEn: 'Marathi Letter Writing',
    topics: ['घरगुती पत्र (अनौपचारिक - तीर्थरूप, प्रिय)', 'व्यावहारिक पत्र (औपचारिक - सस्नेह नमस्कार, अर्ज)', 'ईमेल व अर्ज प्रारूप'],
    level: 'advanced',
    category: 'writing',
    summaryEn: 'Traditional formal salutations (साष्टांग नमस्कार, तीर्थरूप, स.न.वि.वि.) and modern official applications.',
    keyRuleNative: 'वडिलधाऱ्या व्यक्तींना "तीर्थरूप" किंवा "तीर्थस्वरूप" लिहून "साष्टांग नमस्कार विनंती विशेष" (सा.न.वि.वि.) लिहिले जाते।',
    examples: [
      { native: 'मा. मुख्याध्यापक, ज्ञानमंदिर प्रशाला, पुणे...', translit: 'Hon. Principal letter', english: 'School leave application' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M30',
    language: 'mr',
    number: 30,
    titleNative: 'निबंधलेखन',
    titleEn: 'Marathi Essay Writing (Nibandh)',
    topics: ['वर्णनात्मक निबंध', 'कल्पनाविलासात्मक निबंध', 'आत्मवृत्तात्मक निबंध (उदा. शेतकऱ्याचे आत्मवृत्त)'],
    level: 'advanced',
    category: 'writing',
    summaryEn: 'Multi-paragraph formal compositions (250-400 words) with idiomatic fluency and cultural depth.',
    keyRuleNative: 'मराठीत आत्मवृत्त लिहिताना प्रथम पुरुषी "मी" वापरून भावना मांडल्या जातात (उदा. "मी झाड बोलतोय...")।',
    examples: [
      { native: 'माझी शाळा (My School)', translit: 'Majhi Shaala', english: 'Standard school composition' },
      { native: 'शेतकऱ्याचे मनोगत', translit: 'Shetkaryache manogat', english: 'Autobiography of a farmer' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M31',
    language: 'mr',
    number: 31,
    titleNative: 'परिच्छेद लेखन',
    titleEn: 'Paragraph Composition (Parichhed)',
    topics: ['विषयसुसूत्रता', '८० ते १२० शब्दांत प्रभावी मांडणी', 'सुविचारांचा योग्य वापर'],
    level: 'advanced',
    category: 'writing',
    summaryEn: 'Short expository and narrative paragraph construction.',
    keyRuleNative: 'परिच्छेदात विषयांतर होऊ न देता एकाच मध्यवर्ती कल्पनेभोवती विचार केंद्रित ठेवावेत।',
    examples: [
      { native: 'ग्रंथ हेच खरे मित्र', translit: 'Granth hech khare mitra', english: 'Books are our true friends' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M32',
    language: 'mr',
    number: 32,
    titleNative: 'संवादलेखन',
    titleEn: 'Dialogue Writing (Samvaad)',
    topics: ['दोन व्यक्तींमधील जिवंत संभाषण', 'पात्रोचित भाषा व सौजन्य', 'नाट्यमय वळण'],
    level: 'advanced',
    category: 'communication',
    summaryEn: 'Drafting conversational dialogues reflecting modern everyday Maharashtrian cultural contexts.',
    keyRuleNative: 'संवादात मराठी भाषेतील स्वाभाविक आदर आणि आदरातिथ्याची भावना प्रतिबिंबित झाली पाहिजे।',
    examples: [
      { native: 'बस कंडक्टर व प्रवासी यांच्यातील सुट्ट्या पैशांवरील संवाद', translit: 'Conductor and passenger dialogue', english: 'Bus journey dialogue' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M33',
    language: 'mr',
    number: 33,
    titleNative: 'कथालेखन',
    titleEn: 'Story Writing (Katha)',
    topics: ['मुद्द्यांवरून कथा विस्तार', 'शीर्षक व तात्पर्य', 'पात्रांची निर्मिती'],
    level: 'advanced',
    category: 'writing',
    summaryEn: 'Narrative expansion from skeletal outlines, building climax, character voices, and explicit moral.',
    keyRuleNative: 'कथेला आकर्षक शीर्षक आणि शेवटी ठळक अक्षरात "तात्पर्य" (Moral) लिहिणे अनिवार्य आहे।',
    examples: [
      { native: 'मुंगी आणि कबूतर (तात्पर्य: उपकाराची परतफेड उपकारानेच होते)', translit: 'Ant and dove fable', english: 'Kindness is repaid with kindness' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M34',
    language: 'mr',
    number: 34,
    titleNative: 'अपठित गद्यांश',
    titleEn: 'Unseen Reading Comprehension (Prose)',
    topics: ['उतारा काळजीपूर्वक वाचणे', 'प्रश्नांची समर्पक उत्तरे', 'शीर्षक देणे'],
    level: 'advanced',
    category: 'reading',
    summaryEn: 'Analytical reading passages testing vocabulary, central themes, and critical thinking.',
    keyRuleNative: 'उताऱ्यातील ओळी जशाच्या तशा न उतरवता स्वतःच्या सुस्पष्ट भाषेत उत्तर द्यावे।',
    examples: [
      { native: 'छत्रपती शिवाजी महाराजांचे दुर्गव्यवस्थापन यावरील उतारा', translit: 'Passage on Shivaji Maharaj fort management', english: 'History comprehension' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M35',
    language: 'mr',
    number: 35,
    titleNative: 'अपठित पद्यांश',
    titleEn: 'Poetry Comprehension & Rasa',
    topics: ['कवितेचा भावार्थ ग्रहण', 'रस (वीर, शांत, शृंगार, करुण)', 'प्रतिमा व रूपके उलगडणे'],
    level: 'advanced',
    category: 'reading',
    summaryEn: 'Interpreting imagery, rhythm, meter, and core sentiment in Marathi verse.',
    keyRuleNative: 'पद्यांशात कवीने निसर्गाचे किंवा भावनेचे केलेले रूपकात्मक वर्णन ओळखून उत्तर लिहावे।',
    examples: [
      { native: 'शेतकरी व पावसावरील भावपूर्ण कविता', translit: 'Poem on monsoon and farmer', english: 'Agricultural life poetry' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M36',
    language: 'mr',
    number: 36,
    titleNative: 'कविता and छंद',
    titleEn: 'Marathi Versification, Abhang & Ovi',
    topics: ['अभंग छंद (लहान व मोठा अभंग)', 'ओवी रचना', 'मात्रावृत्ते व अक्षरगणवृत्ते (इंद्रवज्रा, भुजंगप्रयात)'],
    level: 'advanced',
    category: 'literature',
    summaryEn: 'Classical metrical forms of the Varkari saint tradition (Abhang, Ovi) and modern verse forms.',
    keyRuleNative: 'मोठ्या अभंगात चार चरण असतात; पहिल्या तीन चरणांत ६-६ अक्षरे आणि चौथ्यात ४ अक्षरे असतात।',
    examples: [
      { native: 'वृक्षवल्ली आम्हा सोयरी वनचरे। पक्षीही सुस्वरे आळविती॥ - संत तुकाराम', translit: 'Vrukshavalli aamha soyari...', english: 'Saint Tukaram’s famous nature abhang' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M37',
    language: 'mr',
    number: 37,
    titleNative: 'Marathi Literature',
    titleEn: 'Survey of Marathi Literary History',
    topics: ['महानुभाव व वारकरी संप्रदाय', 'पंडिती व शाहिरी काव्य (पोवाडे, लावण्या)', 'आधुनिक कादंबरी व दलित साहित्य'],
    level: 'advanced',
    category: 'literature',
    summaryEn: 'From 12th-century Lilacharitra through the saint-poets to modern dramatic and realist fiction.',
    keyRuleNative: 'ज्ञानेश्वरांपासून सुरू झालेली संतकाव्याची परंपरा मराठी संस्कृतीचा मूलाधार आहे।',
    examples: [
      { native: 'ज्ञानेश्वरी (१२९०) → ययाति (वि. स. खांडेकर)', translit: 'Dnyaneshwari to Yayati', english: 'Historical trajectory' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M38',
    language: 'mr',
    number: 38,
    titleNative: 'Famous Marathi Authors',
    titleEn: 'Literary Giants of Maharashtra',
    topics: ['संत तुकाराम व संत ज्ञानेश्वर', 'कुसुमाग्रज (वि. वा. शिरवाडकर)', 'वि. स. खांडेकर (पहिले ज्ञानपीठ)', 'पु. ल. देशपांडे व सावित्रीबाई फुले'],
    level: 'advanced',
    category: 'literature',
    summaryEn: 'Deep study of the 6 core Marathi authors required by the curriculum.',
    keyRuleNative: 'कुसुमाग्रजांचे ‘नटसम्राट’ हे नाटक आणि खांडेकरांची ‘ययाति’ ही कादंबरी मैलाचे दगड आहेत।',
    examples: [
      { native: 'नटसम्राट (कुसुमाग्रज), बटाट्याची चाळ (पु. ल. देशपांडे)', translit: 'Natsamrat, Batatyachi Chaal', english: 'Celebrated classics' },
      { native: 'काव्यफुले (सावित्रीबाई फुले)', translit: 'Kavyaphule', english: 'Pioneering social reform poetry' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M39',
    language: 'mr',
    number: 39,
    titleNative: 'Formal and Informal Marathi',
    titleEn: 'Registers: Administrative vs Vernacular Spoken',
    topics: ['प्रशासकीय शब्दकोश व नियम', 'संभाषण कौशल्य व मुलाखत', 'वृत्तपत्रीय भाषा व स्तंभलेखन'],
    level: 'advanced',
    category: 'communication',
    summaryEn: 'Mastering bureaucratic terminology formulated by the Maharashtra government vs fluid spoken Marathi.',
    keyRuleNative: 'शासकीय कामकाजात अचूक पारिभाषिक शब्दांचाच वापर करावा (उदा. आदेश, परिपत्रक, पदोन्नती)।',
    examples: [
      { native: 'सदर अर्जावर योग्य ती कारवाई करण्यात येत आहे.', translit: 'Official notification', english: 'Action is being initiated on the said application.' }
    ],
    practiceQuestionsCount: 10
  },
  {
    code: 'M40',
    language: 'mr',
    number: 40,
    titleNative: 'Translation and Advanced Writing',
    titleEn: 'Bilingual Translation (English ↔ Marathi)',
    topics: ['वाक्यांचे हुबेहूब भाषांतर', 'इंग्रजी SVO ते मराठी SOV पदक्रम संक्रमण', 'संस्कृतीविशिष्ट संकल्पनांचे भाषांतर'],
    level: 'advanced',
    category: 'communication',
    summaryEn: 'Translating complex official, journalistic, and literary documents between English and Marathi.',
    keyRuleNative: 'मराठीत भाषांतर करताना लिंग-वचन आणि क्रियापदाचे रूप वाक्याच्या संदर्भाशी सुसंगत ठेवावे लागते।',
    examples: [
      { native: 'He goes to school every day. → तो रोज शाळेत जातो.', translit: 'To roj shaalet jaato.', english: 'Tense & gender harmony' },
      { native: 'Knowledge is power. → ज्ञान हीच खरी शक्ती आहे.', translit: 'Dnyaan heech khari shakti aahe.', english: 'Proverbial translation' }
    ],
    practiceQuestionsCount: 10
  }
];

// =========================================================================
// 4. EXACT PRACTICE SETS FROM USER SPECIFICATION
// =========================================================================

export const PRACTICE_SET_H01: QuizQuestion[] = [
  {
    id: 'H01-Q1',
    language: 'hi',
    category: 'H02-Swar',
    type: 'translate-mcq',
    prompt: 'Which is a Hindi vowel?',
    promptNative: 'निम्नलिखित में से कौन-सा हिन्दी स्वर है?',
    options: ['क', 'अ', 'ग', 'च'],
    correctAnswer: 'अ',
    explanation: '"अ" एक मूल स्वर (Vowel) है। क, ग और च व्यंजन (Consonants) हैं।',
    marks: 2
  },
  {
    id: 'H01-Q2',
    language: 'hi',
    category: 'H15-Vachan',
    type: 'translate-mcq',
    prompt: 'What is the plural of किताब (Kitaab)?',
    promptNative: '‘किताब’ शब्द का शुद्ध बहुवचन क्या है?',
    options: ['किताबों', 'किताबें', 'किताबी', 'किताब'],
    correctAnswer: 'किताबें',
    explanation: 'स्त्रीलिंग शब्द "किताब" का सामान्य बहुवचन "किताबें" होता है। "किताबों" केवल कारक/परसर्ग के साथ आता है (उदा. किताबों में)।',
    marks: 2
  },
  {
    id: 'H01-Q3',
    language: 'hi',
    category: 'H10-Sarvanaam',
    type: 'translate-mcq',
    prompt: 'Which word is a pronoun?',
    promptNative: 'निम्नलिखित में से कौन-सा शब्द सर्वनाम है?',
    options: ['राम', 'सुंदर', 'मैं', 'खेलना'],
    correctAnswer: 'मैं',
    explanation: '"मैं" उत्तम पुरुषवाचक सर्वनाम (Pronoun) है। राम संज्ञा है, सुंदर विशेषण है, और खेलना क्रिया है।',
    marks: 2
  },
  {
    id: 'H01-Q4',
    language: 'hi',
    category: 'H25-Vilom',
    type: 'translate-mcq',
    prompt: 'What is the opposite (विलोम) of दिन?',
    promptNative: '‘दिन’ शब्द का विलोम शब्द क्या है?',
    options: ['सुबह', 'रात', 'शाम', 'दोपहर'],
    correctAnswer: 'रात',
    explanation: 'दिन का विलोम "रात" होता है।',
    marks: 2
  },
  {
    id: 'H01-Q5',
    language: 'hi',
    category: 'H12-Kriya',
    type: 'translate-mcq',
    prompt: 'Identify the verb (क्रिया): सीता गाना गाती है।',
    promptNative: 'वाक्य में क्रिया पहचानें: "सीता गाना गाती है।"',
    options: ['सीता', 'गाना', 'गाती है', 'है'],
    correctAnswer: 'गाती है',
    explanation: 'इस वाक्य में "गाती है" मुख्य व सहायक क्रिया (Verb) है। सीता कर्ता है और गाना कर्म है।',
    marks: 2
  }
];

export const PRACTICE_SET_B01: QuizQuestion[] = [
  {
    id: 'B01-Q1',
    language: 'bn',
    category: 'B10-Pronouns',
    type: 'translate-mcq',
    prompt: "Which word means 'I' in Bengali?",
    promptNative: "বাংলায় 'আমি' (I) নির্দেশক সর্বনাম কোনটি?",
    options: ['তুমি', 'আমি', 'সে', 'তারা'],
    correctAnswer: 'আমি',
    explanation: "'আমি' (Aami) means 'I'. তুমি = You, সে = He/She, তারা = They.",
    marks: 2
  },
  {
    id: 'B01-Q2',
    language: 'bn',
    category: 'B09-Nouns',
    type: 'translate-mcq',
    prompt: 'Which is a Bengali noun (বিশেষ্য)?',
    promptNative: 'নিচের কোনটি বিশেষ্য পদ?',
    options: ['সুন্দর', 'দৌড়ানো', 'বই', 'ধীরে'],
    correctAnswer: 'বই',
    explanation: "'বই' (Book) হলো বস্তুবাচক বিশেষ্য। সুন্দর = বিশেষণ, দৌড়ানো = ক্রিয়াপদ, ধীরে = ক্রিয়াবিশেষণ।",
    marks: 2
  },
  {
    id: 'B01-Q3',
    language: 'bn',
    category: 'B11-Adjectives',
    type: 'translate-mcq',
    prompt: "What does ভালো (Bhalo) mean?",
    promptNative: "'ভালো' শব্দের অর্থ কী?",
    options: ['Bad', 'Good', 'Small', 'Big'],
    correctAnswer: 'Good',
    explanation: "'ভালো' (Bhalo) means 'Good'. Bad = খারাপ, Small = ছোট, Big = বড়।",
    marks: 2
  },
  {
    id: 'B01-Q4',
    language: 'bn',
    category: 'B24-Vocab',
    type: 'translate-mcq',
    prompt: "Which means 'water'?",
    promptNative: "কোন শব্দটির অর্থ 'পানি / জল'?",
    options: ['আগুন', 'জল', 'বাতাস', 'মাটি'],
    correctAnswer: 'জল',
    explanation: "'জল' (Jol) means water. আগুন = Fire, বাতাস = Air, মাটি = Earth.",
    marks: 2
  },
  {
    id: 'B01-Q5',
    language: 'bn',
    category: 'B12-Verbs',
    type: 'translate-mcq',
    prompt: 'Complete: আমি স্কুলে ___।',
    promptNative: 'বাক্যটি সম্পূর্ণ করুন: "আমি স্কুলে ___।"',
    options: ['যাই', 'খাই', 'বড়', 'সুন্দর'],
    correctAnswer: 'যাই',
    explanation: "উত্তম পুরুষে 'আমি'-র সাথে ক্রিয়াপদ 'যাই' (Jaai - go) বসে: আমি স্কুলে যাই।",
    marks: 2
  }
];

export const PRACTICE_SET_M01: QuizQuestion[] = [
  {
    id: 'M01-Q1',
    language: 'mr',
    category: 'M09-Pronouns',
    type: 'translate-mcq',
    prompt: "What does मी (Mee) mean?",
    promptNative: "'मी' या सर्वनामाचा अर्थ काय?",
    options: ['You', 'I', 'He', 'They'],
    correctAnswer: 'I',
    explanation: "'मी' (Mee) means 'I'. You = तू/तुम्ही, He = तो, They = ते.",
    marks: 2
  },
  {
    id: 'M01-Q2',
    language: 'mr',
    category: 'M08-Nouns',
    type: 'translate-mcq',
    prompt: 'Which is a Marathi noun (नाम)?',
    promptNative: 'खालीलपैकी ‘नाम’ कोणते आहे?',
    options: ['सुंदर', 'घर', 'हळू', 'चांगला'],
    correctAnswer: 'घर',
    explanation: "'घर' (House) हे नाम आहे. सुंदर/चांगला विशेषण आहेत आणि हळू क्रियाविशेषण आहे.",
    marks: 2
  },
  {
    id: 'M01-Q3',
    language: 'mr',
    category: 'M22-Antonyms',
    type: 'translate-mcq',
    prompt: "What is the opposite (विरुद्धार्थी) of मोठा (Motha)?",
    promptNative: "‘मोठा’ या शब्दाचा विरुद्धार्थी शब्द कोणता?",
    options: ['लहान', 'चांगला', 'सुंदर', 'उंच'],
    correctAnswer: 'लहान',
    explanation: "मोठा (Big) चा विरुद्धार्थी शब्द 'लहान' (Small) आहे.",
    marks: 2
  },
  {
    id: 'M01-Q4',
    language: 'mr',
    category: 'M21-Vocab',
    type: 'translate-mcq',
    prompt: "Which word means 'water' in Marathi?",
    promptNative: "मराठीत 'पाणी' (Water) दर्शवणारा शब्द कोणता?",
    options: ['आग', 'पाणी', 'आकाश', 'वारा'],
    correctAnswer: 'पाणी',
    explanation: "'पाणी' means water. आग = Fire, आकाश = Sky, वारा = Wind.",
    marks: 2
  },
  {
    id: 'M01-Q5',
    language: 'mr',
    category: 'M11-Verbs',
    type: 'translate-mcq',
    prompt: 'Complete: मी रोज शाळेत ___।',
    promptNative: 'योग्य क्रियापद निवडून वाक्य पूर्ण करा: "मी रोज शाळेत ___।"',
    options: ['जातो', 'सुंदर', 'मोठा', 'घर'],
    correctAnswer: 'जातो',
    explanation: "वाक्याचा अर्थ पूर्ण करणारे योग्य क्रियापद 'जातो' (Go) आहे: मी रोज शाळेत जातो.",
    marks: 2
  }
];

// =========================================================================
// 5. ALPHABET & PHONETICS DATA (HINDI, BENGALI, MARATHI)
// =========================================================================

export const HINDI_ALPHABET: AlphabetLetter[] = [
  { char: 'अ', ipa: '/ə/', transliteration: 'a', type: 'vowel', exampleWord: 'अनार', exampleTranslit: 'Anaar', exampleEnglish: 'Pomegranate', soundDescription: 'Short central unrounded vowel (like "u" in cup)' },
  { char: 'आ', ipa: '/aː/', transliteration: 'aa', type: 'vowel', exampleWord: 'आम', exampleTranslit: 'Aam', exampleEnglish: 'Mango', soundDescription: 'Long open back unrounded vowel (like "a" in father)' },
  { char: 'इ', ipa: '/ɪ/', transliteration: 'i', type: 'vowel', exampleWord: 'इमली', exampleTranslit: 'Imli', exampleEnglish: 'Tamarind', soundDescription: 'Short near-close front unrounded vowel (like "i" in bit)' },
  { char: 'ई', ipa: '/iː/', transliteration: 'ee', type: 'vowel', exampleWord: 'ईख', exampleTranslit: 'Eekh', exampleEnglish: 'Sugarcane', soundDescription: 'Long close front unrounded vowel (like "ee" in feet)' },
  { char: 'उ', ipa: '/ʊ/', transliteration: 'u', type: 'vowel', exampleWord: 'उल्लू', exampleTranslit: 'Ullu', exampleEnglish: 'Owl', soundDescription: 'Short near-close back rounded vowel (like "u" in put)' },
  { char: 'ऊ', ipa: '/uː/', transliteration: 'oo', type: 'vowel', exampleWord: 'ऊन', exampleTranslit: 'Oon', exampleEnglish: 'Wool', soundDescription: 'Long close back rounded vowel (like "oo" in moon)' },
  { char: 'ऋ', ipa: '/rɪ/', transliteration: 'ri', type: 'vowel', exampleWord: 'ऋषि', exampleTranslit: 'Rishi', exampleEnglish: 'Sage', soundDescription: 'Vocalic r pronounced like "ri"' },
  { char: 'ए', ipa: '/eː/', transliteration: 'e', type: 'vowel', exampleWord: 'एक', exampleTranslit: 'Ek', exampleEnglish: 'One', soundDescription: 'Long close-mid front unrounded vowel (like "a" in bake)' },
  { char: 'ऐ', ipa: '/ɛː/', transliteration: 'ai', type: 'vowel', exampleWord: 'ऐनक', exampleTranslit: 'Ainak', exampleEnglish: 'Spectacles', soundDescription: 'Open-mid front vowel (like "ai" in hair)' },
  { char: 'ओ', ipa: '/oː/', transliteration: 'o', type: 'vowel', exampleWord: 'ओखली', exampleTranslit: 'Okhli', exampleEnglish: 'Mortar', soundDescription: 'Long close-mid back rounded vowel (like "o" in boat)' },
  { char: 'औ', ipa: '/ɔː/', transliteration: 'au', type: 'vowel', exampleWord: 'औरत', exampleTranslit: 'Aurat', exampleEnglish: 'Woman', soundDescription: 'Open-mid back rounded vowel (like "aw" in saw)' },
  // Core Consonants
  { char: 'क', ipa: '/k/', transliteration: 'ka', type: 'consonant', exampleWord: 'कमल', exampleTranslit: 'Kamal', exampleEnglish: 'Lotus', soundDescription: 'Voiceless unaspirated velar plosive' },
  { char: 'ख', ipa: '/kʰ/', transliteration: 'kha', type: 'consonant', exampleWord: 'खरगोश', exampleTranslit: 'Khargosh', exampleEnglish: 'Rabbit', soundDescription: 'Voiceless aspirated velar plosive' },
  { char: 'ग', ipa: '/ɡ/', transliteration: 'ga', type: 'consonant', exampleWord: 'गमला', exampleTranslit: 'Gamla', exampleEnglish: 'Flower pot', soundDescription: 'Voiced unaspirated velar plosive' },
  { char: 'घ', ipa: '/ɡʱ/', transliteration: 'gha', type: 'consonant', exampleWord: 'घर', exampleTranslit: 'Ghar', exampleEnglish: 'Home', soundDescription: 'Voiced breathy velar plosive' },
  { char: 'च', ipa: '/t͡ʃ/', transliteration: 'cha', type: 'consonant', exampleWord: 'चम्मच', exampleTranslit: 'Chammach', exampleEnglish: 'Spoon', soundDescription: 'Voiceless postalveolar affricate' },
  { char: 'छ', ipa: '/t͡ʃʰ/', transliteration: 'chha', type: 'consonant', exampleWord: 'छतरी', exampleTranslit: 'Chhatri', exampleEnglish: 'Umbrella', soundDescription: 'Aspirated postalveolar affricate' },
  { char: 'ज', ipa: '/d͡ʒ/', transliteration: 'ja', type: 'consonant', exampleWord: 'जहाज़', exampleTranslit: 'Jahaaz', exampleEnglish: 'Ship', soundDescription: 'Voiced postalveolar affricate' },
  { char: 'झ', ipa: '/d͡ʒʱ/', transliteration: 'jha', type: 'consonant', exampleWord: 'झंडा', exampleTranslit: 'Jhanda', exampleEnglish: 'Flag', soundDescription: 'Voiced breathy affricate' },
  { char: 'ट', ipa: '/ʈ/', transliteration: 'Ta', type: 'consonant', exampleWord: 'टमाटर', exampleTranslit: 'Tamatar', exampleEnglish: 'Tomato', soundDescription: 'Voiceless retroflex plosive (curled tongue)' },
  { char: 'ठ', ipa: '/ʈʰ/', transliteration: 'Tha', type: 'consonant', exampleWord: 'ठठेरा', exampleTranslit: 'Thathera', exampleEnglish: 'Tinsmith', soundDescription: 'Aspirated retroflex plosive' },
  { char: 'ड', ipa: '/ɖ/', transliteration: 'Da', type: 'consonant', exampleWord: 'डमरू', exampleTranslit: 'Damru', exampleEnglish: 'Pellet drum', soundDescription: 'Voiced retroflex plosive' },
  { char: 'ढ', ipa: '/ɖʱ/', transliteration: 'Dha', type: 'consonant', exampleWord: 'ढोलक', exampleTranslit: 'Dholak', exampleEnglish: 'Hand drum', soundDescription: 'Voiced breathy retroflex plosive' },
  { char: 'त', ipa: '/t̪/', transliteration: 'ta', type: 'consonant', exampleWord: 'तरबूज', exampleTranslit: 'Tarbooj', exampleEnglish: 'Watermelon', soundDescription: 'Voiceless dental plosive (tongue touches teeth)' },
  { char: 'थ', ipa: '/t̪ʰ/', transliteration: 'tha', type: 'consonant', exampleWord: 'थर्मस', exampleTranslit: 'Thermas', exampleEnglish: 'Flask', soundDescription: 'Aspirated dental plosive' },
  { char: 'द', ipa: '/d̪/', transliteration: 'da', type: 'consonant', exampleWord: 'दवात', exampleTranslit: 'Dawaat', exampleEnglish: 'Inkpot', soundDescription: 'Voiced dental plosive' },
  { char: 'ध', ipa: '/d̪ʱ/', transliteration: 'dha', type: 'consonant', exampleWord: 'धनुष', exampleTranslit: 'Dhanush', exampleEnglish: 'Bow', soundDescription: 'Voiced breathy dental plosive' },
  { char: 'न', ipa: '/n̪/', transliteration: 'na', type: 'consonant', exampleWord: 'नल', exampleTranslit: 'Nal', exampleEnglish: 'Tap', soundDescription: 'Voiced dental nasal' },
  { char: 'प', ipa: '/p/', transliteration: 'pa', type: 'consonant', exampleWord: 'पतंग', exampleTranslit: 'Patang', exampleEnglish: 'Kite', soundDescription: 'Voiceless bilabial plosive' },
  { char: 'फ', ipa: '/pʰ/', transliteration: 'pha', type: 'consonant', exampleWord: 'फल', exampleTranslit: 'Phal', exampleEnglish: 'Fruit', soundDescription: 'Voiceless aspirated bilabial plosive' },
  { char: 'ब', ipa: '/b/', transliteration: 'ba', type: 'consonant', exampleWord: 'बतख', exampleTranslit: 'Batakh', exampleEnglish: 'Duck', soundDescription: 'Voiced bilabial plosive' },
  { char: 'भ', ipa: '/bʱ/', transliteration: 'bha', type: 'consonant', exampleWord: 'भालू', exampleTranslit: 'Bhaloo', exampleEnglish: 'Bear', soundDescription: 'Voiced breathy bilabial plosive' },
  { char: 'म', ipa: '/m/', transliteration: 'ma', type: 'consonant', exampleWord: 'मछली', exampleTranslit: 'Machhli', exampleEnglish: 'Fish', soundDescription: 'Voiced bilabial nasal' }
];

export const BENGALI_ALPHABET: AlphabetLetter[] = [
  { char: 'অ', ipa: '/ɔ/', transliteration: 'o/a', type: 'vowel', exampleWord: 'অলি', exampleTranslit: 'Oli', exampleEnglish: 'Bumblebee', soundDescription: 'Inherent open-mid back rounded vowel' },
  { char: 'আ', ipa: '/a/', transliteration: 'aa', type: 'vowel', exampleWord: 'আম', exampleTranslit: 'Aam', exampleEnglish: 'Mango', soundDescription: 'Open central unrounded vowel' },
  { char: 'ই', ipa: '/i/', transliteration: 'i', type: 'vowel', exampleWord: 'ইঁদুর', exampleTranslit: 'Indur', exampleEnglish: 'Mouse', soundDescription: 'Close front unrounded vowel' },
  { char: 'ঈ', ipa: '/i/', transliteration: 'ee', type: 'vowel', exampleWord: 'ঈগল', exampleTranslit: 'Eegol', exampleEnglish: 'Eagle', soundDescription: 'Long i (phonetically identical to ই)' },
  { char: 'উ', ipa: '/u/', transliteration: 'u', type: 'vowel', exampleWord: 'উট', exampleTranslit: 'Oot', exampleEnglish: 'Camel', soundDescription: 'Close back rounded vowel' },
  { char: 'ঊ', ipa: '/u/', transliteration: 'oo', type: 'vowel', exampleWord: 'ঊর্মি', exampleTranslit: 'Urmi', exampleEnglish: 'Wave', soundDescription: 'Long u' },
  { char: 'ঋ', ipa: '/ri/', transliteration: 'ri', type: 'vowel', exampleWord: 'ঋতু', exampleTranslit: 'Ritu', exampleEnglish: 'Season', soundDescription: 'Vocalic ri sound' },
  { char: 'এ', ipa: '/e/', transliteration: 'e', type: 'vowel', exampleWord: 'এক', exampleTranslit: 'Ek', exampleEnglish: 'One', soundDescription: 'Close-mid front vowel or open-mid /æ/' },
  { char: 'ঐ', ipa: '/oi/', transliteration: 'oi', type: 'vowel', exampleWord: 'ঐক্য', exampleTranslit: 'Oikyo', exampleEnglish: 'Unity', soundDescription: 'Diphthong /oi/' },
  { char: 'ও', ipa: '/o/', transliteration: 'o', type: 'vowel', exampleWord: 'ওল', exampleTranslit: 'Ol', exampleEnglish: 'Yam', soundDescription: 'Close-mid back rounded vowel' },
  { char: 'ঔ', ipa: '/ou/', transliteration: 'ou', type: 'vowel', exampleWord: 'ঔষধ', exampleTranslit: 'Oushodh', exampleEnglish: 'Medicine', soundDescription: 'Diphthong /ou/' },
  // Consonants
  { char: 'ক', ipa: '/k/', transliteration: 'ko', type: 'consonant', exampleWord: 'কলম', exampleTranslit: 'Kolom', exampleEnglish: 'Pen', soundDescription: 'Voiceless velar plosive' },
  { char: 'খ', ipa: '/kʰ/', transliteration: 'kho', type: 'consonant', exampleWord: 'খাতা', exampleTranslit: 'Khata', exampleEnglish: 'Notebook', soundDescription: 'Aspirated velar plosive' },
  { char: 'গ', ipa: '/ɡ/', transliteration: 'go', type: 'consonant', exampleWord: 'গাছ', exampleTranslit: 'Gaachh', exampleEnglish: 'Tree', soundDescription: 'Voiced velar plosive' },
  { char: 'ঘ', ipa: '/ɡʱ/', transliteration: 'gho', type: 'consonant', exampleWord: 'ঘর', exampleTranslit: 'Ghor', exampleEnglish: 'House', soundDescription: 'Voiced breathy velar plosive' },
  { char: 'চ', ipa: '/t͡ʃ/', transliteration: 'cho', type: 'consonant', exampleWord: 'চোখ', exampleTranslit: 'Chokh', exampleEnglish: 'Eye', soundDescription: 'Voiceless palato-alveolar affricate' },
  { char: 'ছ', ipa: '/t͡ʃʰ/', transliteration: 'chho', type: 'consonant', exampleWord: 'ছবি', exampleTranslit: 'Chhobi', exampleEnglish: 'Picture', soundDescription: 'Aspirated palato-alveolar affricate' },
  { char: 'জ', ipa: '/d͡ʒ/', transliteration: 'jo', type: 'consonant', exampleWord: 'জল', exampleTranslit: 'Jol', exampleEnglish: 'Water', soundDescription: 'Voiced palato-alveolar affricate' },
  { char: 'ঝ', ipa: '/d͡ʒʱ/', transliteration: 'jho', type: 'consonant', exampleWord: 'ঝড়', exampleTranslit: 'Jhod', exampleEnglish: 'Storm', soundDescription: 'Voiced breathy affricate' },
  { char: 'ট', ipa: '/ʈ/', transliteration: 'To', type: 'consonant', exampleWord: 'টাকা', exampleTranslit: 'Taka', exampleEnglish: 'Money', soundDescription: 'Voiceless retroflex plosive' },
  { char: 'ঠ', ipa: '/ʈʰ/', transliteration: 'Tho', type: 'consonant', exampleWord: 'ঠোঁট', exampleTranslit: 'Thot', exampleEnglish: 'Lip', soundDescription: 'Aspirated retroflex plosive' },
  { char: 'ড়', ipa: '/ɽ/', transliteration: 'rha', type: 'consonant', exampleWord: 'গাড়ি', exampleTranslit: 'Gaadi', exampleEnglish: 'Car', soundDescription: 'Voiced retroflex flap' },
  { char: 'ঢ়', ipa: '/ɽʱ/', transliteration: 'rhha', type: 'consonant', exampleWord: 'আষাঢ়', exampleTranslit: 'Ashaarh', exampleEnglish: 'Monsoon month', soundDescription: 'Voiced breathy retroflex flap' },
  { char: 'ত', ipa: '/t̪/', transliteration: 'to', type: 'consonant', exampleWord: 'তারা', exampleTranslit: 'Tara', exampleEnglish: 'Star', soundDescription: 'Voiceless dental plosive' },
  { char: 'থ', ipa: '/t̪ʰ/', transliteration: 'tho', type: 'consonant', exampleWord: 'থালা', exampleTranslit: 'Thala', exampleEnglish: 'Plate', soundDescription: 'Aspirated dental plosive' },
  { char: 'দ', ipa: '/d̪/', transliteration: 'do', type: 'consonant', exampleWord: 'দই', exampleTranslit: 'Doi', exampleEnglish: 'Yogurt', soundDescription: 'Voiced dental plosive' },
  { char: 'ধ', ipa: '/d̪ʱ/', transliteration: 'dho', type: 'consonant', exampleWord: 'ধান', exampleTranslit: 'Dhaan', exampleEnglish: 'Paddy', soundDescription: 'Voiced breathy dental plosive' },
  { char: 'ন', ipa: '/n̪/', transliteration: 'no', type: 'consonant', exampleWord: 'নদী', exampleTranslit: 'Nodi', exampleEnglish: 'River', soundDescription: 'Dental nasal' },
  { char: 'প', ipa: '/p/', transliteration: 'po', type: 'consonant', exampleWord: 'পাখি', exampleTranslit: 'Paakhi', exampleEnglish: 'Bird', soundDescription: 'Bilabial plosive' },
  { char: 'ফ', ipa: '/pʰ/', transliteration: 'pho', type: 'consonant', exampleWord: 'ফুল', exampleTranslit: 'Phul', exampleEnglish: 'Flower', soundDescription: 'Aspirated bilabial plosive or /f/' },
  { char: 'ব', ipa: '/b/', transliteration: 'bo', type: 'consonant', exampleWord: 'বই', exampleTranslit: 'Boi', exampleEnglish: 'Book', soundDescription: 'Voiced bilabial plosive' },
  { char: 'ভ', ipa: '/bʱ/', transliteration: 'bho', type: 'consonant', exampleWord: 'ভাত', exampleTranslit: 'Bhaat', exampleEnglish: 'Rice', soundDescription: 'Voiced breathy bilabial plosive' },
  { char: 'ম', ipa: '/m/', transliteration: 'mo', type: 'consonant', exampleWord: 'মাটি', exampleTranslit: 'Maati', exampleEnglish: 'Soil', soundDescription: 'Bilabial nasal' }
];

export const MARATHI_ALPHABET: AlphabetLetter[] = [
  ...HINDI_ALPHABET.map((item) => ({ ...item })),
  // Add unique Marathi additions: ॲ, ऑ, ळ
  { char: 'ॲ', ipa: '/æ/', transliteration: 'æ', type: 'vowel', exampleWord: 'बॅट', exampleTranslit: 'Bat', exampleEnglish: 'Bat', soundDescription: 'English loan vowel /æ/ as in cat or bat' },
  { char: 'ऑ', ipa: '/ɒ/', transliteration: 'aw', type: 'vowel', exampleWord: 'बॉल', exampleTranslit: 'Ball', exampleEnglish: 'Ball', soundDescription: 'English loan vowel /ɒ/ as in ball or coffee' },
  { char: 'ळ', ipa: '/ɭ/', transliteration: 'La', type: 'consonant', exampleWord: 'शाळा', exampleTranslit: 'Shaala', exampleEnglish: 'School', soundDescription: 'Voiced retroflex lateral flap (curled tongue lateral, signature of Marathi)' }
];
