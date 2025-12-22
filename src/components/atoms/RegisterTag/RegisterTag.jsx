import styles from "./RegisterTag.module.css";

export const RegisterTag = ({ children }) => {
  return <span className={styles.tag}>{children}</span>;
};
