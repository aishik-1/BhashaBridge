import {
  LiteratureAuthor,
  EducationalResource,
  RoadmapWeek,
  ExamQuestion,
  Worksheet,
  LanguageCode
} from '../types';

// =========================================================================
// 1. LITERATURE MODULE (BENGALI, MARATHI, HINDI)
// =========================================================================

export const LITERATURE_AUTHORS: LiteratureAuthor[] = [
  // --- BENGALI LITERARY GIANTS ---
  {
    id: 'tagore',
    nameNative: 'রবীন্দ্রনাথ ঠাকুর',
    nameEn: 'Rabindranath Tagore (1861–1941)',
    language: 'bn',
    era: 'Bengal Renaissance & Modern Era',
    genre: 'Poetry, Short Stories, Novels, Music (Rabindra Sangeet)',
    bioEn: 'First non-European Nobel Laureate in Literature (1913 for Gitanjali). Reshaped Bengali literature and music, authored national anthems of India and Bangladesh.',
    famousWorks: ['গীতাঞ্জলি (Gitanjali)', 'গল্পগুচ্ছ (Galpaguchchha)', 'গোরা (Gora)', 'ঘরে বাইরে (Ghare Baire)', 'ডাকঘর (The Post Office)'],
    sampleExcerpt: {
      title: 'গীতাঞ্জলি (Gitanjali - Song 35)',
      originalScript: 'চিত্ত যেথা ভয়শূন্য, উচ্চ যেথা শির,\nজ্ঞান যেথা মুক্ত, যেথা গৃহের প্রাচীর\nআপন প্রাঙ্গণমাঝে দিবসশর্বরী\nবসুধারে রাখে নাই খণ্ড ক্ষুদ্র করি...',
      englishTranslation: 'Where the mind is without fear and the head is held high;\nWhere knowledge is free;\nWhere the world has not been broken up into fragments\nBy narrow domestic walls...',
      analysis: 'A prayer for universal human dignity, intellectual liberation, and fearlessness that became a moral compass for the freedom struggle.'
    }
  },
  {
    id: 'nazrul',
    nameNative: 'কাজী নজরুল ইসলাম',
    nameEn: 'Kazi Nazrul Islam (1899–1976)',
    language: 'bn',
    era: 'Nationalist & Revolutionary Era',
    genre: 'Rebel Poetry, Songs (Nazrul Geeti), Journalism',
    bioEn: 'The "Bidrohi Kobi" (Rebel Poet) and National Poet of Bangladesh. Championed religious harmony, anti-imperialism, and fiery humanism.',
    famousWorks: ['অগ্নিবীণা (Agnibeena)', 'বিদ্রোহী (The Rebel)', 'সাম্যবাদী (The Equalizer)', 'রিক্তের বেদন (Rikter Bedon)'],
    sampleExcerpt: {
      title: 'বিদ্রোহী (The Rebel - 1922)',
      originalScript: 'বল বীর –\nবল উন্নত মম শির!\nশির নেহারি আমারি, নত-শির ওই শিখর হিমাদ্রীর!\nবল বীর –\nবল মহাবিশ্বের মহাকাশ ফাড়ি\nচন্দ্র সূর্য গ্রহ তারা ছাড়ি...',
      englishTranslation: 'Say, Valiant!\nSay: High is my head!\nLooking at my head, the Himalayan peaks bow down!\nSay, Valiant –\nTearing the sky of the universe,\nLeaving behind the moon, sun, planets, and stars...',
      analysis: 'Unparalleled explosive rhythm celebrating unyielding human agency against all tyranny and injustice.'
    }
  },
  {
    id: 'bankim',
    nameNative: 'বঙ্কিমচন্দ্র চট্টোপাধ্যায়',
    nameEn: 'Bankim Chandra Chatterjee (1838–1894)',
    language: 'bn',
    era: 'Early Renaissance',
    genre: 'Historical & Social Novels, Nationalist Essays',
    bioEn: 'Often called the father of modern Bengali prose fiction. Author of Vande Mataram, India’s National Song.',
    famousWorks: ['আনন্দমঠ (Anandamath)', 'কপালকুণ্ডলা (Kapalkundala)', 'দুর্গেশনন্দিনী (Durgeshnandini)', 'কমলাকান্তের দপ্তর'],
    sampleExcerpt: {
      title: 'বন্দে মাতরম্ (আনন্দমঠ উপন্যাস থেকে)',
      originalScript: 'বন্দে মাতরম্।\nসুজলাং সুফলাং মলয়জশীতলাম্\nশস্যশ্যামলাং মাতরম্!\nশুভ্রজ্যোৎস্নাপুলকিতযামিনীম্\nফুল্লকুসুমিতদ্রুমদলশোভিনীম্...',
      englishTranslation: 'Mother, I bow to thee!\nRich with thy hurrying streams,\nBright with orchard gleams,\nCool with thy winds of delight,\nDark fields waving, Mother of might...',
      analysis: 'Revered ode revering the motherland as the divine nurturing mother.'
    }
  },
  {
    id: 'sarat',
    nameNative: 'শরৎচন্দ্র চট্টোপাধ্যায়',
    nameEn: 'Sarat Chandra Chattopadhyay (1876–1938)',
    language: 'bn',
    era: 'Early 20th Century Social Realism',
    genre: 'Novels, Emotional & Domestic Realism',
    bioEn: 'Most popular novelist in Bengali history, celebrated across India for poignant portrayals of women, village life, and rigid social orthodoxies.',
    famousWorks: ['দেবদাস (Devdas)', 'চরিত্রহীন (Charitraheen)', 'শ্রীকান্ত (Srikanta)', 'পল্লী সমাজ (Palli Samaj)', 'পরিণীতা (Parineeta)'],
    sampleExcerpt: {
      title: 'শ্রীকান্ত (Srikanta - Chapter 1)',
      originalScript: 'আমার জীবনের ভ্রমণবৃত্তান্ত লিখিতে বসিয়া প্রথমেই ভাবিতেছি, কাহার কাছে এই কাহিনী নিবেদন করিব? জীবনের সুখ-দুঃখের আলো-ছায়ার মধ্য দিয়া যে নিঃসঙ্গ পথিক পথ চলিয়াছে...',
      englishTranslation: 'Sitting down to write the chronicle of my wanderings, I wonder first to whom I shall dedicate this tale. The solitary wanderer walking through the mingled light and shade...',
      analysis: 'A masterclass in subjective psychological intimacy and rural social critique.'
    }
  },
  {
    id: 'jibanananda',
    nameNative: 'জীবনানন্দ দাশ',
    nameEn: 'Jibanananda Das (1899–1954)',
    language: 'bn',
    era: 'Kallol & Post-Tagore Modernism',
    genre: 'Modernist Lyric Poetry, Rural Sensualism',
    bioEn: 'Premier modernist Bengali poet who immortalized Bengal’s moist, melancholic landscapes with surreal, hypnotic metaphors.',
    famousWorks: ['বনলতা সেন (Banalata Sen)', 'রূপসী বাংলা (Rupasi Bangla)', 'ধূসর পাণ্ডুলিপি (Grey Manuscript)', 'ঝরা পালক'],
    sampleExcerpt: {
      title: 'বনলতা সেন (Banalata Sen)',
      originalScript: 'হাজার বছর ধরে আমি পথ হাঁটিতেছি পৃথিবীর পথে,\nসিংহল সমুদ্র থেকে নিশীথের অন্ধকারে মালয় সাগরে\nঅনেক ঘুরেছি আমি; বিম্বিসার অশোকের ধূসর জগতে\nসেখানে ছিলাম আমি; আরো দূর অন্ধকারে বিদর্ভ নগরে...',
      englishTranslation: 'For thousands of years I have walked the paths of the earth,\nFrom the seas of Ceylon in the dark of night to the Malayan waters\nMuch have I wandered; in the grey world of Bimbisara and Ashoka\nThere was I; in deeper darkness still, in the city of Vidarbha...',
      analysis: 'Iconic Bengali love poem invoking timeless cosmic fatigue and the sanctuary of womanhood.'
    }
  },
  {
    id: 'sukumar',
    nameNative: 'সুকুমার রায়',
    nameEn: 'Sukumar Ray (1887–1923)',
    language: 'bn',
    era: 'Early 20th Century',
    genre: 'Children’s Literature, Nonsense Verse, Satire',
    bioEn: 'Pioneer of Indian nonsense verse, brilliant illustrator, and father of filmmaker Satyajit Ray.',
    famousWorks: ['আবোল তাবোল (Abol Tabol)', 'হযবরল (HaJaBaRaLa)', 'পাগলা দাশু (Pagla Dashu)', 'খাই খাই (Khai Khai)'],
    sampleExcerpt: {
      title: 'খিচুড়ি (আবোল তাবোল)',
      originalScript: 'হাঁস ছিল, সজারুও, (ব্যাকরণ মানিনা)\nহয়ে গেল ‘হাঁসজারু’ কেমনে তা জানিনা।\nবক কহে কচ্ছপে— “বাহবা কি ফুর্তি!\nঅতি খাসা আমাদের বকচ্ছপ মূর্ত্তি!”',
      englishTranslation: 'A duck and a porcupine, defying all grammar,\nMerged into a "Duckupine" by some strange hammer!\nThe crane told the turtle: "Oh what a delight!\nOur composite "Cranetoise" is a wondrous sight!"',
      analysis: 'Genius wordplay combining animals to satirize rigid pedantry.'
    }
  },

  // --- MARATHI LITERARY GIANTS ---
  {
    id: 'tukaram',
    nameNative: 'संत तुकाराम',
    nameEn: 'Sant Tukaram (1608–1650)',
    language: 'mr',
    era: 'Bhakti Movement (17th Century)',
    genre: 'Abhang, Devotional Poetry, Social Critique',
    bioEn: 'The zenith of the Varkari saint tradition. Composed over 4,500 Abhangas in pure colloquial Marathi, advocating casteless devotion and moral purity.',
    famousWorks: ['तुकाराम गाथा (Tukaram Gatha - 4500+ Abhangs)', 'आनंदाचे डोही आनंद तरंग'],
    sampleExcerpt: {
      title: 'वृक्षवल्ली आम्हा सोयरी (Abhang)',
      originalScript: 'वृक्षवल्ली आम्हा सोयरी वनचरे।\nपक्षीही सुस्वरे आळविती॥\nयेणे सुखे रुचे एकांताचा वास।\nनाही गुणदोष अंगा येत॥',
      englishTranslation: 'Trees, creepers and forest beasts are our kith and kin,\nAnd birds sing with sweet melodic voices.\nIn such blissful company, solitude is delectable,\nWhere neither virtue nor vice stains our being.',
      analysis: 'Profound ecological and spiritual communion with nature and detachment from worldly hypocrisy.'
    }
  },
  {
    id: 'dnyaneshwar',
    nameNative: 'संत ज्ञानेश्वर',
    nameEn: 'Sant Dnyaneshwar (1275–1296)',
    language: 'mr',
    era: '13th Century Bhakti & Philosophy',
    genre: 'Philosophical Discourse, Ovi Meter, Haripath',
    bioEn: 'Pioneered Marathi literature at age 15 by translating the Bhagavad Gita into vernacular Marathi (Bhavartha Dipika / Dnyaneshwari), ending Sanskrit monopoly.',
    famousWorks: ['भावार्थ दीपिका (ज्ञानेश्वरी - Dnyaneshwari)', 'अमृतानुभव (Amritanubhav)', 'पसायदान (Pasaydan)'],
    sampleExcerpt: {
      title: 'पसायदान (ज्ञानेश्वरी १८वा अध्याय)',
      originalScript: 'आता विश्वात्मके देवे। येणे वाग्यज्ञे तोषावे।\nतोषोनि मज द्यावे। पसायदान हे॥\nजे खळांची व्यंकटी सांडो। तया सत्कर्मी रती वाढो।\nभूता परस्परें पडो। मैत्र जीवांचे॥',
      englishTranslation: 'Now may the Divine Soul of the Universe be pleased with this linguistic sacrifice,\nAnd in contentment bestow upon me this blessing:\nMay the crookedness of wicked minds dissolve,\nMay their passion for noble deeds flourish,\nMay all living beings be bonded in cosmic friendship.',
      analysis: 'Considered Maharashtra’s supreme universal prayer for world peace and enlightenment.'
    }
  },
  {
    id: 'kusumagraj',
    nameNative: 'कुसुमाग्रज (वि. वा. शिरवाडकर)',
    nameEn: 'Kusumagraj / V. V. Shirwadkar (1912–1999)',
    language: 'mr',
    era: 'Modernist National & Post-Independence Era',
    genre: 'Poetry, Drama, Novels, Social Humanism',
    bioEn: 'Jnanpith Awardee (1987). His birthday (Feb 27) is celebrated globally as Marathi Language Day (मराठी भाषा गौरव दिन).',
    famousWorks: ['नटसम्राट (Natsamrat)', 'विशाखा (Vishakha)', 'किनारा (Kinara)', 'कणा (Kana)'],
    sampleExcerpt: {
      title: 'कणा (The Backbone - Vishakha)',
      originalScript: '‘ओळखलंत का मला सर?’ पावसात आला कोणी,\nकपडे होते चिखलाने भरलेले, डोळ्यांत पाणी.\n‘मोडून पडला संसार तरी मोडला नाही कणा,\nपाठीवरती हात ठेवून फक्त लढ म्हणा!’',
      englishTranslation: '"Did you recognize me, Sir?" someone arrived in the rain,\nClothes soaked in mud, tears welling in the eyes.\n"My home and hearth were destroyed, yet my backbone didn’t break,\nJust place your hand on my back and tell me: Fight on!"',
      analysis: 'Maharashtra’s most famous motivational poem celebrating indomitable resilience in the face of natural disaster.'
    }
  },
  {
    id: 'khandekar',
    nameNative: 'वि. स. खांडेकर',
    nameEn: 'V. S. Khandekar (1898–1976)',
    language: 'mr',
    era: 'Mid-20th Century Realism & Mythic Allegory',
    genre: 'Novels, Short Stories, Screenplays, Essays',
    bioEn: 'The first Marathi author to win the Jnanpith Award (1974 for Yayati). Explored the conflict between hedonism and self-transcendence.',
    famousWorks: ['ययाति (Yayati)', 'अमृतवेल (Amrutvel)', 'क्रौंचवध (Kraunchavadh)', 'उल्का (Ulka)'],
    sampleExcerpt: {
      title: 'ययाति (Yayati - Introduction)',
      originalScript: 'ययाति हा केवळ एका प्राचीन राजाचा इतिहास नाही, तो प्रत्येक मानवाच्या अंतःकरणातील अतृप्त वासनांचा आणि आत्मिक संघर्षाचा जिवंत आरसा आहे...',
      englishTranslation: 'Yayati is not merely the chronicle of an ancient mythological monarch; it is a living mirror reflecting the insatiable cravings and spiritual turmoil in every human heart...',
      analysis: 'Allegorical reinterpretation of the Mahabharata exploring the futility of chasing endless physical desires.'
    }
  },
  {
    id: 'pu_la',
    nameNative: 'पु. ल. देशपांडे',
    nameEn: 'P. L. Deshpande / PuLa (1919–2000)',
    language: 'mr',
    era: 'Post-Independence Culture & Arts',
    genre: 'Humour, Satire, Travelogues, Plays, Music',
    bioEn: 'Maharashtra’s most beloved cultural icon. Renowned for affectionate human sketches, witty wordplay, and vibrant one-man theatre.',
    famousWorks: ['बटाट्याची चाळ (Batatyachi Chaal)', 'व्यक्ती आणि वल्ली (Vyakti Ani Valli)', 'अपूर्वाई (Apoorvai)', 'ती फुलराणी (Ti Phulrani)'],
    sampleExcerpt: {
      title: 'बटाट्याची चाळ (Batatyachi Chaal)',
      originalScript: 'आमच्या चाळीत उपवास हा एका विशिष्ट आध्यात्मिक वृत्तीतून नव्हे, तर पोटाचा घेर कमी करण्यासाठी आणि शेजाऱ्यांना चकित करण्यासाठी केला जातो...',
      englishTranslation: 'In our chawl, fasting is undertaken not out of any lofty spiritual disposition, but to shrink the paunch and leave the gossiping neighbours utterly flabbergasted...',
      analysis: 'Timeless gentle satire celebrating the eccentricities and warm solidarity of middle-class Mumbai tenement life.'
    }
  },
  {
    id: 'savitribai',
    nameNative: 'सावित्रीबाई फुले',
    nameEn: 'Savitribai Phule (1831–1897)',
    language: 'mr',
    era: '19th Century Social Reform',
    genre: 'Reformist Poetry, Speeches, Letters',
    bioEn: 'India’s first female schoolteacher and revolutionary pioneer of girls’ education alongside Mahatma Jyotirao Phule.',
    famousWorks: ['काव्यफुले (Kavyaphule - 1854)', 'बावनकशी सुबोध रत्नाकर (1892)'],
    sampleExcerpt: {
      title: 'शिक्षणासाठी उठा (काव्यफुले)',
      originalScript: 'ज्ञान नाही विद्या नाही, तेणे मनुष्य पशु होई।\nशिका शिका तुम्ही सारे, अज्ञानाचा अंधार घालवा रे!\nस्वाभिमानाने जगायला शिका, शिक्षणाने क्रांती करा...',
      englishTranslation: 'Without knowledge and without education, a human remains a beast.\nAwake, awake you all, and cast off the darkness of ignorance!\nLearn to live with self-respect, and let education kindle your revolution.',
      analysis: 'The earliest printed voice of feminist liberation and anti-caste education in Marathi literature.'
    }
  },

  // --- HINDI LITERARY GIANTS ---
  {
    id: 'premchand',
    nameNative: 'मुंशी प्रेमचंद',
    nameEn: 'Munshi Premchand (1880–1936)',
    language: 'hi',
    era: 'Modern Hindi-Urdu Renaissance',
    genre: 'Realistic Novels, Social Short Stories (Upanyas Samrat)',
    bioEn: 'The Emperor of Hindi Fiction (उपन्यास सम्राट). Wrote over 300 short stories exposing peasant debt, feudal exploitation, and caste bigotry with deep empathy.',
    famousWorks: ['गोदान (Godan)', 'गबन (Gaban)', 'ईदगाह (Idgah)', 'कफ़न (Kafan)', 'मानसरोवर (8 Volumes)'],
    sampleExcerpt: {
      title: 'ईदगाह (Idgah - Ending scene)',
      originalScript: 'हामिद ने चिमटा जमीन पर पटक कर कहा—‘जरा अपना भिश्ती जमीन पर गिरा दो, सारी पसलियाँ चूर-चूर हो जाएँगी!’ बूढ़ी अमीना हामिद के इस नन्हे से त्याग, सद्भाव और विवेक को देखकर रो पड़ी...',
      englishTranslation: 'Hamid slammed his tongs to the ground and said: "Drop your clay water-bearer once, and all his ribs will shatter!" Old Amina wept, overwhelmed by little Hamid’s profound sacrifice, kindness, and maturity...',
      analysis: 'Legendary children’s story showing childhood empathy trumping consumer temptation.'
    }
  },
  {
    id: 'kabir',
    nameNative: 'संत कबीरदास',
    nameEn: 'Sant Kabir (1440–1518)',
    language: 'hi',
    era: 'Bhakti Movement (Nirguna)',
    genre: 'Dohas (Couplets), Sakhis, Padas',
    bioEn: 'Mystic weaver-poet whose pithy Devanagari couplets fiercely denounced ritualism, religious bigotry, and superficial piety.',
    famousWorks: ['कबीर बीजक (Bijak)', 'कबीर ग्रंथावली', 'साखी, सबद, रमैनी'],
    sampleExcerpt: {
      title: 'कबीर दोहावली',
      originalScript: 'पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय।\nढाई आखर प्रेम का, पढ़े सो पंडित होय॥\n\nबुरा जो देखन मैं चला, बुरा न मिलिया कोय।\nजो दिल खोजा आपना, मुझसे बुरा न कोय॥',
      englishTranslation: 'Reading stacks of scriptures, the world perished, yet none became truly wise.\nHe who masters the two-and-a-half letters of LOVE, alone is wise.\n\nSearching for evil in the world, I found no evil person.\nWhen I peered into my own heart, none was more flawed than I.',
      analysis: 'Direct universal ethical aphorisms stripping away egotism and clerical dogma.'
    }
  },
  {
    id: 'bachchan',
    nameNative: 'हरिवंश राय बच्चन',
    nameEn: 'Harivansh Rai Bachchan (1907–2003)',
    language: 'hi',
    era: 'Chhayavad-Uttar / Halavad',
    genre: 'Lyrical Poetry, Autobiography, Translation',
    bioEn: 'Pioneer of the Halavad romantic-philosophical movement; author of the immortal Madhushala and translations of Shakespeare.',
    famousWorks: ['मधुशाला (Madhushala)', 'मधुबाला (Madhubala)', 'क्या भूलूँ क्या याद करूँ', 'अग्निपथ (Agnipath)'],
    sampleExcerpt: {
      title: 'मधुशाला (Madhushala - Verse 1)',
      originalScript: 'मदिरालय जाने को घर से चलता है पीनेवला,\n‘किस पथ से जाऊँ?’ असमंजस में है वह भोलाभाला;\nअलग-अलग पथ बतलाते सब, पर मैं यह बतलाता हूँ—\n‘राह पकड़ तू एक चला चल, पा जाएगा मधुशाला!’',
      englishTranslation: 'From his home steps the drinker, heading for the tavern,\n"Which path shall I take?" wanders the naive seeker in doubt;\nDifferent people point to different paths, but I tell you this:\n"Hold firm to one steadfast path, and you shall surely attain the Tavern!"',
      analysis: 'Allegory where the tavern symbolizes life’s sanctuary beyond sectarian dogma.'
    }
  }
];

