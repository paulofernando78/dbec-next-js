"use client";

import styles from "./page.module.css";

import { Audio } from "@/components/atoms/Audio";
import { Line } from "@/components/molecules/Line";
import { Card } from "@/components/atoms/Card";
import { Image } from "@/components/atoms/Image";
import { Contact } from "@/components/organisms/Contact";
import { BuyMeACoffee } from "@/components/atoms/BuyMeACoffee";
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
    let timeout;

    const interval = setInterval(() => {
      setOpacity(0); // fade out

      timeout = setTimeout(() => {
        // % faz voltar para o início.
        setGreetingIndex((prev) => (prev + 1) % greetingsList.length);

        setOpacity(1); // fade in
      }, 500);
    }, 2000);

    return () =>
      clearInterval(interval);
      clearTimeout(timeout)
  }, []);

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.meComputerWrapper}>
          <div className={styles.dbec}>
            <h1 className={styles.db} data-text="DAILY BASIS">DAILY BAISIS</h1>
            <h1 className={styles.ec} data-text="ENGLISH COURSE">ENGLISH COURSE</h1>
          </div>
          {/* <Image
            src="/assets/img/home-me.png"
            alt="A pic of myself"
            width={200}
            className={styles.meComputer}
          /> */}
          <ul className={styles.greetingsWrapper}>
            <li className={styles.greetings} style={{ opacity }}>
              {greetingsList[greetingIndex]}
            </li>
          </ul>
        </div>
        <div className={styles.welcome}>
          <Line
            value={[
              ...content({
                parts: [
                  audio("/assets/audio/welcome.mp3"),
                  bold("DAILY BASIS ENGLISH COURSE"),
                  " offers specialized English classes focused on the four core language skills: ",
                  italic("Speaking "),
                  "(with an emphasis on conversation), ",
                  italic("Listening"),
                  " (listening comprehension), ",
                  italic("Reading, "),
                  "and ",
                  italic("Writing"),
                  ". On this web site, you’ll find a variety of useful learning materials. Please use them wisely.",
                ],
              }),
            ]}
          />
        </div>
        <Contact className={styles.contact} />
      </div>
    </>
  );
}
