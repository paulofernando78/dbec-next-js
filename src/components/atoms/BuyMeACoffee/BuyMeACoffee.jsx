import styles from "./BuyMeACoffee.module.css"
import { Image } from "@/components/atoms/Image";

export const BuyMeACoffee = ({className}) => {
  return (
    <a
      href="https://buymeacoffee.com/paulofernando78"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.coffee} coffee`}
    >
      <img src="/assets/img/coffee.png" className={styles.img}/>
    </a>
  );
};