"use client";

import styles from "./ScrollToTop.module.css";

import { useEffect, useState } from "react";
import { ArrowUp } from "@/lib/svg-imports.js";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const content = document.getElementById("content-scroll");

    if (!content) return;

    const handleScroll = () => {
      setVisible(content.scrollTop > 300);
    };

    // run once in case the page is already scrolled
    handleScroll();

    content.addEventListener("scroll", handleScroll);

    return () => {
      content.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    const content = document.getElementById("content-scroll");

    content?.scrollTo({
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
