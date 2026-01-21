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
      {
        href: "/cefr/a1/prepositions-of-place",
        label: "Prepositions of Place",
      },
      {
        href: "/cefr/a1/prepositions-of-time",
        label: "Prepositions of Time",
      },
    ],
  },
  // A2 (Elementary)
  {
    title: "A2 Elementary",
    links: [
      {
        href: "/cefr/a2/verb-be-past",
        label: "Verb Be (Past)",
      },
      {
        href: "/cefr/a2/simple-present-vs-present-continuous",
        label: "Simple Present vs Present Continuous",
      },
      {
        href: "/cefr/a2/can-ability",
        label: "Can (Ability)",
      },
      {
        href: "/cefr/a2/simple-past",
        label: "Simple Past",
      },
      {
        href: "/cefr/a2/simple-past",
        label: "Adjectives (Compartive)",
      },
      {
        href: "/cefr/a2/past-continuous",
        label: "Past Continuous",
      },
      {
        href: "/cefr/a2/present-perfect",
        label: "Present Perfect",
      },
      {
        href: "/cefr/a2/simple-future",
        label: "Simple Future (will / Going to)",
      },
      {
        href: "/cefr/a2/future-continuous",
        label: "Future Continuous",
      },
      {
        href: "/cefr/a2/zero-first-conditional",
        label: "Zero / First Conditional",
      },
      {
        href: "/cefr/a2/tag-questions",
        label: "Tag Questions",
      },
      {
        href: "/cefr/a2/phrasal-verbs",
        label: "Phrasal Verbs",
      },
    ],
  },
  // B1 (Intermediate)
  {
    title: "B1 Intermediate",
    links: [
      {
        href: "/cefr/b1/second-third-conditionals",
        label: "Second / Third Conditional",
      },
      {
        href: "/cefr/b1//past-perfect",
        label: "Past Perfect",
      },
    ],
  },
  // B2 (Upper-Intermediate)
  {
    title: "B2 Upper-Intermediate",
    links: [
      {
        href: "/cefr/b2/modals",
        label: "Modals (may, might, etc.)",
      },
      {
        href: "/cefr/b2/reported-speech",
        label: "Reported Speech",
      },
      {
        href: "/cefr/b2/future-perfect",
        label: "Future Perfect",
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
  // Reference
  {
    title: "Reference",
    links: [
      {
        href: "/cefr/a1/the-alphabet",
        label: "The Alphabet",
      },
      {
        href: "/reference/numbers",
        label: "Numbers",
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
        href: "/reference/modals",
        label: "Modal Verbs",
      },
      {
        href: "/reference/phrasal-verbs",
        label: "Phrasal Verbs",
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
        href: "/reference/expressions",
        label: "Expressions",
      },
      {
        href: "/reference/homonyns",
        label: "Homonyns",
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
        <div key={groupIndex} >
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
