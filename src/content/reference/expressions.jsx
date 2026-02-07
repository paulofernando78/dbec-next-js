import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Section } from "@/components/molecules/Section";
import { Expressions } from "@/components/molecules/Expressions";
import { Examples } from "@/components/molecules/Examples";
import { expression, example } from "../../helpers/content";
import { LineBreak } from "@/components/atoms/LineBreak";

export default function Expression() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="Expressions" />
      <div className="line-break">
        <Section id="" label="Common Epxressions" heading={3}>
          {/* all of a sudden */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/all-of-a-sudden.mp3",
              englishTerm: "all of a sudden",
              portugueseDefinition: "de repente",
            })}
          />
          {/* All of a sudden, the lights went out. */}
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/all-of-a-sudden.mp3",
                englishExample: ["All of a sudden, the lights went out."],
                portugueseExample: ["De repente, as luzes se apagaram."],
              }),
            ]}
          />
          <LineBreak />
          {/* // ... */}

          {/* as a matter of fact */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: "as a matter of fact",
              portugueseDefinition: "na verdade",
            })}
          />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/.mp3",
                englishExample: ["As a matter of fact, I don’t like coffee."],
                portugueseExample: ["Na verdade, eu não gosto de café."],
              }),
            ]}
          />
          <LineBreak />

          {/* as soon as possible */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: "as soon as possible",
              portugueseDefinition: "o mais rápido possível",
            })}
          />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/.mp3",
                englishExample: ["Please call me as soon as possible."],
                portugueseExample: [
                  "Por favor, me ligue o mais rápido possível.",
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* at first */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: "at first",
              portugueseDefinition: "no começo / a princípio",
            })}
          />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/.mp3",
                englishExample: ["At first, I didn’t understand the question."],
                portugueseExample: ["No começo, eu não entendi a pergunta."],
              }),
            ]}
          />
          <LineBreak />

          {/* at the end of the day */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: "at the end of the day",
              portugueseDefinition: "no fim das contas",
            })}
          />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/.mp3",
                englishExample: [
                  "At the end of the day, family is what matters most.",
                ],
                portugueseExample: [
                  "No fim das contas, a família é o que mais importa.",
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* by the way */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: "by the way",
              portugueseDefinition: "a propósito",
            })}
          />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/.mp3",
                englishExample: ["By the way, have you seen my keys?"],
                portugueseExample: ["A propósito, você viu minhas chaves?"],
              }),
            ]}
          />
          <LineBreak />

          {/* call it a day */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: "call it a day",
              portugueseDefinition:
                "encerrar por hoje/pelo dia (trabalho/expediente/tarefa)",
            })}
          />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/.mp3",
                englishExample: ["Let’s call it a day and go home."],
                portugueseExample: ["Vamos encerrar por hoje e ir para casa."],
              }),
            ]}
          />
          <LineBreak />

          {/* every now and then */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: "every now and then",
              portugueseDefinition: "de vez em quando",
            })}
          />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/.mp3",
                englishExample: ["Every now and then, I eat chocolate."],
                portugueseExample: ["De vez em quando, eu como chocolate."],
              }),
            ]}
          />
          <LineBreak />

          {/* every other day */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: "every other day",
              portugueseDefinition: "dia sim, dia não",
            })}
          />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/.mp3",
                englishExample: ["I go to the gym every other day."],
                portugueseExample: ["Eu vou à academia dia sim, dia não."],
              }),
            ]}
          />
          <LineBreak />

          {/* for the time being */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: "for the time being",
              portugueseDefinition: "por enquanto",
            })}
          />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/.mp3",
                englishExample: ["For the time being, we will stay here."],
                portugueseExample: ["Por enquanto, vamos ficar aqui."],
              }),
            ]}
          />
          <LineBreak />

          {/* from time to time */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: "from time to time",
              portugueseDefinition: "de tempos em tempos",
            })}
          />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/.mp3",
                englishExample: [
                  "From time to time, she visits her grandparents.",
                ],
                portugueseExample: ["De tempos em tempos, ela visita os avós."],
              }),
            ]}
          />
          <LineBreak />

          {/* hard stop */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: "hard stop",
              portugueseDefinition:
                "encerrar por exemplo uma reunião em um tempo limite",
            })}
          />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/.mp3",
                englishExample: ["We have a hard stop at 5 p.m."],
                portugueseExample: ["Temos que encerrar às 5 da tarde."],
              }),
            ]}
          />
          <LineBreak />

          {/* if the shoe fits / if the cap fits */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: [
                { part: "if the shoe fits", type: "bold" },
                " ",
                { part: "if the cap fits", ukFlag: true },
              ],
              portugueseDefinition: "se a carapuça serve",
            })}
          />
          <LineBreak />

          {/* in a nutshell */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: "in a nutshell",
              portugueseDefinition: "em poucas palavras / resumindo",
            })}
          />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/.mp3",
                englishExample: ["In a nutshell, the plan didn’t work."],
                portugueseExample: ["Resumindo, o plano não funcionou."],
              }),
            ]}
          />
          <LineBreak />

          {/* in the long run */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: "in the long run",
              portugueseDefinition: "a longo prazo",
            })}
          />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/.mp3",
                englishExample: ["In the long run, this will save money."],
                portugueseExample: [
                  "A longo prazo, isso vai economizar dinheiro.",
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* in the meantime */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: "in the meantime",
              portugueseDefinition: "enquanto isso",
            })}
          />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/.mp3",
                englishExample: ["In the meantime, you can wait here."],
                portugueseExample: ["Enquanto isso, você pode esperar aqui."],
              }),
            ]}
          />
          <LineBreak />

          {/* no matter what */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: "no matter what",
              portugueseDefinition: "não importa o que aconteça",
            })}
          />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/.mp3",
                englishExample: ["I will support you no matter what."],
                portugueseExample: [
                  "Eu vou te apoiar não importa o que aconteça.",
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* on the other hand */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: "on the other hand",
              portugueseDefinition: "por outro lado",
            })}
          />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/.mp3",
                englishExample: [
                  "I like coffee. On the other hand, she prefers tea.",
                ],
                portugueseExample: [
                  "Eu gosto de café. Por outro lado, ela prefere chá.",
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* once in a while */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: "once in a while",
              portugueseDefinition: "de vez em quando",
            })}
          />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/.mp3",
                englishExample: ["Once in a while, we go to the beach."],
                portugueseExample: ["De vez em quando, nós vamos à praia."],
              }),
            ]}
          />
          <LineBreak />

          {/* right away */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: "right away",
              portugueseDefinition: "imediatamente",
            })}
          />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/.mp3",
                englishExample: ["Please answer me right away."],
                portugueseExample: ["Por favor, me responda imediatamente."],
              }),
            ]}
          />
          <LineBreak />

          {/* so far, so good */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: "so far, so good",
              portugueseDefinition: "até agora, tudo bem",
            })}
          />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/.mp3",
                englishExample: ["So far, so good. Everything is working."],
                portugueseExample: [
                  "Até agora, tudo bem. Tudo está funcionando.",
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* The shoemaker's son always goes barefoot */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/.mp3",
              englishTerm: "The shoemaker's son always goes barefoot",
              portugueseDefinition: "casa de ferreiro, espeto de pau",
            })}
          />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/.mp3",
                englishExample: [
                  "He is a mechanic, but his own car is always broken.",
                ],
                portugueseExample: [
                  "Ele é mecânico, mas o próprio carro dele está sempre quebrado.",
                ],
              }),
            ]}
          />
          <LineBreak />
        </Section>
      </div>
    </>
  );
}
