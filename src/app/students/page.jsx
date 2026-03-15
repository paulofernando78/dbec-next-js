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
