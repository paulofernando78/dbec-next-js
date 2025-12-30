"use client";

import styles from "./Paragraph.module.css";
import {
  Correct,
  Incorrect,
} from "@/lib/svg-imports";
import Image from "next/image";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { Audio } from "@/components/atoms/Audio";
import { InlineText } from "@/components/molecules/InlineText";

export const Paragraph = ({
  imgSrc,
  imgPosition = "left",
  width,
  height,
  paragraphs,
}) => {
  const hasImage = Boolean(imgSrc);

  return (
    <div
      className={[hasImage && styles.withImage, hasImage && styles[imgPosition]]
        .filter(Boolean)
        .join(" ")}
    >
      {hasImage && (
        <Image
          src={img}
          alt={alt}
          width={width || 200}
          height={height || 200}
          className={styles.image}
        />
      )}
      {paragraphs.map((p, pIndex) => (
        <div key={pIndex}>
          <p>
            {p.correct && <Correct src={p.correct} className="icon-position"/>}
            {p.incorrect && <Incorrect src={p.incorrect} className="icon-position"/>}
            {p.audio && <Audio src={p.audio} />}
            <InlineText text={p.text} />
          </p>
        </div>
      ))}
    </div>
  );
};
