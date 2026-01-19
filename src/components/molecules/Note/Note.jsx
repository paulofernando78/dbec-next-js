import styles from "./Note.module.css";

import { InlineText } from "@/components/molecules/InlineText";
import { Card } from "@/components/atoms/Card";
import { Bold } from "@/components/atoms/Bold";

export const Note = ({ lines = [] }) => {
  return (
    <Card className={styles.bg}>
      <span className={styles.note}>
        <Bold>Note</Bold>
      </span>
      <ul>
        {lines.map((line, index) => (
          <li key={index}>
            <InlineText
              text={line.text}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
};
