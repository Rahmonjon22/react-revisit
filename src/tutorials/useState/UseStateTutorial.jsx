import React, { useState } from "react";
import "./useStateTutorial.scss";

const UseStateTutorial = () => {
  //   // let counter = 0;
  //   // const increment = () =>{
  //   //     counter = counter + 1;
  //   //     // console.log(counter); // => it is working but  it is not working in outside
  //   // } // this is pure javascript. so in React, we can use useState instead.

  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1); // here it is mutating
  }

  const [inputValue, setInputValue] = useState("John");
  let onChange = (event) => {
    // event type is for changing value 
    const newValue = event.target.value;
    // inputValue = newValue; this is what we want, so to do this we just need to use setInputValue
    setInputValue(newValue);
  };

  return (
    // change the state of the aplication and usestate is one example check the difference
    <div className="useStateTutorial">
      <div>
        <h1>UseState counter</h1>
        <div>
          <p> {counter}</p>
          <button onClick={increment}>increment</button>
          {/* <button onClick={() => setCounter(counter + 1)}> Click me</button> */}
        </div>
      </div>
      <div className="inputval">
        <h1>Input value example</h1>
        <input
          type="text"
          placeholder="Enter your Name ..." onChange={onChange} /** normally in js we use onChange={} property every time there is change in value*/
        />
        <p>{inputValue}</p>
      </div>
    </div>
  );
};

export default UseStateTutorial;
