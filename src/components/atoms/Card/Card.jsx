import style from "./Card.module.css"

export const Card = ({children, className, bold }) => {
  return (
    <div className={`${style.card} ${className}`}>
      {bold ? <strong>{children}</strong> : children}
    </div>
  )
}
