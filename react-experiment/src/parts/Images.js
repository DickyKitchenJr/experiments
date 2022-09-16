import React from 'react';
import './Images.css';

function Images(props) {
  return (
    <>
    <img src={props.urls.small} alt='random pic' loading='lazy' />
    
    <h3>Picture by: <a href={props.user.links.html} target='_blank' rel='noreferrer'>{props.user.first_name}</a></h3>   
    </>
  )
}

export default Images