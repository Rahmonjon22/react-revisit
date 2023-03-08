import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./UseLayoutTutorial.scss";


// useEffect and useLayoutEffect are very similiar but have fundemental difference is 
// useLayoutEffect comes first while useEffect is called after page rendered
const UseLayoutTutorial = () => {
const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.value = "Hello";
    // console.log("1 UseEffect");

  }, []);

  // useLayoutEffect(() => {
  //   console.log(inputRef.current.value);
  //   // console.log("1 UseLayoutEffect");
  // }, []);
  return (
    <div className="useLayoutTutorial">
      <h1>UseLayoutTutorial</h1>
      <div className="uselayoutexample">
      <input ref={inputRef} value="John"  />
      </div>
    </div>
  );
};

export default UseLayoutTutorial;
