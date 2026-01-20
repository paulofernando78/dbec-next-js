"use client";

import styles from "./Navbar.module.css";

import { HeaderContext } from "@/context/headerContext";
import Link from "next/link";
import { useContext } from "react";

const links = [
  {
    links: [
      {
        href: "/",
        label: "Home",
      },
      {
        href: "/cefr",
        label: "What's CEFR?",
      },
    ],
  },
  // CEFR
  {
    title: "CEFR",
  },
  // A1 Beginner
  {
    title: "A1 Beginner",
    links: [
      {
        href: "/pronunciation/the-alphabet",
        label: "The Alphabet",
      },
      {
        href: "/cefr/a1/verb-be",
        label: "Verb Be",
      },
      {
        href: "/cefr/a1/possessives",
        label: "Possessives",
      },
      {
        href: "/cefr/a1/simple-present",
        label: "Simple Present (Daily Routines)",
      },
      
      {
        href: "/grammar/past-continuous",
        label: "Past Continuous",
      },

      {
        href: "/grammar/past-perfect",
        label: "Past Perfect",
      },
      {
        href: "/grammar/simple-future",
        label: "Simple Future",
      },
      {
        href: "/grammar/future-continuous",
        label: "Future Continuous",
      },
    ],
  },
  // A2 (Elementary)
  {
    title: "A2 Elementary",
    links: [
      {
        href: "/grammar/simple-present-vs-present-continuous",
        label: "Simple Present vs Present Continuous",
      },
      {
        href: "/grammar/simple-past",
        label: "Simple Past",
      },
      {
        href: "/grammar/present-perfect",
        label: "Present Perfect",
      },
    ],
  },
  // B1 (Intermediate)
  {
    title: "B1 Intermediate",
    links: [
      {
        href: "/cefr/b1/conditionals",
        label: "First Conditional",
      },
    ],
  },
  // B2 (Upper-Intermediate)
  {
    title: "B2 Upper-Intermediate",
    links: [
      {
        href: "/cefr/b2/modals",
        label: "Modals",
      },
      {
        href: "/cefr/b2/future-perfect",
        label: "Future Perfect",
      },
    ],
  },
  // Vocabulary
  {
    title: "Vocabulary",
    links: [
      {
        href: "/vocabulary/numbers",
        label: "Numbers",
      },
      {
        href: "/vocabulary/collocations",
        label: "Collocations",
      },
      {
        href: "/vocabulary/expressions",
        label: "Expressions",
      },
      {
        href: "/vocabulary/homonyns",
        label: "Homonyns",
      },
      {
        href: "/vocabulary/which-one",
        label: "Which one?",
      },
      {
        href: "/grammar/word-families",
        label: "Word Families",
      },
    ],
  },
  // Pronunciation
  {
    title: "Pronunciation",
    links: [
      {
        href: "/pronunciation/phonetics-letters",
        label: "Phonetics + Letters",
      },
      {
        href: "/pronunciation/linked-sounds",
        label: "Linked Sounds",
      },
    ],
  },
  // audiobooks
  {
    title: "Audiobooks",
    links: [
      {
        href: "/audiobooks/starter",
        label: "Starter",
      },
      {
        href: "/audiobooks/beginner",
        label: "...",
      },
    ],
  },
  // Games
  {
    title: "Games",
    links: [
      {
        href: "/games/minecraft",
        label: "Minecraft",
      },
    ],
  },
];

export default function NavBar() {
  const { showNavBar, closeNavBar } = useContext(HeaderContext);

  return (
    <nav
      className={`line-break ${styles.nav} ${showNavBar ? styles.show : ""}`}
    >
      {links.map((group, groupIndex) => (
        <div key={groupIndex}>
          <span className={styles.navTitle}>{group.title}</span>
          {group.links && (
            <div>
              {group.links.map((item, linkIndex) => (
                <Link key={linkIndex} href={item.href} onClick={closeNavBar}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
