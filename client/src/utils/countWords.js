const isWord = (str) => {
  const regexpContainsLetter = /\p{L}/u;
  return regexpContainsLetter.test(str);
};

export const countWords = (text) => {
  return text.split(" ").filter((str) => isWord(str)).length;
};
