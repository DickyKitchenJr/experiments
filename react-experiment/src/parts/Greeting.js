import React from 'react';
import { useState } from 'react';
import './Greeting.css';

function Greeting() {
  const [userName, setUserName] = useState('Default User')
    
  return (
    <>
      <h1>Hi {userName}. Enjoy these random pictures.</h1>
    </>
  );
}

export default Greeting