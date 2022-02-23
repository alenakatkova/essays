import React from "react";
import { useTranslation } from "react-i18next";
import { countWords } from "../../utils/countWords";

const WordCounter = ({ minAmount, text, requiresReset, onResetCompletion }) => {
  const { t } = useTranslation();

  const [currentAmount, setCurrentAmount] = React.useState(0);

  React.useEffect(() => {
    if (text) setCurrentAmount(countWords(text));
  }, [text]);

  React.useEffect(() => {
    if (requiresReset) {
      setCurrentAmount(0);
    }
    onResetCompletion();
  }, [requiresReset]);

  return (
    <div>
      {t("wordsCounter.title")}: {currentAmount}/{minAmount}
    </div>
  );
};

export default WordCounter;
