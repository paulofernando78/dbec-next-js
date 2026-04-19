import styles from "./Stressed.module.css"

export const Stressed = ({ children }) => {
  return <mark className={styles.stressed}>{children}</mark>;
};