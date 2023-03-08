import React from "react";
import {
  UseStateTutorial,
  ReducerTutorial, 
  UseEffectTutorial,
  UseRefTutorial,
  UseLayoutTutorial,
  UseImperativeHandleTutorial,
  UseContextTutorial,
  UseMemoTutorial,
  CallBackTutorial,
  PropsTutorial,
  ReduxTutorial,
 
} from "./tutorials/tutorials";
// hooks useState
function App() {
  return (
    <>
      <div className="App">
        <UseStateTutorial />
        <ReducerTutorial />
        <UseEffectTutorial />
        <UseRefTutorial />
        <UseLayoutTutorial />
        <UseImperativeHandleTutorial/>
        <UseContextTutorial />
        <UseMemoTutorial/>
        <CallBackTutorial/>
        <PropsTutorial />
        <ReduxTutorial />
      </div>
    </>
  );
}

export default App;
