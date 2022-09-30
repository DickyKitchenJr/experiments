import React from "react";
import { useState } from "react";
import "./PictureFlip.css";
import Images from "./Images";
import Greeting from "./Greeting";

const unsplashUrl = "https://api.unsplash.com/";
const accessKey = `${process.env.REACT_APP_UNSPLASH_access_key}`;

const urlRequestRandom = unsplashUrl + "photos?client_id=" + accessKey;

const urlRequestCats =
  unsplashUrl +
  "search/photos?query=cats&page=1&per_page=10&client_id=" +
  accessKey;

const urlRequestDogs =
  unsplashUrl +
  "search/photos?query=dogs&page=1&per_page=10&client_id=" +
  accessKey;

// GOAL: = to retrieve images from unsplash api and display new images when a button is clicked

function PictureFlip() {
  const [images, setImages] = useState([]);
  const [radioSelect, setRadioSelect] = useState("random");

  const handleChange = (e) => {
    setRadioSelect(e.target.value);
  };

  // PURPOSE: variable to be used to store data returned by API

  let pictures;

  // PURPOSE: functions to call API using 3 different queries and return data to pictures variable

  const RandomPics = () => {
    fetch(urlRequestRandom)
      .then((res) => res.json())
      .then((json) => {
        pictures = json.map((data) => {
          return {
            id: data.id,
            user: data.user.first_name,
            img: data.urls.small,
            html: data.links.html,
          };
        });
      });
    return pictures;
  };

  const CatPics = () => {
    fetch(urlRequestCats)
      .then((res) => res.json())
      .then((json) => {
        pictures = json["results"].map((data) => {
          return {
            id: data.id,
            user: data.user.first_name,
            img: data.urls.small,
            html: data.links.html,
          };
        });
      });
    return pictures;
  };

  const DogPics = () => {
    fetch(urlRequestDogs)
      .then((res) => res.json())
      .then((json) => {
        pictures = json["results"].map((data) => {
          return {
            id: data.id,
            user: data.user.first_name,
            img: data.urls.small,
            html: data.links.html,
          };
        });
      });
    return pictures;
  };

  // TODO: create conditional where radioSelect value determines if RandomPics, DogPics, or CatPics is called
  // FIXME: returning undefined when console.log(userSelection()) within the return
  // Possible workaround - create 3 Image functions, each with either RandomPics, DogPics, or CatPics, then make the display of <Image /> conditional
  const UserSelection = () => {
    if (radioSelect === "random") {
      RandomPics();
    } else if (radioSelect === "cats") {
      CatPics();
    } else {
      DogPics();
    }
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
    </>
  );
}

export default PictureFlip;
