import styles from "./AudioPlayer.module.css"

export default function AudioPlayer({ audioSrc }) {
  return (
    <audio controls src={audioSrc} className={styles.audio}></audio>
  )
}