"use client";

import styles from "./GuessWord.module.css";

import { useState } from "react";
import { Button } from "@/components/atoms/Button/";
import { Image } from "@/components/atoms/Image/";

export const GuessWord = ({ img }) => {
  // STEP 1: Create alphabet letters for all keyboard buttons
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // STEP 2: State to store clicked/used letters
  const [usedLetters, setUsedLetters] = useState([]);

  // STEP 3: Future state for the selected secret word
  const [selected, setSelectedWord] = useState("apple");

  // STEP 4: Future state for attempts/errors
  const [attempts, setAttempts] = useState(0);

  // STEP 5: Future state for game result
  const [status, setStatus] = useState("playing");

  // STEP 6: Render screen
  // - title
  // - image clue
  // - letter buttons
  // - attempts
  // - hidden word

  // STEP 11: Build click function logic
  const handleLetterClick = (letter) => {
    // 1. Check if letter was already used - if yes -> stop function
    if (usedLetters.includes(letter)) return;

    // 2. Save clicked letter in usedLetters state
    setUsedLetters((prev) => [...prev, letter]);

    // 3. Check if clicked letter exists in selected word
    const isCorrectLetter = selected.toUpperCase().includes(letter);
    const isWrongLetter = !isCorrectLetter;

    if (isWrongLetter) {
      // (clicked letter is NOT in secret word)
      const nextAttempts = attempts + 1; // add one mistake
      setAttempts(nextAttempts);

      // 4. Check lose condition
      if (nextAttempts >= 6) {
        setStatus("lose");
        return;
      }
    }

    // 5. Check win condition
    // Need all unique letters discovered:
    const uniqueLetters = [...new Set(selected.toUpperCase().split(""))];
    // const hasWon = uniqueLetters.every((item) =>
    const hasWon = uniqueLetters.every(
      (item) => usedLetters.includes(item) || item === letter,
    );

    if (hasWon) {
      setStatus("win");
    }

    // 6. If no win / lose:
    // keep status = playing
  };

  return (
    <>
      <span className={styles.title}>Guess Word!</span>
      <div className={styles.container}>
        <div>
          <Image src={img} alt="" />
          <p>Hint:{selected.enDefinition}</p>
        </div>
        <div>
          <div className={styles.letters}>
            {/* STEP 7: Create one button for each letter */}
            {letters.map((letter, index) => (
              <Button
                // STEP 8: Later add:
                disabled={usedLetters.includes(letter) || status !== "playing"}
                // onClick={() => handleLetterClick(letter)}
                onClick={() => handleLetterClick(letter)}
                key={letter}
                icon={letter}
              />
            ))}
          </div>
          {/* STEP 9: Show attempts counter */}
          {/* <span className={styles.wordDisplay}>Attempts: {attempts} / {maxScore}</span> */}
          {/* STEP 10: Show hidden/revealed word here */}
          <div>
            Status:
            {status === "win" && <span>Congratulation!</span>}
            {status === "lose" && <span>Try again!</span>}
          </div>
          <span className={styles.wordDisplay}>Word Display</span>
        </div>
      </div>
    </>
  );
};
