"use client";

import styles from "./FlipCard.module.css";
import { useState } from "react";
import { Image } from "@/components/atoms/Image";

import { Flip } from "@/lib/svg-imports";

export const FlipCard = ({
  frontContent,
  frontImg,
  frontAlt,
  backContent,
  backImg,
  backAlt,
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={styles.cardContainer}>
      <div
        className={`${styles.card} ${flipped ? styles.flipped : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className={styles.front}>
          <Flip className={styles.flipIcon} />
          {frontContent ? (
            <div className={styles.content}>{frontContent}</div>
          ) : frontImg ? (
            <Image src={frontImg} alt={frontAlt} className={styles.img} />
          ) : (
            <Image
              src="/assets/img/ui/question-mark.gif"
              alt="Question mark gif"
              className={styles.placeholderImg}
            />
          )}
        </div>
        <div className={styles.back}>
          {backContent ? (
            <div className={styles.content}>{backContent}</div>
          ) : backImg ? (
            <Image src={backImg} alt={backAlt} className={styles.img} />
          ) : null}
        </div>
      </div>
    </div>
  );
};
