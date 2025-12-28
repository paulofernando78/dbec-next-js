"use client"

import styles from "./Text.module.css"
import {  UnderConstruction, Exclamation, Correct, Incorrect } from "@/lib/svg-imports"
import Image from "next/image"
import { Audio } from "@/components/atoms/Audio"
import { useState, useRef } from "react"

export const Text = ({
  className,
  imgSrc,
  imgAlt,
  imgPosition = "left",
  lang,
  underConstruction,
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

  function handleEnded() {
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
      <p lang={lang} className={className}>
        {underConstruction && <UnderConstruction className="icon-position"/>}
        {exclamation && <Exclamation />}
        {correct && <Correct className="icon-position"/>}
        {incorrect && <Incorrect className="icon-position"/>}
        {playAudio && <Audio src={playAudio}/>}

        {bold ? <strong className="bold">{children}</strong> : children}
      </p>
    </div>
  )
}