import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Comparison } from "@/components/molecules/Comparison/";
import { Example } from "@/components/molecules/Example/";

export default function LettersEEeaI() {
  return (
    <>
      <Whiteboard title="Pronunciation" subtitle="Letters ee / ea vs. i" />
      <div className="line-break">
        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/audio/general/eat.mp3",
                  word: "eat",
                  phonetics: "/iːt/",
                  portuguese: "comer",
                },
                {
                  audio: "/audio/general/it.mp3",
                  word: "it",
                  phonetics: "/ɪt/",
                  portuguese: "isso / ele / ela (neutro)",
                },
              ],
            },
          ]}
        />

        <Example
          examples={[
            {
              audioPlayer: "/audio/general/eat-example.mp3",
              text: ["I ", { type: "mark", text: "eat" }, " breakfast at home."],
              portuguese: "Eu como café da manhã em casa.",
            },
            {
              audioPlayer: "/audio/general/it-example.mp3",
              text: ["", { type: "mark", text: "It" }, " is very cold today."],
              portuguese: "Está muito frio hoje.",
            },
          ]}
        />

        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/audio/general/feel.mp3",
                  word: "feel",
                  phonetics: "/fiːl/",
                  portuguese: "sentir",
                },
                {
                  audio: "/audio/general/fill.mp3",
                  word: "fill",
                  phonetics: "/fɪl/",
                  portuguese: "encher",
                },
              ],
            },
          ]}
        />

        <Example
          examples={[
            {
              audioPlayer: "/audio/general/feel-example.mp3",
              text: ["I ", { type: "mark", text: "feel" }, " tired."],
              portuguese: "Eu me sinto cansado.",
            },
            {
              audioPlayer: "/audio/general/fill-example.mp3",
              text: ["", { type: "mark", text: "Fill" }, " the glass, please."],
              portuguese: "Encha o copo, por favor.",
            },
          ]}
        />

        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/audio/general/heel.mp3",
                  word: "heel",
                  phonetics: "/hiːl/",
                  portuguese: "calcanhar",
                },
                {
                  audio: "/audio/general/hill.mp3",
                  word: "hill",
                  phonetics: "/hɪl/",
                  portuguese: "colina",
                },
              ],
            },
          ]}
        />

        <Example
          examples={[
            {
              audioPlayer: "/audio/general/heel-example.mp3",
              text: ["My ", { type: "mark", text: "heel" }, " hurts."],
              portuguese: "Meu calcanhar dói.",
            },
            {
              audioPlayer: "/audio/general/hill-example.mp3",
              text: ["They climbed the ", { type: "mark", text: "hill" }, "."],
              portuguese: "Eles subiram a colina.",
            },
          ]}
        />

        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/audio/general/leave.mp3",
                  word: "leave",
                  phonetics: "/liːv/",
                  portuguese: "sair; deixar",
                },
                {
                  audio: "/audio/general/live.mp3",
                  word: "live",
                  phonetics: "/lɪv/",
                  portuguese: "morar; viver",
                },
              ],
            },
          ]}
        />

        <Example
          examples={[
            {
              audioPlayer: "/audio/general/leave-example.mp3",
              text: ["I want to ", { type: "mark", text: "leave" }, " now."],
              portuguese: "Eu quero sair agora.",
            },
            {
              audioPlayer: "/audio/general/live-example.mp3",
              text: ["I ", { type: "mark", text: "live" }, " in Brazil."],
              portuguese: "Eu moro no Brasil.",
            },
          ]}
        />

        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/audio/general/meat.mp3",
                  word: "meat",
                  phonetics: "/miːt/",
                  portuguese: "carne",
                },
                {
                  audio: "/audio/general/mint.mp3",
                  word: "mint",
                  phonetics: "/mɪnt/",
                  portuguese: "hortelã",
                },
              ],
            },
          ]}
        />

        <Example
          examples={[
            {
              audioPlayer: "/audio/general/meat-example.mp3",
              text: ["I don't eat ", { type: "mark", text: "meat" }, "."],
              portuguese: "Eu não como carne.",
            },
            {
              audioPlayer: "/audio/general/mint-example.mp3",
              text: ["This tea has ", { type: "mark", text: "mint" }, " in it."],
              portuguese: "Este chá tem hortelã.",
            },
          ]}
        />

        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/audio/general/reach.mp3",
                  word: "reach",
                  phonetics: "/riːtʃ/",
                  portuguese: "alcançar",
                },
                {
                  audio: "/audio/general/rich.mp3",
                  word: "rich",
                  phonetics: "/rɪtʃ/",
                  portuguese: "rico",
                },
              ],
            },
          ]}
        />

        <Example
          examples={[
            {
              audioPlayer: "/audio/general/reach-example.mp3",
              text: ["I can't ", { type: "mark", text: "reach" }, " the shelf."],
              portuguese: "Eu não consigo alcançar a prateleira.",
            },
            {
              audioPlayer: "/audio/general/rich-example.mp3",
              text: ["He is very ", { type: "mark", text: "rich" }, "."],
              portuguese: "Ele é muito rico.",
            },
          ]}
        />

        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/audio/general/seat.mp3",
                  word: "seat",
                  phonetics: "/siːt/",
                  portuguese: "assento",
                },
                {
                  audio: "/audio/general/sit.mp3",
                  word: "sit",
                  phonetics: "/sɪt/",
                  portuguese: "sentar",
                },
              ],
            },
          ]}
        />

        <Example
          examples={[
            {
              audioPlayer: "/audio/general/seat-example.mp3",
              text: ["Take a ", { type: "mark", text: "seat" }, ", please."],
              portuguese: "Sente-se, por favor.",
            },
            {
              audioPlayer: "/audio/general/sit-example.mp3",
              text: ["Please ", { type: "mark", text: "sit" }, " down."],
              portuguese: "Por favor, sente-se.",
            },
          ]}
        />

        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/audio/general/sheep.mp3",
                  word: "sheep",
                  phonetics: "/ʃiːp/",
                  portuguese: "ovelha",
                },
                {
                  audio: "/audio/general/ship.mp3",
                  word: "ship",
                  phonetics: "/ʃɪp/",
                  portuguese: "navio",
                },
              ],
            },
          ]}
        />

        <Example
          examples={[
            {
              audioPlayer: "/audio/general/sheep-example.mp3",
              text: ["I saw a ", { type: "mark", text: "sheep" }, " on the farm."],
              portuguese: "Eu vi uma ovelha na fazenda.",
            },
            {
              audioPlayer: "/audio/general/ship-example.mp3",
              text: ["The ", { type: "mark", text: "ship" }, " arrived late."],
              portuguese: "O navio chegou tarde.",
            },
          ]}
        />

        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/audio/general/sleep.mp3",
                  word: "sleep",
                  phonetics: "/sliːp/",
                  portuguese: "dormir",
                },
                {
                  audio: "/audio/general/slip.mp3",
                  word: "slip",
                  phonetics: "/slɪp/",
                  portuguese: "escorregar",
                },
              ],
            },
          ]}
        />

        <Example
          examples={[
            {
              audioPlayer: "/audio/general/sleep-example.mp3",
              text: ["I need to ", { type: "mark", text: "sleep" }, "."],
              portuguese: "Eu preciso dormir.",
            },
            {
              audioPlayer: "/audio/general/slip-example.mp3",
              text: ["Be careful not to ", { type: "mark", text: "slip" }, "."],
              portuguese: "Cuidado para não escorregar.",
            },
          ]}
        />

        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/audio/general/these.mp3",
                  word: "these",
                  phonetics: "/ðiːz/",
                  portuguese: "estes / estas",
                },
                {
                  audio: "/audio/general/this.mp3",
                  word: "this",
                  phonetics: "/ðɪs/",
                  portuguese: "este / esta",
                },
              ],
            },
          ]}
        />

        <Example
          examples={[
            {
              audioPlayer: "/audio/general/these-example.mp3",
              text: ["", { type: "mark", text: "These" }, " are my keys."],
              portuguese: "Estas são minhas chaves.",
            },
            {
              audioPlayer: "/audio/general/this-example.mp3",
              text: ["", { type: "mark", text: "This" }, " is my house."],
              portuguese: "Esta é minha casa.",
            },
          ]}
        />
      </div>
    </>
  );
}
