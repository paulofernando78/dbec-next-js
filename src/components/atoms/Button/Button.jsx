"use client"

import styles from "./Button.module.css"
import { lightMode, darkMode } from "@/lib/svg-imports"
import { useState } from "react"

export default function Button({ id, icon, onClick }) {
const [active, setActive] = useState(false);

const icons = {
  light: lightMode,
  dark: darkMode
}

function handleClick(e) {
  setActive(!active);
  if (onClick) onClick(e);
}
const selectedIcon = icons[icon]

  return (
    <>
      <button id={id} className={styles.button} onClick={handleClick}>
      {icon === "menu" && (
        <div className={`${styles.menuBtn} ${active ? styles.active : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      {icon && icon !== "menu" && (
        <span dangerouslySetInnerHTML={{ __html: selectedIcon}}></span>
      )}

      {icon && null}
      </button>
    </>
  )
}