// =========================================================================
// 2. OFFICIAL EDUCATIONAL RESOURCES & LINKS
// =========================================================================

export const EDUCATIONAL_RESOURCES: EducationalResource[] = [
  {
    id: 'ncert-epathshala',
    title: 'NCERT ePathshala Portal',
    provider: 'Ministry of Education, Govt. of India / NCERT',
    url: 'https://epathshala.nic.in/',
    description: 'Official digital learning repository offering authentic NCERT textbooks, audio, video lectures, and graded curriculum for Hindi and regional languages from Classes 1 to 12.',
    type: 'official',
    languagesSupported: ['hi', 'bn', 'mr'],
    iconType: 'GraduationCap',
    tags: ['Curriculum', 'Textbooks', 'CBSE Standards 1-12']
  },
  {
    id: 'balbharati',
    title: 'Maharashtra Balbharati e-Book Library',
    provider: 'Maharashtra State Bureau of Textbook Production',
    url: 'https://ebalbharati.in/',
    description: 'Complete official school textbook collection for Maharashtra State Board standards 1 through 12. Covers Marathi medium, Hindi, English, and bilingual primers.',
    type: 'official',
    languagesSupported: ['mr', 'hi'],
    iconType: 'BookOpen',
    tags: ['Maharashtra Board', 'Marathi Grammars', 'School Books']
  },
  {
    id: 'ciil-primers',
    title: 'Central Institute of Indian Languages (CIIL)',
    provider: 'Department of Higher Education, Govt. of India',
    url: 'https://www.ciil.org/',
    description: 'National apex body for Indian languages research. Provides foundational language primers, phonology guides, and pedagogical resources for Bengali, Marathi, and Hindi.',
    type: 'official',
    languagesSupported: ['bn', 'mr', 'hi'],
    iconType: 'Building',
    tags: ['Research', 'Primers', 'Linguistic Standards']
  },
  {
    id: 'bharatavani',
    title: 'Bharatavani Knowledge Portal',
    provider: 'CIIL & Ministry of Education, Govt. of India',
    url: 'https://bharatavani.in/',
    description: 'The largest multilingual portal of India. Features exhaustive grammar rules, phonetics databases, dictionaries, glossaries, and open educational multimedia.',
    type: 'official',
    languagesSupported: ['hi', 'bn', 'mr'],
    iconType: 'Globe',
    tags: ['Open Educational Resources', 'Dictionaries', 'Phonology']
  },
  {
    id: 'cfilt-iitb',
    title: 'IIT Bombay CFILT (Center for Indian Language Technology)',
    provider: 'IIT Bombay Computer Science & CFILT',
    url: 'https://www.cfilt.iitb.ac.in/',
    description: 'World-renowned NLP and language database. Hosts the Hindi WordNet, Marathi WordNet, bilingual synsets, morphological analyzers, and syntax corpora.',
    type: 'research',
    languagesSupported: ['hi', 'mr'],
    iconType: 'Cpu',
    tags: ['WordNet', 'Corpora', 'Syntax Analysis']
  },
  {
    id: 'uchicago-digital-south-asia',
    title: 'University of Chicago – Digital South Asia Library',
    provider: 'University of Chicago Library',
    url: 'https://dsal.uchicago.edu/dictionaries/',
    description: 'Authoritative classical dictionaries including Platts Hindi-Urdu Dictionary, Molesworth Marathi-English Dictionary, and Biswas Bengali-English Dictionary.',
    type: 'dictionary',
    languagesSupported: ['hi', 'bn', 'mr'],
    iconType: 'Search',
    tags: ['Classical Dictionaries', 'Etymology', 'Scholarship']
  },
  {
    id: 'msu-hindi',
    title: 'Michigan State University Basic Hindi',
    provider: 'MSU Open Educational Resources',
    url: 'https://openbooks.lib.msu.edu/basichindi/',
    description: 'Award-winning open-access interactive online textbook with audio tracks, script stroke orders, cultural dialogues, and structured grammar drills.',
    type: 'course',
    languagesSupported: ['hi'],
    iconType: 'MonitorPlay',
    tags: ['Beginner Course', 'Dialogue Audio', 'Interactive Drills']
  },
  {
    id: 'central-hindi-directorate',
    title: 'Central Hindi Directorate (केन्द्रीय हिन्दी निदेशालय)',
    provider: 'Ministry of Education, Govt. of India',
    url: 'http://hindinideshalaya.nic.in/',
    description: 'Official body regulating standardized Hindi spelling, Devanagari Unicode keyboards, bilingual glossaries, and Hindi-English-Foreign language dictionaries.',
    type: 'official',
    languagesSupported: ['hi'],
    iconType: 'Award',
    tags: ['Standard Spelling', 'Hindi Kosh', 'Devanagari Rules']
  }
];

