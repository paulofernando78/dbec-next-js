import styles from "./List.module.css";

import { InlineText } from "@/components/molecules/InlineText";

export const List = ({ items = [], bullet = true, lineBreak }) => {
  return (
    <ul className={bullet ? styles.bulleted : styles.noBullet}>
      {items.map((item, index) => (
        <li key={index} className={item.lineBreak ? "line-break-item" : ""}>
          <InlineText
            text={item.text}
          /> 
        </li>
      ))}
    </ul>
  );
};
