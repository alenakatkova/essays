const languagesIds = {
  arabic: ObjectId(),
  chinese: ObjectId(),
  czech: ObjectId(),
  dutch: ObjectId(),
  english: ObjectId(),
  french: ObjectId(),
  german: ObjectId(),
  hebrew: ObjectId(),
  italian: ObjectId(),
  japanese: ObjectId(),
  korean: ObjectId(),
  polish: ObjectId(),
  portuguese: ObjectId(),
  russian: ObjectId(),
  spanish: ObjectId(),
  swedish: ObjectId(),
};

const testsIds = {
  alpt: ObjectId(),
  hsk: ObjectId(),
  tocfl: ObjectId(),
  ilce: ObjectId(),
  ecl: ObjectId(),
  cce: ObjectId(),
  staatsexamen_nt2: ObjectId(),
  cnavt: ObjectId(),
  cal: ObjectId(),
  ielts: ObjectId(),
  toefl: ObjectId(),
  delf: ObjectId(),
  dalf: ObjectId(),
  goethe: ObjectId(),
  testdaf: ObjectId(),
  telc: ObjectId(),
  yael: ObjectId(),
  cils: ObjectId(),
  celi: ObjectId(),
  jlpt: ObjectId(),
  topik: ObjectId(),
  klat: ObjectId(),
  caple: ObjectId(),
  dele: ObjectId(),
  tisus: ObjectId(),
  swedex: ObjectId(),
  torfl: ObjectId(),
};

const levelsIds = {
  a1: ObjectId(),
  a2: ObjectId(),
  b1: ObjectId(),
  b2: ObjectId(),
  c1: ObjectId(),
  c2: ObjectId(),
};

