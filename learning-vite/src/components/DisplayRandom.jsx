import React from 'react';
import randomize from './Random';

function DisplayRandom() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let newNumbers = randomize(numbers);


  return (
    <div>
      <h2>The numbers 1 through 10 at random are:</h2>
      <p>{newNumbers.map(number => <span>{number} </span>)}</p>
    </div>
  )
}

export default DisplayRandom
