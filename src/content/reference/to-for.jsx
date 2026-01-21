import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";

export default function toFOR() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="To vs. For" />
      <div className="line-break">
        <Contents
          items={[
            { href: "introduction", label: "Introduction" },
            { href: "presentation", label: "Presentation" },
            { href: "meaning", label: "Meaning" },
            { href: "practice", label: "Practice" },
            { href: "production", label: "Production" },
          ]}
        />
        <Section id="Introduction" label="Introduction" heading={3}></Section>
        <Section id="Presentation" label="Presentation" heading={3}></Section>
        <Section id="Meaning" label="Meaning" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        part: "to = opnion",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: ["It seems important to me."],
                  },
                  {
                    text: ["It looks attractive to me."],
                  },
                  {
                    text: ["It feels bad to me."],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        part: "for = benefit",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: ["Eating vegetables is good for me/everybody."],
                  },
                  {
                    text: [
                      "Practice regular exercise is good for me/everybody.",
                    ],
                  },
                  {
                    text: ["Smoking is bad for everybody."],
                  },
                  {
                    text: ["This tool is useful for me."],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="Practice" label="Practice" heading={3}></Section>
        <Section id="Production" label="Production" heading={3}></Section>
      </div>
    </>
  );
}
