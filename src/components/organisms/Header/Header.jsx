import Button from "@/components/atoms/Button"
import Link from "next/link"

export default function Header() {
  return (
    <header>
      <Button icon="menu" id="btn-menu"></Button>
      <Link href="/">
      <span>DAILY BASIS ENGLISH COURSE</span>
      </Link>
      <Button icon="dark"></Button>
    </header>
  )
}