import { content, audio, mark } from "@/helpers/content";

export const introduction = {
  mediaPosition: "top",

  imgSrc:
    "/",
  imgAlt: "...",
  ratio: "16-9",
  instruction: "Look at the picture and listen to the sentences.",

  tagAs: "p",
  phrases: [
    content({
      parts: [
        audio(
          "/",
        ),
        "...",
      ],
    }),
  ],

  questions: {
    instruction: "Now answer the questions.",

    questions: [
      {
        question: "...",

        options: [
          {
            option: "...",
            isCorrect: true,
          },
          {
            option: "...",
            isCorrect: false,
          },
          
          {
            option: "...",
            isCorrect: false,
          },
        ],
      },
    ],
  },
};
