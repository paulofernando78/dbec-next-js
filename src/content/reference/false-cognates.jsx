import { Whiteboard } from "@/components/molecules/Whiteboard";
import { InlineText } from "@/components/molecules/InlineText";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";

export default function Adjectives() {
  return (
    <>
      <Whiteboard title="Reference" subtitle="False-Cognates" />
      <div className="line-break">
        <InlineText text={[{ part: "...", type: "bold" }]} />
        <Contents
          items={[
            { href: "anticipate-antecipar", label: "antecipar / antecipar" },
          ]}
        />

        <Section id="..." label="antecipar / antecipar" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // anticipate
                  {
                    text: [
                      { part: "anticipate", type: "bold" },
                      " ",
                      {
                        part: "prever, ficar na expectativa",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        bullet: true,
                      },
                      " We anticipate that sales will increase next quarter.",
                      {
                        part: " Nós esperamos que as vendas aumentem no próximo trimestre.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // antecipar
                  {
                    text: [
                      { part: "antecipar", type: "portuguese-bold" },
                      " move up; advance",
                    ],
                  },
                  {
                    text: [
                      {
                        bullet: true,
                      },
                      " They decided to ",
                      {
                        part: "move up",
                        type: "mark",
                      },
                      "  the product launch.",
                      {
                        part: " Eles decidiram antecipar o lançamento do produto.",
                        type: "portuguese",
                      },
                      " Let's  ",
                      {
                        part: "advance ",
                        type: "mark",
                      },
                      " the payment to avoid issues.",
                      {
                        part: " ...",
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
