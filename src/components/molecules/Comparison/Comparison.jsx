import { Audio } from "@/components/atoms/Audio";
import { Phonetics } from "@/components/atoms/Phonetics";
import { Portuguese } from "@/components/atoms/Portuguese";

export const Comparison = ({ groups = [] }) => {
  if (!Array.isArray(groups) || !groups.length) return null;

  return (
    <>
      {groups.map((item, index) => {
        if (!Array.isArray(item.group)) return null;

        return (
          <div key={index} class>
            {item.group.map((subItem, subIndex) => (
              <p key={subIndex}>
                {subItem.audio && <Audio src={subItem.audio} />}
                {subItem.word}{" "}
                {subItem.phonetics && (
                  <Phonetics>{subItem.phonetics}</Phonetics>
                )}{" "}
                {subItem.portuguese && (
                  <Portuguese>{subItem.portuguese}</Portuguese>
                )}
              </p>
            ))}
          </div>
        );
      })}
    </>
  );
};
