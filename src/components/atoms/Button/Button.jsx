"use client"

import styles from "./Button.module.css"

export default function Button({ icon, onToggle, active }) {

  if (icon === "menu") {
    return (
      <button
      className={`${styles.button} ${active ? styles.active : ""}`}
      onClick={onToggle}
      id={styles.btnMenu}>
        <div className={`${styles.menuBtn} ${!active ? styles.active : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    )
  }

  return (
    <button
    className={`${styles.button} ${active ? styles.active : ""}`}
    onClick={onToggle}>

    {icon}
    </button>
  )
  
}
