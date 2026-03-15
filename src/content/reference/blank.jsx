import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dictionary } from "@/components/molecules/Dictionary";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { CardLayout } from "@/components/molecules/CardLayout";
import { Links } from "@/components/molecules/Links";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { Line } from "@/components/molecules/Line";
import { List } from "@/components/molecules/List";
import { CardText } from "@/components/molecules/CardText";
import { Image } from "@/components/atoms/Image";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Comparison } from "@/components/molecules/Comparison/";
import { Column } from "@/components/molecules/Column/";
import { Notes } from "@/components/molecules/Notes";
import { Examples } from "@/components/molecules/Examples";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";
import { LineBreak } from "@/components/atoms/LineBreak";
import {
  content,
  audio,
  bold,
  italic,
  mark,
  underline,
  boldMark,
  phonetics,
  portuguese,
  example,
} from "@/helpers/content";

export default function Blank() {
  return (
    <>
      <Whiteboard title="Reference" subtitle="blank" />
      <div className="line-break">
        <Contents
          items={[
            { href: "...", label: "..." },
            { href: "exerises", label: "Exercises" },
          ]}
        />
        <Section id="..." label="..." heading={3}>
          <Line
            value={[
              ...content({
                audio: "/assets/audio/general/.mp3",
                parts: ["", { part: "", type: "" }],
                pt: "",
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              // • Example sentence
              example({
                audio: "/assets/audio/general/.mp3",
                parts: ["", { part: "", type: "" }],
                englishExample: "",
                portugueseExample: "",
              }),
            ]}
          />
        </Section>

        <Section id="exercises" label="Exercises" heading={3}>
          <Radio
            exercise={{
              instruction: "Answer the questions. / Choose the best response.",
              questions: [
                {
                  question: "1. Question",
                  options: [
                    { option: "option 1", isCorrect: true },
                    { option: "option 2", isCorrect: false },
                    { option: "option 3", isCorrect: false },
                  ],
                },
              ],
            }}
          />
          <LineBreak />
          <FillInTheBlanks
            exercise={{
              instructions: "1. Fill in the blanks with the correct answer.",
              blocks: [
                {
                  block: [{ text: "..." }, { blank: "..." }, { text: "..." }],
                },
                {
                  lineBreak: true,
                },
              ],
            }}
          />
        </Section>
      </div>
    </>
  );
}
