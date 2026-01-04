import { Audio } from "@/components/atoms/Audio";
import { Phonetics } from "@/components/atoms/Phonetics";
import { Portuguese } from "@/components/atoms/Portuguese";

export const Comparison = ({ groups = [] }) => {
  if (!Array.isArray(groups) || !groups.length) return null;

  return (
    <>
      {groups
        .filter((item) => Array.isArray(item.group) && item.group.length)
        .map((item, index) => (
          <div key={index}>
            {item.group.map((subItem, subIndex) => (
              <p key={subIndex}>
                {subItem.audio && <Audio src={subItem.audio} />}
                {subItem.word && <span>{subItem.word} </span>}
                {subItem.phonetics && (
                  <Phonetics>{subItem.phonetics}</Phonetics>
                )}{" "}
                {subItem.portuguese && (
                  <Portuguese>{subItem.portuguese}</Portuguese>
                )}
              </p>
            ))}
          </div>
        ))}
    </>
  );
};
