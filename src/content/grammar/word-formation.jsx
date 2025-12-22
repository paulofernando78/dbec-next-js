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
    verbExampleAudio: "",
    verbExample: "...",
    verbExampleUnderline: ["..."],
    VerbExamplePt: "...",

    nounAudio: "/audio/general/art.mp3",
    nounWord: "art",
    nounPtDefinition: "arte",
    nounExampleAudio: "",
    nounExample: "art",
    nounExampleUnderline: ["art"],
    nounExamplePt: "",

    adjectiveAudio: "/audio/general/art.mp3",
    adjectiveWord: "artful / artless",
    adjectivePtDefinition: "criativo",
    adjectiveExampleAudio: "",
    adjectiveExample: "She has a creative mind.",
    adjectiveExampleUnderline: ["creative"],
    adjectiveExamplePt: "Ela tem uma mente criativa.",
  },
  {
    verbAudio: "",
    verbWord: "create",
    verbPtDefinition: "criar",
    verbExampleAudio: "",
    verbExample: "Artists create beautiful works.",
    verbExampleUnderline: ["create"],
    VerbExamplePt: "Artistas criam obras bonitas.",

    nounAudio: "",
    nounWord: "creation",
    nounPtDefinition: "criação",
    nounExampleAudio: "",
    nounExample: "This painting is a work of creation.",
    nounExampleUnderline: ["creation"],
    nounExamplePt: "Esta pintura é uma obra de criação.",

    adjectiveAudio: "",
    adjectiveWord: "creative",
    adjectivePtDefinition: "criativo",
    adjectiveExampleAudio: "",
    adjectiveExample: "She has a creative mind.",
    adjectiveExampleUnderline: ["creative"],
    adjectiveExamplePt: "Ela tem uma mente criativa.",
  },
  {
    verbAudio: "/audio/general/begin.mp3",
    verbWord: "begin - began - begun",
    verbPtDefinition: "começar, iniciar",
    verbExampleAudio: "",
    verbExample: "What time does the class begin?",
    verbExampleUnderline: ["begin"],
    VerbExamplePt: "Que horas a aula começa?",

    nounAudio: "/audio/general/beginning.mp3",
    nounWord: "beginning",
    nounPtDefinition: "começo, início",
    nounExampleAudio: "",
    nounExample: "In the beginning I didn't like it.",
    nounExampleUnderline: ["beginning"],
    nounExamplePt: "No começo eu não gostei.",

    adjectiveAudio: "",
    adjectiveWord: "...",
    adjectivePtDefinition: "...",
    adjectiveExampleAudio: "...",
    adjectiveExample: "...",
    adjetiveExampleUnderline: ["..."],
    adjectiveExamplePt: "...",
  },
  {
    verbAudio: "/audio/general/beautify.mp3",
    verbWord: "beautify",
    verbPtDefinition: "embelizar",
    verbExampleAudio: "/audio/general/the-city-wants-to-beautify-the-city.mp3",
    verbExample: "The city wants to beautify the park.",
    verbExampleUnderline: ["beautify"],
    VerbExamplePt: "A cidade quer embelezar o parque.",

    nounAudio: "/audio/general/beauty.mp3",
    nounWord: "beauty",
    nounPtDefinition: "beleza",
    nounExampleAudio: "/audio/general/shes-a-woman-of-great-beauty.mp3",
    nounExample: "She's a woman of great beauty.",
    nounExampleUnderline: ["beauty"],
    nounExamplePt: "Ela é uma mulher de uma grande beleza.",

    adjectiveAudio: "/audio/general/beautiful.mp3",
    adjectiveWord: "beautiful",
    adjectivePtDefinition: "bonito(a)",
    adjectiveExampleAudio: "",
    adjectiveExample: "That girl is beautiful.",
    adjectiveExampleUnderline: ["beautiful"],
    adjectiveExamplePt: "Aquela menina é bonita.",
  },
  {
    verbAudio: "/audio/general/darken.mp3",
    verbWord: "darken",
    verbPtDefinition: "escurecer",
    verbExampleAudio:
      "/audio/general/the-sky-began-to-darken-as-the-storm-approached.mp3",
    verbExample: "The sky began to darken as the storm approached.",
    verbExampleUnderline: ["darken"],
    VerbExamplePt:
      "O céu começou a escurecer à medida que a tempestade se aproximava.",

    nounAudio: "/audio/general/darkness.mp3",
    nounWord: "darkness",
    nounPtDefinition: "escuridão",
    nounExampleAudio: "",
    nounExample: "The car disappeared into the darkness.",
    nounExampleUnderline: ["darkness"],
    nounExamplePt: "O carro desapareceu na escuridão.",

    adjectiveAudio: "/audio/general/dark.mp3",
    adjectiveWord: "dark",
    adjectivePtDefinition: "escuro",
    adjectiveExampleAudio: "",
    adjectiveExample: "It's getting dark. Let's go home.",
    adjectiveExampleUnderline: ["dark"],
    adjectiveExamplePt: "Está ficando escuro. Vamos para casa.",
  },
  {
    verbAudio: "",
    verbWord: "fasten",
    verbPtDefinition: "prender, apertar",
    verbExampleAudio: "",
    verbExample: "Fasten your seatbelt.",
    verbExampleUnderline: ["Fasten"],
    VerbExamplePt: "Aperte seu cinto de segurança.",

    nounAudio: "",
    nounWord: "fastness",
    nounPtDefinition: "rapidez",
    nounExampleAudio: "",
    nounExample: "The fastness of the car impressed us.",
    nounExampleUnderline: ["fastness"],
    nounExamplePt: "A rapidez do carro nos impressionou.",

    adjectiveAudio: "",
    adjectiveWord: "fast",
    adjectivePtDefinition: "rápido",
    adjectiveExampleAudio: "",
    adjectiveExample: "This is a fast car.",
    adjectiveExampleUnderline: ["fast"],
    adjectiveExamplePt: "Este é um carro rápido.",
  },
  {
    verbAudio: "",
    verbWord: "lighten / light",
    verbPtDefinition: "clarear / acender",
    verbExampleAudio: "",
    verbExample: "The room will lighten in the morning.",
    verbExampleUnderline: ["lighten"],
    VerbExamplePt: "O quarto irá clarear pela manhã.",

    nounAudio: "",
    nounWord: "light",
    nounPtDefinition: "luz",
    nounExampleAudio: "",
    nounExample: "Can you turn off the lights, please?",
    nounExampleUnderline: ["lights"],
    nounExamplePt: "Você pode apagar as luzes, por favor?",

    adjectiveAudio: "",
    adjectiveWord: "light",
    adjectivePtDefinition: "leve / claro",
    adjectiveExampleAudio: "",
    adjectiveExample: "This package is light.",
    adjectiveExampleUnderline: ["light"],
    adjectiveExamplePt: "Este pacote é leve.",
  },
  {
    verbAudio: "",
    verbWord: "shorten",
    verbPtDefinition: "...",
    verbExampleAudio: "...",
    verbExample: "...",
    verbExampleUnderline: ["..."],
    VerbExamplePt: "...",

    nounAudio: "",
    nounWord: "shortness",
    nounPtDefinition: "...",
    nounExampleAudio: "...",
    nounExample: "...",
    nounExampleUnderline: ["..."],
    nounExamplePt: "...",

    adjectiveAudio: "",
    adjectiveWord: "short",
    adjectivePtDefinition: "curto",
    adjectiveExampleAudio: "",
    adjectiveExample: "This is a short story.",
    adjectiveExampleUnderline: ["short"],
    adjectiveExamplePt: "Esta é uma história curta.",
  },
  {
    verbAudio: "",
    verbWord: "soften",
    verbPtDefinition: "amaciar",
    verbExampleAudio: "",
    verbExample: "This cream will soften your skin.",
    verbExampleUnderline: ["soften"],
    VerbExamplePt: "Este creme irá amaciar sua pele.",

    nounAudio: "",
    nounWord: "softness",
    nounPtDefinition: "maciez",
    nounExampleAudio: "",
    nounExample: "The softness of this fabric is amazing.",
    nounExampleUnderline: ["softness"],
    nounExamplePt: "A maciez deste tecido é incrível.",

    adjectiveAudio: "",
    adjectiveWord: "soft",
    adjectivePtDefinition: "macio",
    adjectiveExampleAudio: "",
    adjectiveExample: "This pillow is very soft.",
    adjectiveExampleUnderline: ["soft"],
    adjectiveExamplePt: "Este travesseiro é muito macio.",
  },
  {
    verbAudio: "",
    verbWord: "teach",
    verbPtDefinition: "ensinar",
    verbExampleAudio: "",
    verbExample: "She teaches English at the school.",
    verbExampleUnderline: ["teaches"],
    VerbExamplePt: "Ela ensina inglês na escola.",

    nounAudio: "",
    nounWord: "teacher / teaching",
    nounPtDefinition: "professor / ensino",
    nounExampleAudio: "",
    nounExample: "The teacher has years of experience.",
    nounExampleUnderline: ["teacher"],
    nounExamplePt: "O professor tem anos de experiência.",

    adjectiveAudio: "",
    adjectiveWord: "teaching",
    adjectivePtDefinition: "pedagógico",
    adjectiveExampleAudio: "",
    adjectiveExample: "Teaching methods have evolved.",
    adjectiveExampleUnderline: ["Teaching"],
    adjectiveExamplePt: "Os métodos pedagógicos evoluíram.",
  },
  {
    verbAudio: "",
    verbWord: "use",
    verbPtDefinition: "usar",
    verbExampleAudio: "",
    verbExample: "I use this tool every day.",
    verbExampleUnderline: ["use"],
    VerbExamplePt: "Eu uso esta ferramenta todos os dias.",

    nounAudio: "",
    nounWord: "use",
    nounPtDefinition: "uso",
    nounExampleAudio: "",
    nounExample: "The use of technology is important.",
    nounExampleUnderline: ["use"],
    nounExamplePt: "O uso da tecnologia é importante.",

    adjectiveAudio: "",
    adjectiveWord: "useful / useless",
    adjectivePtDefinition: "útil / inútil",
    adjectiveExampleAudio: "",
    adjectiveExample: "This tool is useful.",
    adjectiveExampleUnderline: ["useful"],
    adjectiveExamplePt: "Esta ferramenta é útil.",
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
              <span>( -ing, -ness)</span>
            </Text>

            <Text className={styles.header}>
              <strong>adjective </strong>
              <span>(-ed, ing, -ous, -ive, -full, -less)</span>
            </Text>

            {words.map((word, index) => (
              <div key={index} className={styles.row}>
                
                {/* Verb */}
                <div>
                  <Text playAudio={word.verbAudio}>
                    <Bold>{word.verbWord}</Bold>{" "}
                    <Portuguese>{word.verbPtDefinition}</Portuguese>
                  </Text>
                  <Text playAudio={word.verbExampleAudio}>
                    <Bold>•</Bold>{" "}
                    {renderUnderline(
                      word.verbExample,
                      word.verbExampleUnderline
                    )}
                  </Text>
                </div>

                <div>
                  <Text playAudio={word.nounAudio}>
                    <Bold>{word.nounWord}</Bold>{" "}
                    <Portuguese>{word.nounPtDefinition}</Portuguese>
                  </Text>
                  <Text playAudio={word.nounExampleAudio}>
                    <Bold>•</Bold>{" "}
                    {renderUnderline(
                      word.nounExample,
                      word.nounExampleUnderline
                    )}
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
                    <Bold>•</Bold>{" "}
                    {renderUnderline(
                      word.adjectiveExample,
                      word.adjectiveExampleUnderline
                    )}
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
