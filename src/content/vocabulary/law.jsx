import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Line } from "@/components/molecules/Line";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";

export default function Law() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="Law & Legal English" />
      <div className="line-break">
        <Line text={[{ part: "Common law and legal terms.", type: "bold" }]} />
        <Contents
          items={[
            { href: "#court-and-procedure", label: "Court & Procedure" },
            { href: "#documents-and-orders", label: "Documents & Orders" },
            { href: "#people-in-law", label: "People in Law" },
            { href: "#rights-and-obligations", label: "Rights & Obligations" },
          ]}
        />
        <Section id="court-and-procedure" label="Court & Procedure" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "trial", type: "bold" },
                      " ",
                      { part: "julgamento / julgamento judicial", type: "portuguese" },
                      " ",
                      { bullet: true, part: "The trial will start next Monday." },
                      {
                        part: " O julgamento vai começar na próxima segunda-feira.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "hearing", type: "bold" },
                      " ",
                      { part: "audiência", type: "portuguese" },
                      " ",
                      { bullet: true, part: "The judge scheduled a hearing for Friday." },
                      {
                        part: " O juiz marcou uma audiência para sexta-feira.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "verdict", type: "bold" },
                      " ",
                      { part: "veredicto / decisão", type: "portuguese" },
                      " ",
                      { bullet: true, part: "The jury reached a verdict after three hours." },
                      {
                        part: " O júri chegou a um veredicto depois de três horas.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "appeal", type: "bold" },
                      " ",
                      { part: "recurso / apelação", type: "portuguese" },
                      " ",
                      { bullet: true, part: "The lawyer filed an appeal." },
                      {
                        part: " O advogado entrou com um recurso.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="documents-and-orders" label="Documents & Orders" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "subpoena", type: "bold" },
                      " ",
                      {
                        part: "intimação judicial (ordem para comparecer ou apresentar documentos)",
                        type: "portuguese",
                      },
                      " ",
                      {
                        bullet: true,
                        part: "She received a subpoena to testify in court.",
                      },
                      {
                        part: " Ela recebeu uma intimação para testemunhar no tribunal.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "warrant", type: "bold" },
                      " ",
                      { part: "mandado judicial", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The police have a warrant to search the house.",
                      },
                      {
                        part: " A polícia tem um mandado para revistar a casa.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "contract", type: "bold" },
                      " ",
                      { part: "contrato", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "Both parties signed the contract.",
                      },
                      {
                        part: " Ambas as partes assinaram o contrato.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "court order", type: "bold" },
                      " ",
                      { part: "ordem judicial", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "They must follow the court order.",
                      },
                      {
                        part: " Eles devem cumprir a ordem judicial.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="people-in-law" label="People in Law" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "judge", type: "bold" },
                      " ",
                      { part: "juiz / juíza", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The judge listened to both sides.",
                      },
                      {
                        part: " O juiz ouviu os dois lados.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "lawyer", type: "bold" },
                      " ",
                      { part: "advogado(a)", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "She hired a lawyer to defend her case.",
                      },
                      {
                        part: " Ela contratou um advogado para defender seu caso.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "defendant", type: "bold" },
                      " ",
                      { part: "réu / ré", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The defendant pleaded not guilty.",
                      },
                      {
                        part: " O réu se declarou inocente.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "witness", type: "bold" },
                      " ",
                      { part: "testemunha", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The witness told the truth.",
                      },
                      {
                        part: " A testemunha disse a verdade.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="rights-and-obligations" label="Rights & Obligations" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "rights", type: "bold" },
                      " ",
                      { part: "direitos", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "Everyone has the right to a fair trial.",
                      },
                      {
                        part: "Todos têm direito a um julgamento justo.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "duty", type: "bold" },
                      " ",
                      { part: "dever / obrigação", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "It is your duty to follow the law.",
                      },
                      {
                        part: " É seu dever seguir a lei.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "liability", type: "bold" },
                      " ",
                      { part: "responsabilidade legal", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The company accepted liability for the damages.",
                      },
                      {
                        part: " A empresa assumiu a responsabilidade pelos danos.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "penalty", type: "bold" },
                      " ",
                      { part: "pena / penalidade", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "There is a penalty for breaking this law.",
                      },
                      {
                        part: " Há uma penalidade por infringir essa lei.",
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
