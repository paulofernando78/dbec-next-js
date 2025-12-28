import styles from "./FillInTheBlanks.module.css";

import React from "react";

export const FillInTheBlanks = ({ exercises }) => {
  return (
    <>
      <p>{exercises.instructions}</p>
      <div>
        {exercises.texts.map((t, index) => (
          <React.Fragment key={index}>
            <p className={styles.text}>{t.text}</p>
            <input type="text" className={styles.blank}/>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
