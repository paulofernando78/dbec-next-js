import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Section } from "@/components/molecules/Section";

export default function WhichOne() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="Which one?" />
      <div className="line-break">
        <Section label="say / speak / tell" heading={3}>
          <Paragraph
            blocks={[
              // say
              {
                lines: [
                  {
                    text: [
                      {
                        part: "say",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: ["Focus: the words / message itself (what you say)"],
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/say-1.mp3",
                      },
                      "She said she was tired.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Ela disse que estava cansada.",
                        type: "portuguese",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/say-2.mp3",
                      },
                      "I want to say something.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Eu quero dizer algo.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
              // speak
              {
                lines: [
                  {
                    text: [
                      {
                        part: "speak",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: ["Focus: the action of talking / language ability"],
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/speak-1.mp3",
                      },
                      "He speaks three languages.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Ele fala três idiomas.",
                        type: "portuguese",
                      },
                      "",
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/speak-2.mp3",
                      },
                      "Can I speak to you for a moment?",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Posso falar com você por um momento?",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
              // tell
              {
                lines: [
                  {
                    text: [
                      {
                        part: "tell",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: [
                      "Focus: the listener / who receives the information",
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/tell-1.mp3",
                      },
                      "She told me the truth.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Ela me contou a verdade.",
                        type: "portuguese",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/tell-2.mp3",
                      },
                      "Tell him I’ll be late.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Diga a ele que vou me atrasar.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}
