import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Paragraph } from "@/components/molecules/Paragraph";

export default function LikedSounds() {
  return (
    <>
      <Whiteboard title="Pronunciation" subtitle="Linked Sounds" />
      <div className="line-break">
        <Paragraph
          paragraphs={[
            {
              audio: "/assets/audio/pronunciation/linked-sounds/check-out.mp3",
              text: [
                {
                  part: "Check out a couple of linked sounds.",
                  type: "bold",
                },
              ],
            },
          ]}
        />
        <h3>Vowel + Vowel</h3>
        <Paragraph
          paragraphs={[
            {
              audio: "/assets/audio/pronunciation/phonetics/consonants/w.mp3",
              phonetics: "/w/",
            },
            {
              audio: "/assets/audio/general/go-on.mp3",
              text: [
                "g",
                {
                  part: "o o",
                  type: "underline",
                },
                "n. ",
              ],
              phonetics: "/w/",
              portuguese: "Vá em frente.",
            },
            {
              lineBreak: true,
              audio: "/assets/audio/general/do-it-again.mp3",
              text: [
                "D",
                {
                  part: "o i",
                  type: "underline",
                },
                "t again. ",
              ],
              phonetics: "/w/",
              portuguese: "Faça novamente.",
            },
            {
              audio: "/assets/audio/pronunciation/phonetics/consonants/j.mp3",
              phonetics: "/j/",
            },
            {
              audio: "/assets/audio/general/i-agree-with-you-on-this-issue.mp3",
              text: [
                {
                  part: "I a",
                  type: "underline",
                },
                "gree with you on this issue. ",
              ],
              phonetics: "/j/",
              portuguese: "Eu concord",
            },
            {
              audio: "/assets/audio/general/she-asked-me-a-question.mp3",
              text: [
                "Sh",
                {
                  part: "e a",
                  type: "underline",
                },
                "sked me a question. ",
              ],
              phonetics: "/j/",
              portuguese: "Ela me fez uma pergunta.",
            },
          ]}
        />
        <h3>Consonant + Vowel</h3>
        <Paragraph
          paragraphs={[
            {
              audio: "/assets/audio/general/he-works-in-an-office.mp3",
              text: [
                "He work",
                {
                  part: "s i",
                  type: "underline",
                },
                {
                  part: "n an o",
                  type: "underline",
                },
                "ffice.",
              ],
              portuguese: "Ele trabalha no escritório.",
            },
            {
              audio: "/assets/audio/general/take-a-look-at-it.mp3",
              text: [
                "Ta",
                {
                  part: "ke a",
                  type: "underline",
                },
                " loo",
                {
                  part: "k a",
                  type: "underline",
                },
                "t it.",
              ],
              portuguese: "Dá uma olha.",
            },
            {
              audio: "/assets/audio/general/turn-off-the-lights.mp3",
              text: [
                "tur",
                {
                  part: "n o",
                  type: "underline",
                },
                "ff the lights.",
              ],
              portuguese: "Apague as luzes.",
            },
            {
              audio: "/assets/audio/general/i-like-it-a-lot.mp3",
              text: [
                "I lik",
                {
                  part: "e i",
                  type: "underline",
                },
                "t a lot.",
              ],
              portuguese: "Gosto bastante.",
            },
            {
              audio: "/assets/audio/general/im-out-of-time.mp3",
              text: [
                "I’",
                {
                  part: "m o",
                  type: "underline",
                },
                "u",
                {
                  part: "t o",
                  type: "underline",
                },
                "f time.",
              ],
              portuguese: "",
            },
            {
              audio: "/assets/audio/general/pick-it-up.mp3",
              text: [
                "Pic",
                {
                  part: "k i",
                  type: "underline",
                },
                "t up.",
              ],
              portuguese: "Pegue.",
            },
          ]}
        />

        <h3>d + y</h3>
        {/* d + y */}
        <Paragraph
          paragraphs={[
            {
              audio: "/assets/audio/general/did-you-like-it.mp3",
              text: [
                "Di",
                {
                  part: "d y",
                  type: "underline",
                },
                "ou like it?",
              ],
              portuguese: "Você gostou?",
            },
            {
              audio: "/assets/audio/general/did-you.mp3",
              text: [
                "Woul",
                {
                  part: "d y",
                  type: "underline",
                },
                "ou like it?",
              ],
              portuguese: "Você gostaria?",
            },
          ]}
        />

        <h3>t + y</h3>
        {/* t + y */}
        <Paragraph
          paragraphs={[
            {
              audio: "/assets/audio/general/dont-you-like-it.mp3",
              text: [
                "Don’",
                {
                  part: "t y",
                  type: "underline",
                },
                "ou like it?",
              ],
              portuguese: "Você não gosta?",
            },
            {
              audio: "/assets/audio/general/didnt-you like it.mp3",
              text: [
                "Didn’",
                {
                  part: "t y",
                  type: "underline",
                },
                "ou like it?",
              ],
              portuguese: "Você não gostou?",
            },
          ]}
        />
      </div>
    </>
  );
}
