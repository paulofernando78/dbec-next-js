"use client";

import styles from "./CardText.module.css";

import Image from "next/image";
import { InlineText } from "@/components/molecules/InlineText";

export const CardText = ({ blocks = [] }) => {
  return (
    <div className={styles.wrapper}>
      {blocks.map((block, blockIndex) => (
        <div key={blockIndex} className={`${styles.card} line-break`}>
          <div>
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

          {block.lines && (
            <div>
              {(block.lines || []).map((line, lineIndex) => (
                <p key={lineIndex}>
                  <InlineText text={line.text} />
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