// =========================================================================
// 3. 24-WEEK MASTER ROADMAP (FOUNDATION → ADVANCED)
// =========================================================================

export const MASTER_ROADMAP: RoadmapWeek[] = [
  {
    weekRange: 'Weeks 1–2',
    phase: 'Phase 1: Foundation',
    level: 'beginner',
    title: 'Script, Alphabet & Phonetics Mastery',
    goals: [
      'Learn independent vowels (स्वर / স্বরবর্ণ) and consonants (व्यंजन / ব্যঞ্জনবর্ণ)',
      'Master vowel diacritics (मात्रा / কার) and Barakhadi chart',
      'Understand articulation points: velar, palatal, retroflex, dental, labial',
      'Daily greetings, self-introductions, and numbers 1 to 20'
    ],
    recommendedHoursPerWeek: 4,
    checkpoint: 'Foundation Checkpoint: Write alphabet from memory & identify sounds with 90% accuracy.',
    practicalTask: 'Record a 30-second audio clip pronouncing all vowels and greetings.'
  },
  {
    weekRange: 'Weeks 3–4',
    phase: 'Phase 2: Basic Vocabulary',
    level: 'beginner',
    title: 'High-Frequency Core Vocabulary',
    goals: [
      'Acquire 300–500 essential root words across 8 thematic categories',
      'Family members, numbers up to 100, days of the week, months, and time',
      'Food, household objects, directions, and weather terms',
      'Construct simple 3-word Subject-Object-Verb sentences'
    ],
    recommendedHoursPerWeek: 5,
    checkpoint: 'Vocabulary Checkpoint: Pass 50-word flashcard speed drill in under 3 minutes.',
    practicalTask: 'Label 15 household items with sticky notes in the target script.'
  },
  {
    weekRange: 'Weeks 5–8',
    phase: 'Phase 3: Grammar Fundamentals',
    level: 'beginner',
    title: 'Morphology, Parts of Speech & Basic Tenses',
    goals: [
      'Master Nouns, Pronouns, and Adjectives with gender and number rules',
      'Understand language-specific gender rules (Bengali has no gender; Hindi 2 genders; Marathi 3 genders)',
      'Conjugate Present Simple, Past Simple, and Future Simple verbs',
      'Cases and postpositions (Karak / Vibhakti / বিভক্তি)'
    ],
    recommendedHoursPerWeek: 6,
    checkpoint: 'Beginner Assessment: Score at least 70/100 on the Beginner Comprehensive Test.',
    practicalTask: 'Write 10 complete sentences describing your daily morning routine.'
  },
  {
    weekRange: 'Weeks 9–12',
    phase: 'Phase 4: Communication & Listening',
    level: 'intermediate',
    title: 'Spoken Fluency, Questions & Dialogue',
    goals: [
      'Construct all 7 Wh-questions (What, Where, When, Why, Who, How, How much)',
      'Real-world conversational roleplay: ordering food, shopping at markets, hiring auto-rickshaws',
      'Listening comprehension: decode dialogues spoken at natural speed',
      'Read short children’s stories and answer 5 comprehension questions'
    ],
    recommendedHoursPerWeek: 6,
    checkpoint: 'Oral Checkpoint: Conduct a 2-minute simulated dialogue with the AI Tutor.',
    practicalTask: 'Transcribe a 1-minute audio recording and translate it into English.'
  },
  {
    weekRange: 'Weeks 13–16',
    phase: 'Phase 5: Intermediate Writing & Syntax',
    level: 'intermediate',
    title: 'Composition, Conjunctions & Translation',
    goals: [
      'Combine sentences with conjunctions (and, but, because, although)',
      'Master formal and informal letter formats (पत्रलेखन / চিঠি লেখা)',
      'Prefixes (उपसर्ग) and Suffixes (प्रत्यय) to deduce unknown vocabulary',
      'Translate medium-length English paragraphs into natural target prose'
    ],
    recommendedHoursPerWeek: 7,
    checkpoint: 'Intermediate Assessment: Submit a 150-word essay on "My School" or "My City".',
    practicalTask: 'Write a formal leave letter to a teacher or employer using correct honorifics.'
  },
  {
    weekRange: 'Weeks 17–20',
    phase: 'Phase 6: Literature & Advanced Grammar',
    level: 'advanced',
    title: 'Literary Masters, Idioms & Compound Sentences',
    goals: [
      'Study foundational authors: Tagore/Nazrul (BN), Tukaram/Kusumagraj (MR), Premchand/Kabir (HI)',
      'Idioms, proverbs (मुहावरे, म्हणी, বাগধারা) and poetic meter',
      'Sandhi (phonetic junction) and Samas (compound words)',
      'Read authentic regional news editorials and literary excerpts'
    ],
    recommendedHoursPerWeek: 7,
    checkpoint: 'Literature Checkpoint: Interpret an unseen poem and explain its central metaphor.',
    practicalTask: 'Memorize and recite a 4-line classic verse or abhang with correct cadence.'
  },
  {
    weekRange: 'Weeks 21–22',
    phase: 'Phase 7: Real-Life Fluency & Discourse',
    level: 'advanced',
    title: 'Interviews, Debates & Public Presentation',
    goals: [
      'Formal versus colloquial speech registers and bureaucratic terminology',
      'Expressing opinions, agreement, and polite disagreement in debates',
      'Listening to authentic interviews, podcasts, and speeches without subtitles',
      'Advanced two-way sight translation'
    ],
    recommendedHoursPerWeek: 8,
    checkpoint: 'Fluency Checkpoint: Deliver an extempore 2-minute speech on a current social issue.',
    practicalTask: 'Record a comprehensive 2-minute personal portfolio introduction.'
  },
  {
    weekRange: 'Weeks 23–24',
    phase: 'Phase 8: Final Assessment & Certification',
    level: 'advanced',
    title: 'Full Mock Exam & Course Completion',
    goals: [
      'Review all 40 chapters systematically',
      'Complete the full-length 100-mark timed examination',
      'Resolve incorrect questions in targeted revision mode',
      'Generate official verifiable Certificate of Achievement'
    ],
    recommendedHoursPerWeek: 8,
    checkpoint: 'Final Examination: Pass 100-Mark Examination with 80%+ for Distinction.',
    practicalTask: 'Download, print, and share your verified BhashaBridge Certificate.'
  }
];

