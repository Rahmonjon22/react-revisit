import React, { useEffect, useState } from "react";
import axios from "axios"; //npm install axios

import "./UseEffectTutorial.scss";

/* 
UseEffect is one of the most popular Hooks that allows you 
to create conditional changes that reference the program state within a functional component.
*/

function UseEffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  // in most cases it is used api calls for as you load the page
  useEffect(() => {
    //  console.log("hello there");
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        // console.log(response.data);
        setData(response.data[0].email);
        console.log("how many times API is called");
        // it is called twice in order to fix it for one time call i added []
      });
    // useEffect is easy way to call a data
  }, [count]); // when i added count inside [] it calls every time new

  return (
    <div className="useEffectTutorial">
      <h1>UseEffect</h1>
      <div className="emailof1object">
        <p>{data}</p>
        <p>{count}</p>
      <button onClick={()=>{
        setCount(count + 1);
      }}>Click me</button>
      </div>
    </div>
  );
}

export default UseEffectTutorial;
