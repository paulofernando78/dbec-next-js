"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";
import { ArrowUp } from "@/lib/svg-imports.js";

export const ScrollToTop = ({ containerSelector = "main" }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const onScroll = () => {
      setVisible(container.scrollTop > 300);
    };

    container.addEventListener("scroll", onScroll);

    // run once in case the page is already scrolled
    onScroll();

    return () => {
      container.removeEventListener("scroll", onScroll);
    };
  }, [containerSelector]);

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
      aria-label="Scroll to top"
      className={`${styles.button} ${visible ? styles.visible : ""}`}
    >
      <ArrowUp />
    </button>
  );
};
