import style from "./Ribbon.module.css"

export const Ribbon = ({ label }) => {
  return (
    <div className={style.ribbon}>
      <span className={style.label}>{label}</span>
    </div>
  )
}