db.tests.insertMany([
  {
    _id: testsIds.alpt,
    abbreviation: "ALPT",
    name: "Arabic Language Proficiency Test",
    languages: [languagesIds.arabic],
    url: "https://www.arabacademy.com/alpt",
  },
  {
    _id: testsIds.hsk,
    abbreviation: "HSK",
    name: "Hanyu Shuiping Kaoshi",
    languages: [languagesIds.chinese],
    url: "http://www.chinesetest.cn/index.do",
  },
  {
    _id: testsIds.tocfl,
    abbreviation: "TOCFL",
    name: "Test of Chinese as a Foreign Language",
    languages: [languagesIds.chinese],
    url: "https://tocfl.edu.tw/",
  },
  {
    _id: testsIds.ilce,
    abbreviation: "ILCE",
    name: "International Language Certifications Exams",
    languages: [
      languagesIds.chinese,
      languagesIds.english,
      languagesIds.italian,
      languagesIds.japanese,
      languagesIds.german,
      languagesIds.russian,
      languagesIds.spanish,
      languagesIds.french,
      languagesIds.korean,
    ],
    url: "http://ilcecefrlanguageexams.com/",
  },
  {
    _id: testsIds.ecl,
    abbreviation: "ECL",
    name: "European Consortium for the Certificate of Attainment in Modern Languages",
    languages: [
      languagesIds.czech,
      languagesIds.english,
      languagesIds.french,
      languagesIds.german,
      languagesIds.hebrew,
      languagesIds.italian,
      languagesIds.russian,
      languagesIds.spanish,
    ],
    url: "https://eclexam.eu/languages/",
  },
  {
    _id: testsIds.cce,
    abbreviation: "CCE",
    name: "Czech Language Certificate Exam",
    languages: [languagesIds.czech],
    url: "https://ujop.cuni.cz/zkouska/certifikovana-zkouska-z-cestiny-pro-cizince-cce",
  },
  {
    _id: testsIds.staatsexamen_nt2,
    abbreviation: "Staatsexamen NT2",
    name: "Staatsexamen Nederlands als tweede taal",
    languages: [languagesIds.dutch],
    url: "https://www.staatsexamensnt2.nl/",
  },
  {
    _id: testsIds.cnavt,
    abbreviation: "CNaVT",
    name: "Certificaat Nederlands als Vreemde Taal",
    languages: [languagesIds.dutch],
    url: "https://cnavt.org/",
  },
  {
    _id: testsIds.cal,
    abbreviation: "CAL",
    name: "English Proficiency Tests",
    languages: [languagesIds.english],
    url: "https://www.cal.org/resource-center/publications-products/cal-ept",
  },
  {
    _id: testsIds.ielts,
    abbreviation: "IELTS",
    name: "International English Language Testing System",
    languages: [languagesIds.english],
    url: "https://www.ielts.org/",
  },
  {
    _id: testsIds.toefl,
    abbreviation: "TOEFL",
    name: "Test of English as a Foreign Language",
    languages: [languagesIds.english],
    url: "https://www.ets.org/toefl/",
  },
  {
    _id: testsIds.delf,
    abbreviation: "DELF",
    name: "Diplôme d'études en langue française",
    languages: [languagesIds.french],
    url: "http://www.delfdalf.fr/index-en.html",
  },
  {
    _id: testsIds.dalf,
    abbreviation: "DALF",
    name: "Diplôme approfondi de langue française",
    languages: [languagesIds.french],
    url: "http://www.delfdalf.fr/index-en.html",
  },
  {
    _id: testsIds.goethe,
    abbreviation: "",
    name: "Goethe Zertifikat Deutsch",
    languages: [languagesIds.german],
    url: "https://www.goethe.de/de/spr/kup/prf/prf.html",
  },
  {
    _id: testsIds.testdaf,
    abbreviation: "TestDaF",
    name: "Test Deutsch als Fremdsprache",
    languages: [languagesIds.german],
    url: "https://www.goethe.de/de/spr/kup/prf/prf/testdaf.html",
  },
  {
    _id: testsIds.telc,
    abbreviation: "TELC",
    name: "The European Language Certificates",
    languages: [
      languagesIds.german,
      languagesIds.italian,
      languagesIds.english,
      languagesIds.spanish,
      languagesIds.french,
      languagesIds.portuguese,
      languagesIds.russian,
      languagesIds.arabic,
      languagesIds.polish,
    ],
    url: "https://www.telc.net/",
  },
  {
    _id: testsIds.yael,
    abbreviation: "YAEL",
    name: "Hebrew Proficiency Test",
    languages: [languagesIds.hebrew],
    url: "https://nite.org.il/other-tests/yael/?lang=en",
  },
  {
    _id: testsIds.cils,
    abbreviation: "CILS",
    name: "Certificazione di Italiano come Lingua Straniera",
    languages: [languagesIds.italian],
    url: "https://cils.unistrasi.it/home.asp",
  },
  {
    _id: testsIds.celi,
    abbreviation: "CELI",
    name: "Certificato di Conoscenza della Lingua Italiana",
    languages: [languagesIds.italian],
    url: "http://www.cvcl.it/categorie/categoria-14",
  },
  {
    _id: testsIds.jlpt,
    abbreviation: "JLPT",
    name: "Japanese-Language Proficiency Test",
    languages: [languagesIds.japanese],
    url: "http://www.jlpt.jp/e/about/purpose.html",
  },
  {
    _id: testsIds.topik,
    abbreviation: "TOPIK",
    name: "Test of Proficiency in Korean",
    languages: [languagesIds.korean],
    url: "https://www.topik.go.kr/intro_index2.html",
  },
  {
    _id: testsIds.klat,
    abbreviation: "KLAT",
    name: "Korean Language Ability Test",
    languages: [languagesIds.korean],
    url: "http://www.kets.or.kr/",
  },
  {
    _id: testsIds.caple,
    abbreviation: "CAPLE",
    name: "Centro de Avaliação de Português Língua Estrangeira",
    languages: [languagesIds.portuguese],
    url: "https://caple.letras.ulisboa.pt/",
  },
  {
    _id: testsIds.dele,
    abbreviation: "DELE",
    name: "Diplomas de Español como Lengua Extranjera",
    languages: [languagesIds.spanish],
    url: "https://examenes.cervantes.es/es/dele/calificaciones",
  },
  {
    _id: testsIds.tisus,
    abbreviation: "TISUS",
    name: "Test i svenska för universitets- och högskolestudier",
    languages: [languagesIds.swedish],
    url: "https://www.su.se/svefler/tisus",
  },
  {
    _id: testsIds.swedex,
    abbreviation: "Swedex",
    name: "Swedish Examination",
    languages: [languagesIds.swedish],
    url: "https://www.folkuniversitetet.se/in-english/swedex-swedish-examinations/",
  },
  {
    _id: testsIds.torfl,
    abbreviation: "TORFL",
    name: "Test of Russian as a Foreign Language",
    languages: [languagesIds.russian],
    url: "https://english.spbu.ru/torfl",
  },
]);

