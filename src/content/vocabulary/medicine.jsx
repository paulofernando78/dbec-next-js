import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Line } from "@/components/molecules/Line";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";

export default function Medicine() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="Medicine & Healthcare" />
      <div className="line-break">
        <Line text={[{ part: "Common medical and healthcare vocabulary.", type: "bold" }]} />
        <Contents
          items={[
            { href: "#medical-professionals", label: "Medical Professionals" },
            { href: "#procedures-and-treatment", label: "Procedures & Treatment" },
            { href: "#conditions-and-diseases", label: "Conditions & Diseases" },
            { href: "#body-and-biology", label: "Body & Biology" },
          ]}
        />
        <Section id="medical-professionals" label="Medical Professionals" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "anesthesiologist", type: "bold" },
                      " ",
                      { part: "anestesiologista", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The anesthesiologist prepared the patient for surgery.",
                      },
                      {
                        part: " O anestesiologista preparou o paciente para a cirurgia.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "obstetrician", type: "bold" },
                      " ",
                      { part: "obstetra", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The obstetrician is monitoring the pregnancy.",
                      },
                      {
                        part: " O obstetra está acompanhando a gravidez.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "pediatrician", type: "bold" },
                      " ",
                      { part: "pediatra", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The pediatrician checked the baby’s temperature.",
                      },
                      {
                        part: " O pediatra verificou a temperatura do bebê.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="procedures-and-treatment" label="Procedures & Treatment" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "anaesthesia", type: "bold" },
                      " ",
                      { part: "anestesia", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The patient was under anaesthesia during the operation.",
                      },
                      {
                        part: " O paciente estava sob anestesia durante a operação.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "anaesthetize", type: "bold" },
                      " ",
                      { part: "anestesiar", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "They will anaesthetize the area before the procedure.",
                      },
                      {
                        part: " Eles vão anestesiar a área antes do procedimento.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "cesarean / caesarean", type: "bold" },
                      " ",
                      { part: "cesariana / parto cesáreo", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "She had a cesarean to deliver the baby safely.",
                      },
                      {
                        part: " Ela fez uma cesariana para dar à luz o bebê com segurança.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "discharge", type: "bold" },
                      " ",
                      { part: "dar alta / receber alta", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The doctor will discharge the patient tomorrow.",
                      },
                      {
                        part: " O médico vai dar alta ao paciente amanhã.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "stitch", type: "bold" },
                      " ",
                      { part: "ponto (cirúrgico)", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The nurse cleaned the stitch carefully.",
                      },
                      {
                        part: " A enfermeira limpou o ponto com cuidado.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "suture", type: "bold" },
                      " ",
                      { part: "sutura", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The surgeon placed the sutures after the operation.",
                      },
                      {
                        part: " O cirurgião colocou as suturas após a operação.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="conditions-and-diseases" label="Conditions & Diseases" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "appendicitis", type: "bold" },
                      " ",
                      { part: "apendicite", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "He was rushed to the hospital with appendicitis.",
                      },
                      {
                        part: " Ele foi levado ao hospital com apendicite.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "herniated disc", type: "bold" },
                      " ",
                      { part: "hérnia de disco", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "She is recovering from a herniated disc.",
                      },
                      {
                        part: " Ela está se recuperando de uma hérnia de disco.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "meningitis", type: "bold" },
                      " ",
                      { part: "meningite", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "Meningitis can be a serious condition.",
                      },
                      {
                        part: " A meningite pode ser uma condição grave.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="body-and-biology" label="Body & Biology" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "appendix", type: "bold" },
                      " ",
                      { part: "apêndice", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The appendix can become inflamed.",
                      },
                      {
                        part: " O apêndice pode inflamar.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "stem cell", type: "bold" },
                      " ",
                      { part: "célula-tronco", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "Stem cell research is advancing quickly.",
                      },
                      {
                        part: " A pesquisa com células-tronco está avançando rapidamente.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "umbilical cord", type: "bold" },
                      " ",
                      { part: "cordão umbilical", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The baby’s umbilical cord was cut after birth.",
                      },
                      {
                        part: " O cordão umbilical do bebê foi cortado após o nascimento.",
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
