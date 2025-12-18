import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Text } from "@/components/molecules/Text";

export default function SimplePresent() {
  return (
    <>
      <Whiteboard
      title="Pronunciation"
      subtitle="The Alphabet"
      />
      <div className="line-break">
        <Text underConstruction>Under Construction</Text>
      </div>
    </>
  );
}
