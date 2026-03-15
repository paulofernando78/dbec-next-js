import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
export default function WhichOne() {
  return <>
      <Whiteboard title="Vocabulary" subtitle="Which one?" />
      <div className="line-break">
        <Contents items={[{
        href: "affect-effect",
        label: "affect vs effect"
      }, {
        href: "bring-take",
        label: "bring / take"
      }, {
        href: "change-swap-shift",
        label: "change / swap / shift / switch"
      }, {
        href: "lend-borrow",
        label: "lend vs borrow"
      }, {
        href: "listen-hear",
        label: "listen / hear"
      }, {
        href: "look-see-watch",
        label: "look / see / watch"
      }, {
        href: "lose-loose",
        label: "lose vs loose"
      }, {
        href: "make-do",
        label: "make / do"
      }, {
        href: "pull-push",
        label: "pull / push"
      }, {
        href: "say-speak-tell",
        label: "say / speak / tell"
      }, {
        href: "stationary-stationery",
        label: "stationary vs stationery"
      }]} />
        <Section id="affect-effect" label="affect vs effect" heading={3}>
          <Paragraph value={[{
          part: "affect:",
          type: "bold"
        }, " ", {
          part: "verb",
          type: "partOfSpeech"
        }, " ", "to influence or change something", {
          lineBreak: true
        }, {
          bullet: true,
          part: "Lack of sleep can affect your performance."
        }, " ", {
          part: "A falta de sono pode afetar seu desempenho.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "This decision will affect the whole team."
        }, " ", {
          part: "Essa decisão vai afetar toda a equipe.",
          type: "portuguese"
        }, {
          part: "effect:",
          type: "bold"
        }, " ", {
          part: "noun",
          type: "partOfSpeech"
        }, " ", "the result of a change or action", {
          lineBreak: true
        }, {
          bullet: true,
          part: "The new policy had a positive effect."
        }, " ", {
          part: "A nova política teve um efeito positivo.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "What is the effect of this medicine?"
        }, " ", {
          part: "Qual é o efeito deste remédio?",
          type: "portuguese"
        }]} />
        </Section>
        <Section id="bring-take" label="bring / take" heading={3}>
          <Paragraph value={[{
          part: "bring:",
          type: "bold"
        }, " move something to where the speaker is", {
          lineBreak: true
        }, {
          bullet: true,
          part: "Please bring your book to class."
        }, " ", {
          part: "Por favor, traga seu livro para a aula.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "She brought a gift for me."
        }, " ", {
          part: "Ela trouxe um presente para mim.",
          type: "portuguese"
        }, {
          part: "take:",
          type: "bold"
        }, " move something away from the speaker", {
          lineBreak: true
        }, {
          bullet: true,
          part: "Please take this form to the office."
        }, " ", {
          part: "Por favor, leve este formulário para o escritório.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "He took his bag and left."
        }, " ", {
          part: "Ele pegou a bolsa dele e saiu.",
          type: "portuguese"
        }]} />
        </Section>
        <Section id="change-swap-shift" label="change / swap / shift / switch" heading={3}>
          <Paragraph value={[{
          part: "change:",
          type: "bold"
        }, " make something different in general", {
          lineBreak: true
        }, {
          bullet: true,
          part: "I want to change my job."
        }, " ", {
          part: "Eu quero mudar de emprego.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "She changed her mind about the trip."
        }, " ", {
          part: "Ela mudou de ideia sobre a viagem.",
          type: "portuguese"
        }, {
          part: "swap:",
          type: "bold"
        }, " exchange one thing for another", {
          lineBreak: true
        }, {
          bullet: true,
          part: "Let’s swap seats."
        }, " ", {
          part: "Vamos trocar de lugar.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "They swapped phone numbers."
        }, " ", {
          part: "Eles trocaram números de telefone.",
          type: "portuguese"
        }, {
          part: "shift:",
          type: "bold"
        }, " move or change position slightly or gradually", {
          lineBreak: true
        }, {
          bullet: true,
          part: "The focus of the meeting shifted to budget issues."
        }, " ", {
          part: "O foco da reunião mudou para questões de orçamento.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "He shifted in his chair to get comfortable."
        }, " ", {
          part: "Ele se mexeu na cadeira para ficar confortável.",
          type: "portuguese"
        }, {
          part: "switch:",
          type: "bold"
        }, " change from one thing to another, often quickly or completely", {
          lineBreak: true
        }, {
          bullet: true,
          part: "I switched my phone to silent mode."
        }, " ", {
          part: "Eu coloquei meu celular no modo silencioso.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "She switched seats with her friend."
        }, " ", {
          part: "Ela trocou de lugar com a amiga.",
          type: "portuguese"
        }]} />
        </Section>
        <Section id="lend-borrow" label="lend vs borrow" heading={3}>
          <Paragraph value={[{
          part: "lend:",
          type: "bold"
        }, " give something temporarily to someone", {
          lineBreak: true
        }, {
          bullet: true,
          part: "Can you lend me your pen?"
        }, " ", {
          part: "Você pode me emprestar sua caneta?",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "She lent her book to a friend."
        }, " ", {
          part: "Ela emprestou o livro para um amigo.",
          type: "portuguese"
        }, {
          part: "borrow:",
          type: "bold"
        }, " receive something temporarily from someone", {
          lineBreak: true
        }, {
          bullet: true,
          part: "Can I borrow your pen?"
        }, " ", {
          part: "Posso pegar sua caneta emprestada?",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "He borrowed some money from his brother."
        }, " ", {
          part: "Ele pegou dinheiro emprestado do irmão.",
          type: "portuguese"
        }]} />
        </Section>
        <Section id="listen-hear" label="listen / hear" heading={3}>
          <Paragraph value={[{
          part: "listen:",
          type: "bold"
        }, " pay attention to a sound (intentional)", {
          lineBreak: true
        }, {
          bullet: true,
          part: "Please listen to the teacher."
        }, " ", {
          part: "Por favor, escute o professor.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "I like to listen to music while studying."
        }, " ", {
          part: "Eu gosto de ouvir música enquanto estudo.",
          type: "portuguese"
        }, {
          part: "hear:",
          type: "bold"
        }, " receive a sound (not intentional)", {
          lineBreak: true
        }, {
          bullet: true,
          part: "I can hear a strange noise."
        }, " ", {
          part: "Eu consigo ouvir um barulho estranho.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "Did you hear what she said?"
        }, " ", {
          part: "Você ouviu o que ela disse?",
          type: "portuguese"
        }]} />
        </Section>
        <Section id="look-see-watch" label="look / see / watch" heading={3}>
          <Paragraph value={[{
          part: "look:",
          type: "bold"
        }, " direct your eyes to something (intentional)", {
          lineBreak: true
        }, {
          bullet: true,
          part: "Look at the board, please."
        }, " ", {
          part: "Olhe para o quadro, por favor.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "She looked out the window."
        }, " ", {
          part: "Ela olhou pela janela.",
          type: "portuguese"
        }, {
          part: "see:",
          type: "bold"
        }, " notice something with your eyes (not intentional)", {
          lineBreak: true
        }, {
          bullet: true,
          part: "I can see a bird in the tree."
        }, " ", {
          part: "Eu consigo ver um pássaro na árvore.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "Did you see my message?"
        }, " ", {
          part: "Você viu minha mensagem?",
          type: "portuguese"
        }, {
          part: "watch:",
          type: "bold"
        }, " look at something for a period of time", {
          lineBreak: true
        }, {
          bullet: true,
          part: "We watched a movie last night."
        }, " ", {
          part: "Nós assistimos a um filme ontem à noite.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "He watches TV after work."
        }, " ", {
          part: "Ele assiste TV depois do trabalho.",
          type: "portuguese"
        }]} />
        </Section>
        <Section id="lose-loose" label="lose vs loose" heading={3}>
          <Paragraph value={[{
          part: "lose:",
          type: "bold"
        }, " verb — to misplace or fail to keep or win", {
          lineBreak: true
        }, {
          bullet: true,
          part: "Don’t lose your keys."
        }, " ", {
          part: "Não perca suas chaves.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "They might lose the game."
        }, " ", {
          part: "Eles podem perder o jogo.",
          type: "portuguese"
        }, {
          part: "loose:",
          type: "bold"
        }, " adjective — not tight or firmly fixed", {
          lineBreak: true
        }, {
          bullet: true,
          part: "This shirt is too loose."
        }, " ", {
          part: "Essa camisa está muito larga.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "The screw is loose."
        }, " ", {
          part: "O parafuso está solto.",
          type: "portuguese"
        }]} />
        </Section>
        <Section id="make-do" label="make / do" heading={3}>
          <Paragraph value={[{
          part: "make:",
          type: "bold"
        }, " create or produce something (result)", {
          lineBreak: true
        }, {
          bullet: true,
          part: "She made a cake for her birthday."
        }, " ", {
          part: "Ela fez um bolo para o aniversário dela.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "Let’s make a decision."
        }, " ", {
          part: "Vamos tomar uma decisão.",
          type: "portuguese"
        }, {
          part: "do:",
          type: "bold"
        }, " perform an activity or task", {
          lineBreak: true
        }, {
          bullet: true,
          part: "I do my homework every evening."
        }, " ", {
          part: "Eu faço minha lição de casa toda noite.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "She is doing the dishes."
        }, " ", {
          part: "Ela está lavando a louça.",
          type: "portuguese"
        }]} />
        </Section>
        <Section id="pull-push" label="pull / push" heading={3}>
          <Paragraph value={[{
          part: "pull:",
          type: "bold"
        }, " move something toward you", {
          lineBreak: true
        }, {
          bullet: true,
          part: "Pull the door to open it."
        }, " ", {
          part: "Puxe a porta para abri-la.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "He pulled the chair closer."
        }, " ", {
          part: "Ele puxou a cadeira para mais perto.",
          type: "portuguese"
        }, {
          part: "push:",
          type: "bold"
        }, " move something away from you", {
          lineBreak: true
        }, {
          bullet: true,
          part: "Push the door to go outside."
        }, " ", {
          part: "Empurre a porta para sair.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "She pushed the box across the floor."
        }, " ", {
          part: "Ela empurrou a caixa pelo chão.",
          type: "portuguese"
        }]} />
        </Section>
        <Section id="say-speak-tell" label="say / speak / tell" heading={3}>
          <Paragraph value={[{
          part: "say:",
          type: "bold"
        }, " the words / message itself (what you say)", {
          lineBreak: true
        }, {
          bullet: true,
          part: "She said she was tired."
        }, " ", {
          part: "Ela disse que estava cansada.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "I want to say something."
        }, " ", {
          part: "Eu quero dizer algo.",
          type: "portuguese"
        }, {
          part: "speak: ",
          type: "bold"
        }, " the action of talking / language ability", {
          lineBreak: true
        }, {
          bullet: true,
          part: "He speaks three languages."
        }, " ", {
          part: "Ele fala três idiomas.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "Can I speak to you for a moment?"
        }, " ", {
          part: "Posso falar com você por um momento?",
          type: "portuguese"
        }, {
          part: "tell:",
          type: "bold"
        }, " the listener / who receives the information", {
          lineBreak: true
        }, {
          bullet: true,
          part: "She told me the truth."
        }, " ", {
          part: "Ela me contou a verdade.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "Tell him I’ll be late."
        }, " ", {
          part: "Diga a ele que vou me atrasar.",
          type: "portuguese"
        }]} />
        </Section>
        <Section id="stationary-stationery" label="stationary vs stationery" heading={3}>
          <Paragraph value={[{
          part: "stationary:",
          type: "bold"
        }, " not moving / fixed in one place", {
          lineBreak: true
        }, {
          bullet: true,
          part: "The car remained stationary at the traffic light."
        }, " ", {
          part: "O carro permaneceu parado no semáforo.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "The bike stayed stationary during the repair."
        }, " ", {
          part: "A bicicleta ficou parada durante o conserto.",
          type: "portuguese"
        }, {
          part: "stationery:",
          type: "bold"
        }, " paper, pens, and office or school supplies", {
          lineBreak: true
        }, {
          bullet: true,
          part: "She bought some stationery for the office."
        }, " ", {
          part: "Ela comprou alguns materiais de papelaria para o escritório.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          bullet: true,
          part: "The store sells school stationery."
        }, " ", {
          part: "A loja vende papelaria escolar.",
          type: "portuguese"
        }]} />
        </Section>
      </div>
    </>;
}