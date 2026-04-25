import { Whiteboard } from "@/components/molecules/Whiteboard";
import { LineBreak } from "@/components/atoms/LineBreak";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Line } from "@/components/molecules/Line";
import { Checklist } from "@/components/molecules/Checklist";
import { attention } from "@/helpers/content";

export default function Blank() {
  return (
    <>
      <Whiteboard title="Games" subtitle="blank" />
      <div className="line-break">
        <Contents items={[{ href: "...", label: "..." }]} />
        <Section id="..." label="..." heading={3}>
          <Line
            value={[
              ...attention({
                audio: "/assets/audio/words/.mp3",
                parts: ["", { part: "", type: "" }],
                pt: "",
              }),
            ]}
          />
          <LineBreak />
          <Checklist
            items={[{ item: "item 1" }, { item: "item 2" }, { item: "item 3" }]}
          />
        </Section>
      </div>
    </>
  );
}
