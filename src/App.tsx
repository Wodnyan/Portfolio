import React from "react";
import Taskbar from "./components/Taskbar";
import Screen from "./components/Screen";

const App = () => {
  return (
    <div className="App">
      <Screen />
      <Taskbar />
    </div>
  );
};

export default App;
