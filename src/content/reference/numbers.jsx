import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Checking } from "@/components/molecules/Checking";
import { Column } from "@/components/molecules/Column";
import { List } from "@/components/molecules/List";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export const metadata = {
  title: "Numbers in English – Cardinal and Ordinal",
  description: "Learn cardinal and ordinal numbers in English with examples, dialogue, and practice exercises.",
};

export default function Numbers() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="Numbers" />
      <div className="line-break">

        <Section label="Introduction" heading={3}>
          <Paragraph
            blocks={[
              {
                imgPosition: "left",
                imgs: [
                  {
                    img: "/assets/img/vocabulary/numbers/Lauras-birthday.png",
                    alt: "students celebrating a birthday in a classroom",
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
                        audio:
                          "/assets/audio/vocabulary/numbers/introduction/students-are-having-a-party-at-school.mp3",
                      },
                      "Students are having a party at school.",
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/vocabulary/numbers/introduction/its-lauras-birthday.mp3",
                      },
                      "It's Laura’s birthday.",
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/vocabulary/numbers/introduction/her-birthday-is-on-the-third.mp3",
                      },
                      "Her birthday is on the 3rd (third).",
                    ],
                    lineBreak: true,
                  },
                ],
              },
            ]}
          />

          <Radio
            exercise={{
              audio: "/assets/audio/general/now-answer-the-questions.mp3",
              instruction: "Now answer the questions.",
              questions: [
                {
                  question: "1. What are the students doing?",
                  options: [
                    { option: "They're having  a picnic.", isCorrect: false },
                    { option: "They're having classes.", isCorrect: false },
                    { option: "They're having a party.", isCorrect: true },
                  ],
                },
                {
                  question: "2. Who’s birthday is it?",
                  options: [
                    { option: "It's the teacher’s.", isCorrect: false },
                    { option: "It's Laura's.", isCorrect: true },
                    { option: "It’s Scott.", isCorrect: false },
                  ],
                },
              ],
            }}
          />
        </Section>

        <Section label="Presentation" heading={3}>
          <Dialogue
            audioPlayer="/assets/audio/vocabulary/numbers/presenttion-dialogue.mp3"
            lines={[
              {
                speaker: "Eric:",
                text: ["Surprise!"],
              },
              {
                speaker: "Laura:",
                text: ["Oh! Thank you so much!"],
              },
              {
                speaker: "Eric:",
                text: [
                  "Today is your birthday. It’s ",
                  {
                    part: "on the 3rd (third)",
                    type: "mark",
                  },
                  ", right?",
                ],
              },
              {
                speaker: "Laura:",
                text: ["Yes, that’s right."],
              },
              {
                speaker: "Eric:",
                text: ["How old are you now?"],
              },
              {
                speaker: "Laura:",
                text: [
                  "I'm ",
                  {
                    part: "29 (twenty-nine)",
                    type: "mark",
                  },
                  ".",
                ],
              },
              {
                speaker: "Eric:",
                text: ["Great! Let's sing Happy birthday, then."],
              },
            ]}
          />
        </Section>

        <Section label="Meaning" heading={4}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      "We use cardinal numbers to talk about quantity, age, and numbers in general.",
                    ],
                  },
                  {
                    text: [
                      "We use ordinal numbers to talk about order, position, and dates.",
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
                    example: "Anna is 29. Her birthday is on the 3rd.",
                    questions: [
                      {
                        question: "Is 29 a cardinal or an ordinal number?",
                        answer: "Cardinal",
                      },
                      {
                        question: "Does 29 tell us age or order?",
                        answer: "Age",
                      },
                      {
                        question: "Is 3rd a cardinal or an ordinal number?",
                        answer: "Ordinal",
                      },
                      {
                        question: "Does 3rd tell us age or date?",
                        answer: "Date",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="Column" heading={3}>
          <Column
            width="210"
            cols={[
              // Cardinal
              {
                bgColor: "var(--gray-4)",
                textColor: "white",
                column: "Cardinal",
                blocks: [
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/vocabulary/numbers/cardinal/one.mp3",
                            part: "1 one",
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
                              "/assets/audio/vocabulary/numbers/cardinal/two.mp3",
                            part: "2 two",
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
                              "/assets/audio/vocabulary/numbers/cardinal/three.mp3",
                            part: "3 three",
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
                              "/assets/audio/vocabulary/numbers/cardinal/four.mp3",
                            part: "4 four",
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
                              "/assets/audio/vocabulary/numbers/cardinal/five.mp3",
                            part: "5 five",
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
                              "/assets/audio/vocabulary/numbers/cardinal/six.mp3",
                            part: "6 six",
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
                              "/assets/audio/vocabulary/numbers/cardinal/seven.mp3",
                            part: "7 seven",
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
                              "/assets/audio/vocabulary/numbers/cardinal/eight.mp3",
                            part: "8 eight",
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
                              "/assets/audio/vocabulary/numbers/cardinal/nine.mp3",
                            part: "9 nine",
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
                              "/assets/audio/vocabulary/numbers/cardinal/ten.mp3",
                            part: "10 ten",
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
                              "/assets/audio/vocabulary/numbers/cardinal/eleven.mp3",
                            part: "11 eleven",
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
                              "/assets/audio/vocabulary/numbers/cardinal/twelve.mp3",
                            part: "12 twelve",
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
                              "/assets/audio/vocabulary/numbers/cardinal/thirteen.mp3",
                            part: "13 thirteen",
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
                              "/assets/audio/vocabulary/numbers/cardinal/fourteen.mp3",
                            part: "14 fourteen",
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
                              "/assets/audio/vocabulary/numbers/cardinal/fifteen.mp3",
                            part: "15 fifteen",
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
                              "/assets/audio/vocabulary/numbers/cardinal/sixteen.mp3",
                            part: "16 sixteen",
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
                              "/assets/audio/vocabulary/numbers/cardinal/seventeen.mp3",
                            part: "17 seventeen",
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
                              "/assets/audio/vocabulary/numbers/cardinal/eighteen.mp3",
                            part: "18 eighteen",
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
                              "/assets/audio/vocabulary/numbers/cardinal/nineteen.mp3",
                            part: "19 nineteen",
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
                              "/assets/audio/vocabulary/numbers/cardinal/twenty1.mp3",
                            part: "20 twenty",
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
                              "/assets/audio/vocabulary/numbers/cardinal/twenty2.mp3",
                            part: "20 twenty *",
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
                              "/assets/audio/vocabulary/numbers/cardinal/twenty-one.mp3",
                            part: "21 twenty-one",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/cardinal/twenty-two.mp3",
                            part: "22 twenty-two",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/cardinal/twenty-three.mp3",
                            part: "23 twenty-three",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/cardinal/twenty-four.mp3",
                            part: "24 twenty-four",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/cardinal/twenty-five.mp3",
                            part: "25 twenty-five",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/cardinal/twenty-six.mp3",
                            part: "26 twenty-six",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/cardinal/twenty-seven.mp3",
                            part: "27 twenty-seven",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/cardinal/twenty-eight.mp3",
                            part: "28 twenty-eight",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/cardinal/twenty-nine.mp3",
                            part: "29 twenty-nine",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/cardinal/thirty.mp3",
                            part: "30 thirty",
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
                              "/assets/audio/vocabulary/numbers/cardinal/thirty-one.mp3",
                            part: "31 thirty-one",
                          },
                          " ",
                        ],
                      },
                    ],
                  },
                ],
              },

              // Ordinal
              {
                bgColor: "var(--gray-4)",
                textColor: "white",
                column: "Ordinal",
                blocks: [
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/vocabulary/numbers/ordinal/first.mp3",
                            part: "1st first",
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
                              "/assets/audio/vocabulary/numbers/ordinal/second.mp3",
                            part: "2nd second",
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
                              "/assets/audio/vocabulary/numbers/ordinal/third.mp3",
                            part: "3rd third",
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
                              "/assets/audio/vocabulary/numbers/ordinal/fourth.mp3",
                            part: "4th fourth",
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
                              "/assets/audio/vocabulary/numbers/ordinal/fifth.mp3",
                            part: "5th fifth",
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
                              "/assets/audio/vocabulary/numbers/ordinal/sixth.mp3",
                            part: "6th sixth",
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
                              "/assets/audio/vocabulary/numbers/ordinal/seventh.mp3",
                            part: "7th seventh",
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
                              "/assets/audio/vocabulary/numbers/ordinal/eighth.mp3",
                            part: "8th eighth",
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
                              "/assets/audio/vocabulary/numbers/ordinal/ninth.mp3",
                            part: "9th ninth",
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
                              "/assets/audio/vocabulary/numbers/ordinal/tenth.mp3",
                            part: "10th tenth",
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
                              "/assets/audio/vocabulary/numbers/ordinal/eleventh.mp3",
                            part: "11th eleventh",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/ordinal/twelfth.mp3",
                            part: "12th twelfth",
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
                              "/assets/audio/vocabulary/numbers/ordinal/thirteenth.mp3",
                            part: "13th thirteenth",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/ordinal/fourteenth.mp3",
                            part: "14th fourteenth",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/ordinal/fifteenth.mp3",
                            part: "15th fifteenth",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/ordinal/sixteenth.mp3",
                            part: "16th sixteenth",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/ordinal/seventeenth.mp3",
                            part: "17th seventeenth",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/ordinal/eighteenth.mp3",
                            part: "18th eighteenth",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/ordinal/nineteenth.mp3",
                            part: "19th nineteenth",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/ordinal/twentieth.mp3",
                            part: "20th twentieth",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/ordinal/twenty-first.mp3",
                            part: "21st twenty-first",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/ordinal/twenty-second.mp3",
                            part: "22nd twenty-second",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/ordinal/twenty-third.mp3",
                            part: "23rd twenty-third",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/ordinal/twenty-fourth.mp3",
                            part: "24th twenty-fourth",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/ordinal/twenty-fifth.mp3",
                            part: "25th twenty-fifth",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/ordinal/twenty-sixth.mp3",
                            part: "26th twenty-sixth",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/ordinal/twenty-seventh.mp3",
                            part: "27th twenty-seventh",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/ordinal/twenty-eighth.mp3",
                            part: "28th twenty-eighth",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/ordinal/twenty-ninth.mp3",
                            part: "29th twenty-ninth",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/ordinal/thirtieth.mp3",
                            part: "30th thirtieth",
                          },
                          " ",
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
                              "/assets/audio/vocabulary/numbers/ordinal/thirty-first.mp3",
                            part: "31st thirty-first",
                          },
                          " ",
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
              instructions: "1. Fill in the blanks with affirmative form.",
              blocks: [
                {
                  block: [
                    { text: "1" },
                    { blank: "one", placeholder: "one" },
                    { text: "1st" },
                    { blank: "first", placeholder: "first" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "2" },
                    { blank: "two", placeholder: "two" },
                    { text: "2nd" },
                    { blank: "second", placeholder: "second" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "3" },
                    { blank: "three" },
                    { text: "3rd" },
                    { blank: "third" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "4" },
                    { blank: "four" },
                    { text: "4th" },
                    { blank: "fourth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "5" },
                    { blank: "five" },
                    { text: "5th" },
                    { blank: "fifth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "6" },
                    { blank: "six" },
                    { text: "6th" },
                    { blank: "sixth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "7" },
                    { blank: "seven" },
                    { text: "7th" },
                    { blank: "seventh" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "8" },
                    { blank: "eight" },
                    { text: "8th" },
                    { blank: "eighth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "9" },
                    { blank: "nine" },
                    { text: "9th" },
                    { blank: "ninth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "10" },
                    { blank: "ten" },
                    { text: "10th" },
                    { blank: "tenth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "11" },
                    { blank: "eleven" },
                    { text: "11th" },
                    { blank: "eleventh" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "12" },
                    { blank: "twelve" },
                    { text: "12th" },
                    { blank: "twelfth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "13" },
                    { blank: "thirteen" },
                    { text: "13th" },
                    { blank: "thirteenth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "14" },
                    { blank: "fourteen" },
                    { text: "14th" },
                    { blank: "fourteenth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "15" },
                    { blank: "fifteen" },
                    { text: "15th" },
                    { blank: "fifteenth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "16" },
                    { blank: "sixteen" },
                    { text: "16th" },
                    { blank: "sixteenth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "17" },
                    { blank: "seventeen" },
                    { text: "17th" },
                    { blank: "seventeenth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "18" },
                    { blank: "eighteen" },
                    { text: "18th" },
                    { blank: "eighteenth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "19" },
                    { blank: "nineteen" },
                    { text: "19th" },
                    { blank: "nineteenth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "20" },
                    { blank: "twenty" },
                    { text: "20th" },
                    { blank: "twentieth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "21" },
                    { blank: "twenty-one" },
                    { text: "21st" },
                    { blank: "twenty-first" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "22" },
                    { blank: "twenty-two" },
                    { text: "22nd" },
                    { blank: "twenty-second" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "23" },
                    { blank: "twenty-three" },
                    { text: "23rd" },
                    { blank: "twenty-third" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "24" },
                    { blank: "twenty-four" },
                    { text: "24th" },
                    { blank: "twenty-fourth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "25" },
                    { blank: "twenty-five" },
                    { text: "25th" },
                    { blank: "twenty-fifth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "26" },
                    { blank: "twenty-six" },
                    { text: "26th" },
                    { blank: "twenty-sixth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "27" },
                    { blank: "twenty-seven" },
                    { text: "27th" },
                    { blank: "twenty-seventh" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "28" },
                    { blank: "twenty-eight" },
                    { text: "28th" },
                    { blank: "twenty-eighth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "29" },
                    { blank: "twenty-nine" },
                    { text: "29th" },
                    { blank: "twenty-ninth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "30" },
                    { blank: "thirty" },
                    { text: "30th" },
                    { blank: "thirtieth" },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "31" },
                    { blank: "thirty-one" },
                    { text: "31st" },
                    { blank: "thirty-first" },
                  ],
                  lineBreak: true,
                },
              ],
            }}
          />

          <Radio
            exercise={{
              instruction: "Choose the correct answer.",
              questions: [
                {
                  question: "1. What is the ordinal form of 23?",
                  options: [
                    { option: "twenty-three", isCorrect: false },
                    { option: "twenty-third", isCorrect: true },
                    { option: "twenty-thirdy", isCorrect: false },
                  ],
                },
                {
                  question:
                    "2. Eric’s birthday is on the 9th. How do we say 9th?",
                  options: [
                    { option: "nineth", isCorrect: false },
                    { option: "nine", isCorrect: false },
                    { option: "ninth", isCorrect: true },
                  ],
                },
                {
                  question: "3. What is the correct spelling of 12th?",
                  options: [
                    { option: "twelfth", isCorrect: true },
                    { option: "twelveth", isCorrect: false },
                    { option: "twelve", isCorrect: false },
                  ],
                },
                {
                  question: "4. Which is the correct form?",
                  options: [
                    { option: "twenty first", isCorrect: false },
                    { option: "twenty firth", isCorrect: false },
                    { option: "twenty-first", isCorrect: true },
                  ],
                },
                {
                  question: "5. Which sentence is correct?",
                  options: [
                    {
                      option: "My birthday is on the eleven.",
                      isCorrect: false,
                    },
                    {
                      option: "My birthday is on the eleventh.",
                      isCorrect: true,
                    },
                    {
                      option: "My birthday is in the eleventh.",
                      isCorrect: false,
                    },
                  ],
                },
              ],
            }}
          />

          <Radio
            exercise={{
              instruction: "Listen and choose the correct answer.",
              questions: [
                {
                  question: "1. Listen. What number do you hear?",
                  options: [
                    { option: "third", isCorrect: false },
                    { option: "thirteen", isCorrect: false },
                    { option: "thirty", isCorrect: true },
                  ],
                },
                {
                  question: "2. Listen. What date do you hear?",
                  options: [
                    { option: "the fifth", isCorrect: true },
                    { option: "the fifteen", isCorrect: false },
                    { option: "the fifty", isCorrect: false },
                  ],
                },
                {
                  question: "3. Listen. Which word do you hear?",
                  options: [
                    { option: "eighteen", isCorrect: false },
                    { option: "eighty", isCorrect: false },
                    { option: "eighth", isCorrect: true },
                  ],
                },
                {
                  question: "4. Listen. What ordinal number do you hear?",
                  options: [
                    { option: "twenty", isCorrect: false },
                    { option: "twentieth", isCorrect: true },
                    { option: "twenty-two", isCorrect: false },
                  ],
                },
                {
                  question: "5. Listen. Which sentence do you hear?",
                  options: [
                    {
                      option: "Her birthday is on the third.",
                      isCorrect: true,
                    },
                    { option: "Her birthday is on three.", isCorrect: false },
                    { option: "Her birthday is three.", isCorrect: false },
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
                        part: "Now talk about you.",
                        type: "bold",
                      },
                    ],
                  }
                ],
              },
            ]}
          />
          <List
            bullet={true}
            items={[
              {
                text: ["How old are you?"],
              },
                            {
                text: ["How old is your (dad, mom, brother, sister, etc.)?"],
              },
              {
                text: ["When is your birthday?"],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}
