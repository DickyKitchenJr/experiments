import React from 'react';
import { useState, useEffect } from 'react';
import './PictureFlip.css';

const unsplashUrl = "https://api.unsplash.com/";
const accessKey = `${process.env.REACT_APP_UNSPLASH_access_key}`;
const urlRequest = unsplashUrl + "photos?client_id=" + accessKey;


function PictureFlip() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async() => {
      const response = await fetch(urlRequest)
      const data = await response.json()
      setImages(data)
    }

    fetchImages()
  }, [])

  return (
    <>
      <h1>{images.length}</h1>
    </>
  )
}

export default PictureFlip