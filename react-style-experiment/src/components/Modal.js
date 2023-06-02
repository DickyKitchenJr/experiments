import React, { useState } from "react";
import styles from "../styles/modal.module.css";

function Modal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("")

  const handleClick = () => {
    if (!modalOpen) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  };

  return (
    <>
      <div
        className={styles.authorBox}
        onClick={() => {
          handleClick();
          setName("Dicky");
        }}
      >
        <p>
          <strong>Name:</strong> Dicky Kitchen Jr
        </p>
        <p className={styles.overflow}>
          <strong>Genres Published:</strong> Psychological Thriller, Domestic
          Thriller, Children's Tongue Twister
        </p>
      </div>
      <div
        className={styles.authorBox}
        onClick={() => {
          handleClick();
          setName("Other");
        }}
      >
        <p>
          <strong>Name:</strong> Some Other Guy
        </p>
        <p className={styles.overflow}>
          <strong>Genres Published:</strong> Silly books about nothing
        </p>
      </div>
      {modalOpen && name === "Dicky" ? (
        <div className={styles.authorModal} onClick={handleClick}>
          <div className={styles.authorInfo}>
            <p>
              <strong>Name:</strong> Dicky Kitchen Jr
            </p>
            <p>
              <strong>Genres Published:</strong> Psychological Thriller,
              Domestic Thriller, Children's Tongue Twister
            </p>
            <p>
              <strong>Bio:</strong> Here is the coolest author you'll ever
              meet... or read. Seriously! Just look how cool this author's books
              are! They are absolutely insanely unbelievably AMAZING!
            </p>
            <p>
              <strong>Website:</strong> www.awesomeauthor.com
            </p>
            <p>
              <strong>Social Media:</strong> This author is too cool for this
            </p>
          </div>
        </div>
      ) : null}
      {modalOpen && name === "Other" ? (
        <div className={styles.authorModal} onClick={handleClick}>
          <div className={styles.authorInfo}>
            <p>
              <strong>Name:</strong> Some Other Guy
            </p>
            <p>
              <strong>Genres Published:</strong> Silly books about nothing
            </p>
            <p>
              <strong>Bio:</strong> much less cool than the other guy, but meh,
              he's ok I guess
            </p>
            <p>
              <strong>Website:</strong> www.lesscoolauthor.com
            </p>
            <p>
              <strong>Social Media:</strong> desparately on all of them
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
