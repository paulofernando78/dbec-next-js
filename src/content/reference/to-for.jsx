import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
export default function toFOR() {
  return <>
      <Whiteboard title="Vocabulary" subtitle="To vs. For" />
      <div className="line-break">
        <Paragraph value={[{
        part: "to = opnion",
        type: "bold"
      }, {
        lineBreak: true
      }, "It seems important to me.", {
        lineBreak: true
      }, "It looks attractive to me.", {
        lineBreak: true
      }, "It feels bad to me.", {
        lineBreak: true
      }, {
        lineBreak: true
      }, {
        lineBreak: true
      }, {
        part: "for = benefit",
        type: "bold"
      }, {
        lineBreak: true
      }, "Eating vegetables is good for me/everybody.", {
        lineBreak: true
      }, "Practice regular exercise is good for me/everybody.", {
        lineBreak: true
      }, "Smoking is bad for everybody.", {
        lineBreak: true
      }, "This tool is useful for me."]} />
      </div>
    </>;
}