import { Text } from "@/components/molecules/Text";

export const Comparison = ({ groups = [] }) => {
  return (
    <>
      {groups.map((item, index) => (
        <div key={index}>
          {item.comparison.map((subItem, index) => (
            <Text playAudio={subItem.playAudio} key={index}>
              {subItem.word} <span className="phonetics">{subItem.phonetics}</span>{" "}
              <span class="portuguese">{subItem.translation}</span>
            </Text>
          ))}
        </div>
      ))}
    </>
  );
};
