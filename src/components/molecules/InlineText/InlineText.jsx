"use client";

import styles from "./InlineText.module.css";

import { Audio } from "@/components/atoms/Audio";
import { Bold } from "@/components/atoms/Bold";
import { Italic } from "@/components/atoms/Italic";
import { Mark } from "@/components/atoms/Mark";
import { Underline } from "@/components/atoms/Underline";
import { Phonetics } from "@/components/atoms/Phonetics";
import { Portuguese } from "@/components/atoms/Portuguese";
import { Correct, Incorrect, Attention } from "@/lib/svg-imports";

export const InlineText = ({
  important,
  correct,
  incorrect,
  audio,
  text,
  phonetics,
  portuguese,
}) => {
  return (
    <span className={styles.text}>
      {important && <Attention className="icon-position" />}
      {correct && <Correct className="icon-position" />}
      {incorrect && <Incorrect className="icon-position" />}
      <span>{audio && <Audio src={audio} />}</span>

      {Array.isArray(text) &&
        text.map((part, i) => {
          if (typeof part === "string") return part;

          let content = part.part;

          switch (part.type) {
            case "bold":
              content = <Bold>{part.part}</Bold>;
              break;
            case "italic":
              content = <Italic>{part.part}</Italic>;
              break;
            case "mark":
              content = <Mark>{part.part}</Mark>;
              break;
            case "underline":
              content = <Underline>{part.part}</Underline>;
              break;
          }

          return (
            <span key={i}>
              {part.important && <Attention className="icon-position" />}
              {part.correct && <Correct className="icon-position" />}
              {part.incorrect && <Incorrect className="icon-position" />}
              {part.audio && <Audio src={part.audio} />}
              {content && content}
            </span>
          );
        })}
      {phonetics && (
        <Phonetics>
          <span>{phonetics}</span>
        </Phonetics>
      )}
      {portuguese && (
        <Portuguese>
          <span>{portuguese}</span>
        </Portuguese>
      )}
    </span>
  );
};
