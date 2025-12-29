import styles from "./Dialogue.module.css";

import Image from "next/image";
import { Text } from "@/components/molecules/Text";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { Audio } from "@/components/atoms/Audio";
import { Bold } from "@/components/atoms/Bold";
import { Mark } from "@/components/atoms/Mark";
import { Italic } from "@/components/atoms/Italic";

function renderInline(text) {
  if (typeof text === "string") {
    return text;
  }

  return text.map((part, i) => {
    // "I" + ’m + " Paulo."
    if (typeof part === "string") return part;

    switch (part.type) {
      case "bold":
        return <Bold key={i}>{part.text}</Bold>;
      case "italic":
        return <Italic key={i}>{part.text}</Italic>;
      case "mark":
        return <Mark key={i}>{part.text}</Mark>;
      default:
        return null;
    }
  });
}

export const Dialogue = ({
  title,
  titleImgSrc,
  titleImgAlt,
  titleImgWidth,
  titleImgHeight,
  audioSrc,
  audio,
  lines,
}) => {
  return (
    <div className="line-break">
      {title && <h4 className={styles.title}>{title}</h4>}
      {titleImgSrc && (
        <Image
          src={titleImgSrc}
          alt={titleImgAlt}
          width={titleImgWidth}
          height={titleImgHeight}
        />
      )}

      <AudioPlayer src={audioSrc} />

      <div className={`${styles.lines} line-break`}>
        {lines.map((line, index) => (
          <div key={index}>
            {line.imgSrc && line.imgAlt && (
              <Image
                src={line.imgSrc}
                alt={line.imgAlt}
                width={line.width}
                height={line.height}
              />
            )}
            <Text>
              <Audio src={line.audio}/><Bold>{line.speaker} </Bold>{renderInline(line.text)}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};
