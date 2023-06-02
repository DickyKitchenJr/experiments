import React, { useState } from "react";
import styles from "../styles/modal.module.css";

function Modal() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    if (!modalOpen) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  };

  return (
    <>
      {!modalOpen ? (
        <div className={styles.authorBox} onClick={handleClick}>
          <p>
            <strong>Name:</strong> Dicky Kitchen Jr
          </p>
          <p className={styles.overflow}>
            <strong>Genres Published:</strong> Psychological Thriller, Domestic
            Thriller, Children's Tongue Twister
          </p>
        </div>
      ) : (
        <div className={styles.authorModal} onClick={handleClick}>
          <p>
            <strong>Name:</strong> Dicky Kitchen Jr
          </p>
          <p>
            <strong>Genres Published:</strong> Psychological Thriller, Domestic
            Thriller, Children's Tongue Twister
          </p>
          <p>
            <strong>Bio:</strong> Here is the coolest author you'll ever meet...
            or read. Seriously! Just look how cool this author's books are! They
            are absolutely insanely unbelievably AMAZING!
          </p>
          <p><strong>Website:</strong> www.awesomeauthor.com</p>
          <p><strong>Social Media:</strong> This author is too cool for this</p>
        </div>
      )}
    </>
  );
}

export default Modal;
