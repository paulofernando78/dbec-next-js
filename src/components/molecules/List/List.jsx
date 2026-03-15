import styles from "./List.module.css";

import { ContentToken } from "@/components/molecules/ContentToken";
import { normalizeListItemValue } from "@/utils/contentAdapters";

export const List = ({ items = [], bullet = true }) => {
  return (
    <ul className={bullet ? styles.bulleted : styles.noBullet}>
      {items.map((item, index) => (
        <li key={index} className={item.lineBreak ? "line-break-item" : ""}>
          <ContentToken value={normalizeListItemValue(item)} /> 
        </li>
      ))}
    </ul>
  );
};
