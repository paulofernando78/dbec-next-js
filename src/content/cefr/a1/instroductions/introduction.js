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
      question: "Where are Laura and Eric?",
      options: [
        { option: "At a restaurant.", isCorrect: false },
        { option: "At a hospital.", isCorrect: false },
        { option: "At an English school.", isCorrect: true },
      ],
    },
    {
      question: "Are Laura and Eric students?",
      options: [
        { option: "No, they aren't.", isCorrect: false },
        { option: "Yes, they are.", isCorrect: true },
        { option: "One is a doctor.", isCorrect: false },
      ],
    },
    {
      question: "Who is Mr. Smith?",
      options: [
        { option: "A student.", isCorrect: false },
        { option: "A classmate.", isCorrect: false },
        { option: "The teacher.", isCorrect: true },
      ],
    },
  ],
};
