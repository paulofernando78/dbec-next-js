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
            { href: "descriptive", label: "Descriptive" },
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
                      "describe the ",
                      { part: "cause", type: "mark" },
                      " of a feeling or what makes something interesting, boring, exciting, etc.",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // The movie is interesting.
                  {
                    text: [
                      {
                        bullet: true,
                        part: "The movie is interest",
                        type: "bold",
                      },
                      {
                        part: "ing",
                        type: "mark",
                      },
                      ". ",
                      { part: "O filme é interessante.", type: "portuguese" },
                    ],
                  },
                  // The class was boring.
                  {
                    text: [
                      {
                        bullet: true,
                        part: "The class was bor",
                        type: "bold",
                      },
                      {
                        part: "ing",
                        type: "mark",
                      },
                      ". ",
                      { part: "A aula foi entediante.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // Adjectives ending in -ed
                  {
                    text: [
                      { part: "Adjectives ending in -ed", type: "bold" },
                      " describe how a person",
                      {
                        part: "feels",
                        type: "mark",
                      },
                      " as a result of something.",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // I am interested in the movie.
                  {
                    text: [
                      { bullet: true, part: "I am interest", type: "bold" },
                      {
                        part: "ed",
                        type: "mark",
                      },
                      " in the movie. ",
                      {
                        part: "Eu estou interessado no filme.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // She was bored during the class.
                  {
                    text: [
                      { bullet: true, part: "She was bor", type: "bold" },
                      {
                        part: "ed",
                        type: "mark",
                      },
                      " during the class. ",
                      " ",
                      {
                        part: "Ela estava entediada durante a aula.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // They are excited about the trip.
                  {
                    text: [
                      {
                        bullet: true,
                        part: "They are excit",
                        type: "bold",
                      },
                      {
                        part: "ed",
                        type: "mark",
                      },
                      " about the trip. ",
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

        <Section
          id="descriptive"
          label="-ing (Descriptive / Participial)"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        part: "-ing as a descriptive / participial adjective",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "is used to describe a state, characteristic, or type of thing, not a feeling or its cause.",
                        type: "portuguese",
                      },
                      " ",
                      {
                        bullet: true,
                        part: "It answers: What kind of thing is it?",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "living organisms", type: "bold" },
                      " ",
                      { part: "organismos vivos", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "a sleeping baby", type: "bold" },
                      " ",
                      { part: "um bebê dormindo", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "boiling water", type: "bold" },
                      " ",
                      { part: "água fervendo", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "flying saucer", type: "bold" },
                      " ",
                      { part: "disco voador", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Note:",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "Here, -ing words describe the thing itself or form part of its name, not emotions or feelings.",
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
