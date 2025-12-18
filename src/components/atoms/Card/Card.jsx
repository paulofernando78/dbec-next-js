import style from "./Card.module.css"

export const Card = ({children, className }) => {
  return (
    <div className={`${style.card} ${className}`}>
      <strong>{children}</strong>
    </div>
  )
}
