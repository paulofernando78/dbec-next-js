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
                  // Comparative adjectives
                  {
                    text: [
                      { part: "Comparative adjectives", type: "bold" },
                      " ",
                      "are used to compare two people, things, or situations.",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // Irregular
                  {
                    text: [
                      {
                        important: true,
                      },
                      "Irregular.",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // good
                  {
                    text: [
                      {
                        part: "good",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "bom",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "better",
                        type: "bold",
                      },

                      " ",
                      {
                        part: "melhor",
                        type: "portuguese",
                      },
                      " ",
                    ],
                  },
                  // bad
                  {
                    text: [
                      {
                        part: "bad",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "ruim, péssimo",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "worse",
                        type: "bold",
                      },

                      " ",
                      {
                        part: "pior",
                        type: "portuguese",
                      },
                      " ",
                    ],
                  },
                  // little
                  {
                    text: [
                      {
                        part: "little",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "pouco",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "less",
                        type: "bold",
                      },

                      " ",
                      {
                        part: "menos",
                        type: "portuguese",
                      },
                      " ",
                    ],
                  },
                  // much
                  {
                    text: [
                      {
                        part: "much",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "muito",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "more",
                        type: "bold",
                      },

                      " ",
                      {
                        part: "mais",
                        type: "portuguese",
                      },
                      " ",
                    ],
                  },
                  // far
                  {
                    text: [
                      {
                        part: "far",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "longe, distante",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "farther / further",
                        type: "bold",
                      },

                      " ",
                      {
                        part: "mais longe, distante",
                        type: "portuguese",
                      },
                      " ",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // This book is better than that one.
                  {
                    text: [
                      {
                        bullet: true,
                      },
                      "This book is better than that one.",
                      " ",
                      {
                        part: "Este livro é melhor que aquele.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // To make comparative forms with one-syllable adjectives, we usually add -er.
                  {
                    text: [
                      {
                        important: true,
                        part: "To make comparative forms with one-syllable adjectives, we usually add -er.",
                      },
                      " ",
                      {
                        part: "Adjetivos curtos geralmente recebem -er.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // clean
                  {
                    text: [
                      {
                        part: "clean",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "limpo",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "clean",
                        type: "bold",
                      },
                      {
                        part: "er",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "mais limpo",
                        type: "portuguese",
                      },
                      " ",
                    ],
                  },
                  // old
                  {
                    text: [
                      {
                        part: "old",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "velho",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "old",
                        type: "bold",
                      },
                      {
                        part: "er",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "mais velho",
                        type: "portuguese",
                      },
                      " ",
                    ],
                  },
                  // rich
                  {
                    text: [
                      {
                        part: "rich",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "rico",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "rich",
                        type: "bold",
                      },
                      {
                        part: "er",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "mais rico",
                        type: "portuguese",
                      },
                      " ",
                    ],
                  },
                  // slow
                  {
                    text: [
                      {
                        part: "slow",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "devagar",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "slow",
                        type: "bold",
                      },
                      {
                        part: "er",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "mais devagar",
                        type: "portuguese",
                      },
                      " ",
                    ],
                  },
                  // small
                  {
                    text: [
                      {
                        part: "small",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "pequeno",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "small",
                        type: "bold",
                      },
                      {
                        part: "er",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "menor",
                        type: "portuguese",
                      },
                      " ",
                    ],
                  },
                  // smart
                  {
                    text: [
                      {
                        part: "smart",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "inteligente",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "smarter",
                        type: "bold",
                      },
                      {
                        part: "er",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "mais inteligente",
                        type: "portuguese",
                      },
                      " ",
                    ],
                  },
                  // tall
                  {
                    text: [
                      {
                        part: "tall",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "alto",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "tall",
                        type: "bold",
                      },
                      {
                        part: "er",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "mais alto",
                        type: "portuguese",
                      },
                      " ",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // This room is cleaner than the kitchen.
                  {
                    text: [
                      { bullet: true },
                      "This room is cleaner than the kitchen.",
                      " ",
                      {
                        part: "Este quarto está mais limpo do que a cozinha.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // My phone is older than yours.
                  {
                    text: [
                      { bullet: true },
                      "My phone is older than yours.",
                      " ",
                      {
                        part: "Meu celular é mais velho (mais antigo) do que o seu.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // He is richer than his cousin.
                  {
                    text: [
                      { bullet: true },
                      "He is richer than his cousin.",
                      " ",
                      {
                        part: "Ele é mais rico que o primo dele.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // This internet connection is slower than yesterday.
                  {
                    text: [
                      { bullet: true },
                      "This internet connection is slower than yesterday.",
                      " ",
                      {
                        part: "Esta conexão de internet está mais lenta do que ontem.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // My bag is smaller than yours.
                  {
                    text: [
                      { bullet: true },
                      "My bag is smaller than yours.",
                      " ",
                      {
                        part: "Minha bolsa é menor que a sua.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // She is smarter than her classmates.
                  {
                    text: [
                      { bullet: true },
                      "She is smarter than her classmates.",
                      " ",
                      {
                        part: "Ela é mais inteligente do que os colegas de classe.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // She is taller than her brother.
                  {
                    text: [
                      { bullet: true },
                      "She is taller than her brother.",
                      " ",
                      {
                        part: "Ela é mais alta que o irmão dela.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // If an adjective ends in -e, we add -r:
                  {
                    text: [
                      {
                        important: true,
                      },
                      "If an adjective ends in -e, we add -r.",
                      " ",
                      {
                        part: "Se um adjetivo termina em -e, adicionamos apenas -r.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // nice
                  {
                    text: [
                      { part: "nice", type: "bold" },
                      " ",
                      { part: "legal / agradável", type: "portuguese" },
                      " ➜ ",
                      { part: "nic", type: "bold" },
                      { part: "er", type: "mark" },
                      " ",
                      { part: "mais legal / agradável", type: "portuguese" },
                      " ",
                    ],
                  },
                  // safe
                  {
                    text: [
                      { part: "safe", type: "bold" },
                      " ",
                      { part: "seguro", type: "portuguese" },
                      " ➜ ",
                      { part: "saf", type: "bold" },
                      { part: "er", type: "mark" },
                      " ",
                      { part: "mais seguro", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // nice
                  {
                    text: [
                      { bullet: true },
                      "nicer than",
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                    ],
                  },
                  // safe
                  {
                    text: [
                      { bullet: true },
                      "safer than",
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // If an adjective ends in a vowel and a consonant, we usually double the consonant:
                  {
                    text: [
                      {
                        important: true,
                      },
                      "If an adjective ends in a vowel and a consonant, we usually double the consonant:",
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // big
                  {
                    text: [
                      {
                        part: "big",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "grande",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "bigg",
                        type: "bold",
                      },
                      {
                        part: "er",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "maior",
                        type: "portuguese",
                      },
                      " ",
                    ],
                  },
                  // hot
                  {
                    text: [
                      { part: "hot", type: "bold" },
                      " ",
                      { part: "quente", type: "portuguese" },
                      " ➜ ",
                      { part: "hott", type: "bold" },
                      { part: "er", type: "mark" },
                      " ",
                      { part: "mais quente", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // This house is bigger than that one.
                  {
                    text: [
                      { bullet: true },
                      "This house is bigger than that one.",
                      " ",
                      {
                        part: "Esta casa é maior que aquela.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // This coffee is hotter than the tea.
                  {
                    text: [
                      { bullet: true },
                      "This coffee is hotter than the tea.",
                      " ",
                      {
                        part: "Este café está mais quente do que o chá.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // If a two-syllable adjective ends in a consonant and -y, we change -y to -i and add -er.
                  {
                    text: [
                      {
                        important: true,
                      },
                      "If a two-syllable adjective ends in a consonant and -y, we change -y to -i and add -er",
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // busy
                  {
                    text: [
                      { part: "busy", type: "bold" },
                      " ",
                      { part: "ocupado(a)", type: "portuguese" },
                      " ➜ ",
                      { part: "bus", type: "bold" },
                      { part: "ier", type: "mark" },
                      " ",
                      { part: "mais ocupado(a)", type: "portuguese" },
                      " ",
                    ],
                  },
                  // easy
                  {
                    text: [
                      { part: "easy", type: "bold" },
                      " ",
                      { part: "fácil", type: "portuguese" },
                      " ➜ ",
                      { part: "eas", type: "bold" },
                      { part: "ier", type: "mark" },
                      " ",
                      { part: "mais fácil", type: "portuguese" },
                      " ",
                    ],
                  },
                  // happy
                  {
                    text: [
                      { part: "happy", type: "bold" },
                      " ",
                      { part: "feliz", type: "portuguese" },
                      " ➜ ",
                      { part: "happ", type: "bold" },
                      { part: "ier", type: "mark" },
                      " ",
                      { part: "mais feliz", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "I am busier this week than last week.",
                      " ",
                      {
                        part: "Estou mais ocupado(a) esta semana do que na semana passada.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "This test is easier than the previous one.",
                      " ",
                      {
                        part: "Este teste é mais fácil do que o anterior.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "She feels happier at her new job than at the old one.",
                      " ",
                      {
                        part: "Ela se sente mais feliz no novo trabalho do que no antigo.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // If adjectives with three or more syllables form the comparative by putting more in front of the adjective.
                  {
                    text: [
                      {
                        important: true,
                      },
                      "Adjectives with three or more syllables form the comparative by putting more in front of the adjective.",
                      " ",
                      {
                        part: "Adjetivos com três ou mais sílabas formam o comparativo colocando more (mais) antes do adjetivo.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // beautiful
                  {
                    text: [
                      {
                        part: "beautiful",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "bonito(a)",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "more",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "more beautiful",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "mais bonito(a)",
                        type: "portuguese",
                      },
                      " ",
                    ],
                  },
                  // dangerous
                  {
                    text: [
                      {
                        part: "dangerous",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "perigoso(a)",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "more",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "dangerous",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "mais perigoso(a)",
                        type: "portuguese",
                      },
                      " ",
                    ],
                  },
                  // expensive
                  {
                    text: [
                      {
                        part: "expensive",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "caro",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "more",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "expensive",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "mais caro",
                        type: "portuguese",
                      },
                      " ",
                    ],
                  },
                  // important
                  {
                    text: [
                      {
                        part: "important",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "importante",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "more",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "important",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "mais importante",
                        type: "portuguese",
                      },
                      " ",
                    ],
                  },
                  // stressful
                  {
                    text: [
                      {
                        part: "stressful",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "estressante",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "more",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "stressful",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "mais estressante",
                        type: "portuguese",
                      },
                      " ",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // Living in the city is more expensive than living in the countryside.
                  {
                    text: [
                      { bullet: true },
                      "Living in the city is more expensive than living in the countryside.",
                      " ",
                      {
                        part: "Morar na cidade é mais caro do que morar no campo.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // This movie is more interesting than the last one.
                  {
                    text: [
                      { bullet: true },
                      "This movie is more interesting than the last one.",
                      " ",
                      {
                        part: "Este filme é mais interessante que o último.",
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
