import React from 'react';
import './Images.css';

function Images(props) {
  return (
    <>
    <img src={props.urls.small} alt='random pic' loading='lazy' />
    <div>
        <h3>Picture by: {props.user.first_name}</h3>
        <img src={props.user.profile_image.small} alt='user profile'/>
    </div>
    
    </>
  )
}

export default Images