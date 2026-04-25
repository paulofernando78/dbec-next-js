import styles from "./GuessWord.module.css";

import { Button } from "@/components/atoms/Button/Button.jsx"

export const GuessWord = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div>Pics</div>
        <Button />
      </div>
    </div>
  );
};
