import React from "react";
import { useState, useEffect } from "react";
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


// GOAL = to retrieve images from unsplash api and display new images when a button is clicked

function PictureFlip() {
  const [images, setImages] = useState([]);
  // images2 created to experiment with api request without breaking page
  const [click, setClick] = useState(0);

  // creates a useEffect that, when called, will retrieve information from the unsplash api
  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(urlRequestRandom);
      const data = await response.json();
      setImages(data);
      // console.log(data);
      //  remove console.log later
    };
    // calls the unsplash api
    fetchImages();
  }, [click]);

  // TODO: implement Brian Jenney's solution and check for understanding


  return (
    <>
      <Greeting />
      {images.map((image) => (
        <Images key={image.id} {...image} />
      ))}
      {/* trying to use onClick to change the click state and re-trigger the useEffect, but it's not working... why? */}
      <button type="button" onClick={() => setClick(click + 1)}>
        More Pictures
      </button>
    </>
  );
}

export default PictureFlip;
