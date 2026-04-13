import styles from "./BuyMeACoffee.module.css"

export const BuyMeACoffee = ({className}) => {
  return (
    <a
      href="https://buymeacoffee.com/paulofernando78"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.coffee} coffee`}
    >
      ☕ Buy me a coffee
    </a>
  );
};