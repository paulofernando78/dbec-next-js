import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Card } from "@/components/atoms/Card";
import { Paragraph } from "@/components/molecules/Paragraph";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { LineBreak } from "@/components/atoms/LineBreak";
import { content, bold, portuguese } from "@/helpers/content";

export const metadata = {
  title: "A1 Beginner | Audiobooks",
  description: "Beginner listening practice with short audiobooks.",
};

const books = [
  {
    title: "Chicken Run",
    level: "Beginner",
    audience: "Young learners / adults",
    audio: "/assets/audio/audiobooks/beginner/young-learners-adults/chicken-run/audio.mp3",
  },
  {
    title: "The Missing Coins",
    level: "Beginner",
    audience: "Young learners / adults",
    audio: "/assets/audio/audiobooks/beginner/young-learners-adults/the-missing-coins/audio.mp3",
  },
  {
    title: "Flying Home",
    level: "Starter",
    audience: "Young learners / adults",
    audio: "/assets/audio/audiobooks/starter/young-learners-adults/flying-home/audio.mp3",
  },
];

export default function A1Audiobooks() {
  return (
    <>
      <Whiteboard
        title="A1 Beginner"
        subtitle="Audiobooks"
        description="Short listening practice for beginner students."
      />

      <div className="line-break">
        <Card>
          <Paragraph
            value={[
              ...content({
                parts: [
                  "Use these audiobooks for extra listening practice. Listen once for general understanding, then listen again and write key words or short sentences you understand.",
                ],
              }),
            ]}
          />
          <Paragraph
            value={[
              ...content({
                parts: [
                  portuguese(
                    "Use estes audiobooks para prática extra de listening. Ouça uma vez para compreensão geral e depois ouça novamente para anotar palavras-chave ou frases curtas que você entender.",
                  ),
                ],
              }),
            ]}
          />
        </Card>

        <LineBreak />

        {books.map((book, index) => (
          <Card key={index}>
            <Paragraph
              value={[
                ...content({
                  parts: [
                    bold(book.title),
                    ` • ${book.level} • ${book.audience}`,
                  ],
                }),
              ]}
            />
            <AudioPlayer src={book.audio} />
          </Card>
        ))}
      </div>
    </>
  );
}
