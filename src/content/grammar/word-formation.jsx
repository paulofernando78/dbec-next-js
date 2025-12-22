import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Text } from "@/components/molecules/Text";
import { Bold } from "@/components/atoms/Bold";
import { Portuguese } from "@/components/atoms/Portuguese";
import { Card } from "@/components/atoms/Card";

import styles from "./word-formation.module.css";

const words = [
  {
    verbAudio: "",
    verbWord: "...",
    verbPtDefinition: "...",
    verbExampleAudio: "...",
    verbExample: "...",
    verbExampleUnderline: ["..."],

    nounAudio: "",
    nounWord: "...",
    nounPtDefinition: "...",
    nounExampleAudio: "...",
    nounExample: "...",
    nounExampleUnderline: ["..."],

    adjectiveAudio: "",
    adjectiveWord: "...",
    adjectivePtDefinition: "...",
    adjectiveExampleAudio: "...",
    adjectiveExample: "...",
    adjectiveExampleUnderline: ["..."],
  },
  {
    verbAudio: "",
    verbWord: "...",
    verbPtDefinition: "...",
    verbExampleAudio: "...",
    verbExample: "...",

    nounAudio: "",
    nounWord: "art",
    nounPtDefinition: "...",
    nounExampleAudio: "...",
    nounExample: "...",

    adjectiveAudio: "",
    adjectiveWord: "artful / artless",
    adjectivePtDefinition: "...",
    adjectiveExampleAudio: "...",
    adjectiveExample: "...",
  },
  {
    verbAudio: "/audio/general/begin.mp3",
    verbWord: "begin",
    verbPtDefinition: "começar, iniciar",
    verbExampleAudio: "...",
    verbExample: "What time does the class begin?",
    verbExampleUnderline: ["begin"],

    nounAudio: "/audio/general/beginning.mp3",
    nounWord: "beginning",
    nounPtDefinition: "começo, início",
    nounExampleAudio: "...",
    nounExample: "In the beginning I didn’t like it.",
    nounExampleUnderline: ["beginning"],

    adjectiveAudio: "",
    adjectiveWord: "...",
    adjectivePtDefinition: "...",
    adjectiveExampleAudio: "...",
    adjectiveExample: "...",
    adjetiveExampleUnderline: ["..."],
  },
  {
    verbAudio: "/audio/general/beautify.mp3",
    verbWord: "beautify",
    verbPtDefinition: "embelizar",
    verbExampleAudio: "/audio/general/the-city-wants-to-beautify-the-city.mp3",
    verbExample: "The city wants to beautify the park.",

    nounAudio: "/audio/general/beauty.mp3",
    nounWord: "beauty",
    nounPtDefinition: "beleza",
    nounExampleAudio: "/audio/general/shes-a-woman-of-great-beauty",
    nounExample: "She's a woman of great beauty. Ela é uma mulher de uma grande beleza.",

    adjectiveAudio: "/audio/general/beautiful.mp3",
    adjectiveWord: "beautiful",
    adjectivePtDefinition: "bonito(a)",
    adjectiveExampleAudio: "...",
    adjectiveExample: "That girl is beautiful. Aquela menina é bonita.",
  },
  {
    verbAudio: "/audio/general/darken.mp3",
    verbWord: "darken",
    verbPtDefinition: "escurercer",
    verbExampleAudio: "/audio/general/the-sky-began-to-darken-as-the-storm-approached.mp3",
    verbExample: "The sky began to darken as the storm approached. O céu começou a escurecer à medida que a tempestade se aproximava.",

    nounAudio: "/audio/general/darkness.mp3",
    nounWord: "darkness",
    nounPtDefinition: "escuridão",
    nounExampleAudio: "...",
    nounExample: "The car disappeared into the darkness. O carro desapareceu na escuridão.",

    adjectiveAudio: "/audio/general/dark.mp3",
    adjectiveWord: "dark",
    adjectivePtDefinition: "escuro",
    adjectiveExampleAudio: "...",
    adjectiveExample: "It’s getting dark. Let's go home. Está ficando tarde. Vamos para casa.",
  },
  {
    verbAudio: "",
    verbWord: "fast / fasten",
    verbPtDefinition: "...",
    verbExampleAudio: "...",
    verbExample: "...",

    nounAudio: "",
    nounWord: "...",
    nounPtDefinition: "...",
    nounExampleAudio: "...",
    nounExample: "...",

    adjectiveAudio: "",
    adjectiveWord: "fast",
    adjectivePtDefinition: "...",
    adjectiveExampleAudio: "...",
    adjectiveExample: "...",
  },
  {
    verbAudio: "",
    verbWord: "lighten / light",
    verbPtDefinition: "clarear / acender",
    verbExampleAudio: "The room will lighten in the morning. O quarto irá clarear pela manhã.",
    verbExample: "",

    nounAudio: "",
    nounWord: "light",
    nounPtDefinition: "luz",
    nounExampleAudio: "...",
    nounExample: "Can you turn off the lights, please? Você pode apagar as luzes, por favor?",

    adjectiveAudio: "",
    adjectiveWord: "light",
    adjectivePtDefinition: "...",
    adjectiveExampleAudio: "...",
    adjectiveExample: "This package is light. Este pacote é leve.",
  },
  {
    verbAudio: "",
    verbWord: "shorten",
    verbPtDefinition: "...",
    verbExampleAudio: "...",
    verbExample: "...",

    nounAudio: "",
    nounWord: "shortness",
    nounPtDefinition: "...",
    nounExampleAudio: "...",
    nounExample: "...",

    adjectiveAudio: "",
    adjectiveWord: "short",
    adjectivePtDefinition: "...",
    adjectiveExampleAudio: "...",
    adjectiveExample: "...",
  },
  {
    verbAudio: "",
    verbWord: "soften",
    verbPtDefinition: "...",
    verbExampleAudio: "...",
    verbExample: "...",

    nounAudio: "",
    nounWord: "softness",
    nounPtDefinition: "...",
    nounExampleAudio: "...",
    nounExample: "...",

    adjectiveAudio: "",
    adjectiveWord: "soft",
    adjectivePtDefinition: "...",
    adjectiveExampleAudio: "...",
    adjectiveExample: "...",
  },
  {
    verbAudio: "",
    verbWord: "teach",
    verbPtDefinition: "...",
    verbExampleAudio: "...",
    verbExample: "...",

    nounAudio: "",
    nounWord: "teacher / teaching",
    nounPtDefinition: "...",
    nounExampleAudio: "...",
    nounExample: "...",

    adjectiveAudio: "",
    adjectiveWord: "...",
    adjectivePtDefinition: "...",
    adjectiveExampleAudio: "...",
    adjectiveExample: "...",
  },
  {
    verbAudio: "",
    verbWord: "use /z/",
    verbPtDefinition: "...",
    verbExampleAudio: "...",
    verbExample: "...",

    nounAudio: "",
    nounWord: "use /s/",
    nounPtDefinition: "...",
    nounExampleAudio: "...",
    nounExample: "...",

    adjectiveAudio: "",
    adjectiveWord: "useful / useless",
    adjectivePtDefinition: "útil / inútil",
    adjectiveExampleAudio: "...",
    adjectiveExample: "This tool useful / useless.",
  },
];

