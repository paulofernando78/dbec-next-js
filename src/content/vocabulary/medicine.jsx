import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Line } from "@/components/molecules/Line";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";

import { content, bold, example, portuguese } from "@/helpers/content";

export default function Medicine() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="Medicine & Healthcare" />
      <div className="line-break">
        <Line
          value={[
            ...content({
              parts: [bold("Common medical and healthcare vocabulary.")],
            }),
          ]}
        />
        <Contents
          items={[
            {
              href: "medical-professionals",
              label: "Medical Professionals",
            },
            {
              href: "procedures-and-treatment",
              label: "Procedures & Treatment",
            },
            {
              href: "conditions-and-diseases",
              label: "Conditions & Diseases",
            },
            {
              href: "body-and-biology",
              label: "Body & Biology",
            },
          ]}
        />
        <Section
          id="medical-professionals"
          label="Medical Professionals"
          heading={3}
        >
          <Line
            value={[
              bold("anesthesiologist"),
              " ",
              portuguese("anestesiologista"),
              " ",
              example("The anesthesiologist prepared the patient for surgery."),
              " ",
              portuguese(
                "O anestesiologista preparou o paciente para a cirurgia.",
              ),
            ]}
          />
          <Line
            value={[
              bold("obstetrician"),
              " ",
              portuguese("obstetra"),
              " ",
              example("The obstetrician is monitoring the pregnancy."),
              " ",
              portuguese("O obstetra está acompanhando a gravidez."),
            ]}
          />
          <Line
            value={[
              bold("pediatrician"),
              " ",
              portuguese("pediatra"),
              " ",
              example("The pediatrician checked the baby’s temperature."),
              " ",
              portuguese("O pediatra verificou a temperatura do bebê."),
            ]}
          />
        </Section>
        <Section
          id="procedures-and-treatment"
          label="Procedures & Treatment"
          heading={3}
        >
          <Line
            value={[
              bold("anaesthesia"),
              " ",
              portuguese("anestesia"),
              " ",
              example("The patient was under anaesthesia during the operation."),
              " ",
              portuguese("O paciente estava sob anestesia durante a operação."),
            ]}
          />
          <Line
            value={[
              bold("anaesthetize"),
              " ",
              portuguese("anestesiar"),
              " ",
              example("They will anaesthetize the area before the procedure."),
              " ",
              portuguese(
                "Eles vão anestesiar a área antes do procedimento.",
              ),
            ]}
          />
          <Line
            value={[
              bold("cesarean / caesarean"),
              " ",
              portuguese("cesariana / parto cesáreo"),
              " ",
              example("She had a cesarean to deliver the baby safely."),
              " ",
              portuguese(
                "Ela fez uma cesariana para dar à luz o bebê com segurança.",
              ),
            ]}
          />
          <Line
            value={[
              bold("discharge"),
              " ",
              portuguese("dar alta / receber alta"),
              " ",
              example("The doctor will discharge the patient tomorrow."),
              " ",
              portuguese("O médico vai dar alta ao paciente amanhã."),
            ]}
          />
          <Line
            value={[
              bold("stitch"),
              " ",
              portuguese("ponto (cirúrgico)"),
              " ",
              example("The nurse cleaned the stitch carefully."),
              " ",
              portuguese("A enfermeira limpou o ponto com cuidado."),
            ]}
          />
          <Line
            value={[
              bold("suture"),
              " ",
              portuguese("sutura"),
              " ",
              example("The surgeon placed the sutures after the operation."),
              " ",
              portuguese("O cirurgião colocou as suturas após a operação."),
            ]}
          />
        </Section>
        <Section
          id="conditions-and-diseases"
          label="Conditions & Diseases"
          heading={3}
        >
          <Line
            value={[
              bold("appendicitis"),
              " ",
              portuguese("apendicite"),
              " ",
              example("He was rushed to the hospital with appendicitis."),
              " ",
              portuguese("Ele foi levado ao hospital com apendicite."),
            ]}
          />
          <Line
            value={[
              bold("herniated disc"),
              " ",
              portuguese("hérnia de disco"),
              " ",
              example("She is recovering from a herniated disc."),
              " ",
              portuguese("Ela está se recuperando de uma hérnia de disco."),
            ]}
          />
          <Line
            value={[
              bold("meningitis"),
              " ",
              portuguese("meningite"),
              " ",
              example("Meningitis can be a serious condition."),
              " ",
              portuguese("A meningite pode ser uma condição grave."),
            ]}
          />
        </Section>
        <Section id="body-and-biology" label="Body & Biology" heading={3}>
          <Line
            value={[
              bold("appendix"),
              " ",
              portuguese("apêndice"),
              " ",
              example("The appendix can become inflamed."),
              " ",
              portuguese("O apêndice pode inflamar."),
            ]}
          />
          <Line
            value={[
              bold("stem cell"),
              " ",
              portuguese("célula-tronco"),
              " ",
              example("Stem cell research is advancing quickly."),
              " ",
              portuguese(
                "A pesquisa com células-tronco está avançando rapidamente.",
              ),
            ]}
          />
          <Line
            value={[
              bold("umbilical cord"),
              " ",
              portuguese("cordão umbilical"),
              " ",
              example("The baby’s umbilical cord was cut after birth."),
              " ",
              portuguese(
                "O cordão umbilical do bebê foi cortado após o nascimento.",
              ),
            ]}
          />
        </Section>
      </div>
    </>
  );
}
