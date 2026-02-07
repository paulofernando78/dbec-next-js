import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Line } from "@/components/molecules/Line";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";

export default function Dentistry() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="Dentistry" />
      <div className="line-break">
        <Line
          text={[
            {
              audio: "",
              part: "Common dental terms.",
              type: "bold",
            },
          ]}
        />
        <Contents
          items={[
            {
              href: "reception-and-front-desk",
              label: "Reception & Front Desk",
            },
            {
              href: "pain-and-symptons",
              label: "Pain & Symptomsk",
            },
            {
              href: "common-procedures",
              label: "Common Procedures",
            },
            {
              href: "parts-of-the-mouth",
              label: "Parts of the Mouth",
            },
            {
              href: "care-and-routine",
              label: "Care & Routines",
            },
          ]}
        />
        <Section
          id="reception-and-front-desk"
          label="Reception & Front Desk"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "appointment", type: "bold" },
                      " ",
                      { part: "consulta / agendamento", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "I have a dental appointment tomorrow morning.",
                      },
                      {
                        part: " Eu tenho uma consulta no dentista amanhã de manhã.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "check-up", type: "bold" },
                      " ",
                      { part: "exame de rotina", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "I go for a dental check-up every year.",
                      },
                      {
                        part: " Eu faço um exame de rotina no dentista todo ano.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "waiting room", type: "bold" },
                      " ",
                      { part: "sala de espera", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "Please wait in the waiting room.",
                      },
                      {
                        part: " Por favor, espere na sala de espera.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "receptionist", type: "bold" },
                      " ",
                      { part: "recepcionista", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The receptionist asked for my name.",
                      },
                      {
                        part: " A recepcionista pediu meu nome.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "patient", type: "bold" },
                      " ",
                      { part: "paciente", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The dentist is seeing the next patient.",
                      },
                      {
                        part: " O dentista está atendendo o próximo paciente.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "insurance", type: "bold" },
                      " ",
                      { part: "plano / convênio", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "Does your insurance cover this treatment?",
                      },
                      {
                        part: " Seu plano cobre esse tratamento?",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "ID / form", type: "bold" },
                      " ",
                      { part: "documento / ficha", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "Please fill out this form and show your ID.",
                      },
                      {
                        part: " Por favor, preencha esta ficha e mostre seu documento.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "X-ray", type: "bold" },
                      " ",
                      { part: "raio-X", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The dentist took an X-ray of my tooth.",
                      },
                      {
                        part: " O dentista tirou um raio-X do meu dente.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="parts-of-the-mouth" label="Parts of the Mouth" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "tooth / teeth", type: "bold" },
                      " ",
                      { part: "dente / dentes", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "She brushes her teeth twice a day.",
                      },
                      {
                        part: " Ela escova os dentes duas vezes por dia.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "gum / gums", type: "bold" },
                      " ",
                      { part: "gengiva / gengivas", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "My gums feel sore today.",
                      },
                      {
                        part: " Minhas gengivas estão doloridas hoje.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "jaw", type: "bold" },
                      " ",
                      { part: "maxilar", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "My jaw feels sore when I open my mouth.",
                      },
                      {
                        part: " Meu maxilar fica dolorido quando abro a boca.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "tongue", type: "bold" },
                      " ",
                      { part: "língua", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "Stick out your tongue, please.",
                      },
                      {
                        part: " Mostre a língua, por favor.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "palate", type: "bold" },
                      " ",
                      { part: "céu da boca", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The roof of my mouth hurts.",
                      },
                      {
                        part: " O céu da minha boca dói.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "molar / incisor / canine", type: "bold" },
                      " ",
                      { part: "molar / incisivo / canino", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The dentist checked my molar and my canine.",
                      },
                      {
                        part: " O dentista examinou meu molar e meu canino.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="pain-and-symptons" label="Pain & Symptoms" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "bleeding gums", type: "bold" },
                      " ",
                      { part: "gengivas sangrando", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "My gums are bleeding when I brush my teeth.",
                      },
                      {
                        part: " Minhas gengivas estão sangrando quando escovo os dentes.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "crooked tooth", type: "bold" },
                      " ",
                      { part: "dente torto", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "I have a crooked tooth in the front.",
                      },
                      {
                        part: " Eu tenho um dente torto na frente.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "crookedness", type: "bold" },
                      " ",
                      {
                        part: "tortuosidade / desalinhamento",
                        type: "portuguese",
                      },
                      " ",
                      {
                        bullet: true,
                        part: "The dentist explained the crookedness of my teeth.",
                      },
                      {
                        part: " O dentista explicou o desalinhamento dos meus dentes.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "toothache", type: "bold" },
                      " ",
                      { part: "dor de dente", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "I have a terrible toothache.",
                      },
                      {
                        part: " Eu estou com uma dor de dente terrível.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "sensitive teeth", type: "bold" },
                      " ",
                      { part: "dentes sensíveis", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "I have sensitive teeth when I drink cold water.",
                      },
                      {
                        part: " Eu tenho dentes sensíveis quando bebo água gelada.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "swelling", type: "bold" },
                      " ",
                      { part: "inchaço", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "There is swelling on the side of my face.",
                      },
                      {
                        part: " Há inchaço no lado do meu rosto.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "painkiller", type: "bold" },
                      " ",
                      { part: "analgésico", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The dentist gave me a painkiller for the pain.",
                      },
                      {
                        part: " O dentista me deu um analgésico para a dor.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "infection", type: "bold" },
                      " ",
                      { part: "infecção", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The infection needs to be treated quickly.",
                      },
                      {
                        part: " A infecção precisa ser tratada rapidamente.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "dental cyst", type: "bold" },
                      " ",
                      { part: "cisto dentário", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The dentist found a dental cyst on the X-ray.",
                      },
                      {
                        part: " O dentista encontrou um cisto dentário no raio-X.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="common-procedures" label="Common Procedures" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "braces", type: "bold" },
                      " ",
                      { part: "aparelho dentário", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "She got braces last month.",
                      },
                      {
                        part: " Ela colocou aparelho no mês passado.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "cleaning", type: "bold" },
                      " ",
                      { part: "limpeza / profilaxia", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "I go to the dentist for a cleaning every six months.",
                      },
                      {
                        part: " Eu vou ao dentista para uma limpeza a cada seis meses.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "crown", type: "bold" },
                      " ",
                      { part: "coroa dentária", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The dentist put a crown on my tooth.",
                      },
                      {
                        part: " O dentista colocou uma coroa no meu dente.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "extraction", type: "bold" },
                      " ",
                      { part: "extração", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "I need an extraction because my tooth is broken.",
                      },
                      {
                        part: " Eu preciso de uma extração porque meu dente está quebrado.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "filling", type: "bold" },
                      " ",
                      { part: "obturação / restauração", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The dentist did a filling on my tooth.",
                      },
                      {
                        part: " O dentista fez uma obturação no meu dente.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "implant", type: "bold" },
                      " ",
                      { part: "implante", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "She is getting a dental implant next week.",
                      },
                      {
                        part: " Ela vai colocar um implante dentário na próxima semana.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "root canal", type: "bold" },
                      " ",
                      {
                        part: "canal (tratamento de canal)",
                        type: "portuguese",
                      },
                      " ",
                      {
                        bullet: true,
                        part: "I need a root canal because my tooth hurts.",
                      },
                      {
                        part: " Eu preciso fazer um canal porque meu dente dói.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "sutures", type: "bold" },
                      " ",
                      {
                        part: "suturas / pontos cirúrgicos",
                        type: "portuguese",
                      },
                      " ",
                      {
                        bullet: true,
                        part: "The dentist checked the sutures after the surgery.",
                      },
                      {
                        part: " O dentista verificou as suturas depois da cirurgia.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "stitches", type: "bold" },
                      " ",
                      {
                        part: "pontos (costura cirúrgica)",
                        type: "portuguese",
                      },
                      " ",
                      {
                        bullet: true,
                        part: "The dentist removed the stitches after a week.",
                      },
                      {
                        part: " O dentista removeu os pontos depois de uma semana.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "wisdom tooth", type: "bold" },
                      " ",
                      { part: "dente do siso", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "My wisdom tooth is coming in and it hurts.",
                      },
                      {
                        part: " Meu dente do siso está nascendo e dói.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "X-ray (procedure)", type: "bold" },
                      " ",
                      { part: "raio-X (exame)", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "The dentist took an X-ray before the extraction.",
                      },
                      {
                        part: " O dentista tirou um raio-X antes da extração.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="care-and-routine" label="Care & Daily Routine" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "mouthwash", type: "bold" },
                      " ",
                      { part: "enxaguante bucal", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "Use mouthwash after brushing your teeth.",
                      },
                      {
                        part: " Use enxaguante bucal depois de escovar os dentes.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "to brush", type: "bold" },
                      " ",
                      { part: "escovar", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "I brush my teeth twice a day.",
                      },
                      {
                        part: " Eu escovo os dentes duas vezes por dia.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "to floss", type: "bold" },
                      " ",
                      { part: "passar fio dental", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "You should floss before going to bed.",
                      },
                      {
                        part: " Você deve passar fio dental antes de dormir.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "to rinse", type: "bold" },
                      " ",
                      { part: "bochechar / enxaguar", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "Rinse your mouth with water after eating.",
                      },
                      {
                        part: " Enxágue a boca com água depois de comer.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "to avoid sugar", type: "bold" },
                      " ",
                      { part: "evitar açúcar", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "Try to avoid sugar to protect your teeth.",
                      },
                      {
                        part: " Tente evitar açúcar para proteger seus dentes.",
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
