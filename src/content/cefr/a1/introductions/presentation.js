import { content, audio, mark } from "@/helpers/content";

export const dialogue = {
  imgSrc:
    "/assets/img/cefr/a1/introductions/presentation/laura-eric-introduction.png",
  imgAlt: "Two students talking at school.",
  description: "Laura and Eric shake hands.",
  audioPlayer: "/assets/audio/cefr/a1/introductions/presentation.mp3",
  lines: [
    {
      speaker: "Laura",
      text: [
        ...content({
          parts: ["Hi there! How are you doing? "],
        }),
      ],
    },
    {
      speaker: "Eric",
      text: [
        ...content({
          parts: ["Hello, I'm pretty good. How about you?"],
        }),
      ],
    },
    {
      speaker: "Laura",
      text: [
        ...content({
          parts: ["I'm great, thanks. I'm Laura."],
        }),
      ],
    },
    {
      speaker: "Eric",
      text: [
        ...content({
          parts: ["Hello, Laura. I'm Eric."],
        }),
      ],
    },
    {
      speaker: "Laura",
      text: [
        ...content({
          parts: ["Nice to meet you."],
        }),
      ],
    },
    {
      speaker: "Eric",
      text: [
        ...content({
          parts: ["Nice to meet you too. What's your last name?"],
        }),
      ],
    },
    {
      speaker: "Laura",
      text: [
        ...content({
          parts: ["It's Palmer."],
        }),
      ],
    },
    {
      speaker: "Eric:",
      text: [
        ...content({
          parts: ["How do you spell it?"],
        }),
      ],
    },
    {
      speaker: "Laura:",
      text: [
        ...content({
          parts: ["P-A-L-M-E-R."],
        }),
      ],
    },
    {
      speaker: "Eric",
      text: [
        ...content({
          parts: ["Are you a new student here?"],
        }),
      ],
    },
    {
      speaker: "Laura",
      text: [
        ...content({
          parts: ["Yes, I am. How about you?"],
        }),
      ],
    },
    {
      speaker: "Eric",
      text: [
        ...content({
          parts: ["Me too. So, class starts in 5 minutes, right? Ready?"],
        }),
      ],
    },
    {
      speaker: "Laura",
      text: [
        ...content({
          parts: ["Yes. I am. Let's go."],
        }),
      ],
    },
  ],
};
