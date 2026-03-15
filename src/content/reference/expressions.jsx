import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Section } from "@/components/molecules/Section";
import { Expressions } from "@/components/molecules/Expressions";
import { Examples } from "@/components/molecules/Examples";
import { LineBreak } from "@/components/atoms/LineBreak";
import {
  content,
  bold,
  portuguese,
} from "@/helpers/content";

export default function Expression() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="Expressions" />
      <div className="line-break">
        <Section id="" label="Common Epxressions" heading={3}>
          {/* all of a sudden */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/all-of-a-sudden.mp3",
                parts: [
                  bold("all of a sudden"),
                  portuguese("de repente")
                ],
              }),
            ]}
          />
          {/* All of a sudden, the lights went out. */}
          <Examples
            items={[[...content({
                parts: [
                  "All of a sudden, the lights went out.",
                  "De repente, as luzes se apagaram."
                ],
              })]]}
          />
          <LineBreak />
          {/* // ... */}

          {/* as a matter of fact */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/as-a-matter-of-fact.mp3",
                parts: [
                  bold("as a matter of fact"),
                  portuguese("na verdade")
                ],
              }),
            ]}
          />
          {/* As a matter of fact, I don’t like coffee. */}
          <Examples
            items={[[...content({
                parts: [
                  "As a matter of fact, I don’t like coffee.",
                  "Na verdade, eu não gosto de café.",
                ],
              })]]}
          />
          <LineBreak />

          {/* as soon as possible */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/as-soon-as-possible.mp3",
                parts: [
                  bold("as soon as possible"),
                  portuguese("o mais rápido possível")
                ],
              }),
            ]}
          />
          {/* Please call me as soon as possible. */}
          <Examples
            items={[[...content({
                parts: [
                  "Please call me as soon as possible.",
                  "Por favor, me ligue o mais rápido possível.",
                ],
              })]]}
          />
          <LineBreak />

          {/* at first */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/at-first.mp3",
                parts: [
                  bold("at first"),
                  portuguese("no começo / a princípio")
                ],
              }),
            ]}
          />
          {/* At first, I didn’t understand the question. */}
          <Examples
            items={[[...content({
                parts: [
                  "At first, I didn’t understand the question.",
                  "No começo, eu não entendi a pergunta.",
                ],
              })]]}
          />
          <LineBreak />

          {/* at the end of the day */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/at-the-end-of-the-day.mp3",
                parts: [
                  bold("at the end of the day"),
                  portuguese("no fim das contas")
                ],
              }),
            ]}
          />
          {/* At the end of the day, family is what matters most. */}
          <Examples
            items={[[...content({
                parts: [
                  "At the end of the day, family is what matters most.",
                  "No fim das contas, a família é o que mais importa.",
                ],
              })]]}
          />
          <LineBreak />

          {/* by the way */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/by-the-way.mp3",
                parts: [
                  bold("by the way"),
                  portuguese("a propósito")
                ],
              }),
            ]}
          />
          {/* By the way, have you seen my keys? */}
          <Examples
            items={[[...content({
                parts: [
                  "By the way, have you seen my keys?",
                  "A propósito, você viu minhas chaves?",
                ],
              })]]}
          />
          <LineBreak />

          {/* call it a day */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/call-it-a-day.mp3",
                parts: [
                  bold("call it a day"),
                  portuguese("encerrar por hoje/pelo dia (trabalho/expediente/tarefa)")
                ],
              }),
            ]}
          />
          {/* Let’s call it a day and go home. */}
          <Examples
            items={[[...content({
                parts: [
                  "Let’s call it a day and go home.",
                  "Vamos encerrar por hoje e ir para casa.",
                ],
              })]]}
          />
          <LineBreak />

          {/* every now and then */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/every-now-and-then.mp3",
                parts: [
                  bold("every now and then"),
                  portuguese("de vez em quando")
                ],
              }),
            ]}
          />
          {/* Every now and then, I eat chocolate. */}
          <Examples
            items={[[...content({
                parts: [
                  "Every now and then, I eat chocolate.",
                  "De vez em quando, eu como chocolate.",
                ],
              })]]}
          />
          <LineBreak />

          {/* every other day */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/every-other-day.mp3",
                parts: [
                  bold("every other day"),
                  portuguese("dia sim, dia não")
                ],
              }),
            ]}
          />
          {/* I go to the gym every other day. */}
          <Examples
            items={[[...content({
                parts: [
                  "I go to the gym every other day.",
                  "Eu vou à academia dia sim, dia não.",
                ],
              })]]}
          />
          <LineBreak />

          {/* for the time being */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/for-the-time-being.mp3",
                parts: [
                  bold("for the time being"),
                  portuguese("por enquanto")
                ],
              }),
            ]}
          />
          {/* For the time being, we will stay here. */}
          <Examples
            items={[[...content({
                parts: [
                  "For the time being, we will stay here.",
                  "Por enquanto, vamos ficar aqui.",
                ],
              })]]}
          />
          <LineBreak />

          {/* from time to time */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/from-time-to-time.mp3",
                parts: [
                  bold("from time to time"),
                  portuguese("de tempos em tempos")
                ],
              }),
            ]}
          />
          {/* From time to time, she visits her grandparents. */}
          <Examples
            items={[[...content({
                parts: [
                  "From time to time, she visits her grandparents.",
                  "De tempos em tempos, ela visita os avós.",
                ],
              })]]}
          />
          <LineBreak />

          {/* hard stop */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/hard-stop.mp3",
                parts: [
                  bold("hard stop"),
                  portuguese("encerrar por exemplo uma reunião em um tempo limite")
                ],
              }),
            ]}
          />
          {/* We have a hard stop at 5 p.m. */}
          <Examples
            items={[[...content({
                parts: [
                  "We have a hard stop at 5 p.m.",
                  "Temos que encerrar às 5 da tarde.",
                ],
              })]]}
          />
          <LineBreak />

          {/* if the shoe fits / if the cap fits */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/if-the-cap-fits.mp3",
                parts: [
                  bold("if the cap fits"),
                  portuguese("se a carapuça serve")
                ],
              }),
            ]}
          />
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/if-the-shoe-fits.mp3",
                parts: [
                  bold("if the shoe fits"),
                  // omit UK flag for now, as per pattern
                ],
              }),
            ]}
          />
          {/* I wasn’t talking about you, but if the shoe fits... */}
          <Examples
            items={[[...content({
                parts: [
                  "I wasn’t talking about you, but if the shoe fits...",
                  "Eu não estava falando de você, mas se a carapuça serve...",
                ],
              })]]}
          />
          <LineBreak />

          {/* in a nutshell */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/in-a-nut-shell.mp3",
                parts: [
                  bold("in a nutshell"),
                  portuguese("em poucas palavras / resumindo")
                ],
              }),
            ]}
          />
          {/* In a nutshell, the plan didn’t work. */}
          <Examples
            items={[[...content({
                parts: [
                  "In a nutshell, the plan didn’t work.",
                  "Resumindo, o plano não funcionou.",
                ],
              })]]}
          />
          <LineBreak />

          {/* in the long run */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/in-the-long-run.mp3",
                parts: [
                  bold("in the long run"),
                  portuguese("a longo prazo")
                ],
              }),
            ]}
          />
          {/* In the long run, this will save money. */}
          <Examples
            items={[[...content({
                parts: [
                  "In the long run, this will save money.",
                  "A longo prazo, isso vai economizar dinheiro.",
                ],
              })]]}
          />
          <LineBreak />

          {/* in the meantime */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/in-the-meantime.mp3",
                parts: [
                  bold("in the meantime"),
                  portuguese("enquanto isso")
                ],
              }),
            ]}
          />
          {/* In the meantime, you can wait here. */}
          <Examples
            items={[[...content({
                parts: [
                  "In the meantime, you can wait here.",
                  "Enquanto isso, você pode esperar aqui.",
                ],
              })]]}
          />
          <LineBreak />

          {/* no matter what */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/no-matter-what.mp3",
                parts: [
                  bold("no matter what"),
                  portuguese("não importa o que aconteça")
                ],
              }),
            ]}
          />
          {/* I will support you no matter what. */}
          <Examples
            items={[[...content({
                parts: [
                  "I will support you no matter what.",
                  "Eu vou te apoiar não importa o que aconteça.",
                ],
              })]]}
          />
          <LineBreak />

          {/* on the other hand */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/on-the-other-hand.mp3",
                parts: [
                  bold("on the other hand"),
                  portuguese("por outro lado")
                ],
              }),
            ]}
          />
          {/* I like coffee. On the other hand, she prefers tea. */}
          <Examples
            items={[[...content({
                parts: [
                  "I like coffee. On the other hand, she prefers tea.",
                  "Eu gosto de café. Por outro lado, ela prefere chá.",
                ],
              })]]}
          />
          <LineBreak />

          {/* once in a while */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/once-in-a-while.mp3",
                parts: [
                  bold("once in a while"),
                  portuguese("de vez em quando")
                ],
              }),
            ]}
          />
          {/* Once in a while, we go to the beach. */}
          <Examples
            items={[[...content({
                parts: [
                  "Once in a while, we go to the beach.",
                  "De vez em quando, nós vamos à praia.",
                ],
              })]]}
          />
          <LineBreak />

          {/* right away */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/right-away.mp3",
                parts: [
                  bold("right away"),
                  portuguese("imediatamente")
                ],
              }),
            ]}
          />
          {/* Please answer me right away. */}
          <Examples
            items={[[...content({
                parts: [
                  "Please answer me right away.",
                  "Por favor, me responda imediatamente.",
                ],
              })]]}
          />
          <LineBreak />

          {/* so far, so good */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/so-far-so-good.mp3",
                parts: [
                  bold("so far, so good"),
                  portuguese("até agora, tudo bem")
                ],
              }),
            ]}
          />
          {/* So far, so good. Everything is working. */}
          <Examples
            items={[[...content({
                parts: [
                  "So far, so good. Everything is working.",
                  "Até agora, tudo bem. Tudo está funcionando.",
                ],
              })]]}
          />
          <LineBreak />

          {/* The shoemaker's son always goes barefoot */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/the-shoemakers-son-always-goes-barefoot.mp3",
                parts: [
                  bold("The shoemaker's son always goes barefoot"),
                  portuguese("casa de ferreiro, espeto de pau")
                ],
              }),
            ]}
          />
          {/* A: Isn’t their mother a seamstress? Why are their clothes always so tattered?" B: "Well, you know what they say — the shoemaker’s son always goes barefoot." */}
          <Examples
            items={[[...content({
                parts: [
                  '"A: Isn’t their mother a seamstress? Why are their clothes always so tattered?" B: "Well, you know what they say — the shoemaker’s son always goes barefoot."',
                  '"A: A mãe deles não é costureira? Por que as roupas deles estão sempre tão rasgadas?" "B: Bom, você sabe como dizem — casa de ferreiro, espeto de pau."',
                ],
              })]]}
          />
          <LineBreak />

          {/* find a way */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/find-a-way.mp3",
                parts: [
                  bold("find a way"),
                  portuguese("dar um jeito; encontrar uma maneira; 'dar seus pulos'")
                ],
              }),
            ]}
          />
          {/* We will find a way to solve this problem. */}
          <Examples
            items={[[...content({
                parts: [
                  "We will find a way to solve this problem.",
                  "Nós vamos dar um jeito de resolver esse problema.",
                ],
              })]]}
          />
          <LineBreak />

          {/* the main character */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/the-main-character.mp3",
                parts: [
                  bold("the main character"),
                  portuguese("agir como se fosse o centro de tudo; se achar a última Coca-Cola do deserto")
                ],
              }),
            ]}
          />
          {/* The main character changes a lot during the story. */}
          <Examples
            items={[[...content({
                parts: [
                  "He walks into every room like he’s the main character.",
                  " Ele entra em todo lugar como se fosse a última Coca-Cola do deserto.",
                ],
              })]]}
          />
          <LineBreak />

          {/* keep your cool */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/keep-your-cool.mp3",
                parts: [
                  bold("keep your cool"),
                  portuguese("manter a calma / controle; 'segura a sua onda'")
                ],
              }),
            ]}
          />
          {/* Try to keep your cool during the meeting. */}
          <Examples
            items={[[...content({
                parts: [
                  "Try to keep your cool during the meeting.",
                  "Tente manter a calma durante a reunião.",
                ],
              })]]}
          />
          <LineBreak />

          {/* life catches up with you */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/life-catches-up-with-you.mp3",
                parts: [
                  bold("life catches up with you"),
                  portuguese("a vida cobra; a realidade chega")
                ],
              }),
            ]}
          />
          {/* Eventually, life catches up with you if you ignore your responsibilities. */}
          <Examples
            items={[[...content({
                parts: [
                  "Eventually, life catches up with you if you ignore your responsibilities.",
                  "Eventualmente, a vida cobra se você ignora suas responsabilidades.",
                ],
              })]]}
          />
          <LineBreak />

          {/* that's a whole different story */}
          <Expressions
            value={[
              ...content({
                audio: "/assets/audio/general/thats-a-whole-different-story.mp3",
                parts: [
                  bold("that's a whole different story"),
                  portuguese("são outros quinhentos")
                ],
              }),
            ]}
          />
          {/* I like traveling alone, but living abroad is a whole different story. */}
          <Examples
            items={[[...content({
                parts: [
                  "I like traveling alone, but living abroad is a whole different story.",
                  "Eu gosto de viajar sozinho, mas morar no exterior já são outros quinhentos.",
                ],
              })]]}
          />
          <LineBreak />
        </Section>
      </div>
    </>
  );
}
