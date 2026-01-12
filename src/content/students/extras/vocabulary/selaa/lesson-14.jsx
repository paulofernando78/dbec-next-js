import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dictionary } from "@/components/molecules/Dictionary";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { Ribbon } from "@/components/atoms/Ribbon";

export default function SELAAlessonFourteen() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Vocabulary"
        book="Speak English like an American"
        lesson="Lesson 14 • Amber and Ted Heat Up the Kitchen"
      />
      <div className="line-break">
        <div className="dictionary-area">
          <Dictionary />
        </div>
        <Dialogue
          title="Lesson 14 • Amber and Ted Heat Up the Kitchen"
          audioPlayer="/assets/audio/vocabulary/selaa/lesson-14.mp3"
          lines={[
            {
              text: [
                {
                  part: "",
                  type: "italic",
                },
              ],
            },
            {
              speaker: "xxx:",
              text: [
                "",
                {
                  audio: "/audio/general/.mp3",
                  part: "",
                  type: "",
                },
                "",
              ],
            },
          ]}
        />
        <Ribbon label="Exercises" />
        <Radio
          exercise={{
            instruction: "Choose the best response.",
            questions: [
              {
                question:
                  "1. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
              {
                question:
                  "2. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
              {
                question:
                  "3. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
              {
                question: "4. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
              {
                question:
                  "5. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
              {
                question:
                  "6. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
              {
                question:
                  "7. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
              {
                question:
                  "8. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
            ],
          }}
        />
      </div>
    </>
  );
}
