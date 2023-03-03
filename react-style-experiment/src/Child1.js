import React from 'react'

function Child1(props) {
  return (
    <>
      {console.log(`Child 1 style is ${props.styling}`)}
      <div>
        <p className={`${props.styling}app`}>I am child one</p>
      </div>
    </>
  );
}

export default Child1
