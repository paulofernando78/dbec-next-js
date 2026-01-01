import { Audio } from "@/components/atoms/Audio";
import { Phonetics } from "@/components/atoms/Phonetics";
import { Portuguese } from "@/components/atoms/Portuguese";

export const Comparison = ({ groups = [] }) => {
  return (
    <>
      {Array.isArray(groups) &&
        groups.map((item, index) => (
          <div key={index}>
            {item.group.map((subItem, index) => (
              <p key={index}>
                <Audio src={subItem.audio} />
                {subItem.word} <Phonetics>{subItem.phonetics}</Phonetics>{" "}
                <Portuguese>{subItem.portuguese}</Portuguese>
              </p>
            ))}
          </div>
        ))}
    </>
  );
};
