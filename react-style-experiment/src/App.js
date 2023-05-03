import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import Child4 from "./Child4";
import "./AppLight.css";
import "./AppDark.css";

function App() {
  const [styles, setStyle] = useState(0);
  const [namedStyles, setNamedStyles] = useState("light");
  const [dialogShow, setDialogShow] = useState("close");

  const handleNumberStyle = () => {
    if (styles === 0) {
      setStyle(1);
    } else {
      setStyle(0);
    }
  };

  const handleNamedStyle = () => {
    if (namedStyles === "light") {
      setNamedStyles("dark");
    } else {
      setNamedStyles("light");
    }
  };

  const handleClick = () => {
    handleNamedStyle();
    handleNumberStyle();
  };

  const changeDialogShow = () => {
    if (dialogShow === "close") {
      setDialogShow("open");
    } else {
      setDialogShow("close");
    }
  };

  return (
    <>
      <h1 className={styles === 0 ? "light" : "dark"}>Here I Am!</h1>
      <br />
      <br />
      <button onClick={handleClick}>Style On/Off</button>
      <br />
      <br />
      <p onClick={handleClick}>Or Click Here</p>
      <br />
      <h2 className={`${styles === 0 ? "light" : "dark"}app`}>
        Do I change too?
      </h2>
      <br />
      <br />
      <Child1 styling={styles === 0 ? "light" : "dark"} />
      <Child2 styling={styles === 0 ? "light" : "dark"} />
      <Child3 styling={namedStyles} />
      <Child4 styling={namedStyles} />
      <br />
      <h3>Dialog box experiment</h3>
      <p>Can I use a dialog tag to make a sort of FAQ message appear?</p>
      <p onClick={changeDialogShow}>
        <strong>
          Click here to find out!{" "}
          {dialogShow === "open" ? "DOWN ARROW" : "UP ARROW"}
        </strong>
      </p>
      {dialogShow === "open" ? (
        <dialog open>
          Here is your lengthy explantion box. Unfolded so the user can see all
          the amazing information at their disposal
        </dialog>
      ) : null}
    </>
  );
}

export default App;
