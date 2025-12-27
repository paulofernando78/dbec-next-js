"use client";

import styles from "./Radio.module.css";
import { Button } from "@/components/atoms/Button";
import { Check, Redo } from "@/lib/svg-imports"
import { useState } from "react";

export const Radio = ({ exercises }) => {
  const [selected, setSelected] = useState({});

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
              <label key={optIndex} className="block">
                <input
                  type="radio"
                  name={`radio-${qIndex}`}
                  checked={selected[qIndex] === optIndex}
                  onChange={() =>
                    setSelected((prev) => ({ ...prev, [qIndex]: optIndex }))
                  }
                />{" "}
                {opt.option}
              </label>
            ))}
          </div>
        ))}
        <div className={styles.flex}>
          <Button icon={<Check />} />
          <Button icon={<Redo />} />
        </div>
      </div>
    </>
  );
};