function escapeRegExp(word) {
  return word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderUnderline(text, underlineWords = []) {
  if (!text) return "-";

  let parts = [text];

  underlineWords.forEach((word) => {
    const safeWord = escapeRegExp(word);
    const regex = new RegExp(`(${safeWord})`, "gi");

    parts = parts.flatMap((part) =>
      typeof part === "string" ? part.split(regex) : part
    );
  });

  return parts.map((part, i) =>
    underlineWords.some(
      (w) => part?.toLowerCase() === w.toLowerCase()
    ) ? (
      <mark key={i}>{part}</mark>
    ) : (
      part
    )
  );
}

export default async function WordFormation() {
  return (
    <>
      <Whiteboard title="Grammar" subtitle="Word Formation" />
      <div className="line-break">
        <div className={styles.scroll}>
          <div className={styles.table}>
            {/* Headers */}
            <div className={styles.header}>
              <strong>verb</strong> (-en)
            </div>
            <div className={styles.header}>
              <strong>noun</strong> (-ness, -ing)
            </div>
            <div className={styles.header}>
              <strong>adjective </strong>(-full, -less)
            </div>

            {words.map((word, index) => (
              <div key={index} className={styles.row}>
                {/* Verb */}

                <div>
                    <Text playAudio={word.verbAudio}>
                      <Bold>{word.verbWord}</Bold>{" "}
                      <Portuguese>{word.verbPtDefinition}</Portuguese>
                    </Text>
                    <Text playAudio={word.verbExampleAudio}>
                      <Bold>•</Bold> {renderUnderline(word.verbExample, word.verbExampleUnderline)}
                    </Text>
                </div>

                <div>
                  <Text playAudio={word.nounAudio}>
                    <Bold>{word.nounWord}</Bold>{" "}
                    <Portuguese>{word.nounPtDefinition}</Portuguese>
                  </Text>
                  <Text playAudio={word.nounExampleAudio}>
                    <Bold>•</Bold> {renderUnderline(word.nounExample, word.nounExampleUnderline)}
                  </Text>
                </div>
                {/* Noun */}

                <div>
                  {/* Adjective */}
                  <Text playAudio={word.adjectiveAudio}>
                    <Bold>{word.adjectiveWord}</Bold>{" "}
                    <Portuguese>{word.adjectivePtDefinition}</Portuguese>
                  </Text>
                  <Text playAudio={word.adjectiveExampleAudio}>
                    <Bold>•</Bold> {renderUnderline(word.adjectiveExample, word.adjectiveExampleUnderline)}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
