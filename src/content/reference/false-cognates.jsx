import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";

export default function FalseCognates() {
  return (
    <>
      <Whiteboard title="Reference" subtitle="False-Cognates" />
      <div className="line-break">
        <Contents
          items={[
            { href: "actually-atualmente", label: "actually  ≠ atualmente" },
            { href: "agenda-agenda", label: "agenda  ≠ agenda" },
            { href: "anticipate-antecipar", label: "anticipate  ≠ antecipar" },
            { href: "assist-assistir", label: "assist  ≠ assistir" },
            { href: "attach-atacar", label: "attach  ≠ atacar" },
            { href: "college-colegio", label: "college  ≠ colégio" },
            { href: "data-data", label: "data  ≠ data" },
            { href: "event-eventual", label: "event  ≠ eventual" },
            {
              href: "eventually-eventualmente",
              label: "eventually  ≠ eventualmente",
            },
            { href: "fabric-fabrica", label: "fabric  ≠ fábrica" },
            { href: "introduce-introduzir", label: "introduce  ≠ introduzir" },
            { href: "lecture-leitura", label: "lecture  ≠ leitura" },
            { href: "library-livraria", label: "library  ≠ livraria" },
            { href: "outdoor-placa", label: "outdoor  ≠ placa" },
            { href: "parents-parentes", label: "parents  ≠ parentes" },
            { href: "pasta-pasta", label: "pasta  ≠ pasta" },
            { href: "policy-policia", label: "policy  ≠ polícia" },
            { href: "pretend-pretender", label: "pretend  ≠ pretender" },
            { href: "preservative-preservativo", label: "preservative  ≠ preservativo" },
            { href: "push-puxar", label: "push  ≠ puxar" },
            { href: "resume-resumo", label: "resume  ≠ resumo  ≠ currículo" },
            { href: "sensible-sensivel", label: "sensible  ≠ sensível" },
            { href: "support-suportar", label: "support  ≠ suportar" },
            { href: "underline-underscore", label: "underline  ≠ underscore" },
          ]}
        />

        <Section
          id="actually-atualmente"
          label="actually ≠ atualmente"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  // actually
                  {
                    text: [
                      { part: "actually", type: "bold" },
                      " ",
                      {
                        part: "na verdade, de fato, realmente",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " I actually like working from home.",
                      {
                        part: " Na verdade, eu gosto de trabalhar de casa.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // atualmente
                  {
                    text: [
                      { part: "atualmente", type: "portuguese-bold" },
                      " currently; nowadays",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " I am ",
                      { part: "currently", type: "mark" },
                      " studying English online.",
                      {
                        part: " Atualmente, estou estudando inglês online.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="agenda-agenda" label="agenda ≠ agenda" heading={3}>
        <Section id="assist-assistir" label="assist ≠ assistir" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // assist
                  {
                    text: [
                      { part: "assist", type: "bold" },
                      " ",
                      { part: "ajudar, auxiliar", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " She assisted her colleague with the report.",
                      {
                        part: " Ela ajudou a colega com o relatório.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },
                  // assistir
                  {
                    text: [
                      { part: "assistir", type: "portuguese-bold" },
                      " watch",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " I ",
                      { part: "watched", type: "mark" },
                      " the movie last night.",
                      {
                        part: " Eu assisti ao filme ontem à noite.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="attach-atacar" label="attach ≠ atacar" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // attach
                  {
                    text: [
                      { part: "attach", type: "bold" },
                      " ",
                      { part: "anexar, prender", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " Please attach the file to the email.",
                      {
                        part: " Por favor, anexe o arquivo ao e-mail.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },
                  // atacar
                  {
                    text: [
                      { part: "atacar", type: "portuguese-bold" },
                      " attack",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " The dog tried to ",
                      { part: "attack", type: "mark" },
                      " the stranger.",
                      {
                        part: " O cachorro tentou atacar o estranho.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="event-eventual" label="event ≠ eventual" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // event
                  {
                    text: [
                      { part: "event", type: "bold" },
                      " ",
                      { part: "evento", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " The company organized a large event for its clients.",
                      {
                        part: " A empresa organizou um grande evento para seus clientes.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },
                  // eventual
                  {
                    text: [
                      { part: "eventual", type: "portuguese-bold" },
                      " eventual; possible",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " We discussed a ",
                      { part: "possible", type: "mark" },
                      " solution to the problem.",
                      {
                        part: " Discutimos uma solução eventual / possível para o problema.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="fabric-fabrica" label="fabric ≠ fábrica" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // fabric
                  {
                    text: [
                      { part: "fabric", type: "bold" },
                      " ",
                      { part: "tecido, pano", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " This jacket is made of a soft fabric.",
                      {
                        part: " Esta jaqueta é feita de um tecido macio.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },
                  // fábrica
                  {
                    text: [
                      { part: "fábrica", type: "portuguese-bold" },
                      " factory",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " The company opened a new ",
                      { part: "factory", type: "mark" },
                      " last year.",
                      {
                        part: " A empresa abriu uma nova fábrica no ano passado.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="lecture-leitura" label="lecture ≠ leitura" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // lecture
                  {
                    text: [
                      { part: "lecture", type: "bold" },
                      " ",
                      { part: "palestra; aula expositiva", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " The professor gave a lecture on climate change.",
                      {
                        part: " O professor deu uma palestra sobre mudanças climáticas.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },
                  // leitura
                  {
                    text: [
                      { part: "leitura", type: "portuguese-bold" },
                      " reading",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " I did some ",
                      { part: "reading", type: "mark" },
                      " before the exam.",
                      {
                        part: " Eu fiz uma leitura antes da prova.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="pasta-pasta" label="pasta ≠ pasta" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // pasta (food)
                  {
                    text: [
                      { part: "pasta", type: "bold" },
                      " ",
                      { part: "massa (comida)", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " I ordered pasta for dinner.",
                      {
                        part: " Eu pedi massa no jantar.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },
                  // pasta (folder)
                  {
                    text: [
                      { part: "pasta", type: "portuguese-bold" },
                      " folder",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " Save the file in the ",
                      { part: "folder", type: "mark" },
                      " on your desktop.",
                      {
                        part: " Salve o arquivo na pasta da sua área de trabalho.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "agenda", type: "bold" },
                      " ",
                      {
                        part: "lista de tópicos / pauta de reunião",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " The main topic is first on today's meeting agenda.",
                      {
                        part: " O tópico principal é o primeiro na pauta da reunião de hoje.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },
                  {
                    text: [
                      { part: "agenda", type: "portuguese-bold" },
                      " schedule; planner",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " I wrote the appointment in my ",
                      { part: "planner", type: "mark" },
                      ".",
                      {
                        part: " Eu anotei o compromisso na minha agenda.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section
          id="anticipate-antecipar"
          label="anticipate ≠ antecipar"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  // anticipate
                  {
                    text: [
                      { part: "anticipate", type: "bold" },
                      " ",
                      {
                        part: "prever, esperar, ficar na expectativa",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        bullet: true,
                      },
                      " We anticipate that sales will increase next quarter.",
                      {
                        part: " Nós esperamos que as vendas aumentem no próximo trimestre.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // antecipar
                  {
                    text: [
                      { part: "antecipar", type: "portuguese-bold" },
                      " move up; advance",
                    ],
                  },
                  {
                    text: [
                      {
                        bullet: true,
                      },
                      " They decided to ",
                      {
                        part: "move up",
                        type: "mark",
                      },
                      "  the product launch.",
                      {
                        part: " Eles decidiram antecipar o lançamento do produto.",
                        type: "portuguese",
                      },
                      " Let's  ",
                      {
                        part: "advance ",
                        type: "mark",
                      },
                      " the payment to avoid issues.",
                      {
                        part: " Vamos adiantar o pagamento para evitar problemas.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="college-colegio" label="college ≠ colégio" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // college
                  {
                    text: [
                      { part: "college", type: "bold" },
                      " ",
                      {
                        part: "faculdade; ensino superior",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " She is studying engineering in college.",
                      {
                        part: " Ela está estudando engenharia na faculdade.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // colégio
                  {
                    text: [
                      { part: "colégio", type: "portuguese-bold" },
                      " high school",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " He studies in ",
                      { part: "high school", type: "mark" },
                      ".",
                      {
                        part: " Ele estuda no ensino médio.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="data-data" label="data ≠ data" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "data", type: "bold" },
                      " ",
                      { part: "dados, informações", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " The company collects customer data to improve its services.",
                      {
                        part: " A empresa coleta dados dos clientes para melhorar seus serviços.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },
                  {
                    text: [{ part: "data", type: "portuguese-bold" }, " date"],
                  },
                  {
                    text: [
                      { bullet: true },
                      " What is the ",
                      { part: "date", type: "mark" },
                      " of the meeting?",
                      {
                        part: " Qual é a data da reunião?",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section
          id="eventually-eventualmente"
          label="eventually ≠ eventualmente"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  // eventually
                  {
                    text: [
                      { part: "eventually", type: "bold" },
                      " ",
                      {
                        part: "no final, com o tempo, mais cedo ou mais tarde",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " He eventually found a better job after months of searching.",
                      {
                        part: " Ele acabou encontrando um emprego melhor depois de meses procurando.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // eventualmente
                  {
                    text: [
                      { part: "eventualmente", type: "portuguese-bold" },
                      " occasionally; sometimes",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " I ",
                      { part: "sometimes", type: "mark" },
                      " work from home on Fridays.",
                      {
                        part: " Eu eventualmente (às vezes) trabalho de casa às sextas-feiras.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="library-livraria" label="library ≠ livraria" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // library
                  {
                    text: [
                      { part: "library", type: "bold" },
                      " ",
                      {
                        part: "biblioteca",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " She studies at the library every afternoon.",
                      {
                        part: " Ela estuda na biblioteca todas as tardes.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // livraria
                  {
                    text: [
                      { part: "livraria", type: "portuguese-bold" },
                      " bookstore; bookshop",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " I bought this book at the ",
                      { part: "bookstore", type: "mark" },
                      ".",
                      {
                        part: " Eu comprei este livro na livraria.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section
          id="introduce-introduzir"
          label="introduce ≠ introduzir"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  // introduce
                  {
                    text: [
                      { part: "introduce", type: "bold" },
                      " ",
                      {
                        part: "apresentar (pessoas, ideias, tópicos)",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " Let me introduce you to my manager.",
                      {
                        part: " Deixe-me apresentar você ao meu gerente.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // introduzir
                  {
                    text: [
                      { part: "introduzir", type: "portuguese-bold" },
                      " insert; implement; bring in",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " The company decided to ",
                      { part: "implement", type: "mark" },
                      " a new policy this year.",
                      {
                        part: " A empresa decidiu introduzir uma nova política este ano.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " Please ",
                      { part: "insert", type: "mark" },
                      " your card into the machine.",
                      {
                        part: " Por favor, insira seu cartão na máquina.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " The company plans to ",
                      { part: "bring in", type: "mark" },
                      " new technology next year.",
                      {
                        part: " A empresa pretende introduzir nova tecnologia no próximo ano.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="outdoor-placa" label="outdoor ≠ placa" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // outdoor
                  {
                    text: [
                      { part: "outdoor", type: "bold" },
                      " ",
                      {
                        part: "ao ar livre; externo",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " We prefer outdoor activities on the weekend.",
                      {
                        part: " Nós preferimos atividades ao ar livre no fim de semana.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // placa
                  {
                    text: [
                      { part: "placa", type: "portuguese-bold" },
                      " sign; billboard",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " There is a big ",
                      { part: "billboard", type: "mark" },
                      " near the highway.",
                      {
                        part: " Há uma placa grande perto da rodovia.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="parents-parentes" label="parents ≠ parentes" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // parents
                  {
                    text: [
                      { part: "parents", type: "bold" },
                      " ",
                      {
                        part: "pais",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " My parents live in another city.",
                      {
                        part: " Meus pais moram em outra cidade.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // parentes
                  {
                    text: [
                      { part: "parentes", type: "portuguese-bold" },
                      " relatives",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " All my ",
                      { part: "relatives", type: "mark" },
                      " came to the wedding.",
                      {
                        part: " Todos os meus parentes vieram ao casamento.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="policy-policia" label="policy ≠ polícia" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/policy.mp3",
                        part: "policy",
                        type: "bold",
                      },
                      " ",
                      { part: "/ˈpɑː.lə.si/", type: "phonetics" },
                      " ",
                      { part: "política, diretriz, regra", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " The company changed its remote work policy.",
                      {
                        part: " A empresa mudou sua política de trabalho remoto.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },
                  {
                    text: [
                      {
                        part: "polícia",
                        type: "portuguese-bold",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/police.mp3",
                      },
                      "police ",
                      {
                        part: "/pəˈliːs/",
                        type: "phonetics",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " Call the ",
                      { part: "police", type: "mark" },
                      " if there is an emergency.",
                      {
                        part: " Ligue para a polícia se houver uma emergência.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="pretend-pretender" label="pretend ≠ pretender" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // pretend
                  {
                    text: [
                      { part: "pretend", type: "bold" },
                      " ",
                      {
                        part: "fingir, fazer de conta",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " He pretended to be asleep during the meeting.",
                      {
                        part: " Ele fingiu estar dormindo durante a reunião.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // pretender
                  {
                    text: [
                      { part: "pretender", type: "portuguese-bold" },
                      " intend; plan",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " I ",
                      {
                        part: "intend",
                        type: "mark",
                      },
                      " to start my own business next year.",
                      {
                        part: " Eu pretendo começar meu próprio negócio no próximo ano.",
                        type: "portuguese",
                      },
                      " They ",
                      {
                        part: "plan",
                        type: "mark",
                      },
                      " to move to another city.",
                      {
                        part: " Eles pretendem se mudar para outra cidade.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section
          id="preservative-preservativo"
          label="preservative ≠ preservativo"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  // preservative
                  {
                    text: [
                      { part: "preservative", type: "bold" },
                      " ",
                      {
                        part: "conservante (substância usada para preservar alimentos ou produtos)",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " This food contains artificial preservatives.",
                      {
                        part: " Este alimento contém conservantes artificiais.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // preservativo
                  {
                    text: [
                      { part: "preservativo", type: "portuguese-bold" },
                      " condom",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " Always use a ",
                      { part: "condom", type: "mark" },
                      " to protect yourself.",
                      {
                        part: " Sempre use camisinha para se proteger.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="push-puxar" label="push ≠ puxar" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // push
                  {
                    text: [
                      { part: "push", type: "bold" },
                      " ",
                      {
                        part: "empurrar",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " Please push the door to open it.",
                      {
                        part: " Por favor, empurre a porta para abri-la.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // puxar
                  {
                    text: [{ part: "puxar", type: "portuguese-bold" }, " pull"],
                  },
                  {
                    text: [
                      { bullet: true },
                      " You need to ",
                      { part: "pull", type: "mark" },
                      " the handle to close the door.",
                      {
                        part: " Você precisa puxar a maçaneta para fechar a porta.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section
          id="resume-resumo"
          label="resume ≠ resumo / currículo"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  // resume (verb)
                  {
                    text: [
                      { part: "resume", type: "bold" },
                      " ",
                      {
                        part: "retomar, continuar (verbo)",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " Let's resume the meeting after the break.",
                      {
                        part: " Vamos retomar a reunião depois do intervalo.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // resumo / currículo
                  {
                    text: [
                      { part: "resumo / currículo", type: "portuguese-bold" },
                      " summary; CV / résumé (document)",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " Please send me your ",
                      { part: "CV", type: "mark" },
                      " before the interview.",
                      {
                        part: " Por favor, envie seu currículo antes da entrevista.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " Can you write a short ",
                      { part: "summary", type: "mark" },
                      " of this article?",
                      {
                        part: " Você pode escrever um resumo curto deste artigo?",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="sensible-sensivel" label="sensible ≠ sensível" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // sensible
                  {
                    text: [
                      { part: "sensible", type: "bold" },
                      " ",
                      {
                        part: "sensato, razoável",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " It is sensible to save money for emergencies.",
                      {
                        part: " É sensato economizar dinheiro para emergências.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // sensível
                  {
                    text: [
                      { part: "sensível", type: "portuguese-bold" },
                      " sensitive",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " He is very ",
                      { part: "sensitive", type: "mark" },
                      " to criticism.",
                      {
                        part: " Ele é muito sensível a críticas.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="support-suportar" label="support ≠ suportar" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // support
                  {
                    text: [
                      { part: "support", type: "bold" },
                      " ",
                      {
                        part: "apoiar, dar suporte, ajudar",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " The team supported the new project from the start.",
                      {
                        part: " A equipe apoiou o novo projeto desde o início.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // suportar
                  {
                    text: [
                      { part: "suportar", type: "portuguese-bold" },
                      " tolerate; endure; put up with",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " I can't ",
                      { part: "put up with", type: "mark" },
                      " the noise anymore.",
                      {
                        part: " Eu não suporto mais esse barulho.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " I can ",
                      { part: "tolerate", type: "mark" },
                      " the heat, but not the noise.",
                      {
                        part: " Eu posso tolerar o calor, mas não o barulho.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " She had to ",
                      { part: "endure", type: "mark" },
                      " a long and difficult journey.",
                      {
                        part: " Ela teve que suportar uma viagem longa e difícil.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section
          id="underline-underscore"
          label="underline ≠ underscore"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  // underline
                  {
                    text: [
                      { part: "underline", type: "bold" },
                      " ",
                      {
                        part: "sublinhar (fazer uma linha embaixo do texto)",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " Please underline the key words in the text.",
                      {
                        part: " Por favor, sublinhe as palavras-chave no texto.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // underscore
                  {
                    text: [
                      { part: "underscore", type: "bold" },
                      " ",
                      {
                        part: "o caractere _ (usado em programação, e-mails e nomes de arquivos)",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      " Use an ",
                      { part: "underscore", type: "mark" },
                      " between the words in the file name.",
                      {
                        part: " Use um underscore (_) entre as palavras no nome do arquivo.",
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
