import { Whiteboard } from "@/components/molecules/Whiteboard";
import { TheAlphabet } from "@/components/organisms/TheAlphabet";
import { InlineText } from "@/components/molecules/InlineText";
import { List } from "@/components/molecules/List";
import { Card } from "@/components/molecules/Card";

export default function SimplePresent() {
  return (
    <>
      <Whiteboard title="Pronunciation" subtitle="The Alphabet" />
      <div className="line-break">
        <InlineText
          text={[
            {
              audio: "/audio/general/alphabet-26-letters.mp3",
              text: "There are 26 letters in the english alphabet.",
            },
          ]}
        />
        <TheAlphabet />
        <InlineText
          text={[
            {
              audio: "/audio/general/.mp3",
              text: "Answer these questions.",
              type: "",
            },
          ]}
        />
        
        <List
          bullet={true}
          items={[
            {
              text: [
                {
                  "audio": "/audio/general/spell-first-name..mp3",
                  "text": "How do you spell your first name?",
                },
              ],
            },
            {
              text: [
                {
                  "audio": "/audio/general/spell-last-name.mp3",
                  "text": "How do you spell your last name?",
                },
              ],
            },
            {
              text: [
                {
                  "audio": "/audio/general/spell-email-address.mp3",
                  "text": "How do you spell your email address?",
                },
              ],
            },
          ]}
        />
        <Card
          texts={[
            {
              text: [
                {
                  audio: "/audio/general/.mp3",
                  text: "“C” has the same sound as the verb “see” and the noun “sea”",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/audio/general/.mp3",
                  text: "“D” is pronounced differently from letter “G”",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/audio/general/.mp3",
                  text: "Number “eight” is pronounced differently from letter “H”",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/audio/general/.mp3",
                  text: "“T” has the same sound as in “tea”",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/audio/general/.mp3",
                  text: "“U” has the same sound as in “you”",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/audio/general/.mp3",
                  text: "“Z” in British is pronounced “zed”",
                },
              ],
            },
          ]}
          />
      </div>
    </>
  );
}
