import React from "react";
import { useState } from "react";
import "./PictureFlip.css";
import Greeting from "./Greeting";
import NewImage from "./NewImage";
import CatImages from "./CatImages";
import DogImages from "./DogImages";

// GOAL: = to retrieve images from unsplash api and display new images when a button is clicked

function PictureFlip() {
  const [radioSelect, setRadioSelect] = useState("random");

  const handleChange = (e) => {
    setRadioSelect(e.target.value);
  };

  // TODO: send data to <Image /> to display selected pictures to the user

  return (
    <>
      <Greeting />
      <div>
        <label>
          <input
            type="radio"
            name="pictureSelect"
            value="random"
            checked={radioSelect === "random"}
            onChange={handleChange}
          ></input>
          Random
        </label>
        <label>
          <input
            type="radio"
            name="pictureSelect"
            value="cats"
            checked={radioSelect === "cats"}
            onChange={handleChange}
          ></input>
          Cats
        </label>
        <label>
          <input
            type="radio"
            name="pictureSelect"
            value="dogs"
            checked={radioSelect === "dogs"}
            onChange={handleChange}
          ></input>
          Dogs
        </label>
      </div>
      {radioSelect === "random" ? <NewImage /> : null}
      {radioSelect === "cats" ? <CatImages /> : null}
      {radioSelect === "dogs" ? <DogImages /> : null}
    </>
  );
}

export default PictureFlip;
