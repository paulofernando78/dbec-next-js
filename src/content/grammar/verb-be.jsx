import Whiteboard from "@/components/molecules/Whiteboard";
import Text from "@/components/molecules/Text";

export default function VerbBe() {
  return (
    <>
      <Whiteboard
        title="Grammar"
        subtitle="Verb Be"
      />
      <Text> I <span className="bold">am</span> Paulo. My name <span className="bold">is</span> Paulo.</Text>
      <Text> I <span className="bold">am</span> the teacher. You are the student.</Text>
      <Text>He <span className="bold">is</span> Mike. He is a doctor.</Text>
      <Text>She <span className="bold">is</span> a photographer.</Text>
      <Text>It <span className="bold">is</span> cat. Her name is Cora.</Text>
      <Text>You <span className="bold">are</span> students.</Text>
      <Text>They <span className="bold">are</span> teachers.</Text>
    </>
  )
}