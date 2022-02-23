import React from "react";
import { useTranslation } from "react-i18next";

const isWord = (str) => {
  const regexpContainsLetter = /\p{L}/u;
  return regexpContainsLetter.test(str);
};

const countWords = (text) => {
  return text.split(" ").filter((str) => isWord(str)).length;
};

const WordCounter = ({ minAmount, text }) => {
  const { t } = useTranslation();

  const [currentAmount, setCurrentAmount] = React.useState(0);

  React.useEffect(() => {
    if (text && text.length > 0) setCurrentAmount(countWords(text));
  }, [text]);

  return (
    <div>
      {t("wordsCounter.title")}: {currentAmount}/{minAmount}
    </div>
  );
};

export default WordCounter;
