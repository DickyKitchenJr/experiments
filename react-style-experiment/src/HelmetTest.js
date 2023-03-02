import React, { useState } from 'react';


function HelmetTest() {
const [helmetStyles, setHelmetStyle] = useState(0);

const handleClick = () => {
  if (helmetStyles === 0) {
    setHelmetStyle(1);
  } else {
    setHelmetStyle(0);
  }
};

  return (
    <>
    <button onClick={handleClick}>Should Change below</button>
     <h2 className='helmet'>To Be Used Ror React Helmet Test</h2> 
    </>
  )
}

export default HelmetTest
