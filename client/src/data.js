//import React from "react";
//
// const [languages, setLanguages] = React.useState([
//   {
//     _id: "languagesIds.english",
//     i18n: "english",
//     code: "en",
//     tests: ["testsIds.ielts", "testsIds.telc"],
//   },
//   {
//     _id: "languagesIds.french",
//     i18n: "french",
//     code: "fr",
//     tests: ["testsIds.delf", "testsIds.dalf"],
//   },
// ]);
// const [tests, setTests] = React.useState([
//   {
//     _id: "testsIds.ielts",
//     abbreviation: "IELTS",
//     name: "International English Language Testing System",
//     languages: ["languagesIds.english"],
//     url: "https://www.ielts.org/",
//   },
//   {
//     _id: "testsIds.toefl",
//     abbreviation: "TOEFL",
//     name: "Test of English as a Foreign Language",
//     languages: ["languagesIds.english"],
//     url: "https://www.ets.org/toefl/",
//   },
//   {
//     _id: "testsIds.delf",
//     abbreviation: "DELF",
//     name: "Diplôme d'études en langue française",
//     languages: ["languagesIds.french"],
//     url: "http://www.delfdalf.fr/index-en.html",
//   },
//   {
//     _id: "testsIds.dalf",
//     abbreviation: "DALF",
//     name: "Diplôme approfondi de langue française",
//     languages: ["languagesIds.french"],
//     url: "http://www.delfdalf.fr/index-en.html",
//   },
// ]);
// const [levels, setLevels] = React.useState([
//   { _id: levelsIds.a1, name: "A1" },
//   { _id: "levelsIds.a2", name: "A2" },
//   { _id: "levelsIds.b1", name: "B1" },
//   { _id: "levelsIds.b2", name: "B2" },
//   { _id: "levelsIds.c1", name: "C1" },
//   { _id: "levelsIds.c2", name: "C2" },
// ]);

export const languages = [
  { _id: "arabic", code: "ar", tests: ["alpt", "telc"] },
  { _id: "chinese", code: "zh", tests: ["hsk", "tocfl", "ilce"] },
  { _id: "czech", code: "cs", tests: ["ecl", "cce"] },
  { _id: "dutch", code: "nl", tests: ["staatsexamen_nt2", "cnavt"] },
  {
    _id: "english",
    code: "en",
    tests: ["ecl", "ilce", "cal", "ielts", "telc"],
  },
  {
    _id: "french",
    code: "fr",
    tests: ["ecl", "ilce", "delf", "dalf", "telc"],
  },
  { _id: "german", code: "de", tests: ["ecl", "ilce", "telc", "testdaf"] },
  { _id: "hebrew", code: "he", tests: ["ecl", "yael"] },
  {
    _id: "italian",
    code: "it",
    tests: ["ecl", "ilce", "telc", "cils", "celi"],
  },
  { _id: "japanese", code: "ja", tests: ["ilce", "jlpt"] },
  { _id: "korean", code: "ko", tests: ["ilce", "topik", "klat"] },
  {
    _id: "polish",
    code: "pl",
    tests: [
      "ecl",
      "telc",
      "egzaminy_certyfikatowe_z_języka_polskiego_jako_obcego",
    ],
  },
  { _id: "portuguese", code: "pt", tests: ["telc", "caple"] },
  { _id: "russian", code: "ru", tests: ["ecl", "ilce", "telc", "torfl"] },
  { _id: "spanish", code: "es", tests: ["ecl", "ilce", "telc", "dele"] },
  { _id: "swedish", code: "sv", tests: ["swedex", "tisus"] },
];

