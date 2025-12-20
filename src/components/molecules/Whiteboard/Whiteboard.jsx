import styles from "./Whiteboard.module.css";

export const Whiteboard = ({ title, subtitle, book, lesson, description }) => {
  return (
    <div className={styles.frame}>
      <h2>{title}</h2>
    {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
      {book && <h4 className={styles.book}>{book}</h4>}
      {lesson && <span><strong>{lesson}</strong></span>}
      {description && <span>{description}</span>}
    </div>
  );
};
