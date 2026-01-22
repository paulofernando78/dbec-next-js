import { Whiteboard } from "@/components/molecules/Whiteboard";
import { InlineText } from "@/components/molecules/InlineText";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";

export default function Adjectives() {
  return (
    <>
      <Whiteboard title="Reference" subtitle="Adjectives" />
      <div className="line-break">
        <InlineText text={[{ part: "List of adjectives.", type: "bold" }]} />
        <Contents
          items={[
            { href: "comparative", label: "Comparatives" },
            { href: "ing-ed", label: "Superlatives" },
            { href: "ing-ed", label: "-ing vs. -ed" },
            { href: "compound", label: "Compound" },
          ]}
        />

        <Section id="comparative" label="Comparatives" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Comparative adjectives", type: "bold" },
                      " ",
                      {
                        part: "are used to compare two people, things, or situations.",
                        type: "portuguese",
                      },
                      " ",
                      {
                        bullet: true,
                        part: "They show how one thing is different from another.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Short adjectives usually add -er.",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "Adjetivos curtos geralmente recebem -er.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "tall → taller", type: "bold" },
                      " ",
                      { part: "alto → mais alto", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "Long adjectives use more.", type: "bold" },
                      " ",
                      {
                        part: "Adjetivos longos usam more.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "beautiful → more beautiful", type: "bold" },
                      " ",
                      { part: "bonito → mais bonito", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "This book is better than that one.",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "Este livro é melhor que aquele.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="superlatives" label="Superlatives" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Superlative adjectives", type: "bold" },
                      " ",
                      {
                        part: "are used to show the highest or lowest degree in a group of three or more.",
                        type: "portuguese",
                      },
                      " ",
                      {
                        bullet: true,
                        part: "They show who or what stands out in a group.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Short adjectives usually add -est.",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "Adjetivos curtos geralmente recebem -est.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "tall → tallest", type: "bold" },
                      " ",
                      { part: "alto → o mais alto", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "Long adjectives use most.", type: "bold" },
                      " ",
                      {
                        part: "Adjetivos longos usam most.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "interesting → most interesting", type: "bold" },
                      " ",
                      {
                        part: "interessante → o mais interessante",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "She is the best student in the class.",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "Ela é a melhor aluna da turma.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="ing-ed" label="-ing vs. -ed" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // Adjectives ending in -ing
                  {
                    text: [
                      { part: "Adjectives ending in -ing", type: "bold" },
                      " ",
                      {
                        part: "describe the cause of a feeling or what makes something interesting, boring, exciting, etc.",
                        type: "portuguese",
                      },
                      " ",
                      {
                        bullet: true,
                        part: "They describe the thing, situation, or person that creates the feeling.",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "The movie is interesting.", type: "bold" },
                      " ",
                      { part: "O filme é interessante.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "The class was boring.", type: "bold" },
                      " ",
                      { part: "A aula foi entediante.", type: "portuguese" },
                    ],
                    lineBreak: true,
                  },
                  // Adjectives ending in -ed
                  {
                    text: [
                      { part: "Adjectives ending in -ed", type: "bold" },
                      " ",
                      {
                        part: "describe how a person feels as a result of something.",
                        type: "portuguese",
                      },
                      " ",
                      {
                        bullet: true,
                        part: "They describe the feeling, not the cause.",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "I am interested in the movie.", type: "bold" },
                      " ",
                      {
                        part: "Eu estou interessado no filme.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "She was bored during the class.", type: "bold" },
                      " ",
                      {
                        part: "Ela estava entediada durante a aula.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "They are excited about the trip.",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "Eles estão animados com a viagem.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="compound" label="Compound" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Compound adjectives", type: "bold" },
                      " ",
                      {
                        part: "are made of two or more words that work together as one adjective.",
                        type: "portuguese",
                      },
                      " ",
                      {
                        bullet: true,
                        part: "They are often connected with a hyphen.",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "a well-known actor", type: "bold" },
                      " ",
                      { part: "um ator conhecido", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "a full-time job", type: "bold" },
                      " ",
                      {
                        part: "um trabalho em tempo integral",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "a five-minute break", type: "bold" },
                      " ",
                      {
                        part: "uma pausa de cinco minutos",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "a high-quality product", type: "bold" },
                      " ",
                      {
                        part: "um produto de alta qualidade",
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
