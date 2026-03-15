import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";
export default function Articles() {
  return <>
      <Whiteboard title="Reference" subtitle="Articles" />
      <div className="line-break">
        <Contents items={[{
        href: "basic",
        label: "What Are Articles?"
      }, {
        href: "a-an",
        label: "A / An (Indefinite)"
      }, {
        href: "the",
        label: "The (Definite)"
      }, {
        href: "zero",
        label: "No Article (Zero Article)"
      }, {
        href: "exercises",
        label: "Exercises"
      }]} />
        <Section id="basic" label="What Are Articles?" heading={3}>
          <Paragraph value={[{
          part: "Articles",
          type: "bold"
        }, " ", "are words that come before a noun. They help us know if we are talking about something general or specific.", " ", {
          part: "Artigos são palavras que vêm antes de um substantivo. Eles nos ajudam a saber se estamos falando de algo geral ou específico.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          attention: true,
          part: "In English, there are three main forms: a, an, and the."
        }, " ", {
          part: "Em inglês, existem três formas principais: a, an e the.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, "a book ", {
          part: "um livro",
          type: "portuguese"
        }, {
          lineBreak: true
        }, "an apple ", {
          part: "uma maçã",
          type: "portuguese"
        }, {
          lineBreak: true
        }, "the teacher ", {
          part: "o professor / a professora",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "I have a book.", " ", {
          part: "Eu tenho um livro.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "She eats an apple every day.", " ", {
          part: "Ela come uma maçã todos os dias.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "The teacher is in the classroom.", " ", {
          part: "O professor está na sala de aula.",
          type: "portuguese"
        }]} />
        </Section>

        <Section id="a-an" label="A / An (Indefinite Articles)" heading={3}>
          <Paragraph value={[{
          part: "A and An",
          type: "bold"
        }, " ", "are used when we talk about something for the first time or something general.", " ", {
          part: "Usamos quando não sabemos exatamente qual.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          attention: true
        }, {
          important: true,
          part: "Use 'a'"
        }, " ", {
          part: "before",
          type: "mark"
        }, "  words that start with ", {
          part: "a consonant sound",
          type: "mark"
        }, ". ", {
          part: "Use 'a' antes de som de consoante e 'an' antes de som de vogal.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, "a dog ", {
          part: "um cachorro",
          type: "portuguese"
        }, {
          lineBreak: true
        }, "a person ", {
          part: "uma pessoa",
          type: "portuguese"
        }, {
          lineBreak: true
        }, "a table ", {
          part: "uma mesa",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          attention: true
        }, "The letter 'u' can have the phonetic symbol ", {
          part: "/j/",
          type: "phonetics"
        }, ", which means it starts with a consonant sound, not a vowel sound.", " ", {
          part: "A letra 'u' pode ter o símbolo fonético",
          type: "portuguese"
        }, " ", {
          part: "/j/",
          type: "phonetics"
        }, {
          part: ", o que significa que começa com som de consoante, e não de vogal.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, "a unicorn ", {
          part: "/ˈjuː.nɪ.kɔːrn/",
          type: "phonetics"
        }, " ", {
          part: "uma universidade",
          type: "portuguese"
        }, {
          lineBreak: true
        }, "a university ", {
          part: "/ˌjuː.nəˈvɝː.sə.t̬i/",
          type: "phonetics"
        }, " ", {
          part: "uma universidade",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "I see a dog in the park.", " ", {
          part: "Eu vejo um cachorro no parque.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          attention: true
        }, {
          part: "Use 'an'"
        }, " ", {
          part: "before",
          type: "mark"
        }, "  words that start with ", {
          part: "a vowel sound",
          type: "mark"
        }, ". ", {
          part: "Use 'a' antes de som de consoante e 'an' antes de som de vogal.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, "an orange ", {
          part: "uma laranja",
          type: "portuguese"
        }, {
          lineBreak: true
        }, "an hour ", {
          part: "uma hora (h muda)",
          type: "portuguese"
        }, {
          lineBreak: true
        }, "an umbrella ", {
          part: "um guarda-chuva",
          type: "portuguese"
        }, {
          lineBreak: true
        }, "an idea ", {
          part: "uma ideia",
          type: "portuguese"
        }, {
          lineBreak: true
        }, "an email ", {
          part: "um e-mail",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "He forgot an umbrella at home.", " ", {
          part: "Ele esqueceu um guarda-chuva em casa.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "She sent me an email.", " ", {
          part: "Ela me enviou um e-mail.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "He wants an orange.", " ", {
          part: "Ela quer uma laranja.",
          type: "portuguese"
        }]} />
        </Section>

        <Section id="the" label="The (Definite Article)" heading={3}>
          <Paragraph value={[{
          part: "The",
          type: "bold"
        }, " ", "is used when both the speaker and the listener know what we are talking about.", " ", {
          part: "Usamos quando algo é específico.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          attention: true
        }, {
          important: true,
          part: "Use 'the' when there is only one, or when it is clear which one you mean."
        }, " ", {
          part: "Use 'the' quando existe apenas um ou quando está claro qual é.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "I missed the bus this morning.", " ", {
          part: "Eu perdi o ônibus esta manhã.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "The sun is very bright today.", " ", {
          part: "O sol está muito forte hoje.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "Please close the door.", " ", {
          part: "Por favor, feche a porta.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          attention: true
        }, {
          part: "'The' can be pronounced in two different ways:"
        }, " ", {
          part: "“The” pode ser pronunciado de duas formas diferentes.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, "It sounds ", {
          audio: "/assets/audio/general/the1.mp3"
        }, {
          part: "/ðiː/",
          type: "phonetics"
        }, " when followed by a ", {
          part: "vowel sound",
          type: "mark"
        }, ". ", {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/general/the-address.mp3"
        }, "the address ", {
          part: "o endereço",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/general/the-airport.mp3"
        }, "the airport ", {
          part: "o aeroporto",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/general/the-apple.mp3"
        }, "the apple ", {
          part: "a maçã",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/general/the-elevator.mp3"
        }, "the elevator ", {
          part: "o elevador",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/general/the-email.mp3"
        }, "the email ", {
          part: "o e-mail",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/general/the-internet1.mp3"
        }, "the internet ", {
          part: "a internet",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/general/the-office.mp3"
        }, "the office ", {
          part: "o escritório",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/general/the-office-is-open.mp3",
          bullet: true
        }, "The office is open.", " ", {
          part: "O escritório está aberto.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/general/check-the-email-please.mp3",
          bullet: true
        }, "Check the email, please.", " ", {
          part: "Verifique o e-mail, por favor.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/general/the-address-is-wrong.mp3",
          bullet: true
        }, "The address is wrong.", " ", {
          part: "O endereço está errado.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, "It sounds ", {
          audio: "/assets/audio/general/the2.mp3"
        }, {
          part: "/ðə/",
          type: "phonetics"
        }, " when followed by a ", {
          part: "consonant sound",
          type: "mark"
        }, ". ", {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/general/the-bus.mp3"
        }, "the bus ", {
          part: "o ônibus",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/general/the-sun.mp3"
        }, "the sun ", {
          part: "o sol",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/general/the-door.mp3"
        }, "the door ", {
          part: "a porta",
          type: "portuguese"
        }]} />
        </Section>

        <Section id="zero" label="No Article (Zero Article)" heading={3}>
          <Paragraph value={[{
          part: "Zero article",
          type: "bold"
        }, " ", "means we do not use an article before the noun.", " ", {
          part: "Significa que não usamos artigo.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          attention: true
        }, {
          part: "We often use no article with "
        }, {
          part: "plural nouns",
          type: "mark"
        }, " and ", {
          part: "uncountable nouns",
          type: "mark"
        }, "  when talking in general. ", {
          part: "Usamos sem artigo com plurais e substantivos incontáveis em sentido geral.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "Dogs are friendly. ", {
          part: "Cachorros são amigáveis.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "Water is important. ", {
          part: "Água é importante.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "I like music.", " ", {
          part: "Eu gosto de música.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "Children need love.", " ", {
          part: "Crianças precisam de amor.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          attention: true
        }, {
          part: "We usually use no article with "
        }, " ", {
          part: "most country names, languages, meals, sports, and academic subjects",
          type: "mark"
        }, ". ", {
          part: "Normalmente não usamos artigo com a maioria dos nomes de países, idiomas, refeições, esportes e matérias acadêmicas.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "They live in Brazil. ", {
          part: "Eles moram no Brasil.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "She speaks Portuguese. ", {
          part: "Ela fala português.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "We had breakfast at home.", " ", {
          part: "Nós tomamos café da manhã em casa.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "She plays soccer on weekends.", " ", {
          part: "Ela joga futebol nos fins de semana.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "I study math and history.", " ", {
          part: "Eu estudo matemática e história.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          attention: true
        }, {
          part: "We also use no article with "
        }, " ", {
          part: "streets, parks, lakes, and mountains, and with institutions",
          type: "mark"
        }, "  in a general sense (school, bed, hospital, prison, church, university). ", {
          part: "Também usamos sem artigo com ruas, parques, lagos e montanhas, e com instituições em sentido geral (escola, cama, hospital, prisão, igreja, universidade).",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "They live on Main Street.", " ", {
          part: "Eles moram na Rua Principal.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "He goes to school every day.", " ", {
          part: "Ele vai para a escola todos os dias.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true
        }, "He is in bed.", " ", {
          part: "Ele está na cama.",
          type: "portuguese"
        }]} />
        </Section>

        <Section id="exercises" label="Exercises" heading={3}>
          <Radio exercise={{
          instruction: "1. Choose the correct article.",
          questions: [{
            question: "1. I have ___ apple in my bag.",
            options: [{
              option: "an",
              isCorrect: true
            }, {
              option: "a",
              isCorrect: false
            }, {
              option: "the",
              isCorrect: false
            }]
          }, {
            question: "2. She is ___ teacher at my school.",
            options: [{
              option: "a",
              isCorrect: true
            }, {
              option: "an",
              isCorrect: false
            }, {
              option: "the",
              isCorrect: false
            }]
          }, {
            question: "3. ___ sun is very bright today.",
            options: [{
              option: "The",
              isCorrect: true
            }, {
              option: "A",
              isCorrect: false
            }, {
              option: "An",
              isCorrect: false
            }]
          }, {
            question: "4. I like ___ music.",
            options: [{
              option: "—",
              isCorrect: true
            }, {
              option: "a",
              isCorrect: false
            }, {
              option: "the",
              isCorrect: false
            }]
          }, {
            question: "5. He bought ___ umbrella.",
            options: [{
              option: "an",
              isCorrect: true
            }, {
              option: "a",
              isCorrect: false
            }, {
              option: "the",
              isCorrect: false
            }]
          }]
        }} />

          <FillInTheBlanks exercise={{
          instructions: "2. Fill in the blanks with the correct article (a, an, the, or -).",
          blocks: [{
            block: [{
              text: "1. She has "
            }, {
              blank: "a"
            }, {
              text: " dog."
            }],
            lineBreak: true
          }, {
            block: [{
              text: "2. I need "
            }, {
              blank: "an"
            }, {
              text: " answer."
            }],
            lineBreak: true
          }, {
            block: [{
              text: "3. Please close "
            }, {
              blank: "the"
            }, {
              text: " door."
            }],
            lineBreak: true
          }, {
            block: [{
              text: "4. We like "
            }, {
              blank: "-"
            }, {
              text: " water."
            }],
            lineBreak: true
          }, {
            block: [{
              text: "5. He lives near "
            }, {
              blank: "the"
            }, {
              text: " school."
            }]
          }]
        }} />
        </Section>
      </div>
    </>;
}