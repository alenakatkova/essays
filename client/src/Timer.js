import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";

const addZeroIfLessThanTen = (number) => {
  return number < 10 ? "0" + number : number;
};

const Timer = ({ disableForm }) => {
  // TODO получить время из формы
  // TODO нельзя запускать таймер пока не будет выбрана статья (кнопка запуска неактивна)

  const { t } = useTranslation();
  const timeInMinutes = 16;

  const [isOn, setIsOn] = React.useState(false);
  const [secondsLeft, setSecondsLeft] = React.useState(timeInMinutes * 60);

  const startTimer = () => {
    setIsOn(true);
    disableForm(true);
  };

  const reset = () => {
    setSecondsLeft(timeInMinutes * 60);
    setIsOn(false);
    disableForm(false);
  };

  React.useEffect(() => {
    let interval = null;
    if (isOn) {
      interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isOn, secondsLeft]);

  return (
    <div>
      {addZeroIfLessThanTen(Math.floor(secondsLeft / 60))}:
      {addZeroIfLessThanTen(secondsLeft % 60)}
      <Button onClick={startTimer} disabled={isOn}>
        {t("timer.start")}
      </Button>
      <Button onClick={reset} disabled={!isOn}>
        <span className="d-block">{t("timer.reset")}</span>
      </Button>
    </div>
  );
};

export default Timer;
