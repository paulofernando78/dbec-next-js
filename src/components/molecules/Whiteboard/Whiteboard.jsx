import styles from "./Whiteboard.module.css"

export const Whiteboard = ( { title, subtitle, description}) => {
  return (
    <div className={styles.frame}>
      <h2>{title}</h2>
      {subtitle && <h3>{subtitle}</h3>}
      {description && <span>{description}</span>}
      
    </div>
  )
}