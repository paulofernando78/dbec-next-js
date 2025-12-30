"use client";

import styles from "./Paragraph.module.css";
import {
  UnderConstruction,
  Exclamation,
  Correct,
  Incorrect,
} from "@/lib/svg-imports";
import Image from "next/image";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { Audio } from "@/components/atoms/Audio";
import { Bold } from "@/components/atoms/Bold";
import { Mark } from "@/components/atoms/Mark";
import { Italic } from "@/components/atoms/Italic";

function renderInlineText(text) {
  if (typeof text === "string") return text;

  return text.map((part, i) => {
    if (typeof part === "string") return part;

    const content = (() => {
      switch (part.type) {
        case "bold":
          return <Bold>{part.text}</Bold>;
        case "italic":
          return <Italic>{part.text}</Italic>;
        case "mark":
          return <Mark>{part.text}</Mark>;
        default:
          return null;
      }
    })();

    return (
      <span key={i}>
        {part.audio && <Audio src={part.audio} />}
        {content}
      </span>
    );
  });
}

export const Paragraph = ({
  className,
  imgSrc,
  imgAlt,
  imgPosition = "left",
  width,
  height,
  paragraphs,
  lang,
  underConstruction,
  exclamation,
  correct,
  incorrect,
  audio,
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
        <p key={pIndex}>{renderInlineText(p.text)}</p>
      ))}
    </div>
  );
};
