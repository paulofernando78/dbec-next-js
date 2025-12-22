import styles from "./word-formation.module.css";

import { Whiteboard } from "@/components/molecules/Whiteboard";
import { DictionarySearch } from "../../components/molecules/DictionarySearch/DictionarySearch";
import { Text } from "@/components/molecules/Text";
import { Bold } from "@/components/atoms/Bold";
import { RegisterTag } from "../../components/atoms/RegisterTag/RegisterTag";
import { Portuguese } from "@/components/atoms/Portuguese";

const words = [
  // answer
  {
    verbAudio: "/audio/general/answer.mp3",
    verbWord: "answer",
    verbPtDefinition: "responder",
  },
  // ask
  {
    verbAudio: "/audio/general/ask.mp3",
    verbWord: "ask",
    verbPtDefinition: "perguntar",

    phrasalVerbAudio: "/audio/general/ask out.mp3",
    phrasalVerbWord: "ask out",
    phrasalVerbPtDefinition: "convidar para sair",
  },
  // art
  {
    nounAudio: "/audio/general/art.mp3",
    nounWord: "art",
    nounPtDefinition: "arte",

    adjectiveAudio: "/audio/general/artful-artless.mp3",
    adjectiveWord: "artful / artless",
    adjectivePtDefinition:
      "astuto; criativo, habilidoso / ingênuo / simples / natural",
  },
  // beat
  {
    verbAudio: "/audio/general/beat.mp3",
    verbWord: "beat",
    verbPtDefinition: "bater; derrotar",

    phrasalVerbAudio: "/audio/general/beat-up.mp3",
    phrasalVerbWord: "beat up",
    phrasalVerbPtDefinition: "espancar",

    nounAudio: "/audio/general/beat-noun.mp3",
    nounWord: "beat",
    nounRegisterTag: "informal",
    nounPtDefinition: "ritmo; batida",

    adjectiveAudio: "/audio/general/beaten.mp3",
    adjectiveWord: "beaten",
    adjectiveRegisterTag: "neutral",
    adjectivePtDefinition: "derrotado; gasto",
  },
  // begin-begun-began
  {
    verbAudio: "/audio/general/begin.mp3",
    verbWord: "begin",
    verbPtDefinition: "começar, iniciar",

    nounAudio: "/audio/general/beginning.mp3",
    nounWord: "beginning",
    nounPtDefinition: "começo, início",
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
  // blow
  {
    verbAudio: "/audio/general/blow.mp3",
    verbWord: "blow",
    verbPtDefinition: "soprar; bater (vento)",

    phrasalVerbAudio: "/audio/general/blow-up.mp3",
    phrasalVerbWord: "blow up",
    phrasalVerbPtDefinition: "explodir; perder a calma",

    nounAudio: "/audio/general/blow-noun.mp3",
    nounWord: "blow",
    nounPtDefinition: "golpe; sopro; impacto",

    adjectiveAudio: "/audio/general/blown.mp3",
    adjectiveWord: "blown",
    adjectivePtDefinition: "inchado; estourado",
  },
  // bore
  {
    verbAudio: "/audio/general/bore.mp3",
    verbWord: "bore",
    verbRegisterTag: "neutral",
    verbPtDefinition: "entediar; furar; perfurar",

    phrasalVerbAudio: "/audio/general/bore-into.mp3",
    phrasalVerbWord: "bore into",
    phrasalVerbPtDefinition: "criticar duramente; perfurar",

    nounAudio: "/audio/general/bore-noun.mp3",
    nounWord: "bore",
    nounRegisterTag: "neutral",
    nounPtDefinition: "tédio; pessoa chata",

    adjectiveAudio: "/audio/general/boring-bored.mp3",
    adjectiveWord: "boring / bored",
    adjectiveRegisterTag: "neutral",
    adjectivePtDefinition: "entediante / entediado",
  },
  // bore
  {
    verbAudio: "/audio/general/bore.mp3",
    verbWord: "bore",
    verbPtDefinition: "entediar; furar; perfurar",

    phrasalVerbAudio: "/audio/general/bore-into.mp3",
    phrasalVerbWord: "bore into",
    phrasalVerbPtDefinition: "criticar duramente; perfurar",

    nounAudio: "/audio/general/bore-noun.mp3",
    nounWord: "bore",
    nounPtDefinition: "tédio; pessoa chata",

    adjectiveAudio: "/audio/general/boring-bored.mp3",
    adjectiveWord: "boring / bored",
    adjectivePtDefinition: "entediante / entediado",
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
    nounRegisterTag: "formal",
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
  },
  // purity
  {
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

export default function WordFormation() {
  return (
    <>
      <Whiteboard title="Grammar" subtitle="Word Formation" />
      <div className="line-break">
        <DictionarySearch />
        <div className={styles.scroll}>
          <div className={styles.table}>
            {/* Headers */}
            <Text className={styles.header}>
              <Bold className="block bold">verb</Bold>
              <span>(-en, -ify)</span>
            </Text>

            <Text className={styles.header}>
              <Bold className="block bold">phrasal verb</Bold>
              <span>(+ prepositions)</span>
            </Text>

            <Text className={styles.header}>
              <Bold className="block">noun</Bold>
              <span>( -ing, -ness, -ity, -hood)</span>
            </Text>

            <Text className={styles.header}>
              <Bold>adjective </Bold>
              <span>(-ed, ing, -ous, -ive, -ful, -less)</span>
            </Text>

            {/* Rows */}
            {words.map((word, index) => (
              <div key={index} className={styles.row}>
                {/* verb */}
                <div>
                  <Text
                    playAudio={word.verbAudio}
                    className={!word.verbAudio ? styles.hidden : undefined}
                  >
                    <Bold>{word.verbWord}</Bold>{" "}
                    {word.verbRegisterTag && (
                      <RegisterTag>{word.verbRegisterTag}</RegisterTag>
                    )}{" "}
                    <Portuguese>{word.verbPtDefinition}</Portuguese>
                  </Text>
                </div>

                {/* phrasal verb */}
                <div>
                  <Text
                    playAudio={word.phrasalVerbAudio}
                    className={
                      !word.phrasalVerbAudio ? styles.hidden : undefined
                    }
                  >
                    <Bold>{word.phrasalVerbWord}</Bold>{" "}
                    <Portuguese>{word.phrasalVerbPtDefinition}</Portuguese>
                  </Text>
                </div>

                {/* noun */}
                <div>
                  <Text
                    playAudio={word.nounAudio}
                    className={!word.nounAudio ? styles.hidden : undefined}
                  >
                    <Bold>{word.nounWord}</Bold>{" "}
                    {word.nounRegisterTag && (
                      <RegisterTag>{word.nounRegisterTag}</RegisterTag>
                    )}{" "}
                    <Portuguese>{word.nounPtDefinition}</Portuguese>
                  </Text>
                </div>

                {/* adjective */}
                <div>
                  <Text
                    playAudio={word.adjectiveAudio}
                    className={!word.adjectiveAudio ? styles.hidden : undefined}
                  >
                    <Bold>{word.adjectiveWord}</Bold>{" "}
                    {word.adjectiveRegisterTag && (
                      <RegisterTag>{word.adjectiveRegisterTag}</RegisterTag>
                    )}{" "}
                    <Portuguese>{word.adjectivePtDefinition}</Portuguese>
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
