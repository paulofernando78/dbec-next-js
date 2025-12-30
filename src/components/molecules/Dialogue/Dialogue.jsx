import styles from "./Dialogue.module.css";

import Image from "next/image";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { Audio } from "@/components/atoms/Audio";
import { Bold } from "@/components/atoms/Bold";
import { Mark } from "@/components/atoms/Mark";
import { Italic } from "@/components/atoms/Italic";

function renderInlineText(text) {
  if (!text) return null;

  if (typeof text === "string") {
    return text;
  }

  if (!Array.isArray(text)) return null;

  return text.map((part, i) => {
    // "I" + ’m + " Paulo."
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

export const Dialogue = ({ title, imgs, audioPlayer, lines }) => {
  return (
    <div className="line-break">
      {title && <h4 className={styles.title}>{title}</h4>}
      <div className={styles.flexImg}>
        {Array.isArray(imgs) &&
        imgs.map(
          (i, iIndex) =>
            i.img && (
              <Image
                key={iIndex}
                src={i.img}
                alt={i.alt}
                width={i.width}
                height={i.height}
                className="imgs"
              />
            )
        )}
      </div>

      <AudioPlayer src={audioPlayer} />

      <div className={`${styles.lines} line-break`}>
        {lines.map((line, index) => (
          <div key={index}>
            <div className={styles.flexImg}>
              {Array.isArray(line.imgs) &&
                line.imgs.map((i, iIndex) => (
                  <Image
                    key={iIndex}
                    src={i.img}
                    alt={i.alt}
                    width={i.width}
                    height={i.height}
                    className="imgs"
                  />
                ))}
            </div>
            <p>
              {line.audio && <Audio src={line.audio} />}
              {line.speaker && <Bold>{line.speaker} </Bold>}
              {renderInlineText(line.text)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
