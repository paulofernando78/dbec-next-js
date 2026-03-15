import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Line } from "@/components/molecules/Line";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";

import { content, bold, example, portuguese } from "@/helpers/content";

export default function Dentistry() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="Dentistry" />
      <div className="line-break">
        <Line
          value={[
            ...content({
              parts: [bold("Common dental terms")],
            }),
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
          <Line
          value={[
            ...content({
              parts: [
                bold("appointment"),
                " ",
                portuguese("consulta / agendamento"),
                " ",
                example("I have a dental appointment tomorrow morning."),
                " ",
                portuguese("Eu tenho uma consulta no dentista amanhã de manhã."),
              ],
            }),
          ]}
        />
          <Line
            value={[
              bold("check-up"),
              " ",
              portuguese("exame de rotina"),
              " ",
              example("I go for a dental check-up every year."),
              " ",
              portuguese("Eu faço um exame de rotina no dentista todo ano."),
              { lineBreak: true },

              bold("waiting room"),
              " ",
              portuguese("sala de espera"),
              " ",
              example("Please wait in the waiting room."),
              " ",
              portuguese("Por favor, espere na sala de espera."),
              { lineBreak: true },

              bold("receptionist"),
              " ",
              portuguese("recepcionista"),
              " ",
              example("The receptionist asked for my name."),
              " ",
              portuguese("A recepcionista pediu meu nome."),
              { lineBreak: true },

              bold("patient"),
              " ",
              portuguese("paciente"),
              " ",
              example("The dentist is seeing the next patient."),
              " ",
              portuguese("O dentista está atendendo o próximo paciente."),
              { lineBreak: true },

              bold("insurance"),
              " ",
              portuguese("plano / convênio"),
              " ",
              example("Does your insurance cover this treatment?"),
              " ",
              portuguese("Seu plano cobre esse tratamento?"),
              { lineBreak: true },

              bold("ID / form"),
              " ",
              portuguese("documento / ficha"),
              " ",
              example("Please fill out this form and show your ID."),
              " ",
              portuguese("Por favor, preencha esta ficha e mostre seu documento."),
              { lineBreak: true },

              bold("X-ray"),
              " ",
              portuguese("raio-X"),
              " ",
              example("The dentist took an X-ray of my tooth."),
              " ",
              portuguese("O dentista tirou um raio-X do meu dente."),
            ]}
          />
        </Section>
        <Section id="parts-of-the-mouth" label="Parts of the Mouth" heading={3}>
          <Line value={[bold("tooth / teeth"), " ", portuguese("dente / dentes"), " ", example("She brushes her teeth twice a day."), " ", portuguese("Ela escova os dentes duas vezes por dia.")]} />
          <Line value={[bold("gum / gums"), " ", portuguese("gengiva / gengivas"), " ", example("My gums feel sore today."), " ", portuguese("Minhas gengivas estão doloridas hoje.")]} />
          <Line value={[bold("jaw"), " ", portuguese("maxilar"), " ", example("My jaw feels sore when I open my mouth."), " ", portuguese("Meu maxilar fica dolorido quando abro a boca.")]} />
          <Line value={[bold("tongue"), " ", portuguese("língua"), " ", example("Stick out your tongue, please."), " ", portuguese("Mostre a língua, por favor.")]} />
          <Line value={[bold("palate"), " ", portuguese("céu da boca"), " ", example("The roof of my mouth hurts."), " ", portuguese("O céu da minha boca dói.")]} />
          <Line value={[bold("molar / incisor / canine"), " ", portuguese("molar / incisivo / canino"), " ", example("The dentist checked my molar and my canine."), " ", portuguese("O dentista examinou meu molar e meu canino.")]} />
        </Section>
        <Section id="pain-and-symptons" label="Pain & Symptoms" heading={3}>
          <Line value={[bold("bleeding gums"), " ", portuguese("gengivas sangrando"), " ", example("My gums are bleeding when I brush my teeth."), " ", portuguese("Minhas gengivas estão sangrando quando escovo os dentes.")]} />
          <Line value={[bold("crooked tooth"), " ", portuguese("dente torto"), " ", example("I have a crooked tooth in the front."), " ", portuguese("Eu tenho um dente torto na frente.")]} />
          <Line value={[bold("crookedness"), " ", portuguese("tortuosidade / desalinhamento"), " ", example("The dentist explained the crookedness of my teeth."), " ", portuguese("O dentista explicou o desalinhamento dos meus dentes.")]} />
          <Line value={[bold("toothache"), " ", portuguese("dor de dente"), " ", example("I have a terrible toothache."), " ", portuguese("Eu estou com uma dor de dente terrível.")]} />
          <Line value={[bold("sensitive teeth"), " ", portuguese("dentes sensíveis"), " ", example("I have sensitive teeth when I drink cold water."), " ", portuguese("Eu tenho dentes sensíveis quando bebo água gelada.")]} />
          <Line value={[bold("swelling"), " ", portuguese("inchaço"), " ", example("There is swelling on the side of my face."), " ", portuguese("Há inchaço no lado do meu rosto.")]} />
          <Line value={[bold("painkiller"), " ", portuguese("analgésico"), " ", example("The dentist gave me a painkiller for the pain."), " ", portuguese("O dentista me deu um analgésico para a dor.")]} />
          <Line value={[bold("infection"), " ", portuguese("infecção"), " ", example("The infection needs to be treated quickly."), " ", portuguese("A infecção precisa ser tratada rapidamente.")]} />
          <Line value={[bold("dental cyst"), " ", portuguese("cisto dentário"), " ", example("The dentist found a dental cyst on the X-ray."), " ", portuguese("O dentista encontrou um cisto dentário no raio-X.")]} />
        </Section>
        <Section id="common-procedures" label="Common Procedures" heading={3}>
          <Line value={[bold("braces"), " ", portuguese("aparelho dentário"), " ", example("She got braces last month."), " ", portuguese("Ela colocou aparelho no mês passado.")]} />
          <Line value={[bold("cleaning"), " ", portuguese("limpeza / profilaxia"), " ", example("I go to the dentist for a cleaning every six months."), " ", portuguese("Eu vou ao dentista para uma limpeza a cada seis meses.")]} />
          <Line value={[bold("crown"), " ", portuguese("coroa dentária"), " ", example("The dentist put a crown on my tooth."), " ", portuguese("O dentista colocou uma coroa no meu dente.")]} />
          <Line value={[bold("extraction"), " ", portuguese("extração"), " ", example("I need an extraction because my tooth is broken."), " ", portuguese("Eu preciso de uma extração porque meu dente está quebrado.")]} />
          <Line value={[bold("filling"), " ", portuguese("obturação / restauração"), " ", example("The dentist did a filling on my tooth."), " ", portuguese("O dentista fez uma obturação no meu dente.")]} />
          <Line value={[bold("implant"), " ", portuguese("implante"), " ", example("She is getting a dental implant next week."), " ", portuguese("Ela vai colocar um implante dentário na próxima semana.")]} />
          <Line value={[bold("root canal"), " ", portuguese("canal (tratamento de canal)"), " ", example("I need a root canal because my tooth hurts."), " ", portuguese("Eu preciso fazer um canal porque meu dente dói.")]} />
          <Line value={[bold("sutures"), " ", portuguese("suturas / pontos cirúrgicos"), " ", example("The dentist checked the sutures after the surgery."), " ", portuguese("O dentista verificou as suturas depois da cirurgia.")]} />
          <Line value={[bold("stitches"), " ", portuguese("pontos (costura cirúrgica)"), " ", example("The dentist removed the stitches after a week."), " ", portuguese("O dentista removeu os pontos depois de uma semana.")]} />
          <Line value={[bold("wisdom tooth"), " ", portuguese("dente do siso"), " ", example("My wisdom tooth is coming in and it hurts."), " ", portuguese("Meu dente do siso está nascendo e dói.")]} />
          <Line value={[bold("X-ray (procedure)"), " ", portuguese("raio-X (exame)"), " ", example("The dentist took an X-ray before the extraction."), " ", portuguese("O dentista tirou um raio-X antes da extração.")]} />
        </Section>
        <Section id="care-and-routine" label="Care & Daily Routine" heading={3}>
          <Line value={[bold("mouthwash"), " ", portuguese("enxaguante bucal"), " ", example("Use mouthwash after brushing your teeth."), " ", portuguese("Use enxaguante bucal depois de escovar os dentes.")]} />
          <Line value={[bold("to brush"), " ", portuguese("escovar"), " ", example("I brush my teeth twice a day."), " ", portuguese("Eu escovo os dentes duas vezes por dia.")]} />
          <Line value={[bold("to floss"), " ", portuguese("passar fio dental"), " ", example("You should floss before going to bed."), " ", portuguese("Você deve passar fio dental antes de dormir.")]} />
          <Line value={[bold("to rinse"), " ", portuguese("bochechar / enxaguar"), " ", example("Rinse your mouth with water after eating."), " ", portuguese("Enxágue a boca com água depois de comer.")]} />
          <Line value={[bold("to avoid sugar"), " ", portuguese("evitar açúcar"), " ", example("Try to avoid sugar to protect your teeth."), " ", portuguese("Tente evitar açúcar para proteger seus dentes.")]} />
        </Section>
      </div>
    </>
  );
}
