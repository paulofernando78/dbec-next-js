"use client";

import styles from "./ScrollToTop.module.css";
import { ArrowUp } from "@/lib/svg-imports.js";

export const ScrollToTop = ({ containerSelector = "main" }) => {
  const handleClick = () => {
    const container = document.querySelector(containerSelector);

    container?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      arial-label="Scroll to top"
      className={styles.button}
    >
      <ArrowUp />
    </button>
  );
};
