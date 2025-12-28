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
  const [totalScore, setTotalScore] = useState(0);

  const handleCheck = () => {
    let score = 0;
    const newResults = {};

    exercises.forEach((e, eIndex) => {
      e.blocks.forEach((bs, bsIndex) => {
        bs.block.forEach((b, bIndex) => {
          if (b.blank) {
            const key = `${eIndex}-${bsIndex}-${bIndex}`;
            const user = answers[key]?.trim().toLowerCase();
            const correct = b.blank.trim().toLowerCase();

            const isCorrect = user === correct;
            newResults[key] = isCorrect;

            if (isCorrect) score += 1;
          }
        });
      });
    });

    setResults(newResults);
    setTotalScore(score);
    setChecked(true);
  };

  const handleReset = () => {
    setAnswers({});
    setResults({});
    setChecked(false);
  };

  const totalBlanks = exercises.reduce((acc, e) => {
    return (
      acc +
      e.blocks.reduce((bsAcc, bs) => {
        return bsAcc + bs.block.filter((b) => b.blank).length;
      }, 0)
    );
  }, 0);

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
                    <div key={key} className={styles.inline}>
                      {b.text && <span className={styles.text}>{b.text}</span>}
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
                          className={[
                            styles.blank,
                            checked && results[key] === true && styles.correct,
                            checked &&
                              results[key] === false &&
                              styles.incorrect,
                          ]
                            .filter(Boolean)
                            .join(" ")}
                          style={{ width: `${Math.max(b.blank.length, 2)}ch` }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
      <span>
        Score: {totalScore} out of {totalBlanks}
      </span>
      <div className="button-wrapper">
        <Button icon={<Check />} onToggle={handleCheck} />
        <Button icon={<Redo />} onToggle={handleReset} />
      </div>
    </>
  );
};
