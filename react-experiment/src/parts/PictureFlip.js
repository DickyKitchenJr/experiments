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
  console.log(images[0]);

  // creates a useEffect that, when called, will retrieve information from the unsplash api
  useEffect(() => {
    const fetchImages = async() => {
      const response = await fetch(urlRequest)
      const data = await response.json()
      setImages(data)
    }

    // calls the unsplash api
    fetchImages()
  }, [])

  return (
    <>
      <h1>Hi</h1>
      {images.map((image) => (
        <Images key={image.id} {...image} />
      ))}
      <button type='button'>More Pictures</button>
    </>
  );
}

export default PictureFlip