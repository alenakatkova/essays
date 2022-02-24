import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";

const addZeroIfLessThanTen = (number) => {
  return number < 10 ? "0" + number : number;
};

const Timer = ({ startWriting, minutes, onTimeEnd }) => {
  const { t } = useTranslation();
  const [isOn, setIsOn] = React.useState(false);
  const [secondsLeft, setSecondsLeft] = React.useState(minutes * 60);

  const startTimer = () => {
    setIsOn(true);
    startWriting();
  };

  React.useEffect(() => {
    let interval = null;
    if (isOn) {
      interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
        if (secondsLeft === 0) {
          onTimeEnd();
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isOn, secondsLeft]);

  return (
    <div>
      <div className="display-2 row justify-content-center">
        {addZeroIfLessThanTen(Math.floor(secondsLeft / 60))}:
        {addZeroIfLessThanTen(secondsLeft % 60)}
      </div>
      <div className="row justify-content-center m-3">
        <Button onClick={startTimer} disabled={isOn} style={{ width: "15%" }}>
          {t("timer.start")}
        </Button>
      </div>
    </div>
  );
};

export default Timer;
