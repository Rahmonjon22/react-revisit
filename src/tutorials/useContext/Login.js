import React, { useContext } from "react";
import { AppContext } from "./UseContextTutorial";

function Login() {
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input
        style={{
          width: 350,
          height: 50,
          border: 1,
          borderRadius: 5,
          padding: 5,
          color: "green",
          textTransform: "capitalize",
        }}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}

export default Login;
