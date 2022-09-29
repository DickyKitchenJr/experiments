import React from 'react'
import "./Images.css";

function Images2(props) {
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

export default Images2
