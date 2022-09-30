import React from "react";
import { useState, useEffect } from "react";
import "./Images.css";

function NewImage() {
  // PURPOSE: useState for API data to be set
  const [pictures, setPictures] = useState(null);
  // PURPOSE: useState to update onClick count to trigger useEffect
  const [clickCount, setClickCount] = useState(0)

  // PURPOSE: API call address
  const unsplashUrl = "https://api.unsplash.com/";
  const accessKey = `${process.env.REACT_APP_UNSPLASH_access_key}`;
  const urlRequestRandom = unsplashUrl + "photos?client_id=" + accessKey;

  // PURPOSE: useEffect for calling API and setting data in setPictures
  useEffect(() => {
    fetch(urlRequestRandom)
      .then((res) => res.json())
      .then((json) => {
        const photos = json.map((data) => {
          return {
            id: data.id,
            user: data.user.first_name,
            img: data.urls.small,
            html: data.links.html,
          };
        });
        setPictures(photos);
        // FIXME: pictures not being updated initially by setPictures(photos), why?
        if (clickCount >= 1 && pictures) {
          console.log(pictures);
        }
      });
  }, [clickCount]);

  //   PURPOSE: iterate through pictures and return img and text for each
  // FIXME: pictures remains null, not updating through useEffect, why?
  const ShowPhotos = () => {
    for (const items in pictures) {
      return (
        <>
          <img src={items.img} alt="random pic" loading="lazy" />
          <h3>
            Picture by:
            <a href={items.html} target="_blank" rel="noreferrer">
              {items.user}
            </a>
          </h3>
        </>
      );
    }
  };

  // PURPOSE: update clickCount to trigger useEffect re-render
  const clickPlusOne = () => {
    setClickCount(clickCount +1)
    console.log(clickCount)
  }

  return <>
  <button onClick={() => {clickPlusOne()}} onChange={() => console.log(pictures)}>Here</button>

  
  {(clickCount >= 1) && <ShowPhotos />}</>;
}

export default NewImage;
