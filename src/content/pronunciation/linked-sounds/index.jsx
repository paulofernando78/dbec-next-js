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
              lines: [
                {
                  text: [
                    {
                      audio:
                        "/assets/audio/pronunciation/linked-sounds/check-out.mp3",
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
                  // /w/
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
                  // Go on.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/vowel-vowel/w/go-on.mp3",
                      },
                      "G",
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
                  // Do it again.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/vowel-vowel/w/do-it-again.mp3",
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
                  // /j/
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
                  // I agree with you on this issue.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/vowel-vowel/j/i-agree-with-you-on-this-issue.mp3",
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
                  // She asked me a question.
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
                  // Have a seat, please.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/consonant-vowel/have-a-seat-please.mp3",
                      },
                      "Ha",
                      {
                        part: "v(e) a",
                        type: "underline",
                      },
                      "  sea(t), please.",
                      {
                        part: " Dá uma olha.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // Take a look at it.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/consonant-vowel/take-a-look-at-it.mp3",
                      },
                      "Ta",
                      {
                        part: "k(e) a",
                        type: "underline",
                      },
                      " loo",
                      {
                        part: "k at i",
                        type: "underline",
                      },
                      "(t).",
                      {
                        part: " Dá uma olha.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // It’s an easy task.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/consonant-vowel/its-an-easy-task.mp3",
                      },
                      "It’",
                      {
                        part: "s an e",
                        type: "underline",
                      },
                      "asy task.",
                      {
                        part: " É um tarefa fácil.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // I have online classes in the morning.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/consonant-vowel/i-have-online-classes-in-the-morning.mp3",
                      },
                      "I ha",
                      {
                        part: "ve o",
                        type: "underline",
                      },
                      "nline class",
                      {
                        part: "es i",
                        type: "underline",
                      },
                      "n the morning.",
                      {
                        part: " “Eu tenho aulas online pela manhã.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // I like it a lot.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/consonant-vowel/i-like-it-a-lot.mp3",
                      },
                      "I lik",
                      {
                        part: "e it a",
                        type: "underline",
                      },
                      " lo(t).",
                      {
                        part: " Gosto bastante.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // Pick it up.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/consonant-vowel/pick-it-up.mp3",
                      },
                      "Pi",
                      {
                        part: "ck it u",
                        type: "underline",
                      },
                      "(p).",
                      {
                        part: " Pegue.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // I’m out of time.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/consonant-vowel/im-out-of-time.mp3",
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
                      {
                        part: " Estou sem tempo.",
                        type: "portuguese",
                      },
                    ],
                  },

                  // Turn off the lights.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/consonant-vowel/turn-off-the-lights.mp3",
                      },
                      "Tur",
                      {
                        part: "n o",
                        type: "underline",
                      },
                      "ff the lights.",
                      {
                        part: " Apague as luzes.",
                        type: "portuguese",
                      },
                    ],
                  },

                  // He works in an office.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/consonant-vowel/he-works-in-an-office.mp3",
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
                      "ffic(e). ",
                      {
                        part: "Ele trabalha no escritório.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // In the end, it doesn’t even matter.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/consonant-vowel/in-the-end-it-doesnt-even-matter.mp3",
                      },
                      "In the en(d), (i)t does",
                      {
                        part: "n’t",
                        type: "underline",
                      },
                      " even matter.",
                      {
                        part: " ...",
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
                  // /dʒ/
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
                  // Did you like it?
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/d-y/did-you-like-it.mp3",
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
                  // Did you eat?
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/d-y/did-you-eat.mp3",
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
                  // Do you know what I mean?
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/d-y/do-you-know-what-i-mean.mp3",
                      },
                      {
                        part: "D(o) y",
                        type: "underline",
                      },
                      "ou know what I mean? ",
                      {
                        part: "Você me entende?",
                        type: "portuguese",
                      },
                    ],
                  },
                  // Would you like it?
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/d-y/would-you-like-it.mp3",
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
                  // /tʃ/
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
                  // Don’t you like it?
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/t-y/dont-you-like-it.mp3",
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
                  // Didn’t you like it?
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/t-y/didnt-you-like-it.mp3",
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
                  // /ʒ/
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
                  // This year I wanna study Spanish.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/s-y/this-year-i-wanna-learn-spanish.mp3",
                      },
                      "Thi",
                      {
                        part: "s y",
                        type: "underline",
                      },
                      "ear I wanna learn Spanish.",
                      {
                        part: "Este ano eu quero aprender espanhol.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // How’s your family?
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/s-y/hows-your-family.mp3",
                      },
                      "How’",
                      {
                        part: "s y",
                        type: "underline",
                      },
                      "our family? ",
                      {
                        part: "Como está a sua familia?",
                        type: "portuguese",
                      },
                    ],
                  },
                  // Where’s your phone?
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/linked-sounds/s-y/wheres-your-phone.mp3",
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
