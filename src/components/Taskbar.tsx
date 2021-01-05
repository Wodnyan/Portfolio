import React, { useState } from "react";
import Time from "./Time";
import { Window } from "../types";
import { connect, useDispatch, useSelector } from "react-redux";
import { ADD_WINDOW, TOGGLE_WINDOW } from "../redux/actions/windowsActions";
import apps from "../data/apps.json";

interface StartButtonProps {
  toggleStartMenu: () => void;
  isActive: boolean;
}

interface Props {
  windows: [] | Window[];
}

interface StartMenuItemProps {
  children: React.ReactNode;
  icon?: string;
  onClick?: () => void;
}

const Taskbar: React.FC<Props> = ({ windows }) => {
  const [showStartMenu, setShowStartMenu] = useState(true);

  return (
    <header className="taskbar">
      {showStartMenu && <StartMenu windows={windows} />}
      <StartButton
        isActive={showStartMenu}
        toggleStartMenu={() => setShowStartMenu((prev) => !prev)}
      />
      <ActiveApps />
      <Time />
    </header>
  );
};

const ActiveApps = () => {
  const windows = useSelector((state: any) => state.windows);
  const dispatch = useDispatch();

  const toggleWindow = (id: number) => {
    dispatch(TOGGLE_WINDOW(id));
  };

  return (
    <>
      {(windows as Window[]).map((window) => (
        <button
          key={window.id}
          className={`btn btn--taskbar ${window.show ? "btn--active" : ""}`}
          onClick={() => toggleWindow(window.id)}
        >
          <div className="btn__icon">
            <img src={window.icon} alt="windows 95 logo" />
          </div>
          <span>{window.name}</span>
        </button>
      ))}
    </>
  );
};

const StartMenu: React.FC<Props> = ({ windows }) => {
  const dispatch = useDispatch();
  const StartMenuTemp = () => <h1 className="temp">Albert Gergő</h1>;
  const StartMenuItem: React.FC<StartMenuItemProps> = ({
    children,
    icon,
    onClick,
  }) => (
    <li onClick={onClick} className="apps-list__item">
      {icon && (
        <span>
          <img alt="application icon" src={icon} />
        </span>
      )}
      <span>{children}</span>
    </li>
  );

  const handleClick = (id: number, name: string, icon: string) => {
    const exists = windows.find((window) => window.id === id);
    console.log(windows);
    if (exists) {
      dispatch(TOGGLE_WINDOW(id));
    } else {
      dispatch(
        ADD_WINDOW({
          id,
          name,
          icon,
          show: true,
        })
      );
    }
  };

  return (
    <div className="start-menu">
      <StartMenuTemp />
      <ul className="apps-list">
        {apps.apps.map((app) => (
          <StartMenuItem
            onClick={() => handleClick(app.id, app.name, app.icon)}
            icon={app.icon}
            key={app.id}
          >
            {app.name}
          </StartMenuItem>
        ))}
        <StartMenuItem
          onClick={() => console.log("Close Window")}
          icon="images/shutdown.ico"
        >
          Shutdown
        </StartMenuItem>
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

const mapStateToProps = (state: any) => {
  const { windows } = state;
  return { windows };
};

//export default Taskbar;
export default connect(mapStateToProps, {
  ADD_WINDOW,
  TOGGLE_WINDOW,
})(Taskbar);
