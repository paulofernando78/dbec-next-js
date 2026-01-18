"use client";

import styles from "./CardText.module.css";

import Image from "next/image";
import { InlineText } from "@/components/molecules/InlineText";

export const CardText = ({ blocks = [], width }) => {
  return (
    <div className={styles.wrapper}>
      {blocks.map((block, blockIndex) => (
        <div key={blockIndex} className={`${styles.card} line-break`} style={{ width: block.width || 300}}>
          <div>
            {block.imgs.map((img, index) => (
              <Image
                key={index}
                src={img.img}
                alt={img.alt}
                width={img.width || 300}
                height={img.height || 300}
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
