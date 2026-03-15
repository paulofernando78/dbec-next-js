import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dictionary } from "@/components/molecules/Dictionary";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { CardLayout } from "@/components/molecules/CardLayout";
import { Card } from "@/components/atoms/Card";
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
} from "@/helpers/content";

export default function Introductions() {
  return (
    <>
      <Whiteboard
        title="A1 Beginner"
        subtitle="Introductions"
        descriptions={["Hello, I’m Laura. I’m 23. How do you spell your name?"]}
      />

      <div className="line-break">
        <Card>By the end of this class, students will ...</Card>
        <Contents
          items={[
            { href: "introduction", label: "Introduction" },
            { href: "presentation", label: "Presentation" },
            { href: "meaning", label: "Meaning" },
            { href: "pronunciation-form", label: "Pronunciation + Form" },
            { href: "practice", label: "Practice" },
            { href: "production", label: "Production" },
          ]}
        />
        <Section id="Introduction" label="Introduction" heading={3}>
          <CardLayout>
            <Image src="/assets/img/general/cat-1.jpg" alt="cat" width={200} />
            <Paragraph
              value={[
                ...content({
                  parts: ["..."],
                }),
              ]}
            />
          </CardLayout>
        </Section>
        <Section id="Presentation" label="Presentation" heading={3}></Section>
        <Section id="Meaning" label="Meaning" heading={3}></Section>
        <Section
          id="Pronunciation-form"
          label="Pronunciation + Form"
          heading={3}
        ></Section>
        <Section id="Practice" label="Practice" heading={3}></Section>
        <Section id="Production" label="Production" heading={3}></Section>
      </div>
    </>
  );
}
