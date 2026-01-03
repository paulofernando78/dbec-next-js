"use client";

import styles from "./InlineText.module.css";

import { Audio } from "@/components/atoms/Audio";
import { Bold } from "@/components/atoms/Bold";
import { Italic } from "@/components/atoms/Italic";
import { Mark } from "@/components/atoms/Mark";
import { Underline } from "@/components/atoms/Underline";
import { Portuguese } from "@/components/atoms/Portuguese";
import { Correct, Incorrect, Attention } from "@/lib/svg-imports";

export const InlineText = ({ text, audio }) => {
  if (!text) return null;

  if (typeof text === "string") return text;

  if (!Array.isArray(text)) return null;

  return (
    <span className={styles.text}>
      <span>{audio && <Audio src={audio} />}</span>
      {text.map((part, i) => {
        if (typeof part === "string") return part;

        let content = part.text;

        switch (part.type) {
          case "bold":
            content = <Bold>{part.text}</Bold>;
            break;
          case "italic":
            content = <Italic>{part.text}</Italic>;
            break;
          case "mark":
            content = <Mark>{part.text}</Mark>;
            break;
          case "underline":
            content = <Underline>{part.text}</Underline>;
            break;
          case "translation":
            content = <Portuguese>{part.text}</Portuguese>;
            break;
        }

        return (
          <span key={i}>
            {part.correct && <Correct className="icon-position" />}
            {part.incorrect && <Incorrect className="icon-position" />}
            {part.important && <Attention className="icon-position" />}
            {part.audio && <Audio src={part.audio} />}
            {content}
          </span>
        );
      })}
    </span>
  );
};
