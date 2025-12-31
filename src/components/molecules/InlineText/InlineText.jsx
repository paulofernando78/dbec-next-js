"use client";

import { Bold } from "@/components/atoms/Bold";
import { Italic } from "@/components/atoms/Italic";
import { Mark } from "@/components/atoms/Mark";
import { Audio } from "@/components/atoms/Audio";
import { Portuguese } from "@/components/atoms/Portuguese";
import { Correct, Incorrect, Attention } from "@/lib/svg-imports";

export const InlineText = ({ text }) => {
  if (!text) return null;

  if (typeof text === "string") return text;

  if (!Array.isArray(text)) return null;

  return (
    <span>
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
          case "translation":
            content = <Portuguese>{part.text}</Portuguese>;
            break;
        }

        return (
          <span key={i}>
            {part.correct && <Correct src={part.correct} className="icon-position" />}
            {part.incorrect && <Incorrect src={part.correct} className="icon-position" />}
            {part.important && <Attention src={part.correct} className="icon-position" />}
            {part.audio && <Audio src={part.audio} />}
            {content}
          </span>
        );
      })}
    </span>
  );
};
