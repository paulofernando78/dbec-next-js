import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";

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
            { href: "cefr", label: "What’s CEFR?" },
            { href: "a1-beginner", label: "A1 – Beginner" },
            { href: "a2-elementary", label: "A2 – Elementary" },
            { href: "b1-intermediate", label: "B1 – Intermediate" },
            { href: "b2-upper-intermediate", label: "B2 – Upper-Intermediate" },
            { href: "c1-advanced", label: "C1 – Advanced" },
            { href: "c2-proficiency", label: "C2 – Proficiency" },
          ]}
        />
        <Section id="cefr" label="CEFR" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        part: "This page can be used as a speaking placement guide or as a classroom practice reference for teachers and students.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Esta página pode ser usada como guia de nivelamento oral ou como referência de prática em sala para professores e alunos.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        part: "What does CEFR mean?",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        part: "The CEFR is an international standard for describing language ability. It provides a clear, shared framework to assess and compare learners’ skills in listening, reading, speaking, and writing across different languages, countries, and educational systems.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "O CEFR é um padrão internacional para descrever a proficiência em línguas. Ele fornece um quadro comum para avaliar e comparar as habilidades de ouvir, ler, falar e escrever em diferentes idiomas, países e sistemas educacionais.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        part: "The framework is divided into six levels: A1, A2, B1, B2, C1, and C2. These levels describe what learners can do at each stage, from basic communication to full professional and academic proficiency.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "O quadro é dividido em seis níveis: A1, A2, B1, B2, C1 e C2. Esses níveis descrevem o que o aluno é capaz de fazer em cada etapa, desde a comunicação básica até a proficiência acadêmica e profissional.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        part: "The CEFR is widely used by universities, employers, and examination boards such as Cambridge English to design courses, set learning objectives, and report language proficiency in a transparent and comparable way.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "O CEFR é amplamente utilizado por universidades, empregadores e instituições de exame, como a Cambridge English, para planejar cursos, definir objetivos de aprendizagem e relatar a proficiência linguística de forma clara e comparável.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="a1-beginner" label="A1 Beginner" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      "Can understand and use very basic expressions and simple sentences. Can introduce themselves and others, and ask and answer simple questions about personal details (name, country, job).",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Pode entender e usar expressões muito básicas e frases simples. Pode se apresentar, apresentar outras pessoas e fazer e responder perguntas simples sobre informações pessoais (nome, país, profissão).",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },
                  {
                    text: [
                      { part: "Questions", type: "bold" },
                    ],
                  },
                  { lineBreak: true },
                  { text: [{ bullet: true, part: "Hello. How are you?" }] },
                  { text: [{ bullet: true, part: "What's your name?" }] },
                  { text: [{ bullet: true, part: "Where are you from?" }] },
                  { text: [{ bullet: true, part: "Do you study English?" }] },
                  { text: [{ bullet: true, part: "What is your favorite subject?" }] },
                  { text: [{ bullet: true, part: "Do you have a job?" }] },
                  { text: [{ bullet: true, part: "What do you do in your free time?" }] },
                  { text: [{ bullet: true, part: "Do you like sports?" }] },
                  { text: [{ bullet: true, part: "Do you play sports?" }] },
                ],
              },
            ]}
          />
        </Section>
        <Section id="a2-elementary" label="A2 Elementary" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      "Can understand sentences and frequently used expressions related to areas of immediate relevance (family, shopping, work, local area). Can communicate in simple and routine tasks that require a direct exchange of information.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Pode entender frases e expressões usadas com frequência em áreas de relevância imediata (família, compras, trabalho, área local). Pode se comunicar em tarefas simples e rotineiras que exigem troca direta de informações.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },
                  {
                    text: [
                      { part: "Questions", type: "bold" },
                    ],
                  },
                  { lineBreak: true },
                  { text: [{ bullet: true, part: "Do you like movies?" }] },
                  { text: [{ bullet: true, part: "What's your favorite movie?" }] },
                  { text: [{ bullet: true, part: "What kinds of movies do you like?" }] },
                  { text: [{ bullet: true, part: "Where did you grow up?" }] },
                  { text: [{ bullet: true, part: "What did you do yesterday?" }] },
                  { text: [{ bullet: true, part: "Did you study English in elementary school?" }] },
                  { text: [{ bullet: true, part: "What was your favorite class?" }] },
                  { text: [{ bullet: true, part: "What are you doing later today?" }] },
                  { text: [{ bullet: true, part: "Are you doing anything tonight?" }] },
                ],
              },
            ]}
          />
        </Section>
        <Section id="b1-intermediate" label="B1 Intermediate" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      "Can understand the main points of clear standard input on familiar matters. Can deal with most situations likely to arise while travelling. Can produce simple connected text on topics that are familiar or of personal interest.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Pode entender os pontos principais de uma fala ou texto claro sobre assuntos familiares. Pode lidar com a maioria das situações em viagens. Pode produzir textos simples e conectados sobre temas familiares ou de interesse pessoal.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },
                  {
                    text: [
                      { part: "Questions", type: "bold" },
                    ],
                  },
                  { lineBreak: true },
                  { text: [{ bullet: true, part: "Have you ever eaten unusual foods?" }] },
                  { text: [{ bullet: true, part: "Where did you eat it?" }] },
                  { text: [{ bullet: true, part: "How did you like it?" }] },
                  { text: [{ bullet: true, part: "Would you try it again? Why or why not?" }] },
                  { text: [{ bullet: true, part: "Do you live in a house or an apartment?" }] },
                  { text: [{ bullet: true, part: "What is it like?" }] },
                  { text: [{ bullet: true, part: "Compare your home with someone else’s home." }] },
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
            blocks={[
              {
                lines: [
                  {
                    text: [
                      "Can understand the main ideas of complex texts on both concrete and abstract topics, including technical discussions in their field. Can interact with a degree of fluency and spontaneity, and produce clear, detailed text on a wide range of subjects.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Pode entender as ideias principais de textos complexos sobre temas concretos e abstratos, incluindo discussões técnicas na sua área. Pode interagir com fluência e espontaneidade e produzir textos claros e detalhados sobre uma ampla variedade de assuntos.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },
                  {
                    text: [
                      { part: "Questions", type: "bold" },
                    ],
                  },
                  { lineBreak: true },
                  { text: [{ bullet: true, part: "Describe a difficult event in your life:" }] },
                  { text: [{ bullet: true, part: "– What happened?" }] },
                  { text: [{ bullet: true, part: "– What were you doing at the time?" }] },
                  { text: [{ bullet: true, part: "If you could study anything you wanted, what would you study?" }] },
                  { text: [{ bullet: true, part: "Do you prefer studying during the day or at night?" }] },
                  { text: [{ bullet: true, part: "Would you prefer an art class or a photography class?" }] },
                  { text: [{ bullet: true, part: "Give two reasons for your choice." }] },
                  { text: [{ bullet: true, part: "What will you be doing one year from now?" }] },
                  { text: [{ bullet: true, part: "How do you think it will be different then?" }] },
                  { text: [{ bullet: true, part: "Will you have finished your studies?" }] },
                ],
              },
            ]}
          />
        </Section>
        <Section id="c1-advanced" label="C1 Advanced" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      "At C1, learners can understand demanding, longer texts, recognize implicit meaning, and express themselves fluently without much obvious searching for expressions.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "No nível C1, os alunos conseguem compreender textos longos e exigentes, reconhecer significados implícitos e se expressar com fluência, sem precisar procurar palavras com frequência.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },
                  {
                    text: [
                      { part: "Questions", type: "bold" },
                    ],
                  },
                  { lineBreak: true },
                  { text: [{ bullet: true, part: "Compare your life today with your life a few years ago." }] },
                  { text: [{ bullet: true, part: "How has it changed?" }] },
                  { text: [{ bullet: true, part: "What is the biggest problem in the world today?" }] },
                  { text: [{ bullet: true, part: "Why is that the most important problem?" }] },
                  { text: [{ bullet: true, part: "If you were responsible, how would you fix it?" }] },
                  { text: [{ bullet: true, part: "What arguments might someone disagree with, and how would you respond?" }] },
                  { text: [{ bullet: true, part: "What does it mean to be polite in your culture?" }] },
                  { text: [{ bullet: true, part: "Give examples of polite and impolite behavior." }] },
                  { text: [{ bullet: true, part: "Are you superstitious?" }] },
                  { text: [{ bullet: true, part: "Do you believe that certain things cause good or bad luck? Why or why not?" }] },
                  { text: [{ bullet: true, part: "What things do people avoid doing because of their beliefs?" }] },
                  { text: [{ bullet: true, part: "What have you been told about your childhood?" }] },
                  { text: [{ bullet: true, part: "Were you raised by relatives other than your parents?" }] },
                  { text: [{ bullet: true, part: "Were you encouraged to be independent?" }] },
                ],
              },
            ]}
          />
        </Section>
        <Section id="c2-proficiency" label="C2 Proficiency" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      "At C2, learners can understand virtually everything heard or read with ease. They can summarize information from different spoken and written sources, reconstruct arguments, and express themselves spontaneously, very fluently, and precisely, even in complex academic or professional contexts.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "No nível C2, os alunos conseguem compreender praticamente tudo o que ouvem ou leem com facilidade. Eles podem resumir informações de diferentes fontes faladas e escritas, reconstruir argumentos e se expressar de forma espontânea, muito fluente e precisa, mesmo em contextos acadêmicos ou profissionais complexos.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },
                  {
                    text: [
                      { part: "Questions", type: "bold" },
                    ],
                  },
                  { lineBreak: true },
                  { text: [{ bullet: true, part: "To what extent do you think technology has improved the quality of human relationships?" }] },
                  { text: [{ bullet: true, part: "How would you balance economic growth and environmental protection in public policy?" }] },
                  { text: [{ bullet: true, part: "Can cultural traditions slow down social progress? Why or why not?" }] },
                  { text: [{ bullet: true, part: "Describe a complex problem in your field and propose a realistic solution." }] },
                  { text: [{ bullet: true, part: "Summarize two opposing viewpoints on this issue and state your own position." }] },
                  { text: [{ bullet: true, part: "How do media and misinformation influence public opinion in modern societies?" }] },
                ],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}
