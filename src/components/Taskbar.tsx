import React from "react";
import Time from "./Time";

const Taskbar = () => {
  return (
    <header className="taskbar">
      <StartButton />
      <Time />
    </header>
  );
};

const StartButton = () => {
  return (
    <button className="btn">
      <div className="btn__icon">
        <img src="/images/win95-logo.ico" alt="windows 95 logo" />
      </div>
      <span>Start</span>
    </button>
  );
};

export default Taskbar;
