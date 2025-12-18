import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Text } from "@/components/molecules/Text";

export default function SimplePresent() {
  return (
    <>
      <Whiteboard
      title="Grammar"
      subtitle="Conditionals"
      />
      <div className="line-break">
        <Text underConstruction>Under Construction</Text>
      </div>
    </>
  );
}