db.languages.insertMany([
  {
    _id: languagesIds.arabic,
    i18n: "arabic",
    code: "ar",
    tests: [testsIds.alpt, testsIds.telc],
  },
  {
    _id: languagesIds.chinese,
    i18n: "chinese",
    code: "zh",
    tests: [testsIds.hsk, testsIds.tocfl, testsIds.ilce],
  },
  {
    _id: languagesIds.czech,
    i18n: "czech",
    code: "cs",
    tests: [testsIds.ecl, testsIds.cce],
  },
  {
    _id: languagesIds.dutch,
    i18n: "dutch",
    code: "nl",
    tests: [testsIds.staatsexamen_nt2, testsIds.cnavt],
  },
  {
    _id: languagesIds.english,
    i18n: "english",
    code: "en",
    tests: [
      testsIds.ecl,
      testsIds.ilce,
      testsIds.cal,
      testsIds.ielts,
      testsIds.telc,
    ],
  },
  {
    _id: languagesIds.french,
    i18n: "french",
    code: "fr",
    tests: [
      testsIds.ecl,
      testsIds.ilce,
      testsIds.delf,
      testsIds.dalf,
      testsIds.telc,
    ],
  },
  {
    _id: languagesIds.german,
    i18n: "german",
    code: "de",
    tests: [testsIds.ecl, testsIds.ilce, testsIds.telc, testsIds.testdaf],
  },
  {
    _id: languagesIds.hebrew,
    i18n: "hebrew",
    code: "he",
    tests: [testsIds.ecl, testsIds.yael],
  },
  {
    _id: languagesIds.italian,
    i18n: "italian",
    code: "it",
    tests: [
      testsIds.ecl,
      testsIds.ilce,
      testsIds.telc,
      testsIds.cils,
      testsIds.celi,
    ],
  },
  {
    _id: languagesIds.japanese,
    i18n: "japanese",
    code: "ja",
    tests: [testsIds.ilce, testsIds.jlpt],
  },
  {
    _id: languagesIds.korean,
    i18n: "korean",
    code: "ko",
    tests: [testsIds.ilce, testsIds.topik, testsIds.klat],
  },
  {
    _id: languagesIds.polish,
    i18n: "polish",
    code: "pl",
    tests: [testsIds.ecl, testsIds.telc],
  },
  {
    _id: languagesIds.portuguese,
    i18n: "portuguese",
    code: "pt",
    tests: [testsIds.telc, testsIds.caple],
  },
  {
    _id: languagesIds.russian,
    i18n: "russian",
    code: "ru",
    tests: [testsIds.ecl, testsIds.ilce, testsIds.telc, testsIds.torfl],
  },
  {
    _id: languagesIds.spanish,
    i18n: "spanish",
    code: "es",
    tests: [testsIds.ecl, testsIds.ilce, testsIds.telc, testsIds.dele],
  },
  {
    _id: languagesIds.swedish,
    i18n: "swedish",
    code: "sv",
    tests: [testsIds.swedex, testsIds.tisus],
  },
]);

db.levels.insertMany([
  { _id: levelsIds.a1, name: "A1" },
  { _id: levelsIds.a2, name: "A2" },
  { _id: levelsIds.b1, name: "B1" },
  { _id: levelsIds.b2, name: "B2" },
  { _id: levelsIds.c1, name: "C1" },
  { _id: levelsIds.c2, name: "C2" },
]);

//
const usersIds = {
  user01: ObjectId(),
  user02: ObjectId(),
  user03: ObjectId(),
  user04: ObjectId(),
  user05: ObjectId(),
};

const essaysIds = {
  essay01: ObjectId(),
  essay02: ObjectId(),
  essay03: ObjectId(),
  essay04: ObjectId(),
  essay05: ObjectId(),
  essay06: ObjectId(),
  essay07: ObjectId(),
  essay08: ObjectId(),
  essay09: ObjectId(),
  essay10: ObjectId(),
};

const writingSettings = {
  settings01: {
    _id: ObjectId(),
    minAmountOfWords: 200,
    timingInMinutes: 20,
    level_id: levelsIds.c1,
    language_id: languagesIds.english,
    test_id: testsIds.toefl,
  },
  settings02: {
    _id: ObjectId(),
    minAmountOfWords: 150,
    timingInMinutes: 15,
    level_id: levelsIds.b2,
    language_id: languagesIds.french,
    test_id: testsIds.dalf,
  },
};

