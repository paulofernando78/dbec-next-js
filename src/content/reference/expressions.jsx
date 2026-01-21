import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Paragraph } from "@/components/molecules/Paragraph";

export default function Expressions() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="Expressions" />
      <div className="line-break">
        <Paragraph
          blocks={[
            {
              lines: [
                {
                  text: [
                    {
                      part: "Common expressions:",
                      type: "bold",
                    },
                  ],
                },
                {
                  lineBreak: true,
                },
                // all of a sudden
                {
                  text: [
                    { part: "all of a sudden", type: "bold" },
                    " ",
                    { part: "de repente", type: "portuguese" },
                    " ",
                    {
                      bullet: true,
                      part: "All of a sudden, the lights went out" },
                    { part: " De repente, as luzes se apagaram.", type: "portuguese" },
                  ],
                },
                {
                  linebreak: true,
                },
                // as a matter of fact
                {
                  text: [
                    { part: "as a matter of fact", type: "bold" },
                    " ",
                    { part: "na verdade", type: "portuguese" },
                    " ",
                    {
                      bullet: true,
                      part: "As a matter of fact, I don’t like coffee."
                    },
                    { part: " Na verdade, eu não gosto de café.", type: "portuguese" },
                  ],
                },
                // as soon as possible
                {
                  text: [
                    { part: "as soon as possible", type: "bold" },
                    " ",
                    { part: "o mais rápido possível", type: "portuguese" },
                    " ",
                    {
                      bullet: true,
                      part: "Please call me as soon as possible."
                    },
                    { part: " Por favor, me ligue o mais rápido possível.", type: "portuguese" },
                  ],
                },
                // at first
                {
                  text: [
                    { part: "at first", type: "bold" },
                    " ",
                    { part: "no começo / a princípio", type: "portuguese" },
                    " ",
                    {
                      bullet: true,
                      part: "At first, I didn’t understand the question."
                    },
                    { part: " No começo, eu não entendi a pergunta.", type: "portuguese" },
                  ],
                },
                // at the end of the day
                {
                  text: [
                    { part: "at the end of the day", type: "bold" },
                    " ",
                    { part: "no fim das contas", type: "portuguese" },
                    " ",
                    {
                      bullet: true,
                      part: "At the end of the day, family is what matters most."
                    },
                    { part: " No fim das contas, a família é o que mais importa.", type: "portuguese" },
                  ],
                },
                // by the way
                {
                  text: [
                    { part: "by the way", type: "bold" },
                    " ",
                    { part: "a propósito", type: "portuguese" },
                    " ",
                    {
                      bullet: true,
                      part: "By the way, have you seen my keys?"
                    },
                    { part: " A propósito, você viu minhas chaves?", type: "portuguese" },
                  ],
                },
                // call it a day
                {
                  text: [
                    { part: "call it a day", type: "bold" },
                    " ",
                    {
                      part: "encerrar por hoje/pelo dia (trabalho/expediente/tarefa)",
                      type: "portuguese",
                    },
                    " ",
                    {
                      bullet: true,
                      part: "Let’s call it a day and go home."
                    },
                    { part: " Vamos encerrar por hoje e ir para casa.", type: "portuguese" },
                  ],
                },
                // every now and then
                {
                  text: [
                    { part: "every now and then", type: "bold" },
                    " ",
                    { part: "de vez em quando", type: "portuguese" },
                    " ",
                    {
                      bullet: true,
                      part: "Every now and then, I eat chocolate."
                    },
                    { part: " De vez em quando, eu como chocolate.", type: "portuguese" },
                  ],
                },
                // every other day
                {
                  text: [
                    { part: "every other day", type: "bold" },
                    " ",
                    { part: "dia sim, dia não", type: "portuguese" },
                    " ",
                    {
                      bullet: true,
                      part: "I go to the gym every other day."
                    },
                    { part: " Eu vou à academia dia sim, dia não.", type: "portuguese" },
                  ],
                },
                // for the time being
                {
                  text: [
                    { part: "for the time being", type: "bold" },
                    " ",
                    { part: "por enquanto", type: "portuguese" },
                    " ",
                    {
                      bullet: true,
                      part: "For the time being, we will stay here."
                    },
                    { part: " Por enquanto, vamos ficar aqui.", type: "portuguese" },
                  ],
                },
                // from time to time
                {
                  text: [
                    { part: "from time to time", type: "bold" },
                    " ",
                    { part: "de tempos em tempos", type: "portuguese" },
                    " ",
                    {
                      bullet: true,
                      part: "From time to time, she visits her grandparents."
                    },
                    { part: " De tempos em tempos, ela visita os avós.", type: "portuguese" },
                  ],
                },
                // hard stop
                {
                  text: [
                    { part: "hard stop", type: "bold" },
                    " ",
                    { part: "encerrar por exemplo um reunião em um tempo limite", type: "portuguese" },
                    " ",
                    {
                      bullet: true,
                      part: "We have a hard stop at 5 p.m."
                    },
                    { part: " Temos que encerrar às 5 da tarde", type: "portuguese" },
                  ],
                },
                // if the shoe fits / if the cap fits
                {
                  text: [
                    { part: "if the shoe fits", type: "bold" },
                    " ",
                    {
                      ukFlag: true,
                      part: "if the cap fits",
                    },
                    " ",
                    {
                      part: "se a carapuça serve",
                      type: "portuguese",
                    },
                  ],
                },
                // in a nutshell
                {
                  text: [
                    { part: "in a nutshell", type: "bold" },
                    " ",
                    {
                      part: "em poucas palavras / resumindo",
                      type: "portuguese",
                    },
                    " ",
                    {
                      bullet: true,
                      part: "In a nutshell, the plan didn’t work."
                    },
                    { part: " Resumindo, o plano não funcionou.", type: "portuguese" },
                  ],
                },
                // in the long run
                {
                  text: [
                    { part: "in the long run", type: "bold" },
                    " ",
                    { part: "a longo prazo", type: "portuguese" },
                    " ",
                    {
                      bullet: true,
                      part: "In the long run, this will save money."
                    },
                    { part: " A longo prazo, isso vai economizar dinheiro.", type: "portuguese" },
                  ],
                },
                // in the meantime
                {
                  text: [
                    { part: "in the meantime", type: "bold" },
                    " ",
                    { part: "enquanto isso", type: "portuguese" },
                    " ",
                    {
                      bullet: true,
                      part: "In the meantime, you can wait here."
                    },
                    { part: " Enquanto isso, você pode esperar aqui.", type: "portuguese" },
                  ],
                },
                // no matter what
                {
                  text: [
                    { part: "no matter what", type: "bold" },
                    " ",
                    { part: "não importa o que aconteça", type: "portuguese" },
                    " ",
                    {
                      bullet: true,
                      part: "I will support you no matter what."
                    },
                    { part: " Eu vou te apoiar não importa o que aconteça.", type: "portuguese" },
                  ],
                },
                // on the other hand
                {
                  text: [
                    { part: "on the other hand", type: "bold" },
                    " ",
                    { part: "por outro lado", type: "portuguese" },
                    " ",
                    {
                      bullet: true,
                      part: "I like coffee. On the other hand, she prefers tea."
                    },
                    { part: " Eu gosto de café. Por outro lado, ela prefere chá.", type: "portuguese" },
                  ],
                },
                // once in a while
                {
                  text: [
                    { part: "once in a while", type: "bold" },
                    " ",
                    { part: "de vez em quando", type: "portuguese" },
                    " ",
                    {
                      bullet: true,
                      part: "Once in a while, we go to the beach."
                    },
                    { part: " De vez em quando, nós vamos à praia.", type: "portuguese" },
                  ],
                },
                // right away
                {
                  text: [
                    { part: "right away", type: "bold" },
                    " ",
                    { part: "imediatamente", type: "portuguese" },
                    " ",
                    {
                      bullet: true,
                      part: "Please answer me right away."
                    },
                    { part: " Por favor, me responda imediatamente.", type: "portuguese" },
                  ],
                },
                // so far, so good
                {
                  text: [
                    { part: "so far, so good", type: "bold" },
                    " ",
                    { part: "até agora, tudo bem", type: "portuguese" },
                    " ",
                    {
                      bullet: true,
                      part: "So far, so good. Everything is working."
                    },
                    { part: " Até agora, tudo bem. Tudo está funcionando.", type: "portuguese" },
                  ],
                },
                // The shoemaker's son always goes barefoot
                {
                  text: [
                    {
                      part: "The shoemaker's son always goes barefoot",
                      type: "bold",
                    },
                    " ",
                    {
                      part: "casa de ferreiro, espeto de pau",
                      type: "portuguese",
                    },
                    " ",
                    {
                      bullet: true,
                      part: "He is a mechanic, but his own car is always broken."
                    },
                    {
                      part: " Ele é mecânico, mas o próprio carro dele está sempre quebrado.",
                      type: "portuguese",
                    },
                  ],
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
}
