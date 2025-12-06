import Link from "next/link";


import styles from "./Navbar.module.css"

const linkGroup = [
  {
    title: "Audiobook",
    links: [
      { href: "/audiobook/...", label: "..." },
    ]
  },
  {
    title: "Grammar",
    links: [
      { href: "/grammar/verb-be", label: "Verb Be" },
      { href: "/grammar/present-continuous", label: "Present Continuous" },
      { href: "/grammar/simple-present", label: "Simple Present" },
      { href: "/grammar/simple-past", label: "Simple Past" },
      { href: "/grammar/simple-past", label: "Present Perfect" },
      { href: "/grammar/simple-future", label: "Simple Future" },
      { href: "/grammar/present-continuous", label: "Present Continuous" }
    ]
  },
  {
    title: "Pronunciation",
    links: [
      { href: "/pronunciation/letter-a", label: "Letter A" },
    ]
  },
  {
    title: "Course",
    links: [
      { href: "/course/beginner", label: "Beginner" },
      { href: "/course/elementary", label: "Elementary" },
      { href: "/course/intermediate", label: "Pre-Intermediate" },
      { href: "/course/Intermediate", label: "Intermediate" },
      { href: "/course/advanced", label: "Advanced" },
    ]
  }
]

export default function Navbar() {
  return (
      <nav className={`line-break ${styles.nav}`}>
        {linkGroup.map((group, groupIndex) => (
          <div key={groupIndex}>
            <span className={styles.title}>{group.title}</span>
            <div>
              {group.links.map((item, linkIndex) => (
                <Link key={linkIndex} href={item.href} className={styles.navLinks}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
  )
}