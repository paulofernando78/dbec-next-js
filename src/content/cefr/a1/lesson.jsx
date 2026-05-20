import { Whiteboard } from "@/components/molecules/Whiteboard";
import { LessonObjective } from "@/components/molecules/LessonObjective";
import { PageSections } from "@/components/molecules/PageSections";
import { Section } from "@/components/molecules/Section";
import { Ribbon } from "@/components/atoms/Ribbon";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { Audio } from "@/components/atoms/Audio";
import { Line } from "@/components/molecules/Line";
import { List } from "@/components/molecules/List";
import { MediaWrapper } from "@/components/molecules/MediaWrapper";
import { Card } from "@/components/atoms/Card";
import { DialogueLesson } from "@/components/molecules/DialogueLesson";
import { TheAlphabet } from "@/components/lessons/TheAlphabet";
import { Column } from "@/components/molecules/Column/";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";
import { Guess } from "@/components/molecules/Exercises/Guess";
import { LineBreak } from "@/components/atoms/LineBreak";
import {
  content,
  icon,
  audio,
  bold,
  italic,
  underline,
  portuguese,
} from "@/helpers/content";

import { introduction } from "./lesson/introduction";
import { dialogue } from "./lesson/presentation";
import { languageFocus } from "./lesson/languageFocus";
import { practice } from "./lesson/practice";
import { production } from "./lesson/production";

export const metadata = {
  title: "A1 Beginner | Introductions",
  description: "Basic greetings and personal introductions.",
};

export default function Introductions() {
  return (
    <>
      <Whiteboard
        title="Lesson"
        subtitle="..."
        description="..."
      />

      <div className="line-break">
        <LessonObjective>
          By the end of this class, students will be able to...
        </LessonObjective>

        <PageSections>
          <Section id="introduction" heading={3}>
            <MediaWrapper
              mediaPosition={introduction.mediaPosition}
              imgSrc={introduction.imgSrc}
              imgAlt={introduction.imgAlt}
              ratio={introduction.ratio}
              instruction={introduction.instruction}
              tagAs={introduction.tagAs}
              lines={introduction.phrases}
            />
            <LineBreak />
            <Radio exercise={introduction.questions} />
          </Section>

          <Section id="presentation" heading={3}>
            <LineBreak />
            <DialogueLesson
              imgSrc={dialogue.imgSrc}
              imgAlt={dialogue.imgAlt}
              description={dialogue.description}
              audioPlayer="/assets/audio/cefr/a1/introductions/presentation.mp3"
              lines={dialogue.lines.map((item) => ({
                speaker: item.speaker,
                line: item.text,
              }))}
            />
          </Section>

          <Section id="language-focus" heading={3}>
            <LineBreak />
            <Ribbon label="..." bgColor="var(--slate-7)" />
          </Section>

          <Section id="practice" heading={3}>
            <Radio
              exercise={{
                questions: practice.radio,
              }}
            />
            <LineBreak />
            <FillInTheBlanks
              exercise={practice.fillInTheBlanks}
            />
            <LineBreak />
            <FillInTheBlanks
              exercise={practice.unscrambleSentences}
            />
            <LineBreak />
            <Guess
              words={practice.guess}
            />
          </Section>

          <Section id="production" heading={3}>
            <Line value={production.instruction} />
            <List ordered items={production.steps} />
          </Section>
        </PageSections>
      </div>
    </>
  );
}
