"use client";

import styles from "./Radio.module.css";
import { Button } from "@/components/atoms/Button";
import { Check, Redo } from "@/lib/svg-imports";
import { useState } from "react";

export const Radio = ({ exercises }) => {
  const [selected, setSelected] = useState({});
  const [checked, setChecked] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const handleCheck = () => {
    let score = 0;

    exercises.questions.forEach((question, qIndex) => {
      const selectedOptionIndex = selected[qIndex];
      if (selectedOptionIndex === undefined) return;
      const selectedOption = question.options[selectedOptionIndex];
      if (selectedOption.isCorrect) {
        score++;
      }
    });

    setTotalScore(score);
    setChecked(true);
  };

  const handleReset = () => {
    setSelected({});
    setChecked(false);
    setTotalScore(0);
  };

  return (
    <>
      <div className="line-break">
        <p>
          <strong>{exercises.instruction}</strong>
        </p>

        {exercises.questions.map((q, qIndex) => (
          <div key={qIndex}>
            <p className={styles.question}>{q.question}</p>

            {q.options.map((opt, optIndex) => (
              <label key={optIndex} className={styles.label}>
                <input
                  className={styles.input}
                  type="radio"
                  name={`radio-${qIndex}`}
                  checked={selected[qIndex] === optIndex}
                  disabled={checked}
                  onChange={() =>
                    setSelected((prev) => ({ ...prev, [qIndex]: optIndex }))
                  }
                />

                <span
                  className={[
                    styles.radio,
                    selected[qIndex] === optIndex && styles.radioActive,
                    checked &&
                    selected[qIndex] === optIndex &&
                    (opt.isCorrect ? styles.radioGreen : styles.radioRed),
                    checked && styles.radioDisabled
                  ]
                  .filter(Boolean)
                  .join(" ")}
                >
                  {selected[qIndex] === optIndex &&
                    <span className={styles.radioInner} />}
                </span>

                {opt.option}
              </label>
            ))}
          </div>
        ))}
        <span>
          Score: {totalScore} out of {exercises.questions.length}
        </span>
        <div className={styles.flex}>
          <Button icon={<Check />} onToggle={handleCheck} active={checked} />
          <Button icon={<Redo />} onToggle={handleReset} />
        </div>
      </div>
    </>
  );
};
