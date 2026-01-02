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
                  audio: "/assets/audio/general/eat.mp3",
                  word: "eat",
                  phonetics: "/iːt/",
                  portuguese: "comer",
                },
                {
                  audio: "/assets/audio/general/it.mp3",
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
              audioPlayer: "/assets/audio/general/i-dont-usually-eat-breakfast.mp3",
              text: ["I dont’t usually ", { type: "mark", text: "eat" }, " breakfast."],
              portuguese: "Normalmente eu não tomo café da manhã.",
            },
            {
              audioPlayer: "/assets/audio/general/it-is-very-cold-today.mp3",
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
                  audio: "/assets/audio/general/feel.mp3",
                  word: "feel",
                  phonetics: "/fiːl/",
                  portuguese: "sentir",
                },
                {
                  audio: "/assets/audio/general/fill.mp3",
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
              audioPlayer: "/assets/audio/general/i-feel-tired.mp3",
              text: ["I ", { type: "mark", text: "feel" }, " tired."],
              portuguese: "Eu me sinto cansado.",
            },
            {
              audioPlayer: "/assets/audio/general/fill-the-glass-please.mp3",
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
                  audio: "/assets/audio/general/heel.mp3",
                  word: "heel",
                  phonetics: "/hiːl/",
                  portuguese: "calcanhar",
                },
                {
                  audio: "/assets/audio/general/hill.mp3",
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
              audioPlayer: "/assets/audio/general/my-heel-hurts.mp3",
              text: ["My ", { type: "mark", text: "heel" }, " hurts."],
              portuguese: "Meu calcanhar dói.",
            },
            {
              audioPlayer: "/assets/audio/general/lets-go-up-the-hill.mp3",
              text: ["Let’s go up the ", { type: "mark", text: "hill" }, "."],
              portuguese: "Vamos subir a colina.",
            },
          ]}
        />

        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/assets/audio/general/leave.mp3",
                  word: "leave",
                  phonetics: "/liːv/",
                  portuguese: "sair; deixar",
                },
                {
                  audio: "/assets/audio/general/live1.mp3",
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
              audioPlayer: "/assets/audio/general/i-want-to-leave-now.mp3",
              text: ["I want to ", { type: "mark", text: "leave" }, " now."],
              portuguese: "Eu quero sair agora.",
            },
            {
              audioPlayer: "/assets/audio/general/i-live-in-brazil.mp3",
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
                  audio: "/assets/audio/general/meat.mp3",
                  word: "meat",
                  phonetics: "/miːt/",
                  portuguese: "carne",
                },
                {
                  audio: "/assets/audio/general/mint.mp3",
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
              audioPlayer: "/assets/audio/general/i-dont-eat-meat.mp3",
              text: ["I don't eat ", { type: "mark", text: "meat" }, "."],
              portuguese: "Eu não como carne.",
            },
            {
              audioPlayer: "/assets/audio/general/this-tea-has-mint-in-it.mp3",
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
                  audio: "/assets/audio/general/reach.mp3",
                  word: "reach",
                  phonetics: "/riːtʃ/",
                  portuguese: "alcançar",
                },
                {
                  audio: "/assets/audio/general/rich.mp3",
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
              audioPlayer: "/assets/audio/general/i-cant-reach-the-shelf.mp3",
              text: ["I can't ", { type: "mark", text: "reach" }, " the shelf."],
              portuguese: "Eu não consigo alcançar a prateleira.",
            },
            {
              audioPlayer: "/assets/audio/general/he-is-very-rich.mp3",
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
                  audio: "/assets/audio/general/seat.mp3",
                  word: "seat",
                  phonetics: "/siːt/",
                  portuguese: "assento",
                },
                {
                  audio: "/assets/audio/general/sit.mp3",
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
              audioPlayer: "/assets/audio/general/please-take-a-seat.mp3",
              text: ["Take a ", { type: "mark", text: "seat" }, ", please."],
              portuguese: "Sente-se, por favor.",
            },
            {
              audioPlayer: "/assets/audio/general/please-sit-down.mp3",
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
                  audio: "/assets/audio/general/sheep.mp3",
                  word: "sheep",
                  phonetics: "/ʃiːp/",
                  portuguese: "ovelha",
                },
                {
                  audio: "/assets/audio/general/ship.mp3",
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
              audioPlayer: "/assets/audio/general/i-saw-a-sheep-on-the-farm.mp3",
              text: ["I saw a ", { type: "mark", text: "sheep" }, " on the farm."],
              portuguese: "Eu vi uma ovelha na fazenda.",
            },
            {
              audioPlayer: "/assets/audio/general/this-ship-is-huge.mp3",
              text: ["This ", { type: "mark", text: "ship" }, " arrived late."],
              portuguese: "Este navio é enorme.",
            },
          ]}
        />

        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/assets/audio/general/sleep.mp3",
                  word: "sleep",
                  phonetics: "/sliːp/",
                  portuguese: "dormir",
                },
                {
                  audio: "/assets/audio/general/slip.mp3",
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
              audioPlayer: "/assets/audio/general/i-need-to-sleep.mp3",
              text: ["I need to ", { type: "mark", text: "sleep" }, "."],
              portuguese: "Eu preciso dormir.",
            },
            {
              audioPlayer: "/assets/audio/general/be-careful-not-to-slip.mp3",
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
                  audio: "/assets/audio/general/these.mp3",
                  word: "these",
                  phonetics: "/ðiːz/",
                  portuguese: "estes / estas",
                },
                {
                  audio: "/assets/audio/general/this.mp3",
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
              audioPlayer: "/assets/audio/general/these-are-my-keys.mp3",
              text: ["", { type: "mark", text: "These" }, " are my keys."],
              portuguese: "Estas são minhas chaves.",
            },
            {
              audioPlayer: "/assets/audio/general/this-is-my-house.mp3",
              text: ["", { type: "mark", text: "This" }, " is my house."],
              portuguese: "Esta é minha casa.",
            },
          ]}
        />
      </div>
    </>
  );
}
