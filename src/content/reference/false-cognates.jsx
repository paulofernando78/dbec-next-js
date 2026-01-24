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
            {
              href: "actually-atualmente",
              label: "actually / atualmente",
            },
            {
              href: "anticipate-antecipar",
              label: "anticipate / antecipar",
            },
            {
              href: "eventually-eventualmente",
              label: "eventually / eventualmente",
            },
            {
              href: "library-livraria",
              label: "library / livraria",
            },
            {
              href: "parents-parentes",
              label: "parents / parentes",
            },
            {
              href: "pretend-pretender",
              label: "pretend / pretender",
            },
            {
              href: "push-puxar",
              label: "push / puxar",
            },
            {
              href: "sensible-sensivel",
              label: "sensible / sensível",
            },
            {
              href: "support-suportar",
              label: "support / suportar",
            },
            {
              href: "agenda-agenda",
              label: "agenda / agenda",
            },
            {
              href: "data-data",
              label: "data / data",
            },
            {
              href: "policy-policia",
              label: "policy / polícia",
            },
            {
              href: "resume-resumo",
              label: "resume / resumo / currículo",
            },
          ]}
        />

        <Section
          id="actually-atualmente"
          label="actually / atualmente"
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

        <Section
          id="anticipate-antecipar"
          label="anticipate / antecipar"
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

        <Section
          id="eventually-eventualmente"
          label="eventually / eventualmente"
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

        <Section id="library-livraria" label="library / livraria" heading={3}>
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

        <Section id="parents-parentes" label="parents / parentes" heading={3}>
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

        <Section id="pretend-pretender" label="pretend / pretender" heading={3}>
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

        <Section id="push-puxar" label="push / puxar" heading={3}>
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

        <Section id="sensible-sensivel" label="sensible / sensível" heading={3}>
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

        <Section id="support-suportar" label="support / suportar" heading={3}>
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
                ],
              },
            ]}
          />
        </Section>

        <Section id="agenda-agenda" label="agenda / agenda" heading={3}>
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

        <Section id="data-data" label="data / data" heading={3}>
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

        <Section id="policy-policia" label="policy / polícia" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { audio: "/assets/audio/general/policy.mp3", part: "policy", type: "bold" },
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
                        part: "polícia", type: "portuguese-bold"
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/police.mp3",
                      },
                      "police ",
                      {
                        part: "/pəˈliːs/",
                        type: "phonetics"
                      }
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

        <Section
          id="resume-resumo"
          label="resume / resumo / currículo"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "resume", type: "bold" },
                      " ",
                      { part: "retomar, continuar", type: "portuguese" },
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
                  { lineBreak: true },
                  {
                    text: [
                      { part: "resumo / currículo", type: "portuguese-bold" },
                      " summary; CV",
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
                ],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}
