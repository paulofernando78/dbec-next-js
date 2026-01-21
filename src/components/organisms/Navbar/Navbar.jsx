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
  // A1 Beginner
  {
    title: "A1 Beginner",
    links: [
      {
        href: "/cefr/a1/introductions",
        label: "Introductions",
      },
      {
        href: "/cefr/a1/personal-information",
        label: "Personal Information",
      },
      {
        href: "/cefr/a1/daily-routines",
        label: "Daily Routines",
      },
      {
        href: "/cefr/a1/places-objects",
        label: "Places & Objects",
      },
    ],
  },
  // A2 (Elementary)
  {
    title: "A2 Elementary",
    links: [
      {
        href: "/cefr/a2/",
        label: "...",
      },
    ],
  },
  // B1 (Intermediate)
  {
    title: "B1 Intermediate",
    links: [
      {
        href: "/cefr/b1/...",
        label: "...",
      },
    ],
  },
  // B2 (Upper-Intermediate)
  {
    title: "B2 Upper-Intermediate",
    links: [
      {
        href: "/cefr/b2/modals",
        label: "...",
      },
    ],
  },
  // PRONUNCIATION
  {
    title: "PRONUNCIATION",
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
  // VOCABULARY
  {
    title: "EXTRAS",
    links: [
      {
        href: "/vocabulary/dentistry",
        label: "Dentistry",
      },
      {
        href: "/vocabulary/cooking",
        label: "Cooking",
      },
      {
        href: "/vocabulary/medicine",
        label: "Medicine",
      },
      {
        href: "/vocabulary/programming",
        label: "Programming",
      },
      {
        href: "/vocabulary/travel",
        label: "Travel",
      },
    ],
  },
  // REFERENCE
  {
    title: "REFERENCE",
    links: [
      {
        href: "/reference/the-alphabet",
        label: "The Alphabet",
      },
      {
        href: "/reference/numbers",
        label: "Numbers",
      },
      {
        href: "/reference/articles",
        label: "Articles",
      },
      {
        href: "/reference/pronouns",
        label: "Pronouns",
      },
      {
        href: "/reference/adjectives",
        label: "Adjectives",
      },
      {
        href: "/reference/adjectives",
        label: "Nouns",
      },
      {
        href: "/reference/adverbs",
        label: "Adverbs",
      },
      {
        href: "/reference/all-verb-tenses",
        label: "All Verb Tenses",
      },
      {
        href: "/reference/infinitive-ing",
        label: "Infinitive vs. -ing",
      },
      {
        href: "/reference/prepositions",
        label: "Prepositions",
      },
      {
        href: "/reference/phrasal-verbs",
        label: "Phrasal Verbs",
      },
      {
        href: "/reference/tag-questions",
        label: "Tag Questions",
      },
      {
        href: "/reference/passive Voice",
        label: "Passive Voice",
      },
      {
        href: "/reference/modals",
        label: "Modal Verbs",
      },
      {
        href: "/reference/conditionals",
        label: "Conditionals",
      },
      {
        href: "/reference/reported-speech",
        label: "Reported Speech",
      },
      {
        href: "/reference/collocations",
        label: "Collocations",
      },
      {
        href: "/reference/to-for",
        label: "To vs. For",
      },
      {
        href: "/reference/homonyns",
        label: "Homonyns",
      },
      {
        href: "/reference/expressions",
        label: "Expressions",
      },
      {
        href: "/reference/which-one",
        label: "Which one?",
      },
      {
        href: "/reference/word-families",
        label: "Word Families",
      },
    ],
  },
  // // audiobooks
  // {
  //   title: "Audiobooks",
  //   links: [
  //     {
  //       href: "/audiobooks/starter",
  //       label: "Starter",
  //     },
  //     {
  //       href: "/audiobooks/beginner",
  //       label: "...",
  //     },
  //   ],
  // },
  // // Games
  // {
  //   title: "Games",
  //   links: [
  //     {
  //       href: "/games/minecraft",
  //       label: "Minecraft",
  //     },
  //   ],
  // },
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
