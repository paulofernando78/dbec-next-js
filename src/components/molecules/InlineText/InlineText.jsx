"use client";

import styles from "./InlineText.module.css";

import { Audio } from "@/components/atoms/Audio";
import { Bold } from "@/components/atoms/Bold";
import { Italic } from "@/components/atoms/Italic";
import { Mark } from "@/components/atoms/Mark";
import { Underline } from "@/components/atoms/Underline";
import { PartOfSpeech } from "@/components/atoms/PartOfSpeech";
import { Phonetics } from "@/components/atoms/Phonetics";
import { Portuguese } from "@/components/atoms/Portuguese";
import {
  Correct,
  Incorrect,
  Attention,
  USflag,
  UKflag,
} from "@/lib/svg-imports";

export const InlineText = ({ text = [] }) => {
  return (
    <span className={styles.text}>
      {text.map((part, i) => {
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
          case "partOfSpeech":
            content = <PartOfSpeech>{part.part}</PartOfSpeech>;
            break;
          case "phonetics":
            content = <Phonetics>{part.part}</Phonetics>;
            break;
          case "portuguese":
            content = <Portuguese>{part.part}</Portuguese>;
            break;
        }

        return (
          <span key={i}>
            {part.usFlag && <USflag className="icon-position" />}
            {part.ukFlag && <UKflag className="icon-position" />}
            {part.important && <Attention className="icon-position" />}
            {part.correct && <Correct className="icon-position" />}
            {part.incorrect && <Incorrect className="icon-position" />}
            {part.audio && <Audio src={part.audio} />}
            {part.bullet && <Bold>• </Bold>}
            {content}
          </span>
        );
      })}
    </span>
  );
};
