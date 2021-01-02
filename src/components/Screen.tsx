import React from "react";
import Window from "./Window";
import About from "./Apps/About";
import { connect } from "react-redux";
import * as T from "../types";

interface Props {
  windows: [] | T.Window[];
}

const Screen: React.FC<Props> = ({ windows }) => {
  return (
    <main className="screen">
      {(windows as T.Window[]).map(
        (window) =>
          window.show && (
            <Window
              key={window.id}
              id={window.id}
              windowName={window.name}
              minimizeBtn
              maximizeBtn
            >
              <About />
            </Window>
          )
      )}
    </main>
  );
};

function mapStateToProps(state: any) {
  const { windows } = state;
  return { windows };
}

//export default Screen;
export default connect(mapStateToProps)(Screen);
