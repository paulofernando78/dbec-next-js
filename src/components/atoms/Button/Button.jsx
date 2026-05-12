"use client";

import { useState } from "react";
import styles from "./Button.module.css";

export const Button = ({
  icon,
  onClick,
  onToggle,
  active,
  className,
  ...props
}) => {
  const [pressed, setPressed] = useState(false);
  const handleClick = onClick || onToggle;

  if (icon === "menu") {
    return (
      <button
        className={`
          ${className}
          ${styles.pushable}
          ${styles.btnMenu}
          ${pressed ? styles.active : ""}
        `}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onClick={handleClick}
      >
        <span className={styles.shadow}></span>
        <span className={styles.edge}></span>
        <span className={styles.front}>
          <div className={`${styles.menuBtn} ${active ? styles.active : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </span>
      </button>
    );
  }

  return (
    <button
      className={`${className} ${styles.pushable} ${pressed ? styles.active : ""}`}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onClick={handleClick}
      {...props}
    >
      <span className={styles.shadow}></span>
      <span className={styles.edge}></span>
      <span className={styles.front}>{icon}</span>
    </button>
  );
};
