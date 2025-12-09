"use client"

import { HeaderContext } from "@/context/headerContext"
import Button from "@/components/atoms/Button"
import Link from "next/link"
import { useTheme } from "next-themes";
import { useState, useContext } from "react"
import { DarkMode, LightMode } from "@/lib/svg-imports"

export default function Header() {
  const {showNavBar, showHam, handleClick} = useContext(HeaderContext)
  const [darkIcon, setDarkIcon] = useState(true)
  const { theme, setTheme } = useTheme();

  return (
    <>
      <header>
        <Button icon="menu" active={showHam} onToggle= {handleClick}></Button>
        <Link href="/">
        <span>DAILY BASIS ENGLISH COURSE</span>
        </Link>
        <Button icon={darkIcon ? <DarkMode /> : <LightMode />}
        active={darkIcon} onToggle={() => { setTheme(theme === "light" ? "dark" : "light"); setDarkIcon(!darkIcon) }} isActive={true}
        ></Button>
      </header>
    </>
    
  )
}