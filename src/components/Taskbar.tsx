import React, { useState } from "react";
import Time from "./Time";

interface StartButtonProps {
  toggleStartMenu: () => void;
  isActive: boolean;
}

interface StartMenuItemProps {
  children: React.ReactNode;
}

const Taskbar = () => {
  const [showStartMenu, setShowStartMenu] = useState(true);

  return (
    <header className="taskbar">
      {showStartMenu && <StartMenu />}
      <StartButton
        isActive={showStartMenu}
        toggleStartMenu={() => setShowStartMenu((prev) => !prev)}
      />
      <Time />
    </header>
  );
};

const StartMenu = () => {
  const StartMenuTemp = () => <h1 className="temp">Albert Gergő</h1>;
  const StartMenuItem: React.FC<StartMenuItemProps> = ({ children }) => (
    <li className="apps-list__item">{children}</li>
  );
  return (
    <div className="start-menu">
      <StartMenuTemp />
      <ul className="apps-list">
        <StartMenuItem>Projects</StartMenuItem>
        <StartMenuItem>About</StartMenuItem>
        <StartMenuItem>Contacts</StartMenuItem>
        <StartMenuItem>CV</StartMenuItem>
        <StartMenuItem>ShutDown</StartMenuItem>
      </ul>
    </div>
  );
};

const StartButton: React.FC<StartButtonProps> = ({
  toggleStartMenu,
  isActive,
}) => {
  return (
    <button
      className={`btn ${isActive ? "btn--active" : ""}`}
      onClick={toggleStartMenu}
    >
      <div className="btn__icon">
        <img src="/images/win95-logo.ico" alt="windows 95 logo" />
      </div>
      <span>Start</span>
    </button>
  );
};

export default Taskbar;
