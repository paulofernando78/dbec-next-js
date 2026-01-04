import styles from "./Dialogue.module.css";

import Image from "next/image";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { Audio } from "@/components/atoms/Audio";
import { Bold } from "@/components/atoms/Bold";
import { InlineText } from "@/components/molecules/InlineText";

export const Dialogue = ({ imgs, audioPlayer, lines }) => {
  return (
    <div className="line-break">
      {Array.isArray(imgs) && (
        <div className={styles.flexImg}>
          {imgs.map(
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
      )}

      {audioPlayer && <AudioPlayer src={audioPlayer} />}
      <div className={styles.lines}>
        {lines.map((line, index) => (
          <p key={index}>
            {line.audio && <Audio src={line.audio} />}
            {line.speaker && <Bold>{line.speaker} </Bold>}
            <InlineText
              text={line.text}
              phonetics={line.phonetics}
              portuguese={line.portuguese}
            />
          </p>
        ))}
      </div>
    </div>
  );
};
