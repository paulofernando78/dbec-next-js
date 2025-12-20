import styles from "./AudioPlayer.module.css"

export const AudioPlayer = ({ src }) => {
  return (
    <audio controls src={src} className={styles.audio}></audio>
  )
}