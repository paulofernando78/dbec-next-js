import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Comparison } from "@/components/molecules/Comparison/";
import { Example } from "@/components/molecules/Example/";

export default function LetterA() {
  return (
    <>
      <Whiteboard title="Pronunciation" subtitle="Letters a / e(a)" />
      <div className="line-break">
        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/audio/general/and.mp3",
                  word: "and",
                  phonetics: "/ænd/",
                  portuguese: "e",
                },
                {
                  audio: "/audio/general/end.mp3",
                  word: "end",
                  phonetics: "/end/",
                  portuguese: "fim",
                },
              ],
            },
          ]}
        />
        <Example
          examples={[
            {
              audioPlayer: "/audio/general/and-example.mp3",
              text: ["Bread ", { type: "bold", text: "and" }, " butter."],
              portuguese: "Pão e manteiga.",
            },
            {
              audioPlayer: "/audio/general/end-example.mp3",
              text: ["This is the ", { type: "bold", text: "end" }, "."],
              portuguese: "Este é o fim.",
            },
          ]}
        />
        <hr />
        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/audio/general/bad.mp3",
                  word: "bad",
                  phonetics: "/bæd/",
                  portuguese: "mal, ruim; péssimo",
                },
                {
                  audio: "/audio/general/bed.mp3",
                  word: "bed",
                  phonetics: "/bed/",
                  portuguese: "cama",
                },
              ],
            },
          ]}
        />
        <Example
          examples={[
            {
              audioPlayer: "/audio/general/i-had-a-bad-day.mp3",
              text: [
                "I had a ",
                {
                  type: "bold",
                  text: "bad",
                },
                " day.",
              ],
              portuguese: "Eu tive um dia ruim.",
            },
            {
              audioPlayer: "/audio/general/she-went-to-bed-early.mp3",
              text: ["She went to ", { type: "bold", text: "bed" }, " early."],
              portuguese: "Ela foi para a cama cedo.",
            },
          ]}
        />
        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/audio/general/bat.mp3",
                  word: "bat",
                  phonetics: "/bæt/",
                  portuguese: "taco; morcego",
                },
                {
                  audio: "/audio/general/bet.mp3",
                  word: "bet",
                  phonetics: "/bet/",
                  portuguese: "apostar; aposta",
                },
              ],
            },
          ]}
        />
        <Example
          examples={[
            {
              audioPlayer: "/audio/general/bat-example.mp3",
              text: ["He hit the ball with a ", { type: "bold", text: "bat" }, "."],
              portuguese: "Ele acertou a bola com um bastão.",
            },
            {
              audioPlayer: "/audio/general/bet-example.mp3",
              text: ["I ", { type: "bold", text: "bet" }, " you are right."],
              portuguese: "Aposto que você está certo.",
            },
          ]}
        />

        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/audio/general/dad.mp3",
                  word: "dad",
                  phonetics: "/dæd/",
                  portuguese: "pai",
                },
                {
                  audio: "/audio/general/dead.mp3",
                  word: "dead",
                  phonetics: "/ded/",
                  portuguese: "morto(a)",
                },
              ],
            },
          ]}
        />
        <Example
          examples={[
            {
              audioPlayer: "/audio/general/dad-example.mp3",
              text: ["My ", { type: "bold", text: "dad" }, " is kind."],
              portuguese: "Meu pai é gentil.",
            },
            {
              audioPlayer: "/audio/general/dead-example.mp3",
              text: ["The plant is ", { type: "bold", text: "dead" }, "."],
              portuguese: "A planta está morta.",
            },
          ]}
        />

        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/audio/general/had.mp3",
                  word: "had",
                  phonetics: "/hæd/",
                  portuguese: "teve; tinha",
                },
                {
                  audio: "/audio/general/head.mp3",
                  word: "head",
                  phonetics: "/hed/",
                  portuguese: "cabeça",
                },
              ],
            },
          ]}
        />
        <Example
          examples={[
            {
              audioPlayer: "/audio/general/had-example.mp3",
              text: ["She ", { type: "bold", text: "had" }, " a good time."],
              portuguese: "Ela teve um bom momento.",
            },
            {
              audioPlayer: "/audio/general/head-example.mp3",
              text: ["He hit his ", { type: "bold", text: "head" }, "."],
              portuguese: "Ele bateu a cabeça.",
            },
          ]}
        />

        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/audio/general/man.mp3",
                  word: "man",
                  phonetics: "/mæn/",
                  portuguese: "homem",
                },
                {
                  audio: "/audio/general/men.mp3",
                  word: "men",
                  phonetics: "/men/",
                  portuguese: "homens",
                },
              ],
            },
          ]}
        />
        <Example
          examples={[
            {
              audioPlayer: "/audio/general/man-example.mp3",
              text: ["The ", { type: "bold", text: "man" }, " is tall."],
              portuguese: "O homem é alto.",
            },
            {
              audioPlayer: "/audio/general/men-example.mp3",
              text: ["The ", { type: "bold", text: "men" }, " are here."],
              portuguese: "Os homens estão aqui.",
            },
          ]}
        />

        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/audio/general/pan.mp3",
                  word: "pan",
                  phonetics: "/pæn/",
                  portuguese: "panela",
                },
                {
                  audio: "/audio/general/pen.mp3",
                  word: "pen",
                  phonetics: "/pen/",
                  portuguese: "caneta",
                },
              ],
            },
          ]}
        />
        <Example
          examples={[
            {
              audioPlayer: "/audio/general/pan-example.mp3",
              text: ["Put the eggs in the ", { type: "bold", text: "pan" }, "."],
              portuguese: "Coloque os ovos na panela.",
            },
            {
              audioPlayer: "/audio/general/pen-example.mp3",
              text: ["I wrote with a ", { type: "bold", text: "pen" }, "."],
              portuguese: "Eu escrevi com uma caneta.",
            },
          ]}
        />
        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/audio/general/tan.mp3",
                  word: "tan",
                  phonetics: "/tan/",
                  portuguese: "bronzeado(a); bronzear",
                },
                {
                  audio: "/audio/general/ten.mp3",
                  word: "ten",
                  phonetics: "/ten/",
                  portuguese: "dez (número)",
                },
              ],
            },
          ]}
        />
        <Example
          examples={[
            {
              audioPlayer: "/audio/general/tan-example.mp3",
              text: ["She got a ", { type: "bold", text: "tan" }, " at the beach."],
              portuguese: "Ela ficou bronzeada na praia.",
            },
            {
              audioPlayer: "/audio/general/ten-example.mp3",
              text: ["I have ", { type: "bold", text: "ten" }, " apples."],
              portuguese: "Eu tenho dez maçãs.",
            },
          ]}
        />
      </div>
    </>
  );
}
