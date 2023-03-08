import React, { useState, useReducer } from "react";
import "./ReducerTutorial.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

/**
 * useReducer is alternative to useState
 *  useReducer can do multiple changes at once.
 */
const ReducerTutorial = () => {
  // const [count, setCount] = useState(0);
  // const [showText, setShowText] = useState(true);

  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  // state holds information, dispatch will be called when state changes or called

  return (
    <div className="reducerTutorial">
      {/* <div className="useState-version">
        <h1>useState version</h1>
        <p>{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
            setShowText(!showText);
          }}
        >
          useState
        </button>
        {showText && <p>This is the true false text in useState version</p>}
      </div> */}
      <div className="useReducer-version">
        <h1>UseReducer</h1>
        <p>{state.count}</p>
        <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        UseReducer
      </button>
      {state.showText && <p>This is a useReducer with counter</p>}
      </div>
    </div>
  );
};

export default ReducerTutorial;
