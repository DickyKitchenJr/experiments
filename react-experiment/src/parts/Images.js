import React from 'react';
import './Images.css';

function Images(props) {
  return (
    <div>
        <img src={props.urls.small} alt='here' loading='lazy' />
    </div>
  )
}

export default Images