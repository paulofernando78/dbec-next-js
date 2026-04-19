import styles from "./Notes.module.css";

import { Card } from "@/components/atoms/Card";
import { Bold } from "@/components/atoms/Bold";

export const Notes = ({ children }) => {
  return (
    <Card className={styles.card}>
      <span className={styles.note}>
        <Bold>Notes</Bold>
      </span>
      {children}
    </Card>
  );
};
