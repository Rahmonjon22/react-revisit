import React from "react";
import { PropsTutorial, ReduxTutorial, UseStateTutorial, UseEffectTutorial } from "./tutorials/tutorials";
// hooks useState
function App() {
  return (
    <>
      <div className="App">
        <PropsTutorial/>
        <ReduxTutorial/>
        <UseEffectTutorial/>
        <UseStateTutorial/>
      </div>
    </>
  );
}

export default App;
