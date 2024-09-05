import React, { useState, useEffect } from 'react';
import "../Styles/Components/Time.css"

interface TimerProps {
  initialTime: number;
}

const Time: React.FC<TimerProps> = ({ initialTime }) => {
  const [time, setTime] = useState<number>(initialTime);

  useEffect(() => {
    if (time <= 0) return;

    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [time]);

  return (
    <div className='ps-2 Time-container'>
      <h4>{formatTime(time)}</h4>
    </div>
  );
};

const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = secs < 10 ? `0${secs}` : secs;
  
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

export default Time;
