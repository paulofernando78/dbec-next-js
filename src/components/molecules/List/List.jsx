import styles from "./List.module.css"

import { InlineText} from "@/components/molecules/InlineText"

export const List = ({ items = [], bullet = true }) => {
  return (
    <ul className={bullet ? styles.bulleted : styles.noBullet}>
      {items.map((item, index) => (
        <li key={index}>
          <InlineText text={item.text}/>
        </li>
      ))}
    </ul>
  );
};
