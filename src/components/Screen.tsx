import React from "react";
import Window from "./Window";

const Screen = () => {
  return (
    <main className="screen">
      <Window windowName="hello" minimizeBtn maximizeBtn>
        hello
      </Window>
    </main>
  );
};

export default Screen;
