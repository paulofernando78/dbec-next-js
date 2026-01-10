"use client";

import styles from "./DictionarySearch.module.css";

import { Button } from "@/components/atoms/Button";
import { Portuguese } from "@/components/atoms/Portuguese";
import { BulletPoint } from "@/components/atoms/BulletPoint";

import { useState, useEffect } from "react";
import { Search, Close } from "@/lib/svg-imports";

export const DictionarySearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [definitions, setDefinitions] = useState([]);

  useEffect(() => {
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");

    Promise.all(
      letters.map(
        (letter) =>
          fetch(`/data/dictionary/${letter}.json`)
            .then((res) => res.json())
            .catch(() => null) // se algum não existir, ignora
      )
    ).then((results) => {
      const allDefinitions = results.filter(Boolean).flatMap((file) => {
        // some files may export an array or an object
        if (Array.isArray(file)) {
          return file.flatMap((entry) => entry.definitions || []);
        }
        return file.definitions || [];
      });

      setDefinitions(allDefinitions);
    });
  }, []);

  const normalize = (str = "") =>
    str
      .toLowerCase()
      .replace(/[’']/g, "'")
      .replace(/[^a-z0-9\s']/g, "")
      .trim();

  const searchedWord =
    query.trim() === ""
      ? []
      : definitions.filter((item) => {
          if (!item.word) return false;

          const queryTokens = normalize(query).split(/\s+/);
          const wordTokens = normalize(item.word).split(/\s+/);

          // every token typed by the user must exist as a whole token
          return queryTokens.every((qt) => wordTokens.includes(qt));
        });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setOpen(true);
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="Search"
          className={styles.input}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button icon={<Search />} onClick={() => setOpen(true)}></Button>
        <Button icon={<Close />} onClick={() => setOpen(false)}></Button>
      </div>

      {open && (
        <div className={styles.results}>
          {searchedWord.map((item, index) => (
            <div key={index} className={`${styles.wordCard} line-break`}>
              <div>
                <div>
                  <span className={styles.word}>{item.word}</span>
                  <span className={styles.partOfSpeech}>
                    {item.partOfSpeech}
                  </span>
                  <span className={styles.phonetics}>{item.phonetics}</span>
                </div>
                <div>
                  {item.enDefinition && <span className={styles.enDefinition}>
                    {item.enDefinition}
                  </span>}
                  {item.ptDefinition && <span className={styles.enDefinition}>
                    <Portuguese>{item.ptDefinition}</Portuguese>
                  </span>}
                </div>
              </div>
              <div>
                {item.examples?.map((example, index) => (
                  <div key={index} className={styles.example}>
                    <BulletPoint></BulletPoint>
                    <span className={styles.enExample}>
                      {example.enExample}
                    </span>
                    <span className={styles.ptExample}>
                      <Portuguese>{example.ptExample}</Portuguese>
                    </span>
                  </div>
                ))}
              </div>
              {item.synomyms && (
                <span>
                  <span className={styles.synomyms}>synomyms:</span>
                  {item.synomyms}
                </span>
              )}
              {item.antonyms && (
                <span>
                  <span className={styles.antonyms}>antonyms:</span>
                  {item.antonyms}
                </span>
              )}
              {item.seeAlso && (
                <span>
                  <span className={styles.seeAlso}>see also:</span>
                  {item.seeAlso}
                </span>
              )}
              {item.enNotes &&
              <div>
                <span className={styles.notes}>notes:</span>
                {item.notes?.map((note, index) => (
                  <span key={index}>
                    <span className={styles.enNote}> {note.enNote}</span>
                    <span>
                      <Portuguese>{note.ptNote}</Portuguese>
                    </span>
                  </span>
                ))}
              </div>
              }
            </div>
          ))}
        </div>
      )}
    </>
  );
};
