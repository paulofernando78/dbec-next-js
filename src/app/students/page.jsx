import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Links } from "@/components/molecules/Links";

export default function Students() {
  return (
    <>
      <Whiteboard title="Student's Area" />
      <div className="line-break">
        <Links
          groups={[
            {
              title: "Audiobooks",
              items: [
                {
                  href: "/students/extras/audiobooks/starter",
                  label: "Starter",
                },
                {
                  href: "/students/extras/audiobooks/beginner",
                  label: "Beginner",
                },
                {
                  href: "/students/extras/audiobooks/elementary",
                  label: "Elementary",
                },
                {
                  href: "/students/extras/audiobooks/Pre-Intermediate",
                  label: "Pre-Intermediate",
                },
                {
                  href: "/students/extras/audiobooks/Intermediate",
                  label: "Intermediate",
                },
              ],
            },
            {
              title: "Vocabulary",
              items: [
                {
                  href: "/students/extras/vocabulary/selaa",
                  label: "Speak English like an American",
                },
                // {
                //   href: "/students/extras/vocabulary/sbelaa",
                //   label: "Speak Business English like an American",
                // },
              ],
            },
          ]}
        />
      </div>
    </>
  );
}
