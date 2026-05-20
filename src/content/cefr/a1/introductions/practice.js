export const practice = {
  radio: [
    {
      question: "Hello! I'm Sara.",
      options: [
        { option: "Nice to meet you.", isCorrect: true },
        { option: "My last name is Silva.", isCorrect: false },
        { option: "How old is your school?", isCorrect: false },
      ],
    },
    {
      question: "What's your name?",
      options: [
        { option: "My last name is Costa.", isCorrect: false },
        { option: "My name's Diego.", isCorrect: true },
        { option: "Nice to meet you too.", isCorrect: false },
      ],
    },
    {
      question: "What's your last name?",
      options: [
        { option: "I'm Ana.", isCorrect: false },
        { option: "Nice to meet you too.", isCorrect: false },
        { option: "It's Gomez.", isCorrect: true },
      ],
    },
    {
      question: "How do you spell your name?",
      options: [
        { option: "I'm a student.", isCorrect: false },
        { option: "A-N-N-A.", isCorrect: true },
        { option: "My name's Anna.", isCorrect: false },
      ],
    },
    {
      question: "Nice to meet you.",
      options: [
        {
          option: "Nice to meet you too.",
          isCorrect: true,
        },
        { option: "I'm from Brazil.", isCorrect: false },
        { option: "See you yesterday.", isCorrect: false },
      ],
    },
    {
      question: "What's your first name?",
      options: [
        { option: "It's Pereira.", isCorrect: false },
        { option: "My first name's Lucas.", isCorrect: true },
        { option: "I'm fine, thanks.", isCorrect: false },
      ],
    },
    {
      question: "Are you a new student?",
      options: [
        { option: "Yes, I am.", isCorrect: true },
        { option: "My name is Clara.", isCorrect: false },
        { option: "P-A-U-L-A.", isCorrect: false },
      ],
    },
    {
      question: "How are you doing?",
      options: [
        { option: "I'm pretty good.", isCorrect: true },
        { option: "My last name is Costa.", isCorrect: false },
        { option: "Nice meeting you.", isCorrect: false },
      ],
    },
    {
      question: "How do you spell your last name?",
      options: [
        { option: "C-O-S-T-A.", isCorrect: true },
        { option: "I'm a teacher.", isCorrect: false },
        { option: "It's my first class.", isCorrect: false },
      ],
    },
    {
      question: "Hey! What's up?",
      options: [
        { option: "Not much, you?", isCorrect: true },
        { option: "My name's Kevin.", isCorrect: false },
        { option: "See you tomorrow.", isCorrect: false },
      ],
    },
  ],

  fillInTheBlanks: {
    blocks: [
      {
        block: [{ text: "A: Hi! " }, { blank: "I'm" }, { text: " Julia." }],
        lineBreak: true,
      },
      {
        block: [
          { text: "B: Hello, Julia. " },
          { blank: "I'm" },
          { text: " Ben." },
        ],
        lineBreak: true,
      },
      {
        block: [{ text: "A: Nice to " }, { blank: "meet" }, { text: " you." }],
        lineBreak: true,
      },
      {
        block: [
          { text: "B: Nice to meet you " },
          { blank: ["too", "Too"] },
          { text: "." },
        ],
        lineBreak: true,
      },
      {
        block: [
          { text: "A: What's your " },
          { blank: "last name" },
          { text: "?" },
        ],
        lineBreak: true,
      },
      {
        block: [{ text: "B: " }, { blank: "It's" }, { text: " Costa." }],
        lineBreak: true,
      },
      {
        block: [
          { text: "A: How do you " },
          { blank: "spell" },
          { text: " it?" },
        ],
        lineBreak: true,
      },
      {
        block: [{ text: "B: " }, { blank: "C-O-S-T-A" }, { text: "." }],
      },
      {
        block: [
          { text: "A: Are you a new " },
          { blank: "student" },
          { text: " here?" },
        ],
        lineBreak: true,
      },
      {
        block: [{ text: "B: Yes, I " }, { blank: "am" }, { text: "." }],
      },
    ],
  },

  unscrambleSentences: {
    instruction: "Unscramble the sentences.",

    blocks: [
      {
        block: [
          { text: "Julia / I’m / Hi!" },
          { blank: "Hi! I’m Julia." },
          { text: "." },
        ],
        lineBreak: true,
      },
      {
        block: [
          { text: "name / What’s / your" },
          { blank: "What’s your name" },
          { text: "?" },
        ],
        lineBreak: true,
      },
      {
        block: [
          { text: "meet / Nice / you / to" },
          { blank: "Nice to meet you" },
          { text: "." },
        ],
        lineBreak: true,
      },
      {
        block: [
          { text: "last / your / What’s / name" },
          { blank: "What’s your last name?" },
          { text: "?" },
        ],
        lineBreak: true,
      },
      {
        block: [
          { text: "spell / do / it / How / you?" },
          { blank: "How do you spell it" },
          { text: "?" },
        ],
      },
      {
        block: [
          { text: "your / spell / How / do / name / you?" },
          { blank: "How do you spell your name" },
          { text: "?" },
        ],
        lineBreak: true,
      },
      {
        block: [
          { text: "am / I / student / a / new" },
          { blank: "I am a new student" },
          { text: "." },
        ],
        lineBreak: true,
      },
      {
        block: [
          { text: "doing / How / you / are?" },
          { blank: "How are you doing" },
          { text: "?" },
        ],
        lineBreak: true,
      },
      {
        block: [
          { text: "good / pretty / I’m" },
          { blank: "I’m pretty good" },
          { text: "." },
        ],
        lineBreak: true,
      },
      {
        block: [
          { text: "meet / Nice / too / you, / to" },
          { blank: "Nice to meet you, too" },
          { text: "." },
        ],
      },
    ],
  },
};
