import styles from "./Note.module.css";

import { InlineText } from "@/components/molecules/InlineText";
import { Card } from "@/components/atoms/Card";
import { Bold } from "@/components/atoms/Bold";

export const Note = ({ items = [], bullet = true }) => {
  return (
    <Card className={styles.bg}>
      <span className={styles.note}>
        <Bold>Note</Bold>
      </span>
      <ul className={bullet ? styles.bulleted : styles.noBullet}>
        {items.map((item, index) => (
          <li key={index}>
            <InlineText
              text={item.text}
              phonetics={item.phonetics}
              portuguese={item.portuguese}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
};
