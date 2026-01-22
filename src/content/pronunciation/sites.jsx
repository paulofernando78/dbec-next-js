import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Links } from "@/components/molecules/Links";

export default function LikedSounds() {
  return (
    <>
      <Whiteboard title="Pronunciation" subtitle="Sites" />
      <Links
        groups={[
          {
            title: "Group title",
            items: [
              {
                href: "https://youglish.com/",
                label: "Youglish (Search words directly from Youtube)",
              },
              {
                href: "https://www.playphrase.me/",
                label: "Play Phrase Me (Word / Phrases from movies)",
              },
              {
                href: "https://www.languagereactor.com/",
                label: "Language Rector (An extesion for Youtube, etc.)",
              },
            ],
          }
        ]}
      />
    </>
  );
}
