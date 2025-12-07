import { Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Button from "@/components/atoms/Button";
import Link from "next/link";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const bebas_Neue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Daily Basis English Course",
  description: "Aulas particulares de inglês",
};

const linkGroup = [
  {
    title: "Audiobook",
    links: [{ href: "/audiobook/...", label: "..." }],
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
      { href: "/grammar/present-continuous", label: "Present Continuous" },
    ],
  },
  {
    title: "Pronunciation",
    links: [{ href: "/pronunciation/letter-a", label: "Letter A" }],
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${bebas_Neue.variable}`}>
        <div className="layout">
          <header>
            <Button icon="menu" id="btn-menu"></Button>
            <Link href="/">
            <span>DAILY BASIS ENGLISH COURSE</span>
            </Link>
            <Button icon="dark"></Button>
          </header>
          <div className="content-wrapper">
            <nav className="line-break">
              {linkGroup.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <span>{group.title}</span>
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
            <main>{children}</main>
          </div>
          <footer>
            <small>© Daily Basis Englih Course 2025</small>
          </footer>
        </div>
      </body>
    </html>
  );
}
