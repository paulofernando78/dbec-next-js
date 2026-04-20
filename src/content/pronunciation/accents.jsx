import { Whiteboard } from "@/components/molecules/Whiteboard";
import { PageSections } from "@/components/molecules/PageSections";
import { Section } from "@/components/molecules/Section";
import { Line } from "@/components/molecules/Line";
import { LineBreak } from "@/components/atoms/LineBreak";
import {
  icons,
  content,
  audio,
  bold,
  underline,
  portuguese,
  phonetics,
  us,
  uk,
} from "@/helpers/content";

export default function Accents() {
  return (
    <>
      <Whiteboard title="Pronunciation" subtitle="Accents" />
      <div className="line-break">
        {/* Check out a couple of linked sounds. */}
        <Line
          value={[
            ...content({
              parts: [bold("Listen to different accents.")],
            }),
          ]}
        />

        <PageSections>
          <Section id="r" label="r" heading={3}>
            {/* /w/ */}
            <Line
              value={[
                ...content({
                  icons: ["us"],
                  audio: "/assets/audio/pronunciation/accents/us-work-smarter-not-harder.mp3",
                }),
                ...content({
                  icons: ["uk"],
                  audio: "/assets/audio/pronunciation/accents/uk-work-smarter-not-harder.mp3",
                  parts: ["Work smarter, not harder"],
                }),
              ]}
            />
          </Section>
        </PageSections>
      </div>
    </>
  );
}
