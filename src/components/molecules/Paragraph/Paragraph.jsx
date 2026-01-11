"use client";

import styles from "./Paragraph.module.css";

import Image from "next/image";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { InlineText } from "@/components/molecules/InlineText";

export const Paragraph = ({ blocks = [] }) => {
  return (
    <div className={styles.wrapper}>
      {blocks.map((block, blockIndex) => (
        <div key={blockIndex} className="line-break">
          {block.audioPlayer && <AudioPlayer src={block.audioPlayer} className="line-break-item"/>}
          <div
            className={[
              block.imgs && styles.withImage,
              block.imgs && styles[block.imgPosition || "left"],
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {block.imgs && (
              <div className={styles.imgsWrapper}>
                {block.imgs.map((img, index) => (
                  <Image
                    key={index}
                    src={img.img}
                    alt={img.alt}
                    width={img.width || 250}
                    height={img.height || 250}
                    className={`${styles.img} imgs`}
                  />
                ))}
              </div>
            )}
            {block.lines && (
              <div className={styles.paragraphBlock}>
                {(block.lines || []).map((line, lineIndex) => (
                  <p
                    key={lineIndex}
                    className={line.lineBreak ? styles.pLineBreak : undefined}
                  >
                    <InlineText text={line.text} />
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
