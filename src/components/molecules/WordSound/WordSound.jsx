import { Text } from "@/components/molecules/Text";

export const WordSound = ({ wordSound = [] }) => {
  return (
    <>
      {wordSound.map((item, index) => (
        <div key={index}>
          {item.comparison.map((item, index) => (
            <Text playAudio={item.playAudio} key={index}>
              {item.word} <span className="phonetics">{item.phonetics}</span>{" "}
              <span class="portuguese">{item.translation}</span>
            </Text>
          ))}
        </div>
      ))}
    </>
  );
};
