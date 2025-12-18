"use client"

import styles from "./Text.module.css"
import { Correct, Exclamation, Incorrect, PlayAudio, StopAudio } from "@/lib/svg-imports"
import Image from "next/image"
import { useState, useRef } from "react"

export const Text = ({
  imgSrc,
  imgAlt,
  imgPosition = "left",
  lang,
  exclamation,
  correct,
  incorrect,
  playAudio,
  bold,
  children
}) => {
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
      <p lang={lang}>

        {exclamation && <Exclamation />}
        {correct && <Correct className="icon-position"/>}
        {incorrect && <Incorrect className="icon-position"/>}
        
        {playAudio && (
          playing ? (
            <StopAudio
              className="icon-position"
              onClick={handleStop}/>
          ) : (
            <PlayAudio
              className="icon-position"
              onClick={handlePlay}
            />
          )
        )}

        {playAudio &&
          <audio ref={audioRef} src={playAudio} preload="metadata"
          onEnded={() => setPlaying(false)}
          />
          
        }



        {bold ? <strong className="bold">{children}</strong> : children}
      </p>
    </div>
  )
}