import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Card } from "@/components/atoms/Card";

export default function TalkAboutYourself() {
  return (
    <>
      <Whiteboard
        title="A1 Beginner"
        subtitle="Talk about your yourself"
      />
      <div className="line-break">
        <Card>
          By the end of this class, students will ...
        </Card>
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
        <Section id="Introduction" label="Introduction" heading={3}></Section>
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
