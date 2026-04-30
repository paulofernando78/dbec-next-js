import styles from "./Card.module.css";

export const Card = ({ children, className = "", maxContent = false }) => {
  return <div
    className={[
      styles.card,
      maxContent && styles.maxContent,
      className
    ]
    .filter(Boolean)
    .join(" ")
    }>
      {children}
    </div>;
};
