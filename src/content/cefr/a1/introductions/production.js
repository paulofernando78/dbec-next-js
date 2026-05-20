import { content } from "@/helpers/content";

export const production = {
  instruction: [
    ...content({
      parts: [
        "Work with a partner. Take turns meeting each other for the first time.",
      ],
    }),
  ],

  steps: [
    {
      value: [
        ...content({
          parts: ["Say hello and say your name."],
        }),
      ],
    },

    {
      value: [
        ...content({
          parts: ["Ask your partner's name."],
        }),
      ],
    },

    {
      value: [
        ...content({
          parts: ["Ask your partner's last name."],
        }),
      ],
    },

    {
      value: [
        ...content({
          parts: ["Ask your partner to spell his/her first name."],
        }),
      ],
    },

    {
      value: [
        ...content({
          parts: ["Ask your partner to spell his/her last name."],
        }),
      ],
    },
  ],
};
