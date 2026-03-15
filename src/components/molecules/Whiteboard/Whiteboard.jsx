import styles from "./Whiteboard.module.css";

export const Whiteboard = ({
  title,
  subtitle,
  book,
  lesson,
  descriptions,
  description,
}) => {
  const normalizedDescriptions = Array.isArray(descriptions)
    ? descriptions
    : description
      ? [description]
      : [];

  return (
    <div className={styles.frame}>
      <h1>{title}</h1>
      {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
      {book && <h3 className={styles.book}>{book}</h3>}
      {lesson && (
        <span>
          <strong>{lesson}</strong>
        </span>
      )}
      {normalizedDescriptions.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
};
