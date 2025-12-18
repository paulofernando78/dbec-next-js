import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Ribbon } from "@/components/atoms/Ribbon";
import { Card } from "@/components/atoms/Card";
import { Text } from "@/components/molecules/Text";
import { Comparison } from "../../components/molecules/Comparison/Comparison";
import { AudioPlayer } from "@/components/atoms/AudioPlayer/AudioPlayer";

const words = [
 {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "Example 1",
        phonetics: "/.../",
        translation: "...",
      },
      {
        playAudio: "/....mp3",
        word: "Example 2",
        phonetics: "/.../",
        translation: "...",
      },
    ],
  },
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "Example 1",
        phonetics: "/.../",
        translation: "...",
      },
      {
        playAudio: "/....mp3",
        word: "Example 2",
        phonetics: "/.../",
        translation: "...",
      },
    ],
  },
];

export default function Mock() {
  return (
    <>
      <Whiteboard
        title="Title (Mock)"
        subtitle="Subtitle"
        description="Description"
      />
      <div className="line-break">
        <Text>
          <span className="red-5 bold italic underlined">Lorem</span> ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Text>
        <Ribbon label="CARD" />
        <Card>Lorem ipsum dolor sit amet, consectetur...</Card>
        <Ribbon label="Text" />
        <AudioPlayer audioSrc="/audio/audiobooks/starter/a-new-zealand-adventure/auckland.mp3" />
        <Text
          imgSrc="/img/paragraph-1.avif"
          imgAlt="Text pic 1"
          imgPosition="left"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Ribbon label="Word Sound" />
        <Comparison groups={words} />
      </div>
    </>
  );
}
