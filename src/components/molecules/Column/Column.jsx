"use client";

import styles from "./Column.module.css";

import { useRef } from "react";
import { Ribbon } from "@/components/atoms/Ribbon";
import { InlineText } from "@/components/molecules/InlineText";
import { useDragScroll } from "@/hooks/useDragScroll";

export const Column = ({ cols = [], maxCols, width = 250 }) => {
  const visibleCols = maxCols ? cols.slice(0, maxCols) : cols;
  const scrollRef = useRef(null);
  useDragScroll(scrollRef);

  return (
    <>
      <div>
        <div
          ref={scrollRef}
          className={styles.wrapper}
          style={{
            gridTemplateColumns: `repeat(${visibleCols.length}, ${width}px)`,
          }}
        >
          {visibleCols.map((c, cIndex) => (
            <div key={cIndex}>
              <Ribbon
                bgColor={c.bgColor}
                textColor={c.textColor}
                label={c.column}
                className={styles.column}
              />

              {(c.blocks || []).map((bs, bsIndex) => (
                <div
                  key={bsIndex}
                  className={bs.lineBreak ? "line-break-item" : undefined}
                >
                  {(bs.block || []).map((b, bIndex) => (
                    <InlineText key={bIndex} text={b.text} />
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
