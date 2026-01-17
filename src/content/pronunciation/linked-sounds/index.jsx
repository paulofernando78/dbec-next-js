import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";

export default function LikedSounds() {
  return (
    <>
      <Whiteboard title="Pronunciation" subtitle="Linked Sounds" />
      <div className="line-break">
        <Paragraph
          blocks={[
            {
              audioPlayer:
                "/assets/audio/pronunciation/linked-sounds/check-out.mp3",
              lines: [
                {
                  text: [
                    {
                      part: "Check out a couple of linked sounds.",
                      type: "bold",
                    },
                  ],
                },
              ],
            },
          ]}
        />

        <Section label="Vowel + Vowel" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics/consonants/w.mp3",
                      },
                      {
                        part: "/w/ ",
                        type: "phonetics",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/go-on.mp3",
                      },
                      "g",
                      {
                        part: "o o",
                        type: "underline",
                      },
                      "n. ",
                      {
                        part: "Vá em frente.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/do-it-again.mp3",
                      },
                      "D",
                      {
                        part: "o i",
                        type: "underline",
                      },
                      "t again. ",
                      {
                        part: "Faça novamente.",
                        type: "portuguese",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics/consonants/j.mp3",
                      },
                      {
                        part: "/j/",
                        type: "phonetics",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/i-agree-with-you-on-this-issue.mp3",
                      },
                      {
                        part: "I a",
                        type: "underline",
                      },
                      "gree with you on this issue. ",
                      {
                        part: "Eu concordo com você nesse ponto.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/she-asked-me-a-question.mp3",
                      },
                      "Sh",
                      {
                        part: "e a",
                        type: "underline",
                      },
                      "sked me a question. ",
                      {
                        part: "Ela me fez uma pergunta.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="Consonant + Vowel" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/he-works-in-an-office.mp3",
                      },
                      "He work",
                      {
                        part: "s i",
                        type: "underline",
                      },
                      {
                        part: "n an o",
                        type: "underline",
                      },
                      "ffice. ",
                      {
                        part: "Ele trabalha no escritório.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/take-a-look-at-it.mp3",
                      },
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
                      {
                        part: "Dá uma olha.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/turn-off-the-lights.mp3",
                      },
                      "tur",
                      {
                        part: "n o",
                        type: "underline",
                      },
                      "ff the lights.",
                      {
                        part: "Apague as luzes.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/i-like-it-a-lot.mp3",
                      },
                      "I lik",
                      {
                        part: "e i",
                        type: "underline",
                      },
                      "t a lot.",
                      {
                        part: "Gosto bastante.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/im-out-of-time.mp3",
                      },
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
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/pick-it-up.mp3",
                      },
                      "Pic",
                      {
                        part: "k i",
                        type: "underline",
                      },
                      "t up.",
                      {
                        part: "Pegue.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="d + y" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics/consonants/dʒ.mp3",
                      },
                      {
                        part: "/dʒ/",
                        type: "phonetics",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/did-you-like-it.mp3",
                      },
                      "Di",
                      {
                        part: "d y",
                        type: "underline",
                      },
                      "ou like it? ",
                      {
                        part: "Você gostou?",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/did-you-like-it.mp3",
                      },
                      "Di",
                      {
                        part: "d y",
                        type: "underline",
                      },
                      "ou eat? ",
                      {
                        part: "Você gostou?",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/would-you-like-it.mp3",
                      },
                      {
                        part: "Do y",
                        type: "underline",
                      },
                      "ou know what I mean? ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/would-you-like-it.mp3",
                      },
                      "Woul",
                      {
                        part: "d y",
                        type: "underline",
                      },
                      "ou like it? ",
                      {
                        part: "Você gostaria?",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="t + y" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics/consonants/tʃ.mp3",
                      },
                      {
                        part: "/tʃ/",
                        type: "phonetics",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/dont-you-like-it.mp3",
                      },
                      "Don’",
                      {
                        part: "t y",
                        type: "underline",
                      },
                      "ou like it?",
                      {
                        part: "Você não gosta?",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/didnt-you-like-it.mp3",
                      },
                      "Didn’",
                      {
                        part: "t y",
                        type: "underline",
                      },
                      "ou like it?",
                      {
                        part: "Você não gostou?",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section label="s + y" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics/consonants/ʒ.mp3",
                      },
                      {
                        part: "/ʒ/",
                        type: "phonetics",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/dont-you-like-it.mp3",
                      },
                      "Thi",
                      {
                        part: "s y",
                        type: "underline",
                      },
                      "ear... ",
                      {
                        part: "Este ano...",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/dont-you-like-it.mp3",
                      },
                      "How’",
                      {
                        part: "s y",
                        type: "underline",
                      },
                      "our family doing? ",
                      {
                        part: "Como está a sua familia?",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/dont-you-like-it.mp3",
                      },
                      "Where i",
                      {
                        part: "s y",
                        type: "underline",
                      },
                      "our phone?? ",
                      {
                        part: "Onde está o seu telefone?",
                        type: "portuguese",
                      },
                    ],
                  }
                ],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}
