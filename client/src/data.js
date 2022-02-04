// TODO заменить все на camelCase кроме smth_id и smth_date
// TODO сделать название языка, теста айдишником https://en.wikipedia.org/wiki/List_of_language_proficiency_tests https://en.wikipedia.org/wiki/List_of_Wikipedias

export const languages = [
  { _id: "english", code: "en" },
  { _id: "russian", code: "ru" },
  { _id: "french", code: "fr" },
  { _id: "german", code: "de" },
];

export const tests = [
  { test: "any", id: "test0", "language-id": "" },
  { test: "delf", id: "test1", "language-id": "" },
  { test: "dalf", id: "test2", "language-id": "" },
  { test: "toefl", id: "test3", "language-id": "" },
];

export const randomUser = {
  id: "user1",
  username: "olegstarostin",
  password: "dgsergjklsngkl",
  "writing-settings": {
    "language-id": "french",
    "words-count": 180,
    "timing-in-minutes": 15,
    "test-id": "test2",
  },
};
