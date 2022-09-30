import React from 'react'

function NewImage() {

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

  return (
    <>
      <img src={props.img} alt="random pic" loading="lazy" />

      <h3>
        Picture by:{" "}
        <a href={props.html} target="_blank" rel="noreferrer">
          {props.user}
        </a>
      </h3>
    </>
  );
}

export default NewImage
