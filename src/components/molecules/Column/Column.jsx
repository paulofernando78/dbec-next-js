import styles from "./Column.module.css";

import React from "react";
import { Ribbon } from "@/components/atoms/Ribbon";
import { Audio } from "@/components/atoms/Audio";
import { Bold } from "@/components/atoms/Bold";
import { Mark } from "@/components/atoms/Mark";

export const Column = ({ data = [] }) => {
  return (
    <div className={styles.wrapper}>
      {data.map((c, cIndex) => (
        <div key={cIndex}>
          <Ribbon
            bgColor={c.bgColor}
            textColor={c.textColor}
            label={c.column}
            className={styles.column}
          />
          {c.blocks.map((bs, bsIndex) => (
            <div key={bsIndex}>
              {bs.block.map((b, bIndex) => (
              <React.Fragment key={bIndex}>
                {b.audio && <Audio src={b.audio}/>}
                <span>{b.text}</span>
                {b.bold && (<span><Bold>{b.bold}</Bold></span>)}
                {b.mark && (<span><Mark>{b.mark}</Mark></span>)}{" "}
              </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
