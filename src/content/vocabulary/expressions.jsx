import { Whiteboard } from "@/components/molecules/Whiteboard";
import { List } from "@/components/molecules/List";
import { InlineText } from "@/components/molecules/InlineText";

export default function Expressions() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="Expressions" />
      <div className="line-break">
        <InlineText
          text={[
            {
              type: "bold",
              text: "Common expressions:",
            },
          ]}
        />
        <List
          items={[
            { text: ["all of a sudden"] },
            { text: ["every now and then"] },
            { text: ["every other day"] },
            { text: ["at the end of the day"] },
            { text: ["as soon as possible"] },
            { text: ["by the way"] },
            { text: ["in the long run"] },
            { text: ["on the other hand"] },
            { text: ["once in a while"] },
            { text: ["right away"] },
            { text: ["so far"] },
            { text: ["from time to time"] },
            { text: ["no matter what"] },
            { text: ["in a nutshell"] },
            { text: ["for the time being"] },
            { text: ["in my opinion"] },
            { text: ["as a matter of fact"] },
            { text: ["to be honest"] },
            { text: ["at first"] },
            { text: ["in the meantime"] },
          ]}
        />
      </div>
    </>
  );
}
