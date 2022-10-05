import React from "react";
import { useState } from "react";
import "./Greeting.css";

// PURPOSE: Create a user input that welcoms the user with the name they input
function Greeting() {
  const [userName, setUserName] = useState("Default User");

  // PURPOSE: to set userSelection to user's input
  const handleChange = (e) => {
    userSelection = e.target.value;
  };

  // PURPOSE: to create a variable to plug user's input into, but to return false if no input has been made
  let userSelection = false;

  // PURPOSE: to return either the user's selection or Default User
  const userChoice = () => {
    if(userSelection){
      return `${userSelection}`;
    } else {
      return 'Default User'
    };
  }

  return (
    <>
      <form>
        <label>
          Hi!
          <br />
          What's your name?
          <br />
          <input
            type="text"
            defaultValue="Default User"
            id="userNameInput"
            name="userNameInput"
            onChange={handleChange}
          />
          <br />
          <input
            type="button"
            value="ENTER"
            onClick={() => setUserName(userChoice)}
          />
        </label>
      </form>
      <h1>
        Welcome {userName}. What type of
        pictures do you want to see?
      </h1>
    </>
  );
}

export default Greeting;
