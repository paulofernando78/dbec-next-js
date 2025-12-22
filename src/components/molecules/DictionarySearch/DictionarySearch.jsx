import styles from "./DictionarySearch.module.css"

import { Button } from "@/components/atoms/Button";

export const DictionarySearch = () => {
  return (
    <div className={styles.wrapper}>
      <input type="text" className={styles.input}/>
      <Button></Button>
    </div>
  )
}
