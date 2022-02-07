import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";

const addZeroIfLessThanTen = (number) => {
  return number < 10 ? "0" + number : number;
};

const Timer = ({ disableSettings, enableSettings, deleteTopics, minutes }) => {
  const { t } = useTranslation();

  const [isOn, setIsOn] = React.useState(false);
  const [secondsLeft, setSecondsLeft] = React.useState(minutes * 60);

  const startTimer = () => {
    setIsOn(true);
    disableSettings();
  };

  const reset = () => {
    setSecondsLeft(minutes * 60);
    setIsOn(false);
    enableSettings();
    deleteTopics();
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
      <Button onClick={reset}>
        <span className="d-block">{t("timer.reset")}</span>
      </Button>
    </div>
  );
};

export default Timer;
