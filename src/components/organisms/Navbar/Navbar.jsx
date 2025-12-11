"use client"

import styles from "./Navbar.module.css"

import { HeaderContext } from "@/context/headerContext";
import Link from "next/link"
import { useContext } from "react";

const linkGroup = [
  {
    title: "Audiobooks",
    links: [
      {
        href: "/audiobook/brginner", label: "Beginner"
      }
    ],
  },
  {
    title: "Pronunciation",
    links: [
      {
        href: "/pronunciation/letter-a", label: "Letter a"
      },
      {
        href: "/pronunciation/letter-a", label: "Letters ee / ea vs. i"
      }
    ],
  },
  {
    title: "Grammar",
    links: [
      {
        href: "/grammar/verb-be", label: "Verb Be"
      },
      {
        href: "/grammar/simple-present", label: "Simple Present"
      },
      {
        href: "/grammar/present-continuous", label: "Present Continuous"
      },
      {
        href: "/grammar/simple-past", label: "Simple Past"
      },
      {
        href: "/grammar/past-continuous", label: "Past Continuous"
      },
      {
        href: "/grammar/present-perfect", label: "Present Perfect"
      },
      {
        href: "/grammar/past-perfect", label: "Past Perfect"
      },
      {
        href: "/grammar/simple-future", label: "Simple Future"
      },
      {
        href: "/grammar/future-continuous", label: "Future Continuous"
      },
      {
        href: "/grammar/future-perfect", label: "Future Perfect"
      },
    ],
  },
  {
    title: "Vocabulary",
    links: [
      {
        href: "/vocabulary/collocations", label: "collocations"
      },
      {
        href: "/vocabulary/homophones", label: "homophones"
      },
      {
        href: "/vocabulary/homohtaphs", label: "homohraphs"
      }
    ],
  },
  
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

export default function NavBar({ }) {
  const {showNavBar} = useContext(HeaderContext)

  return (
    <nav className={`line-break ${styles.nav} ${showNavBar ? "show" : ""}`} >
      {linkGroup.map((group, groupIndex) => (
        <div key={groupIndex}>
          <span className={styles.navTitle}>{group.title}</span>
          <div>
            {group.links.map((item, linkIndex) => (
              <Link key={linkIndex} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  )
}