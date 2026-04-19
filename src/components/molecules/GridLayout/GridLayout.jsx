import styles from "./GridLayout.module.css";

export const GridLayout = ({ children }) => {

  return <div className={styles.gridLayout}>{children}</div>;
};
