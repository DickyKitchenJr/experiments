import React from 'react';
import { useState, useEffect } from 'react';
import './PictureFlip.css';
import Images from './Images';

const unsplashUrl = "https://api.unsplash.com/";
const accessKey = `${process.env.REACT_APP_UNSPLASH_access_key}`;
const urlRequest = unsplashUrl + "photos?client_id=" + accessKey;


// GOAL = to retrieve images from unsplash api and display one image at a time that the user can push a button to advance to the next image

function PictureFlip() {
  const [images, setImages] = useState([]);
  const [click, setClick] = useState(0);
  console.log(click);

  // creates a useEffect that, when called, will retrieve information from the unsplash api
  useEffect(() => {
    const fetchImages = async() => {
      const response = await fetch(urlRequest)
      const data = await response.json()
      setImages(data)
    }
    // calls the unsplash api
    fetchImages()
  }, [click])

  return (
    <>
      <h1>Hi. Enjoy these random pictures.</h1>
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

export default PictureFlip