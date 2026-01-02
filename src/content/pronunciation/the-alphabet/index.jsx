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
              audio: "/assets/audio/alphabet/26-letters.mp3",
              text: "There are 26 letters in the english alphabet.",
              type: "bold",
            },
          ]}
        />
        <TheAlphabet />
        <InlineText
          text={[
            {
              audio: "/assets/audio/general/answer-these-questions.mp3",
              text: "Answer these questions.",
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
                  audio: "/assets/audio/alphabet/first-name.mp3",
                  text: "How do you spell your first name?",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/assets/audio/alphabet/last-name.mp3",
                  text: "How do you spell your last name?",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/assets/audio/alphabet/email-address.mp3",
                  text: "How do you spell your email address?",
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
                  audio: "/assets/audio/alphabet/letter-c.mp3",
                  text: "“C” has the same sound as the verb “see” and the noun “sea.”",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/assets/audio/alphabet/letter-d.mp3",
                  text: "“D” is pronounced differently from letter “G.”",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/assets/audio/alphabet/number-eight.mp3",
                  text: "Number “eight” is pronounced differently from letter “H.”",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/assets/audio/alphabet/letter-t.mp3",
                  text: "“T” has the same sound as in “tea.”",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/assets/audio/alphabet/letter-u.mp3",
                  text: "“U” has the same sound as in “you.”",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/assets/audio/alphabet/letter-z.mp3",
                  text: "“Z” in British is pronounced “zed.”",
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
}
