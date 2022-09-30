import React from "react";
import { useState, useEffect } from "react";
import "./Images.css";

function NewImage() {
// PURPOSE: useState for API data to be set
const [pictures, setPictures] = useState(null)

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
        // FIXME: pictures not being updated by setPictures(photos), why?
        if(pictures){console.log(pictures);}
      });
  }, [])

//   PURPOSE: iterate through pictures and return img and text for each
// FIXME: pictures remains null, not updating through useEffect, why?
  const ShowPhotos = () =>{
    for(const items in pictures){
       return <><img src={items.img} alt="random pic" loading="lazy" />
       <h3>
        Picture by:
        <a href={items.html} target="_blank" rel="noreferrer">
          {items.user}
        </a>
      </h3></>
    }
  }
  
  return (
    <>
    {pictures && <ShowPhotos />}
    </>
  );
}

export default NewImage;
