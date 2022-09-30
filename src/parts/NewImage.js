import React from "react";
import { useState, useEffect } from "react";
import "./Images.css";

function NewImage() {
  // PURPOSE: useState for API data to be set
  const [pictures, setPictures] = useState([]);

  // PURPOSE: API call address
  const unsplashUrl = "https://api.unsplash.com/";
  const accessKey = `${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
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

        console.log(photos);
        setPictures(photos);
        // FIXME: pictures not being updated by setPictures(photos), why?
      });
  }, []);

  return (
    <div>
      {pictures?.length > 0 && (
        <div className="images">
          {pictures.map((photo) => {
            return (
              <div key={photo.id} className="image">
                <img src={photo.img} alt={photo.user} />
                <p>{photo.user}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default NewImage;
