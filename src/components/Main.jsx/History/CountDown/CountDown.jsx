import { useState, useEffect } from "react";

const CountdownComponent = (page) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const targetDate = new Date("2024-11-14T00:00:00.000Z");
  targetDate.setUTCHours(targetDate.getUTCHours() - 4);

  useEffect(() => {
    const storedTime = localStorage.getItem("countdownTime");
    if (storedTime) {
      const [storedDays, storedHours, storedMinutes, storedSeconds] =
        storedTime.split(":");
      setDays(parseInt(storedDays));
      setHours(parseInt(storedHours));
      setMinutes(parseInt(storedMinutes));
      setSeconds(parseInt(storedSeconds));
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDiff = targetDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        clearInterval(intervalId);
        return;
      }

      const daysLeft = Math.floor(timeDiff / (1000 * 3600 * 24));
      const hoursLeft = Math.floor(
        (timeDiff % (1000 * 3600 * 24)) / (1000 * 3600)
      );
      const minutesLeft = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
      const secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setDays(daysLeft);
      setHours(hoursLeft);
      setMinutes(minutesLeft);
      setSeconds(secondsLeft);

      localStorage.setItem(
        "countdownTime",
        `${daysLeft}:${hoursLeft}:${minutesLeft}:${secondsLeft}`
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="time-left">
      {page.page || (
        <div className="top-side">
          <p className="year">2024</p>
          <p className="time-left--para">აღწერამდე დარჩა</p>
        </div>
      )}
      <div className="bottom-side">
        <div className="days">
          <h1>{days} :</h1>
          <p>დღე</p>
        </div>
        <div className="hours">
          <h1>{hours > 10 ? hours : `0${hours}`} :</h1>
          <p>საათი</p>
        </div>
        <div className="minutes">
          <h1>{minutes > 10 ? minutes : `0${minutes}`} :</h1>
          <p>წუთი</p>
        </div>
        <div className="seconds">
          <h1>{seconds < 10 ? `0${seconds}` : seconds}</h1>
          <p>წამი</p>
        </div>
      </div>
      {page.page && (
        <>
          <div className="border-container"></div>
          <button>შემახსენე</button>
        </>
      )}
    </div>
  );
};

export default CountdownComponent;
