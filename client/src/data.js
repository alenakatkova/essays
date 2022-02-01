export const languages = [
  { language: "english", id: "lang1", code: "en" },
  { language: "russian", id: "lang2", code: "ru" },
  { language: "french", id: "lang3", code: "fr" },
  { language: "german", id: "lang4", code: "de" },
];

export const tests = [
  { test: "delf", id: "test1" },
  { test: "dalf", id: "test2" },
  { test: "toefl", id: "test3" },
];

export const randomUser = {
  id: "user1",
  name: "Oleg",
  surname: "Starostin",
  email: "oleg@gmail.fr",
  photo: "",
  "writing-settings": {
    "language-id": "lang3",
    "words-count": 180,
    "timing-in-minutes": 15,
    "test-id": "test2",
  },
};
