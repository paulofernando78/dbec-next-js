import styles from "./List.module.css";

import { ContentToken } from "@/components/molecules/ContentToken";

export const List = ({ items = [], bullet = true, lineBreak }) => {
  return (
    <ul className={bullet ? styles.bulleted : styles.noBullet}>
      {items.map((item, index) => (
        <li key={index} className={item.lineBreak ? "line-break-item" : ""}>
          <ContentToken
            text={item.text}
          /> 
        </li>
      ))}
    </ul>
  );
};
