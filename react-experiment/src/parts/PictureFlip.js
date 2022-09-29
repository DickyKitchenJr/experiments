import React from "react";
import { useState, useEffect } from "react";
import "./PictureFlip.css";
import Images from "./Images";
import Greeting from "./Greeting";
import Images2 from "./Images2";

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

let pictures;

// GOAL = to retrieve images from unsplash api and display new images when a button is clicked

function PictureFlip() {
  const [images, setImages] = useState([]);
  const [radioSelect, setRadioSelect] = useState("random")

  // creates a useEffect that, when called, will retrieve information from the unsplash api
  // useEffect(() => {
  //   const fetchImages = async () => {
  //     const response = await fetch(urlRequestRandom);
  //     const data = await response.json();
  //     setImages(data);
  //   };
  //   fetchImages();
  // }, [click]);


  const handleChange = (e) => {
    setRadioSelect(e.target.value)
  }

  // TODO: implement Brian Jenney's solution and check for understanding
  // TODO: figure out how to take data and set it to setImages; perhaps conditionally?
  // TODO: conditionally assign data retrieved to Image2 depending on which radio button is selected
  const RandomPics =
    fetch(urlRequestRandom)
    .then((res) => res.json())
    .then((json) => {
      // console.log(json);
      pictures = (json).map((data) => {
        return {
          id: data.id,
          user: data.user.first_name,
          img: data.urls.small,
          html: data.links.html
        };
      });
      // console.log(pictures);
      // for (const thing in pictures){
      //   console.log(pictures[thing]);
      // };
    });

  const CatPics = () => {
    fetch(urlRequestCats)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json["results"]);
        const pictures = json["results"].map((data) => {
          return {
            id: data.id,
            user: data.user.first_name,
            img: data.urls.small,
            html: data.links.html,
          };
        });
        // console.log(pictures);
        // for (const thing in pictures) {
        //   console.log(pictures[thing]);
        // }
      });
  };

  const DogPics = () => {
    fetch(urlRequestDogs)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json["results"]);
        const pictures = json["results"].map((data) => {
          return {
            id: data.id,
            user: data.user.first_name,
            img: data.urls.small,
            html: data.links.html,
          };
        });
        // console.log(pictures);
        // for (const thing in pictures) {
        //   console.log(pictures[thing]);
        // }
      });
  };


  return (
    <>
      <Greeting />
      {/* calling RandomPics, CatPics, DogPics to retrieve console.log info */}
      {/* <RandomPics /> */}
      <CatPics />
      <DogPics />
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

      {/* {images.map((image) => (
        <Images key={image.id} {...image} />
      ))} */}
    </>
  );
}

export default PictureFlip;
