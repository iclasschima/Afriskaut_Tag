import React, { useState, useRef } from "react";
import { formatTime } from "../../helpers/utils";

export default function Timer({ timer, setTimer }) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  return (
    <div>
      <h5>{formatTime(timer)}</h5>
      {!isActive && !isPaused ? (
        <button className="btn btn-sm btn-primary mx-2" onClick={handleStart}>
          start
        </button>
      ) : isPaused ? (
        <button className="btn btn-sm btn-primary mx-2" onClick={handleResume}>
          resume
        </button>
      ) : (
        <button className="btn btn-sm btn-primary mx-2" onClick={handlePause}>
          pause
        </button>
      )}

      <button className="btn btn-sm btn-danger mx-2" onClick={handleReset}>
        reset
      </button>
    </div>
  );
}
