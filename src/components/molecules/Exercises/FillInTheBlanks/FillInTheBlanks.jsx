"use client";

import styles from "./FillInTheBlanks.module.css";

import React, { useState } from "react";
import { Bold } from "@/components/atoms/Bold";
import { Button } from "@/components/atoms/Button";
import { Check, Redo } from "@/lib/svg-imports";

export const FillInTheBlanks = ({ exercises }) => {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState({});
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    const newResults = {};

    exercises.forEach((e, eIndex) => {
      e.blocks.forEach((bs, bsIndex) => {
        bs.block.forEach((b, bIndex) => {
          if (b.blank) {
            const key = `${eIndex}-${bsIndex}-${bIndex}`;
            const user = answers[key]?.trim().toLowerCase();
            const correct = b.blank.trim().toLowerCase();
            newResults[key] = user === correct;
          }
        });
      });
    });

    setResults(newResults);
    setChecked(true);
  };

  const handleReset = () => {
    setAnswers({});
    setResults({});
    setChecked(false);
  };

  return (
    <>
      {exercises.map((e, eIndex) => (
        <React.Fragment key={eIndex}>
          {e.instructions && (
            <p>
              <Bold>{e.instructions}</Bold>
            </p>
          )}
          <div>
            {e.blocks.map((bs, bsIndex) => (
              <div
                key={bsIndex}
                className={bs.lineBreak ? styles.block : styles.inline}
              >
                {bs.block.map((b, bIndex) => {
                  const key = `${eIndex}-${bsIndex}-${bIndex}`;

                  return (
                    <span key={bIndex}>
                      {b.text && <p className={styles.text}>{b.text}</p>}
                      {b.blank && (
                        <input
                          type="text"
                          value={answers[key] || ""}
                          onChange={(e) =>
                            setAnswers((prev) => ({
                              ...prev,
                              [key]: e.target.value,
                            }))
                          }
                          // disabled={checked}
                          className={[
                            styles.blank,
                            checked && results[key] === true && styles.correct,
                            checked &&
                              results[key] === false &&
                              styles.incorrect,
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        />
                      )}
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}

      <div className="button-wrapper">
        <Button icon={<Check />} onToggle={handleCheck} />
        <Button icon={<Redo />} onToggle={handleReset} />
      </div>
    </>
  );
};