export const tests = [
  {
    _id: "alpt",
    name: "ALPT (Arabic Language Proficiency Test)",
    languages: ["arabic"],
    url: "https://www.arabacademy.com/alpt",
  },
  {
    _id: "hsk",
    name: "HSK (Hanyu Shuiping Kaoshi)",
    languages: ["chinese"],
    url: "http://www.chinesetest.cn/index.do",
  },
  {
    _id: "tocfl",
    name: "TOCFL (Test of Chinese as a Foreign Language)",
    languages: ["chinese"],
    url: "https://tocfl.edu.tw/",
  },
  {
    _id: "ilce",
    name: "ILCE (International Language Certifications Exams)",
    languages: [
      "chinese",
      "english",
      "italian",
      "japanese",
      "german",
      "russian",
      "spanish",
      "french",
      "korean",
    ],
    url: "http://ilcecefrlanguageexams.com/",
  },
  {
    _id: "ecl",
    name: "ECL (European Consortium for the Certificate of Attainment in Modern Languages)",
    languages: [
      "czech",
      "english",
      "french",
      "german",
      "hebrew",
      "italian",
      "russian",
      "spanish",
    ],
    url: "https://eclexam.eu/languages/",
  },
  {
    _id: "cce",
    name: "CCE (Czech Language Certificate Exam)",
    languages: ["czech"],
    url: "https://ujop.cuni.cz/zkouska/certifikovana-zkouska-z-cestiny-pro-cizince-cce",
  },
  {
    _id: "staatsexamen_nt2",
    name: "Staatsexamen NT2 (Staatsexamen Nederlands als tweede taal)",
    languages: ["dutch"],
    url: "https://www.staatsexamensnt2.nl/",
  },
  {
    _id: "cnavt",
    name: "CNaVT (Certificaat Nederlands als Vreemde Taal)",
    languages: ["dutch"],
    url: "https://cnavt.org/",
  },
  {
    _id: "cal",
    name: "CAL English Proficiency Tests",
    languages: ["english"],
    url: "https://www.cal.org/resource-center/publications-products/cal-ept",
  },
  {
    _id: "ielts",
    name: "IELTS (International English Language Testing System)",
    languages: ["english"],
    url: "https://www.ielts.org/",
  },
  {
    _id: "toefl",
    name: "TOEFL (Test of English as a Foreign Language)",
    languages: ["english"],
    url: "https://www.ets.org/toefl/",
  },
  {
    _id: "delf",
    name: "DELF (Diplôme d'études en langue française)",
    languages: ["french"],
    url: "http://www.delfdalf.fr/index-en.html",
  },
  {
    _id: "dalf",
    name: "DALF (Diplôme approfondi de langue française)",
    languages: ["french"],
    url: "http://www.delfdalf.fr/index-en.html",
  },
  {
    _id: "goethe",
    name: "Goethe Zertifikat Deutsch",
    languages: ["german"],
    url: "https://www.goethe.de/de/spr/kup/prf/prf.html",
  },
  {
    _id: "testdaf",
    name: "TestDaF (Test Deutsch als Fremdsprache)",
    languages: ["german"],
    url: "https://www.goethe.de/de/spr/kup/prf/prf/testdaf.html",
  },
  {
    _id: "telc",
    name: "TELC (The European Language Certificates)",
    languages: [
      "german",
      "italian",
      "english",
      "spanish",
      "turkish",
      "french",
      "portuguese",
      "russian",
      "arabic",
      "polish",
    ],
    url: "https://www.telc.net/",
  },
  {
    _id: "yael",
    name: "YAEL",
    languages: ["hebrew"],
    url: "https://nite.org.il/other-tests/yael/?lang=en",
  },
  {
    _id: "cils",
    name: "CILS (Certificazione di Italiano come Lingua Straniera)",
    languages: ["italian"],
    url: "https://cils.unistrasi.it/home.asp",
  },
  {
    _id: "celi",
    name: " CELI (Certificato di Conoscenza della Lingua Italiana)",
    languages: ["italian"],
    url: "http://www.cvcl.it/categorie/categoria-14",
  },
  {
    _id: "JLPT",
    name: "JLPT (Japanese-Language Proficiency Test)",
    languages: ["japanese"],
    url: "http://www.jlpt.jp/e/about/purpose.html",
  },
  {
    _id: "topik",
    name: "TOPIK (Test of Proficiency in Korean)",
    languages: ["korean"],
    url: "https://www.topik.go.kr/intro_index2.html",
  },
  {
    _id: "klat",
    name: "KLAT (Korean Language Ability Test)",
    languages: ["korean"],
    url: "http://www.kets.or.kr/",
  },
  {
    _id: "egzaminy_certyfikatowe_z_języka_polskiego_jako_obcego",
    name: "Egzaminy Certyfikatowe z Języka Polskiego jako Obcego",
    languages: ["polish"],
    url: "https://certyfikatpolski.pl/",
  },
  {
    _id: "caple",
    name: "CAPLE (Centro de Avaliação de Português Língua Estrangeira)",
    languages: ["portuguese"],
    url: "https://caple.letras.ulisboa.pt/",
  },
  {
    _id: "dele",
    name: "DELE (Diplomas de Español como Lengua Extranjera)",
    languages: ["spanish"],
    url: "https://examenes.cervantes.es/es/dele/calificaciones",
  },
  {
    _id: "tisus",
    name: "TISUS (Test i svenska för universitets- och högskolestudier)",
    languages: ["swedish"],
    url: "https://www.su.se/svefler/tisus",
  },
  {
    _id: "swedex",
    name: "Swedex (Swedish Examination)",
    languages: ["swedish"],
    url: "https://www.folkuniversitetet.se/in-english/swedex-swedish-examinations/",
  },
  {
    _id: "torfl",
    name: "TORFL (Test of Russian as a Foreign Language)",
    languages: ["russian"],
    url: "https://english.spbu.ru/torfl",
  },
];

