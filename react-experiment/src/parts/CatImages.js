import React from 'react';
import { useState, useEffect } from "react";
import "./Images.css"; 

function CatImages() {
  // PURPOSE: useState for API data to be set
  const [pictures, setPictures] = useState([]);

  // PURPOSE: API call address
  const unsplashUrl = "https://api.unsplash.com/";
  const accessKey = `${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
  const urlRequestCats =
    unsplashUrl +
    "search/photos?query=cats&page=1&per_page=10&client_id=" +
    accessKey;

  // PURPOSE: useEffect for calling API and setting data in setPictures
  useEffect(() => {
    fetch(urlRequestCats)
      .then((res) => res.json())
      .then((json) => {
        const photos = json["results"].map((data) => {
          return {
            id: data.id,
            user: data.user.first_name,
            img: data.urls.small,
            html: data.links.html,
          };
        });
        console.log(photos);
        setPictures(photos);
      });
  }, []);

  return (
    <>
      {pictures?.length > 0 && (
        <div>
          {pictures.map((photo) => {
            return (
              <div key={photo.id} className="images">
                <img src={photo.img} alt="random pic" />

                <h3>
                  Picture by: &nbsp;
                  <a href={photo.html} target="_blank" rel="noreferrer">
                    {photo.user}
                  </a>
                </h3>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default CatImages
