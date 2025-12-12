"use client"

import { HeaderContext } from "@/context/headerContext"
import Button from "@/components/atoms/Button"
import Link from "next/link"
import { useContext } from "react"
import { ThemeContext } from "@/context/themeContext"
import { DarkMode, LightMode } from "@/lib/svg-imports"

export default function Header() {
  const {showHam, handleClick} = useContext(HeaderContext)
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <>
      <header>
        <Button icon="menu" active={showHam} onToggle= {handleClick}></Button>
        <Link href="/">
        <span>DAILY BASIS ENGLISH COURSE</span>
        </Link>
        <Button icon={isDarkMode ? <LightMode /> : <DarkMode />}
        active={isDarkMode}
        onToggle={toggleTheme}
        isActive={true}
        ></Button>
      </header>
    </>
    
  )
}