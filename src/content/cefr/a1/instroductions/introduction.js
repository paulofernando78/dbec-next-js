export const introPhrases = [
  {
    audio: "/assets/audio/cefr/a1/introductions/this-is-an-english-school.mp3",
    part: "This is an English school.",
  },
  {
    audio:
      "/assets/audio/cefr/a1/introductions/laura-and-eric-are-students.mp3",
    part: "Laura and Eric are students.",
  },
  {
    audio: "/assets/audio/cefr/a1/introductions/theyre-in-the-classroom.mp3",
    part: "They're in the classroom.",
  },
  {
    audio: "/assets/audio/cefr/a1/introductions/theyre-classmates.mp3",
    part: "They are classmates.",
  },
  {
    audio: "/assets/audio/cefr/a1/introductions/mr-smith-is-the-teacher.mp3",
    part: "Mr. Smith is the teacher.",
  },
];

export const introQuestions = {
  instruction: "Now answer the questions.",
  questions: [
    {
      question: "Laura and Eric are...",
      options: [
        { option: "at a restaurant.", isCorrect: false },
        { option: "at a hospital.", isCorrect: false },
        { option: "in an English school.", isCorrect: true },
      ],
    },
    {
      question: "Laura and Eric are",
      options: [
        { option: "teachers.", isCorrect: false },
        { option: "classmates", isCorrect: true },
        { option: "brother ad sister.", isCorrect: false },
      ],
    },
    {
      question: "Mr. Smith is",
      options: [
        { option: "a student.", isCorrect: false },
        { option: "a classmate.", isCorrect: false },
        { option: "the teacher.", isCorrect: true },
      ],
    },
  ],
};
