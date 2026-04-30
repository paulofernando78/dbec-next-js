import styles from "./List.module.css";

import { ContentToken } from "@/components/molecules/ContentToken";

export const List = ({ items = [], ordered = false }) => {
  const Tag = ordered ? "ol" : "ul"
  return (
    <Tag className={ordered ? styles.ordered : styles.bulleted}>
      {items.map((item, index) => (
        <li key={index} className={item.lineBreak ? "line-break-item" : ""}>
          <ContentToken value={item.value} />
        </li>
      ))}
    </Tag>
  );
};
