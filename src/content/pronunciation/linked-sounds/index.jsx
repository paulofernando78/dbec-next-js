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
                  text: "Check out a couple of linked sounds.",
                  type: "bold",
                },
              ],
            },
          ]}
        />
        <Paragraph
          paragraphs={[
            {
              lineBreak: true,
              text: ["Consonant + Vowel"],
            },
            {
              audio: "/assets/audio/general/he-works-in-an-office.mp3",
              text: [
                "He work",
                {
                  text: "s i",
                  type: "underline",
                },
                {
                  text: "n an o",
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
                  text: "ke a",
                  type: "underline",
                },
                " loo",
                {
                  text: "k a",
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
                  text: "n o",
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
                  text: "e i",
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
                  text: "m o",
                  type: "underline",
                },
                "u",
                {
                  text: "t o",
                  type: "underline",
                },
                "f time.",
              ],
              portuguese: "",
            },
            {
              lineBreak: true,
              audio: "/assets/audio/general/pick-it-up.mp3",
              text: [
                "Pic",
                {
                  text: "k i",
                  type: "underline",
                },
                "t up."
              ],
              portuguese: "Pegue.",
            },
            {
              lineBreak: true,
              text: [
                {
                  text: "t + y",
                  type: "bold",
                },
              ],
            },
            {
              audio: "/assets/audio/general/dont-you-like-it.mp3",
              text: [
                "don’",
                {
                  text: "t y",
                  type: "underline",
                },
                "ou like it?"
              ],
              portuguese: "Você gostou?",
            },
            {
              lineBreak: true,
              audio: "/assets/audio/general/didnt-you like it.mp3",
              text: [
                "didn’",
                {
                  text: "t y",
                  type: "underline",
                },
                "ou like it?"
              ],
              portuguese: "Você não gostou?",
            },
            {
              lineBreak: true,
              text: [
                {
                  text: "d + y",
                  type: "bold",
                },
              ],
            },
            {
              lineBreak: true,
              audio: "/assets/audio/general/did-you.mp3",
              text: [
                "di",
                {
                  text: "d y",
                  type: "underline",
                },
                "ou... ?"
              ],
              portuguese: "Pegue.",
            },
          ]}
        />
      </div>
    </>
  );
}
