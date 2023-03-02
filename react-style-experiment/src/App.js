import React, { useState } from "react";
import HelmetTest from "./HelmetTest";
import { Helmet } from 'react-helmet';
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
      {/* TODO: fix so that props flow to childres
       <Helmet>
        {helmetStyles === 1 ? <link rel="stylesheet" href="./helmet.css" /> : null}
      </Helmet> */}
      <h1 className={styles === 0 ? 'light' : 'dark'}>Here I Am!</h1>
      <br /><br />
      <button onClick={handleClick}>Style On/Off</button>
      <br /><br />
      <p onClick={handleClick}>Or Click Here</p>
      <br />
      <h2 className={`${styles === 0 ? 'light' : 'dark'}app`}>Do I change too?</h2>
      <br /><br />
      <HelmetTest />
    </>
  );
}

export default App;
