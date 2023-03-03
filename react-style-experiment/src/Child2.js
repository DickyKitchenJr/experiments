import React from 'react'

function Child2(props) {
  return (
    <>
      {console.log(`Child 2 style is ${props.styling}`)}
      <div>
        <p className={`${props.styling}app`}>I am child 2</p>
      </div>
    </>
  );
}

export default Child2
