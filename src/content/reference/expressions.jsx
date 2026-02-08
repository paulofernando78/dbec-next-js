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
              audio: "/assets/audio/general/as-a-matter-of-fact.mp3",
              englishTerm: "as a matter of fact",
              portugueseDefinition: "na verdade",
            })}
          />
          {/* As a matter of fact, I don’t like coffee. */}
          <Examples
            items={[
              example({
                englishExample: ["As a matter of fact, I don’t like coffee."],
                portugueseExample: ["Na verdade, eu não gosto de café."],
              }),
            ]}
          />
          <LineBreak />

          {/* as soon as possible */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/as-soon-as-possible.mp3",
              englishTerm: "as soon as possible",
              portugueseDefinition: "o mais rápido possível",
            })}
          />
          {/* Please call me as soon as possible. */}
          <Examples
            items={[
              example({
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
              audio: "/assets/audio/general/at-first.mp3",
              englishTerm: "at first",
              portugueseDefinition: "no começo / a princípio",
            })}
          />
          {/* At first, I didn’t understand the question. */}
          <Examples
            items={[
              example({
                englishExample: ["At first, I didn’t understand the question."],
                portugueseExample: ["No começo, eu não entendi a pergunta."],
              }),
            ]}
          />
          <LineBreak />

          {/* at the end of the day */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/at-the-end-of-the-day.mp3",
              englishTerm: "at the end of the day",
              portugueseDefinition: "no fim das contas",
            })}
          />
          {/* At the end of the day, family is what matters most. */}
          <Examples
            items={[
              example({
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
              audio: "/assets/audio/general/by-the-way.mp3",
              englishTerm: "by the way",
              portugueseDefinition: "a propósito",
            })}
          />
          {/* By the way, have you seen my keys? */}
          <Examples
            items={[
              example({
                englishExample: ["By the way, have you seen my keys?"],
                portugueseExample: ["A propósito, você viu minhas chaves?"],
              }),
            ]}
          />
          <LineBreak />

          {/* call it a day */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/call-it-a-day.mp3",
              englishTerm: "call it a day",
              portugueseDefinition:
                "encerrar por hoje/pelo dia (trabalho/expediente/tarefa)",
            })}
          />
          {/* Let’s call it a day and go home. */}
          <Examples
            items={[
              example({
                englishExample: ["Let’s call it a day and go home."],
                portugueseExample: ["Vamos encerrar por hoje e ir para casa."],
              }),
            ]}
          />
          <LineBreak />

          {/* every now and then */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/every-now-and-then.mp3",
              englishTerm: "every now and then",
              portugueseDefinition: "de vez em quando",
            })}
          />
          {/* Every now and then, I eat chocolate. */}
          <Examples
            items={[
              example({
                englishExample: ["Every now and then, I eat chocolate."],
                portugueseExample: ["De vez em quando, eu como chocolate."],
              }),
            ]}
          />
          <LineBreak />

          {/* every other day */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/every-other-day.mp3",
              englishTerm: "every other day",
              portugueseDefinition: "dia sim, dia não",
            })}
          />
          {/* I go to the gym every other day. */}
          <Examples
            items={[
              example({
                englishExample: ["I go to the gym every other day."],
                portugueseExample: ["Eu vou à academia dia sim, dia não."],
              }),
            ]}
          />
          <LineBreak />

          {/* for the time being */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/for-the-time-being.mp3",
              englishTerm: "for the time being",
              portugueseDefinition: "por enquanto",
            })}
          />
          {/* For the time being, we will stay here. */}
          <Examples
            items={[
              example({
                englishExample: ["For the time being, we will stay here."],
                portugueseExample: ["Por enquanto, vamos ficar aqui."],
              }),
            ]}
          />
          <LineBreak />

          {/* from time to time */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/from-time-to-time.mp3",
              englishTerm: "from time to time",
              portugueseDefinition: "de tempos em tempos",
            })}
          />
          {/* From time to time, she visits her grandparents. */}
          <Examples
            items={[
              example({
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
              audio: "/assets/audio/general/hard-stop.mp3",
              englishTerm: "hard stop",
              portugueseDefinition:
                "encerrar por exemplo uma reunião em um tempo limite",
            })}
          />
          {/* We have a hard stop at 5 p.m. */}
          <Examples
            items={[
              example({
                englishExample: ["We have a hard stop at 5 p.m."],
                portugueseExample: ["Temos que encerrar às 5 da tarde."],
              }),
            ]}
          />
          <LineBreak />

          {/* if the shoe fits / if the cap fits */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/if-the-cap-fits.mp3",
              englishTerm: [{ part: "if the cap fits", type: "bold" }, " "],
              portugueseDefinition: "se a carapuça serve",
            })}
          />
          <Expressions
            value={expression({
              audio: "/assets/audio/general/if-the-shoe-fits.mp3",
              englishTerm: [
                { ukFlag: true },
                { part: "if the shoe fits", type: "bold" },
              ],
            })}
          />
          {/* I wasn’t talking about you, but if the shoe fits... */}
          <Examples
            items={[
              example({
                englishExample: [
                  "I wasn’t talking about you, but if the shoe fits...",
                ],
                portugueseExample: [
                  "Eu não estava falando de você, mas se a carapuça serve...",
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* in a nutshell */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/in-a-nut-shell.mp3",
              englishTerm: "in a nutshell",
              portugueseDefinition: "em poucas palavras / resumindo",
            })}
          />
          {/* In a nutshell, the plan didn’t work. */}
          <Examples
            items={[
              example({
                englishExample: ["In a nutshell, the plan didn’t work."],
                portugueseExample: ["Resumindo, o plano não funcionou."],
              }),
            ]}
          />
          <LineBreak />

          {/* in the long run */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/in-the-long-run.mp3",
              englishTerm: "in the long run",
              portugueseDefinition: "a longo prazo",
            })}
          />
          {/* In the long run, this will save money. */}
          <Examples
            items={[
              example({
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
              audio: "/assets/audio/general/in-the-meantime.mp3",
              englishTerm: "in the meantime",
              portugueseDefinition: "enquanto isso",
            })}
          />
          {/* In the meantime, you can wait here. */}
          <Examples
            items={[
              example({
                englishExample: ["In the meantime, you can wait here."],
                portugueseExample: ["Enquanto isso, você pode esperar aqui."],
              }),
            ]}
          />
          <LineBreak />

          {/* no matter what */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/no-matter-what.mp3",
              englishTerm: "no matter what",
              portugueseDefinition: "não importa o que aconteça",
            })}
          />
          {/* I will support you no matter what. */}
          <Examples
            items={[
              example({
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
              audio: "/assets/audio/general/on-the-other-hand.mp3",
              englishTerm: "on the other hand",
              portugueseDefinition: "por outro lado",
            })}
          />
          {/* I like coffee. On the other hand, she prefers tea. */}
          <Examples
            items={[
              example({
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
              audio: "/assets/audio/general/once-in-a-while.mp3",
              englishTerm: "once in a while",
              portugueseDefinition: "de vez em quando",
            })}
          />
          {/* Once in a while, we go to the beach. */}
          <Examples
            items={[
              example({
                englishExample: ["Once in a while, we go to the beach."],
                portugueseExample: ["De vez em quando, nós vamos à praia."],
              }),
            ]}
          />
          <LineBreak />

          {/* right away */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/right-away.mp3",
              englishTerm: "right away",
              portugueseDefinition: "imediatamente",
            })}
          />
          {/* Please answer me right away. */}
          <Examples
            items={[
              example({
                englishExample: ["Please answer me right away."],
                portugueseExample: ["Por favor, me responda imediatamente."],
              }),
            ]}
          />
          <LineBreak />

          {/* so far, so good */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/so-far-so-good.mp3",
              englishTerm: "so far, so good",
              portugueseDefinition: "até agora, tudo bem",
            })}
          />
          {/* So far, so good. Everything is working. */}
          <Examples
            items={[
              example({
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
              audio:
                "/assets/audio/general/the-shoemakers-son-always-goes-barefoot.mp3",
              englishTerm: "The shoemaker's son always goes barefoot",
              portugueseDefinition: "casa de ferreiro, espeto de pau",
            })}
          />
          {/* A: Isn’t their mother a seamstress? Why are their clothes always so tattered?" B: "Well, you know what they say — the shoemaker’s son always goes barefoot." */}
          <Examples
            items={[
              example({
                englishExample: [
                  '"A: Isn’t their mother a seamstress? Why are their clothes always so tattered?" B: "Well, you know what they say — the shoemaker’s son always goes barefoot."',
                ],
                portugueseExample: [
                  '"A: A mãe deles não é costureira? Por que as roupas deles estão sempre tão rasgadas?" "B: Bom, você sabe como dizem — casa de ferreiro, espeto de pau."',
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* find a way */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/find-a-way.mp3",
              englishTerm: "find a way",
              portugueseDefinition: "dar um jeito; encontrar uma maneira; 'dar seus pulos'",
            })}
          />
          {/* We will find a way to solve this problem. */}
          <Examples
            items={[
              example({
                englishExample: ["We will find a way to solve this problem."],
                portugueseExample: [
                  "Nós vamos dar um jeito de resolver esse problema.",
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* the main character */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/the-main-character.mp3",
              englishTerm: "the main character",
              portugueseDefinition:
                "agir como se fosse o centro de tudo; se achar a última Coca-Cola do deserto",
            })}
          />
          {/* The main character changes a lot during the story. */}
          <Examples
            items={[
              example({
                englishExample: [
                  "He walks into every room like he’s the main character.",
                ],
                portugueseExample: [
                  " Ele entra em todo lugar como se fosse a última Coca-Cola do deserto.",
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* keep your cool */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/keep-your-cool.mp3",
              englishTerm: "keep your cool",
              portugueseDefinition: "manter a calma / controle; 'segura a sua onda'",
            })}
          />
          {/* Try to keep your cool during the meeting. */}
          <Examples
            items={[
              example({
                englishExample: ["Try to keep your cool during the meeting."],
                portugueseExample: ["Tente manter a calma durante a reunião."],
              }),
            ]}
          />
          <LineBreak />

          {/* life catches up with you */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/life-catches-up-with-you.mp3",
              englishTerm: "life catches up with you",
              portugueseDefinition: "a vida cobra; a realidade chega",
            })}
          />
          {/* Eventually, life catches up with you if you ignore your responsibilities. */}
          <Examples
            items={[
              example({
                englishExample: [
                  "Eventually, life catches up with you if you ignore your responsibilities.",
                ],
                portugueseExample: [
                  "Eventualmente, a vida cobra se você ignora suas responsabilidades.",
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* that's a whole different story */}
          <Expressions
            value={expression({
              audio: "/assets/audio/general/thats-a-whole-different-story.mp3",
              englishTerm: "that's a whole different story",
              portugueseDefinition:
                "são outros quinhentos",
            })}
          />
          {/* I like traveling alone, but living abroad is a whole different story. */}
          <Examples
            items={[
              example({
                englishExample: [
                  "I like traveling alone, but living abroad is a whole different story.",
                ],
                portugueseExample: [
                  "Eu gosto de viajar sozinho, mas morar no exterior já são outros quinhentos.",
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
