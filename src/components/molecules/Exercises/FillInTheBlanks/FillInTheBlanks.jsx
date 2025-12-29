"use client";

import styles from "./FillInTheBlanks.module.css";

import { Bold } from "@/components/atoms/Bold";
import { Button } from "@/components/atoms/Button";
import { Check, Redo } from "@/lib/svg-imports";
import React, { useState } from "react";

export const FillInTheBlanks = ({ exercises }) => {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState({});
  const [checked, setChecked] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  if (!exercises || !exercises.blocks) {
    return null;
  }

  const handleCheck = () => {
    let score = 0;
    const newResults = {};

    exercises.blocks.forEach((bs, bsIndex) => {
      bs.block.forEach((b, bIndex) => {
        if (!b.blank) return;

        const key = `${bsIndex}-${bIndex}`;
        const user = answers[key]?.trim().toLowerCase();
        const correct = b.blank.trim().toLowerCase();

        const isCorrect = user === correct;
        newResults[key] = isCorrect;

        if (isCorrect) score++;
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

  const totalBlanks = exercises.blocks.reduce((acc, bs) => {
    return acc + bs.block.filter((b) => b.blank).length;
  }, 0);

  return (
    <>
      <p>
        <Bold>{exercises.instructions}</Bold>
      </p>

      <div>
        {exercises.blocks.map((bs, bsIndex) => (
          <div
            key={bsIndex}
            className={bs.lineBreak ? styles.block : styles.inline}
          >
            {bs.block.map((b, bIndex) => {
              const key = `${bsIndex}-${bIndex}`;

              return (
                <div key={key} className={styles.inline}>
                  {b.text && <span>{b.text}</span>}
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
