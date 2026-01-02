"use client";

import styles from "./Navbar.module.css";

import { HeaderContext } from "@/context/headerContext";
import Link from "next/link";
import { useContext } from "react";

const links = [
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
    title: "Pronunciation",
    links: [
      {
        href: "/pronunciation/the-alphabet",
        label: "The Alphabet",
      },
      {
        href: "/pronunciation/phonetics-letters",
        label: "Letters + Phonetics",
      },
      {
        href: "/pronunciation/linked-sounds",
        label: "Linked Sounds",
      },
    ],
  },
  {
    title: "Grammar",
    links: [
      {
        href: "/grammar/verb-be",
        label: "Verb Be",
      },
      {
        href: "/grammar/simple-present",
        label: "Simple Present",
      },
      {
        href: "/grammar/present-continuous",
        label: "Present Continuous",
      },
      {
        href: "/grammar/simple-past",
        label: "Simple Past",
      },
      {
        href: "/grammar/past-continuous",
        label: "Past Continuous",
      },
      {
        href: "/grammar/present-perfect",
        label: "Present Perfect",
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
      {
        href: "/grammar/future-perfect",
        label: "Future Perfect",
      },
      {
        href: "/grammar/conditionals",
        label: "Conditionals",
      },
      {
        href: "/grammar/word-formation",
        label: "Word Formation",
      },
    ],
  },
  {
    title: "Vocabulary",
    links: [
      {
        href: "/vocabulary/for-to",
        label: "For vs. To",
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
    ],
  },
  // {
  //   title: "Games",
  //   links: [
  //     {
  //       href: "/games/minecraft", label: "Minecraft"
  //     }
  //   ],
  // },

  // {
  //   title: "Course",
  //   links: [
  //     { href: "/course/beginner", label: "Beginner" },
  //     { href: "/course/elementary", label: "Elementary" },
  //     { href: "/course/intermediate", label: "Pre-Int..." },
  //     { href: "/course/Intermediate", label: "Intermediate" },
  //     { href: "/course/advanced", label: "Advanced" },
  //   ],
  // }
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
          <div>
            {group.links.map((item, linkIndex) => (
              <Link key={linkIndex} href={item.href} onClick={closeNavBar}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
