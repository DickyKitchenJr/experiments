import React from "react";
import { useState } from "react";
import "./Greeting.css";

function Greeting() {
  const [userName, setUserName] = useState("Default User");

  return (
    <>
      <form>
        <label for="userName">What's your name?</label>
        <input
          type="text"
          defaultValue={userName}
          id="userName"
          name="userName"
          onChange={(e) => setUserName(e.target.value)}
        />
      </form>
      <h1>Hi {userName}. Enjoy these random pictures.</h1>
    </>
  );
}

export default Greeting;
