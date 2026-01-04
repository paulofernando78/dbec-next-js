import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Card } from "@/components/atoms/Card";
import { Comparison } from "@/components/molecules/Comparison/";
import { Example } from "@/components/molecules/Example/";

export default function LetterAeEA() {
  return (
    <>
      <Whiteboard title="Pronunciation" subtitle="Letters a / e(a)" />
      <div className="line-break">
        <Card className="line-break">
          <Comparison
            groups={[
              {
                group: [
                  {
                    audio: "/assets/audio/general/and.mp3",
                    word: "and",
                    phonetics: "/ænd/",
                    portuguese: "e",
                  },
                  {
                    audio: "/assets/audio/general/end.mp3",
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
                audioPlayer: "/assets/audio/general/bread-and-butter.mp3",
                text: ["Bread ", { type: "mark", part: "and" }, " butter."],
                portuguese: "Pão e manteiga.",
              },
              {
                audioPlayer: "/assets/audio/general/this-is-the-end.mp3",
                text: ["This is the ", { type: "mark", part: "end" }, "."],
                portuguese: "Este é o fim.",
              },
            ]}
          />
        </Card>

        <Card className="line-break">
          <Comparison
            groups={[
              {
                group: [
                  {
                    audio: "/assets/audio/general/bad.mp3",
                    word: "bad",
                    phonetics: "/bæd/",
                    portuguese: "mal, ruim; péssimo",
                  },
                  {
                    audio: "/assets/audio/general/bed.mp3",
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
                audioPlayer: "/assets/audio/general/i-had-a-bad-day.mp3",
                text: [
                  "I had a ",
                  {
                    type: "mark",
                    part: "bad",
                  },
                  " day.",
                ],
                portuguese: "Eu tive um dia ruim.",
              },
              {
                audioPlayer: "/assets/audio/general/she-went-to-bed-early.mp3",
                text: [
                  "She went to ",
                  { type: "mark", part: "bed" },
                  " early.",
                ],
                portuguese: "Ela foi para a cama cedo.",
              },
            ]}
          />
        </Card>

        <Card className="line-break">
          <Comparison
            groups={[
              {
                group: [
                  {
                    audio: "/assets/audio/general/bat.mp3",
                    word: "bat",
                    phonetics: "/bæt/",
                    portuguese: "taco; morcego",
                  },
                  {
                    audio: "/assets/audio/general/bet.mp3",
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
                audioPlayer:
                  "/assets/audio/general/he-hit-the-ball-with-a-bat.mp3",
                text: [
                  "He hit the ball with a ",
                  { type: "mark", part: "bat" },
                  ".",
                ],
                portuguese: "Ele acertou a bola com um bastão.",
              },
              {
                audioPlayer: "/assets/audio/general/i-bet-you-were-right.mp3",
                text: ["I ", { type: "mark", part: "bet" }, " you are right."],
                portuguese: "Aposto que você está certo.",
              },
            ]}
          />
        </Card>

        <Card className="line-break">
          <Comparison
            groups={[
              {
                group: [
                  {
                    audio: "/assets/audio/general/dad.mp3",
                    word: "dad",
                    phonetics: "/dæd/",
                    portuguese: "pai",
                  },
                  {
                    audio: "/assets/audio/general/dead.mp3",
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
                audioPlayer: "/assets/audio/general/my-dad-is-cool.mp3",
                text: ["My ", { type: "mark", part: "dad" }, " is cool."],
                portuguese: "Meu pai é gentil.",
              },
              {
                audioPlayer: "/assets/audio/general/the-plant-is-dead.mp3",
                text: ["The plant is ", { type: "mark", part: "dead" }, "."],
                portuguese: "A planta está morta.",
              },
            ]}
          />
        </Card>

        <Card className="line-break">
          <Comparison
            groups={[
              {
                group: [
                  {
                    audio: "/assets/audio/general/had.mp3",
                    word: "had",
                    phonetics: "/hæd/",
                    portuguese: "teve; tinha",
                  },
                  {
                    audio: "/assets/audio/general/head.mp3",
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
                audioPlayer: "/assets/audio/general/john-had-a-good-time.mp3",
                text: ["John ", { type: "mark", part: "had" }, " a good time."],
                portuguese: "John se divertiu.",
              },
              {
                audioPlayer: "/assets/audio/general/he-hit-his-head.mp3",
                text: ["He hit his ", { type: "mark", part: "head" }, "."],
                portuguese: "Ele bateu a cabeça.",
              },
            ]}
          />
        </Card>

        <Card className="line-break">
          <Comparison
            groups={[
              {
                group: [
                  {
                    audio: "/assets/audio/general/man.mp3",
                    word: "man",
                    phonetics: "/mæn/",
                    portuguese: "homem",
                  },
                  {
                    audio: "/assets/audio/general/men.mp3",
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
                audioPlayer: "/assets/audio/general/that-man-is-tall.mp3",
                text: ["That ", { type: "mark", part: "man" }, " is tall."],
                portuguese: "O homem é alto.",
              },
              {
                audioPlayer: "/assets/audio/general/the-men-are-here.mp3",
                text: ["The ", { type: "mark", part: "men" }, " are here."],
                portuguese: "Os homens estão aqui.",
              },
            ]}
          />
        </Card>

        <Card className="line-break">
          <Comparison
            groups={[
              {
                group: [
                  {
                    audio: "/assets/audio/general/pan.mp3",
                    word: "pan",
                    phonetics: "/pæn/",
                    portuguese: "panela",
                  },
                  {
                    audio: "/assets/audio/general/pen.mp3",
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
                audioPlayer:
                  "/assets/audio/general/put-the-eggs-in-the-pan.mp3",
                text: [
                  "Put the eggs in the ",
                  { type: "mark", part: "pan" },
                  ".",
                ],
                portuguese: "Coloque os ovos na panela.",
              },
              {
                audioPlayer: "/assets/audio/general/i-wrote-with-a-pen.mp3",
                text: ["I wrote with a ", { type: "mark", part: "pen" }, "."],
                portuguese: "Eu escrevi com uma caneta.",
              },
            ]}
          />
        </Card>

        <Card className="line-break">
          <Comparison
            groups={[
              {
                group: [
                  {
                    audio: "/assets/audio/general/tan.mp3",
                    word: "tan",
                    phonetics: "/tan/",
                    portuguese: "bronzeado(a); bronzear",
                  },
                  {
                    audio: "/assets/audio/general/ten.mp3",
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
                audioPlayer:
                  "/assets/audio/general/she-got-a-tan-at-the-beach.mp3",
                text: [
                  "She got a ",
                  { type: "mark", part: "tan" },
                  " at the beach.",
                ],
                portuguese: "Ela ficou bronzeada na praia.",
              },
              {
                audioPlayer:
                  "/assets/audio/general/i-got-ten-out-of-ten-on-the-test.mp3",
                text: [
                  "I got ",
                  { type: "mark", part: "ten" },
                  " out of ",
                  { type: "mark", part: "ten" },
                  " on the test.",
                ],
                portuguese: "Eu tirei nota máxima na prova.",
              },
            ]}
          />
        </Card>
      </div>
    </>
  );
}
