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
                  // Comparative adjectives are used to compare two people, things, or situations.
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
                  // lineBreak
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
                      { bullet: true },
                      "This book is better than that one.",
                      " ",
                      {
                        part: "Este livro é melhor que aquele.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // Today is worse than yesterday.
                  {
                    text: [
                      { bullet: true },
                      "Today is worse than yesterday.",
                      " ",
                      {
                        part: "Hoje está pior do que ontem.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // I have less time this week than last week.
                  {
                    text: [
                      { bullet: true },
                      "I have less time this week than last week.",
                      " ",
                      {
                        part: "Eu tenho menos tempo esta semana do que na semana passada.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // My house is farther from school than yours.
                  {
                    text: [
                      { bullet: true },
                      "My house is farther from school than yours.",
                      " ",
                      {
                        part: "Minha casa fica mais longe da escola do que a sua.",
                        type: "portuguese",
                      },
                    ],
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
                    hr: true,
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
                  // fat
                  {
                    text: [
                      {
                        part: "fast",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "rápido",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "fast",
                        type: "bold",
                      },
                      {
                        part: "er",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "mais rápido",
                        type: "portuguese",
                      },
                      " ",
                    ],
                  },
                  // fat
                  {
                    text: [
                      {
                        part: "fat",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "gordo",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "fatt",
                        type: "bold",
                      },
                      {
                        part: "er",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "mais gordo",
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
                  // quick
                  {
                    text: [
                      {
                        part: "quick",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "rápido",
                        type: "portuguese",
                      },
                      " ➜ ",
                      {
                        part: "quick",
                        type: "bold",
                      },
                      {
                        part: "er",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "mais rápido",
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
                        part: "smart",
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
                      {
                        part: " Este quarto está mais limpo do que a cozinha.",
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
                  // He is faster than me.
                  {
                    text: [
                      { bullet: true },
                      "He is faster than me.",
                      " ",
                      {
                        part: "Ele é mais rápido do que eu.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // This is the quicker way to get there.
                  {
                    text: [
                      { bullet: true },
                      "This is the quicker way to get there.",
                      " ",
                      {
                        part: "Este é o jeito mais rápido de chegar lá.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    hr: true,
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
                      "This park is nicer than the one near my house.",
                      " ",
                      {
                        part: "Este parque é mais legal / mais agradável do que o perto da minha casa.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // safe
                  {
                    text: [
                      { bullet: true },
                      "This neighborhood is safer than the city center.",
                      " ",
                      {
                        part: "Este bairro é mais seguro do que o centro da cidade.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    hr: true,
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
                    hr: true,
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
                  // I am busier this week than last week.
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
                  // his test is easier than the previous one.
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
                  // She feels happier at her new job than at the old one.
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
                    hr: true,
                  },
                  // If adjectives with three or more syllables form the comparative by putting more in front of the adjective.
                  {
                    text: [
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
                  // experience
                  {
                    text: [
                      {
                        part: "experience",
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
                        part: "experience",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "mais experiência",
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
                  // She has more experience than her colleague.
                  {
                    text: [
                      { bullet: true },
                      "She has more experience than her colleague.",
                      " ",
                      {
                        part: "Ela tem mais experiência do que o colega dela.",
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
                  // This place is more beautiful than the last one.
                  {
                    text: [
                      { bullet: true },
                      "This place is more beautiful than the last one.",
                      " ",
                      {
                        part: "Este lugar é mais bonito(a) do que o anterior.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // This road is more dangerous at night.
                  {
                    text: [
                      { bullet: true },
                      "This road is more dangerous at night.",
                      " ",
                      {
                        part: "Esta estrada é mais perigosa à noite.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // This decision is more important than the last one.
                  {
                    text: [
                      { bullet: true },
                      "This decision is more important than the last one.",
                      " ",
                      {
                        part: "Esta decisão é mais importante do que a anterior.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // This job is more stressful than my old one.
                  {
                    text: [
                      { bullet: true },
                      "This job is more stressful than my old one.",
                      " ",
                      {
                        part: "Este trabalho é mais estressante do que o meu antigo.",
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
                      "are used to show the highest or lowest degree in a group of three or more people, things, or situations.",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
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
                  {
                    text: [
                      { part: "good", type: "bold" },
                      " ",
                      { part: "bom", type: "portuguese" },
                      " ➜ ",
                      { part: "the best", type: "bold" },
                      " ",
                      { part: "o melhor", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    text: [
                      { part: "bad", type: "bold" },
                      " ",
                      { part: "ruim, péssimo", type: "portuguese" },
                      " ➜ ",
                      { part: "the worst", type: "bold" },
                      " ",
                      { part: "o pior", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    text: [
                      { part: "little", type: "bold" },
                      " ",
                      { part: "pouco", type: "portuguese" },
                      " ➜ ",
                      { part: "the least", type: "bold" },
                      " ",
                      { part: "o menos", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    text: [
                      { part: "much / many", type: "bold" },
                      " ",
                      { part: "muito(s)", type: "portuguese" },
                      " ➜ ",
                      { part: "the most", type: "bold" },
                      " ",
                      { part: "o mais", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    text: [
                      { part: "far", type: "bold" },
                      " ",
                      { part: "longe, distante", type: "portuguese" },
                      " ➜ ",
                      { part: "the farthest / the furthest", type: "bold" },
                      " ",
                      { part: "o mais distante", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "This is the best day of my life.",
                      " ",
                      { part: "Este é o melhor dia da minha vida.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "This is the worst movie I have ever seen.",
                      " ",
                      { part: "Este é o pior filme que eu já vi.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "She has the least free time in the group.",
                      " ",
                      { part: "Ela tem menos tempo livre no grupo.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "This is the farthest house from the school.",
                      " ",
                      { part: "Esta é a casa mais distante da escola.", type: "portuguese" },
                    ],
                  },
                  {
                    hr: true,
                  },
                  {
                    text: [
                      {
                        important: true,
                        part: "To make superlative forms with one-syllable adjectives, we usually add -est and use 'the'.",
                      },
                      " ",
                      {
                        part: "Adjetivos curtos geralmente recebem -est e usamos 'the'.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "clean", type: "bold" },
                      " ",
                      { part: "limpo", type: "portuguese" },
                      " ➜ ",
                      { part: "the clean", type: "bold" },
                      { part: "est", type: "mark" },
                      " ",
                      { part: "o mais limpo", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    text: [
                      { part: "fast", type: "bold" },
                      " ",
                      { part: "rápido", type: "portuguese" },
                      " ➜ ",
                      { part: "the fast", type: "bold" },
                      { part: "est", type: "mark" },
                      " ",
                      { part: "o mais rápido", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    text: [
                      { part: "fat", type: "bold" },
                      " ",
                      { part: "gordo", type: "portuguese" },
                      " ➜ ",
                      { part: "the fatt", type: "bold" },
                      { part: "est", type: "mark" },
                      " ",
                      { part: "o mais gordo", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    text: [
                      { part: "old", type: "bold" },
                      " ",
                      { part: "velho", type: "portuguese" },
                      " ➜ ",
                      { part: "the old", type: "bold" },
                      { part: "est", type: "mark" },
                      " ",
                      { part: "o mais velho / o mais antigo", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "This is the cleanest room in the house.",
                      " ",
                      { part: "Este é o quarto mais limpo da casa.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "He is the fastest runner on the team.",
                      " ",
                      { part: "Ele é o corredor mais rápido do time.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "She is the oldest student in the class.",
                      " ",
                      { part: "Ela é a aluna mais velha da turma.", type: "portuguese" },
                    ],
                  },
                  {
                    hr: true,
                  },
                  {
                    text: [
                      {
                        important: true,
                      },
                      "If an adjective ends in -e, we add only -st.",
                      " ",
                      {
                        part: "Se um adjetivo termina em -e, adicionamos apenas -st.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "nice", type: "bold" },
                      " ",
                      { part: "legal / agradável", type: "portuguese" },
                      " ➜ ",
                      { part: "the nice", type: "bold" },
                      { part: "st", type: "mark" },
                      " ",
                      { part: "o mais legal / agradável", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    text: [
                      { part: "safe", type: "bold" },
                      " ",
                      { part: "seguro", type: "portuguese" },
                      " ➜ ",
                      { part: "the safe", type: "bold" },
                      { part: "st", type: "mark" },
                      " ",
                      { part: "o mais seguro", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "This is the nicest park in the city.",
                      " ",
                      { part: "Este é o parque mais legal da cidade.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "This is the safest neighborhood in the area.",
                      " ",
                      { part: "Este é o bairro mais seguro da região.", type: "portuguese" },
                    ],
                  },
                  {
                    hr: true,
                  },
                  {
                    text: [
                      {
                        important: true,
                      },
                      "If an adjective ends in a vowel and a consonant, we usually double the consonant and add -est.",
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
                  {
                    text: [
                      { part: "big", type: "bold" },
                      " ",
                      { part: "grande", type: "portuguese" },
                      " ➜ ",
                      { part: "the bigg", type: "bold" },
                      { part: "est", type: "mark" },
                      " ",
                      { part: "o maior", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    text: [
                      { part: "hot", type: "bold" },
                      " ",
                      { part: "quente", type: "portuguese" },
                      " ➜ ",
                      { part: "the hott", type: "bold" },
                      { part: "est", type: "mark" },
                      " ",
                      { part: "o mais quente", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "This is the biggest house on the street.",
                      " ",
                      { part: "Esta é a maior casa da rua.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "This is the hottest day of the year.",
                      " ",
                      { part: "Este é o dia mais quente do ano.", type: "portuguese" },
                    ],
                  },
                  {
                    hr: true,
                  },
                  {
                    text: [
                      {
                        important: true,
                      },
                      "If a two-syllable adjective ends in a consonant and -y, we change -y to -i and add -est.",
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
                  {
                    text: [
                      { part: "busy", type: "bold" },
                      " ",
                      { part: "ocupado(a)", type: "portuguese" },
                      " ➜ ",
                      { part: "the busi", type: "bold" },
                      { part: "est", type: "mark" },
                      " ",
                      { part: "o mais ocupado(a)", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    text: [
                      { part: "easy", type: "bold" },
                      " ",
                      { part: "fácil", type: "portuguese" },
                      " ➜ ",
                      { part: "the easi", type: "bold" },
                      { part: "est", type: "mark" },
                      " ",
                      { part: "o mais fácil", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    text: [
                      { part: "happy", type: "bold" },
                      " ",
                      { part: "feliz", type: "portuguese" },
                      " ➜ ",
                      { part: "the happi", type: "bold" },
                      { part: "est", type: "mark" },
                      " ",
                      { part: "o mais feliz", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "She is the busiest person in the office.",
                      " ",
                      { part: "Ela é a pessoa mais ocupada do escritório.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "This is the easiest test in the course.",
                      " ",
                      { part: "Este é o teste mais fácil do curso.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "He is the happiest child in the family.",
                      " ",
                      { part: "Ele é a criança mais feliz da família.", type: "portuguese" },
                    ],
                  },
                  {
                    hr: true,
                  },
                  {
                    text: [
                      "Adjectives with three or more syllables form the superlative by putting ",
                      { part: "most", type: "mark" },
                      " before the adjective.",
                      " ",
                      {
                        part: "Adjetivos com três ou mais sílabas formam o superlativo colocando most (o mais) antes do adjetivo.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "beautiful", type: "bold" },
                      " ",
                      { part: "bonito(a)", type: "portuguese" },
                      " ➜ ",
                      { part: "the most", type: "mark" },
                      " ",
                      { part: "beautiful", type: "bold" },
                      " ",
                      { part: "o mais bonito(a)", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    text: [
                      { part: "dangerous", type: "bold" },
                      " ",
                      { part: "perigoso(a)", type: "portuguese" },
                      " ➜ ",
                      { part: "the most", type: "mark" },
                      " ",
                      { part: "dangerous", type: "bold" },
                      " ",
                      { part: "o mais perigoso(a)", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    text: [
                      { part: "important", type: "bold" },
                      " ",
                      { part: "importante", type: "portuguese" },
                      " ➜ ",
                      { part: "the most", type: "mark" },
                      " ",
                      { part: "important", type: "bold" },
                      " ",
                      { part: "o mais importante", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    text: [
                      { part: "stressful", type: "bold" },
                      " ",
                      { part: "estressante", type: "portuguese" },
                      " ➜ ",
                      { part: "the most", type: "mark" },
                      " ",
                      { part: "stressful", type: "bold" },
                      " ",
                      { part: "o mais estressante", type: "portuguese" },
                      " ",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "This is the most beautiful place I know.",
                      " ",
                      { part: "Este é o lugar mais bonito que eu conheço.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "This is the most important decision of my life.",
                      " ",
                      { part: "Esta é a decisão mais importante da minha vida.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "This job is the most stressful one in the company.",
                      " ",
                      { part: "Este trabalho é o mais estressante da empresa.", type: "portuguese" },
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
                  // Adjectives ending in -ing describe the cause of a feeling or what makes something interesting, boring, exciting, etc.
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
                    hr: true,
                  },
                  // Adjectives ending in -ed describe how a personfeels as a result of something.
                  {
                    text: [
                      { part: "Adjectives ending in -ed", type: "bold" },
                      " describe how a person ",
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
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        attention: true,
                        part: "It answers: What kind of thing is it?",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
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
                  // Compound adjectives are made of two or more words that work together as one adjective.
                  {
                    text: [
                      { part: "Compound adjectives", type: "bold" },
                      " are made of two or more words that work together as one adjective.",
                    ],
                  },
                  // lineBreak
                  {
                    lineBreak: true,
                  },
                  // They are often connected with a hyphen.
                  {
                    text: [
                      {
                        attention: true,
                        part: "They are often connected with a hyphen.",
                      },
                    ],
                  },
                  // lineBreak
                  {
                    lineBreak: true,
                  },
                  // a well-known actor
                  {
                    text: [
                      { part: "a well-known actor", type: "bold" },
                      " ",
                      { part: "um ator conhecido", type: "portuguese" },
                    ],
                  },
                  // a full-time job
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
                  // a five-minute break
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
                  // a high-quality product
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
