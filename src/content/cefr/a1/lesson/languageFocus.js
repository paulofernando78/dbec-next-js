import {
  content,
  audio,
  icon,
  italic,
  portuguese,
  underline,
} from "@/helpers/content";

export const languageFocus = {
  columnCommonGreetings: [
    // Saying hi!
    {
      column: "Saying hi!",
      bgColor: "var(--gray-5)",
      textColor: "white",
      blocks: [
        {
          block: [
            {
              text: content({
                parts: [
                  audio("/assets/audio/cefr/a1/introductions/hi.mp3"),

                  "Hi!",
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio("/assets/audio/cefr/a1/introductions/hello.mp3"),

                  "Hello!",
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio("/assets/audio/cefr/a1/introductions/hey.mp3"),

                  "Hey!",
                ],
              }),
            },
          ],
        },
      ],
    },
    // Common Questions
    {
      column: "Common Questions",
      bgColor: "var(--gray-5)",
      textColor: "white",
      blocks: [
        {
          block: [
            {
              text: content({
                parts: [
                  audio("/assets/audio/cefr/a1/introductions/how-are-you.mp3"),

                  "How are you? ",

                  portuguese("Como você está?"),
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio(
                    "/assets/audio/cefr/a1/introductions/how-are-you-doing.mp3",
                  ),

                  "How are you doing? ",

                  portuguese("Como vai você?"),
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio(
                    "/assets/audio/cefr/a1/introductions/hows-it-going.mp3",
                  ),

                  "How’s it going? ",

                  portuguese("Como vai?"),
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio(
                    "/assets/audio/cefr/a1/introductions/hows-everything.mp3",
                  ),

                  "How’s everything? ",

                  portuguese("Como andam as coisas?"),
                ],
              }),
            },
          ],
        },

        {
          lineBreak: true,
        },

        {
          block: [
            {
              text: content({
                parts: [italic("Informal")],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio("/assets/audio/cefr/a1/introductions/whats-up.mp3"),

                  "What’s up? ",

                  portuguese("E aí, beleza? (Informal)"),
                ],
              }),
            },
          ],
        },
      ],
    },
    // Possible Answers
    {
      column: "Possible Answers",
      bgColor: "var(--gray-5)",
      textColor: "white",
      blocks: [
        {
          block: [
            {
              text: content({
                parts: [
                  audio("/assets/audio/cefr/a1/introductions/im-well.mp3"),

                  "I’m well. ",

                  portuguese("Estou bem."),
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio("/assets/audio/cefr/a1/introductions/im-great.mp3"),

                  "I’m great. ",

                  portuguese("Estou ótimo(a)."),
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio("/assets/audio/cefr/a1/introductions/im-good.mp3"),

                  "I’m good. ",

                  portuguese("Estou bem. (Informal)"),
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio(
                    "/assets/audio/cefr/a1/introductions/im-pretty-good.mp3",
                  ),

                  "I’m pretty good. ",

                  portuguese("Estou bem / Muito bem. (Informal)"),
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio(
                    "/assets/audio/cefr/a1/introductions/same-as-usual.mp3",
                  ),

                  "Same as usual. ",

                  portuguese("O de sempre."),
                ],
              }),
            },
          ],
        },

        {
          lineBreak: true,
        },

        {
          block: [
            {
              text: content({
                parts: [italic("Informal")],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio("/assets/audio/cefr/a1/introductions/nothing-much.mp3"),

                  "Nothing much. ",

                  portuguese("Nada demais."),
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio("/assets/audio/cefr/a1/introductions/not-much-you.mp3"),

                  "Not much, you? ",

                  portuguese("Nada demais, e você?"),
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio(
                    "/assets/audio/cefr/a1/introductions/just-chilling.mp3",
                  ),

                  "Just chilling. ",

                  portuguese("De boa / Relaxando."),
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio("/assets/audio/cefr/a1/introductions/just-working.mp3"),

                  "Just working. ",

                  portuguese("Só trabalhando."),
                ],
              }),
            },
          ],
        },
      ],
    },
  ],

  columnCommonQuestions: [
    // Questions
    {
      column: "Questions",

      bgColor: "var(--slate-5)",

      textColor: "white",

      blocks: [
        {
          block: [
            {
              text: content({
                parts: [
                  audio(
                    "/assets/audio/cefr/a1/introductions/whats-your-name.mp3",
                  ),

                  "What's your name?",
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio(
                    "/assets/audio/pronunciation/linked-sounds/t-y/whats-your-name.mp3",
                  ),

                  icon("attention"),

                  "What’",

                  underline("s y"),

                  "our name?",
                ],
              }),
            },
          ],
        },

        {
          lineBreak: true,
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio(
                    "/assets/audio/cefr/a1/introductions/whats-your-first-name.mp3",
                  ),

                  "What's your first name?",
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio(
                    "/assets/audio/cefr/a1/introductions/how-do-you-spell-your-first-name.mp3",
                  ),

                  "How do you spell your first name?",
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio(
                    "/assets/audio/cefr/a1/introductions/how-do-you-spell-it.mp3",
                  ),

                  "How do you spell it?",
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio(
                    "/assets/audio/cefr/a1/introductions/whats-your-last-name.mp3",
                  ),

                  "What's your last name?",
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio(
                    "/assets/audio/cefr/a1/introductions/how-do-you-spell-your-last-name.mp3",
                  ),

                  "How do you spell your last name?",
                ],
              }),
            },
          ],
        },
      ],
    },
    // Answers
    {
      column: "Answers",

      bgColor: "var(--slate-5)",

      textColor: "white",

      blocks: [
        {
          block: [
            {
              text: content({
                parts: [
                  audio("/assets/audio/cefr/a1/introductions/I-am.mp3"),

                  "I am...",
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio("/assets/audio/cefr/a1/introductions/Im.mp3"),

                  icon("attention"),

                  "I’m...",
                ],
              }),
            },
          ],
        },

        {
          lineBreak: true,
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio("/assets/audio/cefr/a1/introductions/my-name-is.mp3"),

                  "My name is...",
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio("/assets/audio/cefr/a1/introductions/my-names.mp3"),

                  "My na",

                  underline("me’s..."),
                ],
              }),
            },
          ],
        },

        {
          lineBreak: true,
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio(
                    "/assets/audio/cefr/a1/introductions/my-first-names.mp3",
                  ),

                  "My first name’s...",
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio(
                    "/assets/audio/cefr/a1/introductions/my-last-names.mp3",
                  ),

                  "My last name’s...",
                ],
              }),
            },
          ],
        },

        {
          lineBreak: true,
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio(
                    "/assets/audio/cefr/a1/introductions/nice-to-meet-you-1.mp3",
                  ),

                  "Nice to meet you",
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio(
                    "/assets/audio/cefr/a1/introductions/nice-to-meet-you-2.mp3",
                  ),

                  "Nice to mee",

                  underline("t y"),

                  "ou",
                ],
              }),
            },
          ],
        },

        {
          block: [
            {
              text: content({
                parts: [
                  audio(
                    "/assets/audio/cefr/a1/introductions/nice-meeting-you.mp3",
                  ),

                  icon("attention"),

                  "Nice meeting you.",
                ],
              }),
            },
          ],
        },
      ],
    },
  ],
};
