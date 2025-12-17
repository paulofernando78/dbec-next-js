import { Exclamation } from "@/lib/svg-imports"
import style from "./Card.module.css"

export default function Card({ exclamationIcon, children, className }) {
  return (
    <div className={`${style.card} ${className}`}>
      {children}
    </div>
  )
}