export const randomUser = {
  id: "user1",
  username: "olegstarostin",
  password: "dgsergjklsngkl",
  writingSettings: {
    language_id: "french",
    wordsCount: 190,
    timingInMinutes: 25,
    test_id: "delf",
  },
};

export const allLanguages = [
  {
    _id: "abkhazian",
    code: "ab",
  },
  {
    _id: "afar",
    code: "aa",
  },
  {
    _id: "afrikaans",
    code: "af",
  },
  {
    _id: "akan",
    code: "ak",
  },
  {
    _id: "albanian",
    code: "sq",
  },
  {
    _id: "amharic",
    code: "am",
  },
  {
    _id: "arabic",
    code: "ar",
  },
  {
    _id: "aragonese",
    code: "an",
  },
  {
    _id: "armenian",
    code: "hy",
  },
  {
    _id: "assamese",
    code: "as",
  },
  {
    _id: "avaric",
    code: "av",
  },
  {
    _id: "avestan",
    code: "ae",
  },
  {
    _id: "aymara",
    code: "ay",
  },
  {
    _id: "azerbaijani",
    code: "az",
  },
  {
    _id: "bambara",
    code: "bm",
  },
  {
    _id: "bashkir",
    code: "ba",
  },
  {
    _id: "basque",
    code: "eu",
  },
  {
    _id: "belarusian",
    code: "be",
  },
  {
    _id: "bengali",
    code: "bn",
  },
  {
    _id: "bislama",
    code: "bi",
  },
  {
    _id: "bosnian",
    code: "bs",
  },
  {
    _id: "breton",
    code: "br",
  },
  {
    _id: "bulgarian",
    code: "bg",
  },
  {
    _id: "burmese",
    code: "my",
  },
  {
    _id: "catalan, valencian",
    code: "ca",
  },
  {
    _id: "chamorro",
    code: "ch",
  },
  {
    _id: "chechen",
    code: "ce",
  },
  {
    _id: "chichewa, chewa, nyanja",
    code: "ny",
  },
  {
    _id: "chinese",
    code: "zh",
  },
  {
    _id: "chuvash",
    code: "cv",
  },
  {
    _id: "cornish",
    code: "kw",
  },
  {
    _id: "corsican",
    code: "co",
  },
  {
    _id: "cree",
    code: "cr",
  },
  {
    _id: "croatian",
    code: "hr",
  },
  {
    _id: "czech",
    code: "cs",
  },
  {
    _id: "danish",
    code: "da",
  },
  {
    _id: "divehi, dhivehi, maldivian",
    code: "dv",
  },
  {
    _id: "dutch, flemish",
    code: "nl",
  },
  {
    _id: "dzongkha",
    code: "dz",
  },
  {
    _id: "english",
    code: "en",
  },
  {
    _id: "esperanto",
    code: "eo",
  },
  {
    _id: "estonian",
    code: "et",
  },
  {
    _id: "ewe",
    code: "ee",
  },
  {
    _id: "faroese",
    code: "fo",
  },
  {
    _id: "fijian",
    code: "fj",
  },
  {
    _id: "finnish",
    code: "fi",
  },
  {
    _id: "french",
    code: "fr",
  },
  {
    _id: "fulah",
    code: "ff",
  },
  {
    _id: "galician",
    code: "gl",
  },
  {
    _id: "georgian",
    code: "ka",
  },
  {
    _id: "german",
    code: "de",
  },
  {
    _id: "greek, modern (1453–)",
    code: "el",
  },
  {
    _id: "guarani",
    code: "gn",
  },
  {
    _id: "gujarati",
    code: "gu",
  },
  {
    _id: "haitian, haitian creole",
    code: "ht",
  },
  {
    _id: "hausa",
    code: "ha",
  },
  {
    _id: "hebrew",
    code: "he",
  },
  {
    _id: "herero",
    code: "hz",
  },
  {
    _id: "hindi",
    code: "hi",
  },
  {
    _id: "hiri motu",
    code: "ho",
  },
  {
    _id: "hungarian",
    code: "hu",
  },
  {
    _id: "interlingua (international auxiliary language association)",
    code: "ia",
  },
  {
    _id: "indonesian",
    code: "id",
  },
  {
    _id: "interlingue, occidental",
    code: "ie",
  },
  {
    _id: "irish",
    code: "ga",
  },
  {
    _id: "igbo",
    code: "ig",
  },
  {
    _id: "inupiaq",
    code: "ik",
  },
  {
    _id: "ido",
    code: "io",
  },
  {
    _id: "icelandic",
    code: "is",
  },
  {
    _id: "italian",
    code: "it",
  },
  {
    _id: "inuktitut",
    code: "iu",
  },
  {
    _id: "japanese",
    code: "ja",
  },
  {
    _id: "javanese",
    code: "jv",
  },
  {
    _id: "kalaallisut, greenlandic",
    code: "kl",
  },
  {
    _id: "kannada",
    code: "kn",
  },
  {
    _id: "kanuri",
    code: "kr",
  },
  {
    _id: "kashmiri",
    code: "ks",
  },
  {
    _id: "kazakh",
    code: "kk",
  },
  {
    _id: "central khmer",
    code: "km",
  },
  {
    _id: "kikuyu, gikuyu",
    code: "ki",
  },
  {
    _id: "kinyarwanda",
    code: "rw",
  },
  {
    _id: "kirghiz, kyrgyz",
    code: "ky",
  },
  {
    _id: "komi",
    code: "kv",
  },
  {
    _id: "kongo",
    code: "kg",
  },
  {
    _id: "korean",
    code: "ko",
  },
  {
    _id: "kurdish",
    code: "ku",
  },
  {
    _id: "kuanyama, kwanyama",
    code: "kj",
  },
  {
    _id: "latin",
    code: "la",
  },
  {
    _id: "luxembourgish, letzeburgesch",
    code: "lb",
  },
  {
    _id: "ganda",
    code: "lg",
  },
  {
    _id: "limburgan, limburger, limburgish",
    code: "li",
  },
  {
    _id: "lingala",
    code: "ln",
  },
  {
    _id: "lao",
    code: "lo",
  },
  {
    _id: "lithuanian",
    code: "lt",
  },
  {
    _id: "luba-katanga",
    code: "lu",
  },
  {
    _id: "latvian",
    code: "lv",
  },
  {
    _id: "manx",
    code: "gv",
  },
  {
    _id: "macedonian",
    code: "mk",
  },
  {
    _id: "malagasy",
    code: "mg",
  },
  {
    _id: "malay",
    code: "ms",
  },
  {
    _id: "malayalam",
    code: "ml",
  },
  {
    _id: "maltese",
    code: "mt",
  },
  {
    _id: "maori",
    code: "mi",
  },
  {
    _id: "marathi",
    code: "mr",
  },
  {
    _id: "marshallese",
    code: "mh",
  },
  {
    _id: "mongolian",
    code: "mn",
  },
  {
    _id: "nauru",
    code: "na",
  },
  {
    _id: "navajo, navaho",
    code: "nv",
  },
  {
    _id: "north ndebele",
    code: "nd",
  },
  {
    _id: "nepali",
    code: "ne",
  },
  {
    _id: "ndonga",
    code: "ng",
  },
  {
    _id: "norwegian bokmål",
    code: "nb",
  },
  {
    _id: "norwegian nynorsk",
    code: "nn",
  },
  {
    _id: "norwegian",
    code: "no",
  },
  {
    _id: "sichuan yi, nuosu",
    code: "ii",
  },
  {
    _id: "south ndebele",
    code: "nr",
  },
  {
    _id: "occitan",
    code: "oc",
  },
  {
    _id: "ojibwa",
    code: "oj",
  },
  {
    _id: "church slavic, old slavonic, church slavonic, old bulgarian, old church slavonic",
    code: "cu",
  },
  {
    _id: "oromo",
    code: "om",
  },
  {
    _id: "oriya",
    code: "or",
  },
  {
    _id: "ossetian, ossetic",
    code: "os",
  },
  {
    _id: "punjabi, panjabi",
    code: "pa",
  },
  {
    _id: "pali",
    code: "pi",
  },
  {
    _id: "persian",
    code: "fa",
  },
  {
    _id: "polish",
    code: "pl",
  },
  {
    _id: "pashto, pushto",
    code: "ps",
  },
  {
    _id: "portuguese",
    code: "pt",
  },
  {
    _id: "quechua",
    code: "qu",
  },
  {
    _id: "romansh",
    code: "rm",
  },
  {
    _id: "rundi",
    code: "rn",
  },
  {
    _id: "romanian, moldavian, moldovan",
    code: "ro",
  },
  {
    _id: "russian",
    code: "ru",
  },
  {
    _id: "sanskrit",
    code: "sa",
  },
  {
    _id: "sardinian",
    code: "sc",
  },
  {
    _id: "sindhi",
    code: "sd",
  },
  {
    _id: "northern sami",
    code: "se",
  },
  {
    _id: "samoan",
    code: "sm",
  },
  {
    _id: "sango",
    code: "sg",
  },
  {
    _id: "serbian",
    code: "sr",
  },
  {
    _id: "gaelic, scottish gaelic",
    code: "gd",
  },
  {
    _id: "shona",
    code: "sn",
  },
  {
    _id: "sinhala, sinhalese",
    code: "si",
  },
  {
    _id: "slovak",
    code: "sk",
  },
  {
    _id: "slovenian",
    code: "sl",
  },
  {
    _id: "somali",
    code: "so",
  },
  {
    _id: "southern sotho",
    code: "st",
  },
  {
    _id: "spanish, castilian",
    code: "es",
  },
  {
    _id: "sundanese",
    code: "su",
  },
  {
    _id: "swahili",
    code: "sw",
  },
  {
    _id: "swati",
    code: "ss",
  },
  {
    _id: "swedish",
    code: "sv",
  },
  {
    _id: "tamil",
    code: "ta",
  },
  {
    _id: "telugu",
    code: "te",
  },
  {
    _id: "tajik",
    code: "tg",
  },
  {
    _id: "thai",
    code: "th",
  },
  {
    _id: "tigrinya",
    code: "ti",
  },
  {
    _id: "tibetan",
    code: "bo",
  },
  {
    _id: "turkmen",
    code: "tk",
  },
  {
    _id: "tagalog",
    code: "tl",
  },
  {
    _id: "tswana",
    code: "tn",
  },
  {
    _id: "tonga (tonga islands)",
    code: "to",
  },
  {
    _id: "turkish",
    code: "tr",
  },
  {
    _id: "tsonga",
    code: "ts",
  },
  {
    _id: "tatar",
    code: "tt",
  },
  {
    _id: "twi",
    code: "tw",
  },
  {
    _id: "tahitian",
    code: "ty",
  },
  {
    _id: "uighur, uyghur",
    code: "ug",
  },
  {
    _id: "ukrainian",
    code: "uk",
  },
  {
    _id: "urdu",
    code: "ur",
  },
  {
    _id: "uzbek",
    code: "uz",
  },
  {
    _id: "venda",
    code: "ve",
  },
  {
    _id: "vietnamese",
    code: "vi",
  },
  {
    _id: "volapük",
    code: "vo",
  },
  {
    _id: "walloon",
    code: "wa",
  },
  {
    _id: "welsh",
    code: "cy",
  },
  {
    _id: "wolof",
    code: "wo",
  },
  {
    _id: "western frisian",
    code: "fy",
  },
  {
    _id: "xhosa",
    code: "xh",
  },
  {
    _id: "yiddish",
    code: "yi",
  },
  {
    _id: "yoruba",
    code: "yo",
  },
  {
    _id: "zhuang, chuang",
    code: "za",
  },
  {
    _id: "zulu",
    code: "zu",
  },
];
