import React, { useState } from 'react';
import "./App.css";

function App() {
  const [press, setPress] = useState('');

  const handleClickCenter = () => {
    if(press === ''){
      setPress('center');
    }
  }

  const handleClickTopLeft = () => {
    if(press === ''){
      setPress("topLeft");
    }
  };

  const resetPress = () =>{
    setTimeout(() => {
      setPress('')
    }, 1000);
  }

  const resetPressforCenter = () => {
    setTimeout(() => {
      setPress("");
    }, 600);
  };

  // GOAL: to create a grid of blocks that trigger an animation when each block is clicked
  return (
    <>
      <div className="block-group">
        <div
          className="block topLeft"
          onClick={() => handleClickTopLeft()}
          press={press}
          onAnimationEnd={() => resetPress()}
        >
          <p>X</p>
        </div>
        <div className="block topCenter" press={press}>
          <p>X</p>
        </div>
        <div className="block topRight" press={press}>
          <p>X</p>
        </div>
        <div className="block middleLeft" press={press}>
          <p>X</p>
        </div>
        <div
          className="block middleCenter"
          onClick={() => handleClickCenter()}
          onAnimationEnd={() => resetPressforCenter()}
          press={press}
        >
          <p>X</p>
        </div>
        <div className="block middleRight" press={press}>
          <p>X</p>
        </div>
        <div className="block bottomLeft" press={press}>
          <p>X</p>
        </div>
        <div className="block bottomCenter" press={press}>
          <p>X</p>
        </div>
        <div className="block bottomRight" press={press}>
          <p>X</p>
        </div>
      </div>
    </>
  );
}

export default App;
