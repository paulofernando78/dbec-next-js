import { Whiteboard } from "@/components/molecules/Whiteboard";
import { PageSections } from "@/components/molecules/PageSections";
import { Section } from "@/components/molecules/Section";
import { Line } from "@/components/molecules/Line";
import { LineBreak } from "@/components/atoms/LineBreak";
import { content, bold } from "@/helpers/content";

const accentSections = [
  {
    id: "final-r-er",
    label: "Final R / -er",
    examples: [
      {
        text: "This car is better.",
        usAudio:
          "/assets/audio/pronunciation/accents/us-this-car-is-better.mp3",
        ukAudio:
          "/assets/audio/pronunciation/accents/uk-this-car-is-better.mp3",
      },
      {
        text: "Work smarter, not harder.",
        usAudio:
          "/assets/audio/pronunciation/accents/us-work-smarter-not-harder.mp3",
        ukAudio:
          "/assets/audio/pronunciation/accents/uk-work-smarter-not-harder.mp3",
      },
      {
        text: "I parked the car near the garden.",
        usAudio:
          "/assets/audio/pronunciation/accents/us-i-parked-the-car-near-the-garden.mp3",
        ukAudio:
          "/assets/audio/pronunciation/accents/uk-i-parked-the-car-near-the-garden.mp3",
      },
    ],
  },
  {
    id: "ask-last-class",
    label: "Ask / Last / Class",
    examples: [
      {
        text: "Can I have a glass of water, please?",
        usAudio:
          "/assets/audio/pronunciation/accents/us-can-i-have-a-glass-of-water-please.mp3",
        ukAudio:
          "/assets/audio/pronunciation/accents/uk-can-i-have-a-glass-of-water-please.mp3",
      },
      {
        text: "Ask the last dancer to pass the glass.",
        usAudio:
          "/assets/audio/pronunciation/accents/us-ask-the-last-dancer-to-pass-the-glass.mp3",
        ukAudio:
          "/assets/audio/pronunciation/accents/uk-ask-the-last-dancer-to-pass-the-glass.mp3",
      },
      {
        text: "I can't dance after class.",
        usAudio:
          "/assets/audio/pronunciation/accents/us-i-cant-dance-after-class.mp3",
        ukAudio:
          "/assets/audio/pronunciation/accents/uk-i-cant-dance-after-class.mp3",
      },
    ],
  },
  {
    id: "t-sound",
    label: "T Sound",
    examples: [
      {
        text: "The bottle of water is on the table.",
        usAudio:
          "/assets/audio/pronunciation/accents/us-the-bottle-of-water-is-on-the-table.mp3",
        ukAudio:
          "/assets/audio/pronunciation/accents/uk-the-bottle-of-water-is-on-the-table.mp3",
      },
    ],
  },
  {
    id: "word-differences",
    label: "Word Differences",
    examples: [
      {
        text: "The tomato sauce is in the garage.",
        usAudio:
          "/assets/audio/pronunciation/accents/us-the-tomate-sauce-is-in-the-garage.mp3",
        ukAudio:
          "/assets/audio/pronunciation/accents/uk-the-tomate-sauce-is-in-the-garage.mp3",
      },
      {
        text: "What's your schedule for Tuesday?",
        usAudio:
          "/assets/audio/pronunciation/accents/us-whats-your-schedule-for-tuesday.mp3",
        ukAudio:
          "/assets/audio/pronunciation/accents/uk-whats-your-schedule-for-tuesday.mp3",
      },
    ],
  },
];

function AccentExample({ text, usAudio, ukAudio }) {
  return (
    <>
      <Line
        value={[
          ...content({
            icons: ["us"],
            audio: usAudio,
          }),
          ...content({
            icons: ["square"],
          }),
          ...content({
            icons: ["uk"],
            audio: ukAudio,
          }),
        ]}
      />
      <Line
        value={[
          ...content({
            parts: [text],
          }),
        ]}
      />
      <LineBreak />
    </>
  );
}

export default function Accents() {
  return (
    <>
      <Whiteboard title="Pronunciation" subtitle="Accents" />
      <div className="line-break">
        {/* Check out a couple of linked sounds. */}
        <Line
          value={[
            ...content({
              parts: [
                bold(
                  "Like in many languages, English can have different accents."
                ),
              ],
            }),
          ]}
        />

        <PageSections>
          {accentSections.map((section) => (
            <Section
              key={section.id}
              id={section.id}
              label={section.label}
              heading={3}
            >
              {section.examples.map((example) => (
                <AccentExample key={example.text} {...example} />
              ))}
            </Section>
          ))}
        </PageSections>
      </div>
    </>
  );
}
