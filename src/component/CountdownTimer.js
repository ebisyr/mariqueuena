import React, { useState, useEffect } from 'react';

const CountDownTimer = ({ peopleInLine, estimatedTime }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (estimatedTime !== null) {
      setTimeLeft(estimatedTime * 60); // Convert estimated time from minutes to seconds
    }
  }, [estimatedTime]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h4>{formatTime()}</h4>
    </div>
  );
};

export default CountDownTimer;
