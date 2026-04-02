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
        href: "/about",
        label: "About",
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
        href: "/cefr/a1/talk-about-yourself",
        label: "Talk about yourself",
      },
      {
        href: "/cefr/a1/talk-about-your-free-time",
        label: "Talk about your free time",
      },
      {
        href: "/cefr/a1/places-and-objects",
        label: "Places & Objects",
      },
      {
        href: "/cefr/a1/numbers",
        label: "Numbers",
      },
      {
        href: "/cefr/a1/telling-the-time",
        label: "Telling the time",
      },
      {
        href: "/cefr/a1/describe-people",
        label: "Describe people",
      },
      {
        href: "/cefr/a1/audiobooks",
        label: "Audiobooks",
      },
    ],
  },
  // A2 (Elementary)
  {
    title: "A2 Elementary",
    links: [
      {
        href: "/cefr/a2/talk-about-likes-and-dislikes",
        label: "Talk about likes and dislikes",
      },
      {
        href: "/cefr/a2/describe-past-experiences",
        label: "Describe past experiences",
      },
      {
        href: "/cefr/a2/talk-about-your-future-plans",
        label: "Talk about your future plans",
      },
      {
        href: "/cefr/a2/talk-about-food",
        label: "Talk about food",
      },
      {
        href: "/cefr/a2/describe-your-home",
        label: "Describe your home",
      },
      {
        href: "/cefr/a2/give-advice",
        label: "Give advice",
      },
      {
        href: "/cefr/a2/shopping-and-money",
        label: "Shopping and money",
      },
      {
        href: "/cefr/a2/describe-your-neighborhood",
        label: "Describe your neighborhood",
      },
    ],
  },
  // B1 (Intermediate)
  {
    title: "B1 Intermediate",
    links: [
      { href: "/cefr/b1/tell-a-story", label: "Tell a story" },
      { href: "/cefr/b1/express-opinions", label: "Express opinions" },
      { href: "/cefr/b1/compare-things", label: "Compare things" },
      {
        href: "/cefr/b1/hypothetical-situations",
        label: "Hypothetical situations",
      },
      {
        href: "/cefr/b1/describe-problems-and-solutions",
        label: "Describe problems and solutions",
      },
      {
        href: "/cefr/b1/talk-about-health-and-lifestyle",
        label: "Talk about health and lifestyle",
      },
      {
        href: "/cefr/b1/discuss-work-and-study",
        label: "Discuss work and study",
      },
    ],
  },
  {
    title: "B2 Upper-Intermediate",
    links: [
      { href: "/cefr/b2/debate-and-argue", label: "Debate and argue a point" },
      {
        href: "/cefr/b2/formal-vs-informal",
        label: "Formal vs informal register",
      },
      { href: "/cefr/b2/current-events", label: "Discuss current events" },
      { href: "/cefr/b2/complex-emotions", label: "Express complex emotions" },
      {
        href: "/cefr/b2/idiomatic-language",
        label: "Idiomatic language in context",
      },
      {
        href: "/cefr/b2/hypothetical-and-regret",
        label: "Hypothetical and regret structures",
      },
      {
        href: "/cefr/b2/media-and-technology",
        label: "Discuss media and technology",
      },
    ],
  },
  // C1 (Advanced)
  // {
  //   title: "C1 Advanced",
  //   links: [
  //     {
  //       href: "/cefr/c1/videos",
  //       label: "...",
  //     },
  //   ],
  // },
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
                  {item.attention && (
                    <Attention
                      className={`${styles.attentionIcon} icon-position`}
                    />
                  )}
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
