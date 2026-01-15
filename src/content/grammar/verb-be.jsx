import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Checking } from "@/components/molecules/Checking";
import { Column } from "@/components/molecules/Column";
import { List } from "@/components/molecules/List";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function VerbBe() {
  return (
    <>
      <Whiteboard title="Grammar" subtitle="Verb Be" />
      <div className="line-break">
        <Section label="Introduction" heading={3}>
          <Paragraph
            blocks={[
              {
                imgPosition: "left",
                imgs: [
                  {
                    img: "/assets/img/general/two-people-talking-school.png",
                    alt: "Two people talking.",
                    width: 350,
                    height: 250,
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/look-at-the-pictures-and-listen-to-the-sentence.mp3",
                        part: "Look at the picture and listen to the sentences.",
                        type: "bold",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/grammar/verb-be/introduction/laura-and-eric-are-at-school.mp3",
                        part: "Laura and Eric are at school.",
                      }
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/grammar/verb-be/introduction/theyre-students.mp3",
                        part: "They’re students.",
                      }
                      
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/grammar/verb-be/introduction/theyre-classmates.mp3",
                        part: "They’re classmates.",
                      }
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/answer-these-questions.mp3",
                        part: "Answer these questions.",
                        type: "bold",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: ["Where are Laura and Eric? "],
                  },
                  {
                    text: ["Are they students?"],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="Presentation" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      "",
                      {
                        audio: "/assets/audio/general/listen-to-the-dialogue.mp3",
                        part: "Listen to the dialogue.",
                        type: "bold",
                      },
                      "",
                    ],
                  },
                ],
              },
            ]}
          />
          <Dialogue
            audioPlayer="/assets/audio/grammar/verb-be/presentation/dialogue.mp3"
            lines={[
              {
                speaker: "Laura:",
                text: [
                  "Hi, I",
                  {
                    type: "mark",
                    part: "’m",
                  },
                  " Laura.",
                ],
              },
              {
                speaker: "Eric:",
                text: [
                  "Hello, I",
                  {
                    type: "mark",
                    part: "’m",
                  },
                  " Eric.",
                ],
              },
              {
                speaker: "Laura:",
                text: ["Nice to meet you, Eric."],
              },
              {
                speaker: "Eric:",
                text: "",
                text: [
                  "Nice to meet you, too. ",
                  {
                    part: "Are",
                    type: "mark",
                  },
                  " you the teacher?",
                ],
              },
              {
                speaker: "Laura:",
                text: [
                  "No, I",
                  {
                    part: "’m not",
                    type: "mark",
                  },
                  ". Her name ",
                  {
                    part: "is",
                    type: "mark",
                  },
                  " Mrs. Smith.",
                ],
              },
              {
                speaker: "Eric:",
                text: [
                  "Is ",
                  {
                    type: "mark",
                    part: "she",
                  },
                  " at school?",
                ],
              },
              {
                speaker: "Laura:",
                text: [
                  "Yes, she ",
                  {
                    part: "is",
                    type: "mark",
                  },
                  " in the classrom right now. Let's go!",
                ],
              },
            ]}
          />
        </Section>

        <Section label="Meaning" heading={4}>
          {/* Identify */}
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        part: "We use verb to be to talk about:",
                        type: "bold",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/identity.mp3",
                        part: "Identity",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "Identidade",
                        type: "portuguese",
                      },
                      ":",
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/im-paul.mp3",
                        part: "I’m Paul.",
                      },
                      " ",
                      { part: "Sou o Paulo.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/hes-my-brother.mp3",
                        part: "He’s my brother.",
                      },
                      " ",
                      { part: "Ele é o meu irmão.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/theyre-my-friends.mp3",
                        part: "They are my friends.",
                      },
                      " ",
                      { part: "Eles são meus amigos.", type: "portuguese" },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/job.mp3",
                        part: "Job",
                        type: "bold",
                      },
                      " ",
                      { part: "Profissão / Função", type: "portuguese" },
                      ":",
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/Im-a-teacher.mp3",
                        part: "I’m a teacher.",
                      },
                      " ",
                      { part: "Sou professor(a).", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/hes-an-engineer.mp3",
                        part: "He’s an engineer.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/shes-a-doctor.mp3",
                        part: "She’s a doctor.",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/state-condition-description.mp3",
                        part: "State / Condition / Description",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "Estado / Condição / Descrição",
                        type: "portuguese",
                      },
                      ":",
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/im-tired.mp3",
                        part: "I’m tired.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/shes-happy.mp3",
                        part: "She’s happy.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/this-car-is-fast.mp3",
                        part: "This car is fast.",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/nationality.mp3",
                        part: "Nationality",
                        type: "bold",
                      },
                      " ",
                      { part: "Nacionalidade", type: "portuguese" },
                      ":",
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/mike-is-american.mp3",
                        part: "Mike is American. He’s from the United States.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/George-is-british.mp3",
                        part: "George is British. He’s from England.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/juan-and-maria-are-mexican.mp3",
                        part: "Juan and Maria are Mexican. They’re from Mexico.",
                      },
                    ],
                  },
                ],
              },
            ]}
          />

          <Checking
            type="CCQ"
            ccq={[
              {
                block: [
                  {
                    example: "I’m Paul.",
                    questions: [
                      {
                        question:
                          "Is Paul talking about who he is or what he does?",
                      },
                    ],
                  },
                  {
                    example: "I’m a teacher.",
                    questions: [
                      {
                        question:
                          "Is Paul talking about who he is or what he does?",
                      },
                    ],
                  },
                ],
              },
              {
                block: [
                  {
                    example: "I’m tired.",
                    questions: [
                      {
                        question: "Is this a permanent situation?",
                      },
                      {
                        question: "Can this be changed?",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="Pronunciation + Form" heading={4}>
          <Column
            width="300"
            cols={[
              // Affirmative
              {
                bgColor: "var(--green-4)",
                column: "Affirmative",
                blocks: [
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "subject + verb",
                            type: "italic",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/affirmative/i-am.mp3",
                            part: "I ",
                          },
                          {
                            part: "am ",
                            type: "bold",
                          },
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/affirmative/i-am.mp3",
                            part: "I",
                          },
                          {
                            part: "’m",
                            type: "bold",
                          },
                          {
                            part: " (eu) sou, estou",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/affirmative/you-are.mp3",
                            part: "you ",
                          },
                          { part: "are ", type: "bold" },
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/affirmative/you-are.mp3",
                            part: "you",
                          },
                          { part: "’re ", type: "bold" },
                          { part: "você é, está", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/affirmative/he-is.mp3",
                            part: "he ",
                          },
                          { part: "is ", type: "bold" },
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/affirmative/he-is.mp3",
                            part: "he",
                          },
                          { part: "’s ", type: "bold" },
                          { part: "ele é, está", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/affirmative/she-is.mp3",
                            part: "she ",
                          },
                          { part: "is ", type: "bold" },
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/affirmative/she-is.mp3",
                            part: "she",
                          },
                          { part: "’s ", type: "bold" },
                          { part: "ela é, está", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/affirmative/it-is.mp3",
                            part: "it ",
                          },
                          { part: "is ", type: "bold" },
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/affirmative/it-is.mp3",
                            part: "it",
                          },
                          { part: "’s ", type: "bold" },
                          { part: "(neutro) é, está", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/affirmative/we-are.mp3",
                            part: "we ",
                          },
                          { part: "are ", type: "bold" },
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/affirmative/we-are.mp3",
                            part: "we ",
                          },
                          { part: "’re ", type: "bold" },
                          { part: "nós somos, estamos", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/affirmative/you-are.mp3",
                            part: "you ",
                          },
                          { part: "are ", type: "bold" },
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/affirmative/you-are.mp3",
                            part: "you ",
                          },
                          { part: "’re ", type: "bold" },
                          { part: "vocês são, estão", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/affirmative/they-are.mp3",
                            part: "they ",
                          },
                          { part: "are ", type: "bold" },
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/affirmative/they-are.mp3",
                            part: "they ",
                          },
                          { part: "’re ", type: "bold" },
                          { part: "eles/elas são, estão", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            important: true,
                            part: 'they = plural de "he/he/it" ',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },

              // Negative
              {
                bgColor: "var(--red-4)",
                column: "Negative",
                blocks: [
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "subject + not + verb",
                            type: "italic",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/negative/i-am-not.mp3",
                            part: "I ",
                          },
                          { part: "am not ", type: "bold" },
                          { part: "(eu) não sou, estou", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/negative/you-are-not.mp3",
                            part: "you ",
                          },
                          { part: "are not ", type: "bold" },
                          {
                            part: "você não é, está",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/negative/he-is-not.mp3",
                            part: "he ",
                          },
                          { part: "is not ", type: "bold" },
                          { part: "ele não é, está", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/negative/she-is-not.mp3",
                            part: "she ",
                          },
                          { part: "is not ", type: "bold" },
                          { part: "ela não é, está", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/negative/it-is-not.mp3",
                            part: "it ",
                          },
                          { part: "is not ", type: "bold" },
                          { part: "não é, está", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/negative/we-are-not.mp3",
                            part: "we ",
                          },
                          { part: "are not ", type: "bold" },
                          {
                            part: "nós não somos, estamos",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/negative/you-are-not.mp3",
                            part: "you ",
                          },
                          { part: "are not ", type: "bold" },
                          {
                            part: "vocês não estão, são",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/negative/they-are-not.mp3",
                            part: "they ",
                          },
                          { part: "are not ", type: "bold" },
                          {
                            part: "eles/elas não estão, são",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },

              // Interrogative
              {
                bgColor: "var(--yellow-4)",
                column: "Interrogative",
                blocks: [
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "verb + subject",
                            type: "italic",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/interrogative/am-i.mp3",
                            part: "am",
                            type: "bold",
                          },
                          " I? ",
                          { part: "(eu) sou, estou?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/interrogative/are-you.mp3",
                            part: "are",
                            type: "bold",
                          },
                          " you? ",
                          { part: "você é, está?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/interrogative/is-he.mp3",
                            part: "is",
                            type: "bold",
                          },
                          " he? ",
                          { part: "ele é, está?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/interrogative/is-she.mp3",
                            part: "is",
                            type: "bold",
                          },
                          " she? ",
                          { part: "ela é, está?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/interrogative/is-it.mp3",
                            part: "is",
                            type: "bold",
                          },
                          " it? ",
                          { part: "(neutro) é, está?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/interrogative/are-we.mp3",
                            part: "are",
                            type: "bold",
                          },
                          " we? ",
                          { part: "nós somos, estamos?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/interrogative/are-you.mp3",
                            part: "are",
                            type: "bold",
                          },
                          " you? ",
                          { part: "vocês são, estão?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/interrogative/are-they.mp3",
                            part: "are",
                            type: "bold",
                          },
                          " they? ",
                          { part: "vocês são, estão?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                ],
              },

              // Interrogative Negative (Int. Neg.)
              {
                bgColor: "var(--blue-4)",
                column: "Interrogative Negative",
                blocks: [
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "verb + not + subject",
                            type: "italic",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/int-neg/arent-i.mp3",
                            part: "aren’t",
                            type: "bold",
                          },
                          " I? ",
                          { part: "(eu) não sou, estou?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/int-neg/arent-you.mp3",
                            part: "aren’t",
                            type: "bold",
                          },
                          " you? ",
                          {
                            part: "você não é, está?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/int-neg/isnt-he.mp3",
                            part: "isn’t",
                            type: "bold",
                          },
                          " he? ",
                          { part: "ele não é, está?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/int-neg/isnt-she.mp3",
                            part: "isn’t",
                            type: "bold",
                          },
                          " she? ",
                          { part: "ela não é, está?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/int-neg/isnt-it.mp3",
                            part: "isn’t",
                            type: "bold",
                          },
                          " it? ",
                          { part: "(neutro) não é, está?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/int-neg/arent-we.mp3",
                            part: "aren’t",
                            type: "bold",
                          },
                          " we? ",
                          {
                            part: "nós não somos, estamos?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/int-neg/arent-you.mp3",
                            part: "aren’t",
                            type: "bold",
                          },
                          " you? ",
                          {
                            part: "vocês não são, estão?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/verb-be/pronunciation/int-neg/arent-they.mp3",
                            part: "aren’t",
                            type: "bold",
                          },
                          " they? ",
                          {
                            part: "eles/elas não são, estão?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="Practice" heading={3}>
          <FillInTheBlanks
            exercise={{
              instructions: "1. Fill in the blanks with the correct form of the verb be.",
              blocks: [
                {
                  block: [
                    { text: "I" },
                    { blank: ["am", "'m", "’m"] },
                    { text: "a student." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "She" },
                    { blank: ["is", "'s", "’s"] },
                    { text: "my teacher." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "They" },
                    { blank: ["are", "'re", "’re"] },
                    { text: "at school." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "We" },
                    { blank: ["are", "'re", "’re"] },
                    { text: "friends." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "It" },
                    { blank: ["is", "'s", "’s"] },
                    { text: "cold today." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "He" },
                    { blank: ["is", "'s", "’s"] },
                    { text: "from Brazil." },
                  ],
                },
              ],
            }}
          />

          <Radio
            exercise={{
              instruction: "Choose the correct form of the verb be.",
              questions: [
                {
                  question: "1. She ___ a student.",
                  options: [
                    { option: "am", isCorrect: false },
                    { option: "is", isCorrect: true },
                    { option: "are", isCorrect: false },
                  ],
                },
                {
                  question: "2. They ___ from Mexico.",
                  options: [
                    { option: "is", isCorrect: false },
                    { option: "are", isCorrect: true },
                    { option: "am", isCorrect: false },
                  ],
                },
                {
                  question: "3. I ___ happy today.",
                  options: [
                    { option: "am", isCorrect: true },
                    { option: "is", isCorrect: false },
                    { option: "are", isCorrect: false },
                  ],
                },
                {
                  question: "4. He ___ my brother.",
                  options: [
                    { option: "am", isCorrect: false },
                    { option: "is", isCorrect: true },
                    { option: "are", isCorrect: false },
                  ],
                },
                {
                  question: "5. We ___ ready.",
                  options: [
                    { option: "is", isCorrect: false },
                    { option: "are", isCorrect: true },
                    { option: "am", isCorrect: false },
                  ],
                },
                {
                  question: "6. It ___ cold today.",
                  options: [
                    { option: "am", isCorrect: false },
                    { option: "is", isCorrect: true },
                    { option: "are", isCorrect: false },
                  ],
                },
                {
                  question: "7. You ___ my friend.",
                  options: [
                    { option: "am", isCorrect: false },
                    { option: "are", isCorrect: true },
                    { option: "is", isCorrect: false },
                  ],
                },
                {
                  question: "8. They ___ students.",
                  options: [
                    { option: "is", isCorrect: false },
                    { option: "are", isCorrect: true },
                    { option: "am", isCorrect: false },
                  ],
                },
                {
                  question: "9. I ___ from Brazil.",
                  options: [
                    { option: "am", isCorrect: true },
                    { option: "is", isCorrect: false },
                    { option: "are", isCorrect: false },
                  ],
                },
                {
                  question: "10. She ___ tired.",
                  options: [
                    { option: "am", isCorrect: false },
                    { option: "is", isCorrect: true },
                    { option: "are", isCorrect: false },
                  ],
                },
              ],
            }}
          />
        </Section>

        <Section label="Production" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/talk-about-yourself.mp3",
                        part: "Talk about yourself.",
                        type: "bold",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
          <List
            bullet={true}
            items={[
              {
                text: ["What’s your first name? "],
              },
              {
                text: ["What’s your last name? "],
              },
              {
                text: ["What’s your occupation / job?"],
              },
              {
                text: ["What’s your nationality?"],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}
