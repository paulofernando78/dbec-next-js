import { Whiteboard } from "@/components/molecules/Whiteboard";
import { PageSections } from "@/components/molecules/PageSections";
import { Section } from "@/components/molecules/Section";
import { CardLayout } from "@/components/molecules/CardLayout";
import { Card } from "@/components/atoms/Card";
import { Image } from "@/components/atoms/Image";
import { Paragraph } from "@/components/molecules/Paragraph";
import { content } from "@/helpers/content";

export default function Introductions() {
  return (
    <>
      <Whiteboard
        title="B1 Intermediate"
        subtitle="Talk about health & lifestyle"
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

          <Section id="Presentation" label="Presentation" heading={3}></Section>
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
