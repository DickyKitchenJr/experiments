import React from 'react';
import Hand from '../assets/images/drippingHand.png';
import styles from '../styles/imagegrid.module.css';

function ImageGrid() {
  return (
    <div className={styles.imagediv}>
      <img src={Hand} alt="dripping hand" width={300} height={300} />
      <img src={Hand} alt="dripping hand" width={300} height={300}/>
    </div>
  )
}

export default ImageGrid
