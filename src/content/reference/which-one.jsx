import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";

export default function WhichOne() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="Which one?" />
      <div className="line-break">
        <Contents
          items={[
            { href: "#say-speak-tell", label: "say / speak / tell" },
            {
              href: "#stationary-stationery",
              label: "stationary vs stationery",
            },
            { href: "#affect-effect", label: "affect vs effect" },
            { href: "#lend-borrow", label: "lend vs borrow" },
            { href: "#lose-loose", label: "lose vs loose" },
          ]}
        />
        <Section id="say-speak-tell" label="say / speak / tell" heading={3}>
          <Paragraph
            blocks={[
              // say
              {
                lines: [
                  {
                    text: [
                      {
                        part: "say:",
                        type: "bold",
                      },
                      " the words / message itself (what you say)",
                    ],
                  },

                  {
                    text: [
                      {
                        bullet: true,
                        part: "She said she was tired.",
                      },
                      " ",
                      {
                        part: "Ela disse que estava cansada.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        bullet: true,
                        part: "I want to say something.",
                      },
                      " ",
                      {
                        part: "Eu quero dizer algo.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
              // speak
              {
                lines: [
                  {
                    text: [
                      {
                        part: "speak: ",
                        type: "bold",
                      },
                      " the action of talking / language ability",
                    ],
                  },
                  {
                    text: [
                      {
                        bullet: true,
                        part: "He speaks three languages.",
                      },
                      " ",
                      {
                        part: "Ele fala três idiomas.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        bullet: true,
                        part: "Can I speak to you for a moment?",
                      },
                      " ",
                      {
                        part: "Posso falar com você por um momento?",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
              // tell
              {
                lines: [
                  {
                    text: [
                      {
                        part: "tell:",
                        type: "bold",
                      },
                      " the listener / who receives the information",
                    ],
                  },
                  {
                    text: [
                      {
                        bullet: true,
                        part: "She told me the truth.",
                      },
                      " ",
                      {
                        part: "Ela me contou a verdade.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        bullet: true,
                        part: "Tell him I’ll be late.",
                      },
                      " ",
                      {
                        part: "Diga a ele que vou me atrasar.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section
          id="stationary-stationery"
          label="stationary vs stationery"
          heading={3}
        >
          <Paragraph
            blocks={[
              // stationary
              {
                lines: [
                  {
                    text: [{ part: "stationary", type: "bold" }],
                  },
                  {
                    text: ["Focus: not moving / fixed in one place"],
                    lineBreak: true,
                  },
                  {
                    text: [
                      { audio: "/assets/audio/general/stationary-1.mp3" },
                      "The car remained stationary at the traffic light.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "O carro permaneceu parado no semáforo.",
                        type: "portuguese",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      { audio: "/assets/audio/general/stationary-2.mp3" },
                      "The bike stayed stationary during the repair.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "A bicicleta ficou parada durante o conserto.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
              // stationery
              {
                lines: [
                  {
                    text: [{ part: "stationery", type: "bold" }],
                  },
                  {
                    text: ["Focus: paper, pens, and office or school supplies"],
                    lineBreak: true,
                  },
                  {
                    text: [
                      { audio: "/assets/audio/general/stationery-1.mp3" },
                      "She bought some stationery for the office.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Ela comprou alguns materiais de papelaria para o escritório.",
                        type: "portuguese",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      { audio: "/assets/audio/general/stationery-2.mp3" },
                      "The store sells school stationery.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "A loja vende papelaria escolar.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="affect-effect" label="affect vs effect" heading={3}>
          <Paragraph
            blocks={[
              // affect
              {
                lines: [
                  {
                    text: [{ part: "affect", type: "bold" }],
                  },
                  {
                    text: ["Focus: verb — to influence or change something"],
                    lineBreak: true,
                  },
                  {
                    text: [
                      { audio: "/assets/audio/general/affect-1.mp3" },
                      "Lack of sleep can affect your performance.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "A falta de sono pode afetar seu desempenho.",
                        type: "portuguese",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      { audio: "/assets/audio/general/affect-2.mp3" },
                      "This decision will affect the whole team.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Essa decisão vai afetar toda a equipe.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
              // effect
              {
                lines: [
                  {
                    text: [{ part: "effect", type: "bold" }],
                  },
                  {
                    text: ["Focus: noun — the result of a change or action"],
                    lineBreak: true,
                  },
                  {
                    text: [
                      { audio: "/assets/audio/general/effect-1.mp3" },
                      "The new policy had a positive effect.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "A nova política teve um efeito positivo.",
                        type: "portuguese",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      { audio: "/assets/audio/general/effect-2.mp3" },
                      "What is the effect of this medicine?",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Qual é o efeito deste remédio?",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="lend-borrow" label="lend vs borrow" heading={3}>
          <Paragraph
            blocks={[
              // lend
              {
                lines: [
                  {
                    text: [{ part: "lend", type: "bold" }],
                  },
                  {
                    text: ["Focus: give something temporarily to someone"],
                    lineBreak: true,
                  },
                  {
                    text: [
                      { audio: "/assets/audio/general/lend-1.mp3" },
                      "Can you lend me your pen?",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Você pode me emprestar sua caneta?",
                        type: "portuguese",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      { audio: "/assets/audio/general/lend-2.mp3" },
                      "She lent her book to a friend.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Ela emprestou o livro para um amigo.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
              // borrow
              {
                lines: [
                  {
                    text: [{ part: "borrow", type: "bold" }],
                  },
                  {
                    text: ["Focus: receive something temporarily from someone"],
                    lineBreak: true,
                  },
                  {
                    text: [
                      { audio: "/assets/audio/general/borrow-1.mp3" },
                      "Can I borrow your pen?",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Posso pegar sua caneta emprestada?",
                        type: "portuguese",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      { audio: "/assets/audio/general/borrow-2.mp3" },
                      "He borrowed some money from his brother.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Ele pegou dinheiro emprestado do irmão.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="lose-loose" label="lose vs loose" heading={3}>
          <Paragraph
            blocks={[
              // lose
              {
                lines: [
                  {
                    text: [{ part: "lose", type: "bold" }],
                  },
                  {
                    text: ["Focus: verb — to misplace or fail to keep or win"],
                    lineBreak: true,
                  },
                  {
                    text: [
                      { audio: "/assets/audio/general/lose-1.mp3" },
                      "Don’t lose your keys.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Não perca suas chaves.",
                        type: "portuguese",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      { audio: "/assets/audio/general/lose-2.mp3" },
                      "They might lose the game.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Eles podem perder o jogo.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
              // loose
              {
                lines: [
                  {
                    text: [{ part: "loose", type: "bold" }],
                  },
                  {
                    text: ["Focus: adjective — not tight or firmly fixed"],
                    lineBreak: true,
                  },
                  {
                    text: [
                      { audio: "/assets/audio/general/loose-1.mp3" },
                      "This shirt is too loose.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Essa camisa está muito larga.",
                        type: "portuguese",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      { audio: "/assets/audio/general/loose-2.mp3" },
                      "The screw is loose.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "O parafuso está solto.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}
