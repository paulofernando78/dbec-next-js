import { Whiteboard } from "@/components/molecules/Whiteboard";
import { PageSections } from "@/components/molecules/PageSections";
import { Section } from "@/components/molecules/Section";
import { Line } from "@/components/molecules/Line";
import { List } from "@/components/molecules/List";
import { CardLayout } from "@/components/molecules/CardLayout";
import { Card } from "@/components/atoms/Card";
import { Image } from "@/components/atoms/Image";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Checking } from "@/components/molecules/Checking/";
import { Column } from "@/components/molecules/Column/";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";
import { LineBreak } from "@/components/atoms/LineBreak";
import { content, bold } from "@/helpers/content";
export default function Introductions() {
  return (
    <>
      <Whiteboard
        title="A2 Elementary"
        subtitle="Talk about your future plans"
        descriptions={["..."]}
      />

      <div className="line-break">
        <Card>By the end of this class, students will ...</Card>

        <PageSections>
          <Section id="Introduction" label="Introduction" heading={3}>
            <CardLayout>
              <Image
                src="/"
                alt="..."
                width={200}
              />
              <Paragraph
                value={[
                  ...content({
                    parts: ["..."],
                  }),
                ]}
              />
            </CardLayout>
          </Section>

          <Section id="Presentation" label="Presentation" heading={3}>
            <Dialogue
              description="Description"
              audioPlayer="/assets/audio/vocabulary/selaa/lesson-1.mp3"
              lines={[
                {
                  speaker: "speaker:",
                  audio: "/",
                  text: [
                    ...content({
                      parts: [
                        "normal ",
                      ],
                    }),
                  ],
                },
                {
                  speaker: "speaker:",
                  audio: "/",
                  text: [
                    ...content({
                      parts: [
                        "normal ",
                      ],
                    }),
                  ],
                },
                {
                  speaker: "speaker:",
                  audio: "/",
                  text: [
                    ...content({
                      parts: [
                        "normal ",
                      ],
                    }),
                  ],
                },
              ]}
            />
          </Section>
          <Section id="Meaning" label="Meaning" heading={3}></Section>
          <Section
            id="Pronunciation-form"
            label="Pronunciation + Form"
            heading={3}
          ></Section>
          <Section id="Practice" label="Practice" heading={3}></Section>
          <Section id="Production" label="Production" heading={3}></Section>
        </PageSections>
      </div>
    </>
  );
}
