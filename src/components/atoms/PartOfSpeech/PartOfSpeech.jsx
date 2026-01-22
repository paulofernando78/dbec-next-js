import styles from "./PartOfSpeech.module.css"

export const PartOfSpeech = ({ children }) => {
  return <span className={styles.partOfSpeech}>{children}</span>;
};
