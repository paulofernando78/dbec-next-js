"use client";

import styles from "./Header.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { HeaderContext } from "@/context/headerContext";
import { Button } from "@/components/atoms/Button";
import { Image } from "@/components/atoms/Image";
import { useState, useContext } from "react";
import { ThemeContext } from "@/context/themeContext";
import { DarkMode, LightMode, LogIn, LogOut } from "@/lib/svg-imports";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  const { showHam, handleClick } = useContext(HeaderContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const pathname = usePathname();
  const isPresentationPage = pathname === "/" || pathname === "/about";

  return (
    <>
      <header className={styles.header}>
        {!isPresentationPage && (
          <div className={styles.menuBtnWrapper}>
            <Button
              icon={<Image src="/assets/img/icons/menu.png" alt="" />}
              onToggle={handleClick}
              active={!showHam}
            ></Button>
          </div>
        )}
        {!isPresentationPage && (
          <Link href="/content">
            <h1 className={styles.logoName}>DAILY BASIS ENGLISH COURSE</h1>
          </Link>
        )}
        {isPresentationPage && (
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>
              HOME
            </Link>
            <Link href="/about" className={styles.navLink}>
              ABOUT
            </Link>
          </nav>
        )}
        <div className={styles.darkLog}>
          <Button
            icon={
              isDarkMode ? (
                <Image
                  src="/assets/img/icons/light.png"
                  alt=""
                  className={styles.light}
                />
              ) : (
                <Image
                  src="/assets/img/icons/dark.png"
                  alt=""
                />
              )
            }
            onToggle={toggleTheme}
            // active={isDarkMode}
          ></Button>
          <Link href={isLoggedIn ? "/" : "/content"}>
            <Button
              icon={
                <Image
                  src="/assets/img/icons/login-out.png"
                  alt=""
                  className={styles.logInOut}

                />
              }
              onToggle={handleLogin}
            ></Button>
          </Link>
        </div>
      </header>
    </>
  );
}