// =========================================================================
// 4. FULL 100-MARK EXAMINATION QUESTION BANK
// =========================================================================

export const MOCK_EXAM_HINDI: ExamQuestion[] = [
  // Section 1: Alphabet & Spelling (10 Marks - 5 Qs x 2)
  {
    id: 'HI-EX-01',
    section: 'alphabet',
    sectionName: 'Alphabet & Spelling (वर्णमाला व वर्तनी)',
    marks: 2,
    prompt: 'Which of the following is a retroflex consonant (मूर्धन्य व्यंजन)?',
    promptNative: 'निम्नलिखित में से कौन-सा मूर्धन्य व्यंजन है?',
    options: ['त', 'ट', 'प', 'क'],
    correctAnswer: 'ट',
    explanation: '‘ट’ वर्ग (ट, ठ, ड, ढ, ण) मूर्धन्य व्यंजन होते हैं, जिनका उच्चारण जीभ को मोड़कर तालू से छूने पर होता है।'
  },
  {
    id: 'HI-EX-02',
    section: 'alphabet',
    sectionName: 'Alphabet & Spelling (वर्णमाला व वर्तनी)',
    marks: 2,
    prompt: 'Identify the correctly spelled word (शुद्ध वर्तनी):',
    promptNative: 'शुद्ध वर्तनी वाला शब्द पहचानें:',
    options: ['कविइत्री', 'कवयित्री', 'कवियत्री', 'कवयत्री'],
    correctAnswer: 'कवयित्री',
    explanation: 'कवि का शुद्ध स्त्रीलिंग रूप ‘कवयित्री’ होता है।'
  },
  {
    id: 'HI-EX-03',
    section: 'alphabet',
    sectionName: 'Alphabet & Spelling (वर्णमाला व वर्तनी)',
    marks: 2,
    prompt: 'Which word contains a half-letter with Reph (रेफ़)?',
    promptNative: 'किस शब्द में रेफ़ (र्) का शुद्ध प्रयोग हुआ है?',
    options: ['प्रकाश', 'क्रम', 'धर्म', 'ट्रक'],
    correctAnswer: 'धर्म',
    explanation: '‘धर्म’ में र् स्वररहित होकर म के ऊपर रेफ़ के रूप में लगा है।'
  },
  {
    id: 'HI-EX-04',
    section: 'alphabet',
    sectionName: 'Alphabet & Spelling (वर्णमाला व वर्तनी)',
    marks: 2,
    prompt: 'What sound does the diacritic Anusvara (ं) represent?',
    promptNative: 'अनुस्वार (ं) किस प्रकार की ध्वनि है?',
    options: ['कंठ्य', 'नासिक्य', 'ओष्ठ्य', 'तालव्य'],
    correctAnswer: 'नासिक्य',
    explanation: 'अनुस्वार पूर्ण नासिक्य ध्वनि है जिसका उच्चारण नाक से होता है।'
  },
  {
    id: 'HI-EX-05',
    section: 'alphabet',
    sectionName: 'Alphabet & Spelling (वर्णमाला व वर्तनी)',
    marks: 2,
    prompt: 'Which pair of letters forms the conjunct ज्ञ?',
    promptNative: 'संयुक्त व्यंजन ‘ज्ञ’ किन वर्णों के मेल से बना है?',
    options: ['ग् + य', 'ज् + ञ', 'ग् + ष्', 'ज् + य'],
    correctAnswer: 'ज् + ञ',
    explanation: 'ज्ञ = ज् + ञ।'
  },

  // Section 2: Vocabulary (10 Marks - 5 Qs x 2)
  {
    id: 'HI-EX-06',
    section: 'vocab',
    sectionName: 'Vocabulary & Semantics (शब्दावली)',
    marks: 2,
    prompt: 'What is the synonym of ‘सूर्य’ (Sun)?',
    promptNative: '‘सूर्य’ का पर्यायवाची शब्द कौन-सा है?',
    options: ['शशि', 'दिनकर', 'वारिद', 'अनिल'],
    correctAnswer: 'दिनकर',
    explanation: 'सूर्य के पर्याय हैं: दिनकर, रवि, भानु, भास्कर।'
  },
  {
    id: 'HI-EX-07',
    section: 'vocab',
    sectionName: 'Vocabulary & Semantics (शब्दावली)',
    marks: 2,
    prompt: 'What is the antonym of ‘सत्य’ (Truth)?',
    promptNative: '‘सत्य’ का विलोम शब्द क्या है?',
    options: ['झूठ', 'असत्य', 'कपट', 'अधर्म'],
    correctAnswer: 'असत्य',
    explanation: 'तत्सम शब्द ‘सत्य’ का मानक विलोम ‘असत्य’ है।'
  },
  {
    id: 'HI-EX-08',
    section: 'vocab',
    sectionName: 'Vocabulary & Semantics (शब्दावली)',
    marks: 2,
    prompt: 'What does the idiom ‘आँखों का तारा’ mean?',
    promptNative: '‘आँखों का तारा’ मुहावरे का सही अर्थ क्या है?',
    options: ['आँख में दर्द होना', 'बहुत प्यारा होना', 'अंधा होना', 'तारा देखना'],
    correctAnswer: 'बहुत प्यारा होना',
    explanation: 'आँखों का तारा होना अर्थात् अत्यधिक प्रिय होना।'
  },
  {
    id: 'HI-EX-09',
    section: 'vocab',
    sectionName: 'Vocabulary & Semantics (शब्दावली)',
    marks: 2,
    prompt: 'What is the plural of ‘लड़का’?',
    promptNative: '‘लड़का’ का बहुवचन रूप क्या होगा?',
    options: ['लड़कों', 'लड़के', 'लड़कियाँ', 'लड़कान'],
    correctAnswer: 'लड़के',
    explanation: 'आकारान्त पुल्लिंग शब्द ‘लड़का’ का सामान्य बहुवचन ‘लड़के’ होता है।'
  },
  {
    id: 'HI-EX-10',
    section: 'vocab',
    sectionName: 'Vocabulary & Semantics (शब्दावली)',
    marks: 2,
    prompt: 'Identify the Tatsama (संस्कृत मूल) word:',
    promptNative: 'निम्नलिखित में से तत्सम शब्द कौन-सा है?',
    options: ['आग', 'अग्नि', 'सूरज', 'घर'],
    correctAnswer: 'अग्नि',
    explanation: '‘अग्नि’ तत्सम शब्द है, जबकि आग इसका तद्भव रूप है।'
  },

  // Section 3: Grammar (20 Marks - 10 Qs x 2)
  {
    id: 'HI-EX-11',
    section: 'grammar',
    sectionName: 'Grammar (व्याकरण)',
    marks: 2,
    prompt: 'Identify the gender of ‘नदी’ (River) in Hindi:',
    promptNative: 'हिन्दी में ‘नदी’ शब्द का लिंग क्या है?',
    options: ['पुल्लिंग', 'स्त्रीलिंग', 'नपुंसकलिंग', 'उभयलिंग'],
    correctAnswer: 'स्त्रीलिंग',
    explanation: 'हिन्दी में नदियों के नाम प्रायः स्त्रीलिंग होते हैं (गंगा, यमुना, नदी)।'
  },
  {
    id: 'HI-EX-12',
    section: 'grammar',
    sectionName: 'Grammar (व्याकरण)',
    marks: 2,
    prompt: 'Which case marker (कारक चिह्न) is used with the agent in past transitive tense?',
    promptNative: 'भूतकाल में सकर्मक क्रिया के कर्ता के साथ कौन-सी विभक्ति लगती है?',
    options: ['को', 'से', 'ने', 'में'],
    correctAnswer: 'ने',
    explanation: 'कर्ता कारक की विभक्ति ‘ने’ केवल भूतकाल की सकर्मक क्रिया के साथ लगती है (उदा. राम ने पत्र लिखा)।'
  },
  {
    id: 'HI-EX-13',
    section: 'grammar',
    sectionName: 'Grammar (व्याकरण)',
    marks: 2,
    prompt: 'Choose the correct form: "हम कल दिल्ली ___।"',
    promptNative: 'उचित क्रिया रूप चुनें: "हम कल दिल्ली ___।"',
    options: ['जाएगा', 'जाएंगे', 'जाती है', 'गया'],
    correctAnswer: 'जाएंगे',
    explanation: 'उत्तम पुरुष बहुवचन ‘हम’ के साथ भविष्यत् काल में ‘जाएंगे’ आएगा।'
  },
  {
    id: 'HI-EX-14',
    section: 'grammar',
    sectionName: 'Grammar (व्याकरण)',
    marks: 2,
    prompt: 'What type of Samas is ‘माता-पिता’?',
    promptNative: '‘माता-पिता’ में कौन-सा समास है?',
    options: ['तत्पुरुष', 'द्विगु', 'द्वंद्व', 'कर्मधारय'],
    correctAnswer: 'द्वंद्व',
    explanation: 'जिस समास के दोनों पद प्रधान हों और ‘और’ लुप्त हो, वह द्वंद्व समास होता है (माता और पिता)।'
  },
  {
    id: 'HI-EX-15',
    section: 'grammar',
    sectionName: 'Grammar (व्याकरण)',
    marks: 2,
    prompt: 'Divide the Sandhi: ‘सूर्योदय’ = ?',
    promptNative: '‘सूर्योदय’ का सही संधि-विच्छेद क्या है?',
    options: ['सूर्य + दय', 'सूर्य + उदय', 'सूर्या + उदय', 'सूर + उदय'],
    correctAnswer: 'सूर्य + उदय',
    explanation: 'अ + उ = ओ (गुण स्वर संधि: सूर्य + उदय = सूर्योदय)।'
  },

  // Section 4: Reading Comprehension (15 Marks)
  {
    id: 'HI-EX-16',
    section: 'reading',
    sectionName: 'Reading Comprehension (पठन बोध)',
    marks: 5,
    passage: 'समय संसार की सबसे अमूल्य वस्तु है। धन खोने पर पुनः कमाया जा सकता है, स्वास्थ्य बिगड़ने पर चिकित्सा द्वारा सुधारा जा सकता है, परंतु जो क्षण बीत गया वह कोटि यत्नों के बाद भी वापस नहीं लौटता। इतिहास गवाह है कि जिसने समय का सम्मान किया, सफलता ने उसके चरण चूमे।',
    prompt: 'According to the passage, why is time the most precious entity?',
    promptNative: 'गद्यांश के अनुसार समय सबसे अमूल्य क्यों है?',
    options: [
      'क्योंकि यह बहुत महँगा बिकता है।',
      'क्योंकि एक बार बीत जाने पर यह दोबारा वापस नहीं लौटता।',
      'क्योंकि इसे घड़ी में नापा जाता है।',
      'क्योंकि इसे धन से खरीदा जा सकता है।'
    ],
    correctAnswer: 'क्योंकि एक बार बीत जाने पर यह दोबारा वापस नहीं लौटता।',
    explanation: 'गद्यांश स्पष्ट करता है कि बीता हुआ समय किसी भी यत्न से वापस नहीं आता।'
  },
  {
    id: 'HI-EX-17',
    section: 'reading',
    sectionName: 'Reading Comprehension (पठन बोध)',
    marks: 5,
    passage: 'समय संसार की सबसे अमूल्य वस्तु है। धन खोने पर पुनः कमाया जा सकता है, स्वास्थ्य बिगड़ने पर चिकित्सा द्वारा सुधारा जा सकता है, परंतु जो क्षण बीत गया वह कोटि यत्नों के बाद भी वापस नहीं लौटता। इतिहास गवाह है कि जिसने समय का सम्मान किया, सफलता ने उसके चरण चूमे।',
    prompt: 'What is the suitable title for this passage?',
    promptNative: 'उपर्युक्त गद्यांश का सर्वाधिक उपयुक्त शीर्षक क्या होगा?',
    options: ['धन का महत्व', 'समय का सदुपयोग और मूल्य', 'स्वास्थ्य रक्षा', 'इतिहास की सीख'],
    correctAnswer: 'समय का सदुपयोग और मूल्य',
    explanation: 'गद्यांश का केंद्रीय भाव समय के मूल्य और सदुपयोग पर केंद्रित है।'
  },
  {
    id: 'HI-EX-18',
    section: 'reading',
    sectionName: 'Reading Comprehension (पठन बोध)',
    marks: 5,
    prompt: 'Who receives success according to the passage?',
    promptNative: 'सफलता किसके कदम चूमती है?',
    options: ['जो अधिक धन कमाता है', 'जो समय का सम्मान करता है', 'जो आराम करता है', 'जो भाग्य पर निर्भर रहता है'],
    correctAnswer: 'जो समय का सम्मान करता है',
    explanation: 'गद्यांश में लिखा है: "जिसने समय का सम्मान किया, सफलता ने उसके चरण चूमे।"'
  },

  // Section 5: Writing (15 Marks)
  {
    id: 'HI-EX-19',
    section: 'writing',
    sectionName: 'Writing & Syntax (लेखन व वाक्य रचना)',
    marks: 15,
    prompt: 'Reconstruct into standard SOV sentence order: "जाती है / विद्यालय / हर सुबह / रीता"',
    promptNative: 'पदों को शुद्ध पदक्रम (SOV) में व्यवस्थित करें: "जाती है / विद्यालय / हर सुबह / रीता"',
    options: [
      'रीता हर सुबह विद्यालय जाती है।',
      'विद्यालय जाती है रीता हर सुबह।',
      'हर सुबह जाती है विद्यालय रीता।',
      'रीता जाती है विद्यालय हर सुबह।'
    ],
    correctAnswer: 'रीता हर सुबह विद्यालय जाती है।',
    explanation: 'मानक हिन्दी वाक्य रचना: कर्ता (रीता) + काल विस्तारक (हर सुबह) + कर्म/स्थान (विद्यालय) + क्रिया (जाती है)।'
  },

  // Section 6: Translation (10 Marks)
  {
    id: 'HI-EX-20',
    section: 'translation',
    sectionName: 'Translation (अनुवाद)',
    marks: 10,
    prompt: 'Translate into Hindi: "Education empowers people to build a better future."',
    promptNative: 'अंग्रेज़ी वाक्य का सटीक हिन्दी अनुवाद चुनें: "Education empowers people to build a better future."',
    options: [
      'शिक्षा लोगों को एक बेहतर भविष्य निर्माण के लिए सशक्त बनाती है।',
      'पढ़ाई से लोग अच्छा भविष्य बना सकते हैं कभी-कभी।',
      'शिक्षा भविष्य है और लोग शक्तिशाली हैं।',
      'लोगों को भविष्य बनाने के लिए स्कूल जाना चाहिए।'
    ],
    correctAnswer: 'शिक्षा लोगों को एक बेहतर भविष्य निर्माण के लिए सशक्त बनाती है।',
    explanation: 'Empowers = सशक्त बनाती है; Better future = बेहतर भविष्य; Education = शिक्षा।'
  },

  // Section 7: Listening Comprehension (10 Marks)
  {
    id: 'HI-EX-21',
    section: 'listening',
    sectionName: 'Listening Comprehension (श्रवण बोध)',
    marks: 10,
    audioPrompt: 'भारत एक विशाल और विविधताओं से भरा देश है। यहाँ विभिन्न संस्कृतियाँ, भाषाएँ और त्योहार मिलकर एकता का संदेश देते हैं।',
    prompt: 'Listen to the audio sentence. What message do the various cultures and languages convey?',
    promptNative: 'ऑडियो सुनकर उत्तर दें: विभिन्न संस्कृतियाँ और भाषाएँ किसका संदेश देती हैं?',
    options: ['विभाजन का', 'एकता का', 'संघर्ष का', 'व्यापार का'],
    correctAnswer: 'एकता का',
    explanation: 'ऑडियो में स्पष्ट कहा गया है: "विभिन्न संस्कृतियाँ, भाषाएँ और त्योहार मिलकर एकता का संदेश देते हैं।"'
  },

  // Section 8: Speaking & Pronunciation (10 Marks)
  {
    id: 'HI-EX-22',
    section: 'speaking',
    sectionName: 'Speaking & Pronunciation (मौखिक व उच्चारण)',
    marks: 10,
    prompt: 'Which vowel sound is lengthened in the pronunciation of ‘आज़ादी’ (Freedom)?',
    promptNative: '‘आज़ादी’ शब्द में कौन-सा स्वर दीर्घ उच्चारित होता है?',
    options: ['केवल अ', 'आ और ई दोनों', 'केवल ज़', 'ह्रस्व इ'],
    correctAnswer: 'आ और ई दोनों',
    explanation: 'आज़ादी में ‘आ’ (दीर्घ आकारांत) तथा ‘दी’ (दीर्घ ईकारांत) दोनों दीर्घ स्वर हैं।'
  }
];

