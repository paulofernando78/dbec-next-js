"use client";

import styles from "./Paragraph.module.css";

import Image from "next/image";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { InlineText } from "@/components/molecules/InlineText";

export const Paragraph = ({ blocks = [] }) => {
  return (
    <div className={styles.wrapper}>
      {blocks.map((block, blockIndex) => (
        <section key={blockIndex} className="line-break-item">
          {block.imgs && (
            <div
              className={[
                block.imgs && styles.withImage,
                block.imgs && styles[block.imgPosition || "left"],
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {block.audioPlayer && <AudioPlayer src={block.audioPlayer} />}
              <div className={styles.withImage}>
                {block.imgs.map((img, index) => (
                  <Image
                    key={index}
                    src={img.img}
                    alt={img.alt}
                    width={img.width || 250}
                    height={img.height || 250}
                    className="imgs"
                  />
                ))}
              </div>
              <div className={styles.paragraphBlock}>
                {(block.lines || []).map((line, lineIndex) => (
                  <p
                    key={lineIndex}
                    className={line.lineBreak ? styles.pLineBreak : undefined}
                  >
                    {line.text && <InlineText text={line.text} />}
                  </p>
                ))}
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};
