"use client";

import styles from "./Navbar.module.css";

import { HeaderContext } from "@/context/headerContext";
import Link from "next/link";
import { useContext } from "react";
import { Attention } from "@/lib/svg-imports";

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
      // Greetings, Introdutions
      {
        href: "/cefr/a1/introductions",
        label: "Introductions",
      },
      // Talk about yourself (Personal Information)
      {
        href: "/cefr/a1/personal-information",
        label: "Talk about yourself (Personal Information)",
      },
      // Daily Routines
      {
        href: "/cefr/a1/daily-routines",
        label: "Talk about you free time",
      },
      // Places & Objects
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
      // Talk about likes and dislikes
      {
        href: "/cefr/a2/",
        label: "Talk about likes and dislikes",
      },
      // Talk about the past
      {
        href: "/cefr/a2/",
        label: "Talk about the past",
      },
      // Talk about plans
      {
        href: "/cefr/a2/",
        label: "Talk about plans",
      },
      // Talk about foods
      {
        href: "/cefr/a2/",
        label: "Talk about foods",
      },
      // Talk about your home
      {
        href: "/cefr/a2/",
        label: "Talk about your home",
      },
      // Give advice
      {
        href: "/cefr/a2/",
        label: "Give advice",
      },
    ],
  },
  // B1 (Intermediate)
  {
    title: "B1 Intermediate",
    links: [
      // Describe the past/tell a story
      {
        href: "/cefr/b1/...",
        label: "Describe the past/tell a story",
      },
      // Talk about learning preferences
      {
        href: "/cefr/b1/...",
        label: "Talk about learning preferences",
      },
      // Speculate about the future
      {
        href: "/cefr/b1/...",
        label: "Speculate about the future",
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
      {
        href: "/cefr/b2/modals",
        label: "...",
      },
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
      // Phonetics + Letters
      {
        attention: true,
        href: "/pronunciation/phonetics-letters",
        label: "Phonetics + Letters",
      },
      // Linked Sounds
      {
        attention: true,
        href: "/pronunciation/linked-sounds",
        label: "Linked Sounds",
      },
      // Sites
      {
        href: "/pronunciation/sites",
        label: "Sites",
      },
    ],
  },
  // VOCABULARY
  {
    title: "VOCABULARY",
    links: [
      // Dentistry
      {
        href: "/vocabulary/dentistry",
        label: "Dentistry",
      },
      // Cooking
      {
        href: "/vocabulary/cooking",
        label: "Cooking",
      },
      // Law
      {
        href: "/vocabulary/law",
        label: "Law",
      },
      // Medicine
      {
        href: "/vocabulary/medicine",
        label: "Medicine",
      },
      // Programming
      {
        href: "/vocabulary/programming",
        label: "Programming",
      },
      // Travel
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
      // The Alphabet
      {
        href: "/reference/the-alphabet",
        label: "The Alphabet",
      },
      // Numbers
      {
        href: "/reference/numbers",
        label: "Numbers",
      },
      // Articles
      {
        href: "/reference/articles",
        label: "Articles",
      },
      // Pronouns
      {
        href: "/reference/pronouns",
        label: "Pronouns",
      },
      // Adjectives
      {
        href: "/reference/adjectives",
        label: "Adjectives",
      },
      // Nouns
      {
        href: "/reference/nouns",
        label: "Nouns",
      },
      // Adverbs
      {
        href: "/reference/adverbs",
        label: "Adverbs",
      },
      // All Verb Tenses
      {
        href: "/reference/all-verb-tenses",
        label: "All Verb Tenses",
      },
      // False Cognates
      {
        href: "/reference/false-cognates",
        label: "False Cognates",
      },
      // Infinitive vs. -ing
      {
        href: "/reference/infinitive-ing",
        label: "Infinitive vs. -ing",
      },
      // Prepositions
      {
        href: "/reference/prepositions",
        label: "Prepositions",
      },
      // Phrasal Verbs
      {
        href: "/reference/phrasal-verbs",
        label: "Phrasal Verbs",
      },
      // Tag Questions
      {
        href: "/reference/tag-questions",
        label: "Tag Questions",
      },
      // Passive Voice
      {
        href: "/reference/passive-voice",
        label: "Passive Voice",
      },
      // Modal Verbs
      {
        href: "/reference/modal-verbs",
        label: "Modal Verbs",
      },
      // Conditonals
      {
        href: "/reference/conditionals",
        label: "Conditionals",
      },
      // Reported Speech
      {
        href: "/reference/reported-speech",
        label: "Reported Speech",
      },
      // Collocations
      {
        href: "/reference/collocations",
        label: "Collocations",
      },
      // To vs. For
      {
        href: "/reference/to-for",
        label: "To vs. For",
      },
      // Homonyns
      {
        href: "/reference/homonyns",
        label: "Homonyns",
      },
      // Expressions
      {
        href: "/reference/expressions",
        label: "Expressions",
      },
      // Which one?
      {
        href: "/reference/which-one",
        label: "Which one?",
      },
      // Word Families
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
                <>
                  <Link key={linkIndex} href={item.href} onClick={closeNavBar}>
                  {item.attention && <Attention className={`${styles.attentionIcon} icon-position`}  />}
                    {item.label}
                  </Link>
                </>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
