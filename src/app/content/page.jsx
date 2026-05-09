"use client";

import styles from "./contentPage.module.css";

import { Emoji } from "@/components/organisms/Emoji";
import { Audio } from "@/components/atoms/Audio";
import { Line } from "@/components/molecules/Line";
import { Card } from "@/components/atoms/Card";
import { Image } from "@/components/atoms/Image";
import { Contact } from "@/components/organisms/Contact";
import { content, audio, bold, italic } from "@/helpers/content";

import { useState, useEffect } from "react";

const greetingsList = [
  "Hi there!",
  "How are you doing?",
  "How's it going?",
  "What's up?",
  "How are you?",
  "How are you feeling?",
];

export default function Home() {
  // greetingIndex = question current position
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0); // fade out

      setTimeout(() => {
        // % faz voltar para o início.
        setGreetingIndex((prev) => (prev + 1) % greetingsList.length);
        setOpacity(1); // fade in
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="line-break-double">
      <div className="line-break">
        <div className={styles.welcomeContainer}>
          <Line
            as="h2"
            className={styles.welcome}
            value={[
              ...content({
                parts: [
                  // audio("/assets/audio/home/welcome.mp3"),
                  "Welcome!",
                ],
              }),
            ]}
          />
          <Line
            as="h1"
            className={styles.feeling}
            value={[
              ...content({
                parts: [
                  // audio("/assets/audio/home/feeling.mp3"),
                  "How are you feeling today?",
                ],
              }),
            ]}
          />
          <Emoji />
        </div>
      </div>
    </div>
  );
}
