"use client";

import { useState } from "react";
import styles from "./Button.module.css";

export const Button = ({ icon, onClick, onToggle, active, ...props }) => {
  const [pressed, setPressed] = useState(false);
  const handleClick = onClick || onToggle;

  if (icon === "menu") {
    return (
      <button
        className={`${styles.button} ${active ? styles.active : ""}`}
        onClick={handleClick}
        id={styles.btnMenu}
      >
        <div className={`${styles.menuBtn} ${active ? styles.active : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    );
  }

  return (
    <button
      className={`${styles.button} ${active || pressed ? styles.active : ""}`}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      
      onClick={handleClick}
      {...props}
    >
      {icon}
    </button>
  );
};
