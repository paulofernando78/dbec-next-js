import styles from "./Card.module.css"

export const Card = ({children, className, bold }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {bold ? <strong>{children}</strong> : children}
    </div>
  )
}
