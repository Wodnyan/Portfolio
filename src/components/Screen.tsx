import React from "react";
import Window from "./Window";
import About from "./Apps/About";
import CV from "./Apps/CV";
import Projects from "./Apps/Projects";
import Contacts from "./Apps/Contacts";
import { connect } from "react-redux";
import * as T from "../types";
import { Apps } from "../types";

interface Props {
  windows: [] | T.Window[];
}

//Show the correct app for the window
function appForWindow(windowId: number) {
  switch (windowId) {
    case Apps.About:
      return <About />;
    case Apps.Projects:
      return <Projects />;
    case Apps.CV:
      return <CV />;
    case Apps.Contacts:
      return <Contacts />;
    default:
      return null;
  }
}

const Screen: React.FC<Props> = ({ windows }) => {
  return (
    <main className="screen">
      {(windows as T.Window[]).map((window) => (
        <Window
          key={window.id}
          id={window.id}
          windowName={window.name}
          show={window.show}
          minimizeBtn
          maximizeBtn
        >
          {appForWindow(window.id)}
        </Window>
      ))}
    </main>
  );
};

function mapStateToProps(state: any) {
  const { windows } = state;
  return { windows };
}

//export default Screen;
export default connect(mapStateToProps)(Screen);
