import { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {
  const [time, setTime] = useState({
    days: 120,
    hours: 18,
    minutes: 15,
    seconds: 10,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
          } else if (days > 0) {
            days--;
            hours = 23;
            minutes = 59;
            seconds = 59;
          } else {
            clearInterval(interval);
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex mt-5">
      <div className="timer">
        {String(time.days).padStart(2, "0")}
        <span>Days</span>
      </div>
      <div className="timer">
        {String(time.hours).padStart(2, "0")}
        <span>Hours</span>
      </div>
      <div className="timer">
        {String(time.minutes).padStart(2, "0")}
        <span>Mins</span>
      </div>
      <div className="timer">
        {String(time.seconds).padStart(2, "0")}
        <span>Secs</span>
      </div>
    </div>
  );
}

export default Timer;
