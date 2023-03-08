import React from "react";
import { Props, Redux, UseState, UseEffect } from "./tutorials/tutorials";
// hooks useState
function App() {
  return (
    <>
      <div className="App">
        <Props/>
        <Redux/>
        <UseEffect/>
        <UseState/>
      </div>
    </>
  );
}

export default App;
