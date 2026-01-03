import styles from "./Whiteboard.module.css";

export const Whiteboard = ({ title, subtitle, book, lesson, description }) => {
  return (
    <div className={styles.frame}>
      <h1>{title}</h1>
    {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
      {book && <h3 className={styles.book}>{book}</h3>}
      {lesson && <span><strong>{lesson}</strong></span>}
      {description && <span>{description}</span>}
    </div>
  );
};
