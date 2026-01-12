import styles from "./Column.module.css";

import React from "react";
import { Ribbon } from "@/components/atoms/Ribbon";
import { InlineText } from "@/components/molecules/InlineText";

export const Column = ({ cols = [] }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {cols.map((c, cIndex) => (
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
                    <React.Fragment key={bIndex}>
                      <InlineText text={b.text} />
                    </React.Fragment>
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
