import styles from "./about.module.css";

import { Section } from "@/components/molecules/Section";
import { Card } from "@/components/atoms/Card";
import { CardLayout } from "@/components/molecules/CardLayout";
import { Image } from "@/components/atoms/Image";
import { Paragraph } from "@/components/molecules/Paragraph";
import { LineBreak } from "@/components/atoms/LineBreak";
import { content } from "@/helpers/content";

const formation = [
  {
    institution: "Los Angeles Music Academy (LAMA), Pasadena – CA",
    period: "Setembro 2000 – Março 2001",
    program: "Majoring in Drums",
  },
  {
    institution: "Intrax English Institute, San Diego – CA",
    period: "Março 2000 – Agosto 2000",
    program: "Intensive Course",
  },
  {
    institution: "UEC, Universal English Course, Salvador – BA",
    period: "Dezembro 1998.",
    program: "Grammar Research and Oral (GROW)",
  },
  {
    institution: "UEC, Universal English Course, Salvador – BA",
    period: "Janeiro 1996 – Fevereiro 1998",
    program: "Basic Course",
  },
];

const experience = [
  {
    institution: "Seven Idiomas",
    period: "Julho 2019 - Jan 2024",
    program:
      "Aulas em escola de ingles para turmas de todas as idades e níveis.",
  },
  {
    institution: "DAILY BASIS ENGLISH COURSE",
    period: "Janeiro 2008 – até o momento",
    program:
      "Aulas em empresas de grande porte, estabelecimentos comerciais e residências, ministradas presencialmente ou por videoconferência.",
  },
  {
    institution:
      "MANHATTAN VILLAGE (Market Leader Business English), São Paulo – SP",
    period: "Novembro, 2006 – Agosto, 2007",
    program:
      "Aulas particulares presenciais em empresas de diversos segmentos.",
  },
  {
    institution: "AIMHIGH Idiomas (Callan Method), São Paulo – SP",
    period: "Abril 2005 – Dezembro 2008",
    program:
      "Aulas particulares presenciais em empresas de diversos segmentos e em domicílios.",
  },
  {
    institution: "Osborn English School, São Paulo – SP",
    period: "Março 2005 – Abril 2005",
    program:
      "Aulas em escola de ingles direcionadas para o publico adolescente.",
  },
  {
    institution: "House Teacher, Salvador – BA",
    period: "Fevereiro 2002 – Setembro 2002",
    program:
      "Aulas em escola de ingles para turmas de todas as idades e níveis.",
  },
];

export default function About() {
  return (
    <>
      <div className="line-break">
        <Section id="paragraph-media" label="Sobre" heading={2}>
          {/* Card Layout */}
          <LineBreak />
          <Card>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/about.png"
                alt="My picture"
                width={150}
                height={150}
                className={styles.aboutImg}
              />
              <Paragraph
                value={[
                  ...content({
                    parts: [
                      "Fundador do Daily Basis English Course, é apaixonado pelos estudos da língua inglesa desde 96. Começou a lecionar aulas de inglês particulares em meados de 2004. Já morou nos EUA - Califórnia. Estuda web development e programação desde 2022 com o objetivo de criar a sua própria plataforma de ensino.",
                    ],
                  }),
                ]}
              />
            </CardLayout>
          </Card>
        </Section>
        <Section id="background" label="Formação e Experiência" heading={2}>
          <h3 className={styles.subtionTitle}>Formação</h3>
          <LineBreak />
          <ul>
            {formation.map((item, index) => (
              <>
                <li key={index}>
                  <strong>{item.institution}</strong>
                  <span className={styles.details}>{item.period}</span>
                  <span className={styles.details}>{item.program}</span>
                </li>
                <LineBreak />
              </>
            ))}
          </ul>
          <h3 className={styles.subtionTitle}>Experiência</h3>
          <LineBreak />
          <ul>
            {experience.map((item, index) => (
              <>
                <li key={index}>
                  <strong>{item.institution}</strong>
                  <span className={styles.details}>{item.period}</span>
                  <span className={styles.details}>{item.program}</span>
                </li>
                <LineBreak />
              </>
            ))}
          </ul>
        </Section>
      </div>
    </>
  );
}
