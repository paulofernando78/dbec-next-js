import styles from "./line-break.module.css"

export const LineBreak = ({ children }) => {
  return <div className={styles.lineBreak}>{children}</div>;
};
