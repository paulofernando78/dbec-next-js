import styles from "./Card.module.css";

import { InlineText } from "@/components/molecules/InlineText";

export const Card = ({ texts, className }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {texts.map((t, index) => (
        <p key={index}>
          <InlineText text={t.text} />
        </p>
      ))}
    </div>
  );
};
