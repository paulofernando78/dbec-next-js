import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Ribbon } from "@/components/atoms/Ribbon";
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
                {
                  href: "/students/extras/vocabulary/selaa",
                  label: "Speak Business English like an American",
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
}
