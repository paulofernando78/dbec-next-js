"use client"

import Link from "next/link"
import { HeaderContext } from "@/context/headerContext"
import { Button}  from "@/components/atoms/Button"
import { useContext } from "react"
import { ThemeContext } from "@/context/themeContext"
import { DarkMode, LightMode } from "@/lib/svg-imports"

import styles from "./Header.module.css"

export default function Header() {
  const {showHam, handleClick} = useContext(HeaderContext)
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <>
      <header>
        <Button icon="menu" active={!showHam} onToggle= {handleClick}></Button>
        <Link href="/">
        <span className={styles.logoName}>DAILY BASIS ENGLISH COURSE</span>
        </Link>
        <Button icon={isDarkMode ? <LightMode /> : <DarkMode />}
        active={isDarkMode}
        onToggle={toggleTheme}
        ></Button>
      </header>
    </>
    
  )
}