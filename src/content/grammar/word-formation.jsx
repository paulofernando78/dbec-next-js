import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Text } from "@/components/molecules/Text";
import { Bold } from "@/components/atoms/Bold";
import { Portuguese } from "@/components/atoms/Portuguese";

import styles from "./word-formation.module.css";

const words = [
  // art
  {
    verbAudio: "",
    verbWord: "...",
    verbPtDefinition: "...",

    nounAudio: "/audio/general/art.mp3",
    nounWord: "art",
    nounPtDefinition: "arte",

    adjectiveAudio: "/audio/general/artful-artless.mp3",
    adjectiveWord: "artful / artless",
    adjectivePtDefinition:
      "astuto; criativo, habilidoso / ingênuo / simples / natural",
  },
  // create
  {
    verbAudio: "/audio/general/create.mp3",
    verbWord: "create",
    verbPtDefinition: "criar",

    nounAudio: "/audio/general/creation.mp3",
    nounWord: "creation",
    nounPtDefinition: "criação",

    adjectiveAudio: "/audio/general/creative.mp3",
    adjectiveWord: "creative",
    adjectivePtDefinition: "criativo",
  },
  // begin-begun-began
  {
    verbAudio: "/audio/general/begin-began-begun.mp3",
    verbWord: "begin - began - begun",
    verbPtDefinition: "começar, iniciar",

    nounAudio: "/audio/general/beginning.mp3",
    nounWord: "beginning",
    nounPtDefinition: "começo, início",

    adjectiveAudio: "",
    adjectiveWord: "...",
    adjectivePtDefinition: "...",
  },
  // beautify
  {
    verbAudio: "/audio/general/beautify.mp3",
    verbWord: "beautify",
    verbPtDefinition: "embelezar",

    nounAudio: "/audio/general/beauty.mp3",
    nounWord: "beauty",
    nounPtDefinition: "beleza",

    adjectiveAudio: "/audio/general/beautiful.mp3",
    adjectiveWord: "beautiful",
    adjectivePtDefinition: "bonito(a)",
  },
  // darken
  {
    verbAudio: "/audio/general/darken.mp3",
    verbWord: "darken",
    verbPtDefinition: "escurecer",

    nounAudio: "/audio/general/darkness.mp3",
    nounWord: "darkness",
    nounPtDefinition: "escuridão",

    adjectiveAudio: "/audio/general/dark.mp3",
    adjectiveWord: "dark",
    adjectivePtDefinition: "escuro",
  },
  // fasten
  {
    verbAudio: "/audio/general/fasten.mp3",
    verbWord: "fasten",
    verbPtDefinition: "prender, apertar",

    nounAudio: "/audio/general/fastness.mp3",
    nounWord: "fastness",
    nounPtDefinition: "pressa, rapidez",

    adjectiveAudio: "/audio/general/fast.mp3",
    adjectiveWord: "fast",
    adjectivePtDefinition: "rápido",
  },
  {
    // light
    verbAudio: "/audio/general/light.mp3",
    verbWord: "light",
    verbPtDefinition: "acender",

    nounAudio: "/audio/general/light.mp3",
    nounWord: "light",
    nounPtDefinition: "luz",

    adjectiveAudio: "/audio/general/light.mp3",
    adjectiveWord: "light",
    adjectivePtDefinition: "leve; claro",
  },
  // lighten
  {
    verbAudio: "/audio/general/lighten.mp3",
    verbWord: "lighten",
    verbPtDefinition: "clarear; tornar mais leve",

    nounAudio: "",
    nounWord: "",
    nounPtDefinition: "",

    adjectiveAudio: "",
    adjectiveWord: "",
    adjectivePtDefinition: "",
  },
  // purity
  {
    verbAudio: "",
    verbWord: "...",
    verbPtDefinition: "...",

    nounAudio: "/audio/general/purity.mp3",
    nounWord: "purity",
    nounPtDefinition: "pureza",

    adjectiveAudio: "/audio/general/pure.mp3",
  adjectiveWord: "pure",
  adjectivePtDefinition: "puro(a)",
  },
  // shorten
  {
    verbAudio: "/audio/general/shorten.mp3",
    verbWord: "shorten",
    verbPtDefinition: "encurtar; reduzir",

    nounAudio: "/audio/general/shortness.mp3",
    nounWord: "shortness",
    nounPtDefinition: "falta de; deficiência",

    adjectiveAudio: "/audio/general/short.mp3",
    adjectiveWord: "short",
    adjectivePtDefinition: "curto",
  },
  // soften
  {
    verbAudio: "/audio/general/soften.mp3",
    verbWord: "soften",
    verbPtDefinition: "amaciar",

    nounAudio: "/audio/general/softness.mp3",
    nounWord: "softness",
    nounPtDefinition: "maciez",

    adjectiveAudio: "/audio/general/soft.mp3",
    adjectiveWord: "soft",
    adjectivePtDefinition: "macio",
  },
  // teach
  {
    verbAudio: "/audio/general/teach.mp3",
    verbWord: "teach",
    verbPtDefinition: "ensinar",

    nounAudio: "/audio/general/teacher-teaching.mp3",
    nounWord: "teacher / teaching",
    nounPtDefinition: "professor / ensino",

    adjectiveAudio: "/audio/general/teaching.mp3",
    adjectiveWord: "teaching",
    adjectivePtDefinition: "pedagógico",
  },
  // use
  {
    verbAudio: "/audio/general/use-verb.mp3",
    verbWord: "use",
    verbPtDefinition: "usar",

    nounAudio: "/audio/general/use-noun.mp3",
    nounWord: "use",
    nounPtDefinition: "uso",

    adjectiveAudio: "/audio/general/useful-useless.mp3",
    adjectiveWord: "useful / useless",
    adjectivePtDefinition: "útil / inútil",
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
    underlineWords.some((w) => part?.toLowerCase() === w.toLowerCase()) ? (
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
            <Text className={styles.header}>
              <Bold className="block bold">verb</Bold>
              <span>(-en)</span>
            </Text>

            <Text className={styles.header}>
              <strong className="block">noun</strong>
              <span>( -ing, -ness, -ity, -hood)</span>
            </Text>

            <Text className={styles.header}>
              <strong>adjective </strong>
              <span>(-ed, ing, -ous, -ive, -full, -less)</span>
            </Text>

            {words.map((word, index) => (
              <div key={index} className={styles.row}>
                {/* Verb */}
                <div>
                  <span className={!word.verbAudio ? styles.hidden : undefined}>
                    <Text playAudio={word.verbAudio}>
                      <Bold>{word.verbWord}</Bold>{" "}
                      <Portuguese>{word.verbPtDefinition}</Portuguese>
                    </Text>
                  </span>
                </div>

                <div>
                  <span className={!word.nounAudio ? styles.hidden : undefined}>
                    <Text playAudio={word.nounAudio}>
                      <Bold>{word.nounWord}</Bold>{" "}
                      <Portuguese>{word.nounPtDefinition}</Portuguese>
                    </Text>
                  </span>
                </div>
                {/* Noun */}

                {/* Adjective */}
                <div>
                  <span
                    className={!word.adjectiveAudio ? styles.hidden : undefined}
                  >
                    <Text playAudio={word.adjectiveAudio}>
                      <Bold>{word.adjectiveWord}</Bold>{" "}
                      <Portuguese>{word.adjectivePtDefinition}</Portuguese>
                    </Text>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
