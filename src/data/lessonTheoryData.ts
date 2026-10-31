import { LessonTheoryItem } from '../types';

export const LESSON_THEORIES: Record<string, LessonTheoryItem> = {
  // ==========================================
  // HINDI LESSON THEORIES
  // ==========================================
  H01: {
    chapterCode: 'H01',
    language: 'hi',
    titleNative: 'हिन्दी भाषा का परिचय एवं उद्भव',
    titleEn: 'Introduction & Origins of Hindi',
    level: 'beginner',
    estimatedMinutes: 15,
    overview: 'Hindi is an Indo-Aryan language directly descended from Vedic Sanskrit through Sauraseni Prakrit and Apabhramsha. It is written in the Devanagari script, which is an abugida where each letter represents a consonant with an inherent vowel "a" (/ə/). Over 600 million people speak Hindi worldwide.',
    historicalContext: 'Hindi developed around the 7th-10th century CE in Northern India. Modern Standard Hindi (मानक हिन्दी) was standardized in the late 19th and early 20th centuries and is officially recognized under Article 343(1) of the Indian Constitution.',
    linguisticCore: {
      ruleTitle: 'The Devanagari Writing System & Shirorekha (शिरोरेखा)',
      ruleDescription: 'Devanagari is written strictly from left to right. Every word features a continuous horizontal headline called "Shirorekha" (शिरोरेखा) that visually binds all letters of that word together.',
      breakdownTable: {
        headers: ['Linguistic Level', 'Feature', 'Devanagari Rule'],
        rows: [
          ['Writing Direction', 'Left to Right (वाम से दक्षिण)', 'L to R horizontal flow'],
          ['Script Hierarchy', 'Abugida (ध्वन्यात्मक वर्णमाला)', 'Letters represent consonant + inherent /a/'],
          ['Word Grouping', 'Shirorekha (शिरोरेखा)', 'Horizontal top bar links characters in a single word'],
          ['Capitalization', 'No Upper/Lower Case', 'Uniform height across all letters'],
        ],
      },
      scriptNotes: [
        'Never break the Shirorekha in the middle of a single word, except over open-top letters like ध, भ, and थ where the loop is exposed.',
        'Punctuation uses the traditional full stop called Purna Viram (।) instead of a dot (.)',
      ],
    },
    grammarFormulas: [
      {
        name: 'Word Order Formula (SOV)',
        pattern: 'Subject (कर्ता) + Object (कर्म) + Verb (क्रिया)',
        explanation: 'In Hindi, verbs almost universally come at the end of the sentence. English SVO becomes Hindi SOV.',
      },
      {
        name: 'Honorific Hierarchy',
        pattern: 'तू (Intimate) → तुम (Informal) → आप (Respectful / Formal)',
        explanation: 'Always prefer "आप" (Aap) with elders, teachers, strangers, and professional peers.',
      },
    ],
    dialogue: {
      context: 'Meeting a teacher or new colleague for the first time in Delhi',
      lines: [
        { speaker: 'रोहन (Rohan)', native: 'नमस्ते महोदय! मेरा नाम रोहन है।', transliteration: 'Namaste mahoday! Mera naam Rohan hai.', english: 'Hello sir! My name is Rohan.' },
        { speaker: 'अध्यापक (Teacher)', native: 'नमस्ते रोहन। आपका यहाँ स्वागत है। आप कहाँ से हैं?', transliteration: 'Namaste Rohan. Aapka yahaan swaagat hai. Aap kahan se hain?', english: 'Hello Rohan. You are welcome here. Where are you from?' },
        { speaker: 'रोहन (Rohan)', native: 'मैं भारत की राजधानी नई दिल्ली से हूँ।', transliteration: 'Main Bharat ki raajdhani Nayi Dilli se hoon.', english: 'I am from India’s capital, New Delhi.' },
      ],
    },
    keyVocabulary: [
      { native: 'नमस्ते', translit: 'Namaste', english: 'Greetings / Hello' },
      { native: 'नाम', translit: 'Naam', english: 'Name', gender: 'masculine' },
      { native: 'भाषा', translit: 'Bhasha', english: 'Language', gender: 'feminine' },
      { native: 'देश', translit: 'Desh', english: 'Country', gender: 'masculine' },
      { native: 'अध्यापक', translit: 'Adhyapak', english: 'Teacher', gender: 'masculine' },
    ],
    commonMistakes: [
      {
        wrong: 'मैं जाता हूँ बाज़ार (Main jaata hoon bazaar)',
        correct: 'मैं बाज़ार जाता हूँ (Main bazaar jaata hoon)',
        why: 'In Hindi, the verb "जाता हूँ" must be at the very end of the sentence (SOV word order).',
      },
      {
        wrong: 'Writing "घर" as separate letters "घ र" without connected Shirorekha',
        correct: 'घर (with one continuous top line)',
        why: 'Letters in a Hindi word must be joined by the top bar.',
      },
    ],
    culturalProverb: {
      native: 'जैसी करनी, वैसी भरनी।',
      translit: 'Jaisi karni, waisi bharni.',
      literal: 'As you do, so shall you reap.',
      culturalMeaning: 'Every action carries karmic consequences; ethical and diligent study yields excellence.',
    },
    knowledgeCheck: [
      {
        question: 'Which of the following is the standard word order in Hindi?',
        options: ['SVO (Subject + Verb + Object)', 'SOV (Subject + Object + Verb)', 'VSO (Verb + Subject + Object)', 'OSV (Object + Subject + Verb)'],
        correctIndex: 1,
        explanation: 'Hindi follows Subject + Object + Verb (SOV). The verb always anchors the end of the sentence.',
      },
      {
        question: 'What is the horizontal top line called that joins letters in Devanagari?',
        options: ['Matra (मात्रा)', 'Shirorekha (शिरोरेखा)', 'Halant (हलन्त)', 'Nukta (नुक्ता)'],
        correctIndex: 1,
        explanation: 'Shirorekha (शिरोरेखा, literally "head line") is the continuous top bar linking characters.',
      },
    ],
  },

  H02: {
    chapterCode: 'H02',
    language: 'hi',
    titleNative: 'स्वर (Vowels) और उनके भेद',
    titleEn: 'Hindi Vowels (Swar) & Sound Durations',
    level: 'beginner',
    estimatedMinutes: 20,
    overview: 'Vowels (स्वर) are speech sounds produced without any obstruction in the vocal tract. Hindi has 11 primary vowels: अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ, plus two auxiliary sounds called आयोगवाह: अं (अनुस्वार) and अः (विसर्ग).',
    historicalContext: 'Sanskrit originally had 14 vowels including vocalic l and long vocalic r. Standard modern Hindi refined these to 11 functional vowels, dividing them into Short (ह्रस्व) and Long (दीर्घ) by sound duration (मात्रा-काल).',
    linguisticCore: {
      ruleTitle: 'Hrasva (ह्रस्व) vs Dīrgha (दीर्घ) Vowels',
      ruleDescription: 'Short vowels take 1 beat of time (एक मात्रा काल) to pronounce, while Long vowels take exactly twice as long (दो मात्रा काल). Confusing short and long vowels completely alters the meaning of words (e.g. दिन = day, दीन = poor).',
      breakdownTable: {
        headers: ['Category', 'Vowels', 'Moraic Timing', 'Example Minimal Pair'],
        rows: [
          ['ह्रस्व (Short)', 'अ, इ, उ, ऋ', '1 Matra (Quick breath)', 'दिन (Din) = Day'],
          ['दीर्घ (Long)', 'आ, ई, ऊ, ए, ऐ, ओ, औ', '2 Matras (Double duration)', 'दीन (Deen) = Poor / Needy'],
          ['अनुस्वार (Nasal)', 'अं (ँ)', 'Nasal cavity airflow', 'हंस (Hans) = Swan'],
          ['विसर्ग (Aspiration)', 'अः', 'Soft breathy /h/ sound', 'अतः (Atah) = Therefore'],
        ],
      },
      scriptNotes: [
        'Vowels take their independent shape (अ, आ, इ) ONLY at the beginning of a word or syllable.',
        'When following a consonant, they transform into diacritic marks called Matras (मात्राएं).',
      ],
    },
    grammarFormulas: [
      {
        name: 'Vowel Duration Principle',
        pattern: 'ह्रस्व स्वर × 2 Duration = दीर्घ स्वर',
        explanation: 'Pronounce "आ" for twice the length of "अ", "ई" twice the length of "इ", "ऊ" twice the length of "उ".',
      },
    ],
    dialogue: {
      context: 'Pronunciation clinic between teacher and learner',
      lines: [
        { speaker: 'गुरुजी (Teacher)', native: 'सुनो ध्यान से: "दिन" और "दीन" में क्या अंतर है?', transliteration: 'Suno dhyaan se: "din" aur "deen" mein kya antar hai?', english: 'Listen carefully: what is the difference between "din" and "deen"?' },
        { speaker: 'छात्र (Student)', native: '"दिन" में छोटी इ है जिसका अर्थ दिवस है, और "दीन" में बड़ी ई है!', transliteration: '"Din" mein chhoti i hai jiska arth diwas hai, aur "deen" mein badi ee hai!', english: '"Din" has a short i meaning day, and "deen" has a long ee meaning poor!' },
      ],
    },
    keyVocabulary: [
      { native: 'स्वर', translit: 'Swar', english: 'Vowel', gender: 'masculine' },
      { native: 'आम', translit: 'Aam', english: 'Mango', gender: 'masculine' },
      { native: 'इमली', translit: 'Imli', english: 'Tamarind', gender: 'feminine' },
      { native: 'ईश्वर', translit: 'Ishwar', english: 'God / Supreme', gender: 'masculine' },
      { native: 'ऊन', translit: 'Oon', english: 'Wool', gender: 'feminine' },
    ],
    commonMistakes: [
      {
        wrong: 'Pronouncing "ऋषि" (Rishi) with an English "R"',
        correct: 'Pronounce ऋ like "ri" with the tip of the tongue curled near the hard palate.',
        why: 'In Hindi, vocalic ऋ is phonetically rendered as [ɾɪ].',
      },
    ],
    culturalProverb: {
      native: 'अधजल गगरी छलकत जाए।',
      translit: 'Adh-jal gagri chhalkat jaaye.',
      literal: 'A half-filled water pitcher spills more.',
      culturalMeaning: 'A person with shallow knowledge boasts loudly; true masters remain humble and quiet.',
    },
    knowledgeCheck: [
      {
        question: 'Which of the following is a Hrasva (Short) vowel in Hindi?',
        options: ['आ (Aa)', 'ई (Ee)', 'उ (U)', 'औ (Au)'],
        correctIndex: 2,
        explanation: 'उ is a short vowel (ह्रस्व स्वर) taking 1 mora of time to pronounce.',
      },
      {
        question: 'What is the meaning difference between "कुल" (short u) and "कूल" (long oo)?',
        options: ['Family vs Bank/Shore', 'Book vs Pen', 'Hot vs Cold', 'Day vs Night'],
        correctIndex: 0,
        explanation: 'कुल (Kul) with short u means family/lineage, while कूल (Kool) with long oo means shore/bank of a river.',
      },
    ],
  },

  H03: {
    chapterCode: 'H03',
    language: 'hi',
    titleNative: 'व्यंजन (Consonants) और उच्चारण स्थान',
    titleEn: 'Hindi Consonants & Points of Articulation',
    level: 'beginner',
    estimatedMinutes: 25,
    overview: 'Devanagari consonants are organized scientifically by anatomical place of articulation from the back of the vocal tract (throat) to the front (lips). There are 25 stop consonants across 5 groups (vargas), 4 semi-vowels (अंतःस्थ), and 4 sibilants/fricatives (ऊष्म).',
    historicalContext: 'Panini’s ancient Sanskrit grammatical treatises categorized phonetic sounds with such anatomical precision that modern computational linguistics considers it one of the most scientific alphabetic classifications in human history.',
    linguisticCore: {
      ruleTitle: 'The Five Articulation Vargas (क, च, ट, त, प)',
      ruleDescription: 'Each varga contains 5 consonants following a strict pattern: Unaspirated Unvoiced → Aspirated Unvoiced → Unaspirated Voiced → Aspirated Voiced → Nasal.',
      breakdownTable: {
        headers: ['Varga', 'Anatomical Place', 'Consonant Series', 'Example Word'],
        rows: [
          ['क-वर्ग (Velar)', 'कंठ (Throat)', 'क, ख, ग, घ, ङ', 'कमल (Kamal = Lotus)'],
          ['च-वर्ग (Palatal)', 'तालु (Hard Palate)', 'च, छ, ज, झ, ञ', 'चम्मच (Chammach = Spoon)'],
          ['ट-वर्ग (Retroflex)', 'मूर्धा (Roof of Mouth)', 'ट, ठ, ड, ढ, ण', 'टमाटर (Tamatar = Tomato)'],
          ['त-वर्ग (Dental)', 'दंत (Teeth)', 'त, थ, द, ध, न', 'तरबूज (Tarbooj = Watermelon)'],
          ['प-वर्ग (Labial)', 'ओष्ठ (Lips)', 'प, फ, ब, भ, म', 'पानी (Paani = Water)'],
        ],
      },
      scriptNotes: [
        'Aspiration (प्राण): Aspirated consonants (ख, छ, ठ, थ, फ) require a sharp puff of air.',
        'Retroflex (ट-वर्ग) requires curling the tip of the tongue back to touch the ridge of the mouth.',
      ],
    },
    grammarFormulas: [
      {
        name: 'The Inherent Vowel Rule',
        pattern: 'क् + अ = क (Consonant with /a/ sound)',
        explanation: 'To remove the vowel, add a Halant (्) at the foot: क् (pure k without vowel).',
      },
    ],
    dialogue: {
      context: 'Practicing tongue placement for Dental (त) vs Retroflex (ट)',
      lines: [
        { speaker: 'अध्यापिका (Teacher)', native: 'अपनी जीभ को दांतों से छुओ और बोलो: "ताला"।', transliteration: 'Apni jeebh ko daanton se chhuo aur bolo: "Taala".', english: 'Touch your tongue to your teeth and say: "Taala" (Lock).' },
        { speaker: 'छात्र (Student)', native: 'ताला (Dental)! और जब जीभ को तालु पर मोड़ते हैं तो "टोपी" (Retroflex)!', transliteration: 'Taala! Aur jab jeebh ko taalu par modte hain to "Topi"!', english: 'Taala! And when we curl the tongue back, it becomes "Topi" (Hat)!' },
      ],
    },
    keyVocabulary: [
      { native: 'कमल', translit: 'Kamal', english: 'Lotus', gender: 'masculine' },
      { native: 'घर', translit: 'Ghar', english: 'Home', gender: 'masculine' },
      { native: 'टमाटर', translit: 'Tamatar', english: 'Tomato', gender: 'masculine' },
      { native: 'पानी', translit: 'Paani', english: 'Water', gender: 'masculine' },
      { native: 'मित्र', translit: 'Mitra', english: 'Friend', gender: 'masculine' },
    ],
    commonMistakes: [
      {
        wrong: 'Pronouncing "त" (Dental T) like the English "T"',
        correct: 'English "T" is alveolar. Hindi "त" is pure dental (tongue touching teeth like in Spanish or Italian).',
        why: 'English T actually sounds like Hindi retroflex ट to native speakers!',
      },
    ],
    culturalProverb: {
      native: 'करत-करत अभ्यास के जड़मति होत सुजान।',
      translit: 'Karat-karat abhyaas ke jarmati hot sujaan.',
      literal: 'By continuous practice, even a dull mind becomes wise.',
      culturalMeaning: 'Repetition and daily phonetic drills ensure mastery over complex articulation sounds.',
    },
    knowledgeCheck: [
      {
        question: 'Which of the following consonants belongs to the Labial (ओष्ठ्य) series?',
        options: ['क (Ka)', 'ट (Ta)', 'प (Pa)', 'च (Cha)'],
        correctIndex: 2,
        explanation: 'प (Pa) is produced using both lips (labial).',
      },
      {
        question: 'What diacritic mark is used to show a consonant without its inherent vowel?',
        options: ['Anusvara (अं)', 'Halant (्)', 'Visarga (अः)', 'Shirorekha'],
        correctIndex: 1,
        explanation: 'Halant (हलन्त, e.g. क्) cancels the default vowel "a".',
      },
    ],
  },

  // ==========================================
  // BENGALI LESSON THEORIES
  // ==========================================
  B01: {
    chapterCode: 'B01',
    language: 'bn',
    titleNative: 'বাংলা ভাষার উৎপত্তি ও লিপি পরিচয়',
    titleEn: 'Origins of Bengali & Bengali Script System',
    level: 'beginner',
    estimatedMinutes: 15,
    overview: 'Bengali (বাংলা) is the seventh most spoken language in the world, with over 300 million native speakers across West Bengal, Bangladesh, Tripura, and Assam. Derived from Magadhi Prakrit and Gaudi Apabhramsha, Bengali is renowned for its lyrical flow, soft consonant clusters, and poetic tradition.',
    historicalContext: 'Bengali literature began with the Charyapada (চর্যাপদ) in the 8th-12th century. The Bengal Renaissance in the 19th and early 20th century, led by Rabindranath Tagore, Ishwar Chandra Vidyasagar, and Kazi Nazrul Islam, modernized the prose and enriched world literature.',
    linguisticCore: {
      ruleTitle: 'The Inherent /ɔ/ Vowel & Matra (মাত্রা)',
      ruleDescription: 'Unlike Hindi where the inherent vowel is a neutral schwa (/ə/), in Bengali every unmarked consonant carries an inherent rounded "O" sound (/ɔ/), as in "ক" = /kɔ/. Words also carry a top line called Matra (মাত্রা), though some letters are half-matra (অর্ধমাত্রা) or matra-less (মাত্রাহীন).',
      breakdownTable: {
        headers: ['Category', 'Letters Count', 'Characters', 'Visual Rule'],
        rows: [
          ['পূর্ণমাত্রা (Full Top Line)', '32 letters', 'অ, আ, ই, ক, গ, ঘ...', 'Continuous line on top'],
          ['অর্ধমাত্রা (Half Top Line)', '8 letters', 'ঋ, খ, গ, ণ, থ, ধ, প, শ', 'Small partial stroke on right'],
          ['মাত্রাহীন (No Top Line)', '10 letters', 'এ, ঐ, ও, ঔ, ঙ, ঞ, ৎ...', 'Completely open at the top'],
        ],
      },
      scriptNotes: [
        'Do NOT draw a top line over মাত্রাহীন letters like এ, ঐ, ও, ঔ. Doing so is an orthographic error.',
        'Bengali does not possess grammatical gender for nouns/adjectives (unlike Hindi). Men, women, and objects take the same adjectives and verbs!',
      ],
    },
    grammarFormulas: [
      {
        name: 'Bengali SOV Sentence Pattern',
        pattern: 'কর্তা (Subject) + কর্ম (Object) + ক্রিয়া (Verb)',
        explanation: 'Bengali puts verbs at the end: আমি (I) বই (book) পড়ি (read) = "Aami boi pori".',
      },
      {
        name: 'Three-Tier Honorific Pronouns',
        pattern: 'তুই (Intimate/Younger) → তুমি (Informal/Friends) → আপনি (Formal/Respected)',
        explanation: 'Always address strangers, teachers, and elders with আপনি (Aapni).',
      },
    ],
    dialogue: {
      context: 'Friendly introduction in Kolkata / Dhaka',
      lines: [
        { speaker: 'সৌমিক (Soumik)', native: 'নমস্কার! আপনার নাম কী?', transliteration: 'Nomoshkar! Aapnar naam ki?', english: 'Greetings! What is your name?' },
        { speaker: 'অদিতি (Aditi)', native: 'নমস্কার! আমার নাম অদিতি। আপনি কেমন আছেন?', transliteration: 'Nomoshkar! Aamar naam Aditi. Aapni kemon aachen?', english: 'Greetings! My name is Aditi. How are you?' },
        { speaker: 'সৌমিক (Soumik)', native: 'আমি খুব ভালো আছি, ধন্যবাদ!', transliteration: 'Aami khub bhalo aachi, dhonnobad!', english: 'I am very well, thank you!' },
      ],
    },
    keyVocabulary: [
      { native: 'নমস্কার', translit: 'Nomoshkar', english: 'Greetings / Hello' },
      { native: 'বই', translit: 'Boi', english: 'Book' },
      { native: 'জল', translit: 'Jol', english: 'Water' },
      { native: 'ভালো', translit: 'Bhalo', english: 'Good / Well' },
      { native: 'ধন্যবাদ', translit: 'Dhonnobad', english: 'Thank you' },
    ],
    commonMistakes: [
      {
        wrong: 'Pronouncing "ক" like the English "Kah"',
        correct: 'Pronounce with rounded lips as "Kɔ" (rhyming with "core" or "law").',
        why: 'The default inherent vowel in Bengali is rounded /ɔ/, not an open "ah".',
      },
      {
        wrong: 'Drawing a full top line over "এ" or "ও"',
        correct: 'Leave the top line open; they are मात्रাহীন (matra-less).',
        why: 'Drawing a line changes the letter geometry.',
      },
    ],
    culturalProverb: {
      native: 'মাছে-ভাতে বাঙালি।',
      translit: 'Maachhe-bhaate Bangali.',
      literal: 'Fish and rice make a true Bengali.',
      culturalMeaning: 'Celebrates the cultural heritage, riverine geography, and culinary soul of the Bengali people.',
    },
    knowledgeCheck: [
      {
        question: 'What is the default inherent vowel attached to an unmarked Bengali consonant like "ব"?',
        options: ['/a/ as in "father"', '/ɔ/ as in "ball" or "law"', '/i/ as in "pin"', '/u/ as in "pull"'],
        correctIndex: 1,
        explanation: 'Bengali consonants carry an inherent rounded /ɔ/ vowel sound (e.g., ব = bɔ).',
      },
      {
        question: 'Does Bengali have masculine/feminine grammatical gender for inanimate objects?',
        options: ['Yes, every object has gender', 'No, Bengali has no grammatical gender for objects', 'Only animate animals have gender', 'Only nouns ending in vowels have gender'],
        correctIndex: 1,
        explanation: 'Bengali is genderless in grammar! Adjectives and verbs do not change based on noun gender.',
      },
    ],
  },

  B02: {
    chapterCode: 'B02',
    language: 'bn',
    titleNative: 'স্বরবর্ণ (Bengali Vowels) ও কার চিহ্ন',
    titleEn: 'Bengali Vowels (Swaraborno) & Kaar Diacritics',
    level: 'beginner',
    estimatedMinutes: 20,
    overview: 'Bengali has 11 recognized vowels in modern orthography: অ, আ, ই, ঈ, উ, ঊ, ঋ, এ, ঐ, ও, ঔ. In writing, when a vowel follows a consonant, it transforms into an abbreviated diacritic called a "কার" (Kaar), such as আকার (া), ইকার (ি), etc.',
    historicalContext: 'Ishwar Chandra Vidyasagar reformed the Bengali alphabet in his pioneering primer "Barnaparichay" (বর্ণপরিচয়) in 1855, removing obsolete vowels like ঌ (vocalic l) and creating the modern standard order.',
    linguisticCore: {
      ruleTitle: 'The 10 "কার" (Kaar) Diacritics',
      ruleDescription: 'The first vowel "অ" has no separate diacritic because it is already embedded in every consonant. The remaining 10 vowels create diacritics placed before, after, above, or around the consonant.',
      breakdownTable: {
        headers: ['Vowel', 'Kaar Symbol', 'Position', 'Example Syllable'],
        rows: [
          ['আ (Aa)', 'া (আ-কার)', 'After consonant (Right)', 'ক + া = কা (Kaa)'],
          ['ই (I)', 'ি (ই-কার)', 'Before consonant (Left)', 'ক + ি = কি (Ki)'],
          ['ঈ (Ee)', 'ী (ঈ-কার)', 'After consonant (Right)', 'ক + ী = কী (Kee)'],
          ['উ (U)', 'ু (উ-কার)', 'Below consonant', 'ক + ু = কু (Ku)'],
          ['এ (E)', 'ে (এ-কার)', 'Before consonant (Left)', 'ক + ে = কে (Ke)'],
          ['ও (O)', 'ো (ও-কার)', 'Surrounds consonant (Left & Right)', 'ক + ো = কো (Ko)'],
        ],
      },
      scriptNotes: [
        'Notice that "ই-কার" (ি) and "এ-কার" (ে) are written BEFORE the consonant, but pronounced AFTER it!',
        '"ও-কার" (ো) is a bipartite diacritic: it surrounds the letter on both sides.',
      ],
    },
    grammarFormulas: [
      {
        name: 'Vowel Diacritic Placement',
        pattern: 'ব্যঞ্জনবর্ণ + কার = পূর্ণ ধ্বনি (Consonant + Kaar = Syllable)',
        explanation: 'Example: ব (bɔ) + া (aa) = বা (baa); ব + ি (i) = বি (bi).',
      },
    ],
    dialogue: {
      context: 'Classroom practice with Barnaparichay',
      lines: [
        { speaker: 'শিক্ষক (Teacher)', native: 'বলো তো, "কলকাতা" বানানে কোন কোন কার আছে?', transliteration: 'Bolo to, "Kolkata" banane kon kon kaar aache?', english: 'Tell me, which Kaar signs are in the spelling of "Kolkata"?' },
        { speaker: 'ছাত্রী (Student)', native: 'ক-তে ও-কার (কো), ল, ক-তে আ-কার (কা), ত-তে আ-কার (তা) = কলকাতা!', transliteration: 'K-te o-kaar (ko), l, k-te aa-kaar (kaa), t-te aa-kaar (taa) = Kolkata!', english: 'K with o-kaar (ko), l, k with aa-kaar (kaa), t with aa-kaar (taa) = Kolkata!' },
      ],
    },
    keyVocabulary: [
      { native: 'মা', translit: 'Maa', english: 'Mother' },
      { native: 'বাবা', translit: 'Baba', english: 'Father' },
      { native: 'গান', translit: 'Gaan', english: 'Song' },
      { native: 'নদী', translit: 'Nodi', english: 'River' },
      { native: 'ফুল', translit: 'Phul', english: 'Flower' },
    ],
    commonMistakes: [
      {
        wrong: 'Writing "ক" then "ি" to the right of the letter',
        correct: 'Place "ি" (Hroshwo-i kaar) to the LEFT of the letter: কি.',
        why: 'The short i diacritic is pre-posed in Bengali script.',
      },
    ],
    culturalProverb: {
      native: 'যত মত, তত পথ।',
      translit: 'Joto mot, toto poth.',
      literal: 'As many opinions, so many paths.',
      culturalMeaning: 'A famous teaching of Sri Ramakrishna Paramahamsa advocating universal harmony and open-minded inquiry.',
    },
    knowledgeCheck: [
      {
        question: 'Which Bengali vowel has NO separate "কার" diacritic mark?',
        options: ['অ (O)', 'আ (Aa)', 'ই (I)', 'ও (O)'],
        correctIndex: 0,
        explanation: 'অ is the inherent vowel; it does not have a separate kaar symbol.',
      },
      {
        question: 'Where is the "এ-কার" (ে) diacritic visually placed relative to its consonant?',
        options: ['After the consonant', 'Before the consonant (to its left)', 'Above the consonant', 'Under the consonant'],
        correctIndex: 1,
        explanation: 'এ-কার (ে) is drawn to the left (before) the consonant letter.',
      },
    ],
  },

  // ==========================================
  // MARATHI LESSON THEORIES
  // ==========================================
  M01: {
    chapterCode: 'M01',
    language: 'mr',
    titleNative: 'मराठी भाषा, इतिहास व बाळबोध लिपी',
    titleEn: 'Introduction to Marathi Language & Balbodh Devanagari',
    level: 'beginner',
    estimatedMinutes: 15,
    overview: 'Marathi (मराठी) is an Indo-Aryan language spoken by over 90 million people, predominantly in Maharashtra and Goa. It is directly derived from Maharashtri Prakrit, which was the court language of the Satavahana Empire. Modern Marathi is written in the "Balbodh" (बाळबोध) style of Devanagari.',
    historicalContext: 'Marathi literature has an ancient lineage dating back to 10th-century stone inscriptions (such as the Shravanabelagola inscription of 981 CE). Great saint-poets like Sant Dnyaneshwar (who composed the Dnyaneshwari in 1290 CE), Sant Tukaram, and the era of Chhatrapati Shivaji Maharaj enriched Marathi with valor, wisdom, and literature.',
    linguisticCore: {
      ruleTitle: 'The Three Genders (तीन लिंगे) & Retroflex "ळ"',
      ruleDescription: 'Unlike Hindi (which has only 2 genders: masculine and feminine), Marathi preserves the ancient three-gender system: पुल्लिंग (Masculine), स्त्रीलिंग (Feminine), and नपुंसकलिंग (Neuter). Marathi also features the distinct retroflex lateral consonant "ळ" (Lha), which does not exist in standard Hindi.',
      breakdownTable: {
        headers: ['Gender Category', 'Pronoun Marker', 'Example Noun', 'Meaning'],
        rows: [
          ['पुल्लिंग (Masculine)', 'तो (To = He / That)', 'तो मुलगा (To mulga)', 'That boy'],
          ['स्त्रीलिंग (Feminine)', 'ती (Tee = She / That)', 'ती मुलगी (Tee mulgi)', 'That girl'],
          ['नपुंसकलिंग (Neuter)', 'ते (Te = It / That)', 'ते पुस्तक (Te pustak)', 'That book / child'],
          ['विशेष वर्ण (Unique Sound)', 'ळ (Retroflex L)', 'पाणी, बाळ, वेळ', 'Water, Child, Time'],
        ],
      },
      scriptNotes: [
        'The letter "ळ" is pronounced by curling the tongue backward so the underside flaps against the hard palate.',
        'Never replace "ळ" with "ल" in Marathi words (e.g. "बाळ" is child, while "बाल" is formal Sanskrit).',
      ],
    },
    grammarFormulas: [
      {
        name: 'The Neuter Gender Rule',
        pattern: 'ते + [नपुंसकलिंग नाम] (Te + Neuter Noun)',
        explanation: 'Many common objects and abstract concepts are neuter in Marathi: ते घर (house), ते पान (leaf), ते शहर (city).',
      },
      {
        name: 'Polite Imperative Formula',
        pattern: 'धातू + या / आवे (Verb stem + yaa / aave)',
        explanation: 'या (come), बसा (sit down), जेवा (have food) denote respectful Maharashtrian hospitality.',
      },
    ],
    dialogue: {
      context: 'Welcoming a guest into a home in Pune',
      lines: [
        { speaker: 'यजमान (Host)', native: 'नमस्कार! या, आत या, बसा!', transliteration: 'Namaskar! Yaa, aat yaa, basa!', english: 'Greetings! Please come in, please take a seat!' },
        { speaker: 'पाहुणे (Guest)', native: 'नमस्कार काका! कसे आहात आपण?', transliteration: 'Namaskar kaka! Kase aahaat aapan?', english: 'Greetings uncle! How are you doing?' },
        { speaker: 'यजमान (Host)', native: 'मी छान आहे. पाणी घ्या, प्रवासात काही त्रास तर नाही झाला?', transliteration: 'Mee chhan aahe. Paani ghyaa, pravaasaat kaahi traas tar naahi zhaala?', english: 'I am good. Please have water; hope you had no trouble during travel?' },
      ],
    },
    keyVocabulary: [
      { native: 'नमस्कार', translit: 'Namaskar', english: 'Greetings / Hello' },
      { native: 'पाणी', translit: 'Paani', english: 'Water', gender: 'neuter' },
      { native: 'घर', translit: 'Ghar', english: 'Home / House', gender: 'neuter' },
      { native: 'पुस्तक', translit: 'Pustak', english: 'Book', gender: 'neuter' },
      { native: 'छान', translit: 'Chhan', english: 'Good / Beautiful' },
    ],
    commonMistakes: [
      {
        wrong: 'Calling a book "ती पुस्तक" (feminine) as in Hindi (यह किताब)',
        correct: 'ते पुस्तक (neuter) in Marathi.',
        why: 'In Marathi, books, houses, and leaves are strictly Neuter (नपुंसकलिंग).',
      },
      {
        wrong: 'Pronouncing "पाणी" with a simple dental n (पानी)',
        correct: 'Use the retroflex णी (/ɳiː/).',
        why: 'Marathi strictly distinguishes between dental न and retroflex ण.',
      },
    ],
    culturalProverb: {
      native: 'अति तिथे माती।',
      translit: 'Ati tithe maati.',
      literal: 'Excess in anything turns to dirt.',
      culturalMeaning: 'Moderation and balance in all endeavors lead to enduring harmony and peace.',
    },
    knowledgeCheck: [
      {
        question: 'How many grammatical genders does Marathi have?',
        options: ['One', 'Two (Masculine & Feminine)', 'Three (Masculine, Feminine & Neuter)', 'Four'],
        correctIndex: 2,
        explanation: 'Marathi retains the classical three-gender system: पुल्लिंग, स्त्रीलिंग, and नपुंसकलिंग.',
      },
      {
        question: 'Which consonant letter is unique to Marathi and not found in standard Hindi?',
        options: ['क (Ka)', 'ळ (Lha)', 'म (Ma)', 'त (Ta)'],
        correctIndex: 1,
        explanation: 'ळ (retroflex lateral) is a hallmark consonant of Marathi (as in पाणी, बाळ, खेळ).',
      },
    ],
  },

  M02: {
    chapterCode: 'M02',
    language: 'mr',
    titleNative: 'मराठी स्वर, बाराखडी व आधुनिक ध्वनी (ॲ, ऑ)',
    titleEn: 'Marathi Vowels, Barakhadi & Modern Loan Sounds',
    level: 'beginner',
    estimatedMinutes: 20,
    overview: 'Standard Marathi traditionally had 12 vowels (from which the term "बाराखडी" originated). In recent decades, the Maharashtra State Government officially incorporated two English loan vowels: ॲ (/æ/ as in cat/bat) and ऑ (/ɒ/ as in ball/doctor), expanding the traditional Barakhadi into "चवदाखडी" (14-vowel series).',
    historicalContext: 'Because Mumbai and Pune became international hubs of industry, education, and medicine, thousands of English words entered Marathi speech. To accurately write words like "बॅट" (bat) and "डॉक्टर" (doctor), ॲ and ऑ were formally institutionalized into the Balbodh alphabet.',
    linguisticCore: {
      ruleTitle: 'The Modern 14-Vowel System (चवदाखडी)',
      ruleDescription: 'Consonants can pair with 14 vowel modifications: अ, आ, इ, ई, उ, ऊ, ऋ, ऌ, ए, ऐ, ओ, औ, ॲ, ऑ.',
      breakdownTable: {
        headers: ['Sound', 'Symbol', 'English Phonetic', 'Example Word in Marathi'],
        rows: [
          ['ॲ (Chandra)', 'ॅ', '/æ/ (short a in bat)', 'बॅग (Bag), फॅन (Fan), मॅच (Match)'],
          ['ऑ (Chandra Aa)', 'ॉ', '/ɒ/ (broad o in pot)', 'ऑफिस (Office), कॉलेज (College), कॉफी (Coffee)'],
          ['ऋ (Vocalic R)', 'ृ', '/ru/ sound', 'ऋतू (Season), कृपा (Grace)'],
        ],
      },
      scriptNotes: [
        'Place the crescent (चन्द्रकोर ॅ) directly above the consonant to produce the /æ/ sound: क + ॅ = कॅ (Cat).',
        'Place the vertical line plus crescent (ॉ) to produce the /ɒ/ sound: क + ॉ = कॉ (Cost).',
      ],
    },
    grammarFormulas: [
      {
        name: 'The Modern Loan Sound Formula',
        pattern: 'व्यंजन + ॅ / ॉ = आधुनिक इंग्रजी शब्द (Consonant + ॅ / ॉ = Loan Word)',
        explanation: 'डॉक्टर (Doctor), बँक (Bank), प्लॅन (Plan).',
      },
    ],
    dialogue: {
      context: 'Ordering at a Pune café',
      lines: [
        { speaker: 'ग्राहक (Customer)', native: 'दादा, एक गरम कॉफी आणि एक मसाला डोसा द्या.', transliteration: 'Dada, ek garam coffee aani ek masala dosa dyaa.', english: 'Brother, please give one hot coffee and one masala dosa.' },
        { speaker: 'दुकानदार (Shopkeeper)', native: 'नक्कीच! तुम्हाला साखर कमी हवी आहे का?', transliteration: 'Nakkich! Tumhala saakhar kami havi aahe ka?', english: 'Certainly! Would you like less sugar?' },
      ],
    },
    keyVocabulary: [
      { native: 'कॉफी', translit: 'Coffee', english: 'Coffee', gender: 'feminine' },
      { native: 'ऑफिस', translit: 'Office', english: 'Office', gender: 'neuter' },
      { native: 'बँक', translit: 'Bank', english: 'Bank', gender: 'feminine' },
      { native: 'कॉलेज', translit: 'College', english: 'College', gender: 'neuter' },
    ],
    commonMistakes: [
      {
        wrong: 'Confusing ॲ with ए (writing "बैट" instead of "बॅट")',
        correct: 'Use ॅ (अर्धचंद्र) for English short "a" sound as in "बॅट" (cricket bat).',
        why: 'बैट with matra े sounds like "bait", whereas बॅट sounds like "bat".',
      },
    ],
    culturalProverb: {
      native: 'उथळ पाण्याला खळखळाट फार।',
      translit: 'Uthal paanyala khalkhalaat phaar.',
      literal: 'Shallow water makes excessive noise.',
      culturalMeaning: 'A person with shallow understanding talks too much; genuine depth brings stillness.',
    },
    knowledgeCheck: [
      {
        question: 'Which two vowel sounds were officially added to Marathi to write loan words like "bat" and "doctor"?',
        options: ['ॲ and ऑ', 'ऐ and औ', 'अं and अः', 'ऋ and ऌ'],
        correctIndex: 0,
        explanation: 'ॲ (/æ/) and ऑ (/ɒ/) are modern additions for English loan vocabulary.',
      },
      {
        question: 'What is the modern 14-vowel syllable series in Marathi called?',
        options: ['बाराखडी (Barakhadi)', 'चवदाखडी (Chavdakhadi)', 'अक्षरमाला', 'वर्णमाला'],
        correctIndex: 1,
        explanation: 'With the addition of ॲ and ऑ, the 12-vowel Barakhadi became the 14-vowel Chavdakhadi.',
      },
    ],
  },
};
