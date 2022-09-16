import React from 'react';
import './Images.css';

function Images(props) {
  return (
    <div>
        <img src={props.urls.small} alt='here' />
    </div>
  )
}

export default Images