db.users.insertMany([
  {
    _id: usersIds.user01,
    username: "alenakatkova",
    password: "$2a$12$JhR7jB5fbEaxPry1PkBeneTUmizl4CLZ5mMEkYLUayfHtv/lf8qeO",
    writingSettings: writingSettings.settings01,
    comments: [],
    editSuggestionsComments: [],
    drafts: [
      {
        topic: "Target audience",
        title: "Strategies for reaching target audiences",
        body: "The effectiveness of a target audience campaign is dependent on how well the company knows their market; this can include details such as behaviours, incentives, cultural differences and societal expectations.[11] Failure to identify these trends can lead to campaigns being targeted at the wrong audiences, and ultimately a loss of money or no change at all. An example of this type of failure was Chef Boyardee, who planned a campaign to appeal to teenage boys, the largest consumers of their product.[11] What they hadn't considered however was that the purchasers of their goods may be different from the consumers, which was the case, as mothers were the leading purchasers, even though the boys were consuming the product. Factors like these are considered at a more in-depth level with a detailed media plan, one that cannot be found in a simpler target market strategy.",
        writingSettings: writingSettings.settings01,
        createdAt: "2022-02-19T20:04:58.115Z",
        updatedAt: "2022-02-19T20:04:58.115Z",
      },
      {
        topic: "Web platform",
        title: "What is a Web Platform",
        body: "The Web platform is a collection of technologies developed as open standards by the World Wide Web Consortium and other standardization bodies such as the Web Hypertext Application Technology Working Group, the Unicode Consortium, the Internet Engineering Task Force, and Ecma International.",
        writingSettings: writingSettings.settings01,
        createdAt: "2022-02-19T20:08:06.539Z",
        updatedAt: "2022-02-19T20:08:06.539Z",
      },
    ],
    essays: [essaysIds.essay01, essaysIds.essay02, essaysIds.essay03],
    favouriteAuthors: [usersIds.user02, usersIds.user03],
    likes: [essaysIds.essay04, essaysIds.essay05],
  },
  {
    _id: usersIds.user02,
    username: "nickbrahms",
    password: "$2a$12$eyP9BiCJaP9AnBMmX7SnEe78oRa7Ek01qMMGUiNWOTrIO7Os4LBKG",
    writingSettings: writingSettings.settings01,
    comments: [],
    editSuggestionsComments: [],
    drafts: [
      {
        topic: "Columbidae",
        title: "Birds Watching",
        body: "While many species of pigeons and doves have benefited from human activities and have increased their ranges, many other species have declined in numbers and some have become threatened or even succumbed to extinction.",
        writingSettings: writingSettings.settings01,
        createdAt: "2022-02-19T20:25:59.949Z",
        updatedAt: "2022-02-19T20:25:59.949Z",
      },
    ],
    essays: [essaysIds.essay04, essaysIds.essay05],
    favouriteAuthors: [usersIds.user01, usersIds.user03],
    likes: [essaysIds.essay01, essaysIds.essay02, essaysIds.essay03],
  },
  {
    _id: usersIds.user03,
    username: "iihome",
    password: "$2a$12$wwOEh67zsFe3YOuS3l.mhe55hRz2nHBUEh/ugf8QKjr7COTnYdAt.",
    writingSettings: writingSettings.settings01,
    comments: [],
    editSuggestionsComments: [],
    drafts: [],
    essays: [essaysIds.essay10],
    favouriteAuthors: [usersIds.user01],
    likes: [],
  },
  {
    _id: usersIds.user04,
    username: "johnsmith",
    password: "$2a$12$dQs7I4GWmuRc2ERnp.Qv4e7496qhOhZzrwvCcd6sLkSY3ISg4EbUG",
    writingSettings: writingSettings.settings02,
    comments: [],
    editSuggestionsComments: [],
    drafts: [
      {
        topic: "Corruption",
        title: "Corruption",
        body: "Il s'agit d'une pratique qui peut être tenue pour illicite selon le domaine considéré (commerce, affaires, politique…) mais dont le propre est justement d'agir de manière à la rendre impossible à déceler ou à dénoncer.\n\nElle peut concerner toute personne bénéficiant d'un pouvoir de décision, que ce soit une personnalité politique, un fonctionnaire, un cadre d'une entreprise privée, un médecin, un arbitre ou un sportif, un syndicaliste ou l'organisation à laquelle ils appartiennent.",
        writingSettings: writingSettings.settings02,
        createdAt: "2022-02-19T20:25:59.949Z",
        updatedAt: "2022-02-19T20:25:59.949Z",
      },
    ],
    essays: [essaysIds.essay07, essaysIds.essay08, essaysIds.essay06],
    favouriteAuthors: [usersIds.user05],
    likes: [],
  },
  {
    _id: usersIds.user05,
    username: "harry",
    password: "$2a$12$DfoLOAma/BkCIJDZZ1fjVeXeKIj/nURuv1InK3qFgEdNIz8kCmi6i",
    writingSettings: writingSettings.settings02,
    comments: [],
    editSuggestionsComments: [],
    drafts: [
      {
        topic: "Echoes (chanson)",
        title: "Composition de la chanson",
        body: "La composition d’Echoes commence en tant que collection d'expériences musicales séparées, dont certaines sont des restes de sessions d'enregistrement d'albums précédents.",
        writingSettings: writingSettings.settings02,
        createdAt: "2022-02-19T20:25:59.949Z",
        updatedAt: "2022-02-19T20:25:59.949Z",
      },
    ],
    essays: [essaysIds.essay09],
    favouriteAuthors: [usersIds.user04],
    likes: [essaysIds.essay08],
  },
]);

