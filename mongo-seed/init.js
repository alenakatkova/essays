print(
  "Start #################################################################"
);

let ids = [];

for (let i = 0; i < 2; i++) {
  ids.push(ObjectId());
}

let langId = ObjectId();
let testId = ObjectId();
db.languages.insertMany([
  { _id: langId, code: "lang", tests: [testId] },
  { _id: ids[0], code: "lang1", tests: [testId] },
  { _id: ids[1], code: "lang2", tests: [testId] },
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
]);

db.tests.insertMany([
  { _id: testId, name: "test", url: "dd", languages: [langId] },
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
]);

print("END #################################################################");
