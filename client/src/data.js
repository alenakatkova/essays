// TODO заменить все на camelCase кроме smth_id и smth_date
// TODO сделать название языка, теста айдишником https://en.wikipedia.org/wiki/List_of_language_proficiency_tests https://en.wikipedia.org/wiki/List_of_Wikipedias

export const languages = [
  { _id: "english", code: "en" },
  { _id: "russian", code: "ru" },
  { _id: "french", code: "fr" },
  { _id: "german", code: "de" },
];

export const tests = [
  { _id: "delf", language_id: "french" },
  { _id: "dalf", language_id: "french" },
  { _id: "toefl", language_id: "english" },
];

export const randomUser = {
  id: "user1",
  username: "olegstarostin",
  password: "dgsergjklsngkl",
  writingSettings: {
    language_id: "french",
    wordsCount: 180,
    timingInMinutes: 15,
    test_id: "delf",
  },
};
