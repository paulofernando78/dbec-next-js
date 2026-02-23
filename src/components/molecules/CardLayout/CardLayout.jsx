import styles from "./CardLayout.module.css"

export const CardLayout = ({children, mediaPosition}) => {
  const layoutClass = styles[mediaPosition] ?? styles.left

  return (
    <div className={layoutClass}>{children}</div>
  )
}
