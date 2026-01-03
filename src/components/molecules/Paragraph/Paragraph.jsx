"use client";

import styles from "./Paragraph.module.css";

import Image from "next/image";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { Audio } from "@/components/atoms/Audio";
import { InlineText } from "@/components/molecules/InlineText";

export const Paragraph = ({ paragraphs }) => {
  return (
    <div className={styles.wrapper}>
      {paragraphs.map((p, pIndex) => (
        <div
          key={pIndex}
          className={[styles.paragraphBlock, p.lineBreak && styles.lineBreak]
            .filter(Boolean)
            .join(" ")}
        >
          {p.audioPlayer && <AudioPlayer src={p.audioPlayer} />}
          <div
            className={[
              p.img && styles.withImage,
              p.img && styles[p.imgPosition || "left"],
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {p.img && (
              <Image
                src={p.img}
                alt={p.alt}
                width={p.width || 200}
                height={p.height || 200}
                className="imgs"
              />
            )}
            <p>
              <InlineText
                important={p.important}
                correct={p.correct}
                incorrect={p.incorrect}
                audio={p.audio}
                text={p.text}
                phonetics={p.phonetics}
                portuguese={p.portuguese}
              />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
