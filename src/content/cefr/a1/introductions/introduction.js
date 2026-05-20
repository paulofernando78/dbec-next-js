import { content, audio, mark } from "@/helpers/content";

export const introduction = {
  mediaPosition: "top",

  imgSrc:
    "/assets/img/cefr/a1/introductions/introduction/laura-eric-mr-smith.png",
  imgAlt: "Two students talking at school.",
  ratio: "16-9",
  instruction: "Look at the picture and listen to the sentences.",

  tagAs: "p",
  phrases: [
    content({
      parts: [
        audio(
          "/assets/audio/cefr/a1/introductions/this-is-an-english-school.mp3",
        ),
        "This is an ",
        mark("English school."),
      ],
    }),

    content({
      parts: [
        audio(
          "/assets/audio/cefr/a1/introductions/laura-and-eric-are-students.mp3",
        ),
        "Laura and Eric are ",
        mark("students."),
      ],
    }),

    content({
      parts: [
        audio(
          "/assets/audio/cefr/a1/introductions/theyre-in-the-classroom.mp3",
        ),
        "They're in the ",
        mark("classroom."),
      ],
    }),

    content({
      parts: [
        audio("/assets/audio/cefr/a1/introductions/theyre-classmates.mp3"),
        "They are ",
        mark("classmates."),
      ],
    }),

    content({
      parts: [
        audio(
          "/assets/audio/cefr/a1/introductions/mr-smith-is-the-teacher.mp3",
        ),
        "Mr. Smith is the ",
        mark("teacher."),
      ],
    }),
  ],

  questions: {
    instruction: "Now answer the questions.",

    questions: [
      {
        question: "Laura and Eric are...",

        options: [
          {
            option: "at a restaurant.",
            isCorrect: false,
          },

          {
            option: "at a hospital.",
            isCorrect: false,
          },

          {
            option: "in an English school.",
            isCorrect: true,
          },
        ],
      },

      {
        question: "Laura and Eric are...",

        options: [
          {
            option: "teachers.",
            isCorrect: false,
          },

          {
            option: "classmates.",
            isCorrect: true,
          },

          {
            option: "brother and sister.",
            isCorrect: false,
          },
        ],
      },

      {
        question: "Mr. Smith is...",

        options: [
          {
            option: "a student.",
            isCorrect: false,
          },

          {
            option: "a classmate.",
            isCorrect: false,
          },

          {
            option: "the teacher.",
            isCorrect: true,
          },
        ],
      },
    ],
  },
};
