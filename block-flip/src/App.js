import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaughSquint } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [press, setPress] = useState("");

  const smile = <FontAwesomeIcon icon={faFaceLaughSquint} className="smile" />;

  //PURPOSE: handle click for each block

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

  const handleClickBottomLeft = () => {
    if (press === "") {
      setPress("bottomLeft");
    }
  };

  const handleClickBottomRight = () => {
    if (press === "") {
      setPress("bottomRight");
    }
  };

  const handleClickTopCenter = () => {
    if (press === "") {
      setPress("topCenter");
    }
  };

  const handleClickMiddleLeft = () => {
    if (press === "") {
      setPress("middleLeft");
    }
  };

  const handleClickMiddleRight = () => {
    if (press === "") {
      setPress("middleRight");
    }
  };

  const handleClickBottomCenter = () => {
    if (press === "") {
      setPress("bottomCenter");
    }
  };

  //PURPOSE: reset press to '' after animation runs

  const resetPressForTopLeft = () => {
    setTimeout(() => {
      setPress("");
    }, 800);
  };

  const resetPressForMiddleCenter = () => {
    if (press === "center") {
      setTimeout(() => {
        setPress("");
      }, 600);
    }
  };

  const resetPressForTopRight = () => {
    if (press === "topRight") {
      setTimeout(() => {
        setPress("");
      }, 800);
    }
  };

  const resetPressForBottomLeft = () => {
    if (press === "bottomLeft") {
      setTimeout(() => {
        setPress("");
      }, 800);
    }
  };

  const resetPressForBottomRight = () => {
    if (press === "bottomRight") {
      setTimeout(() => {
        setPress("");
      }, 800);
    }
  };

  const resetPressForTopCenter = () => {
    if (press === "topCenter") {
      setTimeout(() => {
        setPress("");
      }, 700);
    }
  };

  const resetPressForMiddleLeft = () => {
    if (press === "middleLeft") {
      setTimeout(() => {
        setPress("");
      }, 700);
    }
  };

  const resetPressForMiddleRight = () => {
    if (press === "middleRight") {
      setTimeout(() => {
        setPress("");
      }, 700);
    }
  };

  const resetPressForBottomCenter = () => {
    if (press === "bottomCenter") {
      setTimeout(() => {
        setPress("");
      }, 700);
    }
  };

  // GOAL: to create a grid of blocks that trigger an animation in a wave pattern when each block is clicked
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
        <div
          className="block topCenter"
          onClick={() => handleClickTopCenter()}
          press={press}
          onAnimationEnd={() => resetPressForTopCenter()}
        >
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
        <div
          className="block middleLeft"
          onClick={() => handleClickMiddleLeft()}
          press={press}
          onAnimationEnd={() => resetPressForMiddleLeft()}
        >
          <p>{smile}</p>
        </div>
        <div
          className="block middleCenter"
          onClick={() => handleClickCenter()}
          press={press}
          onAnimationEnd={() => resetPressForMiddleCenter()}
        >
          <p>{smile}</p>
        </div>
        <div
          className="block middleRight"
          onClick={() => handleClickMiddleRight()}
          press={press}
          onAnimationEnd={() => resetPressForMiddleRight()}
        >
          <p>{smile}</p>
        </div>
        <div
          className="block bottomLeft"
          onClick={() => handleClickBottomLeft()}
          press={press}
          onAnimationEnd={() => resetPressForBottomLeft()}
        >
          <p>{smile}</p>
        </div>
        <div
          className="block bottomCenter"
          onClick={() => handleClickBottomCenter()}
          press={press}
          onAnimationEnd={() => resetPressForBottomCenter()}
        >
          <p>{smile}</p>
        </div>
        <div
          className="block bottomRight"
          onClick={() => handleClickBottomRight()}
          press={press}
          onAnimationEnd={() => resetPressForBottomRight()}
        >
          <p>{smile}</p>
        </div>
      </div>
    </>
  );
}

export default App;
