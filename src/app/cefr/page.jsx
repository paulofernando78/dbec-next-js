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
            { href: "a1-beginner", label: "A1 Beginner" },
            { href: "a2-elementary", label: "A2 Elementary" },
            { href: "b1-intermediate", label: "B1 Intermediate" },
            { href: "b2-plus", label: "B2+" },
          ]}
        />
        <Section id="cefr" label="CEFR" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // What's CEFR?
                  {
                    text: [
                      {
                        part: "What's does CEFR mean?",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // CEFR stand for...
                  {
                    text: [
                      {
                        part: "CEFR",
                        type: "bold",
                      },
                      " stands for...",
                    ],
                  },
                  {
                    lineBreak: true,
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
                ],
              },
            ]}
          />
        </Section>
        <Section id="b2-plus" label="B2+" heading={3}>
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
                ],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}
