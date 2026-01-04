"use client";

import styles from "./Paragraph.module.css";

import Image from "next/image";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { InlineText } from "@/components/molecules/InlineText";

export const Paragraph = ({ blocks }) => {
  return (
    <div className={styles.wrapper}>
      {blocks.map((block, blockIndex) => (
        <div key={blockIndex}>
          {block.audioblocklayer && <AudioPlayer src={block.audioPlayer} />}
          <div
            className={[
              block.img && styles.withImage,
              block.img && styles[block.imgPosition || "left"],
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {block.img && (
              <Image
                src={block.img}
                alt={block.alt}
                width={block.width || 200}
                height={block.height || 200}
                className="imgs"
              />
            )}
            <div className={styles.paragraphBlock}>
              {block.items.map((item, itemIndex) => (
                <p
                  key={itemIndex}
                  className={item.lineBreak ? "line-break-item" : undefined}
                >
                  {(item.text || item.phonetics || item.portuguese) && (
                    <InlineText
                      text={item.text}
                      phonetics={item.phonetics}
                      portuguese={item.portuguese}
                    />
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