// =========================================================================
// 5. PRACTICE WORKSHEETS WITH DETAILED ANSWER KEYS
// =========================================================================

export const PRACTICE_WORKSHEETS: Worksheet[] = [
  {
    id: 'ws-hi-01',
    language: 'hi',
    code: 'WS-HI-01',
    title: 'वर्णमाला, मात्रा एवं संज्ञा अभ्यास पत्रिका',
    level: 'beginner',
    totalMarks: 25,
    timeMinutes: 30,
    instructions: 'सभी प्रश्नों के उत्तर अपनी अभ्यास पुस्तिका में लिखें। कार्य पूर्ण होने पर उत्तर कुंजी से मिलान करें।',
    exercises: [
      {
        sectionTitle: 'भाग क: स्वर व व्यंजन वर्गीकरण',
        marks: 5,
        question: 'नीचे दिए गए वर्णों में से स्वरों को छाँटकर अलग लिखें: [क, आ, म, ई, स, उ, त, ऋ, ल]',
        answerKey: 'स्वर: आ, ई, उ, ऋ',
        solutionNote: 'क, म, स, त, ल व्यंजन हैं; आ, ई, उ, ऋ स्वतंत्र स्वर ध्वनियाँ हैं।'
      },
      {
        sectionTitle: 'भाग ख: वचन परिवर्तन',
        marks: 5,
        question: 'निम्नलिखित शब्दों के बहुवचन रूप लिखें: १. लड़का  २. किताब  ३. नदी  ४. रात  ५. आँख',
        answerKey: '१. लड़के  २. किताबें  ३. नदियाँ  ४. रातें  ५. आँखें',
        solutionNote: 'आकारान्त पुल्लिंग में -े जुड़ता है; इकारान्त स्त्रीलिंग में -याँ जुड़कर ह्रस्व हो जाता है।'
      },
      {
        sectionTitle: 'भाग ग: संज्ञा पहचान',
        marks: 5,
        question: 'वाक्य में से संज्ञा शब्द छाँटें और उसका भेद लिखें: "हिमालय भारत का सबसे ऊँचा पर्वत है।"',
        answerKey: 'हिमालय (व्यक्तिवाचक), भारत (व्यक्तिवाचक), पर्वत (जातिवाचक)',
        solutionNote: 'हिमालय और भारत विशेष नाम हैं (व्यक्तिवाचक); पर्वत संपूर्ण वर्ग को दर्शाता है (जातिवाचक)।'
      },
      {
        sectionTitle: 'भाग घ: विपरीतार्थक शब्द',
        marks: 5,
        question: 'विलोम शब्द लिखें: १. दिन  २. सुख  ३. प्रकाश  ४. सत्य  ५. मित्र',
        answerKey: '१. रात  २. दुःख  ३. अंधकार  ४. असत्य  ५. शत्रु',
        solutionNote: 'सटीक मानक विलोम शब्दों का प्रयोग करें।'
      },
      {
        sectionTitle: 'भाग ङ: वाक्य निर्माण',
        marks: 5,
        question: 'दिए गए शब्दों से अर्थपूर्ण वाक्य बनाएँ: [विद्यालय, सुंदर, पढ़ना]',
        answerKey: 'उदा. "हमारा विद्यालय बहुत सुंदर है और हम वहाँ मन लगाकर पढ़ते हैं।"',
        solutionNote: 'वाक्य में व्याकरण सम्मत पदक्रम (SOV) होना आवश्यक है।'
      }
    ]
  },
  {
    id: 'ws-bn-01',
    language: 'bn',
    code: 'WS-BN-01',
    title: 'বাংলা বর্ণমালা, যুক্তবর্ণ ও শব্দভাণ্ডার অনুশীলন পত্র',
    level: 'beginner',
    totalMarks: 25,
    timeMinutes: 30,
    instructions: 'মনোযোগ সহকারে প্রতিটি প্রশ্নের উত্তর লিখুন। সমাপ্তির পর উত্তরপত্রের সাথে মিলিয়ে নিন।',
    exercises: [
      {
        sectionTitle: 'বিভাগ ক: স্বরবর্ণ ও ব্যঞ্জনবর্ণ',
        marks: 5,
        question: 'নিচের বর্ণগুলো থেকে স্বরবর্ণগুলো আলাদা করুন: [ক, অ, খ, ই, গ, উ, ঘ, এ]',
        answerKey: 'স্বরবর্ণ: অ, ই, উ, এ',
        solutionNote: 'ক, খ, গ, ঘ ব্যঞ্জনবর্ণ; অ, ই, উ, এ স্বরবর্ণ।'
      },
      {
        sectionTitle: 'বিভাগ খ: যুক্তবর্ণ বিশ্লেষণ',
        marks: 5,
        question: 'যুক্তবর্ণগুলো ভেঙে দেখান: ১. ক্ষ  ২. জ্ঞ  ৩. ঙ্গ  ৪. ক্ত  ৫. ষ্ণ',
        answerKey: '১. ক + ষ = ক্ষ  ২. জ + ঞ = জ্ঞ  ৩. ঙ + গ = ঙ্গ  ৪. ক + ত = ক্ত  ৫. ষ + ণ = ষ্ণ',
        solutionNote: 'বাংলা ব্যাকরণে যুক্তবর্ণের সঠিক উপাদান বর্ণ মনে রাখা আবশ্যক।'
      },
      {
        sectionTitle: 'বিভাগ গ: সমার্থক শব্দ',
        marks: 5,
        question: 'প্রতিটি শব্দের দুটি করে প্রতিশব্দ লিখুন: ১. জল  ২. আকাশ  ৩. সূর্য',
        answerKey: '১. জল = পানি, নীর  ২. আকাশ = গগন, অম্বর  ৩. সূর্য = রবি, ভানু',
        solutionNote: 'প্রচলিত প্রমিত বাংলা প্রতিশব্দ ব্যবহৃত হয়েছে।'
      },
      {
        sectionTitle: 'বিভাগ ঘ: বিপরীত শব্দ',
        marks: 5,
        question: 'বিপরীত শব্দ লিখুন: ১. ভালো  ২. দিন  ৩. ধনী  ৪. আলো  ৫. ছোট',
        answerKey: '১. খারাপ/মন্দ  ২. রাত  ৩. গরিব/দরিদ্র  ৪. অন্ধকার  ৫. বড়',
        solutionNote: 'প্রমিত বিপরীতার্থক রূপ।'
      },
      {
        sectionTitle: 'বিভাগ ঙ: বাক্য গঠন',
        marks: 5,
        question: '‘আমি’, ‘বই’ এবং ‘পড়া’ ব্যবহার করে একটি সঠিক বাক্য তৈরি করুন।',
        answerKey: 'আমি প্রতিদিন মনোযোগ দিয়ে বই পড়ি।',
        solutionNote: 'বাংলা বাক্যের স্বাভাবিক গঠন: কর্তা + কর্ম + ক্রিয়া।'
      }
    ]
  },
  {
    id: 'ws-mr-01',
    language: 'mr',
    code: 'WS-MR-01',
    title: 'मराठी मुळाक्षरे, लिंग व वचन सराव पत्रिका',
    level: 'beginner',
    totalMarks: 25,
    timeMinutes: 30,
    instructions: 'सर्व प्रश्न काळजीपूर्वक सोडवा आणि शेवटी दिलेल्या उत्तर तालिकेशी पडताळणी करा.',
    exercises: [
      {
        sectionTitle: 'भाग १: स्वर व व्यंजन वर्गीकरण',
        marks: 5,
        question: 'मराठीतील विशेष स्वर व व्यंजन ओळखा: [क, ॲ, ख, ळ, ग, ऑ]',
        answerKey: 'विशेष स्वर: ॲ, ऑ; विशेष व्यंजन: ळ',
        solutionNote: '‘ळ’ हे मराठीचे स्वतंत्र मूळ अक्षर आहे; ॲ आणि ऑ हे आधुनिक इंग्रजी ऋण स्वर आहेत.'
      },
      {
        sectionTitle: 'भाग २: तीन लिंगे ओळखा (तो, ती, ते)',
        marks: 5,
        question: 'खालील शब्दांचे लिंग ओळखा: १. फळा  २. वही  ३. पुस्तक  ४. शाळा  ५. घर',
        answerKey: '१. फळा (पुल्लिंग - तो)  २. वही (स्त्रीलिंग - ती)  ३. पुस्तक (नपुंसकलिंग - ते)  ४. शाळा (स्त्रीलिंग - ती)  ५. घर (नपुंसकलिंग - ते)',
        solutionNote: 'मराठीत तो = पुल्लिंग, ती = स्त्रीलिंग, ते = नपुंसकलिंग अशी सोपी खूण आहे.'
      },
      {
        sectionTitle: 'भाग ३: वचन बदला',
        marks: 5,
        question: 'अनेकवचन लिहा: १. मुलगा  २. पुस्तक  ३. नदी  ४. झाड  ५. वही',
        answerKey: '१. मुलगे/मुले  २. पुस्तके  ३. नद्या  ४. झाडे  ५. वह्या',
        solutionNote: 'नपुंसकलिंगी नामाचे अनेकवचन ‘-े’ होते (पुस्तक → पुस्तके, झाड → झाडे).'
      },
      {
        sectionTitle: 'भाग ४: विरुद्धार्थी शब्द',
        marks: 5,
        question: 'विरुद्धार्थी शब्द लिहा: १. मोठा  २. चांगला  ३. श्रीमंत  ४. शक्य  ५. ज्ञान',
        answerKey: '१. लहान  २. वाईट  ३. गरीब  ४. अशक्य  ५. अज्ञान',
        solutionNote: 'मराठी शुद्धलेखनानुसार अचूक जोड्या.'
      },
      {
        sectionTitle: 'भाग ५: वाक्यरचना',
        marks: 5,
        question: '‘शाळा’, ‘रोज’ आणि ‘जाणे’ यांवरून अर्थपूर्ण मराठी वाक्य तयार करा.',
        answerKey: 'मी रोज वेळेवर शाळेत जातो/जाते.',
        solutionNote: 'मराठी वाक्यरचना: कर्ता + कर्म + क्रियापद (SOV).'
      }
    ]
  }
];
