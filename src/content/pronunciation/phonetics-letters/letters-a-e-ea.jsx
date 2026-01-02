import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Comparison } from "@/components/molecules/Comparison/";
import { Example } from "@/components/molecules/Example/";

export default function LetterAeEA() {
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
              audioPlayer: "/audio/general/bread-and-butter.mp3",
              text: ["Bread ", { type: "mark", text: "and" }, " butter."],
              portuguese: "Pão e manteiga.",
            },
            {
              audioPlayer: "/audio/general/this-is-the-end.mp3",
              text: ["This is the ", { type: "mark", text: "end" }, "."],
              portuguese: "Este é o fim.",
            },
          ]}
        />
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
                  type: "mark",
                  text: "bad",
                },
                " day.",
              ],
              portuguese: "Eu tive um dia ruim.",
            },
            {
              audioPlayer: "/audio/general/she-went-to-bed-early.mp3",
              text: ["She went to ", { type: "mark", text: "bed" }, " early."],
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
              audioPlayer: "/audio/general/he-hit-the-ball-with-a-bat.mp3",
              text: [
                "He hit the ball with a ",
                { type: "mark", text: "bat" },
                ".",
              ],
              portuguese: "Ele acertou a bola com um bastão.",
            },
            {
              audioPlayer: "/audio/general/i-bet-you-were-right.mp3",
              text: ["I ", { type: "mark", text: "bet" }, " you are right."],
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
              audioPlayer: "/audio/general/my-dad-is-cool.mp3",
              text: ["My ", { type: "mark", text: "dad" }, " is cool."],
              portuguese: "Meu pai é gentil.",
            },
            {
              audioPlayer: "/audio/general/the-plant-is-dead.mp3",
              text: ["The plant is ", { type: "mark", text: "dead" }, "."],
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
              audioPlayer: "/audio/general/john-had-a-good-time.mp3",
              text: ["John ", { type: "mark", text: "had" }, " a good time."],
              portuguese: "John se divertiu.",
            },
            {
              audioPlayer: "/audio/general/he-hit-his-head.mp3",
              text: ["He hit his ", { type: "mark", text: "head" }, "."],
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
              audioPlayer: "/audio/general/that-man-is-tall.mp3",
              text: ["That ", { type: "mark", text: "man" }, " is tall."],
              portuguese: "O homem é alto.",
            },
            {
              audioPlayer: "/audio/general/the-men-are-here.mp3",
              text: ["The ", { type: "mark", text: "men" }, " are here."],
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
              audioPlayer: "/audio/general/put-the-eggs-in-the-pan.mp3",
              text: [
                "Put the eggs in the ",
                { type: "mark", text: "pan" },
                ".",
              ],
              portuguese: "Coloque os ovos na panela.",
            },
            {
              audioPlayer: "/audio/general/i-wrote-with-a-pen.mp3",
              text: ["I wrote with a ", { type: "mark", text: "pen" }, "."],
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
              audioPlayer: "/audio/general/she-got-a-tan-at-the-beach.mp3",
              text: [
                "She got a ",
                { type: "mark", text: "tan" },
                " at the beach.",
              ],
              portuguese: "Ela ficou bronzeada na praia.",
            },
            {
              audioPlayer:
                "/audio/general/i-got-ten-out-of-ten-on-the-test.mp3",
              text: [
                "I got ",
                { type: "mark",
                  text: "ten"
                },
                " out of ",
                { type: "mark",
                  text: "ten"
                },
                " on the test."
              ],
              portuguese: "Eu tirei nota máxima na prova.",
            },
          ]}
        />
      </div>
    </>
  );
}
