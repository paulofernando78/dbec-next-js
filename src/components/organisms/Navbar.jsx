import Link from "next/link";

const links = [

  {
    href: "/grammar/unit-1",
    label: "Unit 1 - Verb be"
  },
  { href: "/grammar/unit-2",
    label: "Unit 2"
  }
]

export default function Navbar({}) {
  return (
    <div className="line-break">
      <div>
        <span>Content</span>
        <nav className="line-break">
          {links.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}