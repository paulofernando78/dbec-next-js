"use client"

import styles from "./Text.module.css"
import {  UnderConstruction, Exclamation, Correct, Incorrect } from "@/lib/svg-imports"
import Image from "next/image"
import { Audio } from "@/components/atoms/Audio"

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
  audio,
  bold,
  children
}) => {
  const hasImage = Boolean(imgSrc)

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
        {audio && <Audio src={audio}/>}

        {bold ? <strong className="bold">{children}</strong> : children}
      </p>
    </div>
  )
}