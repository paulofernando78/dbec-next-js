import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Text } from "@/components/molecules/Text";
import { Ribbon } from "@/components/atoms/Ribbon";

export default function SimplePresent() {
  return (
    <>
      <Whiteboard
      title="Grammar"
      subtitle="Future Continuous / Progressive" />
      <div className="line-break">
        <Text underConstruction>Under Construction</Text>
      </div>
    </>
  );
}
