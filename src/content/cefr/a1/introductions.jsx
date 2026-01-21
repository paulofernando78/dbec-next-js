import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { InlineText } from "@/components/molecules/InlineText";
import { Paragraph } from "@/components/molecules/Paragraph";

export default function Introductions() {
  return (
    <>
      <Whiteboard
        title="Vocabulary"
        subtitle="Introductions"
        descriptions={["Hello, I’m Laura. I’m 23. How do you spell your name?"]}
      />

      <div className="line-break">
        <Paragraph
          blocks={[
            {
              lines: [
                {
                  text: [" "],
                },
              ],
            },
          ]}
        />
        By the end of this class, students will ... • Alphabet • Verb Be •
        Subject Pronouns • Numbers (0–20)
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
