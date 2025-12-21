import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Text } from "@/components/molecules/Text";
import { Bold } from "@/components/atoms/Bold";
import { Portuguese } from "@/components/atoms/Portuguese";
import { Card } from "@/components/atoms/Card";

import styles from "./word-formation.module.css";

const words = [
  {
    verbAudio: "/audio/general/.mp3",
    verbWord: "...",
    verbPtDefinition: "...",
    verbExampleAudio: "...",
    verbExample: "...",

    nounAudio: "/audio/general/.mp3",
    nounWord: "...",
    nounPtDefinition: "...",
    nounExampleAudio: "...",
    nounExample: "...",
    
    adjectiveAudio: "/audio/general/.mp3",
    adjectiveWord: "...",
    adjectivePtDefinition: "...",
    adjectiveExampleAudio : "...",
    adjectiveExample : "...",
  },
  {
    verbAudio: "/audio/general/begin.mp3",
    verbWord: "begin",
    verbPtDefinition: "começar, iniciar",
    verbExampleAudio: "...",
    verbExample: "What time does the class begin?",

    nounAudio: "/audio/general/beginning.mp3",
    nounWord: "beginning",
    nounPtDefinition: "começo, início",
    nounExampleAudio: "...",
    nounExample: "In the beginning I didn’t like it.",
    
    adjectiveAudio: "/audio/general/.mp3",
    adjectiveWord: "...",
    adjectivePtDefinition: "...",
    adjectiveExampleAudio : "...",
    adjectiveExample : "...",
  },
  {
    verbAudio: "/audio/general/beautify.mp3",
    verbWord: "beautify",
    verbPtDefinition: "embelizar",
    verbExampleAudio: "/audio/general/the-city-wants-to-beautify-the-city.mp3",
    verbExample: "The city wants to beautify the park.",

    nounAudio: "/audio/general/beauty.mp3",
    nounWord: "beauty",
    nounPtDefinition: "...",
    nounExampleAudio: "...",
    nounExample: "...",
    
    adjectiveAudio: "/audio/general/beautiful.mp3",
    adjectiveWord: "beautiful",
    adjectivePtDefinition: "bonito(a)",
    adjectiveExampleAudio : "...",
    adjectiveExample : "...",
  },
{
    verbAudio: "/audio/general/.mp3",
    verbWord: "darken",
    verbPtDefinition: "...",
    verbExampleAudio: "...",
    verbExample: "...",

    nounAudio: "/audio/general/.mp3",
    nounWord: "darkness",
    nounPtDefinition: "...",
    nounExampleAudio: "...",
    nounExample: "...",
    
    adjectiveAudio: "/audio/general/.mp3",
    adjectiveWord: "dark",
    adjectivePtDefinition: "...",
    adjectiveExampleAudio : "...",
    adjectiveExample : "...",
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
    audioAdjective: "/audio/general/fast.mp3",
    adjective: "fast",
    audioNoun: "/audio/general/.mp3",
    noun: "...",
    audioVerb: "/audio/general/.mp3",
    verb: "fasten",

    ptAdjective: "...",
    ptNoun: "...",
    ptVerb: "...",
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
    ptVerb: "clarear (light / lit = acender)",
  },
  {
    audioAdjective: "/audio/general/short.mp3",
    adjective: "short",
    audioNoun: "/audio/general/.mp3",
    noun: "shortness",
    audioVerb: "/audio/general/shorten.mp3",
    verb: "shorten",

    ptAdjective: "curto, breve",
    ptNoun: "falta, deficiência",
    ptVerb: "encurtar; abreviar",
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
    audioAdjective: "/audio/general/teach.mp3",
    adjective: "-",
    audioNoun: "/audio/general/.mp3",
    noun: "teacher / teaching",
    audioVerb: "/audio/general/.mp3",
    verb: "teach",

    ptAdjective: "...",
    ptNoun: "...",
    ptVerb: "...",
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
    adjAudio: "/audio/general/.mp3",
    adjEnExample: "...",
    adjUnderline: ["..."],
    adjPtExample: "...",

    nounAudio: "/audio/general/....mp3",
    nounEnExample: "...ness",
    nounUnderline: ["...ness"],
    nounPtExample: "...",

    verbAudio:
      "/audio/general/....mp3",
    verbEnExample: "...en",
    verbUnderline: ["...en"],
    verbPtExample: "...",
  },
  {
    nounAudio: "/audio/general/....mp3",
    nounEnExample: "beginning",
    nounUnderline: ["beginning"],
    nounPtExample: "começo",

    verbAudio: "/audio/general/....mp3",
    verbEnExample: "begin",
    verbUnderline: ["begin"],
    verbPtExample: "começar",
  },
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

    verbAudio:
      "/audio/general/the-sky-began-to-darken-as-the-storm-approached.mp3",
    verbEnExample: "The sky began to darken as the storm approached.",
    verbUnderline: ["darken"],
    verbPtExample:
      "O céu começou a escurecer à medida que a tempestade se aproximava.",
  },
  {
    adjAudio: "/audio/general/.mp3",
    adjEnExample: "This package is light.",
    adjUnderline: ["light"],
    adjPtExample: "Este pacote é leve.",

    nounAudio: "/audio/general/can-you-turn-off-the-lights-please.mp3",
    nounEnExample: "Can you turn off the lights, please?",
    nounUnderline: ["lights"],
    nounPtExample: "Você pode apagar as luzes, por favor?",

    verbAudio: "/audio/general/.mp3",
    verbEnExample: "The room will lighten in the morning.",
    verbUnderline: ["lighten"],
    verbPtExample: "O quarto irá clarear pela manhã.",
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

    verbAudio:
      "/audio/general/the-sky-began-to-darken-as-the-storm-approached.mp3",
    verbEnExample: "The sky began to darken as the storm approached.",
    verbUnderline: ["darken"],
    verbPtExample: "O céu começou a escurecer à medida que a tempestade se aproximava.",
  },
  {
    adjAudio: "/audio/general/.mp3",
    adjEnExample: "short",
    adjUnderline: ["short"],
    adjPtExample: "...",

    nounAudio: "/audio/general/....mp3",
    nounEnExample: "shortness",
    nounUnderline: ["shortness"],
    nounPtExample: "...",

    verbAudio:
      "/audio/general/....mp3",
    verbEnExample: "shorten",
    verbUnderline: ["shorten"],
    verbPtExample: "...",
  },
  {
    adjAudio: "/audio/general/.mp3",
    adjEnExample: "soft",
    adjUnderline: ["soft"],
    adjPtExample: "...",

    nounAudio: "/audio/general/....mp3",
    nounEnExample: "softness",
    nounUnderline: ["softness"],
    nounPtExample: "...",

    verbAudio:
      "/audio/general/....mp3",
    verbEnExample: "soften",
    verbUnderline: ["soften"],
    verbPtExample: "...",
  },
  {
    adjAudio: "/audio/general/this-tool-is-useless.mp3",
    adjEnExample: "This tool is useless.",
    adjUnderline: ["useless"],
    adjPtExample: "...",
  },
  {
    adjAudio: "/audio/general/.mp3",
    adjEnExample: "...",
    adjUnderline: ["..."],
    adjPtExample: "...",

    nounAudio: "/audio/general/....mp3",
    nounEnExample: "...",
    nounUnderline: ["..."],
    nounPtExample: "...",

    verbAudio:
      "/audio/general/....mp3",
    verbEnExample: "...",
    verbUnderline: ["..."],
    verbPtExample: "...",
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
                    {word.verbWord} <Portuguese>{word.verbPtDefinition}</Portuguese>
                  </Text>
                  <Text playAudio={word.verbExampleAudio}><Bold>•</Bold>{" "}{word.verbExample}</Text>
                </div>
                
                <div>
                  <Text playAudio={word.nounAudio}>
                    {word.nounWord} <Portuguese>{word.nounPtDefinition}</Portuguese>
                  </Text>
                  <Text playAudio={word.nounExampleAudio}><Bold>•</Bold>{" "}{word.nounExample}</Text>
                </div>
                {/* Noun */}
                
                <div>
                {/* Adjective */}
                <Text playAudio={word.adjectiveAudio}>
                  {word.adjectiveWord} <Portuguese>{word.adjectivePtDefinition}</Portuguese>
                </Text>
                <Text playAudio={word.adjectiveExampleAudio}><Bold>•</Bold>{" "}{word.adjectiveExample}</Text>
                </div> 
              </div>
            ))}
          </div>
        </div>

        <div className="line-break">
          <Text>
            <Card><strong>Examples</strong></Card>
            
          </Text>
          {examples.map((item, index) => (
            <div key={index}>
              {item.adjEnExample && (
                <Text playAudio={item.adjAudio}>
                  {renderUnderline(item.adjEnExample, item.adjUnderline)}{" "}
                  <Portuguese>{item.adjPtExample}</Portuguese>
                </Text>
              )}

              {item.nounEnExample && (
                <Text playAudio={item.nounAudio}>
                  {renderUnderline(item.nounEnExample, item.nounUnderline)}{" "}
                  <Portuguese>{item.nounPtExample}</Portuguese>
                </Text>
              )}

              {item.verbEnExample && (
                <Text playAudio={item.verbAudio}>
                  {renderUnderline(item.verbEnExample, item.verbUnderline)}{" "}
                  <Portuguese>{item.verbPtExample}</Portuguese>
                </Text>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
