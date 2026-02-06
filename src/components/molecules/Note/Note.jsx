import styles from "./Note.module.css";

import { ContentToken } from "@/components/molecules/ContentToken";
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
            <ContentToken
              text={line.text}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
};
