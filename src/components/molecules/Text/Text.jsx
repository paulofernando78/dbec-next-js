"use client"

import styles from "./Text.module.css"
import { PlayAudio, StopAudio } from "@/lib/svg-imports"
import Image from "next/image"
import { useState, useRef } from "react"

export default function Text( {
  playAudio,
  children,
  imgSrc,
  imgAlt,
  imgPosition = "left"
   }) {
  const hasImage = Boolean(imgSrc)
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  function handlePlay() {
    audioRef.current?.play()
    setPlaying(true)
  }

  function handleStop() {
    audioRef.current?.pause()
    audioRef.current.currentTime = 0
    setPlaying(false)
  }

  return (
    <div className={[
      hasImage && styles.withImage,
      hasImage && styles[imgPosition]
      ]
      .filter(Boolean)
      .join(" ")}>
        {hasImage && (
          <Image
        src={imgSrc}
        alt={imgAlt}
        width={200}
        height={200}
        className={styles.image}
        />
        )}
      <p>
        {playAudio && (
          playing ? (
            <StopAudio
              className={styles.PlayIcon}
              onClick={handleStop}/>
          ) : (
            <PlayAudio
              className={styles.PlayIcon}
              onClick={handlePlay}
            />
          )
        )}

        {children}

        {playAudio &&
          <audio ref={audioRef} src={playAudio} preload="metadata"
          onEnded={() => setPlaying(false)}
          />

        }
      </p>
    </div>
  )
}