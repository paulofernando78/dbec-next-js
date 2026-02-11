import { Whiteboard } from "@/components/molecules/Whiteboard";
import { LineBreak } from "@/components/atoms/LineBreak";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Line } from "@/components/molecules/Line";
import { Checklist } from "@/components/molecules/Checklist";
import { instruction } from "@/helpers/content";

export default function Blank() {
  return (
    <>
      <Whiteboard title="Games" subtitle="Minecraft" />
      <div className="line-break">
        <Contents items={[{ href: "basics", label: "Basics" }]} />
        <Section id="basics" label="Basics" heading={3}>
          <Line
            value={[
              ...instruction({
                parts: ["First things to do when game start:", { part: "", type: "" }],
                pt: "",
              }),
            ]}
          />
          <LineBreak />
          <Checklist items={[
            { item: "Punch tree" },
            { item: "Collect / Get / Gather logs" },
            { item: "Craft a wooden pickaxe" }
          ]}
            />
        </Section>
      </div>
    </>
  );
}
