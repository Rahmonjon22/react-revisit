import React, { useRef } from "react";
import "./UseRefTutorial.scss";

const UseRefTutorial = () => {

const inputRef = useRef(null);
const onClick = () =>{
// console.log(inputRef.current.value); // on click button, it shows the value i put in input
// inputRef.current.focus(); // on click button it focuses to the input
// inputRef.current.value = ""; // => it will clear the input value

}
  return (
    <div className="useRefTutorial">
      <h1>UseRefTutorial</h1>
      <div className="firstexample">
        <h3>John</h3>
        <input type="text" placeholder="Ex..." ref={inputRef}/>
        <button onClick={onClick} >Change Name</button>
      </div>
    </div>
  );
};

export default UseRefTutorial;
