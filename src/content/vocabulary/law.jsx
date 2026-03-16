import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Line } from "@/components/molecules/Line";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";

import { content, bold, example, portuguese } from "@/helpers/content";

export default function Law() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="Law & Legal English" />
      <div className="line-break">
        <Line
          value={[
            ...content({
              parts: [bold("Common law and legal terms.")],
            }),
          ]}
        />
        <Contents
          items={[
            {
              href: "court-and-procedure",
              label: "Court & Procedure",
            },
            {
              href: "documents-and-orders",
              label: "Documents & Orders",
            },
            {
              href: "people-in-law",
              label: "People in Law",
            },
            {
              href: "rights-and-obligations",
              label: "Rights & Obligations",
            },
          ]}
        />
        <Section id="court-and-procedure" label="Court & Procedure" heading={3}>
          <Line
            value={[
              bold("trial"),
              " ",
              portuguese("julgamento / julgamento judicial"),
              " ",
              example("The trial will start next Monday."),
              " ",
              portuguese("O julgamento vai começar na próxima segunda-feira."),
            ]}
          />
          <Line
            value={[
              bold("hearing"),
              " ",
              portuguese("audiência"),
              " ",
              example("The judge scheduled a hearing for Friday."),
              " ",
              portuguese("O juiz marcou uma audiência para sexta-feira."),
            ]}
          />
          <Line
            value={[
              bold("verdict"),
              " ",
              portuguese("veredicto / decisão"),
              " ",
              example("The jury reached a verdict after three hours."),
              " ",
              portuguese("O júri chegou a um veredicto depois de três horas."),
            ]}
          />
          <Line
            value={[
              bold("appeal"),
              " ",
              portuguese("recurso / apelação"),
              " ",
              example("The lawyer filed an appeal."),
              " ",
              portuguese("O advogado entrou com um recurso."),
            ]}
          />
        </Section>
        <Section
          id="documents-and-orders"
          label="Documents & Orders"
          heading={3}
        >
          <Line
            value={[
              bold("subpoena"),
              " ",
              portuguese(
                "intimação judicial (ordem para comparecer ou apresentar documentos)",
              ),
              " ",
              example("She received a subpoena to testify in court."),
              " ",
              portuguese(
                "Ela recebeu uma intimação para testemunhar no tribunal.",
              ),
            ]}
          />
          <Line
            value={[
              bold("warrant"),
              " ",
              portuguese("mandado judicial"),
              " ",
              example("The police have a warrant to search the house."),
              " ",
              portuguese("A polícia tem um mandado para revistar a casa."),
            ]}
          />
          <Line
            value={[
              bold("contract"),
              " ",
              portuguese("contrato"),
              " ",
              example("Both parties signed the contract."),
              " ",
              portuguese("Ambas as partes assinaram o contrato."),
            ]}
          />
          <Line
            value={[
              bold("court order"),
              " ",
              portuguese("ordem judicial"),
              " ",
              example("They must follow the court order."),
              " ",
              portuguese("Eles devem cumprir a ordem judicial."),
            ]}
          />
        </Section>
        <Section id="people-in-law" label="People in Law" heading={3}>
          <Line
            value={[
              bold("judge"),
              " ",
              portuguese("juiz / juíza"),
              " ",
              example("The judge listened to both sides."),
              " ",
              portuguese("O juiz ouviu os dois lados."),
            ]}
          />
          <Line
            value={[
              bold("lawyer"),
              " ",
              portuguese("advogado(a)"),
              " ",
              example("She hired a lawyer to defend her case."),
              " ",
              portuguese("Ela contratou um advogado para defender seu caso."),
            ]}
          />
          <Line
            value={[
              bold("defendant"),
              " ",
              portuguese("réu / ré"),
              " ",
              example("The defendant pleaded not guilty."),
              " ",
              portuguese("O réu se declarou inocente."),
            ]}
          />
          <Line
            value={[
              bold("witness"),
              " ",
              portuguese("testemunha"),
              " ",
              example("The witness told the truth."),
              " ",
              portuguese("A testemunha disse a verdade."),
            ]}
          />
        </Section>
        <Section
          id="rights-and-obligations"
          label="Rights & Obligations"
          heading={3}
        >
          <Line
            value={[
              bold("rights"),
              " ",
              portuguese("direitos"),
              " ",
              example("Everyone has the right to a fair trial."),
              " ",
              portuguese("Todos têm direito a um julgamento justo."),
            ]}
          />
          <Line
            value={[
              bold("duty"),
              " ",
              portuguese("dever / obrigação"),
              " ",
              example("It is your duty to follow the law."),
              " ",
              portuguese("É seu dever seguir a lei."),
            ]}
          />
          <Line
            value={[
              bold("liability"),
              " ",
              portuguese("responsabilidade legal"),
              " ",
              example("The company accepted liability for the damages."),
              " ",
              portuguese("A empresa assumiu a responsabilidade pelos danos."),
            ]}
          />
          <Line
            value={[
              bold("penalty"),
              " ",
              portuguese("pena / penalidade"),
              " ",
              example("There is a penalty for breaking this law."),
              " ",
              portuguese("Há uma penalidade por infringir essa lei."),
            ]}
          />
        </Section>
      </div>
    </>
  );
}
