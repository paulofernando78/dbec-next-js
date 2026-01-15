"use client";

import styles from "./Radio.module.css";

import { Bold } from "@/components/atoms/Bold";
import { Audio } from "@/components/atoms/Audio";
import { Button } from "@/components/atoms/Button";
import { Check, Redo } from "@/lib/svg-imports";
import { useState } from "react";

export const Radio = ({ exercise = {} }) => {
  const [selected, setSelected] = useState({});
  const [checked, setChecked] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const questions = Array.isArray(exercise.questions) ? exercise.questions : [];

  const handleCheck = () => {
    let score = 0;
    questions.forEach((question, qIndex) => {
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
          <Audio src={exercise.audio} />
          <Bold>{exercise.instruction}</Bold>
        </p>
        {questions.map((q, qIndex) => (
          <div key={qIndex}>
            <p className={styles.question}>{q.question}</p>

            {q.options.map((opt, optIndex) => {
              const isActive = selected[qIndex] === optIndex;
              const isChecked = checked;
              // const isDisabled = checked;
              const isWrong = isChecked && isActive && !opt.isCorrect;
              const isCorrect = isChecked && isActive && opt.isCorrect;

              return (
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
                      isActive && styles.radioActive,
                      isCorrect && styles.radioGreen,
                      isWrong && styles.radioRed,
                      // isDisabled && styles.radioDisabled,
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {selected[qIndex] === optIndex && (
                      <span className={styles.radioInner} />
                    )}
                  </span>

                  {opt.option}
                </label>
              );
            })}
          </div>
        ))}
        <span>
          Score: {totalScore} out of {questions.length}
        </span>
        <div className="button-wrapper">
          <Button icon={<Check />} onToggle={handleCheck} active={checked} />
          <Button icon={<Redo />} onToggle={handleReset} />
        </div>
      </div>
    </>
  );
};
