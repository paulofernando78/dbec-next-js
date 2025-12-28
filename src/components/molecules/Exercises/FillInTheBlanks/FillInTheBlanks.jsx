"use client"

import styles from "./FillInTheBlanks.module.css";

import React from "react";
import { Bold } from "@/components/atoms/Bold";
import { Button } from "@/components/atoms/Button";
import { Check, Redo } from "@/lib/svg-imports";

const handleCheck = () => {
  
}

const handleReset = () => {

}

export const FillInTheBlanks = ({ exercises }) => {
  return (
    <>
      <p>
        <Bold>{exercises.instructions}</Bold>
      </p>
      <div>
        {exercises.texts.map((t, index) => (
          <React.Fragment key={index}>
            {t.text && <p className={styles.text}>{t.text}</p>}
            {t.blank && <input type="text" className={styles.blank} />}
          </React.Fragment>
        ))}
      </div>
      <div className="button-wrapper">
        <Button icon={<Check />} onToggle={handleCheck} />
        <Button icon={<Redo />} onToggle={handleReset} />
      </div>
    </>
  );
};
