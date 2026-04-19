import styles from "./FlipCard.module.css";

import { Image } from "@/components/atoms/Image";

export const FlipCard = ({
  frontText,
  frontImg,
  frontAlt,
  backText,
  backImg,
  backAlt,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.front}>
          {frontText ? (
            <span className={styles.text}>
              <b>{frontText}</b>
            </span>
          ) : frontImg ? (
            <Image src={frontImg} alt={frontAlt} className={styles.img} />
          ) : (
            <Image
              src="/assets/img/general/question-mark.gif"
              alt="Question mark gif"
              className={styles.placeholderImg}
            />
          )}
        </div>
        <div className={styles.back}>
          {backText && (
            <span className={styles.text}>
              <b>{backText}</b>
            </span>
          )}
          {backImg && <Image src={backImg} alt={backAlt} />}
        </div>
      </div>
    </div>
  );
};
