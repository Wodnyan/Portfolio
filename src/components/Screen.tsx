import React from "react";
import Window from "./Window";
import { connect } from "react-redux";

const Screen = () => {
  return (
    <main className="screen">
      <Window windowName="hello" minimizeBtn maximizeBtn>
        hello
      </Window>
    </main>
  );
};

function mapStateToProps(state: any) {
  const { windows } = state;
  return { windows };
}

//export default Screen;
export default connect(mapStateToProps)(Screen);
