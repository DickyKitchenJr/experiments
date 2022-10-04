import React from "react";
import { useState } from "react";
import "./Greeting.css";

// PURPOSE: Create a user input that welcoms the user with the name they input
function Greeting() {
  const [userName, setUserName] = useState("Default User");

  return (
    <>
      <form>
        <label>
          Hi!
          <br />
          What's your name?
          <br />
          {/* TODO: Create function to setUserName on change of input text and pass it to the greeting onClick of button */}
          <input
            type="text"
            defaultValue={userName}
            id="userName"
            name="userName"
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <input type="button" value ="ENTER" />
        </label>
      </form>
      <h1>Welcome {userName}. What type of pictures do you want to see?</h1>
    </>
  );
}

export default Greeting;
