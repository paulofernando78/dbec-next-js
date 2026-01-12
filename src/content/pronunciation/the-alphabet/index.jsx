import { Whiteboard } from "@/components/molecules/Whiteboard";
import { TheAlphabet } from "@/components/organisms/TheAlphabet";
import { InlineText } from "@/components/molecules/InlineText";
import { List } from "@/components/molecules/List";
import { Note } from "@/components/molecules/Note";

export default function TheAlphabetPage() {
  return (
    <>
      <Whiteboard title="Pronunciation" subtitle="The Alphabet" />
      <div className="line-break">
        <InlineText
          text={[
            {
              audio: "/assets/audio/pronunciation/the-alphabet/26-letters.mp3",
              part: "There are 26 letters in the english alphabet.",
              type: "bold",
            },
          ]}
        />
        <TheAlphabet />
        <InlineText
          text={[
            {
              audio: "/assets/audio/general/answer-these-questions.mp3",
              part: "Answer these questions.",
              type: "bold",
            },
          ]}
        />

        <List
          bullet={false}
          items={[
            {
              text: [
                {
                  audio: "/assets/audio/pronunciation/the-alphabet/first-name.mp3",
                  part: "How do you spell your first name?",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/assets/audio/pronunciation/the-alphabet/last-name.mp3",
                  part: "How do you spell your last name?",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/assets/audio/pronunciation/the-alphabet/email-address.mp3",
                  part: "How do you spell your email address?",
                },
              ],
            },
          ]}
        />
        <Note
          items={[
            {
              text: [
                {
                  audio: "/assets/audio/pronunciation/the-alphabet/letter-c.mp3",
                  part: "“C” has the same sound as the verb “see” and the noun “sea.”",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/assets/audio/pronunciation/the-alphabet/letter-d.mp3",
                  part: "“D” is pronounced differently from letter “G.”",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/assets/audio/pronunciation/the-alphabet/number-eight.mp3",
                  part: "Number “eight” is pronounced differently from letter “H.”",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/assets/audio/pronunciation/the-alphabet/letter-t.mp3",
                  part: "“T” has the same sound as in “tea.”",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/assets/audio/pronunciation/the-alphabet/letter-u.mp3",
                  part: "“U” has the same sound as in “you.”",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/assets/audio/pronunciation/the-alphabet/letter-z.mp3",
                  part: "“Z” in British is pronounced “zed.”",
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
}
