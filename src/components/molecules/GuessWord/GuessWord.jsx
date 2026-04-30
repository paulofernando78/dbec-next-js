"use client";

import styles from "./GuessWord.module.css";

import { useState, useEffect } from "react";
import { Button } from "@/components/atoms/Button/";
import { Image } from "@/components/atoms/Image/";

import { Redo } from "@/lib/svg-imports";

import { dictionary } from "@/helpers/content";

export const GuessWord = ({ img, words }) => {
  // STEP 1: Create alphabet letters for all keyboard buttons
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ'".split("");

  // STEP 2: State to store clicked/used letters
  const [usedLetters, setUsedLetters] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // STEP 3: Future state for the selected secret word
  const [selected, setSelectedWord] = useState(null);

  const [message, setMessage] = useState("");

  // STEP 4: Future state for attempts/errors
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = selected ? Math.max(5, selected.word.length + 1) : 5;

  // STEP 5: Future state for game result
  const [status, setStatus] = useState("playing");

  // STEP ???
  const [completeWords, setCompleteWords] = useState([]);

  const loadWord = async (word) => {
    const firstLetter = word[0].toLowerCase();

    const response = await fetch(`/data/dictionary/${firstLetter}.json`);
    const data = await response.json();

    const foundWord = data[0].definitions.find(
      (item) => item.word.toLowerCase() === word.toLowerCase(),
    );

    setSelectedWord(foundWord);
  };

  useEffect(() => {
    loadWord(words[currentIndex].word);
  }, [currentIndex, words]);

  // STEP 5.1: Move to next word and reset round state
  const nextWord = () => {
    const nextIndex = currentIndex + 1;

    // If there are no more words, finish game on last success
    if (nextIndex >= words.length) {
      setMessage("Great job!");
      setStatus("win");
      return;
    }

    setCurrentIndex(nextIndex);
    setUsedLetters([]);
    setAttempts(0);
    setMessage("");
    setStatus("playing");
  };

  // STEP 5.2: Restart full game from first word
  const resetGame = () => {
    setCurrentIndex(0);
    loadWord(words[0].word);
    setUsedLetters([]);
    setAttempts(0);
    setMessage("");
    setStatus("playing");
    setCompleteWords([]);
  };

  // STEP 11: Build click function logic
  const handleLetterClick = (letter) => {
    // 1. Check if letter was already used - if yes -> stop function
    if (usedLetters.includes(letter)) return;

    // 2. Save clicked letter in usedLetters state
    setUsedLetters((prev) => [...prev, letter]);

    // 3. Check if clicked letter exists in selected word
    const isCorrectLetter = selected.word.toUpperCase().includes(letter);
    const isWrongLetter = !isCorrectLetter;

    if (isWrongLetter) {
      // (clicked letter is NOT in secret word)
      const nextAttempts = attempts + 1; // add one mistake
      setAttempts(nextAttempts);

      // 4. Check lose condition
      if (nextAttempts >= maxAttempts) {
        setMessage("Try again!");
        setStatus("lose");
        return;
      }
    }

    // 5. Check win condition
    // Need all unique letters discovered:
    const uniqueLetters = [
      ...new Set(
        selected.word
          .toUpperCase()
          .split("")
          .filter((char) => char !== " "),
      ),
    ];
    // const hasWon = uniqueLetters.every((item) =>
    const hasWon = uniqueLetters.every(
      (item) => usedLetters.includes(item) || item === letter,
    );

    const praise = [
      "Good!",
      "Awesome!",
      "Great!",
      "Excellent!",
      "Nice!",
      "Well done!",
    ];

    if (hasWon) {
      setCompleteWords((prev) => [...prev, selected.word]);
      const randomMessage = praise[Math.floor(Math.random() * praise.length)];

      setMessage(randomMessage);
      setStatus("win");

      setTimeout(() => {
        nextWord();
      }, 800);
    }

    // 6. If no win / lose:
    // keep status = playing
  };

  if (!selected) return <span>Loading...</span>;

  return (
    <>
      <span className={styles.title}>Guess!</span>
      <div className={styles.container}>
        <div className={styles.imgHint}>
          <Image
            src={dictionary(
              selected?.imgs?.[words[currentIndex].img ?? 0]?.src,
            )}
            alt={
              selected?.imgs?.[words[currentIndex].img ?? 0]?.alt ||
              selected.word
            }
            width={300}
            height={300}
          />
          <p className={styles.hint}>
            <b>Hint:</b> {selected?.enDefinition}
          </p>
        </div>
        <div className={styles.containerLetters}>
          <span>
            <b>Words:</b> {currentIndex + 1} | {words.length}
          </span>
          <div className={styles.letters}>
            {/* STEP 7: Create one button for each letter */}
            {letters.map((letter, index) => (
              <Button
                // STEP 8: Later add:
                disabled={usedLetters.includes(letter) || status !== "playing"}
                onClick={() => handleLetterClick(letter)}
                key={letter}
                icon={letter}
              />
            ))}
          </div>
          {/* STEP 9: Show attempts counter */}
          <span>
            <b>Attempts:</b> {attempts} | {maxAttempts}
          </span>
          {/* STEP 10: Show hidden/revealed word here */}
          <div className={styles.message}>
            {message && <span>{message}</span>}
          </div>
          <span className={styles.wordDisplay}>
            {selected.word
              .toUpperCase()
              .split("")
              .map((char, index) => (
                <span key={index} className={styles.word}>
                  {char === " "
                    ? "\u2002"
                    : usedLetters.includes(char)
                      ? char
                      : "_"}
                </span>
              ))}
          </span>
          <Button icon={<Redo />} onClick={resetGame} />
          {completeWords.length > 0 && (
            <div>
              <b>Completed:</b> {completeWords.join(" • ")}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
