import styles from "./Dialogue.module.css";

import Image from "next/image";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { Audio } from "@/components/atoms/Audio";
import { Bold } from "@/components/atoms/Bold";
import { InlineText } from "@/components/molecules/InlineText";

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
              <InlineText
                text={line.text}
                phonetics={line.phonetics}
                portuguese={line.portuguese}
              />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