db.essays.insertMany([
  {
    _id: essaysIds.essay01,
    topic: "Gardening",
    user_id: usersIds.user01,
    title: "Social aspects of gardening",
    body: "People can express their political or social views in gardens, intentionally or not. The lawn vs. garden issue is played out in urban planning as the debate over the 'land ethic' that is to determine urban land use and whether hyper hygienist bylaws (e.g. weed control) should apply, or whether land should generally be allowed to exist in its natural wild state. In a famous Canadian Charter of Rights case, 'Sandra Bell vs. City of Toronto', 1997, the right to cultivate all native species, even most varieties deemed noxious or allergenic, was upheld as part of the right of free expression.\n\nCommunity gardening comprises a wide variety of approaches to sharing land and gardens.\n\nPeople often surround their house and garden with a hedge. Common hedge plants are privet, hawthorn, beech, yew, leyland cypress, hemlock, arborvitae, barberry, box, holly, oleander, forsythia and lavender. The idea of open gardens without hedges may be distasteful to those who enjoy privacy. The Slow Food movement has sought in some countries to add an edible school yard and garden classrooms to schools, e.g. in Fergus, Ontario, where these were added to a public school to augment the kitchen classroom. Garden sharing, where urban landowners allow gardeners to grow on their property in exchange for a share of the harvest, is associated with the desire to control the quality of one's food, and reconnect with soil and community.\n\nIn US and British usage, the production of ornamental plantings around buildings is called landscaping, landscape maintenance or grounds keeping, while international usage uses the term gardening for these same activities.",
    comments: [],
    editSuggestionsComments: [],
    writingSettings: writingSettings.settings01,
    ratings: [],
    createdAt: "2022-02-19T20:25:59.949Z",
    updatedAt: "2022-02-19T20:25:59.949Z",
  },
  {
    _id: essaysIds.essay02,
    topic: "Rat",
    user_id: usersIds.user01,
    title: "Rats as Pets",
    body:
      "Rats have long been considered deadly pests. Once considered a modern myth, the rat flood in India occurs every fifty years, as armies of bamboo rats descend upon rural areas and devour everything in their path. Rats have long been held up as the chief villain in the spread of the Bubonic Plague; however, recent studies show that rats alone could not account for the rapid spread of the disease through Europe in the Middle Ages. Still, the Centers for Disease Control does list nearly a dozen diseases directly linked to rats.\n" +
      "\n" +
      "Most urban areas battle rat infestations. A 2015 study by the American Housing Survey (AHS) found that eighteen percent of homes in Philadelphia showed evidence of rodents. Boston, New York City, and Washington, D.C., also demonstrated significant rodent infestations. Indeed, rats in New York City are famous for their size and prevalence. The urban legend that the rat population in Manhattan equals that of its human population was definitively refuted by Robert Sullivan in his book Rats but illustrates New Yorkers' awareness of the presence, and on occasion boldness and cleverness, of the rodents. New York has specific regulations for eradicating rats; multifamily residences and commercial businesses must use a specially trained and licensed rat catcher.\n" +
      "\n" +
      "Chicago was declared the 'rattiest city' in the US by the pest control company Orkin in 2020, for the sixth consecutive time. It's followed by Los Angeles, New York, Washington, DC, and San Francisco. To help combat the problem, a Chicago animal shelter has placed more than 1000 feral cats (sterilized and vaccinated) outside of homes and businesses since 2012, where they hunt and catch rats while also providing a deterrent simply by their presence.\n" +
      "\n" +
      "Rats have the ability to swim up sewer pipes into toilets. Rats will infest any area that provides shelter and easy access to sources of food and water, including under sinks, near garbage, and inside walls or cabinets.",
    comments: [],
    editSuggestionsComments: [],
    writingSettings: writingSettings.settings01,
    ratings: [],
    createdAt: "2021-02-19T20:25:59.949Z",
    updatedAt: "2021-02-19T20:25:59.949Z",
  },
  {
    _id: essaysIds.essay03,
    topic: "Intensive farming",
    user_id: usersIds.user01,
    title: "Sustainable farming",
    body: "Intensive farming practices which are thought to be sustainable have been developed to slow the deterioration of agricultural land and even regenerate soil health and ecosystem services. These developments may fall in the category of organic farming, or the integration of organic and conventional agriculture.\n\nPasture cropping involves planting grain crops directly into grassland without first applying herbicides. The perennial grasses form a living mulch understory to the grain crop, eliminating the need to plant cover crops after harvest. The pasture is intensively grazed both before and after grain production. This intensive system yields equivalent farmer profits (partly from increased livestock forage) while building new topsoil and sequestering up to 33 tons of CO2/ha/year.\n\nBiointensive agriculture focuses on maximizing efficiency such as per unit area, energy input and water input.\n\nAgroforestry combines agriculture and orchard/forestry technologies to create more integrated, diverse, productive, profitable, healthy and sustainable land-use systems.\n\nIntercropping can increase yields or reduce inputs and thus represents (potentially sustainable) agricultural intensification. However, while total yield per acre is often increased, yields of any single crop often diminish. There are also challenges to farmers relying on farming equipment optimized for monoculture, often resulting in increased labor inputs.\n\nVertical farming is intensive crop production on a large scale in urban centers, in multi-story, artificially-lit structures, for the production of low-calorie foods like herbs, microgreens, and lettuce.",
    comments: [],
    editSuggestionsComments: [],
    writingSettings: writingSettings.settings01,
    ratings: [],
    createdAt: "2022-01-29T20:25:59.949Z",
    updatedAt: "2022-01-29T20:25:59.949Z",
  },
  {
    _id: essaysIds.essay04,
    topic: "Super Bowl LVI",
    user_id: usersIds.user02,
    title: "Super Bowl",
    body:
      "The Super Bowl is the annual playoff championship game of the National Football League (NFL). It has served as the final game of every NFL season since 1966, replacing the NFL Championship Game. Since 2022, the game is played on the second Sunday in February. Prior Super Bowls were played on Sundays in early to mid-January from 1967 to 1978, late January from 1979 to 2003, and the first Sunday of February from 2004 to 2021. Winning teams are awarded the Vince Lombardi Trophy, named after the eponymous coach who won the first two Super Bowls. Due to the NFL restricting use of its 'Super Bowl' trademark, it is frequently referred to as the \"big game\" or other generic terms by non-sponsoring corporations. The day the game is played is often referred to as Super Bowl Sunday / Super Sunday.\n" +
      "\n" +
      "The game was created as part of a 1966 merger agreement between the NFL and the competing American Football League (AFL) to have their best teams compete for a championship. It was originally called the AFL–NFL World Championship Game until the 'Super Bowl' moniker was adopted in 1969's Super Bowl III. The first four Super Bowls from 1967 to 1970 were played before the merger, with the NFL and AFL each winning two. After the merger in 1970, the 10 AFL teams and three NFL teams formed the American Football Conference (AFC), while the remaining 13 NFL teams formed the National Football Conference (NFC). All games since 1971's Super Bowl V have been played between the two best teams from each conference, with the NFC leading the AFC 27–25.",
    comments: [],
    editSuggestionsComments: [],
    writingSettings: writingSettings.settings01,
    ratings: [],
    createdAt: "2021-05-19T20:25:59.949Z",
    updatedAt: "2021-05-19T20:25:59.949Z",
  },
  {
    _id: essaysIds.essay05,
    topic: "Self-care",
    user_id: usersIds.user02,
    title: "Factors influencing self-care",
    body:
      "External personal factors such as access to healthcare and one's living environment greatly influence self-care. Social determinants of health play an important role in self-care practices. Access to care is one major determinant of an individual's ability to carry out self-care maintenance behaviors. This includes having access to transportation to visit a health care facility, offices/clinics opening hours, and affordability. Access to facilities that promote self-care within an individual's living environment is another factor that influences self-care maintenance. For example, access to a safe environment for walking or exercise facilities such as a gym greatly influence self-care maintenance behaviors as does access to healthy food.\n" +
      "\n" +
      "Self-care practices are shaped by what are seen as the proper lifestyle choices of local communities. Internal personal factors such as motivation, emotions, and cognitive abilities also influence self-care maintenance behaviors. Motivation is often the driving force behind performing self-care maintenance behaviors. Goal setting is a practice associated with motivated self care. A person with depression is more likely to have a poor dietary intake low in fruits and vegetables, reduced physical activity, and poor medication adherence. An individual with impaired cognitive or functional abilities (e.g., memory impairment) also has a diminished capacity to perform self-care maintenance behaviors such as medication adherence which relies on memory to maintain a schedule.\n" +
      "\n" +
      "Self-care is influenced by an individual's attitude and belief in his or her self-efficacy or confidence in performing tasks and overcoming barriers. Cultural beliefs and values may also influence self-care. Cultures that promote a hard-working lifestyle may view self-care in contradictory ways. Personal values have been shown to have an effect on self-care in Type 2 Diabetes Mellitus.",
    comments: [],
    editSuggestionsComments: [],
    writingSettings: writingSettings.settings01,
    ratings: [],
    createdAt: "2022-02-19T20:25:59.949Z",
    updatedAt: "2022-02-19T20:25:59.949Z",
  },
  {
    _id: essaysIds.essay06,
    topic: "Perruche ondulée",
    user_id: usersIds.user04,
    title: "Développement du perruchon",
    body:
      "Le perruchon porte sur le milieu du bec mou une sorte de dent acérée : le « diamant ». Il utilise cet instrument dans l'œuf, où il tourne sur lui-même, pour percer une série de trous en cercle préparant l'éclosion. Mais quand l'enveloppe interne est trop rêche, il n'arrive pas à se libérer tout seul. Ses cris et son agitation déclenchent alors chez la mère une vocation « d'accoucheuse ». \n" +
      "\n" +
      "On la voit d'abord picorer la gangue de calcaire jusqu'à couper l'œuf en deux. Elle arrache ensuite le petit à sa prison et gobe le chorion, une membrane souple qui tapisse la coquille, avant de recueillir le nouveau-né dans le giron douillet de ses plumes ventrales. Chez les jeunes, le bout du bec est noir, ils ont des rayures sur le front et leur iris est noir.\n" +
      "\n" +
      "Les piaillements et les gesticulations des rejetons dictent aux parents le rythme et l'abondance des becquées. Dès qu'ils ont avalé leur soûl de graines ; ils ordonnent à grands cris la fin du repas, se convulsent en gigotant des pattes, comme désespérés. À ces signaux, le père et la mère obéissent sans broncher. Les premiers jours, les petits sont nus, incapables de réguler seuls leur température corporelle.",
    comments: [],
    editSuggestionsComments: [],
    writingSettings: writingSettings.settings02,
    ratings: [],
    createdAt: "2022-01-19T20:25:59.949Z",
    updatedAt: "2022-02-19T20:25:59.949Z",
  },
  {
    _id: essaysIds.essay07,
    topic: "Archéologie",
    user_id: usersIds.user04,
    title: "Importance et validité d'application",
    body:
      "L'archéologie représente souvent le seul moyen de connaître le mode de vie et les comportements des groupes du passé. \n" +
      "\n" +
      "Des milliers de cultures et de sociétés, des millions de personnes se sont succédé au cours des millénaires, pour lesquels il n'existe aucun témoignage écrit, aucune histoire, ou presque. Dans certains cas, les textes peuvent être incomplets ou peuvent déformer la réalité.\n" +
      "\n" +
      "L'écriture telle qu'on la connaît aujourd'hui est apparue il y a seulement 5 000 ans environ et elle n'était utilisée que par quelques civilisations technologiquement avancées. Ce n'est bien sûr pas par hasard que ces civilisations sont relativement bien connues : elles ont fait l'objet de recherches de la part des historiens depuis des siècles, tandis que les cultures préhistoriques ne sont étudiées que depuis le xixe siècle. Mais même dans le cas d'une civilisation utilisant l'écriture, de nombreuses pratiques humaines importantes ne sont pas enregistrées. \n" +
      "\n" +
      "Tout ce qui concerne les éléments fondateurs de la civilisation - le développement de l'agriculture, des pratiques culturelles, des premières cités - ne pourra être connu que par l'archéologie.",
    comments: [],
    editSuggestionsComments: [],
    ratings: [],
    writingSettings: writingSettings.settings02,
    createdAt: "2022-02-20T20:25:59.949Z",
    updatedAt: "2022-02-20T20:25:59.949Z",
  },
  {
    _id: essaysIds.essay08,
    topic: "Pepper (robot)",
    user_id: usersIds.user04,
    title: "Pepper (robot)",
    body:
      "Pepper a déjà été adopté par de nombreuses enseignes au Japon, en Europe, aux États-Unis pour accueillir les clients de façon originale. Vendu au prix de 20 000 € pour les entreprises, il est capable d'informer les visiteurs, de les orienter, de recueillir leur niveau de satisfaction ou encore de les divertir le temps qu'un vendeur se libère.\n" +
      "\n" +
      "On le trouve notamment chez Carrefour, Darty, Axa Banque, dans des gares SNCF, à la Cité des Sciences et de l'Industrie, Uniqlo dans sa boutique de Saint Germain des Prés à Paris, les bateaux de croisière Costa, à la mairie du 15e arrondissement de Paris ou encore au parc de loisirs du Futuroscope.\n" +
      "\n" +
      "Pepper permet notamment d'automatiser des tâches ou de décharger l'humain d'actions à faible valeur ajoutée.\n" +
      "\n" +
      "En 2017, Pepper est devenu l'égérie de la campagne publicitaire Renault « French Touch » et a intégré plus de 120 concessions à travers la France.\n" +
      "\n" +
      'En décembre 2019, une douzaine de robots Pepper ont été installés au "Pepper Parlor Café" à Tokyo.\n' +
      "\n" +
      'En juin 2020, dans le cadre de la pandémie Covid, cent Pepper ont été installés au stade de Baseball à Fukuoka afin de devenir des "supporters" de l\'équipe SB Hawks.',
    comments: [],
    editSuggestionsComments: [],
    ratings: [],
    writingSettings: writingSettings.settings02,
    createdAt: "2022-02-19T20:25:59.949Z",
    updatedAt: "2022-02-19T20:25:59.949Z",
  },
  {
    _id: essaysIds.essay09,
    topic: "Carte géographique",
    user_id: usersIds.user05,
    title: "Types de carte",
    body:
      "Les cartes géographiques peuvent être classée en trois types :\n" +
      "\n" +
      "Les cartes topographiques qui recensent et décrivent de façon précise et détaillée les éléments naturels du terrain, tel le relief, l’hydrographie en utilisant une symbologie conventionnelles : courbes de niveau, relief ombré, traits bleus pour représenter les cours d’eau. Dans ce type de carte, une attention particulière est accordée au positionnement précis des objets représentés.\n" +
      "\n" +
      "Les cartes chorographiques, qui ont l’ambition de décrire l’ensemble des, et tout au moins d’en souligner les points remarquables, Elles représentent à la fois les éléments anthropique (les villes, les routes, les frontières, les services publics) et les éléments naturels. Elles ont souvent recours à des icônes (pictogrammes, idéogrammes) en guise de symboles ponctuels, ou quelquefois à des numéros qui renvoient à un index. Les cartes politiques et touristiques sont de cet ordre.\n" +
      "\n" +
      "Les cartes thématiques qui représentent généralement un phénomène unique. Contrairement aux précédentes, elles sont analytiques et explicatives. On a recours par exemple des symboles ponctuels ou linéaires gradués en taille, des polygones hachurés de différents espacements, ou par exemple à des gradations de couleur pour représenter l’intensité d’un phénomène quantitatif (carte dite choroplèthe).\n" +
      "\n" +
      "On découpe habituellement les séries quantitatives en classes. Il existe diverses méthodes de discrétisation des classes (classes égales, progression géométrique, seuils naturels), ces méthodes renvoient à la cartographie statistique. L’ensemble de ces procédés renvoie à l’idée de sémiologie graphique.",
    comments: [],
    editSuggestionsComments: [],
    writingSettings: writingSettings.settings02,
    ratings: [],
    createdAt: "2022-02-19T20:25:59.949Z",
    updatedAt: "2022-02-19T20:25:59.949Z",
  },
  {
    _id: essaysIds.essay10,
    topic: "Logology (science)",
    user_id: usersIds.user03,
    title: "Truth",
    body:
      "Harvard University historian of science Naomi Oreskes points out that the truth of scientific findings can never be assumed to be finally, absolutely settled.The history of science offers many examples of matters that scientists once thought to be settled and which have proven not to be, such as the concepts of Earth being the center of the universe, the absolute nature of time and space, the stability of continents, and the cause of infectious disease.\n" +
      "\n" +
      "Science, writes Oreskes, is not a fixed, immutable set of discoveries but 'a process of learning and discovery'. Science can also be understood as an institution (or better, a set of institutions) that facilitates this work.\n" +
      "\n" +
      "It is often asserted that scientific findings are true because scientists use 'the scientific method'. But, writes Oreskes, 'we can never actually agree on what that method is. Some will say it is empiricism: observation and description of the world. Others will say it is the experimental method: the use of experience and experiment to test hypotheses. (This is cast sometimes as the hypothetico-deductive method, in which the experiment must be framed as a deduction from theory, and sometimes as falsification, where the point of observation and experiment is to refute theories, not to confirm them.) Recently a prominent scientist claimed the scientific method was to avoid fooling oneself into thinking something is true that is not, and vice versa.'",
    comments: [],
    editSuggestionsComments: [],
    ratings: [],
    writingSettings: writingSettings.settings01,
    createdAt: "2022-01-19T20:25:50.949Z",
    updatedAt: "2022-01-19T20:25:50.949Z",
  },
]);
