import React, { useState, createContext } from "react";
import User from "./User";
import Login from "./Login";
import "./UseContextTutorial.scss";

export const AppContext = createContext(null);

const UseContextTutorial = () => {
  const [username, setUsername] = useState("");
  return (
    <div className="UseContextTutorial">
      <h1>UseContext Tutorial</h1>
      <div className="example">
        <AppContext.Provider value={{username, setUsername}}>
          <Login/><User/>
        </AppContext.Provider>

      </div>
    </div>
  );
};

export default UseContextTutorial;
