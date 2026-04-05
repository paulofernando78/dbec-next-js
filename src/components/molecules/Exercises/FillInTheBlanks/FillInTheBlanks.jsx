"use client";

import styles from "./FillInTheBlanks.module.css";

import { Bold } from "@/components/atoms/Bold";
import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/atoms/Card";
import { Check, Redo } from "@/lib/svg-imports";
import { useEffect, useState } from "react";

const shuffleItems = (items) => {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
};

const getWordBankItems = (descriptionText, blocks) => {
  if (typeof descriptionText === "string" && descriptionText.includes("•")) {
    return descriptionText
      .split("•")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return blocks.flatMap((bs) =>
    (bs.block || []).flatMap((b) => {
      if (!b.blank) return [];

      const word = Array.isArray(b.blank) ? b.blank[0] : b.blank;
      return typeof word === "string" && word.trim() ? [word] : [];
    }),
  );
};

const buildDescription = (descriptionText, blocks) => {
  const items = getWordBankItems(descriptionText, blocks);

  if (items.length === 0) {
    return typeof descriptionText === "string" ? descriptionText : "";
  }

  return shuffleItems(items).join(" • ");
};

export const FillInTheBlanks = ({ exercise }) => {
  const descriptionText = exercise?.description;
  const rawBlocks = exercise?.blocks;
  const blocks = Array.isArray(rawBlocks) ? rawBlocks : [];
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState({});
  const [checked, setChecked] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [description, setDescription] = useState(() =>
    buildDescription(descriptionText, blocks),
  );

  const normalizeAnswer = (value) =>
    String(value ?? "")
      .trim()
      .toLowerCase()
      .replaceAll("’", "'")
      .replaceAll("‘", "'");

  useEffect(() => {
    const nextBlocks = Array.isArray(rawBlocks) ? rawBlocks : [];
    setDescription(buildDescription(descriptionText, nextBlocks));
  }, [descriptionText, rawBlocks]);

  if (!exercise || !rawBlocks) {
    return null;
  }

  const handleCheck = () => {
    let score = 0;
    const newResults = {};

    blocks.forEach((bs, bsIndex) => {
      (bs.block || []).forEach((b, bIndex) => {
        if (!b.blank) return;

        const key = `${bsIndex}-${bIndex}`;

        const user = normalizeAnswer(answers[key]);

        const correctAnswers = Array.isArray(b.blank)
          ? b.blank.map((a) => normalizeAnswer(a))
          : [normalizeAnswer(b.blank)];

        const isCorrect = correctAnswers.includes(user);
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
    setDescription(buildDescription(descriptionText, blocks));
  };

  const totalBlanks = blocks.reduce((acc, bs) => {
    return acc + (bs.block || []).filter((b) => b.blank).length;
  }, 0);

  return (
    <div className="line-break">
      <p>
        <Bold>{exercise.instructions}</Bold>
      </p>
      {description && (
        <Card>
          <span>{description}</span>
        </Card>
      )}

      <div>
        {blocks.map((bs, bsIndex) => (
          <div
            key={bsIndex}
            className={bs.lineBreak ? styles.block : styles.inline}
          >
            {(bs.block || []).map((b, bIndex) => {
              const key = `${bsIndex}-${bIndex}`;

              const maxLength = b.blank
                ? Array.isArray(b.blank)
                  ? Math.max(...b.blank.map((a) => a.length))
                  : b.blank.length
                  : 2

              return (
                <div key={key} className={styles.inline}>
                  {b.text && <span>{b.text}</span>}
                  {b.blank && (
                    <input
                      type="text"
                      placeholder={b.placeholder}
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
                        checked && results[key] === false && styles.incorrect,
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      style={{ width: `${Math.max(maxLength, 2)}ch` }}
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
    </div>
  );
};
