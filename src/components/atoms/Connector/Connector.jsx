import styles from "./Connector.module.css"

export const Connector = ({ children }) => {
  return <span className={styles.connector}>{children}</span>;
};
