import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaughSquint } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [press, setPress] = useState("");

  const smile = <FontAwesomeIcon icon={faFaceLaughSquint} className="smile" />;

  const handleClickCenter = () => {
    if (press === "") {
      setPress("center");
    }
  };

  const handleClickTopLeft = () => {
    if (press === "") {
      setPress("topLeft");
    }
  };

  const handleClickTopRight = () => {
    if (press === "") {
      setPress("topRight");
    }
  };

  const resetPressForTopLeft = () => {
    setTimeout(() => {
      setPress("");
    }, 800);
  };

  const resetPressForCenter = () => {
    if (press === "center") {
      setTimeout(() => {
        setPress("");
      }, 600);
    }
  };

  const resetPressForTopRight = () => {
    setTimeout(() => {
      setPress("");
    }, 800);
  };

  // GOAL: to create a grid of blocks that trigger an animation when each block is clicked
  return (
    <>
      <div className="block-group">
        <div
          className="block topLeft"
          onClick={() => handleClickTopLeft()}
          press={press}
          onAnimationEnd={() => resetPressForTopLeft()}
        >
          <p>{smile}</p>
        </div>
        <div className="block topCenter" press={press}>
          <p>{smile}</p>
        </div>
        <div
          className="block topRight"
          onClick={() => handleClickTopRight()}
          press={press}
          onAnimationEnd={() => resetPressForTopRight()}
        >
          <p>{smile}</p>
        </div>
        <div className="block middleLeft" press={press}>
          <p>{smile}</p>
        </div>
        <div
          className="block middleCenter"
          onClick={() => handleClickCenter()}
          onAnimationEnd={() => resetPressForCenter()}
          press={press}
        >
          <p>{smile}</p>
        </div>
        <div className="block middleRight" press={press}>
          <p>{smile}</p>
        </div>
        <div className="block bottomLeft" press={press}>
          <p>{smile}</p>
        </div>
        <div className="block bottomCenter" press={press}>
          <p>{smile}</p>
        </div>
        <div className="block bottomRight" press={press}>
          <p>{smile}</p>
        </div>
      </div>
    </>
  );
}

export default App;
