import styles from "./AudioPlayer.module.css"

export const AudioPlayer = ({ audioSrc }) => {
  return (
    <audio controls src={audioSrc} className={styles.audio}></audio>
  )
}