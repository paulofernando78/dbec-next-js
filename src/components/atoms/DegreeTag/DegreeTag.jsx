import styles from "./DegreeTag.module.css"

export const DegreeTag = ({ children }) => {
  return <span className={styles.tag}>{children}</span>;
};
