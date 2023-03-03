import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import './AppLight.css';
import './AppDark.css'

function App() {
  const [styles, setStyle] = useState(0);

  const handleClick = () => {
    if (styles === 0) {
      setStyle(1);
    } else {
      setStyle(0);
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
    </>
  );
}

export default App;
