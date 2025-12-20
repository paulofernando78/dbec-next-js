import { Fragment } from "react";

import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Text } from "@/components/molecules/Text";
import { Portuguese } from "@/components/atoms/Portuguese";

import styles from "./word-formation.module.css";

const words = [
  {
    audioAdjective: "/audio/general/beautiful.mp3",
    adjective: "beautiful",
    audioNoun: "/audio/general/beauty.mp3",
    noun: "beauty",
    audioVerb: "",
    verb: "-",
    ptAdjective: "bonito",
    ptNoun: "beleza",
    ptVerb: "",
  },
  {
    audioAdjective: "/audio/general/dark.mp3",
    adjective: "dark",
    audioNoun: "/audio/general/darkness.mp3",
    noun: "darkness",
    audioVerb: "/audio/general/darken.mp3",
    verb: "darken",
    ptAdjective: "escuro; tarde (dia)",
    ptNoun: "escuridão",
    ptVerb: "escurecer",
  },
  {
    audioAdjective: "/audio/general/light.mp3",
    adjective: "light",
    audioNoun: "/audio/general/light.mp3",
    noun: "light",
    audioVerb: "/audio/general/lighten.mp3",
    verb: "lighten",
    ptAdjective: "claro; leve",
    ptNoun: "luz, iluminação",
    ptVerb: "clarear (light = ascender)",
  },
  {
    audioAdjective: "/audio/general/soft.mp3",
    adjective: "soft",
    audioNoun: "/audio/general/softness.mp3",
    noun: "softness",
    audioVerb: "/audio/general/soften.mp3",
    verb: "soften",
    ptAdjective: "suave, macio",
    ptNoun: "suavidade, maciez",
    ptVerb: "amaciar, amolecer",
  },
  {
    audioAdjective: "/audio/general/useful-useless.mp3",
    adjective: "useful / useless",
    audioNoun: "/audio/general/use1.mp3",
    noun: "use",
    audioVerb: "/audio/general/use2.mp3",
    verb: "use",
    ptAdjective: "útil / inútil",
    ptNoun: "uso, utilidade, aplicação",
    ptVerb: "usar, utilizar",
  },
];

function renderUnderline(text, underlineWords = []) {
  let parts = [text]; // Start with the entire text as a single block

  // For each word that should be underlined
  underlineWords.forEach((word) => {
    // Split existing parts by the word, keeping React elements intact
    parts = parts.flatMap(
      (part) =>
        typeof part === "string"
          ? part.split(new RegExp(`(${word})`, "gi")) // Create an array splitting by the word
          : part // If it's already a React element (like <mark>), leave it unchanged
    );
  });

  // Transform the parts into JSX, underlining the corresponding words
  return parts.map((part, i) =>
    underlineWords.some((w) => w.toLowerCase() === part?.toLowerCase()) ? (
      <mark key={i}>{part}</mark> // Underline the word
    ) : (
      part // Keep normal text
    )
  );
}

const examples = [
  {
    adjAudio: "/audio/general/that-girl-is-beautiful.mp3",
    adjEnExample: "That girl is beautiful.",
    adjUnderline: ["beautiful"],
    adjPtExample: "Aquela menina é bonita.",
    nounAudio: "/audio/general/shes-a-woman-of-great-beauty.mp3",
    nounEnExample: "She's a woman of great beauty.",
    nounUnderline: ["beauty"],
    nounPtExample: "Ela é uma mulher de uma grande beleza.",
  },

  {
    adjAudio: "/audio/general/its-getting-dark-lets-go-home.mp3",
    adjEnExample: "It’s getting dark. Let's go home.",
    adjUnderline: ["dark"],
    adjPtExample: "Está ficando tarde. Vamos para casa.",
    nounAudio: "/audio/general/the-car-disappeared-into-the-darkness.mp3",
    nounEnExample: "The car disappeared into the darkness.",
    nounUnderline: ["darkness"],
    nounPtExample: "O carro desapareceu na escuridão. ",
    verbAudio: "/audio/general/the-sky-began-to-darken-as-the-storm-approached.mp3",
    verbEnExample: "The sky began to darken as the storm approached.",
    verbUnderline: ["darken"],
    verbPtExample:
      "O céu começou a escurecer à medida que a tempestade se aproximava.",
  },
  {
    nounAudio: "/audio/general/can-you-turn-off-the-lights-please.mp3",
    nounEnExample: "Can you turn off the lights, please?",
    nounUnderline: ["lights"],
    nounPtExample: "Você pode apagar as luzes, por favor?",
    verbAudio: "/audio/general/.mp3",
    verbEnExample: "The room will lighten in the morning.",
    verbUnderline: ["lighten"],
    verbPtExample: "O quarto será clareado pela manhã.",
  },
  {
    audio: "/audio/general/this-tool-is-useless.mp3",
    enExample: "This tool is useless.",
    underline: ["useless"],
    ptExample: "...",
  },
];

export default function WordFormation() {
  return (
    <>
      <Whiteboard title="Grammar" subtitle="Word Formation" />
      <div className="line-break">
        <div className={styles.scroll}>
          <div className={styles.table}>
            {/* Headers */}
            <div className={styles.header}>
              <strong>adjective </strong>(-full, -less)
            </div>
            <div className={styles.header}>
              <strong>noun</strong> (-ness)
            </div>
            <div className={styles.header}>
              <strong>verb</strong> (-en)
            </div>

            {words.map((word, index) => (
              <div key={index} className={styles.row}>
                <Text playAudio={word.audioAdjective}>
                  {word.adjective} <Portuguese>{word.ptAdjective}</Portuguese>
                </Text>
                <Text playAudio={word.audioNoun}>
                  {word.noun} <Portuguese>{word.ptNoun}</Portuguese>
                  <span className="phonetics">{word.phonetics}</span>
                </Text>
                <Text playAudio={word.audioVerb}>
                  {word.verb} <Portuguese>{word.ptVerb}</Portuguese>
                </Text>
              </div>
            ))}
          </div>
        </div>

        <div className="line-break">
          <Text>
            <strong>Examples</strong>
          </Text>
          <div>
            {examples.map((item, index) => (
              <div key={index}>
                <Text playAudio={item.adjAudio}>
                  {renderUnderline(item.adjEnExample, item.adjUnderline)}{" "}
                  <Portuguese>{item.adjPtExample}</Portuguese>
                </Text>
                <Text playAudio={item.nounAudio}>
                  {renderUnderline(item.nounEnExample, item.nounUnderline)}{" "}
                  <Portuguese>{item.nounPtExample}</Portuguese>
                </Text>
                <Text playAudio={item.verbAudio}>
                  {renderUnderline(item.verbEnExample, item.verbUnderline)}{" "}
                  <Portuguese>{item.verbPtExample}</Portuguese>
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
