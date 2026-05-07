import styles from "./MediaLayout.module.css";

export const MediaLayout = ({ children, mediaPosition, className }) => {
  const layoutClass = styles[mediaPosition] ?? styles.left;

  return <div className={`${layoutClass} ${className}`}>{children}</div>;
};
