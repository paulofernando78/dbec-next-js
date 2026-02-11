import { Whiteboard } from "@/components/molecules/Whiteboard";
import { LineBreak } from "@/components/atoms/LineBreak";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Line } from "@/components/molecules/Line";
import { Examples } from "@/components/molecules/Examples";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";
import { note, example } from "@/helpers/content";

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
              ...note({
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
