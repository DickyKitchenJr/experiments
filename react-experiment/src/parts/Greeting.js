import React from "react";
import { useState } from "react";
import "./Greeting.css";

function Greeting() {
  const [userName, setUserName] = useState("Default User");

  return (
    <>
      <form>
        <label>
          What's your name? &nbsp;
          <input
            type="text"
            defaultValue={userName}
            id="userName"
            name="userName"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
      </form>
      <h1>Hi {userName}. What type of pictures do you want to see?</h1>
    </>
  );
}

export default Greeting;
