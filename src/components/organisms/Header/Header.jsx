import Button from "@/components/atoms/Button";
import styles from "./Header.module.css"
import Card from "@/components/atoms/Card";

export default function Header() {
  return (
      <div className={styles.headerWrapper}>
        <Button></Button>
        <h1>DAILY BASIS ENGLISH COURSE</h1>
        <Button></Button>
      </div>
  )
}