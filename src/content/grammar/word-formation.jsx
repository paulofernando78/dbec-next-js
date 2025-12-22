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
    nounExampleAudio: "/audio/general/the-gallery-has-an-excellent-collection-of-modern-art.mp3",
    nounExample: "The gallery has an excellent collection of modern art.",
    nounExampleUnderline: ["art"],
    nounExamplePt: "A galeria tem uma excelente coleção de arte moderna",

    adjectiveAudio: "/audio/general/artful-artless.mp3",
    adjectiveWord: "artful / artless",
    adjectivePtDefinition: "astuto; criativo, habilidoso / ingênuo / simples / natural",
    adjectiveExampleAudio: "/audio/general/artful-artless1.mp3",
    adjectiveExample: "He gave an artful answer to avoid the question. artless. / The artless child believed everything she was told.",
    adjectiveExampleUnderline: ["artful", "artless"],
    adjectiveExamplePt: "Ele deu uma resposta astuta para evitar a pergunta.",
  },
  {
    verbAudio: "/audio/general/create.mp3",
    verbWord: "create",
    verbPtDefinition: "criar",
    verbExampleAudio: "",
    verbExample: "Artists create beautiful works.",
    verbExampleUnderline: ["create"],
    VerbExamplePt: "Artistas criam obras bonitas.",

    nounAudio: "/audio/general/creation.mp3",
    nounWord: "creation",
    nounPtDefinition: "criação",
    nounExampleAudio: "",
    nounExample: "This painting is a work of creation.",
    nounExampleUnderline: ["creation"],
    nounExamplePt: "Esta pintura é uma obra de criação.",

    adjectiveAudio: "/audio/general/creative.mp3",
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
    verbExampleAudio: "/audio/general/the-city-wants-to-beautify-the-park.mp3",
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
    verbAudio: "/audio/general/.mp3",
    verbWord: "fasten",
    verbPtDefinition: "prender, apertar",
    verbExampleAudio: "",
    verbExample: "Fasten your seatbelt.",
    verbExampleUnderline: ["Fasten"],
    VerbExamplePt: "Aperte seu cinto de segurança.",

    nounAudio: "/audio/general/.mp3",
    nounWord: "fastness",
    nounPtDefinition: "rapidez",
    nounExampleAudio: "",
    nounExample: "The fastness of the car impressed us.",
    nounExampleUnderline: ["fastness"],
    nounExamplePt: "A rapidez do carro nos impressionou.",

    adjectiveAudio: "/audio/general/.mp3",
    adjectiveWord: "fast",
    adjectivePtDefinition: "rápido",
    adjectiveExampleAudio: "",
    adjectiveExample: "This is a fast car.",
    adjectiveExampleUnderline: ["fast"],
    adjectiveExamplePt: "Este é um carro rápido.",
  },
  {
    verbAudio: "/audio/general/.mp3",
    verbWord: "lighten / light",
    verbPtDefinition: "clarear / acender",
    verbExampleAudio: "",
    verbExample: "The room will lighten in the morning.",
    verbExampleUnderline: ["lighten"],
    VerbExamplePt: "O quarto irá clarear pela manhã.",

    nounAudio: "/audio/general/.mp3",
    nounWord: "light",
    nounPtDefinition: "luz",
    nounExampleAudio: "",
    nounExample: "Can you turn off the lights, please?",
    nounExampleUnderline: ["lights"],
    nounExamplePt: "Você pode apagar as luzes, por favor?",

    adjectiveAudio: "/audio/general/.mp3",
    adjectiveWord: "light",
    adjectivePtDefinition: "leve / claro",
    adjectiveExampleAudio: "",
    adjectiveExample: "This package is light.",
    adjectiveExampleUnderline: ["light"],
    adjectiveExamplePt: "Este pacote é leve.",
  },
  {
    verbAudio: "/audio/general/.mp3",
    verbWord: "shorten",
    verbPtDefinition: "...",
    verbExampleAudio: "...",
    verbExample: "...",
    verbExampleUnderline: ["..."],
    VerbExamplePt: "...",

    nounAudio: "/audio/general/.mp3",
    nounWord: "shortness",
    nounPtDefinition: "...",
    nounExampleAudio: "...",
    nounExample: "...",
    nounExampleUnderline: ["..."],
    nounExamplePt: "...",

    adjectiveAudio: "/audio/general/.mp3",
    adjectiveWord: "short",
    adjectivePtDefinition: "curto",
    adjectiveExampleAudio: "",
    adjectiveExample: "This is a short story.",
    adjectiveExampleUnderline: ["short"],
    adjectiveExamplePt: "Esta é uma história curta.",
  },
  {
    verbAudio: "/audio/general/.mp3",
    verbWord: "soften",
    verbPtDefinition: "amaciar",
    verbExampleAudio: "",
    verbExample: "This cream will soften your skin.",
    verbExampleUnderline: ["soften"],
    VerbExamplePt: "Este creme irá amaciar sua pele.",

    nounAudio: "/audio/general/.mp3",
    nounWord: "softness",
    nounPtDefinition: "maciez",
    nounExampleAudio: "",
    nounExample: "The softness of this fabric is amazing.",
    nounExampleUnderline: ["softness"],
    nounExamplePt: "A maciez deste tecido é incrível.",

    adjectiveAudio: "/audio/general/.mp3",
    adjectiveWord: "soft",
    adjectivePtDefinition: "macio",
    adjectiveExampleAudio: "",
    adjectiveExample: "This pillow is very soft.",
    adjectiveExampleUnderline: ["soft"],
    adjectiveExamplePt: "Este travesseiro é muito macio.",
  },
  {
    verbAudio: "/audio/general/.mp3",
    verbWord: "teach",
    verbPtDefinition: "ensinar",
    verbExampleAudio: "",
    verbExample: "She teaches English at the school.",
    verbExampleUnderline: ["teaches"],
    VerbExamplePt: "Ela ensina inglês na escola.",

    nounAudio: "/audio/general/.mp3",
    nounWord: "teacher / teaching",
    nounPtDefinition: "professor / ensino",
    nounExampleAudio: "",
    nounExample: "The teacher has years of experience.",
    nounExampleUnderline: ["teacher"],
    nounExamplePt: "O professor tem anos de experiência.",

    adjectiveAudio: "/audio/general/.mp3",
    adjectiveWord: "teaching",
    adjectivePtDefinition: "pedagógico",
    adjectiveExampleAudio: "",
    adjectiveExample: "Teaching methods have evolved.",
    adjectiveExampleUnderline: ["Teaching"],
    adjectiveExamplePt: "Os métodos pedagógicos evoluíram.",
  },
  {
    verbAudio: "/audio/general/.mp3",
    verbWord: "use",
    verbPtDefinition: "usar",
    verbExampleAudio: "",
    verbExample: "I use this tool every day.",
    verbExampleUnderline: ["use"],
    VerbExamplePt: "Eu uso esta ferramenta todos os dias.",

    nounAudio: "/audio/general/.mp3",
    nounWord: "use",
    nounPtDefinition: "uso",
    nounExampleAudio: "",
    nounExample: "The use of technology is important.",
    nounExampleUnderline: ["use"],
    nounExamplePt: "O uso da tecnologia é importante.",

    adjectiveAudio: "/audio/general/.mp3",
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
                    {/* <Text playAudio={word.verbExampleAudio}>
                      <Bold>•</Bold>{" "}
                      {renderUnderline(
                        word.verbExample,
                        word.verbExampleUnderline
                      )}
                    </Text> */}
                  </span>
                </div>

                <div>
                  <span className={!word.nounAudio ? styles.hidden : undefined}>
                    <Text playAudio={word.nounAudio}>
                      <Bold>{word.nounWord}</Bold>{" "}
                      <Portuguese>{word.nounPtDefinition}</Portuguese>
                    </Text>
                    {/* <Text playAudio={word.nounExampleAudio}>
                      <Bold>•</Bold>{" "}
                      {renderUnderline(
                        word.nounExample,
                        word.nounExampleUnderline
                      )}
                    </Text> */}
                  </span>
                </div>
                {/* Noun */}

                {/* Adjective */}
                <div>
                  <span className={!word.adjectiveAudio ? styles.hidden : undefined}>
                    <Text playAudio={word.adjectiveAudio}>
                      <Bold>{word.adjectiveWord}</Bold>{" "}
                      <Portuguese>{word.adjectivePtDefinition}</Portuguese>
                    </Text>
                    {/* <Text playAudio={word.adjectiveExampleAudio}>
                      <Bold>•</Bold>{" "}
                      {renderUnderline(
                        word.adjectiveExample,
                        word.adjectiveExampleUnderline
                      )}
                    </Text> */}
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
