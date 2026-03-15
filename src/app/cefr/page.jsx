import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Line } from "@/components/molecules/Line";
import { Paragraph } from "@/components/molecules/Paragraph";
import { List } from "@/components/molecules/List";
import { LineBreak } from "@/components/atoms/LineBreak";
import {
  content,
  audio,
  bold,
  italic,
  mark,
  underline,
  boldMark,
  phonetics,
  portuguese,
} from "@/helpers/content";
export default function WhatsCEFR() {
  return (
    <>
      <Whiteboard
        title="CEFR"
        subtitle="Common European Framework of Reference"
      />
      <div className="line-break">
        <Contents
          items={[
            {
              href: "cefr",
              label: "What’s CEFR?",
            },
            {
              href: "a1-beginner",
              label: "A1 – Beginner",
            },
            {
              href: "a2-elementary",
              label: "A2 – Elementary",
            },
            {
              href: "b1-intermediate",
              label: "B1 – Intermediate",
            },
            {
              href: "b2-upper-intermediate",
              label: "B2 – Upper-Intermediate",
            },
            {
              href: "c1-advanced",
              label: "C1 – Advanced",
            },
            {
              href: "c2-proficiency",
              label: "C2 – Proficiency",
            },
          ]}
        />

        <div>
          <Paragraph
            value={[
              ...content({
                parts: [
                  "This page can be used as a speaking placement guide or as a classroom practice reference for teachers and students.",
                ],
              }),
            ]}
          />
          <Paragraph
            value={[
              ...content({
                parts: [
                  portuguese(
                    "Esta página pode ser usada como guia de nivelamento oral ou como referência de prática em sala para professores e alunos.",
                  ),
                ],
              }),
            ]}
          />
        </div>

        <Section id="cefr" label="CEFR" heading={3}>
          <Paragraph
            value={[
              ...content({
                parts: [
                  "The CEFR is an international standard for describing language ability. It provides a clear, shared framework for assessing and comparing learners’ skills in listening, reading, speaking, and writing across different languages, countries, and educational systems.",
                ],
              }),
            ]}
          />
          <Paragraph
            value={[
              ...content({
                parts: [
                  portuguese(
                    "O CEFR é um padrão internacional para descrever a proficiência em línguas. Ele fornece um quadro comum para avaliar e comparar as habilidades de ouvir, ler, falar e escrever em diferentes idiomas, países e sistemas educacionais.",
                  ),
                ],
              }),
            ]}
          />
          <LineBreak />
          <Paragraph
            value={[
              ...content({
                parts: [
                  "The framework is divided into six levels: A1, A2, B1, B2, C1, and C2. These levels describe what learners can do at each stage, from basic communication to full professional and academic proficiency.",
                ],
              }),
            ]}
          />
          <Paragraph
            value={[
              ...content({
                parts: [
                  portuguese(
                    "O quadro é dividido em seis níveis: A1, A2, B1, B2, C1 e C2. Esses níveis descrevem o que o aluno é capaz de fazer em cada etapa, desde a comunicação básica até a proficiência acadêmica e profissional.",
                  ),
                ],
              }),
            ]}
          />
          <Paragraph
            value={[
              {
                part: "",
              },
              {
                lineBreak: true,
              },
              {
                part: "",
                type: "portuguese",
              },
              {
                lineBreak: true,
              },
              {
                lineBreak: true,
              },
              {
                lineBreak: true,
              },
              {
                part: "The CEFR is widely used by universities, employers, and examination boards such as Cambridge English to design courses, set learning objectives, and report language proficiency in a transparent and comparable way.",
              },
              {
                lineBreak: true,
              },
              {
                part: "O CEFR é amplamente utilizado por universidades, empregadores e instituições de exame, como a Cambridge English, para planejar cursos, definir objetivos de aprendizagem e relatar a proficiência linguística de forma clara e comparável.",
                type: "portuguese",
              },
            ]}
          />
        </Section>
        <Section id="a1-beginner" label="A1 Beginner" heading={3}>
          <Paragraph
            value={[
              ...content({
                parts: [
                  "Can understand and use very basic expressions and simple sentences. Can introduce themselves and others, and ask and answer simple questions about personal details (name, country, job).",
                ],
              }),
            ]}
          />
          <Paragraph
            value={[
              ...content({
                parts: [
                  portuguese(
                    "Pode entender e usar expressões muito básicas e frases simples. Pode se apresentar, apresentar outras pessoas e fazer e responder perguntas simples sobre informações pessoais (nome, país, profissão).",
                  ),
                ],
              }),
            ]}
          />
          <LineBreak />
          <Line
            value={[
              ...content({
                audio: "",
                parts: [bold("Questions:")],
              }),
            ]}
          />
          <LineBreak />
          <List
            bullet={true}
            items={[
              {
                value: [
                  ...content({
                    parts: ["Hello. How are you?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["What's your name?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["Where are you from?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["Do you study English?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["What is your favorite subject in school?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["Do you have a job?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["What do you do in your free time?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["Do you like sports?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["Do you play sports?"],
                  }),
                ],
              },
            ]}
          />
        </Section>
        <Section id="a2-elementary" label="A2 Elementary" heading={3}>
          <Paragraph
            value={[
              ...content({
                parts: [
                  "Can understand sentences and frequently used expressions related to areas of immediate relevance (family, shopping, work, local area). Can communicate in simple and routine tasks that require a direct exchange of information.",
                ],
              }),
            ]}
          />
          <Paragraph
            value={[
              ...content({
                parts: [
                  portuguese(
                    "Pode entender frases e expressões usadas com frequência em áreas de relevância imediata (família, compras, trabalho, área local). Pode se comunicar em tarefas simples e rotineiras que exigem troca direta de informações.",
                  ),
                ],
              }),
            ]}
          />
          <LineBreak />
          <Line
            value={[
              ...content({
                audio: "",
                parts: [bold("Questions:")],
              }),
            ]}
          />
          <LineBreak />
          <List
            bullet={true}
            items={[
              {
                value: [
                  ...content({
                    parts: ["What's your favorite movie?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["What kinds of movies do you like?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["Where did you grow up?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["What did you do yesterday?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["Did you study English in elementary school?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["What was your favorite class?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["What are you doing later today?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["Are you doing anything this evening?"],
                  }),
                ],
              },
            ]}
          />
        </Section>
        <Section id="b1-intermediate" label="B1 Intermediate" heading={3}>
          <Paragraph
            value={[
              ...content({
                parts: [
                  "Can understand the main points of clear standard input on familiar matters. Can deal with most situations likely to arise while travelling. Can produce simple connected text on topics that are familiar or of personal interest.",
                ],
              }),
            ]}
          />
          <Paragraph
            value={[
              ...content({
                parts: [
                  portuguese(
                    "Pode entender os pontos principais de uma fala ou texto claro sobre assuntos familiares. Pode lidar com a maioria das situações em viagens. Pode produzir textos simples e conectados sobre temas familiares ou de interesse pessoal.",
                  ),
                ],
              }),
            ]}
          />
          <LineBreak />
          <Line
            value={[
              ...content({
                audio: "",
                parts: [bold("Questions:")],
              }),
            ]}
          />
          <LineBreak />
          <List
            bullet={true}
            items={[
              {
                value: [
                  ...content({
                    parts: ["Have you ever eaten unusual foods?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["Where did you eat it?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["What did you think of it?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["Would you try it again? Why or why not?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["Do you live in a house or an apartment?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["What is it like?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["Compare your home with someone else’s home."],
                  }),
                ],
              },
            ]}
          />
        </Section>
        <Section
          id="b2-upper-intermediate"
          label="B2 Upper-Intermediate"
          heading={3}
        >
          <Paragraph
            value={[
              ...content({
                parts: [
                  "Can understand the main ideas of complex texts on both concrete and abstract topics, including technical discussions in their field. Can interact with a degree of fluency and spontaneity, and produce clear, detailed text on a wide range of subjects.",
                ],
              }),
            ]}
          />
          <Paragraph
            value={[
              ...content({
                parts: [
                  portuguese(
                    "Pode entender as ideias principais de textos complexos sobre temas concretos e abstratos, incluindo discussões técnicas na sua área. Pode interagir com fluência e espontaneidade e produzir textos claros e detalhados sobre uma ampla variedade de assuntos.",
                  ),
                ],
              }),
            ]}
          />
          <LineBreak />
          <Line
            value={[
              ...content({
                audio: "",
                parts: [bold("Questions:")],
              }),
            ]}
          />
          <LineBreak />
          <Line
            value={[
              ...content({
                parts: ["Describe a difficult event in your life:"],
              }),
            ]}
          />
          <LineBreak />
          <List
            bullet={true}
            items={[
              {
                value: [
                  ...content({
                    parts: ["What happened?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["What were you doing at the time?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: [
                      "If you could study anything you wanted, what would you study?",
                    ],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: [
                      "Do you prefer studying during the day or at night?",
                    ],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: [
                      "Would you prefer an art class or a photography class?",
                    ],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["Explain your choice. Give at least two reasons."],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["What will you be doing one year from now?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["How do you think it will be different then?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["Will you have finished your studies?"],
                  }),
                ],
              },
            ]}
          />
        </Section>
        <Section id="c1-advanced" label="C1 Advanced" heading={3}>
          <Paragraph
            value={[
              ...content({
                parts: [
                  "At C1, learners can understand demanding, longer texts, recognize implicit meaning, and express themselves fluently without much obvious searching for expressions.",
                ],
              }),
            ]}
          />
          <Paragraph
            value={[
              ...content({
                parts: [
                  portuguese(
                    "No nível C1, os alunos conseguem compreender textos longos e exigentes, reconhecer significados implícitos e se expressar com fluência, sem precisar procurar palavras com frequência.",
                  ),
                ],
              }),
            ]}
          />
          <LineBreak />
          <Line
            value={[
              ...content({
                audio: "",
                parts: [bold("Questions:")],
              }),
            ]}
          />
          <LineBreak />
          <Line
            value={[
              ...content({
                parts: [
                  "Compare your life today with your life a few years ago.:",
                ],
              }),
            ]}
          />
          <LineBreak />
          <List
            bullet={true}
            items={[
              {
                value: [
                  ...content({
                    parts: ["How has it changed?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["What is the biggest problem in the world today?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["Why is that the most important problem?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["If you were responsible, how would you fix it?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: [
                      "What arguments might someone use to disagree with you, and how would you respond?",
                    ],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["What does it mean to be polite in your culture?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["Give examples of polite and impolite behavior."],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["Are you superstitious?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: [
                      "Do you believe that certain things cause good or bad luck? Why or why not?",
                    ],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: [
                      "What things do people avoid doing because of their beliefs?",
                    ],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["What have you been told about your childhood?"],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: [
                      "Were you raised by relatives other than your parents?",
                    ],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: ["Were you encouraged to be independent?"],
                  }),
                ],
              },
            ]}
          />
        </Section>
        <Section id="c2-proficiency" label="C2 Proficiency" heading={3}>
          <Paragraph
            value={[
              ...content({
                parts: [
                  "At C2, learners can understand virtually everything heard or read with ease. They can summarize information from different spoken and written sources, reconstruct arguments, and express themselves spontaneously, very fluently, and precisely, even in complex academic or professional contexts.",
                ],
              }),
            ]}
          />
          <Paragraph
            value={[
              ...content({
                parts: [
                  portuguese(
                    "No nível C2, os alunos conseguem compreender praticamente tudo o que ouvem ou leem com facilidade. Eles podem resumir informações de diferentes fontes faladas e escritas, reconstruir argumentos e se expressar de forma espontânea, muito fluente e precisa, mesmo em contextos acadêmicos ou profissionais complexos.",
                  ),
                ],
              }),
            ]}
          />
          <LineBreak />
          <Line
            value={[
              ...content({
                audio: "",
                parts: [bold("Questions:")],
              }),
            ]}
          />
          <LineBreak />
          <List
            bullet={true}
            items={[
              {
                value: [
                  ...content({
                    parts: [
                      "To what extent has technology improved or damaged the quality of human relationships?",
                    ],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: [
                      "How would you balance economic growth and environmental protection in public policy?",
                    ],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: [
                      "Can cultural traditions slow down social progress? Why or why not?",
                    ],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: [
                      "Describe a complex problem in your field and propose a realistic solution.",
                    ],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: [
                      "Summarize two opposing viewpoints on this issue and state your own position.",
                    ],
                  }),
                ],
              },
              {
                value: [
                  ...content({
                    parts: [
                      "How do media and misinformation influence public opinion in modern societies?",
                    ],
                  }),
                ],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}
